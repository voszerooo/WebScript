

import { OVN_GLOBAL_DOM }        from '../../store/infra/dom.js';
import { OVN_OBSERVER_CENTER }   from '../../store/infra/observer.js';
import { OVN_GLOBAL_INFORM }     from '../../store/infra/inform.js';
import { OVN_GLOBAL_DEBUG }      from '../../store/infra/debug.js';
import { OVN_MODULE_RESOLVER }   from '../../store/core/resolver.js';


// $ ================================================== ↓ START

    (function OVN_Debug() {
        
        if (!OVN_GLOBAL_DEBUG && typeof OVN_GLOBAL_DEBUG === 'undefined') {
            console.warn('[==👽OVN==] OVN_Debug | OVN_GLOBAL_DEBUG not available yet, will retry on demand');
        }
        
        function getMatchedModules() {
            const resolver = OVN_MODULE_RESOLVER;
            if (!resolver) return {};
            
            const flat = resolver.getFlat();
            const matched = {};
            const currentUrl = location.href;
            
            for (const [key, mod] of Object.entries(flat)) {
                if (!mod.match) {
                    matched[key] = mod;
                    continue;
                }
                const matcher = mod.compiledMatch;
                if (matcher && matcher.test(currentUrl)) {
                    matched[key] = mod;
                }
            }
            return matched;
        }
        
        function buildPanel() {
            const DEBUG = OVN_GLOBAL_DEBUG;
            if (!DEBUG) {
                console.error('[==👽OVN==] OVN_Debug | OVN_GLOBAL_DEBUG still undefined');
                return;
            }
            
            const exist = document.getElementById("ovnDebugOverlay");
            if (exist) {
                exist.classList.add("ovnHide");
                setTimeout(() => exist.remove(), 0);
                return;
            }
            
            const overlay = document.createElement("div");
            overlay.id = "ovnDebugOverlay";
            const panel = document.createElement("div");
            panel.id = "ovnDebugPanel";
            panel.className = "ovnPanelBase";
            
            const data = DEBUG.getSnapshot();
            const matchedModules = getMatchedModules();
            const matchedKeys = Object.keys(matchedModules);
            
            const filteredData = {};
            for (const key of matchedKeys) {
                if (data[key]) {
                    filteredData[key] = data[key];
                }
            }
            
            const groupMap = Object.create(null);
            for (const [key, val] of Object.entries(filteredData)) {
                const groupName = key.split('_')[0];
                if (!groupMap[groupName]) groupMap[groupName] = [];
                groupMap[groupName].push({ key, val });
            }
            
            let ok = 0, fail = 0;
            for (const v of Object.values(filteredData)) {
                v.state === "done" ? ok++ : fail++;
            }
            const statsLine = `[==👽OVN==][🛸] DONE - ${ok}/${ok + fail} | FAIL - ${fail}`;
            
            const grid = document.createElement("div");
            grid.className = "ovnDebugGrid";
            
            const tree = OVN_MODULE_RESOLVER.getTree();
            const groupOrder = Object.keys(tree);
            
            const sortedGroups = [...groupOrder.filter(g => groupMap[g]), ...Object.keys(groupMap).filter(g => !groupOrder.includes(g))];
            
            for (const group of sortedGroups) {
                const list = groupMap[group];
                if (!list) continue;
                
                const col = document.createElement("div");
                col.className = "ovnDebugCol";
                
                const groupTitle = document.createElement("div");
                groupTitle.className = "ovnDebugGroupTitle";
                groupTitle.textContent = group;
                col.appendChild(groupTitle);
                
                for (const { key, val } of list) {
                    const item = document.createElement("div");
                    item.className = "ovnDebugItem";
                    const name = document.createElement("div");
                    name.className = "ovnDebugModkey";
                    name.textContent = val.shortName;
                    const status = document.createElement("div");
                    const statusState = val.state === 'done' ? 'success' : 'error';
                    status.className = 'ovnDebugStatus ovnState ovnFore';
                    status.setAttribute('data-ovn-state', statusState);
                    status.textContent = val.state.toUpperCase();
                    const line = document.createElement("div");
                    line.className = "ovnDebugLine";
                    
                    ["block", "match", "state", "chain"].forEach(step => {
                        const dot = document.createElement("span");
                        dot.className = "ovnDebugDot ovnState ovnBack";
                        dot.setAttribute("data-ovn-state", "");
                        const stepState = val.steps[step];
                        if (stepState === true) {
                            dot.setAttribute("data-ovn-state", "success");
                        } else if (stepState === false) {
                            dot.setAttribute("data-ovn-state", "error");
                        }
                        OVN_GLOBAL_INFORM.OVN.hover(dot, step.toUpperCase(), undefined, undefined, 20);
                        line.appendChild(dot);
                    });
                    
                    item.append(name, status, line);
                    col.appendChild(item);
                }
                grid.appendChild(col);
            }
            const bottomRow = document.createElement("div");
            bottomRow.className = "ovnDebugBottom";
            
            const observerBox = document.createElement("pre");
            observerBox.className = "ovnObserver";
            let observerText = "[♾️][observer] Statistics\n";
            observerText += "----------\n";
            if (typeof OVN_OBSERVER_CENTER !== "undefined") {
                const stats = OVN_OBSERVER_CENTER.getActiveCount();
                observerText += `Anonymous : ${stats.anonymous}\n`;
                observerText += `Keyed     : ${stats.keyed}\n`;
                observerText += `Total     : ${stats.byTarget}\n`;
            } else {
                observerText += "Observer center not available.\n";
            }
            observerBox.textContent = observerText;
            
            const devMode = document.createElement("div");
            devMode.className = "ovnDevMode ovnState ovnBack";
            const currentMode = document.documentElement.getAttribute('data-ovn-mode') || 'Unknown';
            devMode.textContent = `DevMode | ${currentMode}`;
            if (currentMode === 'SSE') {
                devMode.setAttribute('data-ovn-type', 'imp');
            } else if (currentMode === 'ETag') {
                devMode.setAttribute('data-ovn-type', 'sec');
            }
            
            const consoleBox = document.createElement("pre");
            consoleBox.className = "ovnDebugConsole";
            
            const consoleLines = [];
            
            // const ovnLogEl = document.getElementById('ovnLog');
            // if (ovnLogEl) {
            //     const runtimeLines = Array.from(ovnLogEl.querySelectorAll('pre')).map(pre => pre.textContent);
            //     if (runtimeLines.length > 0) {
            //         consoleLines.push(' ');
            //         consoleLines.push(...runtimeLines);
            //         consoleLines.push(' ');
            //         consoleLines.push('----------');
            //         consoleLines.push(' ');
            //     }
            // }
            
            consoleLines.push(statsLine);
            for (const [key, val] of Object.entries(filteredData)) {
                try {
                    if (val && val.consoleLine && typeof val.consoleLine === "string") {
                        consoleLines.push(val.consoleLine);
                    }
                } catch (e) {
                    consoleLines.push(`[==👽OVN==][👾][-.--ms][${key}] | ERROR - ${e?.message || "Unknown"}`);
                }
            }
            
            const ovnLogEl = document.getElementById('ovnLog');
            if (ovnLogEl) {
                const runtimeLines = Array.from(ovnLogEl.querySelectorAll('pre')).map(pre => pre.textContent);
                if (runtimeLines.length > 0) {
                    consoleLines.push(' ');
                    consoleLines.push('----------');
                    consoleLines.push(' ');
                    consoleLines.push(...runtimeLines);
                    consoleLines.push(' ');
                }
            }
            
            consoleBox.textContent = consoleLines.join("\n");
            
            bottomRow.appendChild(observerBox);
            bottomRow.appendChild(devMode);
            bottomRow.appendChild(consoleBox);
            panel.appendChild(grid);
            panel.appendChild(bottomRow);
            overlay.appendChild(panel);
            
            OVN_GLOBAL_DOM.bindOVN(dom => dom.appendChild(overlay));
            setTimeout(() => overlay.classList.add("ovnShow"), 20);
            
            setTimeout(() => {
                const close = e => {
                    if (!panel.contains(e.target)) {
                        overlay.classList.add("ovnHide");
                        setTimeout(() => {
                            overlay.remove();
                            document.removeEventListener("click", close);
                        }, 0);
                    }
                };
                document.addEventListener("click", close);
            }, 100);
        }
        
        GM_registerMenuCommand("👾 Debug Panel", buildPanel);
        document.addEventListener("keydown", e => {
            if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "d") {
                e.preventDefault();
                buildPanel();
            }
        });
        
    })();
    
    