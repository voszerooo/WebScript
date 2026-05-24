

import { OVN_GLOBAL_SCHEDULER }  from '../../../store/core/scheduler.js';
import { OVN_ADD_CLASS }         from '../../../store/utils/add-class.js';
import { OVN_QUICK_READ }        from '../../../store/utils/quick-read.js';

import wave from './wave.scss';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("Bing", () => {
    
    GM_addStyle(wave);
    
    
    (function OVN_Bing_ovnFocal() {
        
        OVN_ADD_CLASS.apply({
            target: [
                "#b_results > li.b_algo h2 > a",
                "#b_results .b_vList a .b_suggestionText",
            ],
            subjoin: [ "ovnFocal", "ovnLR", ],
        });
        
    })();
    
    
    (function OVN_Bing_QuickRead() {
        
        OVN_QUICK_READ.apply({
            letterKey: false,
            buttonPrev: 'nav[role="navigation"] .b_widePag > .sw_prev',
            buttonNext: 'nav[role="navigation"] .b_widePag > .sw_next',
        });
        
    })();
    
    
});

