

import { OVN_VALUE_PREFS }       from './value/prefs.js';
import { OVN_VALUE_RUNTIME }     from './value/runtime.js';
import { OVN_VALUE_TEMP }        from './value/temp.js';

import { OVN_GLOBAL_DOM }        from './infra/dom.js';
import { OVN_MATCH_RULE }        from './infra/match.js';
import { OVN_SITE_GROUP }        from './infra/rule.js';
import { OVN_OBSERVER_CENTER }   from './infra/observer.js';
import { OVN_GLOBAL_INFORM }     from './infra/inform.js';
import { OVN_RANDOM_JITTER }     from './infra/jitter.js';
import { OVN_GLOBAL_DEBUG }      from './infra/debug.js';
import { OVN_GLOBAL_BUTTON }     from './infra/button.js';
// import { OVN_GLOBAL_POPUP }      from './infra/popup.js';

import { OVN_GLOBAL_CONFIG }     from './core/config.js';
import { OVN_MODULE_RESOLVER }   from './core/resolver.js';
import { OVN_GLOBAL_VERIFY }     from './core/verify.js';
import { OVN_GLOBAL_SCHEDULER }  from './core/scheduler.js';
import { OVN_SUBJOIN_HOOK }      from './core/hook.js';
// import { OVN_MODULE_DECLARE }    from './core/declare.js';
// import { OVN_MODULE_FRAME }      from './core/frame.js';

import { OVN_ADD_CLASS }         from './utils/add-class.js';
import { OVN_QUICK_READ }        from './utils/quick-read.js';
import { OVN_REMOVE_LIMITS }     from './utils/remove-limits.js';
import { OVN_AUTO_LOAD }         from './utils/auto-load.js';
import { OVN_AUTO_EXECUTE }      from './utils/auto-execute.js';
import { OVN_BATCH_LOAD }        from './utils/batch-load.js';


// $ ================================================== ↓ DERIVE

    const OVN = {
        
        PREFS: OVN_VALUE_PREFS,
        RUNTIME: OVN_VALUE_RUNTIME,        // & OVN_VALUE_PREFS          OVN_VALUE_TEMP
        REDIS: OVN_VALUE_TEMP,
        
        DOM: OVN_GLOBAL_DOM,               // & OVN_OBSERVER_CENTER
        MATCH: OVN_MATCH_RULE,             // & OVN_VALUE_TEMP
        SITE: OVN_SITE_GROUP,
        OBSERVER: OVN_OBSERVER_CENTER,
        INFORM: OVN_GLOBAL_INFORM,         // & OVN_VALUE_PREFS          OVN_GLOBAL_DOM
        RANDOM: OVN_RANDOM_JITTER,
        DEBUG: OVN_GLOBAL_DEBUG,           // & OVN_OBSERVER_CENTER      OVN_GLOBAL_CONFIG        OVN_MODULE_RESOLVER
        BUTTON: OVN_GLOBAL_BUTTON,         // & OVN_VALUE_RUNTIME        OVN_GLOBAL_DOM           OVN_GLOBAL_INFORM
        
        CONFIG: OVN_GLOBAL_CONFIG,         // & OVN_SITE_GROUP
        RESOLVER: OVN_MODULE_RESOLVER,     // & OVN_MATCH_RULE           OVN_GLOBAL_CONFIG
        VERIFY: OVN_GLOBAL_VERIFY,         // & OVN_MATCH_RULE           OVN_GLOBAL_DEBUG
        SCHEDULER: OVN_GLOBAL_SCHEDULER,   // & OVN_GLOBAL_DEBUG         OVN_MODULE_RESOLVER      OVN_GLOBAL_VERIFY
        HOOK: OVN_SUBJOIN_HOOK,
        
        ADD_CLASS: OVN_ADD_CLASS,          // & OVN_VALUE_PREFS          OVN_OBSERVER_CENTER
        QUICK_READ: OVN_QUICK_READ,
        REMOVE_LIMITS: OVN_REMOVE_LIMITS,  // & OVN_OBSERVER_CENTER
        AUTO_LOAD: OVN_AUTO_LOAD,          // & OVN_RANDOM_JITTER
        AUTO_EXECUTE: OVN_AUTO_EXECUTE,    // & OVN_RANDOM_JITTER        OVN_GLOBAL_DEBUG
        BATCH_LOAD: OVN_BATCH_LOAD,        // & OVN_RANDOM_JITTER
        
    };
    
// $ ================================================== ↓ END

    window.OVN = OVN; export { OVN };
    
    