

import { OVN_SITE_GROUP }        from '../../store/infra/rule.js';
import { OVN_SUBJOIN_HOOK }      from '../../store/core/hook.js';


// $ ================================================== ↓ OVN_GLOBAL_CONFIG

    const OVN_GLOBAL_CONFIG = {
        
        debug: false,
        
        Global: {
            
            fold: false,
            block: [ ],
            
            ScrollBar: {
                name: "客制化滚动条",
                feature: "滚动条样式 个性化",
                match: { include: [ "*" ], exclude: [ ] },
            },
            LoaderBar: {
                name: "顶部加载条",
                feature: "全局顶部植入 加载进度条 => 进度条",
                match: { include: [ "*" ], exclude: [ ] },
            },
            Gallop: {
                feature: "浮光掠影‌  走马观花",
                match: { include: [ "*" ], exclude: [ ] },
            },
            Preview: {
                match: { include: [ "*" ], exclude: [ ] },
            },
            CustomICON: {
                feature: "站点 ICO 替换 | 书签栏 > DeepSeek > HUA! 黑鲸",
                match: { include: [ "*" ], exclude: [ ] },
                phase: "end",
            },
            Selection: {
                feature: "原生鼠标选取样式 个性化",
                match: { include: [ "*" ], exclude: [ "*yuque.com/*" ] },
            },
            FontStyle: {
                feature: "字体样式 | 可去 FontStyle 重定义所需站点/变更应用已安装的某款字体",
                match: {
                    include: [
                        
                        "file:///*",
                        "*iconfont.cn/*",
                        "*emojiall.com/*",
                        "*greasyfork.org/*",
                        "*juejin.cn/*",
                        "*wikipedia.org/*",
                        "*prompts.chat/*",
                        
                        ...OVN_SITE_GROUP.Chat,
                        ...OVN_SITE_GROUP.ProgDev,
                        ...OVN_SITE_GROUP.Manage,
                        ...OVN_SITE_GROUP.Search,
                        ...OVN_SITE_GROUP.Media,
                        
                    ],
                    exclude: [
                        
                        "*youtube.com/*",
                        
                        ...OVN_SITE_GROUP.Font,
                        
                    ]
                }
            },
            
        },
        
        Matrix: {
            
            fold: false,
            block: [ ],
            
            Search: {
                
                fold: true,
                
                Baidu: {
                    match: { include: [ "*baidu.com/*" ], exclude: [ ] },
                },
                Google: {
                    match: { include: [ "*Google.com/*", "*Google.com.*/*" ], exclude: [ ] },
                },
                Bing: {
                    match: { include: [ "*bing.com/*" ], exclude: [ ] },
                },
                
            },
            Chat: {
                fold: true,
                DeepSeek: {
                    match: { include: [ "*deepseek.com/*" ], exclude: [ ] },
                },
                ChatGPT: {
                    match: { include: [ "*chatgpt.com/*" ], exclude: [ ] },
                },
                DOUBAO: {
                    match: { include: [ "*doubao.com/*" ], exclude: [ ] },
                },
            },
            ComfyUI: {
                
                fold: true,
                feature: "YOYOYO",
                match: { include: [ ...OVN_SITE_GROUP.AIGC ], exclude: [ ] },
                
                manager: {  },
                crystools: {  },
                rgthree: {  },
                
            },
            YUQUE: {
                
                fold: true,
                name: " ",
                feature: " ",
                state: true,
                default: true,
                
                match: { include: [ "*yuque.com/*" ], exclude: [ ] },
                // depend: [ "XXXXX" ],
                // phase: "start", // start | init | ready | end
                // priority: 50,
                
                ovnGrid: { feature: "背景网格", },
                ovnTable: { feature: "表格样式", }
                
            },
            TickTick: {
                match: { include: [ "*dida365.com/*", "*ticktick.com/*" ], exclude: [ ] },
            },
            Youtube: {
                match: { include: [ "*youtube.com/*" ], exclude: [ ] },
            },
            Bilibili: {
                match: { include: [ "*Bilibili.com/*" ], exclude: [ ] },
            },
            
        },
        
        Micro: {
            
            fold: false,
            block: [ ],
            
            Eagle: { 
                match: { include: [ "*" ], exclude: [ ] },
            },
            NetDisk_Check: {
                match: { include: [ "*" ], exclude: [ ] },
            },
            Other: {
                feature: "炸七炸八",
                match: { include: [ "*" ], exclude: [ ] },
            },
            
        },
        
    };
    
    function OVN_CONFIG_MERGE(target, source) {
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                const sourceValue = source[key];
                const targetValue = target[key];
                
                if (typeof sourceValue === 'object' && sourceValue !== null && !Array.isArray(sourceValue) &&
                    typeof targetValue === 'object' && targetValue !== null && !Array.isArray(targetValue)) {
                    OVN_CONFIG_MERGE(targetValue, sourceValue);
                } else if (Array.isArray(sourceValue) && Array.isArray(targetValue)) {
                    target[key] = targetValue.concat(sourceValue);
                } else {
                    target[key] = sourceValue;
                }
            }
        }
        return target;
    }
    
    OVN_SUBJOIN_HOOK.apply('config', OVN_GLOBAL_CONFIG);
    
// $ ================================================== ↓ END

export { OVN_GLOBAL_CONFIG, OVN_CONFIG_MERGE };

