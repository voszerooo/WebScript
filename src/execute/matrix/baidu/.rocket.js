

import { OVN_MATCH_RULE }        from '../../../store/infra/match.js';
import { OVN_GLOBAL_SCHEDULER }  from '../../../store/core/scheduler.js';
import { OVN_QUICK_READ }        from '../../../store/utils/quick-read.js';
import { OVN_ADD_CLASS }         from '../../../store/utils/add-class.js';

import wave from './wave.scss';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("Baidu", () => {
    
    GM_addStyle(wave);
    
    
    (function OVN_Baidu_ovnFocal() {
        
        OVN_ADD_CLASS.apply({
            target: [
                // ".c-container [data-module='title']",
                // ".c-container [class^='title_']",
                // ".c-container h3[class*='title'] a",
                "#container :is(h3.t, h3.cosc-title) > a",
            ],
            subjoin: [ "ovnFocal", "ovnLR", ],
        });
        
    })();
    
    
    // (function OVN_Baidu_QuickRead() {
        
    //     OVN_QUICK_READ.apply({
    //         letterKey: false,
    //         buttonPrev: '#page a.n[class*="prev_"]',
    //         buttonNext: '#page a.n[class*="next_"]',
    //     });
        
    // })();
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*chat.baidu.com/*" ],
        exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html {
                
                &:root body {
                    
                    --ovnChatWidth: calc(var(--ovnSpaceWidthVW) - 00vw);
                    
                }
                
                @media (width >= 1920px) {
                    .cos-pc {
                        --max-conv-width: var(--ovnSpaceWidth02);
                    }
                }
                
            }
        `);
    }
    
    if (OVN_MATCH_RULE.match({
        include: [ "*baike.baidu.com/*" ],
        exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html {
                
                &:root body {
                    --ovnBaikeWidth: calc(var(--ovnSpaceWidthVW) - 05vw);
                }
                
                @media (width >= 2160px) {
                    
                    /* ==================== ↓ Head */
                    
                        .index-module_navBarWrapper__X0DND .index-module_navBarList__iL2jR, 
                        .secondContainer_gkFgZ .secondContent_qd184 {
                            width: var(--ovnBaikeWidth);
                        }
                        .videoListWrap_kQdph.show_c8fQR {
                            opacity: 1;
                            visibility: visible;
                            z-index: 2;
                            max-width: 1120px !important;
                        }
                        .videoListWrap_kQdph .videoListBox_ylJPb {
                            width: 100% !important;
                            max-width: 100%;
                        }
                        .swiper-slide { flex-shrink: revert; }
                        
                    /* ==================== ↓ XXX */
                    
                        .pageWrapper_P6xcA .contentBox_cyrt9 { width: var(--ovnBaikeWidth); }
                        .pageWrapper_P6xcA .mainContent_Zy94E { width: 75%; }
                        
                }
                
            }
        `);
    }
    
});

