

// $ ================================================== ↓ OVN_VALUE_PREFS

    const OVN_VALUE_PREFS = (() => {
        
        function store(prefix) {
            
            const cache = new Map();
            function key(rawKey) {
                return `${prefix}:${rawKey}`;
            }
            
            return {
                has(rawKey) {
                    return cache.has(rawKey);
                },
                get(rawKey, fallbackValue) {
                    if (cache.has(rawKey)) return cache.get(rawKey);
                    const value = GM_getValue(key(rawKey), fallbackValue);
                    if (value !== undefined) cache.set(rawKey, value);
                    return value;
                },
                set(rawKey, value) {
                    cache.set(rawKey, value);
                    GM_setValue(key(rawKey), value);
                },
                delete(rawKey) {
                    cache.delete(rawKey);
                    GM_deleteValue(key(rawKey));
                },
                clear() {
                    cache.clear();
                },
                keys() {
                    return cache.keys();
                }
            };
            
        }
        
        const prefs = store("prefs");
        const hover = store("hover");
        const fold = store("fold");
        const visited = store("visited");
        
        function reset() {
            const allKeys = GM_listValues();
            for (const fullKey of allKeys) {
                if (
                    fullKey.startsWith("prefs:") ||
                    fullKey.startsWith("hover:") ||
                    fullKey.startsWith("fold:") ||
                    fullKey.startsWith("visited:")
                ) {
                    GM_deleteValue(fullKey);
                }
            }
            prefs.clear();
            hover.clear();
            fold.clear();
            visited.clear();
        }
        
        return {
            prefs,
            hover,
            fold,
            visited,
            reset
        };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_VALUE_PREFS };

