

import { OVN_RANDOM_JITTER }     from '../../store/infra/jitter.js';


// $ ================================================== ↓ OVN_AUTO_LOAD

    /**
     * 自动加载 - smart | loadInfinite | multipage
     * @param {Object} options
     * @param {'smart'|'loadInfinite'|'multipage'} [options.mode='smart']      - 加载模式 智能滚动加载 | 无限滚动加载 | 一次加载多页 
     * @param {number} [options.loadPage=9]                                    - 加载页数 「仅在 multipage 模式下生效」
     * @param {string} [options.itemTarget="#container .c-container"]          - 内容所在容器 「父选择器」
     * @param {string|HTMLElement} [options.itemWrapper="#container"]          - 将新加载内容插入至何处 「选择器」
     * @param {string} [options.buttonPrev=".page-prev"]                       - 上一页按钮 「选择器」
     * @param {string} [options.buttonNext=".page-next"]                       - 下一页按钮 「选择器」
     * @param {boolean} [options.fragment=false]                               - 统一加载 是否启用 「加载每页的完整内容后统一插入」
     * @param {boolean} [options.throttle=true]                                - 动态加载 是否启用 「可防止性能及其他问题」
     * @param {number} [options.throttleBase=10]                               - 动态加载 延迟 基础
     * @param {number} [options.throttleJitter=50]                             - 动态加载 延迟 随机波动
     */
    const OVN_AUTO_LOAD = (() => {
        
        function apply({
            mode = "smart",
            loadPage = 9,
            itemTarget = "#container .c-container",
            itemWrapper = "#container",
            buttonPrev = ".page-prev",
            buttonNext = ".page-next",
            fragment = false,
            jitter,
        } = {}) {
            const finalJitter = jitter || {
                delay: 30,
                interval: 30,
                random: 70
            };
            const currentPage = getCurrentPage();
            const wrapperEl = typeof itemWrapper === "string"
                ? document.querySelector(itemWrapper)
                : itemWrapper;
            if (!wrapperEl) return;
            
            let loading = false;
            let loadedPage = currentPage;
            
            function loadSinglePage(pageNum) {
                return new Promise(resolve => {
                    const time = OVN_RANDOM_JITTER.get({
                        jitter: finalJitter,
                        order: pageNum
                    });
                    setTimeout(() => {
                        $.get(buildPageUrl(pageNum), html => {
                            const temp = document.createElement("div");
                            temp.innerHTML = html;
                            const items = temp.querySelectorAll(itemTarget);
                            const mount = fragment ? document.createDocumentFragment() : wrapperEl;
                            items.forEach(el => {
                                el.classList.add("ovnFadeInLoad");
                                mount.appendChild(el);
                            });
                            if (fragment) wrapperEl.appendChild(mount);
                            requestAnimationFrame(() => {
                                wrapperEl.querySelectorAll(".ovnFadeInLoad:not(.ovnLoaded)").forEach(el => {
                                    el.classList.add("ovnLoaded");
                                });
                            });
                            resolve();
                        });
                    }, time);
                });
            }
            
            if (mode === "multipage") {
                const nextBtn = document.querySelector(buttonNext);
                if (nextBtn) {
                    nextBtn.href = buildPageUrl(currentPage + loadPage + 1);
                    nextBtn.textContent = `Next ${loadPage + 1}`;
                }
                const promises = [];
                for (let i = 1; i <= loadPage; i++) {
                    const pageNum = currentPage + i;
                    promises.push(loadSinglePage(pageNum));
                }
                return Promise.all(promises);
            }
            
            if (mode === "smart") {
                let inPreloadZone = false;
                let hasScrolledUp = false;
                let lastScrollTop = window.pageYOffset;
                let accumulatedScrollUp = 0;
                const threshold = 50;
                let observer = null;
                const tryLoadNext = () => {
                    if (inPreloadZone && hasScrolledUp && !loading) {
                        loading = true;
                        loadedPage += 1;
                        observer.disconnect();
                        loadSinglePage(loadedPage).then(() => {
                            const url = new URL(location.href);
                            url.searchParams.set("page", loadedPage);
                            history.replaceState(null, "", url.toString());
                            hasScrolledUp = false;
                            accumulatedScrollUp = 0;
                            observeLastItem();
                        }).finally(() => {
                            loading = false;
                        });
                    }
                };
                const observerCallback = entries => {
                    const entry = entries[0];
                    inPreloadZone = entry.isIntersecting;
                    tryLoadNext();
                };
                observer = new IntersectionObserver(observerCallback, {
                    rootMargin: "500px"
                });
                function observeLastItem() {
                    const items = wrapperEl.querySelectorAll(itemTarget);
                    const lastItem = items[items.length - 1];
                    if (lastItem) observer.observe(lastItem);
                }
                observeLastItem();
                window.addEventListener("scroll", () => {
                    const scrollTop = window.pageYOffset;
                    const diff = lastScrollTop - scrollTop;
                    if (diff > 0) {
                        accumulatedScrollUp += diff;
                        if (accumulatedScrollUp >= threshold) {
                            hasScrolledUp = true;
                        }
                    } else if (diff < 0) {
                        tryLoadNext();
                    }
                    lastScrollTop = scrollTop;
                });
                return;
            }
            
            if (mode === "loadInfinite") {
                const observer = new IntersectionObserver(entries => {
                    const entry = entries[0];
                    if (!entry.isIntersecting || loading) return;
                    loading = true;
                    loadedPage += 1;
                    observer.unobserve(entry.target);
                    loadSinglePage(loadedPage).then(() => {
                        const url = new URL(location.href);
                        url.searchParams.set("page", loadedPage);
                        history.replaceState(null, "", url.toString());
                        observeLastItem();
                    }).finally(() => {
                        loading = false;
                    });
                }, {
                    rootMargin: "500px"
                });
                function observeLastItem() {
                    const items = wrapperEl.querySelectorAll(itemTarget);
                    const lastItem = items[items.length - 1];
                    if (lastItem) observer.observe(lastItem);
                }
                observeLastItem();
            }
        }
        
        function getCurrentPage() {
            const match = location.href.match(/page=(\d+)/);
            return match ? parseInt(match[1]) : 1;
        }
        function buildPageUrl(page) {
            const url = new URL(location.href);
            url.searchParams.set("page", page);
            return url.toString();
        }
        
        return { apply };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_AUTO_LOAD };

