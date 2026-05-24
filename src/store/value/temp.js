


// $ ================================================== ↓ OVN_VALUE_TEMP

    const OVN_VALUE_TEMP = (() => {
        
        let version = 0;
        let _debug = null;
        
        const store = {
            regex: new Map(),
            match: new Map(),
            chain: new Map(),
            compiled: new Map()
        };
        
        function get(type, key) {
            const map = store[type];
            if (!map) return;
            
            const item = map.get(key);
            if (!item) return;
            if (item.version !== version) {
                map.delete(key);
                return;
            }
            return item.value;
        }
        
        function set(type, key, value) {
            const map = store[type];
            if (!map) return;
            map.set(key, {
                value,
                version
            });
        }
        
        function compute(type, key, create) {
            const cached = get(type, key);
            if (cached !== undefined) return cached;
            
            const value = create();
            set(type, key, value);
            return value;
        }
        
        function clear(type) {
            if (!type) {
                Object.values(store).forEach(map => map.clear());
                return;
            }
            store[type]?.clear();
        }
        
        function bump(reason = "unknown") {
            version++;
            _debug?.startTrace?.("cache", "cache.bump");
            _debug?.okTrace?.("cache", "cache.bump");
            
            if (_debug?.enabled) {
                _debug?.log?.(
                    "cache",
                    "CACHE_BUMP",
                    0,
                    {
                        version,
                        reason
                    }
                );
            }
        }
        
        function snapshot() {
            return { version };
        }
        function restore(data) {
            if (!data) return;
            version = data.version;
            clear();
            _debug?.okTrace?.("cache", "restore", {
                version
            });
        }
        
        return {
            get,
            set,
            compute,
            clear,
            bump,
            snapshot,
            restore,
            
            setDebug: (dbg) => { _debug = dbg; }
        };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_VALUE_TEMP };

