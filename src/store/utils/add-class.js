

import { OVN_VALUE_PREFS }       from '../../store/value/prefs.js';
import { OVN_OBSERVER_CENTER }   from '../../store/infra/observer.js';


// $ ================================================== ↓ OVN_ADD_CLASS

    /**
     * 类名添加 | 在目标 DOM 结构上 添加自定义类名 「支持检测链接已访问后添加」
     * @param {Object} options
     * @param {number} [options.delay=0]                        - 进入页面后 延迟多久执行 「毫秒」
     * @param {string|string[]} options.target                  - 需添加类名的目标DOM 「选择器」 「支持多个」
     * @param {string|string[]} options.subjoin                 - 需添加的类名 「支持多个」
     * @param {boolean} [options.trace=false]                   - 是否启用 已访问的链接痕迹
     * @param {string} [options.traceQuery="a[href]"]           - 需查询的链接类型 「选择器」
     * @param {string[]|function} [options.traceJudge]          - 增强判定 检测链接中需包含的关键词
     */
    const OVN_ADD_CLASS = (() => {
        
        const item = 'visited';
        const attr = 'data-ovn-trace';
        
        function apply({
            delay = 260,
            target,
            subjoin,
            trace = false,
            traceQuery = "a[href]",
            traceJudge,
        }) {
            const packSelector = Array.isArray(target) ? target : [target];
            const packClass = Array.isArray(subjoin) ? subjoin : [subjoin];
            const visitedSet = new Set(JSON.parse(OVN_VALUE_PREFS.visited.get(item, '[]')));
            const observerKey = `subjoin_${packSelector.join('_')}_${packClass.join('_')}`;
            
            function applyDefault(el) {
                const links = el.querySelectorAll(traceQuery);
                return [...links].some(link => {
                    const href = link.getAttribute("href");
                    if (!href) return false;
                    
                    const isTraceTarget =
                        typeof traceJudge === "function"
                            ? traceJudge(href)
                            : Array.isArray(traceJudge)
                                ? traceJudge.every(keyword => href.includes(keyword))
                                : true;
                                
                    return isTraceTarget && visitedSet.has(href);
                });
            }
            function applyClass(el) {
                packClass.forEach(cls => {
                    if (!el.classList.contains(cls)) {
                        el.classList.add(cls);
                    }
                });
                el.setAttribute(attr, "true");
            }
            function processDOM() {
                packSelector.forEach(sel => {
                    document.querySelectorAll(sel).forEach(el => {
                        if (el.hasAttribute(attr)) return;
                        
                        if (trace) {
                            if (applyDefault(el)) applyClass(el);
                        } else {
                            applyClass(el);
                        }
                    });
                });
            }
            function setupTrack() {
                
                document.body.addEventListener("click", e => {
                    
                    const anchor = e.target.closest(traceQuery);
                    if (!anchor) return;
                    
                    const href = anchor.getAttribute("href");
                    if (!href) return;
                    const isTraceTarget =
                        typeof traceJudge === "function"
                            ? traceJudge(href)
                            : Array.isArray(traceJudge)
                                ? traceJudge.every(keyword => href.includes(keyword))
                                : true;
                                
                    if (!isTraceTarget) return;
                    
                    visitedSet.add(href);
                    OVN_VALUE_PREFS.visited.set(item, JSON.stringify([...visitedSet]));
                    
                    packSelector.forEach(sel => {
                        const el = anchor.closest(sel);
                        if (el) applyClass(el);
                    });
                    
                });
            }
            function startObserve() {
                processDOM();
                setupTrack();
                OVN_OBSERVER_CENTER.observeWithKey(
                    observerKey,
                    document.body,
                    { childList: true, subtree: true },
                    processDOM,
                    { preventDuplicate: true, autoDisconnect: false }
                );
            }
            if (delay > 0) setTimeout(startObserve, delay);
            else startObserve();
        }
        
        return { apply };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_ADD_CLASS };

