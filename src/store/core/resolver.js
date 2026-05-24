

import { OVN_MATCH_RULE }        from '../../store/infra/match.js';
import { OVN_GLOBAL_CONFIG }     from '../../store/core/config.js';


// $ ================================================== ↓ OVN_MODULE_RESOLVER

    const OVN_MODULE_RESOLVER = (() => {
        
        const flat = {};
        const tree = {};
        
        function normalizeMatch(matchRaw) {
            if (!matchRaw) return null;
            if (typeof matchRaw === "string") {
                return { include: [matchRaw], exclude: [] };
            }
            if (Array.isArray(matchRaw)) {
                return { include: matchRaw, exclude: [] };
            }
            return {
                include: matchRaw.include || [],
                exclude: matchRaw.exclude || [],
            };
        }
        
        function createModule({ raw, path, parent }) {
            const name = path[path.length - 1];
            return {
                key: parent ? `${parent.key}_${name}` : name,
                id: path.join("_"),
                parent,
                children: [],
                name: raw.name || "",
                feature: raw.feature || "",
                fold: raw.fold || false,
                state: raw.state !== undefined ? raw.state : (parent ? undefined : true),
                default: raw.default ?? true,
                block: raw.block || [],
                match: normalizeMatch(raw.match),
                phase: raw.phase || null,
                priority: raw.priority || 0,
                depend: raw.depend || [],
                group: null,
            };
        }
        function applyInherit(mod) {
            let parent = mod.parent;
            while (parent) {
                if (!mod.match && parent.match) {
                    mod.match = parent.match;
                }
                parent = parent.parent;
            }
        }
        
        function buildModule(raw, path, parent) {
            const module = createModule({ raw, path, parent });
            flat[module.key] = module;
            for (const prop in raw) {
                const value = raw[prop];
                if (typeof value !== "object") continue;
                if ([
                    "name", "feature", "match", "state", "default",
                    "fold", "block", "priority", "depend", "phase"
                ].includes(prop)) continue;
                module.children.push(buildModule(value, [...path, prop], module));
            }
            
            module.group = module.parent
                ? module.parent.group || module.parent.key
                : module.key;
            applyInherit(module);
            
            if (module.match) {
                module.compiledMatch = OVN_MATCH_RULE.compile(module.match);
            }
            return module;
        }
        
        function resolve(key) {
            if (flat[key]) return key;
            const tailMatches = [];
            for (const flatKey in flat) {
                if (flatKey.endsWith(`_${key}`)) tailMatches.push(flatKey);
            }
            if (tailMatches.length === 1) return tailMatches[0];
            
            for (const flatKey in flat) {
                if (flat[flatKey].group === key) return flatKey;
            }
            return null;
        }
        
        function getGroup(key) {
            const module = flat[key];
            return module?.group || null;
        }
        function getChain(key) {
            const chain = [];
            let current = flat[key];
            while (current) {
                chain.unshift(current.key);
                current = current.parent;
            }
            return chain;
        }
        
        for (const rootKey in OVN_GLOBAL_CONFIG) {
            if (rootKey === "debug") continue;
            tree[rootKey] = buildModule(OVN_GLOBAL_CONFIG[rootKey], [rootKey], null);
        }
        
        return {
            get: (key) => flat[key],
            getFlat: () => flat,
            getTree: () => tree,
            getGroup,
            getChain,
            resolve,
        };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_MODULE_RESOLVER };

