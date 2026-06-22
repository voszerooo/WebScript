

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
                clear() { cache.clear(); },
                keys() { return cache.keys(); }
            };
        }
        
        const prefix = [
            'prefs',
            'hover',
            'fold',
            'visited',
            'gallop'
        ];
        const prefixSet = new Set(prefix);
        const stores = Object.create(null);
        for (const name of prefix) { stores[name] = store(name); }
        
        function reset() {
            for (const fullKey of GM_listValues()) {
                const prefix = fullKey.split(':', 1)[0];
                if (prefixSet.has(prefix)) {
                    GM_deleteValue(fullKey);
                }
            }
            for (const name of prefix) {
                stores[name].clear();
            }
        }
        
        return {
            prefs:   stores.prefs,
            hover:   stores.hover,
            fold:    stores.fold,
            gallop:  stores.gallop,
            visited: stores.visited,
            reset
        };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_VALUE_PREFS };

