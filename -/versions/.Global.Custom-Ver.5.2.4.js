// ==UserScript==


// @name                      Global.Custom
// @description               全局定制
// @version                   5.2.4
// @author                    voszerooo
// @icon                      https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png
// @sourceXXX                 https://greasyfork.org/scripts/579569

// @match                     *://**/*
// @include                   baidu.com
// @include                   youtube.com
// @include                   bilibili.com
// @include                   chat.deepseek.com
// @include                   deepseek.com
// @include                   chatgpt.com
// @exclude                   XXXXX
// @run-at                    document-start
// @grant                     GM_addStyle
// @grant                     GM_getValue
// @grant                     GM_setValue
// @grant                     GM_registerMenuCommand
// @grant                     GM_deleteValue
// @connect                   XXXXX

// @namespace                 XXXXX
// @homepage                  XXXXX
// @compatible                XXXXX
// @license                   Apache-2.0
// @copyright                 XXXXX
// @supportURL                XXXXX
// @contributionURL           XXXXX

// @XXXXX                     *://**/*
// @XXXXX                     *://*XXXXX*
// @XXXXX                     document-start

// @LOG                       20.02.02 - Ver.0.1.0
// @LOG                       25.03.14 - Ver.1.0.0
// @LOG                       25.04.05 - Ver.2.0.0
// @LOG                       25.04.24 - Ver.3.0.0
// @LOG                       25.05.12 - Ver.4.0.0
// @LOG                       25.06.05 - Ver.5.0.0
// @LOG                       25.06.12 - Ver.5.2.4


// ==/UserScript==


/**
 * & TODO
 * 
 * = ========== ↓ ALTER
 * = 
 * = pkgGreasyfork_vbnLink ==> pkgVBN_XXXXX_XXXXX
 * = VBN_GLOBAL_LOGIC ==> VBN_MATCH_LOGIC
 * = VBN_GLOBAL_CONFIG ==> VBN_GLOBAL_MODULES
 * = VBN_GLOBAL_CONFIG 为 全局配置 含全局性的 debug选项
 * = 
 * # ========== ↓ NEW
 * # 
 * ! ========== ↓ WARN
 * ! 
 * ? ========== ↓ ERROR
 * ? 
 * 
 */
(function VBN_GlobalCustom() {
    
    'use strict';
    
    // $ ================================================== ↓ Global
    
        const vbnMatchURL = window.location.href;
        const vbnMatchHost = window.location.hostname;
        
        document.documentElement.classList.add('vbn');
        
        // #region Config
        
            const VBN_SITE_GROUP = {
                
                AIGC: [ "*deepseek.com/*", "*chatgpt.com/*", ],
                
                ProgDev: [ "*github.com/*", ],
                
                Manage: [ "*yuque.com/*", "*ticktick.com/*", "*dida365.com/*", "*workona.com/*", "*dillinger.io/*", ],
                
                Search: [ "*google.com/*", "*baidu.com/*", "*bing.com/*", ],
                
                Media: [ "*youtube.com/*", "*bilibili.com/*", "*weibo.com/*", ],
                
                Font: [ "*fonts.google.com/*", "*cp.baidu.com/*", ],
                
            };
            
            const VBN_GLOBAL_CONFIG = {
                
                Global: {
                    
                    group: "vbnGroup_Global",
                    
                    ScrollBar: {
                        name: " ",
                        feature: " ",
                        state: true,
                        default: true,
                        tips: false,
                        debug: false,
                        match: { include: [ "*" ], exclude: [ ] },
                    },
                    LoaderBar: {
                        name: "顶部加载条",
                        feature: "全局植入 顶部 「加载=>进度条」",
                        state: true,
                        default: true,
                        tips: true,
                        debug: false,
                        match: { include: [ "*" ], exclude: [ ] },
                    },
                    CustomICON: { },
                    FontStyle: { },
                    Selection: {
                        match: { include: [ "*" ], exclude: [ "*yuque.com/*" ] },
                    },
                    
                },
                
                Assign: {
                    
                    group: "vbnGroup_Assign",
                    
                    Search: { },
                    AIGC: { },
                    YUQUE: { },
                    TickTick: { },
                    Youtube: { },
                    Bilibili: { },
                    
                },
                
                Script: {
                    
                    group: "vbnGroup_Script",
                    
                    Baidu_Redirect: { },
                    CSDN_RemLimits: { },
                    NetDisk_Check: {
                        match: { include: [ "*" ], exclude: [ ] },
                    },
                    
                },
                
            };
            
        // #endregion
        
        
        // #region Manager
        
            const VBN_GLOBAL_DEBUG = (() => {
                
                const Prefix = "[==👽VBN==]";
                
                function format(moduleName, msg) {
                    return `${Prefix} [${moduleName}] ${msg}`;
                }
                function log(moduleName, msg) {
                    console.log(format(moduleName, msg));
                }
                function warn(moduleName, msg) {
                    console.log(format(moduleName, `⚠️ ${msg}`));
                }
                function error(moduleName, msg) {
                    console.log(format(moduleName, `❌ ${msg}`));
                }
                
                return {
                    log,
                    warn,
                    error
                };
                
            })();
            
            
            const VBN_OBSERVER_CENTER = (() => {
                
                const observerAnonym = new Set();
                const observerKey = new Map();
                let observerTarget = new WeakMap();
                
                function observe(target, options = { childList: true, subtree: true }, callback, config = {}) {
                    if (!(target instanceof Node)) return null;
                    if (config.preventDuplicate && observerTarget.has(target)) return null;
                    
                    const observerBase = new MutationObserver((mutations, observerInstance) => {
                        try {
                            callback(mutations, observerInstance);
                        } catch (err) {
                            document.documentElement.classList.add("vbnTips", "correct");
                        }
                        if (config.autoDisconnect || (typeof config.onceWhen === "function" && config.onceWhen(mutations))) {
                            disconnectTarget(target, observerBase);
                        }
                    });
                    
                    observerBase.observe(target, options);
                    observerAnonym.add(observerBase);
                    _addToTargetMap(target, observerBase);
                    return observerBase;
                }
                
                function observeWithKey(key, target, options = { childList: true, subtree: true }, callback, config = {}) {
                    if (!key || typeof key !== "string" || !(target instanceof Node)) return null;
                    
                    if (observerKey.has(key)) {
                        observerKey.get(key).disconnect();
                        observerKey.delete(key);
                    }
                    const observerBase = new MutationObserver((mutations, observerInstance) => {
                        try {
                            callback(mutations, observerInstance);
                        } catch (err) {
                            document.documentElement.classList.add("vbnTips", "error");
                        }
                        if (config.autoDisconnect || (typeof config.onceWhen === "function" && config.onceWhen(mutations))) {
                            disconnectKey(key);
                            _removeFromTargetMap(target, observerBase);
                        }
                    });
                    
                    observerBase.observe(target, options);
                    observerKey.set(key, observerBase);
                    _addToTargetMap(target, observerBase);
                    return observerBase;
                }
                
                function disconnect(target) {
                    const observerSet = observerTarget.get(target);
                    if (observerSet) {
                        observerSet.forEach(observerBase => {
                            observerBase.disconnect();
                            observerAnonym.delete(observerBase);
                        });
                        observerTarget.delete(target);
                    }
                }
                function disconnectTarget(target, observerBase) {
                    observerBase.disconnect();
                    observerAnonym.delete(observerBase);
                    _removeFromTargetMap(target, observerBase);
                }
                function disconnectKey(key) {
                    const observerBase = observerKey.get(key);
                    if (observerBase) {
                        observerBase.disconnect();
                        observerKey.delete(key);
                    }
                }
                
                function disconnectAll() {
                    observerAnonym.forEach(observerBase => observerBase.disconnect());
                    observerKey.forEach(observerBase => observerBase.disconnect());
                    observerAnonym.clear();
                    observerKey.clear();
                    observerTarget = new WeakMap();
                }
                function hasKey(key) {
                    return observerKey.has(key);
                }
                function getActiveCount() {
                    let totalTargeted = 0;
                    observerTarget.forEach(set => totalTargeted += set.size);
                    return {
                        anonymous: observerAnonym.size,
                        keyed: observerKey.size,
                        byTarget: totalTargeted
                    };
                }
                function _addToTargetMap(target, observerBase) {
                    if (!observerTarget.has(target)) {
                        observerTarget.set(target, new Set());
                    }
                    observerTarget.get(target).add(observerBase);
                }
                function _removeFromTargetMap(target, observerBase) {
                    const set = observerTarget.get(target);
                    if (set) {
                        set.delete(observerBase);
                        if (set.size === 0) observerTarget.delete(target);
                    }
                }
                
                return {
                    observe,
                    observeWithKey,
                    disconnect,
                    disconnectKey,
                    disconnectAll,
                    hasKey,
                    getActiveCount
                };
                
            })();
            
        // #endregion
        
        
        // #region Builder
        
            const VBN_GLOBAL_DOM = (() => {
                
                let instance = null;
                const callbacks = [];
                
                function init() {
                    if (instance) return;
                    const div = document.createElement('div');
                    div.id = 'vbnDOM';
                    document.body.insertBefore(div, document.body.firstChild);
                    instance = div;
                }
                function ensureReady(callback) {
                    if (callback) callbacks.push(callback);
                    if (instance) {
                        while (callbacks.length) {
                            try { callbacks.shift()(instance); }
                            catch (e) { console.error(e); }
                        }
                        return instance;
                    }
                    if (document.readyState === 'loading') {
                        document.addEventListener('DOMContentLoaded', () => {
                            init();
                            ensureReady();
                        });
                    } else {
                        init();
                        ensureReady();
                    }
                }
                
                return {
                    load(callback) {
                        if (callback) {
                            ensureReady(callback);
                        } else {
                            return new Promise(resolve => ensureReady(resolve));
                        }
                    },
                    get() {
                        return instance || document.querySelector('#vbnDOM');
                    }
                };
                
            })();
            
            
            const VBN_ADD_CLASS = (() => {
                
                const storageKey = 'vbnVisitedLinks';
                const attrMark = 'data-vbn-trace';
                
                function apply({
                    delay = 0,
                    target,
                    append,
                    trace = false,
                    linker = "a[href]",
                }) {
                    const packSelector = Array.isArray(target) ? target : [target];
                    const packClass = Array.isArray(append) ? append : [append];
                    const visitedSet = new Set(JSON.parse(localStorage.getItem(storageKey) || '[]'));
                    const observerKey = `addClass_${packSelector.join('_')}_${packClass.join('_')}`;
                    
                    function defaultShouldApply(el) {
                        const links = el.querySelectorAll(linker);
                        return [...links].some(link => visitedSet.has(link.getAttribute("href")));
                    }
                    function applyClass(el) {
                        packClass.forEach(cls => {
                            if (!el.classList.contains(cls)) {
                                el.classList.add(cls);
                            }
                        });
                        el.setAttribute(attrMark, "true");
                    }
                    function processDOM() {
                        packSelector.forEach(sel => {
                            document.querySelectorAll(sel).forEach(el => {
                                if (el.hasAttribute(attrMark)) return;
                                
                                if (trace) {
                                    if (defaultShouldApply(el)) applyClass(el);
                                } else {
                                    applyClass(el);
                                }
                            });
                        });
                    }
                    function setupClickTracking() {
                        if (!trace || window._VBN_CLICK_TRACK_INITED) return;
                        window._VBN_CLICK_TRACK_INITED = true;
                        
                        document.body.addEventListener("click", e => {
                            const anchor = e.target.closest(linker);
                            if (anchor) {
                                const href = anchor.getAttribute("href");
                                if (!href) return;
                                
                                visitedSet.add(href);
                                localStorage.setItem(storageKey, JSON.stringify([...visitedSet]));
                                
                                packSelector.forEach(sel => {
                                    const el = anchor.closest(sel);
                                    if (el) applyClass(el);
                                });
                            }
                        });
                    }
                    function startObserve() {
                        processDOM();
                        setupClickTracking();
                        
                        VBN_OBSERVER_CENTER.observeWithKey(
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
            
            
            const VBN_AUTO_EXECUTE = (() => {
                
                const maxAutoStep = 10;
                const moduleMark = "AUTO_EXECUTE";
                
                function runAction(el, action = "click") {
                    if (!el) return false;
                    switch (action) {
                        case "click": el.click(); break;
                        case "focus": el.focus(); break;
                        case "hover":
                            const event = new MouseEvent("mouseover", { bubbles: true });
                            el.dispatchEvent(event);
                            break;
                    }
                    return true;
                }
                function apply(options = {}) {
                    const {
                        delay = 200,
                        delayStep = 20,
                        backstage = false,
                        strict = false,
                        debug = false
                    } = options;
                    
                    const steps = [];
                    for (let i = 1; i <= maxAutoStep; i++) {
                        const key = `step${i}`;
                        if (options[key]) steps.push(options[key]);
                    }
                    
                    if (!steps.length) return;
                    let executed = false;
                    
                    const run = () => {
                        if (executed) return;
                        executed = true;
                        let shouldBreak = false;
                        setTimeout(() => {
                            steps.forEach((step, i) => {
                                const { target, action = "click" } = step;
                                const delayEach = delayStep * i;
                                setTimeout(() => {
                                    if (shouldBreak) return;
                                    try {
                                        const el = document.querySelector(target);
                                        if (el) {
                                            runAction(el, action);
                                            VBN_GLOBAL_DEBUG.log(moduleMark, `Step${i + 1} ✅ ${action} - ${target}`, { debug });
                                        } else {
                                            VBN_GLOBAL_DEBUG.warn(moduleMark, `Step${i + 1} ❓ None - ${target}`, { debug });
                                            if (strict) {
                                                shouldBreak = true;
                                                VBN_GLOBAL_DEBUG.error(moduleMark, `Step${i + 1} ❌ Break`, { debug });
                                            }
                                        }
                                    } catch (e) {
                                        VBN_GLOBAL_DEBUG.error(moduleMark, `Step${i + 1} ❌ Error - ${e.message}`, { debug });
                                    }
                                }, delayEach);
                            });
                        }, delay);
                    };
                    const tryRun = () => {
                        if (executed) return;
                        if (!backstage && document.visibilityState !== "visible") return;
                        run();
                    };
                    
                    document.addEventListener("DOMContentLoaded", tryRun);
                    document.addEventListener("visibilitychange", tryRun);
                }
                
                return { apply };
                
            })();
            
        // #endregion
        
        
        // #region Utils
        
            const VBN_MATCH_RULE = (() => {
                
                function toRegex(pattern) {
                    const escaped = pattern
                        .replace(/([.+^${}()|[\]\\])/g, '\\$1')
                        .replace(/\*/g, '.*')
                        .replace(/^https?:/, 'https?:');
                    return new RegExp('^' + escaped + '$', 'i');
                }
                function test(pattern, target) {
                    return toRegex(pattern).test(target);
                }
                function match({ include = [], exclude = [], url = vbnMatchURL } = {}) {
                    return (
                        include.some(rule => test(rule, url)) &&
                        !exclude.some(rule => test(rule, url))
                    );
                }
                
                return { toRegex, test, match };
                
            })();
            
            
            const VBN_GLOBAL_LOGIC = (() => {
                
                const moduleMap = (() => {
                    
                    const valueFlat = {};
                    const valueBasic = {
                        name: " ",
                        feature: " ",
                        state: true,
                        default: true,
                        tips: false,
                        debug: false,
                        match: { include: [], exclude: [] }
                    };
                    
                    for (const [groupName, groupData] of Object.entries(VBN_GLOBAL_CONFIG)) {
                        const registerGroup = groupData.group;
                        for (const [modKey, valueModule] of Object.entries(groupData)) {
                            if (modKey === "group") continue;
                            valueFlat[modKey] = {
                                ...valueBasic,
                                ...valueModule,
                                group: groupName,
                                registerGroup
                            };
                        }
                    }
                    
                    return valueFlat;
                    
                })();
                
                function get(key) {
                    return moduleMap[key];
                }
                function activate(key, options = {}) {
                    const module = get(key);
                    if (!module || module.state === false) return false;
                    const {
                        url = vbnMatchURL,
                        matchReplace = null
                    } = options;
                    
                    const groupEnabled = GM_getValue(module.registerGroup, true);
                    const moduleEnabled = GM_getValue(key, module.default ?? true);
                    const matched = VBN_MATCH_RULE.match({
                        ...(matchReplace || module.match),
                        url
                    });
                    const isActive = groupEnabled && moduleEnabled && matched;
                    
                    if (isActive && module.debug === true) {
                        const timeSinceStart = performance.now().toFixed(1);
                        VBN_GLOBAL_DEBUG.log(key, `ON  |  Time ${timeSinceStart} ms`);
                    }
                    
                    return isActive;
                }
                
                return {
                    get,
                    activate
                };
                
            })();
            
            
            const VBN_GLOBAL_UTILS = (() => {
                
                function useModule(key, matchReplace = null) {
                    const isActive = VBN_GLOBAL_LOGIC.activate(key, { matchReplace });
                    return { isActive, moduleMark: key };
                }
                
                return {
                    useModule
                };
                
            })();
            
        // #endregion
        
        
        // #region Modules
        
            const VBN_GLOBAL_MODULES = {
                
                AutoExecute: VBN_AUTO_EXECUTE,
                AddClass: VBN_ADD_CLASS,
                
            };
            
        // #endregion
        
        
        // #region Options
        
            (function pkgVBN_Options() {
                
                const pendingChanges = {};
                
                function showTip(msg, type = "", timeout = 5260) {
                    const tip = document.createElement("div");
                    tip.className = `vbnTips${type ? " " + type : ""}`;
                    tip.textContent = msg;
                    VBN_GLOBAL_DOM.load(dom => {
                        dom.appendChild(tip);
                        setTimeout(() => tip.remove(), timeout);
                    });
                }
                
                function buildPanel() {
                    if (document.querySelector("#vbnOptionsPanel")) return;
                    
                    const panel = document.createElement("div");
                    panel.id = "vbnOptionsPanel";
                    panel.className = "vbnPanelBase vbnOptionBase vbnFixed";
                    
                    const title = document.createElement("h2");
                    title.textContent = "Options";
                    panel.appendChild(title);
                    
                    for (const [groupName, groupData] of Object.entries(VBN_GLOBAL_CONFIG)) {
                        
                        const groupKey = groupData.group;
                        const groupEnabled = GM_getValue(groupKey, true);
                        
                        const groupContainer = document.createElement("div");
                        groupContainer.className = "vbnPanelGroup";
                        
                        const groupHeaderWrapper = document.createElement("div");
                        groupHeaderWrapper.className = "vbnGroupHeader";
                        
                        const arrowBox = document.createElement("div");
                        arrowBox.className = "vbnFoldBox";
                        
                        const toggleIcon = document.createElement("div");
                        toggleIcon.textContent = "›";
                        toggleIcon.className = "vbnArrow";
                        if (!GM_getValue(`vbnFold_${groupKey}`, false)) {
                            toggleIcon.classList.add("rotated");
                        }
                        arrowBox.appendChild(toggleIcon);
                        
                        const groupHeader = document.createElement("label");
                        groupHeader.className = "vbnHeaderRow";
                        
                        const groupTitle = document.createElement("span");
                        groupTitle.textContent = groupName;
                        groupTitle.style.marginRight = "auto";
                        
                        const groupToggle = document.createElement("input");
                        groupToggle.type = "checkbox";
                        groupToggle.checked = groupEnabled;
                        
                        groupHeader.appendChild(groupTitle);
                        groupHeader.appendChild(groupToggle);
                        groupHeaderWrapper.appendChild(arrowBox);
                        groupHeaderWrapper.appendChild(groupHeader);
                        
                        groupContainer.appendChild(groupHeaderWrapper);
                        
                        const groupBody = document.createElement("div");
                        groupBody.className = "vbnGroupBody";
                        
                        const folded = GM_getValue(`vbnFold_${groupKey}`, false);
                        if (folded) {
                            groupBody.classList.add("close");
                            groupBody.style.height = "0px";
                            toggleIcon.classList.remove("rotated");
                        } else {
                            groupBody.style.height = "auto";
                            toggleIcon.classList.add("rotated");
                        }
                        
                        arrowBox.addEventListener("click", () => {
                            const isCollapsed = groupBody.classList.contains("close");
                            groupBody.classList.add("open");
                            
                            if (isCollapsed) {
                                groupBody.classList.remove("close");
                                const scrollHeight = groupBody.scrollHeight + "px";
                                groupBody.style.height = "0px";
                                requestAnimationFrame(() => {
                                    groupBody.style.height = scrollHeight;
                                });
                                groupBody.addEventListener("transitionend", function onEnd() {
                                    groupBody.style.height = "auto";
                                    groupBody.classList.remove("open");
                                    groupBody.removeEventListener("transitionend", onEnd);
                                });
                                toggleIcon.classList.add("rotated");
                                GM_setValue(`vbnFold_${groupKey}`, false);
                            } else {
                                const height = groupBody.scrollHeight + "px";
                                groupBody.style.height = height;
                                requestAnimationFrame(() => {
                                    groupBody.style.height = "0px";
                                });
                                setTimeout(() => {
                                    groupBody.classList.add("close");
                                    groupBody.classList.remove("open");
                                    groupBody.style.height = "auto";
                                }, 226);
                                toggleIcon.classList.remove("rotated");
                                GM_setValue(`vbnFold_${groupKey}`, true);
                            }
                        });
                        
                        groupToggle.addEventListener("change", () => {
                            pendingChanges[groupKey] = groupToggle.checked;
                            for (const [moduleKey, module] of Object.entries(groupData)) {
                                if (moduleKey === "group") continue;
                                const checkbox = document.querySelector(`#vbnChild_${moduleKey}`);
                                if (checkbox) {
                                    checkbox.disabled = !groupToggle.checked;
                                    checkbox.parentElement.style.opacity = groupToggle.checked ? 0.9 : 0.4;
                                }
                            }
                        });
                        
                        for (const [moduleKey, module] of Object.entries(groupData)) {
                            if (moduleKey === "group") continue;
                            
                            const currentVal = GM_getValue(moduleKey, module.default ?? true);
                            const row = document.createElement("label");
                            row.className = "vbnBodyRow";
                            row.style.opacity = groupEnabled ? 0.9 : 0.4;
                            
                            const span = document.createElement("span");
                            span.textContent = moduleKey;
                            
                            const toggle = document.createElement("input");
                            toggle.type = "checkbox";
                            toggle.checked = currentVal;
                            toggle.id = `vbnChild_${moduleKey}`;
                            toggle.disabled = !groupEnabled;
                            
                            toggle.addEventListener("change", () => {
                                pendingChanges[moduleKey] = toggle.checked;
                                if (toggle.checked && module.tips) {
                                    const description = module.feature || `${module.name} 功能已启用`;
                                    showTip(description);
                                }
                            });
                            
                            row.appendChild(span);
                            row.appendChild(toggle);
                            groupBody.appendChild(row);
                        }
                        
                        groupContainer.appendChild(groupBody);
                        panel.appendChild(groupContainer);
                    }
                    
                    const applyBtn = document.createElement("button");
                    applyBtn.textContent = "Apply";
                    applyBtn.className = "vbnButtonBase vbnButtonAdapt open";
                    applyBtn.addEventListener("click", () => {
                        for (const [key, value] of Object.entries(pendingChanges)) {
                            GM_setValue(key, value);
                        }
                        showTip("✔ 已应用 即将刷新", "correct");
                        setTimeout(() => location.reload(), 260);
                    });
                    
                    const closeBtn = document.createElement("button");
                    closeBtn.textContent = "Close";
                    closeBtn.className = "vbnButtonBase vbnButtonAdapt close";
                    closeBtn.addEventListener("click", () => {
                        panel.classList.add("hide");
                        setTimeout(() => panel.remove(), 526);
                    });
                    
                    panel.appendChild(applyBtn);
                    panel.appendChild(closeBtn);
                    
                    VBN_GLOBAL_DOM.load(dom => dom.appendChild(panel));
                    setTimeout(() => panel.classList.add("show"), 20);
                    
                    setTimeout(() => {
                        function handleClickOutside(e) {
                            if (!panel.contains(e.target)) {
                                panel.classList.add("hide");
                                setTimeout(() => panel.remove(), 526);
                                document.removeEventListener("click", handleClickOutside);
                            }
                        }
                        document.addEventListener("click", handleClickOutside);
                    }, 100);
                }
                
                const vbnOptionsPanel = { init: buildPanel };
                GM_registerMenuCommand("👽 Options Panel", () => vbnOptionsPanel.init());
                
            })();
            
        // #endregion
        
        
        // #region Theme
        
            (function pkgVBN_Theme() {
                
                const vbnTheme = (() => {
                    
                    const vbnObserverKey = "themeDetector";
                    
                    function detectSystemTheme() {
                        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                        const isLight = window.matchMedia("(prefers-color-scheme: light)").matches;
                        return isDark ? "dark" : isLight ? "light" : null;
                    }
                    function detectWebsiteTheme() {
                        const html = document.documentElement;
                        
                        if (html.classList.contains("dark")) return "dark";
                        if (html.classList.contains("light")) return "light";
                        
                        const dataTheme = html.getAttribute("data-theme");
                        if (dataTheme === "dark") return "dark";
                        if (dataTheme === "light") return "light";
                        
                        return null;
                    }
                    function applyThemeClass() {
                        const html = document.documentElement;
                        const current = detectWebsiteTheme() || detectSystemTheme();
                        if (current === "dark") {
                            html.classList.add("vbnThemeDark");
                            html.classList.remove("vbnThemeLight");
                        } else if (current === "light") {
                            html.classList.add("vbnThemeLight");
                            html.classList.remove("vbnThemeDark");
                        }
                    }
                    
                    function debounce(func, delay = 20) {
                        let timer;
                        return function () {
                            clearTimeout(timer);
                            timer = setTimeout(func, delay);
                        };
                    }
                    
                    function init() {
                        if (document.readyState === "loading") {
                            document.addEventListener("DOMContentLoaded", applyThemeClass);
                        } else {
                            applyThemeClass();
                        }
                        
                        const html = document.documentElement;
                        
                        VBN_OBSERVER_CENTER.observeWithKey(
                            vbnObserverKey,
                            html,
                            { attributes: true, attributeFilter: ["class", "data-theme", "style"] },
                            debounce(applyThemeClass, 20),
                            {
                                preventDuplicate: true,
                                autoDisconnect: false
                            }
                        );
                        
                        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyThemeClass);
                        window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", applyThemeClass);
                        
                        setInterval(applyThemeClass, 2600);
                    }
                    
                    return { init };
                    
                })();
                
                vbnTheme.init();
                
            })();
            
        // #endregion
        
        
        // #region LoaderBar
        
            if (VBN_GLOBAL_LOGIC.activate("LoaderBar")) {
                
                (function pkgVBN_LoaderBar() {
                    
                    function progressBarCreate() {
                        
                        let loaderBar = document.createElement('div');
                        loaderBar.id = 'vbnLoaderBar';
                        VBN_GLOBAL_DOM.load(dom => dom.appendChild(loaderBar));
                        
                        function loaderBarUpdate() {
                            let progress = (document.readyState === 'interactive') ? 80 : (document.readyState === 'complete' ? 100 : 0);
                            
                            loaderBar.style.width = progress + '%';
                            
                            if (progress === 100) {
                                setTimeout(() => {
                                    loaderBar.dataset.state = "vbnScrollBar";
                                    loaderBar.style.animation = "none";
                                    scrollBarUpdate();
                                    
                                    // 仅当页面有滚动条时才监听滚动事件
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
                        VBN_OBSERVER_CENTER.observe(
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
                
            }
            
        // #endregion
        
        
        // #region ICON
        
            (function pkgVBN_CustomICON() {
                
                const vbnICON_Map = {
                    
                    "chat.deepseek.com": "--vbnICON-URL-Deepseek",
                    "chatgpt.com": "--vbnICON-URL-OpenAI",
                    "ticktick.com": "--vbnICON-URL-TickVint",
                    "dida365.com": "--vbnICON-URL-TickVint",
                    "yuque.com": "--vbnICON-URL-Yuque",
                    
                    "m.ssone.io": "--vbnICON-URL-Network",
                    "ip.skk.moe": "--vbnICON-URL-Mecha",
                    "dillinger.io": "--vbnICON-URL-Markdown",
                    "svgviewer.dev": "--vbnICON-URL-SVG",
                    "convertio.co": "--vbnICON-URL-Transition",
                    "bigjpg.com": "--vbnICON-URL-AIGC",
                    "abbreviationfinder.org": "--vbnICON-URL-Character",
                    "dict.cn": "--vbnICON-URL-Dict",
                    
                };
                
                // 查找当前站点是否匹配
                const vbnICON_Matched = Object.keys(vbnICON_Map).find(site => vbnMatchHost.includes(site));
                if (
                    GM_getValue("vbnGroup_Global", true) &&
                    GM_getValue("CustomICON", true) &&
                    vbnICON_Matched
                ) {
                    const vbnICON_CssVarName = vbnICON_Map[vbnICON_Matched];
                    
                    // 获取 CSS 变量 并清除单双引号
                    const vbnICON_URL = getComputedStyle(document.documentElement)
                        .getPropertyValue(vbnICON_CssVarName)
                        .trim()
                        .replace(/^url\(["']?(.*?)["']?\)$/i, '$1')
                        .replace(/["']/g, '');
                        
                    // 获取或创建 favicon 标签
                    const vbnICON_TagLink = document.querySelector("link[rel*='icon']") || document.createElement('link');
                    
                    // 识别图标类型
                    if (
                        vbnICON_URL.startsWith('data:image/svg+xml;base64,') ||
                        vbnICON_URL.endsWith('.svg')
                    ) {
                        vbnICON_TagLink.type = 'image/svg+xml';
                    } else if (
                        vbnICON_URL.endsWith('.png') ||
                        vbnICON_URL.endsWith('.jpg') ||
                        vbnICON_URL.endsWith('.jpeg') ||
                        vbnICON_URL.startsWith('data:image/png;base64,') ||
                        vbnICON_URL.startsWith('data:image/jpeg;base64,')
                    ) {
                        vbnICON_TagLink.type = 'image/png';
                    } else {
                        vbnICON_TagLink.type = 'image/x-icon'; // fallback 类型
                    }
                    
                    vbnICON_TagLink.rel = 'icon';
                    vbnICON_TagLink.href = vbnICON_URL;
                    
                    const head = document.head;
                    
                    // 将新的 favicon 插入到 head 中的最后方
                    head.appendChild(vbnICON_TagLink);
                    
                }
                
            })();
            
        // #endregion
        
        
        // #region FontStyle
        
            if (VBN_GLOBAL_LOGIC.activate("FontStyle", {
                matchReplace: {
                    include: [
                        
                        "*iconfont.cn/*",
                        "*emojiall.com/*",
                        "*greasyfork.org/*",
                        
                        ...VBN_SITE_GROUP.AIGC,
                        ...VBN_SITE_GROUP.ProgDev,
                        ...VBN_SITE_GROUP.Manage,
                        ...VBN_SITE_GROUP.Search,
                        ...VBN_SITE_GROUP.Media,
                        
                    ],
                    exclude: [
                        
                        "*youtube.com/*",
                        
                        ...VBN_SITE_GROUP.Font,
                    ]
                }
            })) {
                GM_addStyle( /* css */ `
                
                    *:not(
                        .code, .pre, .inline-code, .md-code, .blob-code, .blob-code-inner, .js-file-line, .code-block, .code-container, .language-css, 
                        .cm-line, .cm-line span, ne-code, ne-text, 
                        .icon, .icon-wrap, .fa, .DPvwYc, path, svg, i,
                        .markdown-body pre, .markdown-body code, code, pre, kbd, samp, textarea, [class^="language-"], [class*="-code"], [class*="editor"], [class*="icon"], [class*="emoji"]
                    ) {
                        font-family: var(--vbnBaseFont) !important;
                    }
                    
                    .code, .pre, .inline-code, .md-code, .blob-code, .blob-code-inner, .js-file-line, .code-block, .code-container, .language-css,
                    .cm-line, .cm-line span, ne-code, ne-text, .Box-sc-g0xbh4-0.iJOeCH *,
                    .markdown-body pre, .markdown-body code, code, pre, kbd, samp, textarea, [class^="language-"], [class*="-code"] {
                        font-family: var(--vbnCodeFont) !important;
                    }
                    
                    .ds-markdown code, .prose :where(code):not(:where([class~=not-prose] *), pre *),
                    .inline-code {
                        padding: .126em .4em !important;
                        font-weight: 526 !important;
                        text-shadow: 0 0 .126em currentColor !important;
                    }
                    
                `);
            }
            
        // #endregion
        
        
        // #region Selection
        
            if (VBN_GLOBAL_LOGIC.activate("Selection")) {
                
                GM_addStyle(`
                
                    ::selection {
                        color: #E2E2E2 !important;
                        background: var(--vbnBase04HEX) !important;
                    }
                    
                `);
                
            }
            
        // #endregion
        
        
        // #region ScrollBar
        
            if (VBN_GLOBAL_LOGIC.activate("ScrollBar")) {
                
                GM_addStyle( /* css */ `
                
                    ::-webkit-scrollbar {
                        width: 5px !important;
                        height: 5px !important;
                        scroll-behavior: smooth !important;
                        border-radius: 100vmax !important;
                    }
                    
                    /* ========== 滑块 */
                    
                        ::-webkit-scrollbar-thumb {
                            background: hsla(var(--vbnBase05HSL), 0.4) !important;
                            border-radius: 100vmax !important;
                        }
                        ::-webkit-scrollbar-thumb:vertical { background-image: "" !important;}
                        ::-webkit-scrollbar-thumb:horizontal { background-image: "" !important;}
                        
                        ::-webkit-scrollbar-thumb:hover {
                            background: linear-gradient(
                                90deg,
                                hsla(var(--vbnGlow05HSL), 1),
                                hsla(var(--vbnGlow05HSL), 1),
                                hsla(var(--vbnGlow03HSL), 1)) !important;
                        }
                        
                    /* ========== 背景 */
                    ::-webkit-scrollbar-track {
                        background: transparent !important;
                        border-radius: 100vmax !important;
                    }
                    
                    /* ========== 上下按钮 */
                    ::-webkit-scrollbar-button { display: none !important;}
                    
                    /* ========== 滑块以外 */
                    ::-webkit-scrollbar-track-piece { display: none !important;}
                    
                    /* ========== 滚动条交界处角落区域 */
                    ::-webkit-scrollbar-corner { display: none !important;}
                    ::-webkit-resizer { display: none !important;}
                    
                `);
                
            }
            
        // #endregion
        
        
    // $ ================================================== ↓ Assign
    
        // #region Baidu
        
            if (VBN_GLOBAL_LOGIC.activate("Search", {
                matchReplace: {
                    include: [ "*baidu.com/*" ],
                    exclude: [ ]
                }
            })) {
                GM_addStyle( /* css */ `
                
                    html #wrapper #wrapper_wrapper #container #content_left .c-container[tpl="XXXXX"] { vbn { top: var(); }
                    
                    }
                    
                    /* ============================== ↓ Global */
                    
                        html #wrapper {
                            
                            --colorKeyWord: #3978d0;
                            --SearchWidth: calc(var(--vbnSpaceWidthVW) / 2 );
                            --bgRepair: -6px;
                            
                        }
                        html .wrapper_new { background: var(--vbnBase09HEX);}
                        
                        /* ========== ↓ 隐藏模块 */
                        
                            html #searchTag,                                                                   /* 顶部 - 搜索关联词 */
                            html #rs_new .c-color-t.rs-label_ihUhK,                                            /* 底部 - 相关搜索 标题 */
                            html #wrapper #container #content_right,                                           /* 内容区 - 右侧板块 */
                            html #wrapper #container .c-container[tpl="note_lead"],                            /* 内容区 - 模块 精选笔记 */
                            html #wrapper #container .c-container[tpl="yl_vd_generic_new"],                    /* 内容区 - 模块 电影 */
                            html #wrapper #container .c-container[tpl="recommend_list"] .c-color-t.title_Zinx- /* 内容区 - 大家还搜索了 标题 */ {
                                display: none;
                            }
                            
                        /* ========== ↓ 移除下划线 */
                        
                            html a, html em, html :link, html a:hover, html em:hover, a:hover em, html a.cos-link:hover,
                            html #wrapper #container .c-container .t *,
                            html #wrapper #container .c-container .c-title *,
                            html #wrapper #container .c-container .cosc-title-a :hover,
                            html #wrapper #container .c-container .cosc-title-a :hover em,
                            html #wrapper #container .c-container .cosc-title-slot,
                            html #wrapper #container .c-container .cosc-title-slot *,
                            html #wrapper #container .c-container .cosc-title-slot:hover,
                            html #wrapper #container .c-container .cosc-title-slot:hover *,
                            html #wrapper #container .c-container ._sc-title_1g9za_66 *,
                            html #wrapper #container .c-container ._sc-title_1g9za_66 :hover,
                            html #wrapper #container .c-container ._sc-title_1g9za_66 :hover *,
                            html #wrapper #container .c-container .video-main-title_S_LlQ:hover .title-default_518ig,
                            html #wrapper #container .c-container .site-link_1JEbM .custom-underline a .cosc-title-slot:hover,
                            html #wrapper #container .c-container ._head-title_1ml43_142 ._link_1ml43_146:hover ._paragraph_1ml43_156 {
                                text-decoration: none;
                            }
                            
                        /* ========== ↓ 内容区图片尺寸 */
                        
                            html .c-container[tpl="ai_ecology"] .cos-row-col-12 > .cos-col-6,                           /* 轻秒图片转换器 */
                            html .c-container .cos-swiper-list .cos-swiper-item[style*="width: calc(33% - 5px)"],       /* 百度有驾 */
                            html .c-container .video-wrap_7yrJ0 .cos-swiper-list .cos-swiper-item[style*="width: 34%;"] /* 百度翻译 */ {
                                width: 15% !important;
                            }
                            html .c-container .cos-row > .cos-col[style*="width:25%"],                                      /* 百度百科 */
                            html .c-container[tpl="nvl_bookstore_san"] .cos-row-col-12 > .cos-col-3,                        /* 在线阅读 */
                            html .c-container .cos-row.bottom-gap_2aWpR.single-image_6zdhC > .cos-col[style*="width:24.5%"] /* 电影 封面 */ {
                                width: 10% !important;
                            }
                            
                        /* ========== ↓ 原生模块边框 */
                        
                            html .pc-fresh-smooth .c-group-wrapper::after,
                            html .pc-fresh-smooth .cosc-card-shadow:after,
                            html .pc-fresh-smooth .new-pmd .c-border::after,
                            html .pc-fresh-smooth .cu-border._content-border_1ml43_4:after {
                                border: transparent;
                            }
                            
                        /* ========== ↓ 原生模块阴影 */
                        
                            html .cu-border,
                            html .new-pmd .c-border,
                            html .cosc-card-shadow,
                            html .pc-first-style_4Jcx0 {
                                box-shadow: none;
                            }
                            
                        /* ========== ↓ 标题 */
                        
                            html .cos-pc .title-box_4YBsj { width: 100%; }
                            html #wrapper #container h3:not(.cos-space-mt-md h3, .exta-link-pc_3aUAb h3)  {
                                padding: var(--vbnSpacePadding);
                                margin: -10px -20px 10px -20px;
                                background: var(--vbnBase09HEX);
                                border-radius: var(--vbnSurfaceRadius) var(--vbnSurfaceRadius) 5px 5px;
                            }
                            html ._link_1iyz5_2 { margin-bottom: 0; }
                            html .cos-pc .title-wrapper_6E6PV { margin-top: -10px; }
                            html .cos-pc .title-wrapper_6E6PV .pre-text_6ulGP { z-index: 1; }
                            
                            /* ========== ↓ 标题文字 */
                            
                                html a, html a:hover,
                                html a.cos-link, html a.cos-link:hover { color: var(--colorKeyWord); }
                            
                                html ._paragraph_1g9za_2.md,
                                html .cosc-title-md,
                                html #wrapper #container.sam_newgrid .c-container .t,
                                html #wrapper #container.sam_newgrid .c-container .c-title {
                                    color: var(--colorKeyWord);
                                    font-size: 15px;
                                    font-weight: bold;
                                    line-height: 1.5;
                                }
                                
                            /* ========== ↓ 官方标 */
                            
                                html .cos-pc .title-wrapper_6E6PV .suffix-icon_3Ox2w {
                                    position: absolute;
                                    top: -.55em;
                                    right: -1em;
                                }
                                html .cos-pc .title-wrapper_6E6PV .suffix-icon_3Ox2w .www-tag-fill-blue_3n0y3 { border-radius: var(--vbnUIRadius); }
                                
                                
                        /* ========== ↓ 模块 通用 */
                        
                            html #wrapper #container .new-pmd.c-container,
                            html #wrapper #container .new-pmd[tpl="app/rs"] {
                                box-sizing: border-box;
                                position: relative;
                                padding: var(--vbnSpacePadding);
                                margin: var(--vbnSpaceMargin);
                                width: 100%;
                                font-size: 12px;
                                background: #FFFFFF;
                                box-shadow: var(--vbnOftenSurfaceShadowBase);
                                border-radius: var(--vbnSurfaceRadius);
                                transition: var(--vbnOftenTransition);
                            }
                            html #wrapper #container .new-pmd.c-container:hover,
                            html #wrapper #container .new-pmd[tpl="app/rs"]:hover {
                                z-index: 2;
                                box-shadow:
                                    inset 0 0 2px hsla(0, 0%, 92%, .6),
                                    var(--vbnOftenSurfaceShadowHover);
                                transform: var(--vbnSurfaceZoomIn);
                            }
                            
                            html #wrapper #container #content_left > :first-of-type:hover,                   /* 内容区 首个 */
                            html #wrapper #container .new-pmd[tpl="app/rs"]:hover,                           /* 相关搜索 */
                            html #wrapper #container .new-pmd.c-container[tpl="image_grid_san"]:hover,       /* 百度图片 */
                            html #wrapper #container .new-pmd.c-container[tpl="jr_exchange_rate"]:hover,     /* 百度股市通 */
                            html #wrapper #container .new-pmd.c-container[tpl="ai_agent_qa_recommend"]:hover /* 聊一下更多精彩 */ {
                                transform: none;
                            }
                            
                            /* ---------- ↓ 内容块 -> 内容 距离 */
                            html ._content-border_1ml43_4:not([tpl="jy_hy_zi_accu_san"] ._content-border_1ml43_4) {
                                padding: var(--vbnSpacePadding);
                                margin: 0 -20px;
                            }
                            
                            /* ---------- ↓ 内容块 -> 内容 宽度 */
                            html #wrapper #container .c-container[tpl="www_index"] { vbn { top: var(); }
                            
                                .cos-row .cos-col.content-space-between_44mGk[style*="width:75%;"] {
                                    width: 89% !important;
                                }
                                
                            }
                            
                            
                    /* ============================== ↓ Head */
                    
                        html .wrapper_new #head { 
                            top: 0;
                            width: 100%;
                            background: var(--vbnGlassLight);
                            backdrop-filter: var(--vbnPanelFilter);
                            transition: var(--vbnOftenTransition);
                        }
                        html .wrapper_new #head.peak-down { background: transparent; }
                        html .wrapper_new #head.no-box-shadow,
                        html .wrapper_new #head.no-box-shadow.s_down {
                            box-shadow: var(--vbnGlassShadow);
                        }
                        
                        html #wrapper #head:not(.s-manhattan-index div, .s_form_nologin div) { vbn { top: var(); }
                        
                            .head_wrapper {
                                display: flex;
                                justify-content: space-around;
                                transform: translate3d(-15px, 0 , 1px);
                                width: 100%;
                            }
                            
                            /* ========== ↓ 用户中心 */
                            
                                .head_wrapper #u {
                                    position: fixed;
                                    right: 40px;
                                    padding: 0;
                                }
                                
                            /* ========== ↓ 搜索框 */
                            
                                .s_form {
                                    display: flex;
                                    justify-content: center;
                                    padding: 0;
                                    width: auto;
                                }
                                .s_ipt_wr { width: var(--SearchWidth); }
                                .s_form_fresh { width: inherit; padding: 0; }
                                .bdsug-new { width: var(--SearchWidth); }
                                
                                #kw.s_ipt { width: 87%; }
                                
                        }
                        
                        /* ========== ↓ 分类 */
                        
                            html .result-molecule.new-pmd:has(#s_tab) {
                                --container-left-gap: auto;
                                display: flex;
                                justify-content: center;
                            }
                            
                            html #wrapper .new-pmd[tpl="app/head-tab"] { vbn { top: var(); }
                            
                                #s_tab {
                                    display: flex;
                                    justify-content: center;
                                    border: none;
                                    padding-top: 70px;
                                    padding-left: 0;
                                }
                                
                                #s_tab .s_tab_inner {
                                    display: flex;
                                    justify-content: space-between;
                                    width: calc(var(--vbnSpaceWidthVW) / 2 + 260px);
                                    padding-left: 0;
                                }
                                
                            }
                            
                        /* ========== ↓ 检索信息 搜索框下 */
                        
                            html #rs_top_new, html .hit-toptip, html .hit_top_new {
                                opacity: .6;
                                display: flex;
                                justify-content: center;
                                margin-top: calc(-1.2em + -2.6px);
                                width: auto;
                            }
                            
                            html #wrapper .new-pmd[tpl="app/search-tool"] { vbn { top: var(); }
                            
                                br { display: none; }
                                
                                /* ========== ↓ 筛选信息 */
                                .outer_wqJjM { margin: 10px 0 -10px 0;}
                                .options_2Vntk { opacity: .8; width: 90%; margin: 0 auto;}
                                
                            }
                            
                            html #wrapper .new-pmd[tpl="app/toptip"] { vbn { top: var(); }
                            
                                br { display: none; }
                                
                            }
                            
                            html #wrapper .new-pmd[tpl="app/hit-top-new"] { vbn { top: var(); }
                            
                                br { display: none; }
                                .c-icon-bear-circle { transform: scale(.8); }
                                
                            }
                            
                    /* ============================== ↓ Content */
                    
                        html #wrapper #wrapper_wrapper { margin: 0 auto; width: var(--vbnSpaceWidthVW); }
                        
                        html #wrapper #container {
                            width: 100%;
                            padding: 0;
                            margin: 0 auto;
                        }
                        html #wrapper #container #content_left {
                            width: 100%;
                            padding: 0 !important;
                            margin: 0 auto !important;
                        }
                        
                        /* ========== ↓ 组件 */
                        
                            /* ========== ↓ 计算器 */
                            
                                html #wrapper #container .c-container[tpl="ms_new_calc"] { vbn { top: var(); }
                                
                                    .new-pmd { width: 60%; margin: 20px auto; }
                                    .calc-oprate_24c8k { display: flex; justify-content: space-evenly; }
                                    .calc-oprate_24c8k .func-calc_3t0OK { width: 60%;}
                                    
                                    .calc-box_1qoea {
                                        box-shadow: 
                                            inset 1px 1px 1px 0px rgba(255, 255, 255, 0.8),
                                            inset -1px -1px 1px 0px rgba(40, 49, 85, 0.3),
                                            1px 1px 3px 0px rgba(40, 49, 85, 0.1);
                                    }
                                    
                                }
                                
                            /* ========== ↓ 日历 */
                            
                                html #wrapper #container .c-container[tpl="ms_calendar_san"] { vbn { top: var(); }
                                
                                    &.new-pmd { width: 60%; margin: 20px auto; }
                                    ._bg-header_1ml43_46 { width: 99%; top: -5px; left: 5px; }
                                    
                                }
                                
                            /* ========== ↓ 汇率换算 */
                            
                                html #wrapper #container .c-container[tpl="jr_exrate_san"] { vbn { top: var(); }
                                
                                    .aladdin_3Tvaz .bg-header_G63NE { top: var(--bgRepair); }
                                    
                                }
                            
                        /* ========== ↓ 模块 百度AI */
                        
                            html #wrapper .c-group-wrapper {
                                padding: 0;
                                margin: 0;
                                background: transparent;
                                box-shadow: none;
                            }
                            html #wrapper .c-group-wrapper .result-op { width: 100% !important; }
                            
                            html #wrapper #container .new-pmd.c-container[tpl="wenda_generate"] { padding-top: 20px; }
                            
                            /* ========== ↓ 问答生成 */
                            
                                html #wrapper #container .c-container[tpl="ai_index"],
                                html #wrapper #container .c-container[tpl="wenda_generate"],
                                html #wrapper #container .c-container[tpl="new_baikan_index"] {
                                    
                                    overflow: auto;
                                    max-height: 526px;
                                    
                                    &::-webkit-scrollbar { display: none; }
                                    
                                    /* .cosc-card-content { margin-top: var(--bgRepair); } */
                                    .cosc-card-light-bg:not([tpl="wenda_generate"] div) { top: var(--bgRepair); }
                                    
                                }
                                
                                html #wrapper #container .c-container[tpl="ai_index"] { vbn { top: var(); }
                                
                                    div[class*="_aladdin"] {
                                        width: 97%;
                                        margin: 0 auto;
                                        padding: 0;
                                    }
                                    
                                    .swiper-box_33dzT {
                                        width: 102.6%;
                                        margin: -10px auto;
                                        margin-left: -20px;
                                        box-shadow: none;
                                        border-radius: var(--vbnPanelRadius);
                                    }
                                    ._bg-header_1ml43_46 { overflow: visible; }
                                    ._horizontal-gradient_1ml43_56 {
                                        width: 102.6%;
                                        margin: 3px auto;
                                        margin-left: -20px;
                                        background-size: 110% 100% !important;
                                        background-position: top center !important;
                                        border-radius: var(--vbnPanelRadius);
                                    }
                                    
                                }
                                
                                html #wrapper #container .c-container[tpl="wenda_generate"] { vbn { top: var(); }
                                
                                    /* ---------- ↓ ICON 听 */
                                    .audio_63a7U { margin-top: 0; }
                                    
                                }
                                
                                html #wrapper #container .c-container[tpl="new_baikan_index"] { vbn { top: var(); }
                                
                                }
                                
                                
                                html #wrapper #container .c-container[tpl="ai_ask"] { vbn { top: var(); }
                                
                                }
                                
                                
                        /* ========== ↓ 模块 百度翻译 */
                        
                            html #wrapper #container .c-container[tpl="fy_fanyi_ai_san"],
                            html #wrapper #container .c-container[tpl="fy_sg_dictwisenew_san"] { vbn { top: var(); }
                            
                                h3 { background: transparent; margin: -10px -20px -5px -20px; }
                                .dict-card_Pbfer .cosc-card { padding-top: 0 !important; }
                                
                                .daoliu-con_3mmBo { margin-top: 15px; }
                                .footer_6VBOp { margin-top: -5px; }
                                
                                .cosc-card-content { margin-top: var(--bgRepair); }
                                .cosc-card-light-bg:not([tpl="wenda_generate"] div) { top: var(--bgRepair); }
                                
                            }
                            
                        /* ========== ↓ 模块 百度贴吧 */
                        
                            html #wrapper #container .c-container[tpl="tieba_general"] { vbn { top: var(); }
                            
                                .cos-space-mt-md { width: 96%; }
                                
                            }
                            
                        /* ========== ↓ 模块 百度图片 */
                        
                            html #wrapper #container .c-container[tpl="image_grid_san"] { vbn { top: var(); }
                            
                                h3 { margin: 0px -20px; background: transparent; }
                                
                                .image-container_7qr7Y.image-container-pc_57ELg { display: flex; gap: 40px; }
                                .image-container_7qr7Y .row-border-list_50f1g { gap: 20px; }
                                
                            }
                            
                        /* ========== ↓ 模块 百度百科 */
                        
                            html #wrapper #container .c-container[tpl="bk_polysemy"] { vbn { top: var(); }
                                
                                .c-span9 { width: 85%; }
                                
                            }
                            
                            html #wrapper #container .c-container[tpl="sg_kg_entity_san"] { vbn { top: var(); }
                                
                                .button_sx9Ei .content_7L4g2 { color: var(--colorKeyWord); }
                                .c-span9 { width: 85%; }
                                
                                /* ========== ↓ 演员列表 */
                                .cos-swiper-list { justify-content: space-around; }
                                
                            }
                            
                        /* ========== ↓ 模块 百度文库 */
                        
                            html #wrapper #container .c-container[tpl="www_index"][mu*="https://wenku.baidu.com/"] { vbn { top: var(); }
                            
                                h3 { padding: 10px 45px; margin: -10px -20px 10px -43px; }
                                
                                .title-wrapper_6E6PV .front-icon_7wpfB { z-index: 1; font-size: 15px; }
                                
                            }
                            
                        /* ========== ↓ 模块 百度汉语 */
                        
                            html #wrapper #container .c-container[tpl="jy_hy_zi_attr_san"],
                            html #wrapper #container .c-container[tpl="jy_hy_zi_accu_san"] { vbn { top: var(); }
                            
                                .bg-header_2y46S._bg-header_1ml43_46,
                                .bg-header_5SZvD {
                                    width: 102%;
                                    top: -6px;
                                    left: -15px;
                                    right: 0;
                                }
                                
                                h3 { background: transparent; }
                                
                            }
                            
                        /* ========== ↓ 模块 百度天气 */
                        
                            html #wrapper #container .c-container[tpl="weather_forecast_san"] { vbn { top: var(); }
                                
                                --width: 10px;
                                
                                .content-border_2OSp3 { box-shadow: none; }
                                
                                /* ========== ↓ 按钮 左右翻页 */
                                
                                    .load_4cwYw.back_5ndVv { left: var(--width); }
                                    .load_4cwYw.more_3kyUW { right: var(--width); }
                                    
                            }
                            
                        /* ========== ↓ 模块 百度有驾 */
                        
                            html #wrapper #container .c-container[tpl="car_kg2_san"] { vbn { top: var(); }
                            
                            }
                            
                        /* ========== ↓ 模块 AI 工具箱 */
                        
                            html #wrapper #container .c-container[tpl="ai_ecology"] { vbn { top: var(); }
                                
                                --width: 12%;
                                
                                .cos-row-col-12 > .cos-col-3 { width: var(--width); }
                                .card-footer-normal_nPWGd { left: calc(var(--width) - 15px/4); }
                                
                            }
                            
                        /* ========== ↓ 模块 百家号 */
                        
                            
                        /* ========== ↓ 模块 全网热卖 */
                        
                            html #wrapper #container .c-container[tpl="sp_purc_pc"] { vbn { top: var(); }
                            
                                .content-wrap_2UG9e > div[style*="display: block"] {
                                    display: flex !important;
                                    justify-content: space-evenly;
                                }
                                .row_IIB9a { margin: 0; }
                                .sp_purc_pc-sku-item_3KDHq { margin: 15px 40px 15px 0; }
                                
                            }
                            
                        /* ========== ↓ 模块 在线阅读 */
                        
                        
                        /* ========== ↓ 模块 在线观看 */
                        
                            html #wrapper #container .c-container[tpl="yl-vd-basis"] { vbn { top: var(); }
                            
                                .c-span9 { width: max-content; }
                                
                            }
                            
                        /* ========== ↓ 模块 高清在线观看 */
                        
                            html #wrapper #container .c-container[tpl="short_video"] { vbn { top: var(); }
                            
                                .content_LHXYt > div { display: flex; gap: 20px; }
                                .content_LHXYt .c-row { display: contents; }
                                .c-gap-top-large, .c-span4 { margin: 0; }
                                
                            }
                            
                        /* ========== ↓ 模块 聊一下更多精彩 */
                        
                            html #wrapper #container .c-container[tpl="ai_agent_distribute"] { vbn { top: var(); }
                            
                                .card-title_6qPL6 { width: 100%; }
                                .content_EbWw1 .common-content_4dXMi { width: 95%; }
                                
                            }
                            
                            html #wrapper #container .c-container[tpl="ai_agent_qa_recommend"] { vbn { top: var(); } 
                            }
                            
                        /* ========== ↓ 模块 最新信息 */
                        
                            html #wrapper #container .c-container[tpl="news-realtime"] { vbn { top: var(); }
                            
                                .single-card-wrapper_2nlg9 {
                                    display: flex;
                                    justify-content: flex-start;
                                    border-radius: var(--vbnSurfaceRadius);
                                    box-shadow: none;
                                }
                                .single-card-wrapper_2nlg9 > .c-row { display: flex; }
                                .single-card-wrapper_2nlg9 > .c-row:last-of-type { display: none; }
                                
                            }
                            
                        /* ========== ↓ 模块 最新相关信息 */
                        
                            html #wrapper #container .c-container[tpl="rel_base_realtime"] { vbn { top: var(); }
                            
                                img { border-radius: var(--vbnBaseRadius); }
                                .cos-image-3-2 { padding-bottom: 25%; }
                                .cos-image-fit-cover .cos-image-background { background-size: contain; }
                                
                            }
                            
                        /* ========== ↓ 模块 最新相关信息 */
                        
                            html #wrapper #container .c-container[mu*="https://wenku.baidu.com/"] { vbn { top: var(); }
                            
                                ._image_14uts_1 {
                                    background-size: contain !important;
                                    padding-bottom: 25% !important;
                                }
                                
                            }
                            
                        /* ========== ↓ 模块 相关搜索 */
                        
                            html #wrapper #container .c-container[tpl="recommend_list"] { vbn { top: var(); }
                                
                                .pc-rg-upgrade_2X3zi .item_3WKCf { margin: 5px !important; color: var(--colorKeyWord); }
                                
                            }
                            
                            html #wrapper .new-pmd[tpl="app/rs"] { vbn { top: var(); }
                            
                                padding: var(--vbnSpacePadding) !important;
                                margin: var(--vbnSpaceMargin) !important;
                                
                                #rs_new { margin: 0; width: 100%; }
                                #rs_new table { margin: 20px auto; }
                                #rs_new table tr { display: flex; gap: 40px; }
                                #rs_new table tr .rs-link_2DE3Q { color: var(--vbnBaseColor);}
                                
                            }
                            
                    /* ============================== ↓ Bottom */
                    
                        html #wrapper .new-pmd[tpl="app/page"] { vbn { top: var(); }
                        
                            #page {
                                width: 100% !important;
                                background: transparent;
                            }
                            
                            .page_2muyV a { color: var(--colorKeyWord); }
                            
                            #page a:hover .pc, #page .n:hover, .page_2muyV a:hover {
                                filter: none;
                                color: var(--colorKeyWord);
                                background: transparent;
                                box-shadow: var(--vbnSurfaceShadow) hsla(var(--vbnAccentHSL), .200);
                            }
                            
                            .page_2muyV .page-inner_2jZi2 {
                                padding: 0 !important;
                                margin: 10px auto !important;
                                width: max-content !important;
                            }
                            
                        }
                        
                        html #wrapper .new-pmd[tpl="app/footer"] { vbn { top: var(); }
                        
                            .foot-container_2X1Nt { visibility: hidden;}
                            
                        }
                        
                `);
                
                /* ========== vbnFocal */
                
                    (function pkgBaidu_vbnFocal() {
                        
                        VBN_ADD_CLASS.apply({
                            delay: 260,
                            target: [ ".c-container [data-module='title']", ],
                            append: [ "vbnFocal", "LR", ],
                        });
                        
                    })();
                    
            }
            
        // #endregion
        
        
        // // #region Google
        
        //     if (VBN_GLOBAL_LOGIC.activate("Search", {
        //         matchReplace: {
        //             include: [ "*Google.com/*" ],
        //             exclude: [ ]
        //         }
        //     })) {
        //         GM_addStyle( /* css */ `
                
        //             html .main { background: var(--vbnBase09HEX);}
        //             html .sfbg, html .Lu57id { background: transparent;}
                    
        //             /* ========== ↓ 隐藏模块 */
                    
        //                 html .b_footer,                /* 底部 - XXXXX */ 
        //                 html #search .dURPMd > .ULSxyf /* 内容区 - 图片模块 */ {
        //                     display: none;
        //                 }
                        
        //             /* ============================== ↓ Head */
                    
        //                 html #searchform { margin: 10px 0;}
        //                 html .minidiv .logo { top: 2px;}
        //                 html .minidiv .RNNXgb { margin: 12px 0 0;}
                        
        //                 /* ========== ↓ Head 粘性定位 */
        //                 html .minidiv .sfbg {
        //                     height: 90px;
        //                     background: hsla(0, 0%, 100%, 0.4);
        //                     backdrop-filter: var(--vbnPanelFilter);
        //                     box-shadow: 
        //                         inset 0px -1px 3px #FFFFFF50,
        //                         var(--vbnPanelShadow) hsla(var(--vbnBase04HSL), 0.05);
        //                 }
                        
        //                 /* ========== ↓ NAV */
                        
        //                     html .ym1pid.qS9jbf.KLEmSd {border: none;}
                            
        //                     /* ---------- ↓ NAV 修正 */
        //                     @media (max-width: 1920px) {html #hdtb-sc {margin: 0 0 0 -14vw;}}
        //                     @media (min-width: 1920px) {html #hdtb-sc {margin: 0 0 0 -5vw;}}
                            
                            
        //             /* ============================== ↓ Content */
                    
        //                 html #main #cnt {margin: 0 auto; width: var(--vbnSpaceWidthVW);}
        //                 html div[two-father] {width: var(--vbnSpaceWidthVW) !important;}
                        
        //                 /* ---------- ↓ 内容区 修正 */
        //                 @media (max-width: 1920px) {html #center_col { margin: 0px 0 0 -29vw;}}
        //                 @media (min-width: 1920px) {html #center_col { margin: 0px 0 0 -21vw;}}
                        
        //                 /* ---------- ↓ 什么 NT 玩意 */
        //                 @media (min-width: 1675px) {
        //                     html .YNk70c { grid-template-columns: 400px repeat(20,36px) minmax(0,1fr); }
        //                 }
                        
        //                 /* ========== ↓ 通用模块 */
                        
        //                     html .MjjYud,
        //                     html #rso div[two-father] div[two-child] {
        //                         width: 100% !important;
        //                         padding: var(--vbnSpacePadding) !important;
        //                         margin: var(--vbnSpaceMargin) !important;
        //                         border: none !important;
        //                         border-radius: var(--vbnSurfaceRadius) !important;
        //                         background: #FFF !important;
        //                         box-shadow: var(--vbnSurfaceShadow) hsla(var(--vbnBase04HSL), 0.050) !important;
        //                         transition: all .526s var(--vbnTransitionSoft) !important;
        //                     }
                            
        //                     html .MjjYud:hover,
        //                     html #rso div[two-father] div[two-child]:hover {
        //                         position: relative !important;
        //                         z-index: 9 !important;
        //                         border: none !important;
        //                         box-shadow: var(--vbnSurfaceShadow) hsla(var(--vbnAccentHSL), 0.260) !important;
        //                         transition: all .6s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        //                         transform: var(--vbnSurfaceZoomIn) !important;
        //                     }
                            
        //                     /* ---------- ↓ 通用模块 修正 */
        //                     html div[two-father] div[two-child] > div {background: transparent;}
                            
        //                 /* ========== ↓ 标题动画 */
                        
        //                     html #rcnt #res h3:visited,
        //                     html #rcnt #extrares h3:visited,
        //                     html div[two-child] h3:visited,
        //                     html div[two-father] div[two-child] a h3:visited {
        //                         display: inline-block;
        //                         width: max-content;
        //                         font-weight: bold;
        //                     }
        //                     html #rcnt #res h3:after,
        //                     html #rcnt #extrares h3:after,
        //                     html div[two-child] h3:after,
        //                     html div[two-father] div[two-child] a h3:after {
        //                         content: "";
        //                         position: absolute;
        //                         left: 100%;
        //                         bottom: -2px;
        //                         width: 0;
        //                         border-bottom: 2px solid var(--vbnAccentHEX);
        //                         transition: transform 350ms, left 350ms;
        //                     }
        //                     html #rcnt #res h3:hover:after,
        //                     html #rcnt #extrares h3:hover:after,
        //                     html div[two-child] h3:hover:after,
        //                     html div[two-father] div[two-child] a h3:hover:after {
        //                         left: 0;
        //                         width: 100%;
        //                         transition: transform .26s;
        //                     }
                            
        //                 /* ========== ↓ 模块 用户还搜索了 */
                        
        //                     html #bres > .ULSxyf { width: calc(var(--vbnSpaceWidthVW) - 40px );}
        //                     html .b2Rnsc:hover { color: var(--vbnAccentHEX); text-decoration: none;}
                        
        //                 /* ---------- ↓ 通用模块 修正 */
                        
        //                     #rso div[two-father] div[two-child] { width: calc(var(--vbnSpaceWidthVW) - 40px) !important;}
        //                     html .IiOSLb .rsGxI.Ww4FFb, .Ww4FFb {background-color: transparent;}
        //                     html .eqAnXb {margin: -20px 0 0 0; width: var(--vbnSpaceWidthVW);}
                            
                            
        //             /* ============================== ↓ Bottom */
                    
        //                 html .f6F9Be.TrMVnc {border-radius: var(--vbnSurfaceRadius) var(--vbnSurfaceRadius) 0 0;}
        //                 html .b2hzT {border-bottom: none;}
                        
        //                 /* ---------- ↓ Bottom 修正 */
        //                 @media (max-width: 1920px) { html .SLPe5b {margin: 10px 0 0 -18vw;} }
        //                 @media (min-width: 1920px) { html .SLPe5b {margin: 10px 0 0 -12vw;} }
                        
                        
        //             /* ============================== ↓ 修正 */
                    
        //                 /* ---------- ↓ NAV */
        //                 html .XtQzZd {padding: 0 0 5px 0;}
                        
        //                 /* ---------- ↓ 通用模块 第一个 */
        //                 html .tF2Cxc.asEBEc {margin: var(--vbnSpaceMargin);}
                        
        //                 /* ---------- ↓ 模块 用户还搜索了 */
        //                 html .ULSxyf > .MjjYud .oIk2Cb {padding: 15px 20px;}
                        
        //         `);
        //     }
            
        // // #endregion
        
        
        // // #region Bing
        
        //     if (VBN_GLOBAL_LOGIC.activate("Search", {
        //         matchReplace: {
        //             include: [ "*bing.com/*" ],
        //             exclude: [ ]
        //         }
        //     })) {
        //         GM_addStyle( /* css */ `
                
        //             html body, html #b_header { background: var(--vbnBase09HEX) !important;}
                            
        //             /* ========== ↓ 隐藏模块 */
                    
        //                 html .mfa_btn,                         /* Head 背景 */
        //                 html #b_mcw > #b_topw.b_results_eml,   /* 内容区 - 第一个 国际版 */
        //                 html #b_results>.b_ans.b_top,          /* 内容区 - 第一个 */
        //                 html #b_results>.b_ans.b_mop,          /* 内容区 - 影片模块 & 问了以下问题 */
        //                 html #b_results>.b_ans.b_mop.b_vidAns  /* 内容区 - 影片模块 */ {
        //                     display: none;
        //                 }
                        
        //             /* ============================== ↓ Head */
                    
        //                 /* ========== ↓ 用户中心 */
        //                 html #b_header.as_rsform #id_h, #b_header #id_h { position: fixed !important; top: 2% !important; right: 1% !important;}
                        
        //                 /* ========== ↓ 按钮 国内版 国际版 */
                        
        //                     html body #b_header #est_switch { margin: 25px auto; padding: 0;}
        //                     html body #est_switch #est_cn {margin: 0 20px;}
                            
        //                     html #est_switch .est_selected,
        //                     #est_switch .est_unselected {
        //                         width: 50px;
        //                         height: 20px;
        //                         padding: 2px 2px 2px 15px;
        //                         font-size: 14px;
        //                         font-weight: bold;
        //                         line-height: 8px;
        //                         text-align: center;
        //                         color: white;
        //                     }
        //                     #est_switch .est_selected::after {
        //                         border: none !important;
        //                         background: #007AFF;
        //                         box-shadow: none !important;
        //                     }
                            
        //                 /* ========== ↓ Head 粘性定位 */
                        
        //                     html body.b_pinhead #b_header {
        //                         height: calc(20px + var(--vbnSpace4X)) !important;
        //                         background: hsla(0, 0%, 100%, 0.4) !important;
        //                         backdrop-filter: var(--vbnPanelFilter) !important;
        //                         box-shadow: 
        //                             inset 0px -1px 3px #FFFFFF50,
        //                             var(--vbnPanelShadow) hsla(var(--vbnBase04HSL), 0.05) !important;
        //                     }
                            
        //                     /* ========== ↓ 搜索框 */
        //                     html #b_header #sb_form { margin: 12px auto;}
        //                     html .b_searchboxForm {
        //                         box-shadow:
        //                             0px 0px 00px 1px hsla(0, 0%, 0%, .02),
        //                             2px 5px 10px 1px hsla(0, 0%, 0%, .06);
        //                     }
                            
                            
        //             /* ============================== ↓ Content */
                    
        //                 #b_content #b_results { width: var(--vbnSpaceWidthVW) !important; max-width: 100% !important;}
                        
        //                 /* ---------- ↓ 通用模块 */
        //                 html #b_content #b_results > li:not(#mfa_root) {
        //                     padding: var(--vbnSpacePadding) !important;
        //                     margin: 8px 0 !important;
        //                     border: none !important;
        //                     border-radius: var(--vbnSurfaceRadius) !important;
        //                     box-shadow: var(--vbnSurfaceShadow) hsla(var(--vbnBase04HSL), 0.050) !important;
        //                     transition: all .526s var(--vbnTransitionSoft) !important;
        //                 }
        //                 /* ========== ↓ 通用模块 Hover */
        //                 html #b_content #b_results > li:not(#mfa_root):hover {
        //                     box-shadow: var(--vbnSurfaceShadow) hsla(var(--vbnAccentHSL), 0.260) !important;
        //                     transform: var(--vbnSurfaceZoomIn) !important;
        //                 }
                        
        //                 /* ========== ↓ 标题动画 */
        //                 html body #b_content #b_results a:after,
        //                 #b_content #b_results h2 a:after {
        //                     bottom: -2px;
        //                     border-bottom: 2px solid var(--vbnAccentHEX);
        //                     transition: transform .26s, left .26s;
        //                 }
                        
                        
        //             /* ============================== ↓ Bottom */
                    
                    
        //             /* ============================== ↓ 修正 */
                    
        //                 /* ========== ↓ Head 背景 */
                        
        //                     html body.b_respl.bing.b_sbText.b_pinhead header#b_header {background-color: transparent !important;}
                            
        //                     #b_results .b_ans #brsv3 { width: calc(var(--vbnSpaceWidthVW) - 100px) !important; margin: 10px auto !important;}
        //                     #b_results .b_ans #brsv3 .b_vList { padding: 0 !important;}
        //                     #b_results #brsv3 .b_vList li { width: 300px !important; padding: 0 !important; margin: 5px !important;}
                            
        //                     #b_header .b_topbar, #b_header .b_scopebar { margin: 20px 0 0px 0 !important;}
        //                     #b_header .b_searchbox { width: 861px !important;}
                            
        //         `);
        //     }
            
        // // #endregion
        
        
        // #region DeepSeek
        
            if (VBN_GLOBAL_LOGIC.activate("AIGC", {
                matchReplace: {
                    include: [ "*deepseek.com/*" ],
                    exclude: [ ]
                }
            })) {
                GM_addStyle( /* css */ `
                
                    :root {
                        
                        --vbnCustomWidth: calc(var(--vbnSpaceWidth02) + 24vw);
                        --message-list-max-width: var(--vbnSpaceWidth02) !important;
                        
                        transition: all .526s var(--vbnTransitionSoft);
                        
                    }
                    html ._9a2f8e4 { max-width: var(--vbnSpaceWidth02); }
                    
                    @media (max-width: 1600px){
                        :root { --message-list-max-width: var(--vbnCustomWidth) !important;}
                        html ._9a2f8e4 { max-width: var(--vbnCustomWidth); }
                    }
                    
                    html ._62b4800 {background: none;}
                    
                `);
            }
            
        // #endregion
        
        
        // #region ChatGPT
        
            if (VBN_GLOBAL_LOGIC.activate("AIGC", {
                matchReplace: {
                    include: [ "*chatgpt.com/*" ],
                    exclude: [ ]
                }
            })) {
                GM_addStyle( /* css */ `
                
                    * { --thread-content-max-width: var(--vbnSpaceWidth02) !important; }
                    @media (max-width: 1600px){
                        * { --thread-content-max-width: calc(var(--vbnSpaceWidth02) + 24vw) !important;}
                    }
                    
                `);
            }
            
        // #endregion
        
        
        // #region YUQUE
        
            if (VBN_GLOBAL_LOGIC.activate("YUQUE", {
                matchReplace: {
                    include: [ "*yuque.com/*" ],
                    exclude: [ ]
                }
            })) {
                GM_addStyle( /* css */ `
                
                    /* ========== ↓ Font */
                    
                        /* ---------- ↓ 代码 */
                        html .ͼg .cm-scroller {
                            font-family: var(--vbnCodeFont);
                            font-size: var(--vbnCodeSize);
                        }
                        /* ---------- ↓ 行内代码 */
                        html ne-code-content { font-family: var(--vbnCodeFont); }
                        html ne-code ne-text { font-size: var(--vbnCodeSize); }
                        
                    /* ========== ↓ Picture */
                    
                        html .ne-image-wrap .ne-image-box {
                            overflow: visible;
                            background: transparent;
                        }
                        html .ne-image-wrap,
                        html .ne-viewer ne-card[data-card-type=inline][data-card-name=image], /* 预览模式 */
                        html .ne-editor ne-card[data-card-type=inline][data-card-name=image] /* 编辑模式 */ {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        
                        html .ne-paragraph-spacing-relax.ne-typography-classic ne-card[data-card-name=image] img {
                            border-radius: var(--vbnSurfaceRadius);
                            filter: drop-shadow(0 20px 30px hsla(var(--vbnBase04HSL), 0.050));
                            transition: all .526s var(--vbnTransitionSoft);
                        }
                        html .ne-paragraph-spacing-relax.ne-typography-classic ne-card[data-card-name=image] img:hover {
                            filter: drop-shadow(0 20px 30px hsla(var(--vbnAccentHSL), 0.260));
                            transform: var(--vbnSurfaceZoomIn);
                        }
                        
                        /* ---------- ↓ 默认样式 */
                        
                            /* ---------- ↓ Hover */
                            html .ne-editor ne-card[data-card-type=inline][data-card-name=image].ne-card-hovered .ne-image-wrap,
                            html .ne-editor ne-card[data-card-type=inline][data-card-name=image].ne-focused .ne-image-wrap {
                                border-color: transparent;
                            }
                            /* ---------- ↓ 选中图片的默认边框 */
                            html .ne-active .ne-ui-image-resizer-box {display: none;}
                            
                    /* ========== ↓ Table 「已在下方添加 vbnTable样式 此处仅作修复显示」 */
                    
                        /* ---------- ↓ table 外层容器 */
                        html .ne-table-hole > ne-table-wrap > ne-table-inner-wrap {
                            overflow: visible !important;
                        }
                        
                        /* ---------- ↓ 标题 */
                        html table[ne-table-row-head=true]:not([ne-table-head-text-gradient=true]) tr:first-child td .ne-td-content>.ne-b-filler,
                        html table[ne-table-row-head=true]:not([ne-table-head-text-gradient=true]) tr:first-child td ne-text {
                            font-weight: 700 !important;
                            color: #4D4D4D !important;
                        }
                        
                        /* ---------- ↓ 标题 背景及边框 */
                        html table[ne-table-row-head=true]:not([ne-table-head-text-gradient=true]) tr:first-child td {
                            background-color: #FAFAFA !important;
                            border-color: #00000000 !important;
                        }
                        html table[ne-table-row-head=true]:not([ne-table-head-text-gradient=true]) tr:first-child td:not(:first-child, :last-child) {
                            border-left: 1px solid #00000010 !important;
                            border-right: 1px solid #00000010 !important;
                        }
                        
                        /* ---------- ↓ Sticky */
                        html ne-table-hole[class="ne-table-hole"] > ne-table-wrap > div[style*="top: 0px"] {
                            top: -27px !important;
                        }
                        
                        html tr.ne-tr.ne-tr-sticky {
                            top: calc(79px - 27px) !important;
                            border-radius: 0 0 var(--vbnSurfaceRadius) var(--vbnSurfaceRadius);
                        }
                        
                    /* ========== ↓ 标题颜色 */
                    
                        html #article-title,
                        html ant-input lake-title,
                        html .ne-viewer ne-h1 ne-text, html .ne-engine ne-h1 ne-text { color: var(--vbnMarkdownH1);}
                        html .ne-viewer ne-h2 ne-text, html .ne-engine ne-h2 ne-text { color: var(--vbnMarkdownH2);}
                        html .ne-viewer ne-h3 ne-text, html .ne-engine ne-h3 ne-text { color: var(--vbnMarkdownH3);}
                        html .ne-viewer ne-h4 ne-text, html .ne-engine ne-h4 ne-text { color: var(--vbnMarkdownH4);}
                        html .ne-viewer ne-h5 ne-text, html .ne-engine ne-h5 ne-text { color: var(--vbnMarkdownH5);}
                        html .ne-viewer ne-h6 ne-text, html .ne-engine ne-h6 ne-text { color: var(--vbnMarkdownH6);}
                        
                    /* ========== ↓ 工具栏 */
                    
                        /* ---------- ↓ 选中图片 */
                        html .ne-card-toolbar {
                            magic: 10px 0 0;
                            border-radius: var(--vbnPanelRadius);
                        }
                        
                `);
                
                /* ========== vbnTable */
                
                    (function pkgYUQUE_vbnTable() {
                        
                        VBN_ADD_CLASS.apply({
                            delay: 260,
                            target: [ "#main.BookReader-module_content_BGKYX table", ],
                            append: [ "vbnTable", ],
                        });
                        
                    })();
                    
            }
            
        // #endregion
        
        
        // #region TickTick
        
            if (VBN_GLOBAL_LOGIC.activate("TickTick", {
                matchReplace: {
                    include: [
                        
                        "*dida365.com/*",
                        "*ticktick.com/*",
                        
                    ],
                    exclude: [ ]
                }
            })) {
                GM_addStyle( /* css */ `
                
                    /* ---------- ↓ 默认阴影 */
                    html .shadow-default, html .shadow-md {
                        box-shadow: var(--vbnUIShadow) hsla(var(--vbnBase04HSL), .12);
                    }
                    /* ---------- ↓ 左下角 小日历 */
                    html .bg-sidebar-bg-color { background: transparent; }
                    
                    /* ---------- ↓ 看板 各列 */
                    html #column-list-inner > article { width: var(--vbnSpace4Y) !important; }
                    
                `);
            }
            
        // #endregion
        
        
        // #region Youtube
        
            if (VBN_GLOBAL_LOGIC.activate("Youtube", {
                matchReplace: {
                    include: [ "*youtube.com/*" ],
                    exclude: [ ]
                }
            })) {
                GM_addStyle( /* css */ `
                
                    @media (min-width: 1500px) {
                        
                        /* ---------- ↓ Video */
                        html ytd-rich-grid-renderer[is-default-grid] ytd-rich-item-renderer[rendered-from-rich-grid] {
                            --ytd-rich-grid-items-per-row: 6 !important;
                        }
                        
                        /* ---------- ↓ Shots */
                        html ytd-rich-shelf-renderer[is-shorts] ytd-rich-item-renderer[items-per-row][is-slim-media] {
                            --ytd-rich-grid-items-per-row: 8 !important;
                        }
                        
                        /* ---------- ↓ News */
                        html ytd-rich-shelf-renderer[elements-per-row] ytd-rich-item-renderer[is-shelf-item] {
                            --ytd-rich-grid-items-per-row: 6 !important;
                        }
                        
                    }
                    
                `);
            }
            
        // #endregion
        
        
        // #region Bilibili
        
            if (VBN_GLOBAL_LOGIC.activate("Bilibili", {
                matchReplace: {
                    include: [ "*Bilibili.com/*" ],
                    exclude: [ ]
                }
            })) {
                GM_addStyle( /* css */ `
                
                    /* ---------- ↓ 默认小按钮 */
                    html.vbn .video-pod .video-pod__header .header-bottom .right .subscribe-btn {
                        border-radius: var(--vbnBaseRadius);
                    }
                    
                    /* ---------- ↓ 播放列表高度 */
                    html.vbn .video-container-v1 .video-pod .video-pod__body {
                        max-height: 43vh;
                    }
                    
                `);
            }
            
        // #endregion
        
        
        // #region Other
        
            /* ========== Greasyfork */
            
                if (
                    VBN_MATCH_RULE.match({
                        include: [ "*greasyfork.org/*" ],
                        exclude: [ ]
                    })
                ) {
                    GM_addStyle( /* css */ `
                    
                    `);
                    
                    /* ========== vbnLink */
                    
                        (function pkgGreasyfork_vbnLink() {
                            
                            VBN_ADD_CLASS.apply({
                                delay: 260,
                                target: [
                                    "body a[href]:not(#script-links [href], #install-area [href], #script-list-option-groups [href], #main-header [href]):not(:has(img))",
                                    "#main-header a[href]:not(#site-name [href])",
                                    ".browser-list-selector:not(.browser-list-selector-active)",
                                ],
                                append: [ "vbnLink", ],
                            });
                            
                        })();
                        
                }
                
            /* ========== 115 */
            
                if (
                    VBN_MATCH_RULE.match({
                        include: [ "*://115.com/*" ],
                        exclude: [ ]
                    })
                ) {
                    GM_addStyle( /* css */ `
                        
                        /* ========== 云下载 弹窗 */
                        
                            html .offline-box {
                                position: fixed !important;
                                top: 50% !important;
                                left: 50% !important;
                                transform: translate(-50%, -50%);
                                width: 43vw !important;
                                height: 50vh;
                                border-radius: var(--vbnSurfaceRadius);
                                transition: all .43s var(--vbnTransitionSoft);
                            }
                            
                            /* ---------- 云下载 输入框 */
                            html .dialog-input.input-offline textarea {
                                height: 32vh;
                                border-radius: var(--vbnSurfaceRadius);
                            }
                            
                            @media (max-width: 1200px) {
                                html .offline-box { width: 59vw !important; height: 92vh;}
                                html .dialog-input.input-offline textarea { height: 70vh;}
                            }
                            
                    `);
                }
                
            /* ========== XXXXX */
            
                if (
                    VBN_MATCH_RULE.match({
                        include: [ "*mp.weixin.qq.com/*" ],
                        exclude: [ ]
                    })
                ) {
                    GM_addStyle( /* css */ `
                    
                        html .pages_skin_pc.wx_wap_desktop_fontsize_2 .rich_media_area_primary_inner {
                            max-width: var(--vbnSpaceWidth02);
                        }
                        
                    `);
                }
                
            /* ========== XXXXX */
            
                if (
                    VBN_MATCH_RULE.match({
                        include: [ "*periodic-table-tags-mu-six.vercel.app/*" ],
                        exclude: [ ]
                    })
                ) {
                    GM_addStyle( /* css */ `
                    
                        html .title h1 { display: none; }
                        html .star { margin: 100px 0; }
                        html .intro { margin: 24vh 0 14vh 20vw; }
                        html .elements[data-v-ff33deea] {
                            border-radius: var(--vbnUIRadius);
                            transition: all .526s var(--vbnTransitionSoft);
                            width: 5rem;
                            font-family: var(--vbnCodeFont);
                            font-size: var(--vbnCodeSize);
                        }
                        html .elements:hover {
                            z-index: var(--vbnPriority00);
                            box-shadow: 
                                var(--vbnPanelShadow) hsla(var(--vbnBase02HSL), 0.8),
                                0 0 0 2px #00000080 !important;
                            transform: var(--vbnUIZoomIn);
                        }
                        html .elements .info[data-v-ff33deea] {
                            z-index: var(--vbnPriority00);
                            border-radius: var(--vbnPanelRadius);
                        }
                        
                    `);
                }
                
        // #endregion
        
        
    // $ ================================================== ↓ Script
    
        // #region CSDN.RemLimits
        
            if (VBN_GLOBAL_LOGIC.activate("CSDN_RemLimits", {
                matchReplace: {
                    include: [ "*://csdn.net/*" ],
                    exclude: [ ]
                }
            })) {
                GM_addStyle( /* css */ `
                    
                    /* ========== 页面居中 */
                    .nodata .main_father .container {margin: 0 auto;}
                        
                    /* ========== 内容区宽度 */
                    .nodata .container main {width: var(--vbnSpaceWidthPX);}
                    
                    .blog-content-box, .more-toolbox-new,
                    .more-toolbox-new .left-toolbox {
                        margin-top: 5px; border-radius: 10px;
                    }
                    
                `);
            }
            
        // #endregion
        
        
        // #region NetDisk.Check
        
            if (VBN_GLOBAL_LOGIC.activate("NetDisk_Check")) {
                
                GM_addStyle( /* css */ `
                
                    /* ========== 连接正确 */
                    
                        html .one-pan-tip { text-decoration: none;}
                        html .one-pan-tip::before {
                            height: 0.95em;
                            width: 0.95em;
                            margin: 0 0.15em 0.15em;
                            background-image: var(--vbnICON-URL-Correct);
                        }
                        
                    /* ========== 连接错误 */
                    
                        html .one-pan-tip-error { text-decoration: none;}
                        html .one-pan-tip-error::before {
                            background-image: var(--vbnICON-URL-Error);
                        }
                        
                    /* ========== 带提取码 */
                    html .one-pan-tip-lock::before { background-image: var(--vbnICON-URL-Safety); }
                    
                    /* ========== 夸克 */
                    html .one-pan-tip-partial::before { background-image: var(--vbnICON-URL-Info); }
                    
                `);
                
            }
            
        // #endregion
        
        
})();