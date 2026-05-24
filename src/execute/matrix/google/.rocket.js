

import { OVN_MATCH_RULE }        from '../../../store/infra/match.js';
import { OVN_GLOBAL_SCHEDULER }  from '../../../store/core/scheduler.js';
import { OVN_ADD_CLASS }         from '../../../store/utils/add-class.js';
import { OVN_QUICK_READ }        from '../../../store/utils/quick-read.js';

import wave from './wave.scss';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("Google", () => {
    
    GM_addStyle(wave);
    
    (function OVN_Google_ovnFocal() {
        
        OVN_ADD_CLASS.apply({
            target: [
                ".V9tjod h3.LC20lb",
            ],
            subjoin: [ "ovnFocal", "ovnLR", ],
        });
        
    })();
    
    
    (function OVN_Google_QuickRead() {
        
        OVN_QUICK_READ.apply({
            buttonPrev: '#pnprev',
            buttonNext: '#pnnext',
        });
        
    })();
    
    
    if (OVN_MATCH_RULE.match({ include: [ "*mail.google.com/*" ], exclude: [] })) {
        
        GM_addStyle( /* css */ `
        
            html {
                .mt-actions-container .ms-quick-actions-button.new-logo { display: none; }
                .mt-tool .mt-tool-button .mt-tool-icon { background: transparent; }
                #mailtrack-menu-opener .mt-logo > svg.mt-svg-icon { display: none; }
            }
            
        `);
        
    }
    
    
    if (OVN_MATCH_RULE.match({ include: [ "*google.com/search/about-this-result*", ], exclude: [] })) {
        
        GM_addStyle( /* css */ `
        
            html :is(.gs3qud, .dzz8Xc) { background: transparent; }
            
        `);
        
    }
    
});

