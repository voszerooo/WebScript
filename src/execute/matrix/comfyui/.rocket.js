

import { OVN_GLOBAL_SCHEDULER }  from '../../../store/core/scheduler.js';

import wave from './wave.scss';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("ComfyUI", () => {
    
    GM_addStyle(wave);
    
});


OVN_GLOBAL_SCHEDULER.run("manager", () => {
    
    (function OVN_ComfyUI_manager() {
        GM_addStyle( /* css */ `
        
            html #cm-manager-dialog {
                
                --ovnColumnH: 40px;
                --ovnRadiusS: var(--ovnUIRadius);
                --ovnRadiusM: var(--ovnPanelRadius);
                --ovnRadiusL: var(--ovnSurfaceRadius);
                --ovnFont: var(--ovnCodeFont);
                --ovnMappingText: var(--p-text-muted-color, #FFFFFFCC);
                --ovnMappingBase: var(--p-dialog-background, #00000040);
                --ovnMappingButtonBase: var(--p-listbox-option-focus-background, #00000050);
                --ovnMappingInputBase: var(--p-inputtext-background, #00000050);
                --ovnMappingBorder: 1px solid var(--p-select-border-color, #FFFFFF20);
                --ovnMappingBorderColor: var(--p-dialog-border-color, #FFFFFF20);
                
                width: 50vw;
                height: 50vh;
                
            }
            
            html .comfy-modal {
                padding: 40px 20px;
                padding-bottom: 20px;
                border: 2px solid var(--p-dialog-border-color, #FFFFFF20);
                background-color: var(--p-dialog-background, #00000040);
                box-shadow: none;
                border-radius: var(--ovnSurfaceRadius);
                font-family: var(--ovnCodeFont);
            }
            
            html .comfy-modal-content {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            html .cm-title, html #cm-close-button {
                width: calc(100% - 40px);
                height: calc(var(--ovnColumnH) * 2);
                background-color: var(--ovnMappingButtonBase);
                border-radius: var(--ovnRadiusM);
            }
            html body #cm-close-button {
                position: sticky;
                bottom: 0;
                overflow: visible;
                flex-shrink: 0;
                height: calc(var(--ovnColumnH) + 20px);
                box-shadow: 0 10px 25px 0 #00000020;
                border-radius: var(--ovnRadiusM);
            }
            
            html .cm-title > font { color: var(--ovnMappingText); }
            
            html .cm-menu-container {
                display: flex;
                justify-content: space-around;
                gap: 20px;
                width: calc(100% - 40px);
                padding: 10px 0;
            }
            
            html .cm-menu-column {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                width: auto;
            }
            html .cm-menu-column > br:first-of-type { display: none; }
            
            html .comfy-modal input, html .comfy-modal select {
                height: var(--ovnColumnH);
                padding-left: 8px;
                border: var(--ovnMappingBorder);
                font-family: var(--ovnFont);
                font-size: .9em;
                color: var(--ovnMappingText);
                background-color: var(--ovnMappingInputBase);
                border-radius: var(--ovnRadiusS);
            }
            
            html .comfy-btn,
            html .comfy-menu > button,
            html .comfy-menu-btns button,
            html .comfy-menu .comfy-list button,
            html .comfy-modal button {
                margin-top: 4px;
                height: var(--ovnColumnH);
                border: var(--ovnMappingBorder);
                color: var(--ovnMappingText);
                font-family: var(--ovnFont);
                background-color: var(--ovnMappingButtonBase);
                border-radius: var(--ovnRadiusS);
            }
            html .comfy-btn:hover:not(:disabled),
            html .comfy-menu > button:hover,
            html .comfy-menu-btns button:hover,
            html .comfy-menu .comfy-list button:hover,
            html .comfy-modal button:hover,
            html .comfy-menu-actions button:hover {
                border: var(--ovnMappingBorder);
                background-color: var(--ovnMappingButtonBase);
                will-change: auto;
            }
            
            html #cm-manual-button, html #cm-nodeinfo-button { height: var(--ovnColumnH); }
            html #workflowgallery-button {height: calc(var(--ovnColumnH) + 20px); }
            
            html .cm-notice-board {
                border: var(--ovnMappingBorder);
                color: #626262;
                font-size: 14px;
                border-radius: var(--ovnRadiusM);
            }
            
            html .cm-experimental { border: var(--ovnMappingBorder); }
            html .cm-experimental-legend { line-height: 1.7;}
            html .cm-experimental-legend, html .cm-button-red { background-color: #B52121 !important;}
            
            html .comfy-modal p { color: var(--ovnMappingText) !important; }
            html .comfy-modal p, html .cm-experimental-button, html .cm-button, html #cm-nodeinfo-button {
                font-size: .9em !important;
            }
            
        `);
    })();
    
});


OVN_GLOBAL_SCHEDULER.run("crystools", () => {
    
    (function OVN_ComfyUI_crystools() {
        GM_addStyle( /* css */ `
        
            /* 
            html .comfyui-menu-right > .flex > .comfyui-button-group:nth-child(2) { order: 1; flex-shrink: 0; }
            html .comfyui-menu-right > .flex > .comfyui-button-group { order: 2; flex-shrink: 0; }
            
            html .comfyui-menu #crystools-monitors-root {
            
                --ovnRadiusS: var(--ovnBaseRadius);
                
                order: 0;
                margin: 0 auto;
                flex: 0 1 auto;
                */
                    
            html .comfyui-menu #crystools-monitors-root {
            
                --ovnFontSize: 8px;
                --ovnRadiusS: 3px;
                
                position: fixed;
                top: calc( var(--navHeight) + var(--rgHeight) + 5px );
                left: 50%;
                transform: translateX(-50%);
                width: max-content;
                
                .crystools-monitor {
                    /* display: flex !important; */
                    align-content: center;
                    justify-content: center;
                    border-radius: var(--ovnRadiusS);
                    background: transparent;
                }
                
                .crystools-monitor[class*="Crystools.ShowRam"] { 
                    order: 1 !important; .crystools-slider { background: #ef5f19 !important; }
                }
                .crystools-monitor[class*="Crystools.ShowCpu"] { 
                    order: 2 !important; .crystools-slider { background: #b5e70d !important; }
                }
                .crystools-monitor[class*="Crystools.ShowGpuUsageZero"] { 
                    order: 3 !important; .crystools-slider { background: #45d911 !important; }
                }
                .crystools-monitor[class*="Crystools.ShowGpuVramZero"] { 
                    order: 4 !important; .crystools-slider { background: #00F29C !important; }
                }
                .crystools-monitor[class*="Crystools.ShowGpuTemperatureZero"] { 
                    order: 5 !important; .crystools-slider { background: #8576f7 !important; }
                }
                .crystools-monitor[class*="Crystools.ShowHdd"] { 
                    order: 6 !important; .crystools-slider { background: #475295 !important; }
                }
                
                .crystools-slider {
                    border-radius: var(--ovnRadiusS);
                }
                
                /* .crystools-monitor .crystools-content {
                    display: flex;
                    width: 8vw;
                    max-width: 260px;
                    height: 12px;
                } */
                .crystools-monitor .crystools-content {
                    display: flex;
                    width: calc( 100vw / 5 - 126px );
                    height: var(--ovnFontSize);
                    background: #0d0f1499 !important;
                }
                
                .crystools-monitor .crystools-text {
                    bottom: auto;
                    margin-left: 0;
                    color: #FFF;
                    font-size: var(--ovnFontSize);
                    font-weight: 700;
                }
                
                .crystools-label {
                    top: 0;
                    right: 10px;
                    font-size: var(--ovnFontSize);
                    font-weight: 700;
                }
                
            }
        
        `);
    })();
    
});


OVN_GLOBAL_SCHEDULER.run("rgthree", () => {
    
    (function OVN_ComfyUI_rgthree() {
        GM_addStyle( /* css */ `
        
            html rgthree-progress-bar { height: var(--rgHeight) !important; }
            
            html rgthree-progress-bar {
                --rgthree-progress-bg-color: #171717cc;
                --rgthree-progress-nodes-bg-color: #524AF7cc;
                --rgthree-progress-steps-bg-color: #1dffb7cc;
                --rgthree-progress-error-bg-color: #e3520ccc;
            }
            
        `);
    })();
    
});

