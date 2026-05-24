

import { OVN_VALUE_PREFS }       from '../../store/value/prefs.js';
import { OVN_VALUE_TEMP }        from '../../store/value/temp.js';


// $ ================================================== ↓ OVN_VALUE_RUNTIME

    const OVN_VALUE_RUNTIME = (() => {
        
        function get(flagKey, defaultValue = true) {
            const storedValue = OVN_VALUE_PREFS.prefs.get(flagKey, undefined);
            if (storedValue === undefined) return defaultValue;
            return !!storedValue;
        }
        function set(flagKey, newValue) {
            const previousValue = get(flagKey);
            const nextValue = !!newValue;
            if (previousValue === nextValue) return nextValue;
                OVN_VALUE_PREFS.prefs.set(flagKey, nextValue);
            return nextValue;
        }
        
        function toggle(flagKey) {
            return set(flagKey, !get(flagKey));
        }
        
        function group(flagKey) {
            return get(flagKey, true);
        }
        function chain(flagKeyList) {
            return flagKeyList.every(key => get(key, true));
        }
        
        function snapshot() {
            return {
                cache: OVN_VALUE_TEMP.snapshot()
            };
        }
        function restore(snapshotData) {
            if (!snapshotData) return;
            OVN_VALUE_TEMP.restore(snapshotData.cache);
        }
        
        return {
            get,
            set,
            toggle,
            group,
            chain,
            snapshot,
            restore
        };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_VALUE_RUNTIME };

