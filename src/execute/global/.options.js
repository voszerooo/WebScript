

import { OVN_VALUE_PREFS }       from '../../store/value/prefs.js';
import { OVN_VALUE_RUNTIME }     from '../../store/value/runtime.js';
import { OVN_VALUE_TEMP }        from '../../store/value/temp.js';
import { OVN_GLOBAL_DOM }        from '../../store/infra/dom.js';
import { OVN_GLOBAL_INFORM }     from '../../store/infra/inform.js';
import { OVN_MODULE_RESOLVER }   from '../../store/core/resolver.js';


// $ ================================================== ↓ START

    (function OVN_Options() {
        
        const changeMap = new Map();
        
        function setToggleState(el, mod, checked) {
            el.classList.add("ovnState", "ovnBack");
            el.setAttribute("data-ovn-state", "");
            if (mod.error) {
                el.setAttribute("data-ovn-state", "error");
            } else if (mod.debug) {
                el.setAttribute("data-ovn-state", "warn");
            } else if (checked) {
                el.setAttribute("data-ovn-state", "success");
            }
        }
        
        function setOpacity(el, enabled, checked) {
            el.style.opacity = enabled && checked ? 0.9 : 0.4;
        }
        
        function initFold(box, body, arrow, key, def) {
            let folded = OVN_VALUE_PREFS.fold.get(key, def);
            function apply() {
                if (folded) {
                    body.classList.add("ovnClose");
                    body.style.height = "0px";
                    arrow.classList.remove("ovnRotated");
                } else {
                    body.style.height = "auto";
                    arrow.classList.add("ovnRotated");
                }
            }
            apply();
            box.addEventListener("click", e => {
                e.stopPropagation();
                folded = !folded;
                OVN_VALUE_PREFS.fold.set(key, folded);
                body.classList.add("ovnOpen");
                
                if (!folded) {
                    body.classList.remove("ovnClose");
                    const h = body.scrollHeight + "px";
                    body.style.height = "0px";
                    requestAnimationFrame(() => body.style.height = h);
                } else {
                    const h = body.scrollHeight + "px";
                    body.style.height = h;
                    requestAnimationFrame(() => body.style.height = "0px");
                    setTimeout(() => {
                        body.classList.add("ovnClose");
                        body.style.height = "auto";
                    }, 226);
                }
                // if (!folded) {
                //     body.classList.remove("ovnClose");
                //     body.style.height = "0px";
                //     body.style.overflow = "hidden";
                //     requestAnimationFrame(() => {
                //         const h = body.scrollHeight;
                //         body.style.height = h + "px";
                //     });
                //     setTimeout(() => {
                //         body.style.height = "auto";
                //         body.style.overflow = "";
                //     }, 260);
                // } else {
                //     const h = body.scrollHeight;
                //     body.style.height = h + "px";
                //     body.style.overflow = "hidden";
                //     requestAnimationFrame(() => {
                //         body.style.height = "0px";
                //     });
                //     setTimeout(() => {
                //         body.classList.add("ovnClose");
                //         body.style.height = "auto";
                //         body.style.overflow = "";
                //     }, 260);
                // }
                
                arrow.classList.toggle("ovnRotated", !folded);
            });
        }
        
        function syncChildren(container, enabled) {
            const inputs = container.querySelectorAll("input[type=checkbox]");
            inputs.forEach(input => {
                const key = input.id?.replace("ovnChild_", "");
                if (!key) return;
                const mod = OVN_MODULE_RESOLVER.get(key);
                const row = input.closest(".ovnBodyRow, .ovnHeaderRow");
                if (!row) return;
                input.disabled = !enabled;
                const real = OVN_VALUE_RUNTIME.get(key, mod?.default ?? true);
                input.checked = enabled ? real : false;
                setToggleState(input, mod || {}, input.checked);
                setOpacity(row, enabled, input.checked);
            });
        }
        
        function createSwitch(mod, parentEnabled) {
            const key = mod.key;
            const state = OVN_VALUE_RUNTIME.get(key, mod.default ?? true);
            const row = document.createElement("label");
            row.className = "ovnBodyRow";
            const span = document.createElement("span");
            span.textContent = key.split("_").pop();
            const toggle = document.createElement("input");
            toggle.type = "checkbox";
            toggle.checked = state;
            toggle.disabled = !parentEnabled;
            toggle.id = `ovnChild_${key}`;
            toggle.classList.add("ovnStatusDot", "ovnState", "ovnBack");
            setToggleState(toggle, mod, state);
            setOpacity(row, parentEnabled, state);
            toggle.addEventListener("change", () => {
                changeMap.set(key, toggle.checked);
                setToggleState(toggle, mod, toggle.checked);
                setOpacity(row, parentEnabled, toggle.checked);
            });
            row.append(span, toggle);
            const hoverText = mod.error ? mod.errorMSG : mod.feature;
            if (hoverText && OVN_VALUE_PREFS.hover.get(key, true)) {
                OVN_GLOBAL_INFORM.OVN.hover(row, hoverText);
            }
            return row;
        }
        
        function render(mod, parentBody, parentEnabled) {
            const key = mod.key;
            const state = OVN_VALUE_RUNTIME.get(key, mod.default ?? true);
            const hasChild = mod.children && mod.children.length > 0;
            if (hasChild) {
                const box = document.createElement("div");
                box.className = "ovnGroupBase Sub";
                const header = document.createElement("div");
                header.className = "ovnGroupHead";
                const foldBox = document.createElement("div");
                foldBox.className = "ovnFoldBox";
                foldBox.style.cursor = "pointer";
                if (OVN_VALUE_PREFS.hover.get(key, true)) {
                    OVN_GLOBAL_INFORM.OVN.hover(foldBox, "HEIHEI 彩蛋 | ClickClick", 2);
                }
                const arrow = document.createElement("div");
                arrow.className = "ovnArrow";
                arrow.textContent = "›";
                foldBox.appendChild(arrow);
                const label = document.createElement("label");
                label.className = "ovnHeaderRow";
                const span = document.createElement("span");
                span.textContent = key.split("_").pop();
                span.style.marginRight = "auto";
                const toggle = document.createElement("input");
                toggle.type = "checkbox";
                toggle.checked = state;
                toggle.disabled = !parentEnabled;
                toggle.classList.add("ovnStatusDot", "ovnState", "ovnBack");
                setToggleState(toggle, mod, state);
                setOpacity(label, parentEnabled, state);
                const body = document.createElement("div");
                body.className = "ovnGroupBody";
                requestAnimationFrame(() => {
                    syncChildren(body, parentEnabled && toggle.checked);
                });
                toggle.addEventListener("change", () => {
                    const checked = toggle.checked;
                    changeMap.set(key, checked);
                    setToggleState(toggle, mod, checked);
                    setOpacity(label, parentEnabled, checked);
                    syncChildren(body, parentEnabled && checked);
                });
                label.append(span, toggle);
                header.append(foldBox, label);
                initFold(foldBox, body, arrow, `fold_${key}`, mod.fold ?? false);
                mod.children.forEach(child => render(child, body, parentEnabled && state));
                box.append(header, body);
                parentBody.appendChild(box);
            } else {
                parentBody.appendChild(createSwitch(mod, parentEnabled));
            }
        }
        
        function buildPanel() {
            const exist = document.querySelector("#ovnOptionsPanel");
            if (exist) {
                exist.classList.add("ovnHide");
                setTimeout(() => exist.remove(), 526);
                return;
            }
            
            const panel = document.createElement("div");
            panel.id = "ovnOptionsPanel";
            panel.className = "ovnPanelBase ovnOptionBase ovnFixed";
            const title = document.createElement("h2");
            title.textContent = "Options";
            panel.appendChild(title);
            const vessel = document.createElement("div");
            vessel.className = "ovnPanelBody";
            
            const tree = OVN_MODULE_RESOLVER.getTree();
            
            Object.values(tree).forEach(root => {
                const state = OVN_VALUE_RUNTIME.get(root.key, true);
                const box = document.createElement("div");
                box.className = "ovnGroupBase";
                const header = document.createElement("div");
                header.className = "ovnGroupHead";
                const foldBox = document.createElement("div");
                foldBox.className = "ovnFoldBox";
                const arrow = document.createElement("div");
                arrow.className = "ovnArrow";
                arrow.textContent = "›";
                foldBox.appendChild(arrow);
                const label = document.createElement("label");
                label.className = "ovnHeaderRow";
                const span = document.createElement("span");
                span.textContent = root.key;
                span.style.marginRight = "auto";
                const toggle = document.createElement("input");
                toggle.type = "checkbox";
                toggle.checked = state;
                toggle.classList.add("ovnStatusDot", "ovnState", "ovnBack");
                setToggleState(toggle, root, state);
                const body = document.createElement("div");
                body.className = "ovnGroupBody";
                toggle.addEventListener("change", () => {
                    const checked = toggle.checked;
                    changeMap.set(root.key, checked);
                    setToggleState(toggle, root, checked);
                    syncChildren(body, checked);
                });
                label.append(span, toggle);
                header.append(foldBox, label);
                initFold(foldBox, body, arrow, `fold_${root.key}`, root.fold ?? false);
                root.children.forEach(child => render(child, body, state));
                box.append(header, body);
                vessel.appendChild(box);
            });
            
            const applyBtn = document.createElement("button");
            applyBtn.textContent = "Apply";
            applyBtn.className = "ovnButtonBase ovnButtonAdapt ovnApply";
            applyBtn.onclick = () => {
                changeMap.forEach((val, key) => OVN_VALUE_RUNTIME.set(key, val));
                OVN_GLOBAL_INFORM.OVN.top("已应用 即将刷新", "correct");
                setTimeout(() => location.reload(), 1260);
            };
            const resetBtn = document.createElement("button");
            resetBtn.textContent = "Reset";
            resetBtn.className = "ovnButtonBase ovnButtonAdapt ovnReset";
            resetBtn.onclick = () => {
                OVN_VALUE_PREFS.reset();
                OVN_VALUE_TEMP.clear();
                OVN_GLOBAL_INFORM.OVN.top("已重置 即将刷新", "correct");
                setTimeout(() => location.reload(), 1260);
            };
            
            const btnWrap = document.createElement("div");
            btnWrap.className = "ovnButton";
            btnWrap.append(applyBtn, resetBtn);
            panel.append(vessel, btnWrap);
            OVN_GLOBAL_DOM.bindOVN(dom => dom.appendChild(panel));
            setTimeout(() => panel.classList.add("ovnShow"), 20);
            
            setTimeout(() => {
                const close = e => {
                    if (!panel.contains(e.target)) {
                        panel.classList.add("ovnHide");
                        setTimeout(() => {
                            panel.remove();
                            document.removeEventListener("click", close);
                        }, 526);
                    }
                };
                document.addEventListener("click", close);
            }, 100);
        }
        
        GM_registerMenuCommand("👽 Options Panel", buildPanel);
        document.addEventListener("keydown", e => {
            if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "x") {
                e.preventDefault();
                buildPanel();
            }
        });
        
    })();
    
    