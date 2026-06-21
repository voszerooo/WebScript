// ==UserScript==


// @name                      Global.Custom.DEV
// @description               dev_loader
// @version                   7.0.2
// @author                    voszerooo
// @icon                      https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png
// @sourceXXX                 https://greasyfork.org/scripts/579569

// @match                     *://**/*
// @include                   *://baidu.com/*
// @include                   *://google.com/*
// @include                   *://bing.com/*
// @include                   *://youtube.com/*
// @include                   *://bilibili.com/*
// @include                   *://chat.deepseek.com/*
// @include                   *://deepseek.com/*
// @include                   *://chatgpt.com/*
// @include                   *://zhihu.com/*
// @include                   *://localhost:*/*
// @include                   *://127.0.0.1:*/*
// @exclude                   *.cloudflare.com/*
// @exclude                   *://*bilibili.com/cheese/*
// @grant                     GM_addStyle
// @grant                     GM_registerMenuCommand
// @grant                     GM_getValue
// @grant                     GM_setValue
// @grant                     GM_listValues
// @grant                     GM_deleteValue
// @grant                     GM_xmlhttpRequest
// @grant                     GM_addElement
// @grant                     unsafeWindow
// @run-at                    document-start

// @connect                   localhost
// @require                   http://localhost:9290/dev.entry.js


// ==/UserScript==


const ovnMagic = (() => {
    
    if (window.__OVN_MAGIC__) return;
    window.__OVN_MAGIC__ = true;
    
    const ID = 'ovnMagic';
    const html = document.documentElement;
    
    const exist = document.getElementById(ID);
    if (exist) {
        if (html.classList.contains('ovn')) {
            exist.remove();
            return;
        }
        const obs = new MutationObserver(() => {
            if (html.classList.contains('ovn')) {
                const element = document.getElementById(ID);
                if (element) element.remove();
                obs.disconnect();
            }
        });
        obs.observe(html, { attributes: true, attributeFilter: ['class'] });
        return;
    }
    if (html.classList.contains('ovn')) return;
    
    const style = document.createElement('style');
    style.id = ID;
    style.textContent = 'html:not(.ovn){opacity:0!important;pointer-events:none!important}';
    
    const clear = () => {
        style.remove();
        if (observer) observer.disconnect();
    };
    
    let observer = new MutationObserver(() => {
        if (html.classList.contains('ovn')) clear();
    });
    observer.observe(html, { attributes: true, attributeFilter: ['class'] });
    setTimeout(() => {
        if (!html.classList.contains('ovn') && document.getElementById(ID)) {
            clear();
        }
    }, 526);
    
    const insert = () => {
        if (document.getElementById(ID)) return;
        const head = document.head;
        if (head) {
            head.insertBefore(style, head.firstChild);
            return true;
        }
        return false;
    };
    if (!insert()) {
        const tryInsert = () => {
            if (insert()) {
                observer?.disconnect();
            } else {
                requestAnimationFrame(tryInsert);
            }
        };
        requestAnimationFrame(tryInsert);
    }
    
})();

