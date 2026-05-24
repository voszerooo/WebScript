

import { OVN_VALUE_RUNTIME }     from '../../store/value/runtime.js';
import { OVN_GLOBAL_DEBUG }      from '../../store/infra/debug.js';
import { OVN_MODULE_RESOLVER }   from '../../store/core/resolver.js';
import { OVN_GLOBAL_VERIFY }     from '../../store/core/verify.js';


// $ ================================================== ↓ OVN_GLOBAL_SCHEDULER

    const OVN_GLOBAL_SCHEDULER = (() => {
        
        const queue = [];
        let scheduled = false;
        
        const phaseOrder = ["start", "init", "ready", "end"];
        
        function context(mod, options = {}) {
            return {
                url: options.url || location.href,
                runtime: OVN_VALUE_RUNTIME,
                group: OVN_MODULE_RESOLVER.get(mod.group),
                chain: OVN_MODULE_RESOLVER.getChain(mod.key)
            };
        }
        
        function schedule(mod) {
            return (
                (mod.depend && mod.depend.length > 0) ||
                (mod.phase && mod.phase !== "none") ||
                mod.priority > 0
            );
        }
        
        function execute(mod, callback) {
            try {
                callback();
            } catch (err) {
                OVN_GLOBAL_DEBUG?.error?.(mod.key, err?.message);
            }
        }
        
        function flush() {
            
            scheduled = false;
            if (!queue.length) return;
            
            const phaseMap = {
                start: [],
                init: [],
                ready: [],
                end: []
            };
            for (const item of queue) {
                const phase = phaseOrder.includes(item.mod.phase)
                    ? item.mod.phase
                    : "init";
                phaseMap[phase].push(item);
            }
            queue.length = 0;
            
            const runList = (list, phaseName) => {
                for (const item of list) {
                    OVN_GLOBAL_DEBUG?.startTrace?.(
                        item.mod.key,
                        `phase.${phaseName}`
                    );
                    OVN_GLOBAL_DEBUG?.startTrace?.(
                        item.mod.key,
                        `run.exec`
                    );
                    execute(item.mod, item.callback);
                    OVN_GLOBAL_DEBUG?.okTrace?.(
                        item.mod.key,
                        `run.exec`
                    );
                    OVN_GLOBAL_DEBUG?.okTrace?.(
                        item.mod.key,
                        `phase.${phaseName}`
                    );
                }
            };
            
            runList(phaseMap.start, "start");
            runList(phaseMap.init, "init");
            
            if (phaseMap.ready.length || phaseMap.end.length) {
                const runAsync = () => {
                    runList(phaseMap.ready, "ready");
                    runList(phaseMap.end, "end");
                };
                if (document.readyState === "loading") {
                    document.addEventListener("DOMContentLoaded", runAsync, { once: true });
                } else {
                    runAsync();
                }
            }
            
        }
        
        function defer() {
            if (scheduled) return;
            scheduled = true;
            Promise.resolve().then(flush);
        }
        
        function run(key, callback, options = {}) {
            
            if (key === undefined) {
                flush();
                return true;
            }
            
            const realKey = OVN_MODULE_RESOLVER.resolve(key);
            if (!realKey) {
                OVN_GLOBAL_DEBUG?.failTrace?.(key, "resolve", "NOT_FOUND");
                return false;
            }
            const mod = OVN_MODULE_RESOLVER.get(realKey);
            if (!mod) {
                OVN_GLOBAL_DEBUG?.skipTrace?.(realKey, "run", "NO_MODULE");
                return false;
            }
            OVN_GLOBAL_DEBUG?.startTrace?.(realKey, "run");
            
            const ctx = context(mod, options);
            const result = OVN_GLOBAL_VERIFY.check(mod, ctx);
            if (!result.ready) {
                OVN_GLOBAL_DEBUG?.failTrace?.(realKey, "final", result.reason);
                return false;
            }
            if (typeof callback !== "function") {
                OVN_GLOBAL_DEBUG?.failTrace?.(realKey, "run", "NO_FUNC");
                return false;
            }
            
            if (!schedule(mod)) {
                // 直接执行的模块，记录执行时间
                OVN_GLOBAL_DEBUG?.startTrace?.(realKey, "run.exec");
                const startTime = performance.now();
                execute(mod, callback);
                OVN_GLOBAL_DEBUG?.okTrace?.(realKey, "run.exec");
                return true;
            }
            
            queue.push({ mod, callback });
            defer();
            return true;
        }
        
        return { run };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_GLOBAL_SCHEDULER };

