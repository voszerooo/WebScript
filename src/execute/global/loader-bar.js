

import { OVN_GLOBAL_DOM }        from '../../store/infra/dom.js';
import { OVN_OBSERVER_CENTER }   from '../../store/infra/observer.js';
import { OVN_GLOBAL_SCHEDULER }  from '../../store/core/scheduler.js';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("LoaderBar", () => {
    
    (function OVN_LoaderBar() {
        
        function progressBarCreate() {
            if (document.getElementById('ovnLoaderBar')) return;
            
            let loaderBar = document.createElement('div');
            loaderBar.id = 'ovnLoaderBar';
            OVN_GLOBAL_DOM.bindOVN(dom => dom.appendChild(loaderBar));
            
            function loaderBarUpdate() {
                let progress = (document.readyState === 'interactive') ? 80 : (document.readyState === 'complete' ? 100 : 0);
                loaderBar.style.width = progress + '%';
                if (progress === 100) {
                    setTimeout(() => {
                        loaderBar.dataset.state = "ovnScrollBar";
                        loaderBar.style.animation = "none";
                        scrollBarUpdate();
                        
                        if (document.documentElement.scrollHeight > window.innerHeight) {
                        window.addEventListener('scroll', scrollBarUpdate);
                            loaderBar.style.display = 'block';
                        } else {
                            loaderBar.style.display = 'none';
                        }
                    }, 260);
                }
            }
            function scrollBarUpdate() {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                let scrollProgress = (scrollTop / scrollHeight) * 100;
                loaderBar.style.width = scrollProgress + '%';
            }
            
            document.addEventListener('readystatechange', loaderBarUpdate);
        }
        
        if (document.body) {
            progressBarCreate();
        } else {
            OVN_OBSERVER_CENTER.observe(
                document.documentElement,
                { childList: true, subtree: true },
                (mutations, observer) => {
                    if (document.body) {
                        observer.disconnect();
                        progressBarCreate();
                    }
                },
                { onceWhen: () => document.body !== null }
            );
        }
        
    })();
    
});

