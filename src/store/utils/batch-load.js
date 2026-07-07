

import { OVN_RANDOM_JITTER }     from '../../store/infra/jitter.js';


// $ ================================================== ↓ OVN_BATCH_LOAD

    const OVN_BATCH_LOAD = (() => {
        
        function apply({
            delay = 120,
            interval = 200,
            random = 120,
            item = 10,
            target = "#container",
            url = "a[href]",
        } = {}) {
            
            const wrapperEl = typeof target === "string"
                ? document.querySelector(target)
                : target;
            if (!wrapperEl) return;
            
            const items = wrapperEl.querySelectorAll(url);
            const max = Math.min(item, items.length);
            if (max === 0) return;
            
            // for (let i = 0; i < max; i++) {
            for (let i = max - 1, order = 0; i >= 0; i--, order++) {
                
                const linkEl = items[i];
                if (!linkEl) continue;
                const rawUrl = linkEl.getAttribute("href");
                if (!rawUrl) continue;
                const cleanUrl = rawUrl.trim();
                if (!cleanUrl) continue;
                
                let finalUrl;
                try {
                    finalUrl = new URL(cleanUrl, location.href).href;
                } catch (e) {
                    continue;
                }
                const delayTime = OVN_RANDOM_JITTER.get({
                    delay,
                    interval,
                    random,
                    order
                    // order: i
                });
                setTimeout(() => {
                    if (typeof GM_openInTab !== "undefined") {
                        try {
                            GM_openInTab(finalUrl, { active: false, insert: true });
                        } catch (e) {
                            window.open(finalUrl, "_blank");
                        }
                    } else {
                        window.open(finalUrl, "_blank");
                    }
                }, delayTime);
            }
        }
        
        return { apply };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_BATCH_LOAD };

