

import { OVN_VALUE_TEMP }        from '../../store/value/temp.js';


// $ ================================================== ↓ OVN_MATCH_RULE

    const OVN_MATCH_RULE = (() => {
        
        function escape(p) {
            return p
                .replace(/([.+^${}()|[\]\\])/g, "\\$1")
                .replace(/\*/g, ".*")
                .replace(/^https?:/, "https?:");
        }
        function toRegex(p) {
            return OVN_VALUE_TEMP.compute("regex", p, () => new RegExp("^" + escape(p) + "$", "i"));
        }
        function compile(rule = {}) {
            const inc = rule.include || [];
            const exc = rule.exclude || [];
            const key = inc.join("|") + "::" + exc.join("|");
            return OVN_VALUE_TEMP.compute("compiledMatch", key, () => {
                const i = inc.map(toRegex);
                const e = exc.map(toRegex);
                const all = inc.length === 1 && inc[0] === "*" && exc.length === 0;
                return {
                    test(url) {
                        if (all) return true;
                        return i.some(r => r.test(url)) && !e.some(r => r.test(url));
                    }
                };
            });
        }
        
        function match(rule, url = location.href) {
            return compile(rule).test(url);
        }
        function check(p, t) {
            return toRegex(p).test(t);
        }
        function any(patterns, url = location.href) {
            return patterns.some(p => check(p, url));
        }
        
        return {
            toRegex,
            compile,
            match,
            check,
            any,
        };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_MATCH_RULE };

