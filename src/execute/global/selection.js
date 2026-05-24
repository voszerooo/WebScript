

import { OVN_GLOBAL_SCHEDULER }  from '../../store/core/scheduler.js';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("Selection", () => {
    
    GM_addStyle(`
    
        html ::selection {
            color: #E2E2E2 !important;
            background: #454A54 !important;
        }
        
    `);
    
});

