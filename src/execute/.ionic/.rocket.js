

import { OVN_VALUE_PREFS }       from '../../../store/value/prefs.js';
import { OVN_VALUE_RUNTIME }     from '../../../store/value/runtime.js';
import { OVN_VALUE_TEMP }        from '../../../store/value/temp.js';

import { OVN_GLOBAL_DOM }        from '../../../store/infra/dom.js';
import { OVN_MATCH_RULE }        from '../../../store/infra/match.js';
import { OVN_SITE_GROUP }        from '../../../store/infra/rule.js';
import { OVN_OBSERVER_CENTER }   from '../../../store/infra/observer.js';
import { OVN_GLOBAL_INFORM }     from '../../../store/infra/inform.js';
import { OVN_RANDOM_JITTER }     from '../../../store/infra/jitter.js';
import { OVN_GLOBAL_DEBUG }      from '../../../store/infra/debug.js';
import { OVN_GLOBAL_BUTTON }     from '../../../store/infra/button.js';

import { OVN_GLOBAL_CONFIG }     from '../../../store/core/config.js';
import { OVN_CONFIG_MERGE }      from '../../../store/core/config.js';
import { OVN_MODULE_RESOLVER }   from '../../../store/core/resolver.js';
import { OVN_GLOBAL_VERIFY }     from '../../../store/core/verify.js';
import { OVN_GLOBAL_SCHEDULER }  from '../../../store/core/scheduler.js';
import { OVN_SUBJOIN_HOOK }      from '../../../store/core/hook.js';

import { OVN_ADD_CLASS }         from '../../../store/utils/add-class.js';
import { OVN_QUICK_READ }        from '../../../store/utils/quick-read.js';
import { OVN_REMOVE_LIMITS }     from '../../../store/utils/remove-limits.js';
import { OVN_AUTO_LOAD }         from '../../../store/utils/auto-load.js';
import { OVN_AUTO_EXECUTE }      from '../../../store/utils/auto-execute.js';

import wave from './wave.scss';
import scss from './.wave.scss';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("XXXXXXXXXX", () => {
    
    GM_addStyle(wave);
    GM_addStyle(scss);
    
    (function OVN_XXXXXXXXXX_QuickRead() {
        
        OVN_QUICK_READ.apply({
            buttonPrev: '#pnprev',
            buttonNext: '#pnnext',
        });
        
    })();
    
    
    if (OVN_MATCH_RULE.match({ include: [ "XXXXXXXXXX.com" ], exclude: [] })) {
        GM_addStyle( /* css */ `
            html {
                
            }
        `);
    }
    
    // ================================================== ↓ XXXXXXXX
    
        if (OVN_MATCH_RULE.match({
            include: [ "XXXXXXXXXX.com" ], exclude: [ ] })
        ) {
            GM_addStyle( /* css */ `
                html {
                    
                }
            `);
        }
        
});


OVN_GLOBAL_SCHEDULER.run("ovnTable", () => {
    (function OVN_XXXXXXXXXX_ovnTable() {
        
        OVN_ADD_CLASS.apply({
            target: [ ],
            subjoin: [ "ovnTable", ],
        });
        
    })();
});


OVN_GLOBAL_SCHEDULER.run("ovnGrid", () => {
    (function OVN_XXXXXXXXXX_ovnGrid() {
        
        OVN_ADD_CLASS.apply({
            target: [ ],
            subjoin: [ "ovnGrid", "ovnSolid", ],
        });
        
    })();
});

