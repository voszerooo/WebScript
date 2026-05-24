

import { OVN_VALUE_RUNTIME }     from '../../store/value/runtime.js';
import { OVN_GLOBAL_DOM }        from '../../store/infra/dom.js';
import { OVN_GLOBAL_INFORM }     from '../../store/infra/inform.js';
import { OVN_SUBJOIN_HOOK }      from '../../store/core/hook.js';


// $ ================================================== ↓ OVN_GLOBAL_BUTTON

    const OVN_GLOBAL_BUTTON = (() => {
        
        function toArray(v) { return Array.isArray(v) ? v : [v]; }
        function normalize(options) { return Array.isArray(options) ? options : [options]; }
        function create(bindDOM, scope) {
            
            return function bind(options = {}) {
                const list = normalize(options);
                list.forEach(cfg => {
                    
                    const {
                        key,
                        type = "switch",
                        name = ["ON", "OFF"],
                        color = ["var(--ovnAccentHEX)", "var(--ovnBase04HEX)"],
                        group = scope,
                        class: classList = [],
                        default: defaultVal = true,
                        order = 50,
                        inform = true,
                        reload = false,
                        map,
                        onClick,
                        onMounted,
                    } = cfg;
                    
                    if (!key && type !== "jump") return;
                    
                    bindDOM(dom => {
                        const container = getTargetContainer(dom, group);
                        if (type === "jump" && map) {
                            Object.entries(map).forEach(([label, url]) => {
                                if (dom.querySelector(`[data-jump="${label}"]`)) return;
                                const btn = document.createElement("button");
                                btn.className = [...toArray(classList)].join(" ");
                                btn.textContent = label;
                                btn.dataset.jump = label;
                                btn.dataset.order = order;
                                btn.onclick = () => {
                                    onClick?.({ phase: "action", type: "jump", label, url, button: btn });
                                    if (inform) OVN_GLOBAL_INFORM.top(`Jump TO ${label}`, "correct");
                                    if (!onClick) location.href = url;
                                    if (reload) location.reload();
                                };
                                insertOrdered(container, btn, order);
                                onMounted?.(btn);
                            });
                            return;
                        }
                        if (dom.querySelector(`.${key}`)) return;
                        
                        const btn = document.createElement("button");
                        btn.className = [...toArray(classList), key].join(" ");
                        btn.dataset.order = order;
                        
                        let state = type === "switch" ? OVN_VALUE_RUNTIME.get(key, defaultVal) : null;
                        
                        function updateUI() {
                            if (type !== "switch") {
                                btn.textContent = toArray(name)[0] || "RUN";
                                return;
                            }
                            const names = toArray(name);
                            const colors = toArray(color);
                            btn.textContent = state ? names[0] : names[1];
                            btn.style.background = state ? colors[0] : colors[1];
                        }
                        updateUI();
                        if (type === "switch") {
                            onClick?.({ phase: "init", type, key, state, button: btn });
                        }
                        btn.addEventListener("click", () => {
                            if (type === "switch") {
                                state = OVN_VALUE_RUNTIME.toggle(key);
                                updateUI();
                                onClick?.({ phase: "toggle", type, key, state, button: btn });
                                if (inform) {
                                    const msg = state ? (toArray(name)[0] || "ON") : (toArray(name)[1] || "OFF");
                                    OVN_GLOBAL_INFORM.top(`${key}: ${msg}`, "correct");
                                }
                            } else {
                                onClick?.({ phase: "action", type, key, button: btn });
                                if (inform) OVN_GLOBAL_INFORM.top(`${toArray(name)[0] || key} 已执行`, "correct");
                            }
                            if (reload) location.reload();
                        });
                        insertOrdered(container, btn, order);
                        onMounted?.(btn);
                    });
                });
            };
        }
        function getTargetContainer(dom, group) {
            if (!group) return dom;
            const classes = typeof group === 'string' ? [group] : group;
            const selector = classes.map(c => `.${c}`).join('');
            let container = dom.querySelector(selector);
            if (!container) {
                container = document.createElement("div");
                container.className = classes.join(" ");
                dom.appendChild(container);
            }
            return container;
        }
        function insertOrdered(container, btn, order) {
            const existing = container.querySelectorAll('[data-order]');
            let before = null;
            for (const el of existing) {
                const elOrder = parseFloat(el.dataset.order) || 0;
                if (elOrder > order) { before = el; break; }
            }
            if (before) container.insertBefore(btn, before);
            else container.appendChild(btn);
        }
        
        return {
            create: create,
            bindOVN: create(OVN_GLOBAL_DOM.bindOVN, ['ovnButtonBase', 'ovnButtonUnder']),
        };
        
    })();
    
    OVN_SUBJOIN_HOOK.apply('button', OVN_GLOBAL_BUTTON);
    
// $ ================================================== ↓ END

export { OVN_GLOBAL_BUTTON };

