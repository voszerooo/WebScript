

import { OVN_GLOBAL_DOM }        from '../../store/infra/dom.js';
import { OVN_GLOBAL_SCHEDULER }  from '../../store/core/scheduler.js';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("QuickRead", () => {

    (function OVN_QuickRead() {
        
        function apply({
            ratio = .8,
            scroll = true,
            smooth = true,
            letter = true,
        } = {}) {
            
            const doScroll = (amount) => window.scrollBy({
                top: amount,
                left: 0,
                behavior: smooth ? "smooth" : "auto"
            });
            
            const keyMap = {
                ArrowUp:   () => scroll && doScroll(-window.innerHeight * ratio),
                ArrowDown: () => scroll && doScroll( window.innerHeight * ratio),
            };
            
            if (letter) Object.assign(keyMap, {
                w: keyMap.ArrowUp,
                s: keyMap.ArrowDown,
            });
            
            document.addEventListener("keydown", (event) => {
                
                if (event.ctrlKey || event.metaKey || event.altKey) return;
                
                const target = event.target;
                const tagName = target.tagName.toLowerCase();
                if (
                    tagName === "input" ||
                    tagName === "textarea" ||
                    tagName === "select" ||
                    target.isContentEditable
                ) return;
                
                if (event.defaultPrevented) return;
                
                const action = keyMap[event.key] || keyMap[event.key.toLowerCase()];
                if (action) {
                    action();
                    event.preventDefault();
                }
                
            }, { passive: false });
            
            OVN_GLOBAL_DOM.bindOVN(dom => {
                dom.setAttribute('data-ovn-read', '');
            });
            
        }
        
        apply();
        
        return { apply };
        
    })();
    
});

