

import { OVN_OBSERVER_CENTER }   from '../../store/infra/observer.js';
import { OVN_GLOBAL_SCHEDULER }  from '../../store/core/scheduler.js';
import { OVN_SUBJOIN_HOOK }      from '../../store/core/hook.js';

// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("CustomICON", () => {
    
    (function OVN_CustomICON() {
        
        // 配置映射关系 "网址" => "图标网址" / "变量" 「支持格式 SVG JPG PNG WEBP AVIF base64...」
        const ovnICON_Map = {
            
            "m.ssone.io": "--ovnICON-Network",
            "my.ssonegames.com": "--ovnICON-Network",
            "ip.skk.moe": "--ovnICON-Mecha",
            "convertio.co": "--ovnICON-Transition",
            "bigjpg.com": "--ovnICON-AIGC",
            "acronymfinder.com": "--ovnICON-Char",
            "dict.cn": "--ovnICON-Dict",
            "imagecompressor.com": "--ovnICON-P",
            "mermaid.live": "--ovnICON-MermaidLive",
            "color.adobe.com": "--ovnICON-C",
            
            "ticktick.com": "--ovnICON-Tick-Vint",
            "dida365.com": "--ovnICON-Tick-Vint",
            "yuque.com": "--ovnICON-YUQUE",
            "bing.com": "--ovnICON-Microsoft",
            "dillinger.io": "--ovnICON-Markdown-Line",
            
            "deepseek.com": "--ovnICON-Deepseek",
            "gemini.google.com": "--ovnICON-Gemini-Vint",
            "liblib.art": "--ovnICON-Liblib",
            "prompts.chat": "--ovnICON-Prompt",
            "127.0.0.1:8188": "--ovnICON-ComfyUI",
            "127.0.0.1:9222": "--ovnICON-ComfyUI",
            "localhost:9222": "--ovnICON-ComfyUI",
            "comfyworkflows.com": "--ovnICON-Workflow",
            "svgviewer.dev": "--ovnICON-SVG",
            "2yu7z0.smartapps.baidu.com": "--ovnICON-Music",
            
        };
        
        const stubborn = [
            "dillinger.io",
            "ip.skk.moe",
        ];
        
        const extensions = OVN_SUBJOIN_HOOK.apply('custom-icon', {});
        for (const ext of extensions) {
            if (ext && ext.map)      Object.assign(ovnICON_Map, ext.map);
            if (ext && ext.stubborn) stubborn.push(...ext.stubborn);
        }
        
        const key = "CustomICON";
        const delay = 126;
        const matchedKey = Object.keys(ovnICON_Map).find(site =>
            window.location.host === site || window.location.host.endsWith(`.${site}`)
        );
        
        let iconURL = matchedKey ? ovnICON_Map[matchedKey] : null;
        
        if (!iconURL) return;
        if (iconURL.startsWith("--")) {
            iconURL = getComputedStyle(document.documentElement)
                .getPropertyValue(iconURL)
                .trim()
                .replace(/^url\(["']?(.*?)["']?\)$/i, '$1')
                .replace(/["']/g, '');
        }
        if (!iconURL) return;
        
        function applyFavicon(url) {
            let link = document.querySelector("link[rel*='icon'][ovn-ICON]") || document.createElement('link');
            link.setAttribute('ovn-ICON', 'true');
            link.rel = 'icon';
            link.href = url;
            
            if (!link.parentNode || link.parentNode !== document.head || document.head.lastChild !== link) {
                document.head.appendChild(link);
            }
            const matchers = [
                { type: 'image/svg+xml', match: v => v.endsWith('.svg') || v.startsWith('data:image/svg+xml') },
                { type: 'image/png', match: v => v.endsWith('.png') || v.startsWith('data:image/png') },
                { type: 'image/jpeg', match: v => /\.(jpe?g)$/i.test(v) || v.startsWith('data:image/jpeg') },
                { type: 'image/webp', match: v => v.endsWith('.webp') || v.startsWith('data:image/webp') },
                { type: 'image/avif', match: v => v.endsWith('.avif') || v.startsWith('data:image/avif') },
            ];
            link.type = matchers.find(t => t.match(url))?.type || 'image/x-icon';
        }
        
        if (document.head) applyFavicon(iconURL);
        else document.addEventListener('DOMContentLoaded', () => applyFavicon(iconURL));
        
        function init() {
            applyFavicon(iconURL);
            
            OVN_OBSERVER_CENTER.observeWithKey(
                key,
                document.head,
                { childList: true, subtree: true },
                () => {
                    const icon = document.querySelector("link[rel*='icon'][ovn-ICON]");
                    if (!icon || icon.href !== iconURL) applyFavicon(iconURL);
                },
                { autoDisconnect: true }
            );
            
            if (stubborn.some(site => window.location.host.endsWith(site))) {
                const observer = new MutationObserver(() => {
                    const siteIcon = document.querySelector("link[rel*='icon']:not([ovn-ICON])");
                    if (siteIcon) {
                        siteIcon.remove();
                        applyFavicon(iconURL);
                    }
                });
                observer.observe(document.head, { childList: true, subtree: true, attributes: true });
            }
        }
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => setTimeout(init, delay));
        } else {
            setTimeout(init, delay);
        }
        
    })();
    
    
});

