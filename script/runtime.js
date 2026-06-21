

(function () {
    
    if (unsafeWindow.__OVN_DEV_INJECT__) return;
    unsafeWindow.__OVN_DEV_INJECT__ = true;
    
    function getLogElement() {
        var container = document.getElementById('ovnDOM');
        if (!container) {
            container = document.createElement('div');
            container.id = 'ovnDOM';
            (document.body || document.documentElement).appendChild(container);
        }
        var logEl = document.getElementById('ovnLog');
        if (!logEl) {
            logEl = document.createElement('div');
            logEl.id = 'ovnLog';
            logEl.style.display = 'none';
            container.appendChild(logEl);
        }
        return logEl;
    }
    function ovnLog(msg) {
        var line = '[==👽OVN==] ' + msg;
        var logContainer = getLogElement();
        var entry = document.createElement('pre');
        entry.textContent = line;
        logContainer.appendChild(entry);
    }
    
    var currentMode = 'SSE';
    var page = unsafeWindow;
    var scriptEl = null;
    var prevCode = '';
    var etag = null;
    
    unsafeWindow.OVN_GM_API = {
        registerMenuCommand: GM_registerMenuCommand,
        getValue: GM_getValue,
        setValue: GM_setValue,
        listValues: GM_listValues,
        deleteValue: GM_deleteValue,
        addStyle: GM_addStyle,
        xmlhttpRequest: GM_xmlhttpRequest,
        addElement: GM_addElement
    };
    
    var GM_API = unsafeWindow.OVN_GM_API;
    
    GM_API.addStyle = function (css) {
        if (!css) return;
        var box = document.getElementById('ovnStyle');
        if (!box) {
            box = document.createElement('div');
            box.id = 'ovnStyle';
            (document.body || document.documentElement).appendChild(box);
        }
        var style = document.createElement('style');
        style.setAttribute('data-ovn-style-xxxx', '');
        style.textContent = css;
        
        box.appendChild(style);
        if (!page.__OVN_STYLES__) page.__OVN_STYLES__ = [];
        page.__OVN_STYLES__.push(style);
    };
    
    function getEtag(headers) {
        if (!headers) return null;
        var match = headers.match(/ETag:\s*(.+)/i);
        return match ? match[1].replace(/^["']|["']$/g, '') : null;
    }
    
    function getDOM() {
        var dom = document.getElementById('ovnDOM');
        if (dom) return dom;
        dom = document.createElement('div');
        dom.id = 'ovnDOM';
        (document.body || document.documentElement).appendChild(dom);
        return dom;
    }
    
    function apply(code) {
        try {
            if (scriptEl && scriptEl.parentNode) {
                scriptEl.parentNode.removeChild(scriptEl);
                scriptEl = null;
            }
            var styleList = page.__OVN_STYLES__ || [];
            for (var i = styleList.length - 1; i >= 0; i--) {
                var s = styleList[i];
                if (s && s.parentNode) s.parentNode.removeChild(s);
            }
            page.__OVN_STYLES__ = [];
            
            var globals = document.querySelectorAll('style[data-ovn-style-global]');
            for (var j = 0; j < globals.length; j++) globals[j].remove();
            var styleBox = document.getElementById('ovnStyle');
            if (styleBox) styleBox.innerHTML = '';
            
            page.__OVN_CSS_INJECTED__ = false;
            var cssInject = page.OVN_CSS_INJECTOR;
            page.OVN_GLOBAL_CUSTOM = false;
            
            var processed = code
                .replace(/\bGM_registerMenuCommand\s*\(/g, 'window.OVN_GM_API.registerMenuCommand(')
                .replace(/\bGM_getValue\s*\(/g, 'window.OVN_GM_API.getValue(')
                .replace(/\bGM_setValue\s*\(/g, 'window.OVN_GM_API.setValue(')
                .replace(/\bGM_listValues\s*\(/g, 'window.OVN_GM_API.listValues(')
                .replace(/\bGM_deleteValue\s*\(/g, 'window.OVN_GM_API.deleteValue(')
                .replace(/\bGM_addStyle\s*\(/g, 'window.OVN_GM_API.addStyle(')
                .replace(/\bGM_xmlhttpRequest\s*\(/g, 'window.OVN_GM_API.xmlhttpRequest(')
                .replace(/\bGM_addElement\s*\(/g, 'window.OVN_GM_API.addElement(');
                
            var dom = getDOM();
            var scriptBox = document.getElementById('ovnScript');
            if (!scriptBox) {
                scriptBox = document.createElement('div');
                scriptBox.id = 'ovnScript';
                dom.appendChild(scriptBox);
            }
            scriptEl = GM_API.addElement('script', {
                textContent: processed,
                'data-ovn-script-bundle': ''
            });
            scriptBox.appendChild(scriptEl);
        } catch (e) {
            ovnLog('API error ' + e.message);
        }
    }
    
    function fetchAndApply() {
        var reqHeaders = {};
        if (etag) reqHeaders['If-None-Match'] = etag;
        GM_xmlhttpRequest({
            method: 'GET',
            url: 'http://localhost:' + __PORT__ + '/__BUNDLE__' + '?t=' + Date.now(),
            headers: reqHeaders,
            timeout: 10000,
            onload: function (res) {
                if (res.status === 304) return;
                if (res.status !== 200) return;
                
                var code = res.responseText;
                if (!code || !code.trim()) return;
                code = code.replace(/^\/\/ ==UserScript==[\s\S]*?\/\/ ==\/UserScript==\r?\n?/, '');
                if (code === prevCode) return;
                prevCode = code;
                
                var newEtag = getEtag(res.responseHeaders);
                if (newEtag) etag = newEtag;
                
                apply(code);
            },
            onerror: function () {
                ovnLog('fetch error');
            }
        });
    }
    
    function startETag() {
        ovnLog('ETag | 伪热更新 刷新后生效');
        window.__OVN_DEV_MODE__ = 'ETag';
        document.documentElement.setAttribute('data-ovn-mode', 'ETag');
        fetchAndApply();
    }
    
    function startSSE() {
        
        var retry = 0;
        var maxRetry = 3;
        var etagModeActivated = false;
        var eventSrc = null;
        
        function connect() {
            ovnLog('SSE  | 热更新 变更即生效');
            eventSrc = new EventSource('http://localhost:' + __PORT__ + '/__OVN_SSE__');
            eventSrc.onopen = function() {
                window.__OVN_DEV_MODE__ = 'SSE';
                document.documentElement.setAttribute('data-ovn-mode', 'SSE');
            };
            eventSrc.onmessage = function () {
                fetchAndApply();
            };
            eventSrc.onerror = function () {
                eventSrc.close();
                retry++;
                ovnLog('SSE  | retry ' + retry + '/' + maxRetry);
                if (!etagModeActivated) {
                    etagModeActivated = true;
                    startETag();
                }
                if (retry < maxRetry) {
                    setTimeout(connect, 5000);
                } else {
                    ovnLog('SSE  | offline');
                }
            };
        }
        connect();
    }
    
    window.__OVN_DEV_MODE__ = 'SSE';
    document.documentElement.setAttribute('data-ovn-mode', 'SSE');
    
    startSSE();
    fetchAndApply();
    
})();

