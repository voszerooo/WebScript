

import { OVN_OBSERVER_CENTER }   from '../../store/infra/observer.js';
import { OVN_SUBJOIN_HOOK }      from '../../store/core/hook.js';


// $ ================================================== ↓ OVN_GLOBAL_DOM

    const OVN_GLOBAL_DOM = (() => {
        
        const DOM_BASE   = "ovnDOM";
        const DOM_STYLE  = "ovnStyle";
        const DOM_SCRIPT = "ovnScript";
        const DOM_LOG = "ovnLog";
        
        function create(id) {
            
            let instance     = null;
            let readyPromise = null;
            let styleBox     = null;
            let scriptBox    = null;
            let logBox       = null;
            const observeKey = `${id}-DOM-Classify`;
            
            function hasAttrPrefix(el, prefix) {
                const attrs = el.attributes;
                for (let i = 0; i < attrs.length; i++) {
                    if (attrs[i].name.startsWith(prefix)) return true;
                }
                return false;
            }
            function isTargetType(el, type) {
                const tag    = type === 'style'  ? 'STYLE'  : 'SCRIPT';
                const prefix = type === 'style' ? 'data-ovn-style' : 'data-ovn-script';
                return el.tagName === tag || hasAttrPrefix(el, prefix);
            }
            function moveIfNeeded(el, target) {
                if (el.parentNode !== target) {
                    target.appendChild(el);
                    return true;
                }
                return false;
            }
            function ensureBoxOrder(container) {
                if (container.firstChild !== styleBox) {
                    container.insertBefore(styleBox, container.firstChild);
                }
                if (logBox && container.lastChild !== logBox) {
                    container.appendChild(logBox);
                }
                if (scriptBox) {
                    if (logBox) {
                        if (scriptBox.nextSibling !== logBox) {
                            container.insertBefore(scriptBox, logBox);
                        }
                    } else {
                        if (container.lastChild !== scriptBox) {
                            container.appendChild(scriptBox);
                        }
                    }
                }
            }
            
            function init() {
                if (instance && !document.contains(instance)) {
                    instance     = null;
                    readyPromise = null;
                    OVN_OBSERVER_CENTER.disconnectKey(observeKey);
                }
                if (instance) return instance;
                const exist = document.querySelector(`#${id}`);
                if (exist) {
                    instance = exist;
                    if (id === DOM_BASE) mountBase(instance);
                    return instance;
                }
                const div = document.createElement('div');
                div.id = id;
                document.body.insertBefore(div, document.body.firstChild);
                instance = div;
                if (id === DOM_BASE) mountBase(instance);
                return instance;
            }
            
            function mountBase(container) {
                if (document.body.firstChild !== container) {
                    document.body.insertBefore(container, document.body.firstChild);
                }
                styleBox  = ensure(container, DOM_STYLE);
                scriptBox = ensure(container, DOM_SCRIPT);
                logBox    = ensure(container, DOM_LOG);
                classify(container);
                autoConduct(container);
                if (id === DOM_BASE) watchBody();
            }
            let bodyObserver = null;
            let watchTimer = null;
            function watchBody() {
                if (bodyObserver) bodyObserver.disconnect();
                bodyObserver = new MutationObserver(() => {
                    if (watchTimer) return;
                    watchTimer = setTimeout(() => {
                        watchTimer = null;
                        if (instance && document.contains(instance)) return;
                        instance = null;
                        readyPromise = null;
                        OVN_OBSERVER_CENTER.disconnectKey(observeKey);
                        init();
                    }, 126);
                });
                bodyObserver.observe(document.body, { childList: true });
            }
            function ensure(container, id) {
                let el = document.getElementById(id);
                if (el && el.parentNode !== container) {
                    container.appendChild(el);
                } else if (!el) {
                    el = document.createElement('div');
                    el.id = id;
                    container.appendChild(el);
                }
                return el;
            }
            
            function classify(container) {
                if (!styleBox || !scriptBox) return;
                Array.from(container.children).forEach(el => {
                    if (el === styleBox || el === scriptBox || el === logBox) return;
                    if (el.hasAttribute('data-ovn-frozen')) return;
                    if (isTargetType(el, 'style'))  moveIfNeeded(el, styleBox);
                    else if (isTargetType(el, 'script')) moveIfNeeded(el, scriptBox);
                });
                ensureBoxOrder(container);
            }
            function autoConduct(container) {
                OVN_OBSERVER_CENTER.disconnectKey(observeKey);
                OVN_OBSERVER_CENTER.observeWithKey(
                    observeKey,
                    container,
                    { childList: true },
                    (mutations) => {
                        let orderChanged = false;
                        mutations.forEach(mutation => {
                            mutation.addedNodes.forEach(node => {
                                if (node.nodeType !== 1) return;
                                if (node === styleBox || node === scriptBox || node === logBox) return;
                                if (node.hasAttribute('data-ovn-frozen')) return;
                                
                                if (isTargetType(node, 'style')) {
                                    if (moveIfNeeded(node, styleBox)) orderChanged = true;
                                } else if (isTargetType(node, 'script')) {
                                    if (moveIfNeeded(node, scriptBox)) orderChanged = true;
                                } else {
                                    orderChanged = true;
                                }
                            });
                        });
                        if (orderChanged) ensureBoxOrder(container);
                    },
                    { debounce: 12 }
                );
            }
            
            function ready() {
                if (readyPromise) return readyPromise;
                readyPromise = new Promise(resolve => {
                    function done() {
                        setTimeout(() => {
                        const el = init();
                        resolve(el);
                        }, 0);
                    }
                    if (document.readyState === 'loading') {
                        document.addEventListener('DOMContentLoaded', done, { once: true });
                    } else {
                        done();
                    }
                });
                return readyPromise;
            }
            return {
                bind(callback) {
                    if (callback) {
                        ready().then(container => { callback(container); });
                    } else {
                        return ready();
                    }
                },
            };
        }
        
        const OVN = create(DOM_BASE);
        return {
            create: create,
            bindOVN(callback) { return OVN.bind(callback); },
        };
        
    })();
    
    OVN_SUBJOIN_HOOK.apply('dom', OVN_GLOBAL_DOM);
    
// $ ================================================== ↓ END

export { OVN_GLOBAL_DOM };

