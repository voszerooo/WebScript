

import { OVN_VALUE_PREFS }       from '../../store/value/prefs.js';
import { OVN_GLOBAL_DOM }        from '../../store/infra/dom.js';
import { OVN_SUBJOIN_HOOK }      from '../../store/core/hook.js';


// $ ================================================== ↓ OVN_GLOBAL_INFORM

    const OVN_GLOBAL_INFORM = (() => {
        
        function create(bindFn, config = {}) {
            
            const informTime = config.informTime || 3000;
            const hoverStateMap = new WeakMap();
            
            function show({ message, type = "", method = "left", timeout = informTime }) {
                const tip = document.createElement("div");
                const classList = ["ovnTips", method];
                if (type) classList.push(type);
                
                tip.className = classList.join(" ");
                tip.textContent = message;
                bindFn(dom => {
                    if (!dom || tip.isConnected) return;
                    dom.appendChild(tip);
                    requestAnimationFrame(() => {
                        tip.classList.add("show");
                    });
                    if (timeout > 0) {
                        setTimeout(() => {
                            tip.classList.add("fade");
                            setTimeout(() => tip.remove(), 300);
                        }, timeout);
                    }
                });
            }
            
            const top = (message, type = "", timeout = informTime) => { show({ message, type, method: "top", timeout }); };
            const left = (message, type = "", timeout = informTime) => { show({ message, type, method: "left", timeout }); };
            
            function hover(element, message, times, callback, delay = 926) {
                
                if (!element) return;
                const node = typeof element === "string" ? document.querySelector(element) : element;
                if (!node) return;
                const key = "hover::" + message;
                const shownCount = OVN_VALUE_PREFS.hover.get(key) || 0;
                if (typeof times === "number" && shownCount >= times) return;
                
                const oldState = hoverStateMap.get(node);
                if (oldState) {
                    node.removeEventListener("mouseenter", oldState.onEnter);
                    node.removeEventListener("mouseleave", oldState.onLeave);
                    if (oldState.timerId) clearTimeout(oldState.timerId);
                    if (oldState.hoverElement) oldState.hoverElement.remove();
                    hoverStateMap.delete(node);
                }
                
                let hoverTimer = null;
                let hoverElement = null;
                
                const onEnter = (e) => {
                    hoverTimer = setTimeout(() => {
                        hoverElement = document.createElement("div");
                        hoverElement.className = "ovnTips hover";
                        hoverElement.textContent = message;
                        
                        document.body.appendChild(hoverElement);
                        const { clientX: x, clientY: y } = e;
                        const { offsetWidth: w, offsetHeight: h } = hoverElement;
                        const topPos = y - 40;
                        const leftPos = Math.max(10, Math.min(x - w / 2, window.innerWidth - w - 10));
                        
                        hoverElement.style.left = `${leftPos}px`;
                        hoverElement.style.top = `${Math.max(10, topPos)}px`;
                        requestAnimationFrame(() => {
                            hoverElement.classList.add("show");
                        });
                        if (typeof times === "number") {
                            const newCount = shownCount + 1;
                            OVN_VALUE_PREFS.hover.set(key, newCount);
                        }
                        if (typeof callback === "function") callback();
                        if (times === 1) {
                            node.removeEventListener("mouseenter", onEnter);
                            node.removeEventListener("mouseleave", onLeave);
                            hoverStateMap.delete(node);
                        }
                    }, delay);
                    
                    hoverStateMap.set(node, { timerId: hoverTimer, hoverElement, onEnter, onLeave });
                };
                
                const onLeave = () => {
                    if (hoverTimer) {
                        clearTimeout(hoverTimer);
                        hoverTimer = null;
                    }
                    if (hoverElement) {
                        hoverElement.classList.add("fade");
                        setTimeout(() => {
                            hoverElement?.remove();
                            hoverElement = null;
                        }, 300);
                    }
                    const state = hoverStateMap.get(node);
                    if (state) {
                        state.timerId = null;
                        state.hoverElement = null;
                    }
                };
                
                node.addEventListener("mouseenter", onEnter);
                node.addEventListener("mouseleave", onLeave);
                hoverStateMap.set(node, { timerId: hoverTimer, hoverElement, onEnter, onLeave });
                
            }
            return { top, left, hover };
        }
        
        return {
            create: create,
            OVN: create(OVN_GLOBAL_DOM.bindOVN, { informTime: 3000 }),
        };
        
    })();
    
    OVN_SUBJOIN_HOOK.apply('inform', OVN_GLOBAL_INFORM);
    
// $ ================================================== ↓ END

export { OVN_GLOBAL_INFORM };

