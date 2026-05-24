

import { OVN_OBSERVER_CENTER }   from '../../store/infra/observer.js';
import { OVN_GLOBAL_CONFIG }     from '../../store/core/config.js';
import { OVN_MODULE_RESOLVER }   from '../../store/core/resolver.js';


// $ ================================================== ↓ OVN_GLOBAL_DEBUG

    const OVN_GLOBAL_DEBUG = (() => {
        
        const debugEnabled = OVN_GLOBAL_CONFIG?.debug ?? false;
        
        const OVN = "[==👽OVN==]";
        const logLineList = [];
        const logRecord = Object.create(null);
        const moduleStateMap = Object.create(null);
        const traceMap = Object.create(null);
        
        const bracketWidth = 2;
        let maxKeyLen = 10;
        let placeholder = '-';
        let maxIntDigits = 1;
        
        function pad(str, len) {
            str = String(str);
            return str.length >= len ? str : str + " ".repeat(len - str.length);
        }
        function updateKeyLen(key) {
            if (key.length > maxKeyLen) maxKeyLen = key.length;
        }
        function updateMaxIntDigits(time) {
            if (time == null || time <= 0) return;
            const intPart = Math.floor(time);
            const digits = intPart === 0 ? 1 : String(intPart).length;
            if (digits > maxIntDigits) {
                maxIntDigits = digits;
            }
        }
        function formatTime(time) {
            const totalIntWidth = maxIntDigits;
            if (time == null || time <= 0) {
                return placeholder.repeat(totalIntWidth) + '.' + placeholder.repeat(2);
            }
            const [intStr, decStr] = time.toFixed(2).split('.');
            const paddedInt = intStr.padStart(totalIntWidth, placeholder);
            return paddedInt + '.' + decStr;
        }
        function logFormat({ icon, key, time, msg }) {
            updateMaxIntDigits(time);
            const timeStr = formatTime(time);
            const displayKey = getShortName(key);
            updateKeyLen(displayKey);
            const bracketKey = `[${displayKey}]`;
            const paddedBracket = pad(bracketKey, maxKeyLen + bracketWidth);
            return `${OVN}[${icon}][${timeStr}ms]${paddedBracket} | ${msg}`;
        }
        
        function logStore(key, msg) {
            if (!logRecord[key]) logRecord[key] = [];
            logRecord[key].push({ msg, time: Date.now() });
        }
        function setModuleState(key, { level, msg, time }) {
            if (!moduleStateMap[key]) moduleStateMap[key] = {};
            const mod = moduleStateMap[key];
            if (time != null && time >= 0) {
                mod.timeCost = time;
            } else if (!mod.timeCost) {
                mod.timeCost = 0;
            }
            mod.debugLevel = level;
            if (level === "error") {
                mod.error = true;
                mod.errorMSG = msg;
            }
            updateMaxIntDigits(mod.timeCost);
        }
        function getShortName(key) {
            const parts = key.split('_');
            return parts.length > 1 ? parts.slice(1).join('_') : key;
        }
        
        function ensureTrace(key) {
            if (!traceMap[key]) traceMap[key] = [];
            return traceMap[key];
        }
        function startTrace(key, step) {
            ensureTrace(key).push({ step, state: "pending", time: performance.now() });
        }
        function okTrace(key, step, detail) {
            const list = ensureTrace(key);
            const item = list.find(i => i.step === step && i.state === "pending");
            if (item) {
                item.state = "done";
                item.timeCost = performance.now() - item.time;
                item.detail = detail;
                updateMaxIntDigits(item.timeCost);
            }
        }
        function failTrace(key, step, reason) {
            const list = ensureTrace(key);
            const item = list.find(i => i.step === step && i.state === "pending");
            if (item) {
                item.state = "fail";
                item.reason = reason;
                item.timeCost = performance.now() - item.time;
                updateMaxIntDigits(item.timeCost);
            }
        }
        function skipTrace(key, step, reason) {
            ensureTrace(key).push({ step, state: "skip", reason });
        }
        
        function log(key, msg = "DONE", time = 0, detail) {
            const text = logFormat({ icon: "🚀", key, time, msg });
            const full = detail ? `${text} | ${detail}` : text;
            logLineList.push(full);
            if (debugEnabled) console.log(full);
            logStore(key, full);
            setModuleState(key, { level: "log", msg, time });
            return full;
        }
        function warn(key, msg = "DEBUG", time = 0, detail) {
            const text = logFormat({ icon: "🛠️", key, time, msg });
            const full = detail ? `${text} | ${detail}` : text;
            logLineList.push(full);
            if (debugEnabled) console.warn(full);
            logStore(key, full);
            setModuleState(key, { level: "warn", msg, time });
            return full;
        }
        function error(key, msg = "ERROR", time = 0, detail) {
            const text = logFormat({ icon: "👾", key, time, msg });
            const full = detail ? `${text} | ${detail}` : text;
            logLineList.push(full);
            if (debugEnabled) console.error(full);
            logStore(key, full);
            setModuleState(key, { level: "error", msg, time });
            return full;
        }
        
        function getConsoleLines() {
            return logLineList;
        }
        function getLogs(key) {
            return logRecord[key] || [];
        }
        function format({ icon, key, time, msg }) {
            return logFormat({ icon, key, time, msg });
        }
        
        function getSnapshot() {
            const resolver = (typeof OVN_MODULE_RESOLVER !== "undefined") 
                ? OVN_MODULE_RESOLVER 
                : null;
            const flat = (resolver && resolver.getFlat) ? resolver.getFlat() : {};
            const res = Object.create(null);
            
            let maxLen = 10;
            for (const key in traceMap) {
                const shortKey = getShortName(key);
                maxLen = Math.max(maxLen, shortKey.length);
            }
            for (const key in moduleStateMap) {
                const shortKey = getShortName(key);
                maxLen = Math.max(maxLen, shortKey.length);
            }
            const totalKeyWidth = maxLen;
            
            for (const key in traceMap) {
                const traces = traceMap[key];
                const mod = flat[key] || {};
                const steps = { block: null, match: null, state: null, chain: null, exec: null };
                let reason = "";
                let finalState = "idle";
                let timeCost = 0;
                for (const t of traces) {
                    const map = (s) => (s === "done" ? true : s === "fail" ? false : null);
                    if (t.step === "block") steps.block = map(t.state);
                    if (t.step === "match") steps.match = map(t.state);
                    if (t.step === "state") steps.state = map(t.state);
                    if (t.step === "chain") steps.chain = map(t.state);
                    if (t.step === "run.exec") {
                        steps.exec = map(t.state);
                        timeCost = t.timeCost || 0;
                    }
                    if (t.state === "fail") {
                        finalState = "fail";
                        reason = t.step;
                    }
                }
                if (finalState !== "fail") finalState = "done";
                
                const shortKey = getShortName(key);
                const bracketKey = `[${shortKey}]`;
                const paddedKey = pad(bracketKey, totalKeyWidth + bracketWidth);
                const timeStr = formatTime(timeCost);
                const icon = finalState === "fail" ? "👾" : "🚀";
                const msg = finalState === "fail" ? `FAIL - ${reason}` : "DONE";
                const consoleLine = `${OVN}[${icon}][${timeStr}ms]${paddedKey} | ${msg}`;
                
                res[key] = {
                    group: mod.group || key.split("_")[0] || "Unknown",
                    shortName: shortKey,
                    timeCost: timeCost,
                    steps,
                    state: finalState,
                    reason,
                    logs: logRecord[key] || [],
                    consoleLine,
                };
            }
            for (const key in moduleStateMap) {
                if (res[key]) continue;
                const mod = moduleStateMap[key];
                const icon = mod.error ? "👾" : mod.debugLevel === "warn" ? "🛠️" : "🚀";
                const msg = mod.error ? `FAIL - ${mod.errorMSG || "ERROR"}` : "DONE";
                const timeCost = mod.timeCost || 0;
                const shortKey = getShortName(key);
                const bracketKey = `[${shortKey}]`;
                const paddedKey = pad(bracketKey, totalKeyWidth + bracketWidth);
                const timeStr = formatTime(timeCost);
                const consoleLine = `${OVN}[${icon}][${timeStr}ms]${paddedKey} | ${msg}`;
                
                res[key] = {
                    group: key.split("_")[0] || "Unknown",
                    shortName: shortKey,
                    timeCost: timeCost,
                    steps: {},
                    state: mod.error ? "fail" : "done",
                    reason: mod.errorMSG || "",
                    logs: logRecord[key] || [],
                    consoleLine,
                };
            }
            
            return res;
        }
        
        function infoTotal() {
            if (!debugEnabled) return;
            
            for (const [key, mod] of Object.entries(moduleStateMap)) {
                const icon = mod.error ? "👾" : mod.debugLevel === "warn" ? "🛠️" : "🚀";
                const msg = mod.errorMSG || (mod.error ? "ERROR" : "DONE");
                console.log(logFormat({ icon, key, time: mod.timeCost || 0, msg }));
            }
            if (typeof OVN_OBSERVER_CENTER !== "undefined") {
                const stats = OVN_OBSERVER_CENTER.getActiveCount();
                console.log(`${OVN}[♾️][-.-ms][observer]            | Anonymous - ${stats.anonymous}`);
                console.log(`${OVN}[♾️][-.-ms][observer]            | Keyed - ${stats.keyed}`);
                console.log(`${OVN}[♾️][-.-ms][observer]            | Total - ${stats.byTarget}`);
            }
        }
        
        return {
            log, warn, error, getLogs, getConsoleLines, infoTotal,
            getSnapshot, startTrace, okTrace, failTrace, skipTrace,
            format,
        };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_GLOBAL_DEBUG };

