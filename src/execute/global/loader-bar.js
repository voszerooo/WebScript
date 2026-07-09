

import { OVN_GLOBAL_DOM }        from '../../store/infra/dom.js';
import { OVN_OBSERVER_CENTER }   from '../../store/infra/observer.js';
import { OVN_GLOBAL_SCHEDULER }  from '../../store/core/scheduler.js';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("LoaderBar", () => {
    
    (function OVN_LoaderBar() {
        
        if (window.top !== window.self) return;
        
        function setFnToken(dom, token) {
            let value = dom.getAttribute('data-ovn-fn') || '';
            let list = value ? value.split(' ') : [];
            list = list.filter(item => item !== 'LoaderBar' && item !== 'ScrollBar');
            list.push(token);
            dom.setAttribute('data-ovn-fn', list.join(' '));
        }
        let dom = document.getElementById('ovnDOM');
        if (dom) setFnToken(dom, 'LoaderBar');
        
        function create() {
            if (document.getElementById('ovnLoaderBar')) return;
            
            let loaderBar = document.createElement('div');
            loaderBar.id = 'ovnLoaderBar';
            let loading = true;
            OVN_GLOBAL_DOM.OVN(dom => dom.appendChild(loaderBar));
            
            // let loaded = 0, total = 0, obs, domCache = 0, domCacheAt = 0;
            // let domRes = () => {
            //     let now = performance.now();
            //     if (now - domCacheAt < 300) return domCache;
            //     domCacheAt = now;
            //     domCache = document.querySelectorAll(
            //         'img,script,video,audio,iframe,source,embed,object,track,' +
            //         'link[rel="stylesheet"],link[rel="preload"],link[rel="modulepreload"],' +
            //         'input[type="image"]'
            //     ).length;
            //     return domCache;
            // };
            
            // if (window.PerformanceObserver) {
            //     try {
            //         obs = new PerformanceObserver((list) => {
            //             loaded += list.getEntries().length;
            //             total = Math.max(total, domRes(), loaded + 2);
            //             let pct = Math.min(Math.round((loaded / total) * 100), 92);
            //             if (loading && (pct > 3 || document.readyState !== 'loading')) {
            //                 loading = false;
            //                 loaderBar.style.animation = 'none';
            //             }
            //             if (!loading) {
            //                 loaderBar.style.width = Math.max(parseFloat(loaderBar.style.width) || 0, pct) + '%';
            //             }
            //         });
            //         obs.observe({ type: 'resource', buffered: true });
            //     } catch (e) {}
            // }
            function onReady() {
                let cur = parseFloat(loaderBar.style.width) || 0;
                let next = document.readyState === 'interactive' ? 80 : document.readyState === 'complete' ? 100 : 0;
                if (next > 0 && loading) {
                    loading = false;
                    loaderBar.style.animation = 'none';
                }
                loaderBar.style.width = Math.max(cur, next) + '%';
                if (next === 100) {
                    // if (obs) obs.disconnect();
                    document.removeEventListener('readystatechange', onReady);
                    setTimeout(switchToScroll, 260);
                }
            }
            function switchToScroll() {
                let dom = document.getElementById('ovnDOM');
                if (dom) setFnToken(dom, 'ScrollBar');
                loaderBar.style.animation = 'none';
                window.addEventListener('resize', onResize);
                onResize();
            }
            
            let scrollRaf;
            function onScroll() {
                if (scrollRaf) return;
                scrollRaf = requestAnimationFrame(() => {
                    scrollRaf = null;
                    if (!loaderBar.isConnected) {
                        window.removeEventListener('scroll', onScroll);
                        window.removeEventListener('resize', onResize);
                        return;
                    }
                    let top = document.documentElement.scrollTop || document.body.scrollTop;
                    let max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    loaderBar.style.width = (top / max) * 100 + '%';
                });
            }
            function onResize() {
                if (!loaderBar.isConnected) {
                    window.removeEventListener('scroll', onScroll);
                    window.removeEventListener('resize', onResize);
                    return;
                }
                if (document.documentElement.scrollHeight > window.innerHeight) {
                    window.removeEventListener('scroll', onScroll);
                    window.addEventListener('scroll', onScroll);
                    loaderBar.style.display = 'block';
                    onScroll();
                } else {
                    window.removeEventListener('scroll', onScroll);
                    loaderBar.style.display = 'none';
                }
            }
            document.addEventListener('readystatechange', onReady);
            onReady();
        }
        
        if (document.body) {
            create();
        } else {
            OVN_OBSERVER_CENTER.observe(
                document.documentElement,
                { childList: true, subtree: true },
                ( mutations, ob) => { if (document.body) { ob.disconnect(); create(); } },
                { onceWhen: () => document.body !== null }
            );
        }
        
    })();
    
});