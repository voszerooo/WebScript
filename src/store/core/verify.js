

import { OVN_MATCH_RULE }        from '../../store/infra/match.js';
import { OVN_GLOBAL_DEBUG }      from '../../store/infra/debug.js';


// $ ================================================== ↓ OVN_GLOBAL_VERIFY

    const OVN_GLOBAL_VERIFY = (() => {
        
        function done() { return { ready: true }; }
        function fail(reason) { return { ready: false, reason }; }
        
        function block(mod, ctx) {
            const blockList = ctx.group?.block;
            if (!blockList?.length) return done();
            
            const matched = blockList.some(pattern => OVN_MATCH_RULE.check(pattern, ctx.url));
            return matched ? fail("BLOCK") : done();
        }
        function match(mod, ctx) {
            if (!mod.match) return done();
            const matched = mod.compiledMatch.test(ctx.url);
            return matched ? done() : fail("MATCH");
        }
        function chain(mod, ctx) {
            for (const key of ctx.chain) {
                const stateVal = ctx.runtime.get(key, true);
                if (stateVal === false) return fail("CHAIN");
            }
            if (mod.depend?.length) {
                const dependOk = ctx.runtime.chain(mod.depend);
                if (!dependOk) return fail("DEPEND");
            }
            return done();
        }
        function state(mod, ctx) {
            const stateVal = ctx.runtime.get(mod.key, mod.state ?? true);
            return stateVal === false ? fail("STATE") : done();
        }
        
        function check(mod, ctx) {
            const steps = [
                ["block", block],
                ["match", match],
                ["state", state],
                ["chain", chain],
            ];
            for (const [name, handler] of steps) {
                OVN_GLOBAL_DEBUG?.startTrace?.(mod.key, name);
                const result = handler(mod, ctx);
                if (!result.ready) {
                    OVN_GLOBAL_DEBUG?.failTrace?.(mod.key, name, result.reason);
                    return result;
                }
                OVN_GLOBAL_DEBUG?.okTrace?.(mod.key, name);
            }
            return done();
        }
        
        return { check };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_GLOBAL_VERIFY };

