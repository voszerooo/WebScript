

import { OVN_GLOBAL_SCHEDULER }  from '../../store/core/scheduler.js';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("ScrollBar", () => {
    
    GM_addStyle( /* css */ `
    
        ::-webkit-scrollbar {
            width: 5px !important;
            height: 5px !important;
            scroll-behavior: smooth !important;
            border-radius: 100vmax !important;
        }
        
        /* ========== 滑块 */
        
            ::-webkit-scrollbar-thumb {
                background: hsla(var(--ovnBase05HSL), .4) !important;
                border-radius: 100vmax !important;
            }
            ::-webkit-scrollbar-thumb:vertical { background-image: "" !important;}
            ::-webkit-scrollbar-thumb:horizontal { background-image: "" !important;}
            
            ::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(
                    90deg,
                    hsla(var(--ovnGlow05HSL), 1),
                    hsla(var(--ovnGlow05HSL), 1),
                    hsla(var(--ovnGlow03HSL), 1)
                ) !important;
            }
            
        /* ========== 背景 */
        
            ::-webkit-scrollbar-track {
                background: transparent !important;
                border-radius: 100vmax !important;
            }
            
        ::-webkit-resizer,               /* ==== 拖拽调节器 */
        ::-webkit-scrollbar-button,      /* ==== 两端调节按钮 */
        ::-webkit-scrollbar-corner,      /* ==== 交汇处角落方块 */
        ::-webkit-scrollbar-track-piece  /* ==== 滑块以外轨道 */ {
            display: none !important;
        }
        
    `);
    
});

