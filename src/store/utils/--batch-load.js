

// ! ================================================== ↓ OVN_BATCH_LOAD

const OVN_BATCH_LOAD = (() => {

    function apply({
        amount = 10,
        itemWrapper = "#container",
        itemTarget = "#container h3:has([href])",
        baseUrl = location.origin,
        delayBase = 100,
        delayJitter = 200,
        openTarget = "_blank",
        checkSameOrigin = true,
    } = {}) {

        const wrapperEl = typeof itemWrapper === "string"
            ? document.querySelector(itemWrapper)
            : itemWrapper;

        if (!wrapperEl) return;

        const items = wrapperEl.querySelectorAll(itemTarget);
        const max = Math.min(amount, items.length);

        function normalizeUrl(url) {
            try {
                // 已经是完整 URL
                const u = new URL(url, baseUrl);

                // 是否限制同域（可选）
                if (checkSameOrigin && u.origin !== location.origin) {
                    return null;
                }

                return u.href;
            } catch (e) {
                return null;
            }
        }

        for (let i = 0; i < max; i++) {
            const el = items[i];
            const linkEl = el.querySelector("a[href]");
            if (!linkEl) continue;

            const rawUrl = linkEl.getAttribute("href");
            const finalUrl = normalizeUrl(rawUrl);

            if (!finalUrl) continue;

            const delay = delayBase + Math.random() * delayJitter;

            setTimeout(() => {
                window.open(finalUrl, openTarget);
            }, delay * i);
        }
    }

    return { apply };

})();

// ! ================================================== ↓ End
export { OVN_BATCH_LOAD };