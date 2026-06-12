// ==UserScript==


// @name                      Global.TEST
// @description               __DESCRIPTION__
// @version                   0.0.1
// @author                    __AUTHOR__
// @icon                      https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png
// @sourceXXX                 __SOURCE__

// @match                     *
// @include                   *
// @exclude                   XXXXX
// @grant                     GM_addStyle
// @grant                     GM_registerMenuCommand
// @grant                     GM_getValue
// @grant                     GM_setValue
// @grant                     GM_listValues
// @grant                     GM_deleteValue
// @grant                     GM_xmlhttpRequest
// @run-at                    document-start


// ==/UserScript==


(function() {
    
    const OVN_MATCH_RULE = (() => {
        function escape(p) {
            return p
                .replace(/([.+^${}()|[\]\\])/g, "\\$1")
                .replace(/\*/g, ".*")
                .replace(/^https?:/, "https?:");
        }
        function toRegex(p) {
            return new RegExp("^" + escape(p) + "$", "i");
        }
        function compile(rule = {}) {
            const inc = rule.include || [];
            const exc = rule.exclude || [];
            const i = inc.map(toRegex);
            const e = exc.map(toRegex);
            const all = inc.length === 1 && inc[0] === "*" && exc.length === 0;
            return {
                test(url) {
                    if (all) return true;
                    return i.some(r => r.test(url)) && !e.some(r => r.test(url));
                }
            };
        }
        function match(rule, url = location.href) {
            return compile(rule).test(url);
        }
        return { toRegex, compile, match };
    })();
    
    
    if (OVN_MATCH_RULE.match({ include: ["*"], exclude: [] })) {
        
        (function OVN_Test() {
            
            
            
            
            
        })();
        
    }
    
})();

