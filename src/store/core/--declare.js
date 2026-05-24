

// ! ================================================== ↓ OVN_MODULE_DECLARE

function OVN_MODULE_DECLARE(scope, modules, options = {}) {

    if (!scope || typeof modules !== "object") return;

    const match = options.match;
    
    // 检查 match 是否符合
    if (match) {
        const compiledMatch = OVN_MATCH_RULE.compile(match);
        if (!compiledMatch(location.href)) {
            OVN_GLOBAL_DEBUG?.skipTrace?.(scope, "declare", "match not satisfied");
            return;
        }
    }

    if (modules.css) {
        const css = modules.css;
        if (typeof css === "string") {
            GM_addStyle(css);
            OVN_GLOBAL_DEBUG?.okTrace?.(scope, "declare", "CSS injected");
        }
    }
    
    for (const key in modules) {

        if (["css"].includes(key)) continue;

        const fn = modules[key];

        if (typeof fn !== "function") continue;

        try {
            fn();
            OVN_GLOBAL_DEBUG?.okTrace?.(key, "declare", "executed");
        } catch (error) {
            OVN_GLOBAL_DEBUG?.error?.(key, error?.message);
        }

    }
    
}

// ! ================================================== ↓ End

export { OVN_MODULE_DECLARE };