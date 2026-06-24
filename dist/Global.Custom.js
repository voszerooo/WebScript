// ==UserScript==


// @name                      全局定制 Global.Custom
// @description               顶部加载条 => 进度条 | 个性化滚动条 | 网页手势 | 快速阅读 | favicon 替换 | 自定义字体 | 百度 / Google / Bing / 语雀 / ComfyUI / DeepSeek / ChatGPT ... 等多站点 个性化/优化/增强
// @version                   7.1.1
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

// @connectXXX                XXXXX
// @requireXXX                XXXXX
// @resourceXXX               XXXXX

// @namespace                 https://github.com/voszerooo
// @homepageURL               https://github.com/voszerooo/WebScript
// @compatible                Chrome
// @license                   Apache-2.0
// @copyright                 2026 voszerooo
// @contact                   Viktor.Dennie@Gmail.com
// @supportURL                https://github.com/voszerooo/WebScript/issues


// ==/UserScript==


(() => {
  'use strict';
  (() => {
    if (window.__OVN_MAGIC__) return;
    window.__OVN_MAGIC__ = !0;
    const n = 'ovnMagic',
      r = document.documentElement,
      e = document.getElementById(n);
    if (e) {
      if (r.classList.contains('ovn')) return void e.remove();
      const t = new MutationObserver(() => {
        if (r.classList.contains('ovn')) {
          const r = document.getElementById(n);
          (r && r.remove(), t.disconnect());
        }
      });
      return void t.observe(r, { attributes: !0, attributeFilter: ['class'] });
    }
    if (r.classList.contains('ovn')) return;
    const t = document.createElement('style');
    ((t.id = n), (t.textContent = 'html:not(.ovn){opacity:0!important;pointer-events:none!important}'));
    const o = () => {
      (t.remove(), a && a.disconnect());
    };
    let a = new MutationObserver(() => {
      r.classList.contains('ovn') && o();
    });
    (a.observe(r, { attributes: !0, attributeFilter: ['class'] }),
      setTimeout(() => {
        !r.classList.contains('ovn') && document.getElementById(n) && o();
      }, 526));
    const i = () => {
      if (document.getElementById(n)) return;
      const r = document.head;
      return !!r && (r.insertBefore(t, r.firstChild), !0);
    };
    if (!i()) {
      const n = () => {
        i() ? a?.disconnect() : requestAnimationFrame(n);
      };
      requestAnimationFrame(n);
    }
  })();
  //
  // WebScript is free and open source.
  //
  // If you purchased this script from a third party,
  // you may have been misled or overcharged.
  //
  // Official repository:
  // https://github.com/voszerooo/WebScript
  //
  const n = (() => {
    const n = {},
      r = {};
    function e(n, r, e) {
      try {
        const n = r(e);
        return (n && 'object' == typeof n && e && 'object' == typeof e && Object.assign(e, n), n);
      } catch (r) {
        return (console.error(`[SUBJOIN] Hook "${n}" error:`, r), null);
      }
    }
    return { on: (t, o) => 'function' == typeof o && ((n[t] ??= []).push(o), r[t] && e(t, o, r[t]), !0), apply: (t, o) => ((r[t] = o), (n[t] || []).map((n) => e(t, n, o))), getHandlers: (r) => n[r] || [], getTarget: (n) => r[n] || null };
  })();
  const r = [...[':root{--ovnAccentHEX: #75839F;--ovnAccentHSL-H: 220;--ovnAccentHSL-S: 18%;--ovnAccentHSL-L: 54%;--ovnAccentHSL: 220, 18%, 54%;--ovnAccentALT: 220, 18%, 56%;--ovnAccentSEL: 220, 16%, 44%;--ovnAccentCBD: 220, 18%, 74%;--ovnAccentCSD: 220, 18%, 44%;--ovnSecondaryHEX: #454A54;--ovnSecondaryHSL-H: 220;--ovnSecondaryHSL-S: 10%;--ovnSecondaryHSL-L: 30%;--ovnSecondaryHSL: 220, 10%, 30%;--ovnSecondaryALT: 220, 10%, 32%;--ovnSecondarySEL: 220, 8%, 20%;--ovnSecondaryCBD: 220, 10%, 50%;--ovnSecondaryCSD: 220, 10%, 20%;--ovnPrimaryHEX: #2C2F35;--ovnPrimaryHSL-H: 220;--ovnPrimaryHSL-S: 9%;--ovnPrimaryHSL-L: 19%;--ovnPrimaryHSL: 220, 9%, 19%;--ovnPrimaryALT: 220, 9%, 21%;--ovnPrimarySEL: 220, 7%, 9%;--ovnPrimaryCBD: 220, 9%, 39%;--ovnPrimaryCSD: 220, 9%, 9%;--ovnDarkHEX: #0B0C0E;--ovnDarkHSL-H: 220;--ovnDarkHSL-S: 12%;--ovnDarkHSL-L: 5%;--ovnDarkHSL: 220, 12%, 5%;--ovnDarkALT: 220, 12%, 7%;--ovnDarkSEL: 220, 10%, -5%;--ovnDarkCBD: 220, 12%, 25%;--ovnDarkCSD: 220, 12%, -5%;--ovnBase00HEX: #1C1E22;--ovnBase00HSL-H: 220;--ovnBase00HSL-S: 10%;--ovnBase00HSL-L: 12%;--ovnBase00HSL: 220, 10%, 12%;--ovnBase00ALT: 220, 10%, 14%;--ovnBase00SEL: 220, 8%, 2%;--ovnBase00CBD: 220, 10%, 32%;--ovnBase00CSD: 220, 10%, 2%;--ovnBase01HEX: #1F2228;--ovnBase01HSL-H: 220;--ovnBase01HSL-S: 13%;--ovnBase01HSL-L: 14%;--ovnBase01HSL: 220, 13%, 14%;--ovnBase01ALT: 220, 13%, 16%;--ovnBase01SEL: 220, 11%, 4%;--ovnBase01CBD: 220, 13%, 34%;--ovnBase01CSD: 220, 13%, 4%;--ovnBase02HEX: #2C2F35;--ovnBase02HSL-H: 220;--ovnBase02HSL-S: 9%;--ovnBase02HSL-L: 19%;--ovnBase02HSL: 220, 9%, 19%;--ovnBase02ALT: 220, 9%, 21%;--ovnBase02SEL: 220, 7%, 9%;--ovnBase02CBD: 220, 9%, 39%;--ovnBase02CSD: 220, 9%, 9%;--ovnBase03HEX: #353941;--ovnBase03HSL-H: 220;--ovnBase03HSL-S: 10%;--ovnBase03HSL-L: 23%;--ovnBase03HSL: 220, 10%, 23%;--ovnBase03ALT: 220, 10%, 25%;--ovnBase03SEL: 220, 8%, 13%;--ovnBase03CBD: 220, 10%, 43%;--ovnBase03CSD: 220, 10%, 13%;--ovnBase04HEX: #454A54;--ovnBase04HSL-H: 220;--ovnBase04HSL-S: 10%;--ovnBase04HSL-L: 30%;--ovnBase04HSL: 220, 10%, 30%;--ovnBase04ALT: 220, 10%, 32%;--ovnBase04SEL: 220, 8%, 20%;--ovnBase04CBD: 220, 10%, 50%;--ovnBase04CSD: 220, 10%, 20%;--ovnBase05HEX: #757C8A;--ovnBase05HSL-H: 220;--ovnBase05HSL-S: 8%;--ovnBase05HSL-L: 50%;--ovnBase05HSL: 220, 8%, 50%;--ovnBase05ALT: 220, 8%, 52%;--ovnBase05SEL: 220, 6%, 40%;--ovnBase05CBD: 220, 8%, 70%;--ovnBase05CSD: 220, 8%, 40%;--ovnBase06HEX: #ABB0BA;--ovnBase06HSL-H: 220;--ovnBase06HSL-S: 10%;--ovnBase06HSL-L: 70%;--ovnBase06HSL: 220, 10%, 70%;--ovnBase06ALT: 220, 10%, 72%;--ovnBase06SEL: 220, 8%, 60%;--ovnBase06CBD: 220, 10%, 90%;--ovnBase06CSD: 220, 10%, 60%;--ovnBase07HEX: #BEC2CA;--ovnBase07HSL-H: 220;--ovnBase07HSL-S: 10%;--ovnBase07HSL-L: 77%;--ovnBase07HSL: 220, 10%, 77%;--ovnBase07ALT: 220, 10%, 79%;--ovnBase07SEL: 220, 8%, 67%;--ovnBase07CBD: 220, 10%, 97%;--ovnBase07CSD: 220, 10%, 67%;--ovnBase08HEX: #F4F4F4;--ovnBase08HSL-H: 0;--ovnBase08HSL-S: 0%;--ovnBase08HSL-L: 96%;--ovnBase08HSL: 0, 0%, 96%;--ovnBase08ALT: 0, 0%, 98%;--ovnBase08SEL: 0, -2%, 86%;--ovnBase08CBD: 0, 0%, 116%;--ovnBase08CSD: 0, 0%, 86%;--ovnBase09HEX: #F9F9F9;--ovnBase09HSL-H: 0;--ovnBase09HSL-S: 0%;--ovnBase09HSL-L: 98%;--ovnBase09HSL: 0, 0%, 98%;--ovnBase09ALT: 0, 0%, 100%;--ovnBase09SEL: 0, -2%, 88%;--ovnBase09CBD: 0, 0%, 118%;--ovnBase09CSD: 0, 0%, 88%}:root[data-ovn-theme=dark],:root[data-ovn-theme=dark][ovnMain]{--ovnAccentHEX: #4C525E;--ovnAccentHSL-H: 220;--ovnAccentHSL-S: 11%;--ovnAccentHSL-L: 33%;--ovnAccentHSL: 220, 11%, 33%;--ovnAccentALT: 220, 11%, 35%;--ovnAccentSEL: 220, 9%, 23%;--ovnAccentCBD: 220, 11%, 53%;--ovnAccentCSD: 220, 11%, 23%;--ovnSecondaryHEX: #2D3139;--ovnSecondaryHSL-H: 220;--ovnSecondaryHSL-S: 12%;--ovnSecondaryHSL-L: 20%;--ovnSecondaryHSL: 220, 12%, 20%;--ovnSecondaryALT: 220, 12%, 22%;--ovnSecondarySEL: 220, 10%, 10%;--ovnSecondaryCBD: 220, 12%, 40%;--ovnSecondaryCSD: 220, 12%, 10%;--ovnPrimaryHEX: #1D1E20;--ovnPrimaryHSL-H: 220;--ovnPrimaryHSL-S: 5%;--ovnPrimaryHSL-L: 12%;--ovnPrimaryHSL: 220, 5%, 12%;--ovnPrimaryALT: 220, 5%, 14%;--ovnPrimarySEL: 220, 3%, 2%;--ovnPrimaryCBD: 220, 5%, 32%;--ovnPrimaryCSD: 220, 5%, 2%;--ovnDarkHEX: #0B0C0E;--ovnDarkHSL-H: 220;--ovnDarkHSL-S: 12%;--ovnDarkHSL-L: 5%;--ovnDarkHSL: 220, 12%, 5%;--ovnDarkALT: 220, 12%, 7%;--ovnDarkSEL: 220, 10%, -5%;--ovnDarkCBD: 220, 12%, 25%;--ovnDarkCSD: 220, 12%, -5%}:root[data-ovn-theme=dark],:root[data-ovn-theme=dark][ovnBase]{--ovnBase00HEX: #1C1E22;--ovnBase00HSL-H: 220;--ovnBase00HSL-S: 10%;--ovnBase00HSL-L: 12%;--ovnBase00HSL: 220, 10%, 12%;--ovnBase00ALT: 220, 10%, 14%;--ovnBase00SEL: 220, 8%, 2%;--ovnBase00CBD: 220, 10%, 32%;--ovnBase00CSD: 220, 10%, 2%;--ovnBase01HEX: #1F2228;--ovnBase01HSL-H: 220;--ovnBase01HSL-S: 13%;--ovnBase01HSL-L: 14%;--ovnBase01HSL: 220, 13%, 14%;--ovnBase01ALT: 220, 13%, 16%;--ovnBase01SEL: 220, 11%, 4%;--ovnBase01CBD: 220, 13%, 34%;--ovnBase01CSD: 220, 13%, 4%;--ovnBase02HEX: #2C2F35;--ovnBase02HSL-H: 220;--ovnBase02HSL-S: 9%;--ovnBase02HSL-L: 19%;--ovnBase02HSL: 220, 9%, 19%;--ovnBase02ALT: 220, 9%, 21%;--ovnBase02SEL: 220, 7%, 9%;--ovnBase02CBD: 220, 9%, 39%;--ovnBase02CSD: 220, 9%, 9%;--ovnBase03HEX: #353941;--ovnBase03HSL-H: 220;--ovnBase03HSL-S: 10%;--ovnBase03HSL-L: 23%;--ovnBase03HSL: 220, 10%, 23%;--ovnBase03ALT: 220, 10%, 25%;--ovnBase03SEL: 220, 8%, 13%;--ovnBase03CBD: 220, 10%, 43%;--ovnBase03CSD: 220, 10%, 13%;--ovnBase04HEX: #454A54;--ovnBase04HSL-H: 220;--ovnBase04HSL-S: 10%;--ovnBase04HSL-L: 30%;--ovnBase04HSL: 220, 10%, 30%;--ovnBase04ALT: 220, 10%, 32%;--ovnBase04SEL: 220, 8%, 20%;--ovnBase04CBD: 220, 10%, 50%;--ovnBase04CSD: 220, 10%, 20%;--ovnBase05HEX: #757C8A;--ovnBase05HSL-H: 220;--ovnBase05HSL-S: 8%;--ovnBase05HSL-L: 50%;--ovnBase05HSL: 220, 8%, 50%;--ovnBase05ALT: 220, 8%, 52%;--ovnBase05SEL: 220, 6%, 40%;--ovnBase05CBD: 220, 8%, 70%;--ovnBase05CSD: 220, 8%, 40%;--ovnBase06HEX: #ABB0BA;--ovnBase06HSL-H: 220;--ovnBase06HSL-S: 10%;--ovnBase06HSL-L: 70%;--ovnBase06HSL: 220, 10%, 70%;--ovnBase06ALT: 220, 10%, 72%;--ovnBase06SEL: 220, 8%, 60%;--ovnBase06CBD: 220, 10%, 90%;--ovnBase06CSD: 220, 10%, 60%;--ovnBase07HEX: #BEC2CA;--ovnBase07HSL-H: 220;--ovnBase07HSL-S: 10%;--ovnBase07HSL-L: 77%;--ovnBase07HSL: 220, 10%, 77%;--ovnBase07ALT: 220, 10%, 79%;--ovnBase07SEL: 220, 8%, 67%;--ovnBase07CBD: 220, 10%, 97%;--ovnBase07CSD: 220, 10%, 67%;--ovnBase08HEX: #F4F4F4;--ovnBase08HSL-H: 0;--ovnBase08HSL-S: 0%;--ovnBase08HSL-L: 96%;--ovnBase08HSL: 0, 0%, 96%;--ovnBase08ALT: 0, 0%, 98%;--ovnBase08SEL: 0, -2%, 86%;--ovnBase08CBD: 0, 0%, 116%;--ovnBase08CSD: 0, 0%, 86%;--ovnBase09HEX: #F9F9F9;--ovnBase09HSL-H: 0;--ovnBase09HSL-S: 0%;--ovnBase09HSL-L: 98%;--ovnBase09HSL: 0, 0%, 98%;--ovnBase09ALT: 0, 0%, 100%;--ovnBase09SEL: 0, -2%, 88%;--ovnBase09CBD: 0, 0%, 118%;--ovnBase09CSD: 0, 0%, 88%}:root[data-ovn-theme=light],:root[data-ovn-theme=light][ovnMain]{--ovnAccentHEX: #75839F;--ovnAccentHSL-H: 220;--ovnAccentHSL-S: 18%;--ovnAccentHSL-L: 54%;--ovnAccentHSL: 220, 18%, 54%;--ovnAccentALT: 220, 18%, 56%;--ovnAccentSEL: 220, 16%, 44%;--ovnAccentCBD: 220, 18%, 74%;--ovnAccentCSD: 220, 18%, 44%;--ovnSecondaryHEX: #454A54;--ovnSecondaryHSL-H: 220;--ovnSecondaryHSL-S: 10%;--ovnSecondaryHSL-L: 30%;--ovnSecondaryHSL: 220, 10%, 30%;--ovnSecondaryALT: 220, 10%, 32%;--ovnSecondarySEL: 220, 8%, 20%;--ovnSecondaryCBD: 220, 10%, 50%;--ovnSecondaryCSD: 220, 10%, 20%;--ovnPrimaryHEX: #2C2F35;--ovnPrimaryHSL-H: 220;--ovnPrimaryHSL-S: 9%;--ovnPrimaryHSL-L: 19%;--ovnPrimaryHSL: 220, 9%, 19%;--ovnPrimaryALT: 220, 9%, 21%;--ovnPrimarySEL: 220, 7%, 9%;--ovnPrimaryCBD: 220, 9%, 39%;--ovnPrimaryCSD: 220, 9%, 9%;--ovnDarkHEX: #0B0C0E;--ovnDarkHSL-H: 220;--ovnDarkHSL-S: 12%;--ovnDarkHSL-L: 5%;--ovnDarkHSL: 220, 12%, 5%;--ovnDarkALT: 220, 12%, 7%;--ovnDarkSEL: 220, 10%, -5%;--ovnDarkCBD: 220, 12%, 25%;--ovnDarkCSD: 220, 12%, -5%}:root[data-ovn-theme=light],:root[data-ovn-theme=light][ovnBase]{--ovnBase00HEX: #1C1E22;--ovnBase00HSL-H: 220;--ovnBase00HSL-S: 10%;--ovnBase00HSL-L: 12%;--ovnBase00HSL: 220, 10%, 12%;--ovnBase00ALT: 220, 10%, 14%;--ovnBase00SEL: 220, 8%, 2%;--ovnBase00CBD: 220, 10%, 32%;--ovnBase00CSD: 220, 10%, 2%;--ovnBase01HEX: #1F2228;--ovnBase01HSL-H: 220;--ovnBase01HSL-S: 13%;--ovnBase01HSL-L: 14%;--ovnBase01HSL: 220, 13%, 14%;--ovnBase01ALT: 220, 13%, 16%;--ovnBase01SEL: 220, 11%, 4%;--ovnBase01CBD: 220, 13%, 34%;--ovnBase01CSD: 220, 13%, 4%;--ovnBase02HEX: #2C2F35;--ovnBase02HSL-H: 220;--ovnBase02HSL-S: 9%;--ovnBase02HSL-L: 19%;--ovnBase02HSL: 220, 9%, 19%;--ovnBase02ALT: 220, 9%, 21%;--ovnBase02SEL: 220, 7%, 9%;--ovnBase02CBD: 220, 9%, 39%;--ovnBase02CSD: 220, 9%, 9%;--ovnBase03HEX: #353941;--ovnBase03HSL-H: 220;--ovnBase03HSL-S: 10%;--ovnBase03HSL-L: 23%;--ovnBase03HSL: 220, 10%, 23%;--ovnBase03ALT: 220, 10%, 25%;--ovnBase03SEL: 220, 8%, 13%;--ovnBase03CBD: 220, 10%, 43%;--ovnBase03CSD: 220, 10%, 13%;--ovnBase04HEX: #454A54;--ovnBase04HSL-H: 220;--ovnBase04HSL-S: 10%;--ovnBase04HSL-L: 30%;--ovnBase04HSL: 220, 10%, 30%;--ovnBase04ALT: 220, 10%, 32%;--ovnBase04SEL: 220, 8%, 20%;--ovnBase04CBD: 220, 10%, 50%;--ovnBase04CSD: 220, 10%, 20%;--ovnBase05HEX: #757C8A;--ovnBase05HSL-H: 220;--ovnBase05HSL-S: 8%;--ovnBase05HSL-L: 50%;--ovnBase05HSL: 220, 8%, 50%;--ovnBase05ALT: 220, 8%, 52%;--ovnBase05SEL: 220, 6%, 40%;--ovnBase05CBD: 220, 8%, 70%;--ovnBase05CSD: 220, 8%, 40%;--ovnBase06HEX: #ABB0BA;--ovnBase06HSL-H: 220;--ovnBase06HSL-S: 10%;--ovnBase06HSL-L: 70%;--ovnBase06HSL: 220, 10%, 70%;--ovnBase06ALT: 220, 10%, 72%;--ovnBase06SEL: 220, 8%, 60%;--ovnBase06CBD: 220, 10%, 90%;--ovnBase06CSD: 220, 10%, 60%;--ovnBase07HEX: #BEC2CA;--ovnBase07HSL-H: 220;--ovnBase07HSL-S: 10%;--ovnBase07HSL-L: 77%;--ovnBase07HSL: 220, 10%, 77%;--ovnBase07ALT: 220, 10%, 79%;--ovnBase07SEL: 220, 8%, 67%;--ovnBase07CBD: 220, 10%, 97%;--ovnBase07CSD: 220, 10%, 67%;--ovnBase08HEX: #F4F4F4;--ovnBase08HSL-H: 0;--ovnBase08HSL-S: 0%;--ovnBase08HSL-L: 96%;--ovnBase08HSL: 0, 0%, 96%;--ovnBase08ALT: 0, 0%, 98%;--ovnBase08SEL: 0, -2%, 86%;--ovnBase08CBD: 0, 0%, 116%;--ovnBase08CSD: 0, 0%, 86%;--ovnBase09HEX: #F9F9F9;--ovnBase09HSL-H: 0;--ovnBase09HSL-S: 0%;--ovnBase09HSL-L: 98%;--ovnBase09HSL: 0, 0%, 98%;--ovnBase09ALT: 0, 0%, 100%;--ovnBase09SEL: 0, -2%, 88%;--ovnBase09CBD: 0, 0%, 118%;--ovnBase09CSD: 0, 0%, 88%}:root,[ovnState]{--ovnGlow00HEX: #D9B9F9;--ovnGlow00HSL-H: 270;--ovnGlow00HSL-S: 84%;--ovnGlow00HSL-L: 85%;--ovnGlow00HSL: 270, 84%, 85%;--ovnGlow01HEX: #708BC2;--ovnGlow01HSL-H: 220;--ovnGlow01HSL-S: 40%;--ovnGlow01HSL-L: 60%;--ovnGlow01HSL: 220, 40%, 60%;--ovnGlow02HEX: #9087F8;--ovnGlow02HSL-H: 245;--ovnGlow02HSL-S: 89%;--ovnGlow02HSL-L: 75%;--ovnGlow02HSL: 245, 89%, 75%;--ovnGlow03HEX: #25F493;--ovnGlow03HSL-H: 152;--ovnGlow03HSL-S: 90%;--ovnGlow03HSL-L: 55%;--ovnGlow03HSL: 152, 90%, 55%;--ovnGlow04HEX: #13EC99;--ovnGlow04HSL-H: 157;--ovnGlow04HSL-S: 85%;--ovnGlow04HSL-L: 50%;--ovnGlow04HSL: 157, 85%, 50%;--ovnGlow05HEX: #79ECD9;--ovnGlow05HSL-H: 170;--ovnGlow05HSL-S: 75%;--ovnGlow05HSL-L: 70%;--ovnGlow05HSL: 170, 75%, 70%;--ovnGlow06HEX: #CEF4FD;--ovnGlow06HSL-H: 191;--ovnGlow06HSL-S: 92%;--ovnGlow06HSL-L: 90%;--ovnGlow06HSL: 191, 92%, 90%;--ovnGlow07HEX: #F7F0B7;--ovnGlow07HSL-H: 53;--ovnGlow07HSL-S: 80%;--ovnGlow07HSL-L: 84%;--ovnGlow07HSL: 53, 80%, 84%;--ovnGlow08HEX: #BCF5F4;--ovnGlow08HSL-H: 179;--ovnGlow08HSL-S: 74%;--ovnGlow08HSL-L: 85%;--ovnGlow08HSL: 179, 74%, 85%;--ovnGlow09HEX: #85E0D7;--ovnGlow09HSL-H: 174;--ovnGlow09HSL-S: 59%;--ovnGlow09HSL-L: 70%;--ovnGlow09HSL: 174, 59%, 70%;--ovnStateSuccessHEX: #25F49D;--ovnStateSuccessHSL-H: 155;--ovnStateSuccessHSL-S: 90%;--ovnStateSuccessHSL-L: 55%;--ovnStateSuccessHSL: 155, 90%, 55%;--ovnStateWarnHEX: #FF7424;--ovnStateWarnHSL-H: 22;--ovnStateWarnHSL-S: 100%;--ovnStateWarnHSL-L: 57%;--ovnStateWarnHSL: 22, 100%, 57%;--ovnStateErrorHEX: #FC5E4F;--ovnStateErrorHSL-H: 5;--ovnStateErrorHSL-S: 97%;--ovnStateErrorHSL-L: 65%;--ovnStateErrorHSL: 5, 97%, 65%;--ovnStateLinkHEX: #478BE5;--ovnStateLinkHSL-H: 214;--ovnStateLinkHSL-S: 75%;--ovnStateLinkHSL-L: 59%;--ovnStateLinkHSL: 214, 75%, 59%;--ovnStateVisitedHEX: #00B3B3;--ovnStateVisitedHSL-H: 180;--ovnStateVisitedHSL-S: 100%;--ovnStateVisitedHSL-L: 35%;--ovnStateVisitedHSL: 180, 100%, 35%;--ovnStateMatchHEX: #FF5242;--ovnStateMatchHSL-H: 5;--ovnStateMatchHSL-S: 100%;--ovnStateMatchHSL-L: 63%;--ovnStateMatchHSL: 5, 100%, 63%;--ovnRed00HEX: #E93F3F;--ovnRed00HSL-H: 0;--ovnRed00HSL-S: 79%;--ovnRed00HSL-L: 58%;--ovnRed00HSL: 0, 79%, 58%;--ovnRed02HEX: #EF4444;--ovnRed02HSL-H: 0;--ovnRed02HSL-S: 84%;--ovnRed02HSL-L: 60%;--ovnRed02HSL: 0, 84%, 60%;--ovnOrange00HEX: #F55F3A;--ovnOrange00HSL-H: 12;--ovnOrange00HSL-S: 90%;--ovnOrange00HSL-L: 59%;--ovnOrange00HSL: 12, 90%, 59%;--ovnOrange01HEX: #FF5242;--ovnOrange01HSL-H: 5;--ovnOrange01HSL-S: 100%;--ovnOrange01HSL-L: 63%;--ovnOrange01HSL: 5, 100%, 63%;--ovnOrange02HEX: #EE5C2A;--ovnOrange02HSL-H: 15;--ovnOrange02HSL-S: 85%;--ovnOrange02HSL-L: 55%;--ovnOrange02HSL: 15, 85%, 55%;--ovnYellow00HEX: #F7F0B7;--ovnYellow00HSL-H: 53;--ovnYellow00HSL-S: 80%;--ovnYellow00HSL-L: 84%;--ovnYellow00HSL: 53, 80%, 84%;--ovnGreen00HEX: #11D080;--ovnGreen00HSL-H: 155;--ovnGreen00HSL-S: 85%;--ovnGreen00HSL-L: 44%;--ovnGreen00HSL: 155, 85%, 44%;--ovnGreen01HEX: #29F9A9;--ovnGreen01HSL-H: 157;--ovnGreen01HSL-S: 95%;--ovnGreen01HSL-L: 57%;--ovnGreen01HSL: 157, 95%, 57%;--ovnGreen02HEX: #10B981;--ovnGreen02HSL-H: 160;--ovnGreen02HSL-S: 84%;--ovnGreen02HSL-L: 39%;--ovnGreen02HSL: 160, 84%, 39%;--ovnCyan00HEX: #00B3B3;--ovnCyan00HSL-H: 180;--ovnCyan00HSL-S: 100%;--ovnCyan00HSL-L: 35%;--ovnCyan00HSL: 180, 100%, 35%;--ovnBlue00HEX: #478BE5;--ovnBlue00HSL-H: 214;--ovnBlue00HSL-S: 75%;--ovnBlue00HSL-L: 59%;--ovnBlue00HSL: 214, 75%, 59%;--ovnBlue01HEX: #2BC2FF;--ovnBlue01HSL-H: 197;--ovnBlue01HSL-S: 100%;--ovnBlue01HSL-L: 58%;--ovnBlue01HSL: 197, 100%, 58%;--ovnBlue02HEX: #2BC2FF;--ovnBlue02HSL-H: 197;--ovnBlue02HSL-S: 100%;--ovnBlue02HSL-L: 58%;--ovnBlue02HSL: 197, 100%, 58%;--ovnPurple00HEX: #9087F8;--ovnPurple00HSL-H: 245;--ovnPurple00HSL-S: 89%;--ovnPurple00HSL-L: 75%;--ovnPurple00HSL: 245, 89%, 75%}:root,[ovnMarkdown]{--ovnMarkdownH1: #494F4D;--ovnMarkdownH2: #515463;--ovnMarkdownH3: #40465D;--ovnMarkdownH4: #4D5B66;--ovnMarkdownH5: #4F5E68;--ovnMarkdownH6: #5B7481}:root,[ovnGather]{--ovnBaidu: #4E6EF2;--ovnGoogleBlue: #4285F4;--ovnGoogleRad: #ea4335;--ovnGoogleYellow: #FBBC05;--ovnGoogleGreen: #34a853;--ovnBing: #174AE4;--ovnYoutubeRad: #FD0234;--ovn115: #2777F8;--ovnIQIYI: #00F48E;--ovnBiliPink: #FB7299;--ovnBiliBlue: #00AEEC}:root,[ovnStore]{--ovnGridS: hsla(var(--ovnBase05HSL), .05);--ovnGridL: hsla(var(--ovnBase05HSL), .07);--ovnGridD: hsla(var(--ovnBase05HSL), .07);--ovnGlassBase: hsla(var(--ovnBase09HSL), .6);--ovnGlassTidy: hsla(var(--ovnBase09HSL), .8);--ovnGlassDark: hsla(var(--ovnPrimaryHSL), .526);--ovnForeground: #000;--ovnBackground: #000;--ovnBackdrop: #000}', '\r\n:root, [ovnGlobalFont] {\r\n    \r\n    --ovnBaseFont: \r\n        Emoji,\r\n        "Public Sans", "Inter",\r\n        "PingFang SC", "Source Han Sans SC", "Microsoft YaHei",\r\n        sans-serif, system-ui;\r\n        \r\n    --ovnBaseSize: 14px;\r\n    --ovnBaseWeight: 400;\r\n    --ovnBaseLineHeight: 1.5;\r\n    --ovnBaseColor: var(--ovnBase04HEX);\r\n    \r\n    --ovnTitleSize: 24px;\r\n    --ovnTitleWeight: 700;\r\n    --ovnTitleLineHeight: 1.5;\r\n    --ovnTitleColor: var(--ovnBase02HEX);\r\n    \r\n    --ovnCodeFont: \r\n        Emoji,\r\n        "JetBrains Mono", "Fira Code",\r\n        "PingFang SC", "Source Han Sans SC", "Microsoft YaHei",\r\n        monospace, system-ui;\r\n        \r\n    --ovnCodeSize: 12px;\r\n    --ovnCodeWeight: 400;\r\n    --ovnCodeLineHeight: 1.5;\r\n    --ovnCodeColor: var(--ovnAccentHEX);\r\n    \r\n    --ovnOftenFontBase: var(--ovnBaseWeight) var(--ovnBaseSize)/var(--ovnBaseLineHeight) var(--ovnBaseFont);\r\n    --ovnOftenFontTitle: var(--ovnTitleWeight) var(--ovnTitleSize)/var(--ovnTitleLineHeight) var(--ovnBaseFont);\r\n    \r\n}\r\n\r\n@font-face {\r\n    font-family: Emoji;\r\n    src: local("Apple Color Emoji"), local("Segoe UI Emoji"), local("Segoe UI Symbol"), local("Noto Color Emoji");\r\n    unicode-range: U+1F000-1F9FF;\r\n}\r\n', '\r\n:root, [ovnGlobalUI] {\r\n    \r\n    --ovnBaseRadius: 4px;\r\n    --ovnBaseBorder: 1px solid;\r\n    --ovnBaseShadow: 0 0 10px 0;\r\n    --ovnBaseFilter: blur(5.26px);\r\n    --ovnBaseZoomIn: ;\r\n    --ovnOftenBaseBorderBase: var();\r\n    --ovnOftenBaseBorderHover: var();\r\n    --ovnOftenBaseShadowBase: var();\r\n    --ovnOftenBaseShadowHover: var();\r\n    \r\n    --ovnUIRadius: 6px;\r\n    --ovnUIBorder: 2px solid;\r\n    --ovnUIShadow: 10px 10px 20px 0;\r\n    --ovnUIFilter: blur(9.26px) saturate(1.52);\r\n    --ovnUIZoomIn: scale(1.26);\r\n    --ovnOftenUIBorderBase: var(--ovnUIBorder) hsla(var(--ovnAccentHSL), .4);\r\n    --ovnOftenUIBorderHover: var();\r\n    --ovnOftenUIShadowBase: var();\r\n    --ovnOftenUIShadowHover: var();\r\n    \r\n    --ovnPanelRadius: 12.6px;\r\n    --ovnPanelBorder: 3px solid;\r\n    --ovnPanelShadow: 0px 10px 20px 0;\r\n    --ovnPanelFilter: blur(12.6px);\r\n    --ovnPanelZoomIn: ;\r\n    --ovnOftenPanelBorderBase: var(--ovnPanelBorder) hsla(var(--ovnAccentHSL), .4);\r\n    --ovnOftenPanelBorderHover: var(--ovnPanelBorder) hsla(var(--ovnAccentHSL), .6);\r\n    --ovnOftenPanelShadowBase: var(--ovnPanelShadow) hsla(var(--ovnAccentCSD), .4);\r\n    --ovnOftenPanelShadowHover: var(--ovnPanelShadow) hsla(var(--ovnAccentCSD), .6);\r\n    \r\n    --ovnSurfaceRadius: 20.6px;\r\n    --ovnSurfaceBorder: 2px solid;\r\n    --ovnSurfaceShadow: 0px 20px 30px 0;\r\n    --ovnSurfaceFilter: blur(20.6px);\r\n    --ovnSurfaceZoomIn: scale(1.026);\r\n    --ovnOftenSurfaceBorderBase: var();\r\n    --ovnOftenSurfaceBorderHover: var();\r\n    --ovnOftenSurfaceShadowBase: var(--ovnSurfaceShadow) hsla(var(--ovnBase04HSL), .05);\r\n    --ovnOftenSurfaceShadowHover: var(--ovnSurfaceShadow) hsla(var(--ovnAccentHSL), .126);\r\n    \r\n    --ovnLargeRadius: 24.6px;\r\n    --ovnRadiusX: 9260px;\r\n    \r\n    --ovnGlassShadow: \r\n        inset 0px -1px 4px hsla(var(--ovnBase09HSL), .26),\r\n        var(--ovnPanelShadow) hsla(var(--ovnBase04HSL), .0526);\r\n        \r\n    --ovnTipsShadow-S: inset 0 0 0 2px;\r\n    --ovnTipsShadow-M: 10px 10px 20px;\r\n    --ovnTipsShadow-L: 10px 10px 40px;\r\n    \r\n}\r\n\r\n:root, [ovnGlobalUI] {\r\n    --ovnRS: 20.6px;\r\n}\r\n', '\r\n:root, [ovnGlobalSpace] {\r\n    \r\n    --ovnPriority00: 9999;\r\n    --ovnPriority02: 999999;\r\n    --ovnPriority09: 999999999;\r\n    --ovnPriorityHead: ;\r\n    --ovnPrioritySidebar: ;\r\n    --ovnPriorityFooter: ;\r\n    --ovnPriorityItem: ;\r\n    --ovnPriorityBase: ;\r\n    \r\n    --ovnSpace2X: 20px;\r\n    --ovnSpace4X: 60px;\r\n    --ovnSpace2Y: 260px;\r\n    --ovnSpace4Y: 292.6px;\r\n    --ovnSpaceAxialX: 1.26%;\r\n    --ovnSpaceAxialY: ;\r\n    --ovnSpaceWidth00: 80%;\r\n    --ovnSpaceWidth02: 40vw;\r\n    --ovnSpaceWidthVW: 60vw;\r\n    --ovnSpaceWidthPX: calc(260px + 920px + 220px);\r\n    --ovnSpaceHead: ;\r\n    --ovnSpacePadding: 10px 20px;\r\n    --ovnSpaceMargin: 15px 0;\r\n    \r\n    --ovnButtonWidth: 92px;\r\n    --ovnButtonHeight: 40px;\r\n    --ovnButtonPadding: ;\r\n    --ovnButtonAxialX: ;\r\n    --ovnButtonAxialY: ;\r\n    --ovnButtonBase: ;\r\n    \r\n    --ovnTransitionSmooth:  cubic-bezier(.260, .920, .60, 0.926);\r\n    --ovnTransitionSoft:    cubic-bezier(.250, .460, .45, 0.940);\r\n    --ovnTransitionDrop:    cubic-bezier(.240, .920, .92, 0.240);\r\n    --ovnTransitionZoom:    cubic-bezier(.526, .260, .92, 0.920);\r\n    --ovnTransitionFlow:    cubic-bezier(.240, .926, .60, 0.920);\r\n    --ovnTransitionElastic: cubic-bezier(.175, .885, .32, 1.260);\r\n    --ovnOftenTransition: all .526s var(--ovnTransitionSoft);\r\n    --ovnOftenTrans: .526s var(--ovnTransitionSoft);\r\n    \r\n}\r\n', '\r\n\r\n:root, [ovnGlobalURL] {\r\n    \r\n    --ovnICON-Deepseek: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAuMDAwMDAwIiBoZWlnaHQ9IjUwLjAwMDAwMCIgdmlld0JveD0iMCAwIDUwIDUwIiBmaWxsPSJub25lIiB2Ym5HbG9iYWxWYXJpYWJsZT0idHJ1ZSI+Cgk8cGF0aCBpZD0icGF0aCIgZD0iTTQ4LjgzNTQgMTAuMDQ3OUM0OC4zMjMyIDkuNzkxOTkgNDguMTAyNSAxMC4yNzk4IDQ3LjgwMzIgMTAuNTI3OEM0Ny43MDA3IDEwLjYwNzkgNDcuNjE0MyAxMC43MTE5IDQ3LjUyNzMgMTAuODA3NkM0Ni43NzkzIDExLjYyNCA0NS45MDQ4IDEyLjE1OTcgNDQuNzYyMiAxMi4wOTU3QzQzLjA5MjMgMTIgNDEuNjY2IDEyLjUzNTYgNDAuNDA1OCAxMy44Mzk4QzQwLjEzNzcgMTIuMjMxOSAzOS4yNDc2IDExLjI3MiAzNy44OTI2IDEwLjY1NThDMzcuMTgzNiAxMC4zMzU5IDM2LjQ2NjggMTAuMDE1NiAzNS45NzAyIDkuMzE5ODJDMzUuNjIzNSA4LjgyMzczIDM1LjUyOTMgOC4yNzE5NyAzNS4zNTYgNy43Mjc1NEMzNS4yNDU2IDcuMzk5OSAzNS4xMzUzIDcuMDYzOTYgMzQuNzY1MSA3LjAwNzgxQzM0LjM2MzMgNi45NDM4NSAzNC4yMDU2IDcuMjg3NiAzNC4wNDc5IDcuNTc1NjhDMzMuNDE4IDguNzUxOTUgMzMuMTczMyAxMC4wNDc5IDMzLjE5NzMgMTEuMzU5OUMzMy4yNTI0IDE0LjMxMiAzNC40NzM2IDE2LjY2NDEgMzYuODk5OSAxOC4zMzU5QzM3LjE3NTggMTguNTI3OCAzNy4yNDY2IDE4LjcxOTcgMzcuMTU5NyAxOUMzNi45OTQ2IDE5LjU3NTcgMzYuNzk3NCAyMC4xMzU3IDM2LjYyNCAyMC43MTE5QzM2LjUxMzcgMjEuMDgwMSAzNi4zNDg2IDIxLjE1OTcgMzUuOTYyNCAyMUMzNC42MzA5IDIwLjQzMjEgMzMuNDgxIDE5LjU5MTggMzIuNDY0NCAxOC41NzU3QzMwLjczOTMgMTYuODcyMSAyOS4xNzkyIDE0Ljk5MTcgMjcuMjMzNCAxMy41MkMyNi43NzY0IDEzLjE3NTggMjYuMzE5MyAxMi44NTYgMjUuODQ2NyAxMi41NTE4QzIzLjg2MTggMTAuNTg0IDI2LjEwNjkgOC45Njc3NyAyNi42MjcgOC43NzU4OEMyNy4xNzA0IDguNTc1NjggMjYuODE1OSA3Ljg4NzcgMjUuMDU5MSA3Ljg5NkMyMy4zMDIyIDcuOTAzODEgMjEuNjk1MyA4LjUwMzkxIDE5LjY0NyA5LjMwMzcxQzE5LjM0NzcgOS40MjM4MyAxOS4wMzIyIDkuNTExNzIgMTguNzA5NSA5LjU4Mzk4QzE2Ljg1MDEgOS4yMjM2MyAxNC45MTk5IDkuMTQzNTUgMTIuOTAzMyA5LjM3NTk4QzkuMTA1OTYgOS44MDc2MiA2LjA3Mjc1IDExLjYzOTYgMy44NDMyNiAxNC43NjgxQzEuMTY0NTUgMTguNTI3OCAwLjUzNDE4IDIyLjc5OTggMS4zMDY2NCAyNy4yNTU5QzIuMTE3NjggMzEuOTUyMSA0LjQ2NTgyIDM1LjgzOTggOC4wNzM3MyAzOC44Nzk5QzExLjgxNTkgNDIuMDMyMiAxNi4xMjU1IDQzLjU3NjIgMjEuMDQxIDQzLjI4MDNDMjQuMDI2OSA0My4xMDQgMjcuMzUxNiA0Mi42OTYzIDMxLjEwMTYgMzkuNDU2MUMzMi4wNDY5IDM5LjkzNiAzMy4wMzk2IDQwLjEyNzkgMzQuNjg2IDQwLjI3MkMzNS45NTQ2IDQwLjM5MjEgMzcuMTc1OCA0MC4yMDggMzguMTIxMSA0MC4wMDc4QzM5LjYwMjEgMzkuNjg4IDM5LjQ5OTUgMzguMjg4MSAzOC45NjM5IDM4LjAzMjJDMzQuNjIzIDM1Ljk2NzggMzUuNTc2MiAzNi44MDgxIDM0LjcxIDM2LjEyNzlDMzYuOTE1NSAzMy40NjM5IDQwLjI0MDIgMzAuNjk1OCA0MS41NCAyMS43MjhDNDEuNjQyNiAyMS4wMTYxIDQxLjU1NTcgMjAuNTY3OSA0MS41NCAxOS45OTE3QzQxLjUzMjIgMTkuNjM5NiA0MS42MTA4IDE5LjUwMzkgNDIuMDA0OSAxOS40NjM5QzQzLjA5MjMgMTkuMzM1OSA0NC4xNDc5IDE5LjAzMTcgNDUuMTE2NyAxOC40ODc4QzQ3LjkyOTIgMTYuOTE5OSA0OS4wNjQgMTQuMzQzOCA0OS4zMzE1IDExLjI1NTlDNDkuMzcxMSAxMC43ODM3IDQ5LjMyMzcgMTAuMjk1OSA0OC44MzU0IDEwLjA0NzlaTTI0LjMyNjIgMzcuODM5OEMyMC4xMTk2IDM0LjQ2MzkgMTguMDc5MSAzMy4zNTIxIDE3LjIzNTggMzMuMzk5OUMxNi40NDgyIDMzLjQ0ODIgMTYuNTg5OCAzNC4zNjgyIDE2Ljc2MzIgMzQuOTY3OEMxNi45NDQzIDM1LjU2MDEgMTcuMTgxMiAzNS45NjgzIDE3LjUxMTcgMzYuNDg3OEMxNy43NDAyIDM2LjgzMiAxNy44OTc5IDM3LjM0NDIgMTcuMjgzMiAzNy43MjhDMTUuOTI4MiAzOC41ODQgMTMuNTcyOCAzNy40Mzk5IDEzLjQ2MjQgMzcuMzgzOEMxMC43MjA3IDM1LjczNTggOC40MjgyMiAzMy41NjAxIDYuODEzNDggMzAuNTg0QzUuMjUzNDIgMjcuNzE5NyA0LjM0NzY2IDI0LjY0NzkgNC4xOTc3NSAyMS4zNjc3QzQuMTU4MiAyMC41NzU3IDQuMzg2NzIgMjAuMjk1OSA1LjE1ODY5IDIwLjE1MTlDNi4xNzUyOSAxOS45NiA3LjIyMzE0IDE5LjkxOTkgOC4yMzkyNiAyMC4wNzE4QzEyLjUzMjcgMjAuNzExOSAxNi4xODg1IDIyLjY3MTkgMTkuMjUyOSAyNS43NzU5QzIxLjAwMiAyNy41NDM5IDIyLjMyNTIgMjkuNjU1OCAyMy42ODg1IDMxLjcyMDJDMjUuMTM3NyAzMy45MTIxIDI2LjY5NzggMzYgMjguNjgzMSAzNy43MTE5QzI5LjM4NDMgMzguMzEyIDI5Ljk0MzQgMzguNzY4MSAzMC40NzkgMzkuMTA0QzI4Ljg2NDMgMzkuMjg4MSAyNi4xNjk5IDM5LjMyODEgMjQuMzI2MiAzNy44Mzk4Wk0yNi4zNDMzIDI0LjYwMDFDMjYuMzQzMyAyNC4yNDggMjYuNjE5MSAyMy45Njc4IDI2Ljk2NTggMjMuOTY3OEMyNy4wNDQ0IDIzLjk2NzggMjcuMTE1MiAyMy45ODM5IDI3LjE3ODIgMjQuMDA3OEMyNy4yNjUxIDI0LjA0IDI3LjM0MzggMjQuMDg3OSAyNy40MDY3IDI0LjE2MDJDMjcuNTE3MSAyNC4yNzIgMjcuNTgwMSAyNC40MzIxIDI3LjU4MDEgMjQuNjAwMUMyNy41ODAxIDI0Ljk1MjEgMjcuMzA0MiAyNS4yMzE5IDI2Ljk1NzUgMjUuMjMxOUMyNi42MTA4IDI1LjIzMTkgMjYuMzQzMyAyNC45NTIxIDI2LjM0MzMgMjQuNjAwMVpNMzIuNjA2NCAyNy44Nzk5QzMyLjIwNDYgMjguMDQ3OSAzMS44MDI3IDI4LjE5MTkgMzEuNDE2NSAyOC4yMDhDMzAuODE3OSAyOC4yMzk3IDMwLjE2NDEgMjcuOTkyMiAyOS44MDk2IDI3LjY4OEMyOS4yNTgzIDI3LjIxNTggMjguODY0MyAyNi45NTIxIDI4LjY5ODcgMjYuMTI3OUMyOC42Mjc5IDI1Ljc3NTkgMjguNjY3NSAyNS4yMzE5IDI4LjczMDUgMjQuOTE5OUMyOC44NzIxIDI0LjI0OCAyOC43MTQ0IDIzLjgxNTkgMjguMjQ5NSAyMy40MjM4QzI3Ljg3MTYgMjMuMTA0IDI3LjM5MTEgMjMuMDE2MSAyNi44NjMzIDIzLjAxNjFDMjYuNjY2IDIzLjAxNjEgMjYuNDg0OSAyMi45Mjc3IDI2LjM1MTEgMjIuODU2QzI2LjEzMDQgMjIuNzQ0MSAyNS45NDkyIDIyLjQ2MzkgMjYuMTIyNiAyMi4xMjAxQzI2LjE3NzcgMjIuMDA3OCAyNi40NDU4IDIxLjczNTggMjYuNTA4OCAyMS42ODhDMjcuMjI1NiAyMS4yNzIgMjguMDUyNyAyMS40MDc3IDI4LjgxNjkgMjEuNzE5N0MyOS41MjU5IDIyLjAxNjEgMzAuMDYxNSAyMi41NjAxIDMwLjgzNCAyMy4zMjgxQzMxLjYyMTYgMjQuMjU1OSAzMS43NjMyIDI0LjUxMTcgMzIuMjEyNCAyNS4yMDhDMzIuNTY2OSAyNS43NTIgMzIuODkwMSAyNi4zMTIgMzMuMTEwNCAyNi45NTIxQzMzLjI0NDYgMjcuMzUyMSAzMy4wNzEzIDI3LjY4MDIgMzIuNjA2NCAyNy44Nzk5WiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxLjAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPg==");\r\n    --ovnICON-YUQUE: url("data:image/svg+xml;base64,PHN2ZyB0PSIxNzQzOTQ5MDMzNTU4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iOC43NzgxMjU3NjI5Mzk0NTMgOC43Nzg5NTI1OTg1NzE3NzcgMTA5OS4yNDAwMzIxOTYwNDUgMTAwNi4xNjUzODMzMzg5MjgyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcC1pZD0iNjAyMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPjxwYXRoIGQ9Ik0xMTA4LjAxODE1MDE5IDE1Mi4yMzM3MDgzOGwtODkuNzI2ODE5MDQtNC44OTA2ODc1OVM5ODQuMzU1MzA2MDEgMjUuODU0MjUyMzYgODI4LjYwNTE4NzM0IDE0Ljk1NDM4Nzk0QzY3Mi44NTYwNTE1NSA0LjA1NzQ3MjA4IDU3MC45NDc3MjQ4NyAxMC44OTkxMjcyOCA1NzAuOTQ3NzI0ODcgMTAuODk5MTI3MjhzMTE1LjUzMjY2NTc4IDc1LjA0Njg5MzQyIDY5LjIzMjMyMTkyIDIwOC45NjE5MDA0NWMtMzQuNDAxODk4NTIgNzIuMjI3MDgxNzktODguODI4NDg5MzYgMTMxLjI0MDY1Nzk1LTE0Ni44NTgyMjc0NSAxOTkuMDYzNTY1NDlsLTM4My43MTY1MDc3IDQ0Ni44MzU0NzAxM2MzNTcuMTk2MTI1MjEtNS4zNDM3ODM4NSA1NjcuNzg0NjUxMDQtOC4wMTcxNTAwNiA2MzEuNzY4NTI2MDctOC4wMTcxNTAwNiAxNzkuNDMzOTgwOTcgMCAzMzEuMDc3NzMwNTEtMTU4Ljc3NzMxMjc0IDMyNC44NzI5NjU0OS0zMzUuNDM3Njc2MjctNC4yNjY1NzQ1Mi0xMjEuNDEzMDg4NTgtNDIuMTQ5NzQ2MjUtMTQ4Ljg0NTU2MDcyLTU1LjE3MTU5NTEtMjAyLjAxOTk5NDAxLTEzLjAxNjkzNDU3LTUzLjE3NTQxNjE1IDEzLjA0MjQ4ODgyLTEzNy45NzQxOTkwOSA5Ni45NDI5NDIwOS0xNjguMDUxNTM0NjN6IiBmaWxsPSIjMzFDQzc5IiBwLWlkPSI2MDIxIi8+PHBhdGggZD0iTTQ5MS43NTUxNDgxMSA0MjAuMzY4NDA3NTRDMzAzLjk0MTM0MzUgNjM2Ljc5ODA0MTk3IDguNzc4MTI1NzEgOTgxLjE1MTE5Nzk3IDguNzc4MTI1NzEgOTgxLjE1MTE5Nzk3YzUzMS4wMDMyNjAwMyAxNDIuMjA4MzM5MzkgNzc1LjY1NjU2NTA1LTIwMi45MzExMDA3OSA4MTMuOTY3Mjc4OC0zMjIuNDE1ODI3NDIgNTEuMzYyMDQ4MjUtMTYwLjE5ODUyMTQtMjEuMjEwMDE1NzItMjM4LjM2ODkyODcyLTYyLjI4MzUzNTUtMjYzLjg2MjIyNzUxLTEzOS4yNjI3MjIyOS04Ni40MzgxODU0Ny0yNDIuNTg5MzA5MDUtNC42MDM2OTM4Ny0yNjguNzA2NzIwOSAyNS40OTMyOTg3OXoiIGZpbGw9IiM5M0U2NUMiIHAtaWQ9IjYwMjIiLz48cGF0aCBkPSJNNDk0LjM2MjY2MzAyIDQxNS4zNzM1MzczYzI5Ljc5MzI5MDM4LTMyLjE0OTE5NDM1IDEzMS4wNzg0ODY4NC0xMDYuOTI4NzUxMTUgMjY2LjE3ODgxNzI3LTIyLjc0MTMwNDE3IDQxLjA3NzQ1MTE5IDI1LjU5MzU1MDAxIDExMy42NTM0NDY1OSAxMDQuMDc5NDUzODYgNjIuMjg3NDY2OTEgMjY0LjkzMTU3NC0xNC44ODA0MjgwOCA0Ni42MDUwMjg5OC02MC45MDI2MjM5IDEyNy4zOTQ3NDU0Ny0xNDIuNzUyODQxMTkgMjAwLjQwNzEyODU3LTg0Ljg3NDQ2MjggMC41ODI4MzMxNC0yNzUuMzY2NTQ3ODkgMy4wOTAwOTY4MS01NzEuNDg1MTAwOTYgNy41MzE2MTk1OEw0NzQuNjEyMTg3MzEgNDM4LjMxNzMwOTYyYTg0MDUuNzMzNjYyNTYgODQwNS43MzM2NjI1NiAwIDAgMSAxOC45MzQ3MDU4OC0yMi4wNjIxNTExOXoiIGZpbGw9IiM2MERCNjkiIHAtaWQ9IjYwMjMiLz48L3N2Zz4=");\r\n    \r\n    --ovnICON-Net: url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMTU5LjE2NSAzMTcuMjUzIDIyMzUuNDg0IDE4NDIuMzU0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cGF0aCBkPSJNMjE1NC42NDggMTA0NS40MTNjLTQxLjIgMC03OS45NzIgMTAuMzg4LTExMy44NSAyOC42NzhMMTcyMy41MzMgNzg2LjIzYzIzLjQ1My00NC40OTggMzYuNzQ4LTk1LjE4MyAzNi43NDgtMTQ4Ljk3NyAwLTE3Ni43My0xNDMuMjctMzIwLTMyMC0zMjBzLTMyMCAxNDMuMjctMzIwIDMyMGMwIDExMi42NzcgNTguMjQ1IDIxMS43NCAxNDYuMjYgMjY4Ljc1NWwtMjA0LjQyOCA2MTQuMzYyYTMyMyAzMjMgMCAwIDAtMjEuOTEzLS43NjVjLTY3LjMxMyAwLTEyOS44MjIgMjAuOTEtMTgxLjQxNyA1Ni41NDdsLTIzNi4yNTUtMjA1LjExOGMxMC43NC0yNy4yNDIgMTYuNjM3LTU2LjkyMiAxNi42MzctODcuOTc4IDAtMTMyLjU0Ny0xMDcuNDUzLTI0MC0yNDAtMjQwcy0yNDAgMTA3LjQ1My0yNDAgMjQwIDEwNy40NTMgMjQwIDI0MCAyNDBjNDMuMDc1IDAgODMuNDkyLTExLjM1NyAxMTguNDQtMzEuMjI1bDIzNi4yMjUgMjA1LjA5M2MtMjEuNTAzIDQyLjk4My0zMy42MyA5MS40NC0zMy42MyAxNDIuNjgzIDAgMTc2LjQ0NyAxNDMuNTUgMzIwIDMyMCAzMjBzMzIwLTE0My41NTMgMzIwLTMyMGMwLTExMi40Ni01OC4zMjMtMjExLjU0NS0xNDYuMy0yNjguNjNsMjA0LjQ2OC02MTQuNDg3YzcuMjQyLjQ5IDE0LjU0NS43NjIgMjEuOTEuNzYyIDY0LjkwMyAwIDEyNS4yOC0xOS4zNCAxNzUuNzE4LTUyLjU0N2wzMTcuMjc1IDI4Ny44N2MtMTEuOTkgMjguNTYtMTguNjIyIDU5LjkyMi0xOC42MjIgOTIuODM3IDAgMTMyLjU0NyAxMDcuNDUzIDI0MCAyNDAgMjQwczI0MC0xMDcuNDUzIDI0MC0yNDAtMTA3LjQ1My0yNDAtMjQwLTI0MG0tMTExNC40NDYgOTU0LjE5NWMtODguMjI1IDAtMTYwLTcxLjc3NS0xNjAtMTYwczcxLjc3NS0xNjAgMTYwLTE2MCAxNjAgNzEuNzc1IDE2MCAxNjAtNzEuNzc4IDE2MC0xNjAgMTYwIiBmaWxsPSIjNDY0OTRlIi8+PC9zdmc+");\r\n    --ovnICON-Network: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAxMkMxMC4yMDkxIDEyIDEyIDEwLjIwOTEgMTIgOEMxMiA1Ljc5MDg2IDEwLjIwOTEgNCA4IDRDNS43OTA4NiA0IDQgNS43OTA4NiA0IDhDNCAxMC4yMDkxIDUuNzkwODYgMTIgOCAxMloiIGZpbGw9IiMxM0VDOTkiIHN0cm9rZT0iIzJDMkYzNSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDQyQzEzLjMxMzcgNDIgMTYgMzkuMzEzNyAxNiAzNkMxNiAzMi42ODYzIDEzLjMxMzcgMzAgMTAgMzBDNi42ODYyOSAzMCA0IDMyLjY4NjMgNCAzNkM0IDM5LjMxMzcgNi42ODYyOSA0MiAxMCA0MloiIGZpbGw9IiMxM0VDOTkiIHN0cm9rZT0iIzJDMkYzNSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM4IDQ0QzQxLjMxMzcgNDQgNDQgNDEuMzEzNyA0NCAzOEM0NCAzNC42ODYzIDQxLjMxMzcgMzIgMzggMzJDMzQuNjg2MyAzMiAzMiAzNC42ODYzIDMyIDM4QzMyIDQxLjMxMzcgMzQuNjg2MyA0NCAzOCA0NFoiIGZpbGw9IiMxM0VDOTkiIHN0cm9rZT0iIzJDMkYzNSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIyIDI4QzI2LjQxODMgMjggMzAgMjQuNDE4MyAzMCAyMEMzMCAxNS41ODE3IDI2LjQxODMgMTIgMjIgMTJDMTcuNTgxNyAxMiAxNCAxNS41ODE3IDE0IDIwQzE0IDI0LjQxODMgMTcuNTgxNyAyOCAyMiAyOFoiIGZpbGw9IiMxM0VDOTkiIHN0cm9rZT0iIzJDMkYzNSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM0IDEyQzM2LjIwOTEgMTIgMzggMTAuMjA5MSAzOCA4QzM4IDUuNzkwODYgMzYuMjA5MSA0IDM0IDRDMzEuNzkwOSA0IDMwIDUuNzkwODYgMzAgOEMzMCAxMC4yMDkxIDMxLjc5MDkgMTIgMzQgMTJaIiBmaWxsPSIjMTNFQzk5IiBzdHJva2U9IiMyQzJGMzUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTExIDExTDE1IDE1IiBzdHJva2U9IiMyQzJGMzUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTMwIDEyTDI4IDE0IiBzdHJva2U9IiMyQzJGMzUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTM0IDMzLjVMMjggMjYiIHN0cm9rZT0iIzJDMkYzNSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTQgMzFMMTggMjciIHN0cm9rZT0iIzJDMkYzNSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=");\r\n    --ovnICON-Mecha: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00MSAxMy45OTk3TDI0IDRMNyAxMy45OTk3VjMzLjk5OThMMjQgNDRMNDEgMzMuOTk5OFYxMy45OTk3WiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTYgMTguOTk3NkwyMy45OTMyIDI0LjAwMDJMMzEuOTk1MSAxOC45OTc2IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTI0IDI0VjMzIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+");\r\n    --ovnICON-Dict: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIiB2aWV3Qm94PSIwIDAuMDA1IDEwMjMuOTk2IDEwMjMuODY3IiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+PHBhdGggZD0iTTkzNC4xODMgMTc5Ljg4Nkg1NjEuMDIybDc4LjAzNyA2MjUuMTA3YTkzLjg3IDkzLjg3IDAgMCAxLTIyLjUyOCA2OC4yNjZsLTEzMS40NTYgMTUwLjYxM0g5MzQuMTRhOTAuMjQgOTAuMjQgMCAwIDAgODkuODU2LTg5Ljk0MVYyNzIuNDcyYTkyLjU4NiA5Mi41ODYgMCAwIDAtODkuNi05MC40NTJ2LTIuMTc2eiIgZmlsbD0iIzMxMzU0MyIgZGF0YS1zcG0tYW5jaG9yLWlkPSJhMzEzeC5zZWFyY2hfaW5kZXguMC5pMjcuM2Y5ODNhODFxa1RqcEkiLz48cGF0aCBkPSJNNDg4LjE0NyA3OS4xNUE5MC40OTYgOTAuNDk2IDAgMCAwIDM5OC4yOTIuMDA1SDkwLjMyNUE5MC4yOCA5MC4yOCAwIDAgMCAwIDkwLjIwMXY2NjguNTQxYTkwLjQ5NiA5MC40OTYgMCAwIDAgOTAuMzI1IDg5Ljk0MWg0NzMuM2M4LjUzMy05LjcyOCAxNi4zODMtMTYuNDI2IDE2LjM4My0yOS4yNjl6IiBmaWxsPSIjNEI4QkY1IiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4LnNlYXJjaF9pbmRleC4wLmkyMy4zZjk4M2E4MXFrVGpwSSIvPjxwYXRoIGQ9Im0zNTAuMDc5IDkwNi4yODMgNS4xMiA0MS4xM2E5MC41OCA5MC41OCAwIDAgMCA1MS4yIDY5Ljg4OGwxMDIuNjU1LTExMC45MzNIMzUwLjA3OXoiIGZpbGw9IiMzMTM1NDMiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTI4LjNmOTgzYTgxcWtUanBJIi8+PHBhdGggZD0iTTMzMS4wOTIgMjM5LjAyMmEzMC4yMSAzMC4yMSAwIDAgMC0yOS44NjctMjQuMTkyaC02MS45OTRhMjkuMjcgMjkuMjcgMCAwIDAtMjkuMjcgMjQuMTkyTDE0OS44NDYgNTM5LjgyYTMwLjI5MyAzMC4yOTMgMCAxIDAgNTkuMDkzIDExLjc3NmwxOC45NDQtOTYuMTI4aDg0Ljc3OGwxOS40NTYgOTYuMTI4YTMwLjI1IDMwLjI1IDAgMCAwIDM1LjQxMyAyMy42Mzd2LTIuNTZhMzAuOTMgMzAuOTMgMCAwIDAgMjMuNjM3LTMyLjkzOXptLTkxLjg2MSAxNTMuNiAyNC42MTktMTIwLjMyaDEyLjhsMjMuNjM3IDEyMC4zMnptNjk2LjQ4OCA2MC4yNDRoLTkyLjQxNnYtMzAuMjkzYTMwLjI5MyAzMC4yOTMgMCAwIDAtNjAuMDMyIDB2MzAuMjkzaC04OS42YTI5Ljg3IDI5Ljg3IDAgMCAwLTIxLjMzMiA4LjUzNCAzMC4yMDggMzAuMjA4IDAgMCAwIDIxLjMzMyA1MS41ODNoNy42OGEzODguMyAzODguMyAwIDAgMCA3MC4zNTcgMTMxLjU4NGMtMjIuMDU5IDIwLjA1My00My42MDUgMzYuNTIyLTY2Ljc3MyA1NS40NjZhMjkuNCAyOS40IDAgMCAwLTExLjMwNyAyMC4wNTQgMzAuMjA4IDMwLjIwOCAwIDAgMCA0OC43NjggMjYuNjY2YzI1LjIxNi0yMC4wMSA0Ny4yMzItMzYuOTkyIDcxLjM4LTU5LjA5M2E3NjYgNzY2IDAgMCAwIDczLjM0NSA1OS4wOTMgMzAuMDM3IDMwLjAzNyAwIDAgMCAzNy40Ni00Ni45MzNjLTIzLjU5NC0xOS4wMy00Ny4yMzEtMzUuNDk5LTY5LjI5LTU1LjQ2NmEzODIuMyAzODIuMyAwIDAgMCA3MC44Ny0xMzEuNTg0aDguMTkxYTMwLjM4IDMwLjM4IDAgMCAwIDI4Ljg4Ni0xOC40NzQgMjkuMSAyOS4xIDAgMCAwIDIuNDc0LTExLjk5IDI5Ljg2NyAyOS44NjcgMCAwIDAtMjkuODY2LTI5Ljg2Nk04MTQuMjA1IDU5OS41MWEzMTIuMyAzMTIuMyAwIDAgMS01MS4yLTg2LjkxMkg4NjUuNjZhMzI4LjggMzI4LjggMCAwIDEtNTEuMiA4Ni45MTIiIGZpbGw9IiNGRkYiIG9wYWNpdHk9Ii42Ii8+PC9zdmc+");\r\n    --ovnICON-Char: url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwLjA3OSAxMTM4LjM5NiAxMDIzLjkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTQzLjNmOTgzYTgxcWtUanBJIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+PHBhdGggZD0iTTU2OS4wMTcgODAwLjU3Yy01Ljc5My4xODItMTEuNDA2LTEuMDg2LTE2LjY1Ni0zLjQ0TDIxNC4zNTQgNjU1LjE5NGE0My41MSA0My41MSAwIDAgMS0yNy4xNTYtNDAuMzcyVjQzLjk5M2MwLTE0LjY2NCA3LjI0Mi0yOC40MjMgMTkuMTktMzYuNzUxIDEyLjMxMi04LjE0NyAyNy43LTkuNDE1IDQxLjA5Ny0zLjQ0bDE4NS41NjkgNzguMDNhNDMuNjEzIDQzLjYxMyAwIDEgMS0zMy4zMTIgODAuNTYzbC0xMjUuMS01Mi41MDJ2NDc1LjU5OWwyNTAuMzgyIDEwNS4wMDVWMTg1Ljc1YTQzLjUxIDQzLjUxIDAgMCAxIDI3LjE1Ni00MC4zNzNMODkwLjM2OCAzLjYyMWMxMy41NzgtNS40MzEgMjguNzg1LTQuMTY0IDQxLjA5NiAzLjQ0IDEyLjMxMSA4LjE0NyAxOS41NTMgMjIuMDg3IDE5LjE5IDM2Ljc1MVY2MTQuNjRhNDMuNTEgNDMuNTEgMCAwIDEtMjcuMTU1IDQwLjM3MmwtMTg0Ljg0NSA3Ny4xMjRjLTIxLjkwNiA4LjE0Ny00Ni4zNDctMi43MTUtNTUuNC0yNC4yNi04Ljg3LTIxLjcyNC43MjUtNDYuNTI3IDIyLjA4OC01Ni4zMDRMODYzLjAzIDU4NC45NVYxMDkuNTNMNjEyLjQ2NyAyMTQuNTM2djU0MS4xMzZjMCAxNC42NjQtNy4yNDEgMjguNDI0LTE5LjE5IDM2Ljc1Mi03LjA2IDUuMjUtMTUuNzUxIDcuOTY2LTI0LjQ0MSA3Ljk2NnoiIGZpbGw9IiMzQTgzOUIiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTM3LjNmOTgzYTgxcWtUanBJIiBjbGFzcz0ic2VsZWN0ZWQiLz48cGF0aCBkPSJNNTY5LjAxNyAxMDIzLjk3N2MtNS4yNSAwLTEwLjMyLS45MDUtMTUuMjA4LTIuNTM0TDI3LjE1NiA4MTcuNDA4QzEwLjY4MiA4MTAuODkgMCA3OTQuNzc4IDAgNzc2Ljg1NFYyNjUuNTljMC0yMy41MzYgMTkuMDEtNDIuNTQ1IDQyLjU0NS00Mi41NDVTODUuMDkgMjQyLjA1NCA4NS4wOSAyNjUuNTlWNzQ2LjhsNDg0LjEwOCAxODcuNzQyIDQ4NC4xMDgtMTg3Ljc0MVYyOTkuOTg4YzAtMjMuNTM2IDE5LjAxLTQyLjU0NSA0Mi41NDUtNDIuNTQ1czQyLjU0NSAxOS4wMSA0Mi41NDUgNDIuNTQ1djQ3Ni44NjZjMCAxNy43NDItMTAuODYyIDMzLjY3NC0yNy4xNTYgNDAuNTU0bC01MjYuNDcyIDIwNC4wMzVjLTQuODg4IDEuODEtMTAuMTM5IDIuNzE1LTE1LjIwOCAyLjUzNHoiIGZpbGw9IiMzQTgzOUIiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTM4LjNmOTgzYTgxcWtUanBJIiBjbGFzcz0ic2VsZWN0ZWQiLz48L3N2Zz4=");\r\n    --ovnICON-AIGC: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQuMDAwMiA0NUMyNy4yMjA4IDQ1IDMyLjcyNzYgNDAuOCAzMi43Mjc2IDI0QzMyLjcyNzYgNy4yIDI3LjIyMDggMyAyNC4wMDAyIDNDMjAuNzc5NyAzIDE1LjI3MjkgNy40ODMwMiAxNS4yNzI5IDI0QzE1LjI3MjkgNDAuNTE3IDIwLjc3OTcgNDUgMjQuMDAwMiA0NVoiIHN0cm9rZT0iIzFmYWNhZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMTA1MTUgMzUuMDAwMUM2LjcxNTQ1IDM3LjgxMjQgMTMuMjQ3OSA0MC40MjExIDI4LjM2NCAzMS42MjExQzQzLjQ4IDIyLjgyMTEgNDQuNTA1NyAxNS44MTI0IDQyLjg5NTQgMTMuMDAwMUM0MS4yODUxIDEwLjE4NzggMzQuNDk4MSA3LjcyNzI4IDE5LjYzNjcgMTYuMzc5MUM0Ljc3NTIxIDI1LjAzMDggMy40OTQ4OSAzMi4xODc4IDUuMTA1MTUgMzUuMDAwMVoiIHN0cm9rZT0iIzFmYWNhZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMTA1MDYgMTMuMDAwMUMzLjQ5NDggMTUuODEyNCA0LjUyMDQ2IDIyLjgyMTEgMTkuNjM2NiAzMS42MjExQzM0Ljc1MjcgNDAuNDIxMSA0MS4yODUgMzcuODEyNCA0Mi44OTUzIDM1LjAwMDFDNDQuNTA1NiAzMi4xODc4IDQzLjIyNTMgMjUuMDMwOCAyOC4zNjM4IDE2LjM3OTFDMTMuNTAyNCA3LjcyNzI4IDYuNzE1MzcgMTAuMTg3OCA1LjEwNTA2IDEzLjAwMDFaIiBzdHJva2U9IiMxZmFjYWYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+");\r\n    --ovnICON-ComfyUI: url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iNDA5LjU4NyAzMDcuMiAxODQzLjIyMyAxODQzLjIwMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+PHBhdGggZD0ibTIwMzguMjczIDMwNy4yIDIzLjk2IDEuMDI1YzU1LjYwNSA1LjEyIDEwOC44NSAyOC4yNjIgMTQ2Ljk0NSA3NS4xNiA0MC4yNDMgNDkuMzU3IDUwLjY4OCAxMTEuNDEyIDM5LjMyMiAxNjkuMzdsLTYuMTQ1IDI0LjU3NS03Ny44MjUgMjUxLjQ5NWMtMTkuOTY4IDY0LjMwOC02NC4xIDExNy41NTUtMTE0Ljg5MiAxNTQuMTEzLTUwLjc5IDM2LjU1Ny0xMTUuMDk3IDYxLjQ0LTE4Mi4yNyA2MS40NGwtMzcyLjEyNS44MmgtMTQwLjlsLTExNC4yNzggMzY3LjQxIDE4Mi4zNzUtLjMwN2gyNzEuMzU4YzY0LjEwMiAwIDEyNy40OSAyMi42MyAxNzEuMDEgNzYuMjkgNDUuOTc1IDU2LjQyIDUyLjk0IDEyOS41MzUgMzMuMDc1IDE5My45NDVsLTc3LjgyNSAyNTEuMzkzYy0xOS45NjggNjQuNDA3LTY0LjEgMTE3LjY1Ny0xMTQuNzkgMTU0LjIxMy01MC44OTIgMzYuNjYtMTE1LjIgNjEuNDQtMTgyLjQ3NSA2MS40NHYuMTAzbC0zNzIuMDIyLjcxN0g4NzkuNDFjLTY0LjMwNSAwLTEyNy4zODUtMjIuODM1LTE3MC45MDUtNzYuMTg1LTQ1Ljg3NS01Ni41MjUtNTIuOTQtMTI5LjY0LTMzLjA3NS0xOTQuMDVsMzAuNjE3LTk4LjgxNWgtODEuOTJjLTY0LjMwOCAwLTEyNy40ODctMjIuODM1LTE3MS4wMDgtNzYuMTg1di0uMjA1Yy00NS44NzUtNTYuNDIyLTUyLjk0LTEyOS4zMy0zMy4wNzUtMTkzLjc0di0uMjA1TDU5My42MTIgOTUyLjYzbDE5LjE1LTYxLjQ0YzE5Ljk2OC02NC4zMDggNjQtMTE3LjM1IDExNC42ODgtMTU0LjAxIDUwLjg5Mi0zNi42NiAxMTUuMi02MS43NDggMTgyLjQ3NS02MS43NDhoMTQwLjhsNDYuOS0xNTEuODZjMTkuODY1LTY0LjMwNSA2NC0xMTcuNTU1IDExNC43OS0xNTQuMjEzIDUwLjg5NS0zNi42NiAxMTUuMzAzLTYxLjQ0IDE4Mi40NzctNjEuNDRsMzcxLjUwOC0uNzE3aDI3MS45NzV6TTEzOTUuMiA0OTIuMDMyaC0uMjA1YTEzMy4xMyAxMzMuMTMgMCAwIDAtNzQuNzUgMjYuODI4Yy0yMS44MTMgMTUuNzctMzYuNTU3IDM0LjgxNy00My44MyA1MS45MTdsLTIuNjYyIDcuMTY4TDEyMTYuNDEgNzYzLjdjLTE4Ljg0MyA2MC45MjUtNzUuNzc1IDk2LjA1LTEzMi43MSA5Ni4wNUg5MDkuOTI1Yy0yMi4zMjMgMC00OS43NjUgOC45MS03NC41NDUgMjYuODMtMjQuOTg3IDE4LjAyMy00MC43NTUgNDAuMzQ1LTQ2LjU5MyA1OS4yOXYuMWwtMTkuMjUgNjEuMjM4LTE3My40NjggNTU4LjI4M2E0MSA0MSAwIDAgMC0xLjk0NSAxNy45MiAxMS4yNSAxMS4yNSAwIDAgMCAyLjA1IDUuNDI3bDIuMDQ1IDEuOTQ4YzMuMDc1IDIuNTYgMTAuMjQgNi4xNDMgMjUuOTA3IDYuMTQzaDE0NS4xYzE1LjM2MiAwIDMwLjUxOCAyLjQ1OCA0NS4wNTcgNy4zNzVsMTQuMzM1IDUuNzMyIDEzLjcyMyA3LjE2OGExMzguOCAxMzguOCAwIDAgMSAyNC42NzggMTkuMTVsMTAuNzUzIDExLjU3LjEwMy4zMDdhMTMyLjMgMTMyLjMgMCAwIDEgMjMuMjQ1IDQyLjI5M2w0LjIgMTUuODcgMi4yNSAxNi4zODVjLjcxNyAxMC44NTUuMjA1IDIxLjgxMy0xLjc0IDMyLjU2M2wtMy44OSAxNS45NzUtNTAuMzgyIDE2My4yMjVhNDEuMjUgNDEuMjUgMCAwIDAtMi4wNDcgMTcuODE3IDExLjUgMTEuNSAwIDAgMCAxLjg0MyA1LjQyN2MxLjQzNSAxLjg0NSA3LjE3IDguMTkzIDI4LjA1OCA4LjE5M2gyNzAuOTVsMzcyLjIyNS0uNjE1YzIyLjUyNyAwIDUwLjA3NS04LjkwOCA3NC45NTctMjYuODI4IDI0Ljg4My0xOC4wMjUgNDAuNTUtNDAuMTQyIDQ2LjM4OC01OC45ODNsNzcuODI1LTI1MS40OTVhNDEuMjUgNDEuMjUgMCAwIDAgMi4wNDctMTcuODE3IDE0IDE0IDAgMCAwLTEuMDI1LTMuNjg4bC0xLjAyNS0xLjc0Yy0xLjQzMi0xLjc0LTYuOTYzLTguMTkzLTI4LjA1OC04LjE5M0gxNDIyLjg1bC0yNDYuMDY4LjUxMmMtNDAuOTYgMC04MS40MDctMTcuOTItMTA4LjU0My01MC44OTJsLS4yMDUtLjMwN2ExMzMuNzUgMTMzLjc1IDAgMCAxLTI0LjA2NS0xMjMuMzkybDE0NC43OTUtNDY1LjgxNy4yMDUtLjUxMmM5LjIxNS0yOS4wOCAyNy45NTUtNTMuNDUgNTEuOTE1LTcwLjI0NWw5LjIxNy01LjgzOGMyMS44MS0xMi44IDQ2LjQ5LTE5LjI1IDcxLjM3My0xOS4yNWgxNzMuNDY1bDM3Mi4xMjItLjcxN2guMjA1bDguNi0uNDFjMjAuNTgzLTIuMDQ3IDQ0LjM0LTEwLjc1IDY2LjA1LTI2LjQyIDI1LjA4Ny0xOC4wMiA0MC43NTUtNDAuMjQzIDQ2LjU5LTU4Ljk4bDc3LjYyLTI1MS40OTVhNDEuMjUgNDEuMjUgMCAwIDAgMi4wNS0xNy44MTcgMTEgMTEgMCAwIDAtMS45NS01LjQyN2wtMi4wNDUtMi4wNWEyOCAyOCAwIDAgMC0xMi44LTQuOTEzbC0xMy4xMDgtMS4xMjdIMTc2Ni40bC0zNzEuMzAyLjUxMnoiIGZpbGw9IiMxMjJCRDUiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTQuNmU2MzNhODFubGl0SjAiLz48L3N2Zz4=");\r\n    --ovnICON-Liblib: url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDI1NjAgMjU2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+PHBhdGggZD0iTTIxNjQuNSAyNTYwaC0xNzY5QzE3NyAyNTYwIDAgMjM4MyAwIDIxNjQuNXYtMTc2OUMwIDE3NyAxNzcgMCAzOTUuNSAwaDE3NjlDMjM4MyAwIDI1NjAgMTc3IDI1NjAgMzk1LjV2MTc2OWMwIDIxOC41LTE3NyAzOTUuNS0zOTUuNSAzOTUuNSIgZmlsbD0iI0ZGRiIgb3BhY2l0eT0iLjE1Ii8+PHBhdGggZD0iTTQyOS41IDE4OWMxNDYgMTU4LjUgMzAyIDMwOSA0NTQuNSA0NjEuNSAxMi41IDI0NC41LTEuNSA0OTAgNy41IDczNSAzIDM4IDQ3IDQ3LjUgNzguNSA0Ni41cTM0OCAuNzUgNjk2IDBjMTU2IDE1My41IDMwNyAzMTIgNDY0LjUgNDYzLTQ3NC04LTk0OC0xLTE0MjIuNS0zLjUtNjguNS0yLjUtMTM4IDYtMjA2LTQuNS00Mi03LjUtNzEuNS00Ny41LTcwLTg5LjUtMi01MzUuNSAyLjUtMTA3Mi0yLjUtMTYwOC41IiBmaWxsPSIjMjY1QkZGIi8+PHBhdGggZD0iTTQyOS41IDIwMDAuNWMyMCAyMS41IDQwIDQzIDYxIDYzLjUgNC41IDczLjUgMCAxNDcgMiAyMjEgLjUgMTQuNSAxNC41IDIyLjUgMjcuNSAyMy41IDIzIDEgNDUuNS0xIDY4LjUgMSAyMS41IDE3LjUgMzkuNSA0MCA2MC41IDU4LjUtNjItMS0xMjQgMC0xODYuNS0uNS0xNy41LjUtMzQtMTUtMzMtMzMgMC0xMTIgMS0yMjMgMC0zMzRtMzk5LjUgMzY2YzE4LS41IDM3LjUgMi41IDU0LTYgMi02IDQtMTEuNSA1LjUtMTcuNSAyLjUgMSA3IDIuNSA5LjUgMyAxNS41IDE5IDQyIDIyIDY0LjUgMjUgMjctMSA1NS05IDczLjUtMjkuNSAzNy00Mi41IDQwLjUtMTA0IDI4LTE1Ni41LTgtMzIuNS0zMC02MC41LTYwLTc1LTM5LTE0LTg2LTYtMTE1IDI0LjUtMi00NCAuNS04OC41LTEuNS0xMzIuNS0xOS41LTEtMzkuNS0xLTU5IC41LjUgMTIwLjUuNSAyNDIgLjUgMzY0bTE2MC0xOTNjMTggMTcgMjAuNSA0My41IDIxIDY3LS41IDIyLjUtNS41IDQ5LTI1LjUgNjIuNS0zMS41IDIyLjUtODQuNSA4LjUtOTQuNS0zMS0xMy0zOS41LTUuNS05Ny41IDQwLjUtMTExIDE5LjUtNSA0My41LTMuNSA1OC41IDEyLjVtNTM5LjUgMTkzYzE3LjUtMS41IDM4IDQuNSA1My03IDUtNCA0LjUtMTEgNi41LTE3IDIuNSAxIDcuNSAyLjUgMTAgMy41IDE1LjUgMTkgNDIgMjIgNjQuNSAyNSAyNy0xIDU1LTkgNzMuNS0yOS41IDM3LTQyLjUgNDAuNS0xMDQgMjgtMTU2LjUtNy41LTMyLjUtMzAtNjAuNS02MC03NS41LTM5LjUtMTQuNS04NS01LTExNiAyNC0uNS00NCAuNS04OC0uNS0xMzItMTkuNS0xLTM5LjUtMi01OS41IDEgMSAxMjEgLjUgMjQyLjUuNSAzNjRtMTU4LTE5NS41YzE3LjUgMTQgMjIgMzggMjMgNTkgMSAyMi41LTIgNDgtMTcuNSA2NS41LTI5LjUgMzEuNS05MS41IDE5LTEwMi41LTI0LTEzLTM5LjUtNS41LTk4IDQwLjUtMTExLjUgMTktMy41IDQxLjUtMyA1Ni41IDExbTE2MS0xM2MtOC41IDE5LjUtMTguNSAzOS0yNS41IDU5LjVoNTdjMTItMzIgMjQuNS02NCAzNi41LTk2IDExLTIwLjUgMTIuNS00NyAyOS02My41IDMuNSAxNSA5LjUgMjkuNSAxNS41IDQ0IDEzIDM0LjUgMjYgNjguNSAzOS41IDEwMyAxIDMgMy41IDkuNSA0LjUgMTMgMTkuNSAwIDM5LS41IDU4LjUgMC0zLjUtNy03LTEzLjUtMTAtMjAuNUMyMDI1IDIxMzIgMTk5NSAyMDY3IDE5NjggMjAwMWMtMTcuNS41LTM1IC41LTUyIDAtMjMgNTIuNS00NiAxMDUtNjguNSAxNTdtMjI2IDYwcTI4LjUtLjc1IDU3IDBjMC03Mi41LS41LTE0NC41IDAtMjE3LTE5IC41LTM4LjUuNS01Ny41IDAgMSA3Mi41LjUgMTQ0LjUuNSAyMTdtLTk0MiAxMDUuNWMwIDcuNSAxIDE1LjUgMiAyMyA2IDEyLjUgMTkuNSAxOSAzMy41IDE5LjUgNjAuNS41IDEyMS41LS41IDE4Mi41LjUtMTkuNS0xOC41LTM4LjUtMzcuNS01Ni41LTU3LTI5LTUuNS01OSAxLjUtODgtNS0zLTMuNS02LTctOS0xMC01LTc2LjUgMS0xNTQtMy0yMzAuNS0xOS41LTIxLjUtNDEuNS00MS02MS02Mi41IDAgMTA3LjUtMSAyMTUtLjUgMzIyTTY5MiAyMzY2aDYwcS0uNzUtMTMyIDAtMjY0aC02MHptNzAwIDBoNjBxLS43NS0xMzIgMC0yNjRoLTU5LjVjLS41IDg4LS41IDE3Ni0uNSAyNjQiLz48L3N2Zz4=");\r\n    --ovnICON-Workflow: url("data:image/svg+xml;base64,PHN2ZyB0PSIxNzUzNTM2MDE3MjEyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMjIuMzY1NDQ3OTk4MDQ2ODc1IDAuMTczMzc3OTkwNzIyNjU2MjUgOTc5LjMwNTI5Nzg1MTU2MjUgMTAyMy44MjY2NTI1MjY4NTU1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcC1pZD0iNDU0NCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPjxwYXRoIGQ9Ik05MzkuNDU5ODIxIDY1Ni4zODA5MTdjLTQ5LjQ1NDkzMy0yOC45NTYyODYtMTExLjc1MjEyNC0xOS41ODYxMTItMTUxLjAxMzM3NSAyMi43NDY1OTktMzkuMjYxMjUyIDQyLjMzMjcxLTQ1LjM4MTkxMiAxMDYuNjk5Nzk3LTE0LjgwMDg2OSAxNTYuMDIxMTg4LTEyMi4zOTA5NDQgMTE4LjUxODIzNS0zMDUuOTIxNzE3IDE0MC43MDg0MS00NTEuNzQ5MjI0IDU0LjU3NDAzMWEzOS4zMDU3NjYgMzkuMzA1NzY2IDAgMCAwLTU0LjQ4NTAwMyAxNS4wMDExODFjLTEwLjk5NDkzMSAxOS41ODYxMTItNC40NTEzODkgNDQuNjQ3NDMzIDE0LjYyMjgxMyA1NS45NTM5NjFhNDU4LjUxNTMzNiA0NTguNTE1MzM2IDAgMCAwIDg3LjQyNTI4MiA0MC4xMjkyNzNBNDQ0LjU2MDIzMSA0NDQuNTYwMjMxIDAgMCAwIDUxMS4zNjk3MyAxMDIzLjk5ODg4N2MxMjIuMDU3MDkgMC4yNjcwODMgMjM5LjM1MTE5My00OC43NDI3MTEgMzI2LjU3NjE2My0xMzYuNDU3MzMzIDYwLjI0OTU1MiAyMC44MzI1MDEgMTI2LjA2MzM0LTguNDU3NjM5IDE1Mi40ODIzMzQtNjcuODM5MTcgMjYuNDE4OTk0LTU5LjM4MTUzMSA0Ljg3NDI3MS0xMjkuNjQ2NzA4LTQ5LjkyMjMyOS0xNjIuNzY1MDQzbC0xLjA0NjA3Ny0wLjU1NjQyNHogbS0yMy42NTkxMzMgMTMzLjE4NTU2MmE0NC40NDcxMiA0NC40NDcxMiAwIDAgMS0zOC41MjY3NzMgMjIuOTI0NjU0IDQyLjcxMTA3OSA0Mi43MTEwNzkgMCAwIDEtMjIuMDU2NjMzLTYuMDA5Mzc1IDQ2LjA3MTg3NyA0Ni4wNzE4NzcgMCAwIDEtMjAuODMyNTAxLTUxLjQxMzU0NGM1LjIzMDM4Mi0yMC4wMzEyNTEgMjIuOTY5MTY4LTMzLjg3NTA3MSA0My4xNTYyMTgtMzMuNzQxNTMgNy43NDU0MTctMC4wNDQ1MTQgMTUuMzU3MjkyIDIuMDI1MzgyIDIyLjAzNDM3NiA2LjAwOTM3NiAyMS4yMTA4NjkgMTIuNTk3NDMxIDI4LjQ2NjYzMyA0MC40NDA4NyAxNi4yNDc1NyA2Mi4yMzA0MTl6IG0tNjYxLjkyMTU2MS04Ni41MTI3NDdjLTIyLjE2NzkxOC0zOS41MjgzMzUtNjMuMjA5NzI1LTYzLjg3NzQzNC0xMDcuNjM0NTg5LTYzLjg3NzQzNGgtNi4zODc3NDNDMTAxLjM3NDUzNiA0NzAuODQ3MDE5IDE3NC44ODkyMjcgMjk2LjQ2Mzg1IDMyMC44MjgwMTkgMjEwLjE5NTkyOWMxOS4wNzQyMDItMTEuMzA2NTI4IDI1LjYxNzc0NC0zNi4zNjc4NDkgMTQuNjIyODEzLTU1Ljk1Mzk2MWEzOS4zMDU3NjYgMzkuMzA1NzY2IDAgMCAwLTU0LjQ4NTAwMi0xNS4wMDExODFjLTE4MC44MTU0MjYgMTA2Ljg1NTU5Ni0yNjkuMzA5MDQxIDMyNS4wODQ5NDctMjE1Ljc1ODgzMSA1MzIuMTYzNTY4LTQ5LjQ5OTQ0NyA0NC4wNjg3NTItNTcuMTU1ODM2IDEyMC4wMzE3MDctMTcuNDcxNzAyIDE3My41NTk2NjIgMzkuNjg0MTM0IDUzLjUwNTY5NyAxMTMuMDQzMDI3IDY2LjEyNTM4NSAxNjcuNTUwMjg2IDI4LjgyMjc0NSA1NC40ODUwMDMtMzcuMzAyNjQxIDcxLjQwMDI4MS0xMTEuNjg1MzUzIDM4LjU3MTI4Ny0xNjkuODg3MjY2di0wLjgyMzUwN3ogbS04NS4zMTA4NzIgMTAzLjE2MDk0M2MtMjEuMjEwODY5IDEyLjU3NTE3NC00OC4zMTk4MjkgNS4xMTkwOTctNjAuNTgzNDA2LTE2LjY0ODE5NmE0Ni42MjgzMDEgNDYuNjI4MzAxIDAgMCAxLTUuMDk2ODQxLTM1LjM0NDAyOSA0NS40MDQxNjkgNDUuNDA0MTY5IDAgMCAxIDIxLjI5OTg5Ny0yOC4yNjYzMjFjMjEuMjEwODY5LTEyLjU1MjkxNyA0OC4zMTk4MjktNS4xMTkwOTcgNjAuNTgzNDA2IDE2LjY3MDQ1MiA2LjM4Nzc0MyAxMC41OTQzMDYgOC4yNzk1ODQgMjMuNDM2NTY0IDUuMjMwMzgyIDM1LjQ5OTgyOGE0NS40MDQxNjkgNDUuNDA0MTY5IDAgMCAxLTIxLjQzMzQzOCAyOC4zNTUzNDl2LTAuMjY3MDgzeiIgZmlsbD0iIzM1M0E1MyIgcC1pZD0iNDU0NSIvPjxwYXRoIGQ9Ik01MjMuNDMyOTk1IDI1NC42MjA3OTNjNDUuOTYwNTkzLTAuMTU1Nzk5IDg3LjkzNzE5Mi0yNy4xMDg5NiAxMDguNjEzODk0LTY5LjczMTAxMSAxNTkuNzE1ODQxIDQ5LjU2NjIxOCAyNjkuMDE5NzAxIDIwMi4yOTMzNzggMjY4LjY0MTMzMyAzNzUuMzYzMzg3IDAgMjIuNTY4NTQzIDE3LjYyNzUwMSA0MC44NjM3NTIgMzkuMzcyNTM3IDQwLjg2Mzc1MiAyMS43MjI3NzkgMCAzOS4zNTAyOC0xOC4yOTUyMDkgMzkuMzUwMjgtNDAuODYzNzUyIDAuMjIyNTY5LTIxMy41MzMxMzYtMTM3LjM5MjEyNS00MDAuNzM2MzA1LTMzNS44MzUwNTItNDU2LjgyMzgwOC0xMi4xNzQ1NDktNjUuOTQ3MzMtNzEuNjY3MzY1LTExMC43MDYwNDctMTM1LjgxMTg4Mi0xMDIuMjI2MTUxLTY0LjE2Njc3NCA4LjUwMjE1My0xMTAuOTI4NjE3IDY3LjMyNzI2LTEwNi43ODg4MjUgMTM0LjM0MjkyNCA0LjE2MjA0OSA2Ny4wMzc5MiA1Ny43NTY3NzQgMTE5LjE2MzY4NyAxMjIuNDU3NzE1IDExOS4wNzQ2NTl6IiBmaWxsPSIjMjU1Q0ZGIiBwLWlkPSI0NTQ2IiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4LnNlYXJjaF9pbmRleC4wLmkxLjcxZGYzYTgxSUR2Y3RBIiBjbGFzcz0ic2VsZWN0ZWQiLz48cGF0aCBkPSJNNTEyLjAxNTE4MiA4OS4yMDcxNzNhNDQuNTEzODkxIDQ0LjUxMzg5MSAwIDEgMSAwIDg5LjAyNzc4MyA0NC41MTM4OTEgNDQuNTEzODkxIDAgMCAxIDAtODkuMDI3NzgzeiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNDU0NyIvPjwvc3ZnPg==");\r\n    --ovnICON-Prompt: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIiB2aWV3Qm94PSIxNzAuNjY3IDIzOC45MzMgNjgyLjY2MSA1NDYuMTMzIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+PHBhdGggZD0iTTY1OC41MzQgMjM4LjkzM2MxMi44IDAgMjMuOTk2IDExLjUzNyAyMy45OTYgMjQuNzQ3djE4MS40ODdoMTQ3LjE1YzQuODEzIDAgOS42MjYgMS42NzIgMTIuOCA0Ljk1IDExLjE5NiA4LjI2IDE0LjQwNCAyMy4xMDggNi40MTcgMzQuNjQ1TDY2MS43NDMgNzczLjUzYTIyLjA4IDIyLjA4IDAgMCAxLTE5LjE4MyAxMS41MzdjLTEyLjggMC0yMy45OTYtMTEuNTM3LTIzLjk5Ni0yNC43NDdWNTc4LjgzM0g0NzEuMzgxYTE3Ljg1IDE3Ljg1IDAgMCAxLTEyLjgtNC45NWMtMTEuMTk1LTguMjYtMTQuMzctMjMuMTA4LTYuMzgzLTM0LjY0NUw2MzkuMzUxIDI1MC40N2EyMi4wOCAyMi4wOCAwIDAgMSAxOS4xODMtMTEuNTM3TTQ0Mi42MDcgNjc2LjE4MWMyNy4xNyAwIDQ3Ljk5MSAyMS40MzYgNDcuOTkxIDQ5LjQ5NHMtMjAuODIgNDkuNDkzLTQ3Ljk5MSA0OS40OTNIMjgyLjYyNGMtMjcuMTcgMC00Ny45NTctMjEuNDM2LTQ3Ljk1Ny00OS40OTNzMjAuNzg3LTQ5LjQ5NCA0Ny45NTctNDkuNDk0em0tOTUuOTgzLTE5Ny45NzNjMjcuMjA0IDAgNDcuOTkxIDIxLjQwMiA0Ny45OTEgNDkuNDkzIDAgMjguMDI0LTIwLjgyIDQ5LjQ5NC00Ny45OTEgNDkuNDk0aC0xMjhjLTI3LjEzNiAwLTQ3Ljk1Ny0yMS41MDQtNDcuOTU3LTQ5LjQ5NCAwLTI4LjA5MSAyMC44MjEtNDkuNDkzIDQ3Ljk5MS00OS40OTN6bTk1Ljk4My0xOTguMDQyYzI3LjE3IDAgNDcuOTkxIDIxLjQ3IDQ3Ljk5MSA0OS40OTQgMCAyOC4wNTctMjAuODIgNDkuNDkzLTQ3Ljk5MSA0OS40OTNIMjgyLjYyNGMtMjcuMTcgMC00Ny45NTctMjEuNDM2LTQ3Ljk1Ny00OS40OTMgMC0yOC4wMjQgMjAuNzg3LTQ5LjQ5NCA0Ny45NTctNDkuNDk0eiIgZmlsbD0iIzExNzRFRiIvPjwvc3ZnPg==");\r\n    --ovnICON-Markdown-Line: url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDI1NjAgMjU2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+PHBhdGggZD0iTTIyOS45NzUgNDgwQzEwNS42IDQ4MCAwIDU4MC4yNjggMCA3MDUuMDY3djExNDkuODY1QzAgMTk3OS43MzMgMTA1LjYgMjA4MCAyMjkuOTc1IDIwODBoMjEwMC4wNUMyNDU0LjQgMjA4MCAyNTYwIDE5NzkuNzMzIDI1NjAgMTg1NC45MzNWNzA1LjA2N0MyNTYwIDU4MC4yNjcgMjQ1NC40IDQ4MCAyMzMwLjAyNSA0ODB6bTAgMTYwaDIxMDAuMDVjNDEuMTc1IDAgNjkuOTc1IDMwLjYxMiA2OS45NzUgNjUuMDY3djExNDkuODY1YzAgMzQuNDU2LTI4LjggNjUuMDY4LTY5Ljk3NSA2NS4wNjhIMjI5Ljk3NUMxODguOCAxOTIwIDE2MCAxODg5LjM4OCAxNjAgMTg1NC45MzJWNzA1LjA2N0MxNjAgNjcwLjYxMiAxODguOCA2NDAgMjI5Ljk3NSA2NDBNNDAwIDg4MHY4MDBoMjQwdi01MzIuNDhsMjQwIDMxNy40NCAyNDAtMzE3LjQ0VjE2ODBoMjQwVjg4MGgtMjQwbC0yNDAgMzIwLTI0MC0zMjB6bTEzNjAgMHY0MDBoLTI0MGwzNjAgNDAwIDM2MC00MDBoLTI0MFY4ODB6Ii8+PC9zdmc+");\r\n    --ovnICON-Markdown-Fill: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzQzNzU3Mzg3OTY3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEyODAgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyMDE2IiB3aWR0aD0iNjI1IiBoZWlnaHQ9IjUwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0xMTg3LjcgOTA1Ljg0SDkyLjNDNDEuNCA5MDUuODQgMCA4NjQuNDQgMCA4MTMuNTRWMjEwLjQ2YzAtNTAuOSA0MS40LTkyLjMgOTIuMy05Mi4zaDEwOTUuMzhjNTAuOSAwIDkyLjMgNDEuNCA5Mi4zIDkyLjN2NjAzLjA4YzAuMDIgNTAuOS00MS4zOCA5Mi4zLTkyLjI4IDkyLjN6IG0tODgwLTE4NC42di0yNDBsMTIzLjA4IDE1My44NCAxMjMuMDgtMTUzLjg0djI0MGgxMjMuMDhWMzAyLjc2aC0xMjMuMDhsLTEyMy4wOCAxNTMuODQtMTIzLjA4LTE1My44NEgxODQuNjJ2NDE4LjQ2aDEyMy4wOHpNMTEzMi4zIDUxMmgtMTIzLjA4VjMwMi43NmgtMTIzLjA4VjUxMmgtMTIzLjA4bDE4NC42MiAyMTUuMzhMMTEzMi4zIDUxMnoiIGZpbGw9IiMwMDAwMDAiIHAtaWQ9IjEyMDE3Ij48L3BhdGg+PC9zdmc+");\r\n    --ovnICON-MermaidLive: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI1MCAwYTI1MCAyNTAgMCAwIDEgMjUwIDI1MCAyNTAgMjUwIDAgMCAxLTI1MCAyNTBBMjUwIDI1MCAwIDAgMSAwIDI1MCAyNTAgMjUwIDAgMCAxIDI1MCAwIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNS44NjUgMzUuODY1QzAgNzEuNzI5IDAgMTI5LjQ0OCAwIDI0NC44OTZ2MTAuMjA4YzAgMTE1LjQ0OCAwIDE3My4xNjcgMzUuODY1IDIwOS4wMzFTMTI5LjQ0OCA1MDAgMjQ0Ljg5NiA1MDBoMTAuMjA4YzExNS40NDggMCAxNzMuMTY3IDAgMjA5LjAzMS0zNS44NjVTNTAwIDM3MC41NTIgNTAwIDI1NS4xMDR2LTEwLjIwOGMwLTExNS40NDggMC0xNzMuMTY3LTM1Ljg2NS0yMDkuMDMxUzM3MC41NTIgMCAyNTUuMTA0IDBoLTEwLjIwOEMxMjkuNDQ4IDAgNzEuNzI5IDAgMzUuODY1IDM1Ljg2NW0zNjMuOTkgODkuMjcxYTE1MS4yNSAxNTEuMjUgMCAwIDAtOTEuMzc1IDI1LjkzOEExNTMuODUgMTUzLjg1IDAgMCAwIDI1MCAyMjYuNjE1YTE1My44NSAxNTMuODUgMCAwIDAtNTguNDktNzUuNTQyIDE1MS4yNSAxNTEuMjUgMCAwIDAtOTEuMzc1LTI1LjkzOCAxNTUuNyAxNTUuNyAwIDAgMCAxNi4wODMgNzUuNjc3IDE1NC4yIDE1NC4yIDAgMCAwIDUwLjQxNyA1OC4yNzEgODIuMyA4Mi4zIDAgMCAxIDI2LjE3NyAyOS43OTIgODMuMyA4My4zIDAgMCAxIDkuMzc1IDM4LjY5OFYzNzVoOTUuNjI1di00Ny40MjdhODMuMyA4My4zIDAgMCAxIDkuMzc1LTM4LjY5OCA4Mi4zIDgyLjMgMCAwIDEgMjYuMTc3LTI5Ljc5MiAxNTMuNzUgMTUzLjc1IDAgMCAwIDUwLjQxNy01OC4yNiAxNTUuNiAxNTUuNiAwIDAgMCAxNi4wNzMtNzUuNjc3TTE3Mi4wNzMgMzI3LjU4M2E1Mi43IDUyLjcgMCAwIDAtNS44NzUtMjQuNDc5IDUyLjEgNTIuMSAwIDAgMC0xNi41MjEtMTguODc1QTE4My4zIDE4My4zIDAgMCAxIDEwMCAyMzMuMTM1VjM3NWg3Mi4wODN6bTE2MS43NC0yNC40NzlhNTIuNyA1Mi43IDAgMCAwLTUuODc1IDI0LjQ3OVYzNzVINDAwVjIzMy4xNDZhMTgzLjMgMTgzLjMgMCAwIDEtNDkuNjc3IDUxLjA3MyA1Mi4xIDUyLjEgMCAwIDAtMTYuNTIxIDE4Ljg3NSIgZmlsbD0iIzFlMjkzYiIvPjwvc3ZnPg==");\r\n    --ovnICON-Music: url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMjQyLjUgNjI0LjUgMjA3NC43NSAxMzExLjI1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cGF0aCBkPSJNNDg3LjI1IDE5MzUuNzVIMjA3Mi41YzEzNC43NSAwIDI0NC43NS0xMTAuMjUgMjQ0Ljc1LTI0NC43NVY4NjkuMjVjMC0xMzQuNzUtMTEwLjI1LTI0NC43NS0yNDQuNzUtMjQ0Ljc1SDQ4Ny4yNWMtMTM0Ljc1IDAtMjQ0Ljc1IDExMC4yNS0yNDQuNzUgMjQ0Ljc1VjE2OTFjMCAxMzQuNSAxMTAuMjUgMjQ0Ljc1IDI0NC43NSAyNDQuNzUiIGZpbGw9IiMyNDIyMkQiLz48cGF0aCBkPSJNNDgzLjc1IDE5MzUuNzVIMjA2OWMxMy43NSAwIDI3LjUtMSA0MC43NS0yLjc1LTQxLTEyNy41LTE1Ny41LTIxOS41LTM0Mi0yMTkuNUg4NTEuNWMtMTg0Ljc1IDAtMzQzIDkyLjI1LTQwMS4yNSAyMjAuMjUgMTEgMS4yNSAyMi4yNSAyIDMzLjUgMm0zLjUtMzc5SDIwNzIuNWM2NS4yNSAwIDExOS01My43NSAxMTktMTE5di01NjguNWMwLTY1LjI1LTUzLjc1LTExOS0xMTktMTE5SDQ4Ny4yNWMtNjUuMjUgMC0xMTkgNTMuNzUtMTE5IDExOVYxNDM4Yy4yNSA2NSA1NCAxMTguNzUgMTE5IDExOC43NSIgZmlsbD0iI0Y2NiIvPjxwYXRoIGQ9Ik04NTEuNSAxMDQxLjVoODU3Yzk3LjI1IDAgMTc2Ljc1IDc5LjUgMTc2Ljc1IDE3Ni43NXMtNzkuNSAxNzYuNS0xNzYuNzUgMTc2LjVoLTg1N2MtOTcuMjUgMC0xNzYuNS03OS41LTE3Ni41LTE3Ni41IDAtOTcuMjUgNzkuNS0xNzYuNzUgMTc2LjUtMTc2Ljc1IiBmaWxsPSIjMjQyMjJEIi8+PHBhdGggZD0iTTE3MDguNSAxMDk2YzY3LjUgMCAxMjIgNTQuNzUgMTIyIDEyMiAwIDY3LjUtNTQuNzUgMTIyLTEyMiAxMjItNjcuNSAwLTEyMi01NC43NS0xMjItMTIyIDAtNjcuNSA1NC41LTEyMiAxMjItMTIybS04NTcgMGM2Ny41IDAgMTIyIDU0Ljc1IDEyMiAxMjIgMCA2Ny41LTU0Ljc1IDEyMi0xMjIgMTIyLTY3LjUgMC0xMjItNTQuNzUtMTIyLTEyMiAwLTY3LjUgNTQuNzUtMTIyIDEyMi0xMjJNNDczLjI1IDgxMWMyNCAwIDQzLjUgMTkuNSA0My41IDQzLjVzLTE5LjUgNDMuNS00My41IDQzLjUtNDMuNS0xOS41LTQzLjUtNDMuNSAxOS41LTQzLjUgNDMuNS00My41bTE2MTMuNS0yLjc1YzI0IDAgNDMuNSAxOS41IDQzLjUgNDMuNXMtMTkuNSA0My41LTQzLjUgNDMuNS00My41LTE5LjUtNDMuNS00My41IDE5LjUtNDMuNSA0My41LTQzLjVtNzcuNSA5MDUuMjVjMjYuMjUgMCA0Ny43NSAyMS41IDQ3Ljc1IDQ3Ljc1cy0yMS4yNSA0Ny43NS00Ny43NSA0Ny43NWMtMjYuMjUgMC00Ny43NS0yMS41LTQ3Ljc1LTQ3Ljc1czIxLjI1LTQ3Ljc1IDQ3Ljc1LTQ3Ljc1bS0xNzY4LjUgMGMyNi4yNSAwIDQ3Ljc1IDIxLjUgNDcuNzUgNDcuNzVTNDIyLjI1IDE4MDkgMzk1Ljc1IDE4MDljLTI2LjI1IDAtNDcuNzUtMjEuNS00Ny43NS00Ny43NS4yNS0yNi4yNSAyMS41LTQ3Ljc1IDQ3Ljc1LTQ3Ljc1IiBmaWxsPSIjRkZGIi8+PC9zdmc+");\r\n    --ovnICON-SVG: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE5My43NSAxMTIuNSA4Ny41IDE3NXYyNTBsMTA2LjI1IDYyLjVMMzAwIDU1MGwxMDYuMjUtNjIuNUw1MTIuNSA0MjVWMTc1bC0xMDYuMjUtNjIuNUwzMDAgNTB6TTMwMCA1MHYyNTBtMjEyLjUgMTI1TDMwMCAzMDBNODcuNSA0MjUgMzAwIDMwMG0wIDI1MFY0MjVtMjEyLjUtMjUwLTEwMCA2Mi41TTg3LjUgMTc1bDEwMCA2Mi41IiBzdHJva2U9IiMwOEUwQUQiIHN0cm9rZS13aWR0aD0iNTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==");\r\n    --ovnICON-P: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIiB2aWV3Qm94PSIxNDQuOTA1IDE0NC44ODIgMjI3MC4yMTMgMjMxOC41MTgiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTEwLjU1NGIzYTgxY25IOFAyIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+PHBhdGggZD0iTTE4ODQuNCAxOTMuNzg3YzI1LjctNjUuMjA3IDExNy45NTUtNjUuMjA3IDE0My42NSAwbDU0LjYzIDEzOC40OGEyNTcuNDUgMjU3LjQ1IDAgMCAwIDE0NS4wNSAxNDUuMDVsMTM4LjQ4MyA1NC41ODJjNjUuMjA3IDI1Ljc0NSA2NS4yMDcgMTE4IDAgMTQzLjc0OGwtMTM4LjQ4IDU0LjU4YTI1Ny40NSAyNTcuNDUgMCAwIDAtMTQ1LjA1IDE0NS4wNWwtNTQuNTgyIDEzOC40ODNjLTI1Ljc0NSA2NS4yMDctMTE4IDY1LjIwNy0xNDMuNyAwbC01NC42MjctMTM4LjQ4M2EyNTcuNDUgMjU3LjQ1IDAgMCAwLTE0NS4wNS0xNDUuMDVsLTEzOC40ODMtNTQuNThjLTY1LjIwNy0yNS43NDUtNjUuMjA3LTExOCAwLTE0My43NDhsMTM4LjQ4My01NC41OGEyNTcuNDUgMjU3LjQ1IDAgMCAwIDE0NS4wNS0xNDUuMDVsNTQuNTgtMTM4LjQ4M3oiIGZpbGw9IiMzMjQ3NTUiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTIuNTU0YjNhODFjbkg4UDIiLz48cGF0aCBkPSJNMTM3Ni42MDUgMjQxLjUxYTk2LjYwNSA5Ni42MDUgMCAxIDEgMCAxOTMuMjA4SDcyNC41M2EzODYuNDE1IDM4Ni40MTUgMCAwIDAtMzg2LjQxOCAzODYuNDE1djEwNjIuNjRhMzg2LjQzIDM4Ni40MyAwIDAgMCAyMTcuMDIgMzQ3LjM0YzIyOS42MjgtMzQzLjIzMyA2NjIuMzY4LTg3OC42NjEgMTE1OS41ODUtODc4LjY2MSAxODQuMTc1IDAgMzIwLjM4NSA1Ny4xNDIgNDEwLjU2NSAxMjAuMzY3di0yNjUuMjc1YTk2LjYwNSA5Ni42MDUgMCAxIDEgMTkzLjIwOCAwdjY3Ni4yMzFjMCAzMjAuMS0yNTkuNTI1IDU3OS42MjUtNTc5LjYyMiA1NzkuNjI1SDcyNC41MjdjLTMyMC4wOTUgMC01NzkuNjIyLTI1OS41MjUtNTc5LjYyMi01NzkuNjI1VjgyMS4xMzJjMC0zMjAuMDk3IDI1OS41MjUtNTc5LjYyNSA1NzkuNjI1LTU3OS42MjV6IiBmaWxsPSIjMzI0NzU1IiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4LnNlYXJjaF9pbmRleC4wLmkzLjU1NGIzYTgxY25IOFAyIi8+PHBhdGggZD0iTTUzMS4zMiA5MTcuNzM1YTI0MS41MSAyNDEuNTEgMCAxIDAgNDgzLjAyIDAgMjQxLjUxIDI0MS41MSAwIDEgMC00ODMuMDIgMCIgZmlsbD0iIzU1OTRBOSIgZGF0YS1zcG0tYW5jaG9yLWlkPSJhMzEzeC5zZWFyY2hfaW5kZXguMC5pMTEuNTU0YjNhODFjbkg4UDIiLz48L3N2Zz4=");\r\n    --ovnICON-V: url("");\r\n    --ovnICON-A: url("");\r\n    --ovnICON-C: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIiB2aWV3Qm94PSIxNTkuODg4IDE1OS44OSAyMjQwLjkzNCAyMjQwLjIyMiIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPjxwYXRoIGQ9Ik01ODMuMTEgMTI4MGE2OTYuODkgNjk2Ljg5IDAgMSAwIDEzOTMuNzggMCA2OTYuODkgNjk2Ljg5IDAgMSAwLTEzOTMuNzggMCIgZmlsbD0iIzMyNDc1NSIvPjxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI1MCI+PHBhdGggZD0iTTkyOC41NyA1MDQuODlhODQzLjggODQzLjggMCAwIDEgMjc3LjMzMy03Mi4xMDhWMTg1LjZhMTA4OC44IDEwODguOCAwIDAgMC0zOTcuMjI1IDEwMi45N2wzLjY5NSA2LjR6IiBmaWxsPSIjNjVjOGNkIiBzdHJva2U9IiM2NWM4Y2QiLz48cGF0aCBkPSJNNTg4LjUxNSA3ODMuMjE3YTg1NS4zIDg1NS4zIDAgMCAxIDIxNS43NS0yMDkuMzVMNjg3Ljc4NyAzNjMuODA0bC0zLjEzLTUuODMzYTExMDEuNSAxMTAxLjUgMCAwIDAtMzA4LjA1MyAyOTcuOTU4bDUuNDA1IDMuMjd6IiBmaWxsPSIjYTNlNWYwIiBzdHJva2U9IiNhM2U1ZjAiLz48cGF0aCBkPSJNMjYxLjI2MiAxMjA4Ljg5aDE3MC42NjdhODQ2LjMgODQ2LjMgMCAwIDEgODMuNzY3LTMwMy43ODhMMzA4Ljc2MyA3ODEuMDg1bC01LjQwNS0zLjEzYTEwODkuNzUgMTA4OS43NSAwIDAgMC0xMTguNDcgNDMwLjkzNWg3Ny4wODJ6IiBmaWxsPSIjZTRjMGIzIiBzdHJva2U9IiNlNGMwYjMiLz48cGF0aCBkPSJtNDg1LjgzIDE5MjAgMTIzLjg3NS0xMTUuNjI1QTg0Ni4xIDg0Ni4xIDAgMCAxIDQzMS4zNiAxMzUxLjExSDE4NC44OWExMDkyLjEzIDEwOTIuMTMgMCAwIDAgMjQ0LjYyIDYyMi41MDdsNS4xMi00LjY5MnoiIGZpbGw9IiNmMjk0NzIiIHN0cm9rZT0iI2YyOTQ3MiIvPjxwYXRoIGQ9Ik0xMjA1LjkgMjI5NS40Njh2LTE2OC4yNWE4NDYuNzUgODQ2Ljc1IDAgMCAxLTQ5OS40ODMtMjE4LjAyNWwtMTIzLjMwOCAxMTUuMzQtNTEuOTEgNDguNS00Ljk3OCA0LjU1QTEwOTMgMTA5MyAwIDAgMCAxMjA1LjkgMjM3NS4xMXoiIGZpbGw9IiNmZWVlYjMiIHN0cm9rZT0iI2ZlZWViMyIvPjxwYXRoIGQ9Im0xOTg0LjI4NSAyMDEyLjQ0NS0xMjQuMTYtMTExLjc4OGE4NDcuMjUgODQ3LjI1IDAgMCAxLTUxMiAyMjcuNTU1djI0Ni45YTEwOTIuNTUgMTA5Mi41NSAwIDAgMCA2OTUuNjA3LTMwOC42MjVsLTYuNjgzLTYuMTE1eiIgZmlsbD0iIzczZGFjYSIgc3Ryb2tlPSIjNzNkYWNhIi8+PHBhdGggZD0ibTIyNzYuMjY3IDEwODUuODY3LTE2MC41NyA0Mi42NjVhODQ4LjUgODQ4LjUgMCAwIDEtMTYwLjI4NSA2NjYuMzEzbDEuNDI1IDEuMjggMTIyLjMxIDExMC4wOCA1My4wNSA0Ny43ODUgNi44MjUgNi4xMTdhMTA5MS41NSAxMDkxLjU1IDAgMCAwIDIzNi44LTY4MC4xMDcgMTEwNSAxMTA1IDAgMCAwLTIxLjE5My0yMTUuMTgybC05LjUyNyAyLjU2eiIgZmlsbD0iIzc3ODllZSIgc3Ryb2tlPSIjNzc4OWVlIi8+PHBhdGggZD0iTTEzNDguMTI1IDI2NC4zOVY0MzIuNWE4NTAuNzggODUwLjc4IDAgMCAxIDczMC44OCA1NTguOTMzbDIyOS4xMi02MS40NCA5LjUyNy0yLjU2YTEwOTcuMzkgMTA5Ny4zOSAwIDAgMC05NjkuNTI3LTc0Mi41NDN2NzkuMDc1eiIgZmlsbD0iIzYxOWNmYSIgc3Ryb2tlPSIjNjE5Y2ZhIi8+PC9nPjwvc3ZnPg==");\r\n    \r\n    --ovnICON-Correct: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iQ29ycmVjdCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cGF0aCBkPSJNMjUwIDBjNzcuNjkuNyAxNDQgMjAuMTkgMTg2LjU1IDYzLjQ1QzQ3OS44MSAxMDUuOTkgNDk5LjMgMTcyLjMxIDUwMCAyNTBjLS43IDc3LjY5LTIwLjE5IDE0NC02My40NSAxODYuNTVDMzk0IDQ3OS44MSAzMjcuNjkgNDk5LjMgMjUwIDUwMGMtNzcuNjktLjctMTQ0LTIwLjE5LTE4Ni41NS02My40NUMyMC4xOSAzOTQgLjcgMzI3LjY5IDAgMjUwYy43LTc3LjY5IDIwLjE5LTE0NCA2My40NS0xODYuNTVDMTA2IDIwLjE5IDE3Mi4zMS43IDI1MCAwIiBmaWxsPSIjMWZlNDdlIi8+PHBhdGggZD0iTTIyNy4xMzEgMzQ4LjM3M2EyMy45OCAyMy45OCAwIDAgMS0xNy4wMDYtNy4wNGwtODMuMTI3LTgzLjEyN2MtOS4zOTQtOS4zOTQtOS4zOTQtMjQuNjE4IDAtMzQuMDAxIDkuMzk0LTkuMzk0IDI0LjYxOC05LjM5NCAzNC4wMDEgMGw2Ni4xMzIgNjYuMTMyTDM1NC4zOSAxNjMuMDc4YzkuMzk0LTkuMzk0IDI0LjYxOC05LjM5NCAzNC4wMDEgMCA5LjM5NCA5LjM5NCA5LjM5NCAyNC42MTggMCAzNC4wMDFMMjQ0LjEyNiAzNDEuMzQ0Yy00LjY5NyA0LjY5Ny0xMC44NDYgNy4wNC0xNy4wMDYgNy4wNFoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii44Ii8+PC9zdmc+");\r\n    --ovnICON-Error: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iRXJyb3IiIHZpZXdCb3g9IjAgMCA1MDAgNTAwIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+PHBhdGggZD0iTTI1MCAwYzc3LjY5LjcgMTQ0IDIwLjE5IDE4Ni41NSA2My40NUM0NzkuODEgMTA1Ljk5IDQ5OS4zIDE3Mi4zMSA1MDAgMjUwYy0uNyA3Ny42OS0yMC4xOSAxNDQtNjMuNDUgMTg2LjU1QzM5NCA0NzkuODEgMzI3LjY5IDQ5OS4zIDI1MCA1MDBjLTc3LjY5LS43LTE0NC0yMC4xOS0xODYuNTUtNjMuNDVDMjAuMTkgMzk0IC43IDMyNy42OSAwIDI1MGMuNy03Ny42OSAyMC4xOS0xNDQgNjMuNDUtMTg2LjU1QzEwNiAyMC4xOSAxNzIuMzEuNyAyNTAgMCIgZmlsbD0iI2ZmNzE0ZCIvPjxwYXRoIGQ9Ik0zNDcuNDI3IDMxMi42MzQgMjg0Ljc5MyAyNTBsNjIuNjIzLTYyLjYyM2M5LjYxNC05LjYwMyA5LjYxNC0yNS4xOSAwLTM0Ljc5My05LjYxNC05LjYxNC0yNS4xOS05LjYxNC0zNC43OTMgMEwyNTAgMjE1LjIwN2wtNjIuNjIzLTYyLjYyM2MtOS42MTQtOS42MTQtMjUuMTktOS42MTQtMzQuNzkzIDAtOS42MTQgOS42MDMtOS42MTQgMjUuMTkgMCAzNC43OTNMMjE1LjIwNyAyNTBsLTYyLjYzNCA2Mi42MzRjLTkuNjE0IDkuNjAzLTkuNjE0IDI1LjE5IDAgMzQuNzkzIDQuODA3IDQuODA3IDExLjA5OSA3LjIwNSAxNy40MDIgNy4yMDVzMTIuNTk1LTIuMzk4IDE3LjQwMi03LjIwNWw2Mi42MzQtNjIuNjM0IDYyLjYzNCA2Mi42MzRjNC44MDcgNC44MDcgMTEuMDk5IDcuMjA1IDE3LjQwMiA3LjIwNXMxMi41OTUtMi4zOTggMTcuNDAyLTcuMjA1YzkuNjE0LTkuNjAzIDkuNjE0LTI1LjE5IDAtMzQuNzkzWiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjgiLz48L3N2Zz4=");\r\n    --ovnICON-Warn: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iV2FybiIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cGF0aCBkPSJNMjUwIDBjNzcuNjkuNyAxNDQgMjAuMTkgMTg2LjU1IDYzLjQ1QzQ3OS44MSAxMDUuOTkgNDk5LjMgMTcyLjMxIDUwMCAyNTBjLS43IDc3LjY5LTIwLjE5IDE0NC02My40NSAxODYuNTVDMzk0IDQ3OS44MSAzMjcuNjkgNDk5LjMgMjUwIDUwMGMtNzcuNjktLjctMTQ0LTIwLjE5LTE4Ni41NS02My40NUMyMC4xOSAzOTQgLjcgMzI3LjY5IDAgMjUwYy43LTc3LjY5IDIwLjE5LTE0NCA2My40NS0xODYuNTVDMTA2IDIwLjE5IDE3Mi4zMS43IDI1MCAwIiBmaWxsPSIjRkY3QjI5Ii8+PHBhdGggZD0iTTIyMy4xIDM0OC4xYzAgMTQuODQgMTIuMDIgMjYuOSAyNi43OCAyNi45aC4yNGMxNC44MS0uMDIgMjYuOC0xMi4wNSAyNi43OC0yNi44NnYtLjA0Yy4wMi0xNC44MS0xMS45Ny0yNi44NC0yNi43OC0yNi44NmgtLjI0Yy0xNC44MS4wMi0yNi44IDEyLjA1LTI2Ljc4IDI2Ljg2bTAtODEuNTVjLS4wMSAxNC44NiAxMi4wMiAyNi45MSAyNi44OCAyNi45MnMyNi45MS0xMi4wMiAyNi45Mi0yNi44OHYtMTE0LjdjMC0xNC44Ni0xMi4wNC0yNi45LTI2LjktMjYuOXMtMjYuOSAxMi4wNC0yNi45IDI2Ljl2MTE0LjY1WiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjgiLz48L3N2Zz4=");\r\n    --ovnICON-Correct-Empty: url("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkNvcnJlY3QtRW1wdHkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwMCA1MDAiPjxwYXRoIGQ9Ik00MzYuNTUgNjMuNDVDMzk0IDIwLjE5IDMyNy42OS43IDI1MCAwIDE3Mi4zMS43IDEwNiAyMC4xOSA2My40NSA2My40NSAyMC4xOSAxMDYgLjcgMTcyLjMxIDAgMjUwYy43IDc3LjY5IDIwLjE5IDE0NCA2My40NSAxODYuNTVDMTA2IDQ3OS44MSAxNzIuMzEgNDk5LjMgMjUwIDUwMGM3Ny42OS0uNyAxNDQtMjAuMTkgMTg2LjU1LTYzLjQ1QzQ3OS44MSAzOTQgNDk5LjMgMzI3LjY5IDUwMCAyNTBjLS43LTc3LjY5LTIwLjE5LTE0NC4wMS02My40NS0xODYuNTVtLTQ4LjE2IDEzMy42M0wyNDQuMTIgMzQxLjM1Yy00LjcgNC43LTEwLjg1IDcuMDQtMTcuMDEgNy4wNGguMDFjLTYuMzggMC0xMi41LTIuNTQtMTcuMDEtNy4wNWwtODMuMTMtODMuMTNjLTkuMzktOS4zOS05LjM5LTI0LjYyIDAtMzQgOS4zOS05LjM5IDI0LjYyLTkuMzkgMzQgMGw2Ni4xMyA2Ni4xMyAxMjcuMjYtMTI3LjI2YzkuMzktOS4zOSAyNC42Mi05LjM5IDM0IDAgOS4zOSA5LjM5IDkuMzkgMjQuNjIgMCAzNFoiIHN0eWxlPSJmaWxsOiMyNWY0OWQiLz48L3N2Zz4=");\r\n    --ovnICON-Error-Empty: url("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkVycm9yLUVtcHR5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgNTAwIj48cGF0aCBkPSJNNDM2LjU1IDYzLjQ1QzM5NCAyMC4xOSAzMjcuNjkuNyAyNTAgMCAxNzIuMzEuNyAxMDYgMjAuMTkgNjMuNDUgNjMuNDUgMjAuMTkgMTA2IC43IDE3Mi4zMSAwIDI1MGMuNyA3Ny42OSAyMC4xOSAxNDQgNjMuNDUgMTg2LjU1QzEwNiA0NzkuODEgMTcyLjMxIDQ5OS4zIDI1MCA1MDBjNzcuNjktLjcgMTQ0LTIwLjE5IDE4Ni41NS02My40NUM0NzkuODEgMzk0IDQ5OS4zIDMyNy42OSA1MDAgMjUwYy0uNy03Ny42OS0yMC4xOS0xNDQuMDEtNjMuNDUtMTg2LjU1bS04OS4xIDI4My45OGMtNC44MSA0LjgxLTExLjEgNy4yMS0xNy40IDcuMjFzLTEyLjU5LTIuNC0xNy40LTcuMjFsLTYyLjYzLTYyLjYzLTYyLjYzIDYyLjYzYy00LjgxIDQuODEtMTEuMSA3LjIxLTE3LjQgNy4yMXMtMTIuNTktMi40LTE3LjQtNy4yMWMtOS42MS05LjYtOS42MS0yNS4xOSAwLTM0Ljc5bDYyLjYzLTYyLjYzLTYyLjYyLTYyLjYyYy05LjYxLTkuNi05LjYxLTI1LjE5IDAtMzQuNzkgOS42LTkuNjEgMjUuMTgtOS42MSAzNC43OSAwbDYyLjYyIDYyLjYyIDYyLjYyLTYyLjYyYzkuNi05LjYxIDI1LjE4LTkuNjEgMzQuNzkgMCA5LjYxIDkuNiA5LjYxIDI1LjE5IDAgMzQuNzlsLTYyLjYyIDYyLjYyIDYyLjYzIDYyLjYzaC4wMmM5LjYxIDkuNiA5LjYxIDI1LjE5IDAgMzQuNzkiIHN0eWxlPSJmaWxsOiNmYzVlNGYiLz48L3N2Zz4=");\r\n    --ovnICON-Warn-Empty: url("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9Ildhcm4tRW1wdHkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwMCA1MDAiPjxwYXRoIGQ9Ik00MzYuNTUgNjMuNDVDMzk0IDIwLjE5IDMyNy42OS43IDI1MCAwIDE3Mi4zMS43IDEwNiAyMC4xOSA2My40NSA2My40NSAyMC4xOSAxMDYgLjcgMTcyLjMxIDAgMjUwYy43IDc3LjY5IDIwLjE5IDE0NCA2My40NSAxODYuNTVDMTA2IDQ3OS44MSAxNzIuMzEgNDk5LjMgMjUwIDUwMGM3Ny42OS0uNyAxNDQtMjAuMTkgMTg2LjU1LTYzLjQ1QzQ3OS44MSAzOTQgNDk5LjMgMzI3LjY5IDUwMCAyNTBjLS43LTc3LjY5LTIwLjE5LTE0NC4wMS02My40NS0xODYuNTVNMjUwIDEyNWMxNC44NiAwIDI2LjkgMTIuMDQgMjYuOSAyNi45djExNC43Yy0uMDEgMTQuODYtMTIuMDcgMjYuODktMjYuOTIgMjYuODgtMTQuODYtLjAxLTI2Ljg5LTEyLjA3LTI2Ljg4LTI2LjkyVjE1MS45MWMwLTE0Ljg2IDEyLjA0LTI2LjkgMjYuOS0yNi45Wm0uMTIgMjUwaC0uMjRjLTE0Ljc2IDAtMjYuNzgtMTIuMDYtMjYuNzgtMjYuOS0uMDItMTQuODEgMTEuOTctMjYuODQgMjYuNzgtMjYuODZoLjI0YzE0LjgxLjAyIDI2LjggMTIuMDUgMjYuNzggMjYuODZ2LjA0Yy4wMiAxNC44MS0xMS45NyAyNi44NC0yNi43OCAyNi44NiIgc3R5bGU9ImZpbGw6I2ZmN2IyOSIvPjwvc3ZnPg==");\r\n    --ovnICON-Info: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iSW5mbyIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cGF0aCBkPSJNMjUwIDBjNzcuNjkuNyAxNDQgMjAuMTkgMTg2LjU1IDYzLjQ1QzQ3OS44MSAxMDUuOTkgNDk5LjMgMTcyLjMxIDUwMCAyNTBjLS43IDc3LjY5LTIwLjE5IDE0NC02My40NSAxODYuNTVDMzk0IDQ3OS44MSAzMjcuNjkgNDk5LjMgMjUwIDUwMGMtNzcuNjktLjctMTQ0LTIwLjE5LTE4Ni41NS02My40NUMyMC4xOSAzOTQgLjcgMzI3LjY5IDAgMjUwYy43LTc3LjY5IDIwLjE5LTE0NCA2My40NS0xODYuNTVDMTA2IDIwLjE5IDE3Mi4zMS43IDI1MCAwIiBmaWxsPSIjM2Q5NmE2Ii8+PHBhdGggZD0iTTI0Ny4wMDggMTA5LjIxMmMxNi4xMjggMCAyOS4xOTYgMTMuMDY4IDI5LjE5NiAyOS4xOTZzLTEzLjA2OCAyOS4xOTYtMjkuMTk2IDI5LjE5Ni0yOS4xOTYtMTMuMDY4LTI5LjE5Ni0yOS4xOTYgMTMuMDY4LTI5LjE5NiAyOS4xOTYtMjkuMTk2bTQ0LjcxMiAyMzIuMjk2aC0xNS40OFYyMDguNjhjMC0xMy4wNTYtMTAuNTg0LTIzLjY0LTIzLjY0LTIzLjY0aC0yMi4zNTZjLTEzLjA1NiAwLTIzLjY0IDEwLjU4NC0yMy42NCAyMy42NHM5LjkgMjIuOTMyIDIyLjM1NiAyMy42MDR2MTA5LjIyNGgtMTUuNDhjLTEzLjA1NiAwLTIzLjY0IDEwLjU4NC0yMy42NCAyMy42NHMxMC41ODQgMjMuNjQgMjMuNjQgMjMuNjRoNzguMjI4YzEzLjA1NiAwIDIzLjY0LTEwLjU4NCAyMy42NC0yMy42NHMtMTAuNTg0LTIzLjY0LTIzLjY0LTIzLjY0WiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjgiLz48L3N2Zz4=");\r\n    --ovnICON-Safety: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iU2FmZXR5IiB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPgogIDxwYXRoIGQ9Ik0yNTAgMGM3Ny42OS43IDE0NCAyMC4xOSAxODYuNTUgNjMuNDVDNDc5LjgxIDEwNS45OSA0OTkuMyAxNzIuMzEgNTAwIDI1MGMtLjcgNzcuNjktMjAuMTkgMTQ0LTYzLjQ1IDE4Ni41NUMzOTQgNDc5LjgxIDMyNy42OSA0OTkuMyAyNTAgNTAwYy03Ny42OS0uNy0xNDQtMjAuMTktMTg2LjU1LTYzLjQ1QzIwLjE5IDM5NCAuNyAzMjcuNjkgMCAyNTBjLjctNzcuNjkgMjAuMTktMTQ0IDYzLjQ1LTE4Ni41NUMxMDYgMjAuMTkgMTcyLjMxLjcgMjUwIDAiIGZpbGw9IiMzZDk2YTYiLz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSBzY2FsZSgxLjMpIHRyYW5zbGF0ZSgtMjUwIC0yNTApIj4KICA8cGF0aCBkPSJtMzMyLjY2IDE2NC4zOS03My41My0yMS43NWgtLjAzYTMyLjI0IDMyLjI0IDAgMCAwLTE4LjExIDBoLS4wM2wtNzMuNjIgMjEuNzZjLTguNTQgMi41MS0xNC41MSAxMC40Ny0xNC41MSAxOS4zOHY0NC40OWMwIDI4LjM2IDguNTkgNTUuNjMgMjQuODUgNzguODcgMTYuMjMgMjMuMTkgMzguODQgNDAuNTkgNjUuNCA1MC4zMmEyMC4yIDIwLjIgMCAwIDAgMTMuODggMGMyNi41NS05LjczIDQ5LjE2LTI3LjEzIDY1LjM4LTUwLjMyIDE2LjI1LTIzLjIzIDI0Ljg0LTUwLjUgMjQuODQtNzguODV2LTQ0LjUxYzAtOC45MS01Ljk2LTE2Ljg3LTE0LjUxLTE5LjM4Wm0tMTkuNTkgNTcuODgtNjMuMjggNjMuMjhjLTIuMDYgMi4wNi00Ljc2IDMuMDktNy40NiAzLjA5cy01LjQtMS4wMy03LjQ2LTMuMDlsLTM2LjQ2LTM2LjQ2Yy00LjEyLTQuMTItNC4xMi0xMC44IDAtMTQuOTEgNC4xMi00LjEyIDEwLjgtNC4xMiAxNC45MSAwbDI5LjAxIDI5LjAxIDU1LjgyLTU1LjgyYzQuMTItNC4xMiAxMC44LTQuMTIgMTQuOTEgMCA0LjEyIDQuMTIgNC4xMiAxMC44IDAgMTQuOTFaIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuOCIvPgogIDwvZz4KPC9zdmc+Cg==");\r\n    --ovnICON-Transition: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iVHJhbnNpdGlvbiIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj4KICA8cGF0aCBkPSJNMjUwIDBjNzcuNjkuNyAxNDQgMjAuMTkgMTg2LjU1IDYzLjQ1QzQ3OS44MSAxMDUuOTkgNDk5LjMgMTcyLjMxIDUwMCAyNTBjLS43IDc3LjY5LTIwLjE5IDE0NC02My40NSAxODYuNTVDMzk0IDQ3OS44MSAzMjcuNjkgNDk5LjMgMjUwIDUwMGMtNzcuNjktLjctMTQ0LTIwLjE5LTE4Ni41NS02My40NUMyMC4xOSAzOTQgLjcgMzI3LjY5IDAgMjUwYy43LTc3LjY5IDIwLjE5LTE0NCA2My40NS0xODYuNTVDMTA2IDIwLjE5IDE3Mi4zMS43IDI1MCAwIiBmaWxsPSIjNzM3ZGY0Ii8+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwIDI1MCkgc2NhbGUoMS4zKSB0cmFuc2xhdGUoLTI1MCAtMjUwKSI+CiAgICA8cGF0aCBkPSJNMjUwIDE0Ni42M2MyMi4yOSAwIDQzLjUgNi45OCA2MS4zNyAyMC4xOCAzLjExLTYuOTggMTAuMS0xMS44NCAxOC4yMy0xMS44NCAxMS4wMiAwIDE5Ljk1IDguOTMgMTkuOTUgMTkuOTV2NTAuMDVjMCA5Ljg1LTcuMTkgMTguMjItMTYuOTIgMTkuNzItOS43MyAxLjQ5LTE5LjEtNC4zNC0yMi4wNS0xMy43NC04LjM1LTI2LjU3LTMyLjY5LTQ0LjQzLTYwLjU3LTQ0LjQzcy01Mi4yMyAxNy44NS02MC41NyA0NC40M2MtMy4zIDEwLjUxLTE0LjUgMTYuMzUtMjUuMDEgMTMuMDVzLTE2LjM1LTE0LjUtMTMuMDUtMjUuMDFjNi41NS0yMC44NCAxOS4zLTM4Ljc5IDM2Ljg5LTUxLjkgMTcuOTUtMTMuMzkgMzkuMy0yMC40NiA2MS43NS0yMC40NlptNzkuNiAxMDguNDVjMS45OCAwIDMuOTkuMyA1Ljk4LjkyIDEwLjUxIDMuMyAxNi4zNSAxNC41IDEzLjA1IDI1LjAxLTYuNTUgMjAuODQtMTkuMyAzOC43OS0zNi44OSA1MS45LTE3Ljk1IDEzLjM5LTM5LjMgMjAuNDYtNjEuNzUgMjAuNDZzLTQzLjUtNi45OC02MS4zNy0yMC4xOGMtMy4xMSA2Ljk4LTEwLjEgMTEuODQtMTguMjMgMTEuODQtMTEuMDIgMC0xOS45NS04LjkzLTE5Ljk1LTE5Ljk1di01MC4wNWMwLTkuODUgNy4xOS0xOC4yMiAxNi45Mi0xOS43MiA5Ljc0LTEuNDkgMTkuMSA0LjM0IDIyLjA1IDEzLjc0IDguMzUgMjYuNTcgMzIuNjkgNDQuNDMgNjAuNTcgNDQuNDNzNTIuMjMtMTcuODUgNjAuNTctNDQuNDNjMi42OC04LjUyIDEwLjU0LTEzLjk3IDE5LjAyLTEzLjk3WiIgZmlsbD0iI2Y1ZjRmZiIgb3BhY2l0eT0iLjgiLz4KICA8L2c+Cjwvc3ZnPgo=");\r\n    --ovnICON-VideoPlay: url("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9InZpZGVvUGxheSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPjxwYXRoIGQ9Ik0yNTAgMGM3Ny42OS43IDE0NCAyMC4xOSAxODYuNTUgNjMuNDVDNDc5LjgxIDEwNS45OSA0OTkuMyAxNzIuMzEgNTAwIDI1MGMtLjcgNzcuNjktMjAuMTkgMTQ0LTYzLjQ1IDE4Ni41NUMzOTQgNDc5LjgxIDMyNy42OSA0OTkuMyAyNTAgNTAwYy03Ny42OS0uNy0xNDQtMjAuMTktMTg2LjU1LTYzLjQ1QzIwLjE5IDM5NCAuNyAzMjcuNjkgMCAyNTBjLjctNzcuNjkgMjAuMTktMTQ0IDYzLjQ1LTE4Ni41NUMxMDYgMjAuMTkgMTcyLjMxLjcgMjUwIDAiIGZpbGw9IiM1MzVkZjciLz48cGF0aCBkPSJNMTkwLjk3IDE3OC4zMmMzLjE5LTIxLjY5IDE4LjgzLTM1LjAxIDM1LjczLTI0LjE1IDI5LjkxIDE5LjAyIDY0LjkyIDQ3LjI4IDEwMC4xIDcxLjg2IDIwLjU3IDE0LjQxIDIwLjU3IDMzLjU0IDAgNDcuOTUtMzUuMTggMjQuNTgtNzAuMTkgNTIuODMtMTAwLjEgNzEuODYtMTYuOTEgMTAuODYtMzIuNTQtMi40Ny0zNS43My0yNC4xNWE1ODYuNyA1ODYuNyAwIDAgMSAwLTE0My4zNiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjgiLz48L3N2Zz4=");\r\n    --ovnICON-VideoStop: url("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9InZpZGVvU3RvcCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPjxwYXRoIGQ9Ik0yNTAgMGM3Ny42OS43IDE0NCAyMC4xOSAxODYuNTUgNjMuNDVDNDc5LjgxIDEwNS45OSA0OTkuMyAxNzIuMzEgNTAwIDI1MGMtLjcgNzcuNjktMjAuMTkgMTQ0LTYzLjQ1IDE4Ni41NUMzOTQgNDc5LjgxIDMyNy42OSA0OTkuMyAyNTAgNTAwYy03Ny42OS0uNy0xNDQtMjAuMTktMTg2LjU1LTYzLjQ1QzIwLjE5IDM5NCAuNyAzMjcuNjkgMCAyNTBjLjctNzcuNjkgMjAuMTktMTQ0IDYzLjQ1LTE4Ni41NUMxMDYgMjAuMTkgMTcyLjMxLjcgMjUwIDAiIGZpbGw9IiNmZjZiNmIiLz48cGF0aCBkPSJNMjQyLjMxIDM0Ni4xOGMtNTguOTkgMC04OC40OC0yOS40OS04OC40OC04OC40OHYtMTUuMzljMC01OC45OSAyOS40OS04OC40OCA4OC40OC04OC40OGgxNS4zOWM1OC45OSAwIDg4LjQ4IDI5LjQ5IDg4LjQ4IDg4LjQ4djE1LjM5YzAgNTguOTktMjkuNDkgODguNDgtODguNDggODguNDh6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuOCIvPjwvc3ZnPg==");\r\n    \r\n}\r\n\r\n', '\r\n\r\n:where(\r\n    #ovnDOM,\r\n    #ovnDOM *,\r\n    #ovnDOM *::before,\r\n    #ovnDOM *::after\r\n) {\r\n    \r\n    appearance: auto;\r\n    list-style: none;\r\n    \r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: none;\r\n    \r\n    font: inherit;\r\n    color: inherit;\r\n    text-decoration: none;\r\n    text-shadow: none;\r\n    text-transform: none;\r\n    word-spacing: normal;\r\n    vertical-align: baseline;\r\n    letter-spacing: normal;\r\n    white-space: normal;\r\n    word-break: normal;\r\n    writing-mode: horizontal-tb;\r\n    \r\n    filter: none;\r\n    backdrop-filter: none;\r\n    animation: none;\r\n    transition: none;\r\n    \r\n}\r\n\r\n:where(#ovnDOM) {\r\n    \r\n    all: initial;\r\n    pointer-events: none;\r\n    \r\n    font-family: var(--ovnBaseFont);\r\n    font-size: var(--ovnBaseSize);\r\n    color: var(--ovnBase05HEX);\r\n    \r\n    p, pre { line-height: 2; }\r\n    label { margin: 0; padding: 0; }\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n    @keyframes ovnLoader {\r\n        000% { left: -10%; width: 10%; }\r\n        020% { left: 010%; width: 30%; }\r\n        040% { left: 040%; width: 50%; }\r\n        060% { left: 070%; width: 30%; }\r\n        100% { left: 100%; width: 10%; }\r\n    }\r\n    @keyframes ovnSlideTop {\r\n        000% { transform: translate(-50%, -150%) scale(0.90); opacity: 0; }\r\n        015% { transform: translate(-50%, 010px) scale(1.05); opacity: 1; }\r\n        030% { transform: translate(-50%, 000px) scale(1.00); opacity: 1; }\r\n        080% { transform: translate(-50%, 000px) scale(1.00); opacity: 1; }\r\n        100% { transform: translate(-50%, -050%) scale(0.95); opacity: 0; }\r\n    }\r\n    @keyframes ovnSlideLeft {\r\n        000% { transform: translate(-200%, 0) scale(0.90); opacity: 0; }\r\n        020% { transform: translate(010px, 0) scale(1.02); opacity: 1; }\r\n        030% { transform: translate(000px, 0) scale(1.00); opacity: 1; }\r\n        085% { transform: translate(000px, 0) scale(1.00); opacity: 1; }\r\n        100% { transform: translate(-100%, 0) scale(0.95); opacity: 0; }\r\n    }\r\n    @keyframes ovnZoomIn {\r\n        000% { transform: scale(0.00); opacity: 0; }\r\n        020% { transform: scale(0.40); opacity: 0.5; }\r\n        030% { transform: scale(0.80); opacity: 1.0; }\r\n        085% { transform: scale(1.03); opacity: 1.0; }\r\n        100% { transform: scale(1.00); opacity: 1.0; }\r\n    }\r\n    \r\n    \r\n\r\n\r\n    #ovnLoaderBar {\r\n        \r\n        --ovnX: 2px;\r\n        \r\n        opacity: .92;\r\n        z-index: var(--ovnPriority09);\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        width: 0%;\r\n        height: var(--ovnX);\r\n        font-size: var(--ovnX);\r\n        \r\n        background: linear-gradient(\r\n            90deg,\r\n            hsla(var(--ovnGlow05HSL), 1),\r\n            hsla(var(--ovnGlow05HSL), 1),\r\n            hsla(var(--ovnGlow03HSL), 1));\r\n        box-shadow:\r\n            0 2px 05px 0px hsla(var(--ovnGlow05HSL), .6),\r\n            0 2px 15px 0px hsla(var(--ovnGlow05HSL), .6),\r\n            0 2px 25px 2px hsla(var(--ovnGlow03HSL), .6);\r\n            \r\n        border-radius: 100vmax;\r\n        will-change: left, width;\r\n        transition: width .4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity .26s ease-out;\r\n        \r\n    }\r\n    #ovnLoaderBar[data-state="loading"] {\r\n        animation: ovnLoader 2.4s infinite cubic-bezier(0.4, 0.0, 0.6, 1);\r\n    }\r\n    \r\n    \r\n\r\n\r\n    [data-ovn-theme="light"] {\r\n        --ovnGallopTrail: hsla(var(--ovnBase02HSL), .26);\r\n    }\r\n    \r\n    [data-ovn-theme="dark"] {\r\n        --ovnGallopTrail: hsla(var(--ovnDarkHSL), .52);\r\n    }\r\n    \r\n    \r\n\r\n\r\n    .ovnPanelBase {\r\n        \r\n        --ovnGap: 12px;\r\n        --ovnXXX: 20px;\r\n        \r\n        pointer-events: auto;\r\n        will-change: opacity, transform;\r\n        padding: var(--ovnXXX) 0;\r\n        border: var(--ovnOftenPanelBorderBase);\r\n        font-family: var(--ovnBaseFont);\r\n        color: var(--ovnBase05HEX);\r\n        background: hsla(var(--ovnBase00HSL-H), 60%, 6%, .8); \r\n        box-shadow: var(--ovnSurfaceShadow) hsla(var(--ovnAccentCSD), .8);\r\n        border-radius: var(--ovnSurfaceRadius);\r\n        backdrop-filter: var(--ovnPanelFilter);\r\n        transition: all .526s var(--ovnTransitionElastic), opacity .26s ease;\r\n        \r\n        &.ovnShow { opacity: 1; transform: translate(0, -50%); }\r\n        &.ovnHide { opacity: 0; transform: translate(120%, -50%); }\r\n        \r\n    }\r\n    \r\n    .ovnFixed {\r\n        position: fixed;\r\n        top: 50%;\r\n        right: var(--ovnSpaceAxialX);\r\n        transform: translate(120%, -50%);\r\n    }\r\n    \r\n    \r\n    \r\n        #ovnOptionsPanel {\r\n            \r\n            --ovnHeightHead: 35px;\r\n            --ovnHeightRow: 32px;\r\n            --ovnRowPadding: 15px;\r\n            \r\n        }\r\n        \r\n        .ovnOptionBase {\r\n            \r\n            z-index: var(--ovnPriority09);\r\n            overflow: visible;\r\n            display: flex;\r\n            flex-direction: column;\r\n            width: calc(260px + 40px);\r\n            max-height: 80vh;\r\n            \r\n            h2 {\r\n                padding: calc(var(--ovnGap) / 2) 0 calc(var(--ovnGap) / 2 + 5px) 0;\r\n                color: var(--ovnGlow04HEX);\r\n                font-size: 1.7em;\r\n                font-weight: var(--ovnTitleWeight);\r\n                text-align: center;\r\n                text-shadow: 0 0 5px var(--ovnGlow04HEX);\r\n            }\r\n            span { user-select: none; }\r\n            \r\n        }\r\n        \r\n            .ovnPanelBody {\r\n                display: flex;\r\n                flex: 1 1 auto;\r\n                flex-direction: column;\r\n                gap: var(--ovnGap);\r\n                padding: var(--ovnXXX) 0;\r\n                overflow-y: auto;\r\n                overflow-x: hidden;\r\n                scrollbar-width: none;\r\n                max-height: 80vh;\r\n            }\r\n            \r\n            .ovnButton {\r\n                display: flex;\r\n                flex-direction: column;\r\n                gap: 10px;\r\n                padding: 0 var(--ovnXXX);\r\n            }\r\n            \r\n                .ovnGroupBase {\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                    gap: 0;\r\n                    width: 100%;\r\n                }\r\n                \r\n                .ovnGroupBase:not(.Sub, :has(.ovnGroupBase.Sub)),\r\n                .ovnGroupBase:has(.Sub) > :is(.ovnGroupHead, .ovnGroupBody) {\r\n                    padding: 0 var(--ovnXXX);\r\n                }\r\n                \r\n                    .ovnGroupBody > :first-child {\r\n                        margin: calc(var(--ovnGap) / 2) 0 0 calc(var(--ovnGap) - 2px);\r\n                    }\r\n                    \r\n                    .ovnGroupBase:not(.Sub) > .ovnGroupHead {\r\n                        color: hsla(var(--ovnBase06HSL), .6);\r\n                        filter: drop-shadow(0 10px 20px hsla(var(--ovnBase00HSL), .4));\r\n                    }\r\n                    :first-child.ovnGroupBase:not(.Sub) > .ovnGroupHead {\r\n                        filter: drop-shadow(0 10px 14px hsla(var(--ovnBase00HSL), .26));\r\n                    }\r\n                    \r\n                    .ovnGroupBase.Sub > .ovnGroupHead, .ovnGroupBase > .ovnGroupBody {\r\n                        color: hsla(var(--ovnBase05HSL), .9);\r\n                    }\r\n                    \r\n                    .ovnGroupHead {\r\n                        display: flex;\r\n                        align-items: center;\r\n                        width: 100%;\r\n                    }\r\n                    .ovnGroupBody {\r\n                        will-change: height;\r\n                        display: flex;\r\n                        flex-direction: column;\r\n                        gap: calc(var(--ovnGap) / 2 - 1px);\r\n                        opacity: 1;\r\n                        overflow: hidden;\r\n                        height: auto;\r\n                        transition: height .526s var(--ovnTransitionSmooth), opacity .26s ease;\r\n                    }\r\n                    .ovnGroupBody.ovnOpen { overflow: hidden; }\r\n                    .ovnGroupBody.ovnClose { overflow: hidden; opacity: 0; height: 0 !important; }\r\n                    \r\n                        .ovnHeaderRow {\r\n                            cursor: pointer;\r\n                            padding: 5px var(--ovnRowPadding) 5px 5px;\r\n                            height: var(--ovnHeightHead);\r\n                            display: flex;\r\n                            flex: 1 1 auto;\r\n                            align-items: center;\r\n                            justify-content: flex-start;\r\n                            font-size: .85em;\r\n                            font-weight: var(--ovnTitleWeight);\r\n                            border-radius: 0 var(--ovnUIRadius) var(--ovnUIRadius) 0;\r\n                        }\r\n                        .ovnBodyRow {\r\n                            cursor: pointer;\r\n                            display: flex;\r\n                            justify-content: space-between;\r\n                            align-items: center;\r\n                            padding: 9px var(--ovnRowPadding);\r\n                            margin: 0 0 0 calc(var(--ovnGap) - 2px);\r\n                            border-radius: var(--ovnUIRadius);\r\n                        }\r\n                        .ovnBodyRow > :last-child { margin: 0 0 calc(var(--ovnGap) / 4) calc(var(--ovnGap) - 2px); }\r\n                        \r\n                        .ovnFoldBox {\r\n                            cursor: pointer;\r\n                            flex: 0 0 auto;\r\n                            width: calc(var(--ovnHeightHead) - 5px);\r\n                            height: var(--ovnHeightHead);\r\n                            font-size: 18px;\r\n                            user-select: none;\r\n                            transition: transform 0.4s ease;\r\n                            display: flex;\r\n                            align-items: center;\r\n                            justify-content: center;\r\n                            border-radius: var(--ovnUIRadius) 0 0 var(--ovnUIRadius);\r\n                        }\r\n                        \r\n                        .ovnHeaderRow, .ovnFoldBox {\r\n                            background: hsla(var(--ovnBase00HSL), .6);\r\n                            transition: background-color .26s;\r\n                        }\r\n                        .ovnHeaderRow:hover, .ovnFoldBox:hover { background: hsla(var(--ovnBase00HSL), .8); }\r\n                        \r\n                            .ovnArrow {\r\n                                margin: -1px -4px 0 0;\r\n                                font-size: 16px;\r\n                                transform: rotate(0deg);\r\n                                transition: transform .4s ease;\r\n                            }\r\n                            .ovnArrow.ovnRotated { transform: rotate(90deg); }\r\n                            \r\n                    \r\n                    \r\n                        .ovnBodyRow, .ovnGroupBase.Sub .ovnHeaderRow {\r\n                            font-size: .82em;\r\n                            font-weight: normal;\r\n                        }\r\n                        .ovnGroupBody > .ovnGroupBase.Sub:first-child { margin-left: 0; }\r\n                        \r\n                        .ovnBodyRow, .ovnGroupBase.Sub .ovnHeaderRow, .ovnGroupBase.Sub .ovnFoldBox {\r\n                            height: var(--ovnHeightRow);\r\n                            background: hsla(var(--ovnBase00HSL), .4);\r\n                            transition: background-color .26s, opacity 0.26s;\r\n                        }\r\n                        .ovnBodyRow:hover, .ovnGroupBase.Sub .ovnHeaderRow:hover {\r\n                            background: hsla(var(--ovnBase00HSL), .8);\r\n                        }\r\n                        \r\n                        .ovnGroupBase.Sub {\r\n                            \r\n                            .ovnGroupBody { margin: 0 0 0 calc(var(--ovnGap) - 2px); }\r\n                            \r\n                            .ovnFoldBox {\r\n                                opacity: .4;\r\n                                width: calc(var(--ovnHeightRow) - 5px);\r\n                                color: hsla(var(--ovnBase00HSL), .8);\r\n                                background: transparent;\r\n                                box-shadow: none;\r\n                                margin: 0 0 0 calc(var(--ovnGap) - 28px);\r\n                            }\r\n                            .ovnHeaderRow { padding: 9px var(--ovnRowPadding); }\r\n                            .ovnHeaderRow, .ovnFoldBox {\r\n                                border-radius: var(--ovnUIRadius);\r\n                                filter: drop-shadow(0 10px 20px hsla(var(--ovnBase00HSL), .2));\r\n                            }\r\n                            .ovnBodyRow { color: hsla(var(--ovnBase05HSL), .8); }\r\n                            \r\n                        }\r\n                        \r\n                        \r\n    \r\n    \r\n        #ovnDebugOverlay {\r\n            z-index: var(--ovnPriority09);\r\n            position: fixed;\r\n            inset: 0;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            background: hsla(var(--ovnBase00HSL), .4);\r\n        }\r\n        #ovnDebugPanel {\r\n            --ovnGap: 10px;\r\n            --ovnHeightRow: 45px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            width: 40vw;\r\n            height: auto;\r\n            max-height: 70vh;\r\n            padding: calc(var(--ovnXXX) + var(--ovnGap));\r\n            color: hsla(var(--ovnBase05HSL), 1);\r\n        }\r\n        \r\n        .ovnDebugGrid {\r\n            overflow-x: auto;\r\n            scrollbar-width: none;\r\n            display: flex;\r\n            justify-content: space-around;\r\n            gap: calc(var(--ovnGap) * 2);\r\n            margin-top: calc(var(--ovnGap) * -1);\r\n            margin-bottom: calc(var(--ovnGap) * 2.2);\r\n        }\r\n        .ovnDebugBottom {\r\n            display: grid;\r\n            grid-template-columns: 1fr 2fr;\r\n            grid-template-rows: 1fr 60px;\r\n            gap: var(--ovnGap);\r\n        }\r\n            .ovnObserver, .ovnDevMode, .ovnDebugConsole {\r\n                overflow: auto;\r\n                scrollbar-width: none;\r\n                white-space: pre;\r\n                padding: calc(var(--ovnXXX) / 2) var(--ovnXXX);\r\n                margin: 0;\r\n                max-height: 20vh;\r\n                font-family: var(--ovnCodeFont);\r\n                font-size: 12px;\r\n                line-height: 2;\r\n                border-radius: var(--ovnPanelRadius);\r\n                background: hsla(var(--ovnBase00HSL), .6);\r\n            }\r\n            .ovnDebugConsole { grid-column: 2; grid-row: 1 / 3; }\r\n            .ovnDevMode {\r\n                display: flex;\r\n                justify-content: center;\r\n                align-items: center;\r\n                color: hsla(var(--ovnBase05HSL), .5);\r\n                font-size: 1em;\r\n                font-weight: bold;\r\n            }\r\n            \r\n            .ovnDebugCol {\r\n                overflow-x: auto;\r\n                scrollbar-width: none;\r\n                width: 220px;\r\n                max-height: calc(var(--ovnHeightRow) * 5 + 59px + 20px);  \r\n                display: flex;\r\n                flex-direction: column;\r\n                gap: calc(var(--ovnGap) / 1.5);\r\n            }\r\n            \r\n                .ovnDebugGroupTitle {\r\n                    padding: calc(var(--ovnGap) * 1.2) 0;\r\n                    color: var(--ovnGlow04HEX);\r\n                    font-size: 1.3em;\r\n                    font-weight: var(--ovnTitleWeight);\r\n                    text-align: center;\r\n                    text-shadow: 0 0 .3em var(--ovnGlow04HEX);\r\n                }\r\n                .ovnDebugItem {\r\n                    position: relative;\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                    gap: calc(var(--ovnGap) / 2);\r\n                    padding: calc(var(--ovnGap) / .92) calc(var(--ovnGap) * 1.2);\r\n                    height: var(--ovnHeightRow);\r\n                    border-radius: var(--ovnUIRadius);\r\n                    background: hsla(var(--ovnBase00HSL), .4);\r\n                    transition: background 0.2s ease;\r\n                }\r\n                .ovnDebugItem:hover {\r\n                    background: hsla(var(--ovnBase00HSL), .8);\r\n                }\r\n                \r\n                    .ovnDebugModkey {\r\n                        width: max-content;\r\n                        padding-bottom: .2em;\r\n                        margin-left: -.092em;\r\n                        font-size: .85em;\r\n                        font-weight: 400;\r\n                        line-height: 1em;\r\n                        word-break: break-word;\r\n                        color: hsla(var(--ovnBase05HSL), .8);\r\n                    }\r\n                    .ovnDebugStatus {\r\n                        position: absolute;\r\n                        top: 50%;\r\n                        right: var(--ovnGap);\r\n                        transform: translateY(-50%);\r\n                        font-weight: var(--ovnTitleWeight);\r\n                        font-size: .8em;\r\n                        text-align: right;\r\n                        letter-spacing: -.0126em;\r\n                    }\r\n                    .ovnDebugLine {\r\n                        \r\n                        display: flex;\r\n                        gap: 5px;\r\n                        \r\n                        .ovnDebugDot.ovnState[data-ovn-state] {\r\n                            width: 5px;\r\n                            height: 5px;\r\n                        }\r\n                        \r\n                    }\r\n                    \r\n                    \r\n\r\n\r\n    .ovnState {\r\n        \r\n        &:before, &:after { content: none !important; }\r\n        &[data-ovn-type="imp"] { color: var(--ovnGreen00HEX); }\r\n        &[data-ovn-type="sec"] { color: var(--ovnCyan00HEX); }\r\n        \r\n        &.ovnBack {\r\n            \r\n            &[data-ovn-state] {\r\n                cursor: pointer;\r\n                position: relative;\r\n                appearance: none;\r\n                width: .6em;\r\n                height: .6em;\r\n                margin: 0;\r\n                background: var(--ovnBase04HEX);\r\n                border: none;\r\n                border-radius: 50%;\r\n                transition: background-color .26s ease;\r\n                box-shadow: 0 0 2px hsla(0, 0%, 0%, .3);\r\n            }\r\n            &[data-ovn-state="success"] {\r\n                background: var(--ovnGreen00HEX);\r\n                box-shadow: 0 0 10px var(--ovnGreen00HEX);\r\n            }\r\n            &[data-ovn-state="warn"] {\r\n                background: var(--ovnOrange00HEX);\r\n                box-shadow: 0 0 10px var(--ovnOrange00HEX);\r\n            }\r\n            &[data-ovn-state="error"] {\r\n                background: var(--ovnRed00HEX);\r\n                box-shadow: 0 0 10px var(--ovnRed00HEX);\r\n            }\r\n            \r\n        }\r\n        \r\n        &.ovnFore {\r\n            \r\n            &[data-ovn-state="success"] {\r\n                color: var(--ovnGreen00HEX);\r\n            }\r\n            &[data-ovn-state="warn"] {\r\n                color: var(--ovnOrange00HEX);\r\n            }\r\n            &[data-ovn-state="error"] {\r\n                color: var(--ovnRed00HEX);\r\n            }\r\n            \r\n        }\r\n        \r\n    }\r\n    \r\n\r\n\r\n    .ovnButtonBase {\r\n        cursor: pointer;\r\n        user-select: none;\r\n        border: var(--ovnUIBorder) var(--ovnAccentCBD);\r\n        font-size: 1em;\r\n        font-weight: var(--ovnTitleWeight);\r\n        text-align: center;\r\n        color: var(--ovnBase00HEX);\r\n        background: var(--ovnAccentHEX);\r\n        box-shadow: var(--ovnUIShadow) var(--ovnAccentCSD);\r\n        border-radius: var(--ovnPanelRadius);\r\n        transition: transform .26s var(--ovnTransitionSoft);\r\n    }\r\n    .ovnButtonBase:hover { transform: var(--ovnSurfaceZoomIn); }\r\n    .ovnButtonBase:first-of-type { margin-top: calc(var(--ovnGap) - 2px); }\r\n    \r\n    .ovnButtonBase.fill { cursor: pointer; }\r\n    .ovnButtonBase.outline { cursor: pointer; }\r\n    .ovnButtonBase.text { cursor: pointer; }\r\n    .ovnButtonBase.ICON { cursor: pointer; }\r\n    \r\n    .ovnButtonBase.ovnApply {\r\n        border: none;\r\n        background: linear-gradient( 90deg, var(--ovnGreen01HEX), var(--ovnBlue01HEX) );\r\n        box-shadow:\r\n            inset 0 0 12px #FFFFFF50,\r\n            inset 0 0 02px #4DE0E0FF,\r\n            inset 0 0 20px hsla(var(--ovnGlow06HSL), .6),\r\n            0 0 10px hsla(var(--ovnGlow04HSL), .4);\r\n    }\r\n    .ovnButtonBase.ovnReset {\r\n        border: none;\r\n        background: linear-gradient( 90deg, var(--ovnGreen01HEX), var(--ovnBlue01HEX) );\r\n        box-shadow:\r\n            inset 0 0 12px #FFFFFF50,\r\n            inset 0 0 02px #4DE0E0FF,\r\n            inset 0 0 20px hsla(var(--ovnGlow06HSL), .6),\r\n            0 0 10px hsla(var(--ovnGlow04HSL), .4);\r\n    }\r\n    .ovnButtonFixed {\r\n        padding: 5px 10px;\r\n        width: var(--ovnButtonWidth);\r\n        height: var(--ovnButtonHeight);\r\n    }\r\n    .ovnButtonAdapt {\r\n        padding: 10px 0;\r\n        width: 100%;\r\n    }\r\n    \r\n    \r\n\r\n\r\n    .ovnTips {\r\n        \r\n        --gap: .6em;\r\n        \r\n        z-index: var(--ovnPriority09);\r\n        position: fixed;\r\n        display: flex;\r\n        align-items: center;\r\n        gap: var(--gap);\r\n        padding: .6em 1.26em;\r\n        border: .1em solid hsla(var(--ovnBase09HSL), .126);\r\n        \r\n        text-align: justify;\r\n        font-size: 14px;\r\n        font-weight: 526;\r\n        background: hsla(var(--ovnBase02HSL), .926);\r\n        color: var(--ovnGlow04HEX);\r\n        box-shadow:\r\n            var(--ovnTipsShadow-M) hsla(var(--ovnAccentHSL), .120),\r\n            var(--ovnTipsShadow-L) hsla(var(--ovnAccentHSL), .092);\r\n        border-radius: .92em;\r\n        transition: var(--ovnOftenTransition);\r\n        \r\n    }\r\n    .ovnTips.fade { opacity: 0; transition: opacity .26s ease; }\r\n    .ovnTips.top {\r\n        top: 2em;\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n        animation: ovnSlideTop 2s cubic-bezier(.25, .8, .25, 1) forwards;\r\n    }\r\n    .ovnTips.left {\r\n        top: 2.26em;\r\n        left: 2em;\r\n        animation: ovnSlideLeft 2s cubic-bezier(.25, 1.4, .5, 1) forwards;\r\n    }\r\n    .ovnTips.inside {\r\n        position: absolute;\r\n        top: 2em;\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n    }\r\n    .ovnTips.hover {\r\n        opacity: 0;\r\n        z-index: calc(var(--ovnPriority09) + 1);\r\n        pointer-events: none;\r\n        gap: 0;\r\n        border: var(--ovnUIBorder) hsla(var(--ovnAccentHSL), .2);\r\n        /* max-width: 260px; */\r\n        min-height: 12px;\r\n        font-size: 12px;\r\n        background: hsla(var(--ovnBase00HSL), .8);\r\n        box-shadow: var(--ovnUIShadow) hsla(var(--ovnBase00HSL), .4);\r\n        transition: opacity .26s ease;\r\n    }\r\n    .ovnTips.hover.show { opacity: 1; }\r\n    \r\n    \r\n    .ovnTips:has(::before) {\r\n        padding: var(--gap) calc(var(--gap) + var(--gap) / 1.5);\r\n    }\r\n    .ovnTips.remind::before, .ovnTips.correct::before, .ovnTips.warn::before, .ovnTips.error::before {\r\n        content: "";\r\n        display: inline-block;\r\n        width: 1em;\r\n        height: 1em;\r\n        background: center / contain no-repeat;\r\n    }\r\n    .ovnTips.remind::before { background-image: var(--ovnICON-Correct-Empty); }\r\n    .ovnTips.correct::before { background-image: var(--ovnICON-Correct-Empty); }\r\n    .ovnTips.warn::before { background-image: var(--ovnICON-Warn-Empty); }\r\n    .ovnTips.error::before { background-image: var(--ovnICON-Error-Empty); }\r\n    \r\n    .ovnTips.remind {\r\n        box-shadow:\r\n            var(--ovnTipsShadow-M) hsla(var(--ovnAccentHSL), .126),\r\n            var(--ovnTipsShadow-L) hsla(var(--ovnAccentHSL), .092);\r\n    }\r\n    .ovnTips.correct {\r\n        border-color: hsla(var(--ovnStateSuccessHSL), .26);\r\n        color: hsla(var(--ovnStateSuccessHSL), 1);\r\n        box-shadow:\r\n            var(--ovnTipsShadow-M) hsla(var(--ovnStateSuccessHSL), .126),\r\n            var(--ovnTipsShadow-L) hsla(var(--ovnStateSuccessHSL), .092);\r\n    }\r\n    .ovnTips.warn {\r\n        border-color: hsla(var(--ovnStateWarnHSL), .26);\r\n        color: hsla(var(--ovnStateWarnHSL), 1);\r\n        box-shadow:\r\n            var(--ovnTipsShadow-M) hsla(var(--ovnStateWarnHSL), .126),\r\n            var(--ovnTipsShadow-L) hsla(var(--ovnStateWarnHSL), .092);\r\n    }\r\n    .ovnTips.error {\r\n        border-color: hsla(var(--ovnStateErrorHSL), .26);\r\n        color: hsla(var(--ovnStateErrorHSL), 1);\r\n        box-shadow:\r\n            var(--ovnTipsShadow-M) hsla(var(--ovnStateErrorHSL), .126),\r\n            var(--ovnTipsShadow-L) hsla(var(--ovnStateErrorHSL), .092);\r\n    }\r\n    \r\n    \r\n\r\n\r\n    .ovnFocal {\r\n        \r\n        --height: 2px;\r\n        --time: .526s;\r\n        --offset: 0px;\r\n        --base: var(--ovnAccentHEX);\r\n        --radius: var(--ovnBaseRadius);\r\n        --bezier: var(--ovnTransitionSoft);\r\n        \r\n        position: relative;\r\n        text-decoration: none;\r\n        \r\n        &::after {\r\n            content: "";\r\n            position: absolute;\r\n            bottom: calc(var(--height) * -1 + var(--offset));\r\n            width: 100%; /*  width: max-content; */\r\n            height: var(--height);\r\n            background: var(--base);\r\n            border-radius: var(--radius);\r\n            transition: transform var(--time) var(--bezier);\r\n        }\r\n        \r\n        &.ovnCT::after {\r\n            left: 50%;\r\n            transform: translateX(-50%) scaleX(0);\r\n            transform-origin: center;\r\n        }\r\n        &.ovnCT:hover::after { transform: translateX(-50%) scaleX(1);}\r\n        \r\n        &.ovnLR::after {\r\n            left: 0;\r\n            transform: scaleX(0);\r\n            transform-origin: left;\r\n        }\r\n        &.ovnLR:hover::after { transform: scaleX(1); }\r\n        \r\n    }\r\n    \r\n    \r\n\r\n\r\n    .ovnGrid {\r\n        \r\n        --top: #FFF;\r\n        --centre: #FFF;\r\n        --bottom: #FFF;\r\n        --base: transparent;\r\n        \r\n        z-index: 1;\r\n        position: relative;\r\n        \r\n        &::after {\r\n            pointer-events: none;\r\n            z-index: -1;\r\n            content: "";\r\n            position: fixed;\r\n            inset: 0;\r\n            background-color: var(--base);\r\n            mask-image: linear-gradient(to bottom, var(--top), var(--centre), var(--bottom));\r\n        }\r\n        \r\n        &.ovnSolid::after {\r\n            \r\n            --line: 1px;\r\n            --sizeS: 20px;\r\n            --sizeL: 100px;\r\n            --lineS: var(--ovnGridS);\r\n            --lineL: var(--ovnGridL);\r\n            \r\n            background-image:\r\n                linear-gradient(00deg, var(--lineS) var(--line), transparent 0),\r\n                linear-gradient(90deg, var(--lineS) var(--line), transparent 0),\r\n                linear-gradient(00deg, var(--lineL) var(--line), transparent 0),\r\n                linear-gradient(90deg, var(--lineL) var(--line), transparent 0);\r\n            background-size: \r\n                var(--sizeS) var(--sizeS), var(--sizeS) var(--sizeS),\r\n                var(--sizeL) var(--sizeL), var(--sizeL) var(--sizeL);\r\n                \r\n        }\r\n        &.ovnDot::after {\r\n            \r\n            --size: 2px;\r\n            --gap: 20px;\r\n            --dot: var(--ovnGridD);\r\n            \r\n            background-image:\r\n                radial-gradient(circle, var(--dot) var(--size), transparent var(--size));\r\n            background-size: var(--gap) var(--gap);\r\n            background-repeat: repeat;\r\n            background-position: 0 0;\r\n            \r\n        }\r\n        \r\n    }\r\n    \r\n    \r\n\r\n\r\n    .ovnLink {\r\n        \r\n        position: relative !important;\r\n        text-decoration: none !important;\r\n        \r\n        &::before, &::after {\r\n            content: "" !important;\r\n            position: absolute !important;\r\n            top: calc(100% + 0px) !important;\r\n            left: 0 !important;\r\n            width: 100% !important;\r\n            border-bottom: dashed .0926em currentColor !important;\r\n        }\r\n        &:hover::before, &:hover::after { border-bottom-style: solid !important; }\r\n        \r\n    }\r\n    \r\n\r\n\r\n    .ovnTable {\r\n        \r\n        overflow: hidden !important;\r\n        border-collapse: collapse !important;\r\n        background: transparent !important;\r\n        box-shadow: \r\n            0 0 0 1px hsla(0, 0%, 5%, .02),\r\n            0 2px 10px hsla(0, 0%, 0%, .04),\r\n            0 10px 10px hsla(0, 0%, 0%, .02) !important;\r\n        border-radius: var(--ovnSurfaceRadius) !important;\r\n        \r\n        thead {\r\n            font-weight: var(--ovnTitleWeight) !important;\r\n            background: #FFF !important;\r\n        }\r\n        \r\n        th, td {\r\n            border-style: solid !important;\r\n            border-width: 0 0 1px 0 !important;\r\n            border-color: #F9F9F9 !important;\r\n            /* text-align: left !important; */\r\n        }\r\n        th { color: #4D4D4D !important;}\r\n        td { color: #444444 !important;}\r\n        \r\n        code {\r\n            padding: 2px 5px !important;\r\n            font-family: var(--ovnCodeFont) !important;\r\n            color: var(--ovnCodeColor) !important;\r\n            background: #F2F2F2 !important;\r\n            border-radius: var(--ovnBaseRadius) !important;\r\n        }\r\n        \r\n        tbody tr:last-child td { border-bottom: none !important;}\r\n        tbody tr:nth-of-type(odd) { background: #FBFBFB !important; }\r\n        tbody tr:hover { background: #F9F9F9 !important; }\r\n        \r\n        tr:first-child td:not(:first-child, :last-child) {\r\n            border-left: 1px solid #00000006 !important;\r\n            border-right: 1px solid #00000006 !important;\r\n        }\r\n        \r\n        th[style*="padding: 0px"], td:not([style*="padding"]) {\r\n            padding: 5px 10px !important;\r\n        }\r\n        \r\n    }\r\n    \r\n\r\n\r\n    .ovnCurrentRow::before {\r\n        content: "";\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 1.2%;\r\n        transform: translateY(-50%);\r\n        height: 1.2em;\r\n        width: .26rem;\r\n        background: var(--ovnGlow01HEX);\r\n        box-shadow: 4px 0 14px 1px hsla(var(--ovnGlow01HSL), .92);\r\n        border-radius: 1em;\r\n    }\r\n    \r\n    .ovnCardShadow {\r\n        box-shadow:\r\n            0 04px 06px -4px hsla(var(--ovnBase00HSL), .20),\r\n            0 10px 15px -2px hsla(var(--ovnBase00HSL), .04),\r\n            0 10px 20px -2px hsla(var(--ovnBase00HSL), .06);\r\n    }\r\n    \r\n    .ovnFadeInLoad {\r\n        opacity: 0;\r\n        transform: translateY(100px);\r\n        transition: opacity .5s var(--ovnTransitionSmooth), transform .9s var(--ovnTransitionSmooth);\r\n    }\r\n    .ovnFadeInLoad.ovnLoaded {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n    \r\n    ']].filter(Boolean).join('\n\n');
  const e = new (class {
    constructor() {
      ((this.styleContainer = null), (this.styleElement = null), (this.version = 0));
    }
    inject(n) {
      const e = n || r,
        t = () => {
          try {
            if (!document.body) return void requestAnimationFrame(() => t());
            let n = document.getElementById('ovnDOM');
            n || ((n = document.createElement('div')), (n.id = 'ovnDOM'), document.body.insertBefore(n, document.body.firstChild));
            let r = document.getElementById('ovnStyle');
            (r || ((r = document.createElement('div')), (r.id = 'ovnStyle'), n.insertBefore(r, n.firstChild)), (this.styleContainer = r));
            const o = this.styleContainer.querySelectorAll('style[data-ovn-style-global]');
            for (let n = 0; n < o.length; n++) o[n].remove();
            ((this.styleElement = document.createElement('style')), this.styleElement.setAttribute('data-ovn-style-global', ''), (this.styleElement.textContent = e), this.styleContainer.insertBefore(this.styleElement, this.styleContainer.firstChild), this.version++);
          } catch (n) {
            requestAnimationFrame(() => t());
          }
        };
      t();
    }
  })();
  e.inject();
  const t = document.documentElement;
  (t.classList.add('ovn'), n.apply('class', { html: t }), (window.OVN_CSS_INJECTOR = e));
  const o = (() => {
      function n(n) {
        const r = new Map();
        function e(r) {
          return `${n}:${r}`;
        }
        return {
          has: (n) => r.has(n),
          get(n, t) {
            if (r.has(n)) return r.get(n);
            const o = GM_getValue(e(n), t);
            return (void 0 !== o && r.set(n, o), o);
          },
          set(n, t) {
            (r.set(n, t), GM_setValue(e(n), t));
          },
          delete(n) {
            (r.delete(n), GM_deleteValue(e(n)));
          },
          clear() {
            r.clear();
          },
          keys: () => r.keys(),
        };
      }
      const r = ['prefs', 'hover', 'fold', 'visited', 'gallop'],
        e = new Set(r),
        t = Object.create(null);
      for (const e of r) t[e] = n(e);
      return {
        prefs: t.prefs,
        hover: t.hover,
        fold: t.fold,
        gallop: t.gallop,
        visited: t.visited,
        reset: function () {
          for (const n of GM_listValues()) {
            const r = n.split(':', 1)[0];
            e.has(r) && GM_deleteValue(n);
          }
          for (const n of r) t[n].clear();
        },
      };
    })(),
    a = (() => {
      let n = 0,
        r = null;
      const e = { regex: new Map(), match: new Map(), chain: new Map(), compiled: new Map() };
      function t(r, t) {
        const o = e[r];
        if (!o) return;
        const a = o.get(t);
        if (a) {
          if (a.version === n) return a.value;
          o.delete(t);
        }
      }
      function o(r, t, o) {
        const a = e[r];
        a && a.set(t, { value: o, version: n });
      }
      function a(n) {
        n ? e[n]?.clear() : Object.values(e).forEach((n) => n.clear());
      }
      return {
        get: t,
        set: o,
        compute: function (n, r, e) {
          const a = t(n, r);
          if (void 0 !== a) return a;
          const i = e();
          return (o(n, r, i), i);
        },
        clear: a,
        bump: function (e = 'unknown') {
          (n++, r?.startTrace?.('cache', 'cache.bump'), r?.okTrace?.('cache', 'cache.bump'), r?.enabled && r?.log?.('cache', 'CACHE_BUMP', 0, { version: n, reason: e }));
        },
        snapshot: function () {
          return { version: n };
        },
        restore: function (e) {
          e && ((n = e.version), a(), r?.okTrace?.('cache', 'restore', { version: n }));
        },
        setDebug: (n) => {
          r = n;
        },
      };
    })(),
    i = (() => {
      function n(n, r = !0) {
        const e = o.prefs.get(n, void 0);
        return void 0 === e ? r : !!e;
      }
      function r(r, e) {
        const t = !!e;
        return (n(r) === t || o.prefs.set(r, t), t);
      }
      return {
        get: n,
        set: r,
        toggle: function (e) {
          return r(e, !n(e));
        },
        group: function (r) {
          return n(r, !0);
        },
        chain: function (r) {
          return r.every((r) => n(r, !0));
        },
        snapshot: function () {
          return { cache: a.snapshot() };
        },
        restore: function (n) {
          n && a.restore(n.cache);
        },
      };
    })(),
    c = (() => {
      const n = new Map(),
        r = new Map(),
        e = new WeakMap();
      function t(n, t = { childList: !0, subtree: !0 }, o, a = {}) {
        if (!(n instanceof Node)) return null;
        const i = (function (n, e) {
          let t = r.get(n);
          t || ((t = new Map()), r.set(n, t));
          const o = (function (n) {
            return `${n.childList ? 1 : 0}_${n.subtree ? 1 : 0}_${n.attributes ? 1 : 0}_${n.characterData ? 1 : 0}`;
          })(e);
          if (t.has(o)) return t.get(o);
          const a = new Set();
          let i = null;
          const c = new MutationObserver((n, r) => {
            const e = () => {
              a.forEach((e) => {
                try {
                  e(n, r);
                } catch (n) {
                  document.documentElement.classList.add('ovnTips', 'error');
                }
              });
            };
            c._debounce > 0 ? (clearTimeout(i), (i = setTimeout(e, c._debounce))) : e();
          });
          return ((c._callbacks = a), (c._debounce = 0), c.observe(n, e), t.set(o, c), c);
        })(n, t);
        if (
          (i._callbacks.add(o),
          a.debounce && (i._debounce = Math.max(i._debounce, a.debounce)),
          (function (n, r) {
            (e.has(n) || e.set(n, new Set()), e.get(n).add(r));
          })(n, i),
          a.autoDisconnect || 'function' == typeof a.onceWhen)
        ) {
          const n = (r, e) => {
            ((a.autoDisconnect || ('function' == typeof a.onceWhen && a.onceWhen(r))) && i._callbacks.delete(n), o(r, e));
          };
          (i._callbacks.delete(o), i._callbacks.add(n));
        }
        return i;
      }
      function o(r) {
        const e = n.get(r);
        e && (e.disconnect(), n.delete(r));
      }
      return {
        observe: t,
        observeWithKey: function (r, e, a = { childList: !0, subtree: !0 }, i, c = {}) {
          if (!r || 'string' != typeof r) return null;
          n.has(r) && o(r);
          const s = t(e, a, i, c);
          return (n.set(r, s), s);
        },
        disconnect: function (n) {
          const t = e.get(n);
          t && (t.forEach((n) => n.disconnect()), e.delete(n), r.delete(n));
        },
        disconnectKey: o,
        disconnectAll: function () {
          (r.forEach((n) => n.forEach((n) => n.disconnect())), r.clear(), n.clear());
        },
        hasKey: function (r) {
          return n.has(r);
        },
        getActiveCount: function () {
          let e = 0;
          return (r.forEach((n) => (e += n.size)), { pooled: e, keyed: n.size });
        },
      };
    })(),
    s = (() => {
      const n = 'ovnDOM';
      function r(r) {
        let e = null,
          t = null,
          o = null,
          a = null,
          i = null;
        const s = `${r}-DOM-Classify`;
        function l(n, r) {
          const e = 'style' === r ? 'STYLE' : 'SCRIPT',
            t = 'style' === r ? 'data-ovn-style' : 'data-ovn-script';
          return (
            n.tagName === e ||
            (function (n, r) {
              const e = n.attributes;
              for (let n = 0; n < e.length; n++) if (e[n].name.startsWith(r)) return !0;
              return !1;
            })(n, t)
          );
        }
        function d(n, r) {
          return n.parentNode !== r && (r.appendChild(n), !0);
        }
        function M(n) {
          (n.firstChild !== o && n.insertBefore(o, n.firstChild), i && n.lastChild !== i && n.appendChild(i), a && (i ? a.nextSibling !== i && n.insertBefore(a, i) : n.lastChild !== a && n.appendChild(a)));
        }
        function u() {
          if ((e && !document.contains(e) && ((e = null), (t = null), c.disconnectKey(s)), e)) return e;
          const o = document.querySelector(`#${r}`);
          if (o) return ((e = o), r === n && v(e), e);
          const a = document.createElement('div');
          return ((a.id = r), document.body.insertBefore(a, document.body.firstChild), (e = a), r === n && v(e), e);
        }
        function v(v) {
          (document.body.firstChild !== v && document.body.insertBefore(v, document.body.firstChild),
            (o = N(v, 'ovnStyle')),
            (a = N(v, 'ovnScript')),
            (i = N(v, 'ovnLog')),
            (function (n) {
              if (!o || !a) return;
              (Array.from(n.children).forEach((n) => {
                n !== o && n !== a && n !== i && (n.hasAttribute('data-ovn-frozen') || (l(n, 'style') ? d(n, o) : l(n, 'script') && d(n, a)));
              }),
                M(n));
            })(v),
            (function (n) {
              (c.disconnectKey(s),
                c.observeWithKey(
                  s,
                  n,
                  { childList: !0 },
                  (r) => {
                    let e = !1;
                    (r.forEach((n) => {
                      n.addedNodes.forEach((n) => {
                        1 === n.nodeType && n !== o && n !== a && n !== i && (n.hasAttribute('data-ovn-frozen') || (l(n, 'style') ? d(n, o) && (e = !0) : l(n, 'script') ? d(n, a) && (e = !0) : (e = !0)));
                      });
                    }),
                      e && M(n));
                  },
                  { debounce: 12 },
                ));
            })(v),
            r === n &&
              (function () {
                g && g.disconnect();
                ((g = new MutationObserver(() => {
                  p ||
                    (p = setTimeout(() => {
                      ((p = null), (e && document.contains(e)) || ((e = null), (t = null), c.disconnectKey(s), u()));
                    }, 126));
                })),
                  g.observe(document.body, { childList: !0 }));
              })());
        }
        let g = null,
          p = null;
        function N(n, r) {
          let e = document.getElementById(r);
          return (e && e.parentNode !== n ? n.appendChild(e) : e || ((e = document.createElement('div')), (e.id = r), n.appendChild(e)), e);
        }
        function m() {
          return (
            t ||
            ((t = new Promise((n) => {
              function r() {
                setTimeout(() => {
                  const r = u();
                  n(r);
                }, 0);
              }
              'loading' === document.readyState ? document.addEventListener('DOMContentLoaded', r, { once: !0 }) : r();
            })),
            t)
          );
        }
        return {
          bind(n) {
            if (!n) return m();
            m().then((r) => {
              n(r);
            });
          },
        };
      }
      const e = r(n);
      return { create: r, bindOVN: (n) => e.bind(n) };
    })();
  n.apply('dom', s);
  const l = (() => {
      function n(n) {
        return a.compute(
          'regex',
          n,
          () =>
            new RegExp(
              '^' +
                (function (n) {
                  return n
                    .replace(/([.+^${}()|[\]\\])/g, '\\$1')
                    .replace(/\*/g, '.*')
                    .replace(/^https?:/, 'https?:');
                })(n) +
                '$',
              'i',
            ),
        );
      }
      function r(r = {}) {
        const e = r.include || [],
          t = r.exclude || [],
          o = e.join('|') + '::' + t.join('|');
        return a.compute('compiledMatch', o, () => {
          const r = e.map(n),
            o = t.map(n),
            a = 1 === e.length && '*' === e[0] && 0 === t.length;
          return { test: (n) => !!a || (r.some((r) => r.test(n)) && !o.some((r) => r.test(n))) };
        });
      }
      function e(r, e) {
        return n(r).test(e);
      }
      return {
        toRegex: n,
        compile: r,
        match: function (n, e = location.href) {
          return r(n).test(e);
        },
        check: e,
        any: function (n, r = location.href) {
          return n.some((n) => e(n, r));
        },
      };
    })(),
    d = { AIGC: ['*127.0.0.1:8188/*', '*localhost:8188/*', '*127.0.0.1:7860/*', '*localhost:7860/*', '*127.0.0.1:9222/*', '*localhost:9222/*'], Chat: ['*deepseek.com/*', '*chatgpt.com/*'], ProgDev: ['*github.com/*', '*huggingface.co/*'], Manage: ['*yuque.com/*', '*ticktick.com/*', '*dida365.com/*', '*workona.com/*'], Search: ['*google.com/*', '*baidu.com/*', '*bing.com/*'], Media: ['*youtube.com/*', '*bilibili.com/*', '*weibo.com/*'], Font: ['*fonts.google.com/*', '*cp.baidu.com/*', '*fonts.*.com/*', '*fonts.com/*'] },
    M = (() => {
      function n(n, r = {}) {
        const e = r.informTime || 3e3,
          t = new WeakMap();
        function a({ message: r, type: t = '', method: o = 'left', timeout: a = e }) {
          const i = document.createElement('div'),
            c = ['ovnTips', o];
          (t && c.push(t),
            (i.className = c.join(' ')),
            (i.textContent = r),
            n((n) => {
              n &&
                !i.isConnected &&
                (n.appendChild(i),
                requestAnimationFrame(() => {
                  i.classList.add('show');
                }),
                a > 0 &&
                  setTimeout(() => {
                    (i.classList.add('fade'), setTimeout(() => i.remove(), 300));
                  }, a));
            }));
        }
        return {
          top: (n, r = '', t = e) => {
            a({ message: n, type: r, method: 'top', timeout: t });
          },
          left: (n, r = '', t = e) => {
            a({ message: n, type: r, method: 'left', timeout: t });
          },
          hover: function (n, r, e, a, i = 926) {
            if (!n) return;
            const c = 'string' == typeof n ? document.querySelector(n) : n;
            if (!c) return;
            const s = 'hover::' + r,
              l = o.hover.get(s) || 0;
            if ('number' == typeof e && l >= e) return;
            const d = t.get(c);
            d && (c.removeEventListener('mouseenter', d.onEnter), c.removeEventListener('mouseleave', d.onLeave), d.timerId && clearTimeout(d.timerId), d.hoverElement && d.hoverElement.remove(), t.delete(c));
            let M = null,
              u = null;
            const v = (n) => {
                ((M = setTimeout(() => {
                  ((u = document.createElement('div')), (u.className = 'ovnTips hover'), (u.textContent = r), document.body.appendChild(u));
                  const { clientX: i, clientY: d } = n,
                    { offsetWidth: M, offsetHeight: p } = u,
                    N = d - 40,
                    m = Math.max(10, Math.min(i - M / 2, window.innerWidth - M - 10));
                  if (
                    ((u.style.left = `${m}px`),
                    (u.style.top = `${Math.max(10, N)}px`),
                    requestAnimationFrame(() => {
                      u.classList.add('show');
                    }),
                    'number' == typeof e)
                  ) {
                    const n = l + 1;
                    o.hover.set(s, n);
                  }
                  ('function' == typeof a && a(), 1 === e && (c.removeEventListener('mouseenter', v), c.removeEventListener('mouseleave', g), t.delete(c)));
                }, i)),
                  t.set(c, { timerId: M, hoverElement: u, onEnter: v, onLeave: g }));
              },
              g = () => {
                (M && (clearTimeout(M), (M = null)),
                  u &&
                    (u.classList.add('fade'),
                    setTimeout(() => {
                      (u?.remove(), (u = null));
                    }, 300)));
                const n = t.get(c);
                n && ((n.timerId = null), (n.hoverElement = null));
              };
            (c.addEventListener('mouseenter', v), c.addEventListener('mouseleave', g), t.set(c, { timerId: M, hoverElement: u, onEnter: v, onLeave: g }));
          },
        };
      }
      return { create: n, OVN: n(s.bindOVN, { informTime: 3e3 }) };
    })();
  n.apply('inform', M);
  const u = (() => {
      function n(n = {}) {
        const r = n.jitter || n,
          e = r.delay ?? 0,
          t = r.interval ?? 0,
          o = r.random ?? 0;
        return e + t * (n.order || 0) + (o ? Math.random() * o : 0);
      }
      return {
        get: n,
        run: function (r, e = {}) {
          return setTimeout(r, n(e));
        },
      };
    })(),
    v = { debug: !1, Global: { fold: !1, block: [], ScrollBar: { name: '客制化滚动条', feature: '滚动条样式 个性化', match: { include: ['*'], exclude: [] } }, LoaderBar: { name: '顶部加载条', feature: '全局顶部植入 加载进度条 => 进度条', match: { include: ['*'], exclude: [] } }, Gallop: { feature: '浮光掠影‌  走马观花', match: { include: ['*'], exclude: ['*dida365.com/*', '*ticktick.com/*'] } }, QuickRead: { match: { include: ['*'], exclude: ['*bilibili.com/*'] } }, CustomICON: { feature: '站点 ICO 替换 | 书签栏 > DeepSeek > HUA! 黑鲸', match: { include: ['*'], exclude: [] }, phase: 'end' }, Selection: { feature: '原生鼠标选取样式 个性化', match: { include: ['*'], exclude: ['*yuque.com/*'] } }, FontStyle: { feature: '字体样式 | 可去 FontStyle 重定义所需站点/变更应用已安装的某款字体', match: { include: ['file:///*', '*iconfont.cn/*', '*emojiall.com/*', '*greasyfork.org/*', '*juejin.cn/*', '*wikipedia.org/*', '*prompts.chat/*', ...d.Chat, ...d.ProgDev, ...d.Manage, ...d.Search, ...d.Media], exclude: ['*youtube.com/*', ...d.Font] } } }, Matrix: { fold: !1, block: [], Search: { fold: !0, Baidu: { match: { include: ['*baidu.com/*'], exclude: [] } }, Google: { match: { include: ['*Google.com/*', '*Google.com.*/*'], exclude: [] } }, Bing: { match: { include: ['*bing.com/*'], exclude: [] } } }, Chat: { fold: !0, DeepSeek: { match: { include: ['*deepseek.com/*'], exclude: [] } }, ChatGPT: { match: { include: ['*chatgpt.com/*'], exclude: [] } }, DOUBAO: { match: { include: ['*doubao.com/*'], exclude: [] } } }, ComfyUI: { fold: !0, feature: 'YOYOYO', match: { include: [...d.AIGC], exclude: [] }, manager: {}, crystools: {}, rgthree: {} }, YUQUE: { fold: !0, match: { include: ['*yuque.com/*'], exclude: [] }, ovnGrid: { feature: '背景网格' }, ovnTable: { feature: '表格样式' } }, TickTick: { match: { include: ['*dida365.com/*', '*ticktick.com/*'], exclude: [] } }, Youtube: { match: { include: ['*youtube.com/*'], exclude: [] } }, Bilibili: { match: { include: ['*Bilibili.com/*'], exclude: [] } } }, Micro: { fold: !1, block: [], Eagle: { match: { include: ['*'], exclude: [] } }, NetDisk_Check: { match: { include: ['*'], exclude: [] } }, Other: { feature: '炸七炸八', match: { include: ['*'], exclude: [] } } } };
  n.apply('config', v);
  const g = (() => {
      const n = {},
        r = {};
      function e(r, t, o) {
        const a = (function ({ raw: n, path: r, parent: e }) {
          const t = r[r.length - 1];
          return { key: e ? `${e.key}_${t}` : t, id: r.join('_'), parent: e, children: [], name: n.name || '', feature: n.feature || '', fold: n.fold || !1, state: void 0 !== n.state ? n.state : !e || void 0, default: n.default ?? !0, block: n.block || [], match: ((o = n.match), o ? ('string' == typeof o ? { include: [o], exclude: [] } : Array.isArray(o) ? { include: o, exclude: [] } : { include: o.include || [], exclude: o.exclude || [] }) : null), phase: n.phase || null, priority: n.priority || 0, depend: n.depend || [], group: null };
          var o;
        })({ raw: r, path: t, parent: o });
        n[a.key] = a;
        for (const n in r) {
          const o = r[n];
          'object' == typeof o && (['name', 'feature', 'match', 'state', 'default', 'fold', 'block', 'priority', 'depend', 'phase'].includes(n) || a.children.push(e(o, [...t, n], a)));
        }
        return (
          (a.group = a.parent ? a.parent.group || a.parent.key : a.key),
          (function (n) {
            let r = n.parent;
            for (; r; ) (!n.match && r.match && (n.match = r.match), (r = r.parent));
          })(a),
          a.match && (a.compiledMatch = l.compile(a.match)),
          a
        );
      }
      for (const n in v) 'debug' !== n && (r[n] = e(v[n], [n], null));
      return {
        get: (r) => n[r],
        getFlat: () => n,
        getTree: () => r,
        getGroup: function (r) {
          const e = n[r];
          return e?.group || null;
        },
        getChain: function (r) {
          const e = [];
          let t = n[r];
          for (; t; ) (e.unshift(t.key), (t = t.parent));
          return e;
        },
        resolve: function (r) {
          if (n[r]) return r;
          const e = [];
          for (const t in n) t.endsWith(`_${r}`) && e.push(t);
          if (1 === e.length) return e[0];
          for (const e in n) if (n[e].group === r) return e;
          return null;
        },
      };
    })(),
    p = (() => {
      const n = v?.debug ?? !1,
        r = '[==👽OVN==]',
        e = [],
        t = Object.create(null),
        o = Object.create(null),
        a = Object.create(null);
      let i = 10,
        s = 1;
      function l(n, r) {
        return (n = String(n)).length >= r ? n : n + ' '.repeat(r - n.length);
      }
      function d(n) {
        if (null == n || n <= 0) return;
        const r = Math.floor(n),
          e = 0 === r ? 1 : String(r).length;
        e > s && (s = e);
      }
      function M(n) {
        const r = s;
        if (null == n || n <= 0) return '-'.repeat(r) + '.' + '-'.repeat(2);
        const [e, t] = n.toFixed(2).split('.');
        return e.padStart(r, '-') + '.' + t;
      }
      function u({ icon: n, key: e, time: t, msg: o }) {
        d(t);
        const a = M(t),
          c = m(e);
        !(function (n) {
          n.length > i && (i = n.length);
        })(c);
        const s = l(`[${c}]`, i + 2);
        return `${r}[${n}][${a}ms]${s} | ${o}`;
      }
      function p(n, r) {
        (t[n] || (t[n] = []), t[n].push({ msg: r, time: Date.now() }));
      }
      function N(n, { level: r, msg: e, time: t }) {
        o[n] || (o[n] = {});
        const a = o[n];
        (null != t && t >= 0 ? (a.timeCost = t) : a.timeCost || (a.timeCost = 0), (a.debugLevel = r), 'error' === r && ((a.error = !0), (a.errorMSG = e)), d(a.timeCost));
      }
      function m(n) {
        const r = n.split('_');
        return r.length > 1 ? r.slice(1).join('_') : n;
      }
      function y(n) {
        return (a[n] || (a[n] = []), a[n]);
      }
      return {
        log: function (r, t = 'DONE', o = 0, a) {
          const i = u({ icon: '🚀', key: r, time: o, msg: t }),
            c = a ? `${i} | ${a}` : i;
          return (e.push(c), n && console.log(c), p(r, c), N(r, { level: 'log', msg: t, time: o }), c);
        },
        warn: function (r, t = 'DEBUG', o = 0, a) {
          const i = u({ icon: '🛠️', key: r, time: o, msg: t }),
            c = a ? `${i} | ${a}` : i;
          return (e.push(c), n && console.warn(c), p(r, c), N(r, { level: 'warn', msg: t, time: o }), c);
        },
        error: function (r, t = 'ERROR', o = 0, a) {
          const i = u({ icon: '👾', key: r, time: o, msg: t }),
            c = a ? `${i} | ${a}` : i;
          return (e.push(c), n && console.error(c), p(r, c), N(r, { level: 'error', msg: t, time: o }), c);
        },
        getLogs: function (n) {
          return t[n] || [];
        },
        getConsoleLines: function () {
          return e;
        },
        infoTotal: function () {
          if (n) {
            for (const [n, r] of Object.entries(o)) {
              const e = r.error ? '👾' : 'warn' === r.debugLevel ? '🛠️' : '🚀',
                t = r.errorMSG || (r.error ? 'ERROR' : 'DONE');
              console.log(u({ icon: e, key: n, time: r.timeCost || 0, msg: t }));
            }
            if (void 0 !== c) {
              const n = c.getActiveCount();
              (console.log(`${r}[♾️][-.-ms][observer]            | Anonymous - ${n.anonymous}`), console.log(`${r}[♾️][-.-ms][observer]            | Keyed - ${n.keyed}`), console.log(`${r}[♾️][-.-ms][observer]            | Total - ${n.byTarget}`));
            }
          }
        },
        getSnapshot: function () {
          const n = void 0 !== g ? g : null,
            e = n && n.getFlat ? n.getFlat() : {},
            i = Object.create(null);
          let c = 10;
          for (const n in a) {
            const r = m(n);
            c = Math.max(c, r.length);
          }
          for (const n in o) {
            const r = m(n);
            c = Math.max(c, r.length);
          }
          const s = c;
          for (const n in a) {
            const o = a[n],
              c = e[n] || {},
              d = { block: null, match: null, state: null, chain: null, exec: null };
            let u = '',
              v = 'idle',
              g = 0;
            for (const n of o) {
              const r = (n) => 'done' === n || ('fail' !== n && null);
              ('block' === n.step && (d.block = r(n.state)), 'match' === n.step && (d.match = r(n.state)), 'state' === n.step && (d.state = r(n.state)), 'chain' === n.step && (d.chain = r(n.state)), 'run.exec' === n.step && ((d.exec = r(n.state)), (g = n.timeCost || 0)), 'fail' === n.state && ((v = 'fail'), (u = n.step)));
            }
            'fail' !== v && (v = 'done');
            const p = m(n),
              N = l(`[${p}]`, s + 2),
              y = M(g),
              L = `${r}[${'fail' === v ? '👾' : '🚀'}][${y}ms]${N} | ${'fail' === v ? `FAIL - ${u}` : 'DONE'}`;
            i[n] = { group: c.group || n.split('_')[0] || 'Unknown', shortName: p, timeCost: g, steps: d, state: v, reason: u, logs: t[n] || [], consoleLine: L };
          }
          for (const n in o) {
            if (i[n]) continue;
            const e = o[n],
              a = e.error ? '👾' : 'warn' === e.debugLevel ? '🛠️' : '🚀',
              c = e.error ? `FAIL - ${e.errorMSG || 'ERROR'}` : 'DONE',
              d = e.timeCost || 0,
              u = m(n),
              v = l(`[${u}]`, s + 2),
              g = M(d),
              p = `${r}[${a}][${g}ms]${v} | ${c}`;
            i[n] = { group: n.split('_')[0] || 'Unknown', shortName: u, timeCost: d, steps: {}, state: e.error ? 'fail' : 'done', reason: e.errorMSG || '', logs: t[n] || [], consoleLine: p };
          }
          return i;
        },
        startTrace: function (n, r) {
          y(n).push({ step: r, state: 'pending', time: performance.now() });
        },
        okTrace: function (n, r, e) {
          const t = y(n).find((n) => n.step === r && 'pending' === n.state);
          t && ((t.state = 'done'), (t.timeCost = performance.now() - t.time), (t.detail = e), d(t.timeCost));
        },
        failTrace: function (n, r, e) {
          const t = y(n).find((n) => n.step === r && 'pending' === n.state);
          t && ((t.state = 'fail'), (t.reason = e), (t.timeCost = performance.now() - t.time), d(t.timeCost));
        },
        skipTrace: function (n, r, e) {
          y(n).push({ step: r, state: 'skip', reason: e });
        },
        format: function ({ icon: n, key: r, time: e, msg: t }) {
          return u({ icon: n, key: r, time: e, msg: t });
        },
      };
    })(),
    N = (() => {
      function n(n) {
        return Array.isArray(n) ? n : [n];
      }
      function r(r, t) {
        return function (o = {}) {
          const a = (function (n) {
            return Array.isArray(n) ? n : [n];
          })(o);
          a.forEach((o) => {
            const { key: a, type: c = 'switch', name: s = ['ON', 'OFF'], color: l = ['var(--ovnAccentHEX)', 'var(--ovnBase04HEX)'], group: d = t, class: u = [], default: v = !0, order: g = 50, inform: p = !0, reload: N = !1, map: m, onClick: y, onMounted: L } = o;
            (a || 'jump' === c) &&
              r((r) => {
                const t = (function (n, r) {
                  if (!r) return n;
                  const e = 'string' == typeof r ? [r] : r,
                    t = e.map((n) => `.${n}`).join('');
                  let o = n.querySelector(t);
                  o || ((o = document.createElement('div')), (o.className = e.join(' ')), n.appendChild(o));
                  return o;
                })(r, d);
                if ('jump' === c && m)
                  return void Object.entries(m).forEach(([o, a]) => {
                    if (r.querySelector(`[data-jump="${o}"]`)) return;
                    const i = document.createElement('button');
                    ((i.className = [...n(u)].join(' ')),
                      (i.textContent = o),
                      (i.dataset.jump = o),
                      (i.dataset.order = g),
                      (i.onclick = () => {
                        (y?.({ phase: 'action', type: 'jump', label: o, url: a, button: i }), p && M.top(`Jump TO ${o}`, 'correct'), y || (location.href = a), N && location.reload());
                      }),
                      e(t, i, g),
                      L?.(i));
                  });
                if (r.querySelector(`.${a}`)) return;
                const o = document.createElement('button');
                ((o.className = [...n(u), a].join(' ')), (o.dataset.order = g));
                let h = 'switch' === c ? i.get(a, v) : null;
                function j() {
                  if ('switch' !== c) return void (o.textContent = n(s)[0] || 'RUN');
                  const r = n(s),
                    e = n(l);
                  ((o.textContent = h ? r[0] : r[1]), (o.style.background = h ? e[0] : e[1]));
                }
                ('switch' === c && (y?.({ phase: 'init', type: c, key: a, state: h, button: o }), (h = i.get(a, v))),
                  j(),
                  o.addEventListener('click', () => {
                    if ('switch' === c) {
                      if (((h = i.toggle(a)), j(), y?.({ phase: 'toggle', type: c, key: a, state: h, button: o }), p)) {
                        const r = h ? n(s)[0] || 'ON' : n(s)[1] || 'OFF';
                        M.top(`${a}: ${r}`, 'correct');
                      }
                    } else (y?.({ phase: 'action', type: c, key: a, button: o }), p && M.top(`${n(s)[0] || a} 已执行`, 'correct'));
                    N && location.reload();
                  }),
                  e(t, o, g),
                  L?.(o));
              });
          });
        };
      }
      function e(n, r, e) {
        const t = n.querySelectorAll('[data-order]');
        let o = null;
        for (const n of t) {
          if ((parseFloat(n.dataset.order) || 0) > e) {
            o = n;
            break;
          }
        }
        o ? n.insertBefore(r, o) : n.appendChild(r);
      }
      return { create: r, bindOVN: r(s.bindOVN, ['ovnButtonBase', 'ovnButtonUnder']) };
    })();
  n.apply('button', N);
  const m = (() => {
      function n(n) {
        return { ready: !1, reason: n };
      }
      function r(r, e) {
        const t = e.group?.block;
        if (!t?.length) return { ready: !0 };
        return t.some((n) => l.check(n, e.url)) ? n('BLOCK') : { ready: !0 };
      }
      function e(r, e) {
        if (!r.match) return { ready: !0 };
        return r.compiledMatch.test(e.url) ? { ready: !0 } : n('MATCH');
      }
      function t(r, e) {
        for (const r of e.chain) {
          if (!1 === e.runtime.get(r, !0)) return n('CHAIN');
        }
        if (r.depend?.length) {
          if (!e.runtime.chain(r.depend)) return n('DEPEND');
        }
        return { ready: !0 };
      }
      function o(r, e) {
        return !1 === e.runtime.get(r.key, r.state ?? !0) ? n('STATE') : { ready: !0 };
      }
      return {
        check: function (n, a) {
          const i = [
            ['block', r],
            ['match', e],
            ['state', o],
            ['chain', t],
          ];
          for (const [r, e] of i) {
            p?.startTrace?.(n.key, r);
            const t = e(n, a);
            if (!t.ready) return (p?.failTrace?.(n.key, r, t.reason), t);
            p?.okTrace?.(n.key, r);
          }
          return { ready: !0 };
        },
      };
    })(),
    y = (() => {
      const n = [];
      let r = !1;
      const e = ['start', 'init', 'ready', 'end'];
      function t(n, r) {
        try {
          r();
        } catch (r) {
          p?.error?.(n.key, r?.message);
        }
      }
      function o() {
        if (((r = !1), !n.length)) return;
        const o = { start: [], init: [], ready: [], end: [] };
        for (const r of n) {
          const n = e.includes(r.mod.phase) ? r.mod.phase : 'init';
          o[n].push(r);
        }
        n.length = 0;
        const a = (n, r) => {
          for (const e of n) (p?.startTrace?.(e.mod.key, `phase.${r}`), p?.startTrace?.(e.mod.key, 'run.exec'), t(e.mod, e.callback), p?.okTrace?.(e.mod.key, 'run.exec'), p?.okTrace?.(e.mod.key, `phase.${r}`));
        };
        if ((a(o.start, 'start'), a(o.init, 'init'), o.ready.length || o.end.length)) {
          const n = () => {
            (a(o.ready, 'ready'), a(o.end, 'end'));
          };
          'loading' === document.readyState ? document.addEventListener('DOMContentLoaded', n, { once: !0 }) : n();
        }
      }
      return {
        run: function (e, a, c = {}) {
          if (void 0 === e) return (o(), !0);
          const s = g.resolve(e);
          if (!s) return (p?.failTrace?.(e, 'resolve', 'NOT_FOUND'), !1);
          const l = g.get(s);
          if (!l) return (p?.skipTrace?.(s, 'run', 'NO_MODULE'), !1);
          p?.startTrace?.(s, 'run');
          const d = (function (n, r = {}) {
              return { url: r.url || location.href, runtime: i, group: g.get(n.group), chain: g.getChain(n.key) };
            })(l, c),
            M = m.check(l, d);
          if (!M.ready) return (p?.failTrace?.(s, 'final', M.reason), !1);
          if ('function' != typeof a) return (p?.failTrace?.(s, 'run', 'NO_FUNC'), !1);
          if (
            !(function (n) {
              return (n.depend && n.depend.length > 0) || (n.phase && 'none' !== n.phase) || n.priority > 0;
            })(l)
          ) {
            p?.startTrace?.(s, 'run.exec');
            performance.now();
            return (t(l, a), p?.okTrace?.(s, 'run.exec'), !0);
          }
          return (n.push({ mod: l, callback: a }), r || ((r = !0), Promise.resolve().then(o)), !0);
        },
      };
    })(),
    L = (() => {
      const n = 'visited',
        r = 'data-ovn-trace';
      return {
        apply: function ({ delay: e = 260, target: t, subjoin: a, trace: i = !1, traceQuery: s = 'a[href]', traceJudge: l }) {
          const d = Array.isArray(t) ? t : [t],
            M = Array.isArray(a) ? a : [a],
            u = new Set(JSON.parse(o.visited.get(n, '[]'))),
            v = `subjoin_${d.join('_')}_${M.join('_')}`;
          function g(n) {
            (M.forEach((r) => {
              n.classList.contains(r) || n.classList.add(r);
            }),
              n.setAttribute(r, 'true'));
          }
          function p() {
            d.forEach((n) => {
              document.querySelectorAll(n).forEach((n) => {
                n.hasAttribute(r) ||
                  (i
                    ? (function (n) {
                        return [...n.querySelectorAll(s)].some((n) => {
                          const r = n.getAttribute('href');
                          return !!r && ('function' == typeof l ? l(r) : !Array.isArray(l) || l.every((n) => r.includes(n))) && u.has(r);
                        });
                      })(n) && g(n)
                    : g(n));
              });
            });
          }
          function N() {
            (p(),
              document.body.addEventListener('click', (r) => {
                const e = r.target.closest(s);
                if (!e) return;
                const t = e.getAttribute('href');
                t &&
                  ('function' == typeof l ? l(t) : !Array.isArray(l) || l.every((n) => t.includes(n))) &&
                  (u.add(t),
                  o.visited.set(n, JSON.stringify([...u])),
                  d.forEach((n) => {
                    const r = e.closest(n);
                    r && g(r);
                  }));
              }),
              c.observeWithKey(v, document.body, { childList: !0, subtree: !0 }, p, { preventDuplicate: !0, autoDisconnect: !1 }));
          }
          e > 0 ? setTimeout(N, e) : N();
        },
      };
    })(),
    h = {
      apply: function ({ scroll: n = !0, smooth: r = !0, ratio: e = 0.8, letterKey: t = !0, buttonPrev: o = '#page-prev', buttonNext: a = '#page-next' } = {}) {
        const i = (n) => window.scrollBy({ top: n, left: 0, behavior: r ? 'smooth' : 'auto' }),
          c = { ArrowLeft: () => document.querySelector(o)?.click(), ArrowRight: () => document.querySelector(a)?.click(), ArrowUp: () => n && i(-window.innerHeight * e), ArrowDown: () => n && i(window.innerHeight * e) };
        (t && Object.assign(c, { a: c.ArrowLeft, d: c.ArrowRight, w: c.ArrowUp, s: c.ArrowDown }),
          document.addEventListener('keydown', (n) => {
            if (n.ctrlKey || n.metaKey || n.altKey) return;
            const r = n.target.tagName.toLowerCase();
            if ('input' === r || 'textarea' === r || n.target.isContentEditable) return;
            const e = c[n.key] || c[n.key.toLowerCase()];
            e && (e(), n.preventDefault());
          }));
      },
    },
    j = (() => {
      const n = () => {
        document.querySelectorAll('*').forEach((n) => {
          ((n.onselectstart = null), (n.style.userSelect = n.style.webkitUserSelect = 'auto'), (n.style.pointerEvents = 'auto'), ['ondragstart', 'ondrag', 'ondragend'].forEach((r) => (n[r] = null)), n.removeAttribute?.('ondragstart'));
        });
      };
      return {
        apply: function ({ key: r, ReLimits: e = 'all' } = {}) {
          const t = ((n) => {
            if (!n) return () => !0;
            const r = { ctrl: 'control', alt: 'alt', shift: 'shift' },
              e = (Array.isArray(n) ? n : [n]).map((n) => r[n.toLowerCase()] || n.toLowerCase());
            let t = !1;
            return (
              document.addEventListener(
                'keydown',
                (n) => {
                  e.includes(n.key.toLowerCase()) && (t = !0);
                },
                !0,
              ),
              document.addEventListener(
                'keyup',
                (n) => {
                  e.includes(n.key.toLowerCase()) && (t = !1);
                },
                !0,
              ),
              () => t
            );
          })(r);
          (e && 'all' !== e ? (Array.isArray(e) ? e : [e]) : ['menu', 'drag']).forEach((r) => {
            ('menu' === r &&
              ((n) => {
                const r = (r) => {
                  n() && r.stopPropagation();
                };
                ((document.oncontextmenu = window.oncontextmenu = null), ['contextmenu', 'selectstart', 'copy', 'cut', 'paste'].forEach((n) => window.addEventListener(n, r, !0)));
              })(t),
              'drag' === r &&
                ((r) => {
                  r() && n();
                  const e = (n) => {
                    r() && n.stopImmediatePropagation();
                  };
                  (document.addEventListener('pointerdown', e, !0),
                    document.addEventListener('touchstart', e, !0),
                    document.addEventListener(
                      'mousedown',
                      (n) => {
                        if (!r()) return;
                        n.stopImmediatePropagation();
                        let e = n.target;
                        for (; e && e !== document && 'IMG' !== e.tagName && 'VIDEO' !== e.tagName; ) e = e.parentNode;
                        e && (('IMG' !== e.tagName && 'VIDEO' !== e.tagName) || (e.setAttribute('draggable', 'true'), (e.style.pointerEvents = 'auto'), e.removeAttribute('controlslist')));
                      },
                      !0,
                    ),
                    c.observe(document.documentElement, { childList: !0, subtree: !0 }, () => {
                      r() && n();
                    }));
                })(t));
          });
        },
      };
    })(),
    I = (() => {
      function n(n) {
        const r = new URL(location.href);
        return (r.searchParams.set('page', n), r.toString());
      }
      return {
        apply: function ({ mode: r = 'smart', loadPage: e = 9, itemTarget: t = '#container .c-container', itemWrapper: o = '#container', buttonPrev: a = '.page-prev', buttonNext: i = '.page-next', fragment: c = !1, jitter: s } = {}) {
          const l = s || { delay: 30, interval: 30, random: 70 },
            d = (function () {
              const n = location.href.match(/page=(\d+)/);
              return n ? parseInt(n[1]) : 1;
            })(),
            M = 'string' == typeof o ? document.querySelector(o) : o;
          if (!M) return;
          let v = !1,
            g = d;
          function p(r) {
            return new Promise((e) => {
              const o = u.get({ jitter: l, order: r });
              setTimeout(() => {
                $.get(n(r), (n) => {
                  const r = document.createElement('div');
                  r.innerHTML = n;
                  const o = r.querySelectorAll(t),
                    a = c ? document.createDocumentFragment() : M;
                  (o.forEach((n) => {
                    (n.classList.add('ovnFadeInLoad'), a.appendChild(n));
                  }),
                    c && M.appendChild(a),
                    requestAnimationFrame(() => {
                      M.querySelectorAll('.ovnFadeInLoad:not(.ovnLoaded)').forEach((n) => {
                        n.classList.add('ovnLoaded');
                      });
                    }),
                    e());
                });
              }, o);
            });
          }
          if ('multipage' === r) {
            const N = document.querySelector(i);
            N && ((N.href = n(d + e + 1)), (N.textContent = `Next ${e + 1}`));
            const m = [];
            for (let y = 1; y <= e; y++) {
              const L = d + y;
              m.push(p(L));
            }
            return Promise.all(m);
          }
          if ('smart' === r) {
            let h = !1,
              j = !1,
              I = window.pageYOffset,
              D = 0;
            const x = 50;
            let b = null;
            const T = () => {
              h &&
                j &&
                !v &&
                ((v = !0),
                (g += 1),
                b.disconnect(),
                p(g)
                  .then(() => {
                    const n = new URL(location.href);
                    (n.searchParams.set('page', g), history.replaceState(null, '', n.toString()), (j = !1), (D = 0), w());
                  })
                  .finally(() => {
                    v = !1;
                  }));
            };
            function w() {
              const n = M.querySelectorAll(t),
                r = n[n.length - 1];
              r && b.observe(r);
            }
            return (
              (b = new IntersectionObserver(
                (n) => {
                  const r = n[0];
                  ((h = r.isIntersecting), T());
                },
                { rootMargin: '500px' },
              )),
              w(),
              void window.addEventListener('scroll', () => {
                const n = window.pageYOffset,
                  r = I - n;
                (r > 0 ? ((D += r), D >= x && (j = !0)) : r < 0 && T(), (I = n));
              })
            );
          }
          if ('loadInfinite' === r) {
            const S = new IntersectionObserver(
              (n) => {
                const r = n[0];
                r.isIntersecting &&
                  !v &&
                  ((v = !0),
                  (g += 1),
                  S.unobserve(r.target),
                  p(g)
                    .then(() => {
                      const n = new URL(location.href);
                      (n.searchParams.set('page', g), history.replaceState(null, '', n.toString()), A());
                    })
                    .finally(() => {
                      v = !1;
                    }));
              },
              { rootMargin: '500px' },
            );
            function A() {
              const n = M.querySelectorAll(t),
                r = n[n.length - 1];
              r && S.observe(r);
            }
            A();
          }
        },
      };
    })(),
    D = (() => {
      const n = 'AUTO_EXECUTE';
      function r(n, r = 'click') {
        if (!n) return !1;
        switch (r) {
          case 'click':
            n.click();
            break;
          case 'focus':
            n.focus();
            break;
          case 'hover':
            const r = new MouseEvent('mouseover', { bubbles: !0 });
            n.dispatchEvent(r);
        }
        return !0;
      }
      return {
        apply: function (e = {}) {
          const { jitter: t, delay: o, interval: a, random: i, backstage: c = !1, strict: s = !1, debug: l = !1 } = e,
            d = t || { delay: o || 200, interval: a || 20, random: i || 0 },
            M = [];
          for (let n = 1; n <= 10; n++) {
            const r = `step${n}`;
            e[r] && M.push(e[r]);
          }
          if (!M.length) return;
          let v = !1,
            g = !1;
          const N = () => {
            v ||
              ((c || 'visible' === document.visibilityState) &&
                ((v = !0),
                (async function () {
                  for (let e = 0; e < M.length && !g; e++) {
                    const t = M[e];
                    await new Promise((o) => {
                      u.run(
                        () => {
                          if (g) return void o();
                          const { target: a, action: i = 'click' } = t;
                          try {
                            const t = document.querySelector(a);
                            t ? (r(t, i), p.log(n, `Step${e + 1} ✅ ${i} - ${a}`)) : (p.warn(n, `Step${e + 1} ❓ None - ${a}`), s && ((g = !0), p.error(n, `Step${e + 1} ❌ Break`)));
                          } catch (r) {
                            (p.error(n, `Step${e + 1} ❌ Error - ${r.message}`, 0, r.stack), s && (g = !0));
                          }
                          o();
                        },
                        { jitter: d, order: e },
                      );
                    });
                  }
                })()));
          };
          ('loading' === document.readyState ? document.addEventListener('DOMContentLoaded', N) : N(), document.addEventListener('visibilitychange', N));
        },
      };
    })(),
    x = { PREFS: o, RUNTIME: i, REDIS: a, DOM: s, MATCH: l, SITE: d, OBSERVER: c, INFORM: M, RANDOM: u, DEBUG: p, BUTTON: N, CONFIG: v, RESOLVER: g, VERIFY: m, SCHEDULER: y, HOOK: n, ADD_CLASS: L, QUICK_READ: h, REMOVE_LIMITS: j, AUTO_LOAD: I, AUTO_EXECUTE: D };
  ((window.OVN = x),
    (function () {
      const n = { light: ['light', 'light-theme', 'theme-light'], dark: ['dark', 'dark-theme', 'theme-dark', 'nb-theme-dark', 'dark-mode', '[data-kumuhana=pouli]', '[data-theme=dark]', '[data-color-mode=dark]'] },
        r = { light: ['darker-dark-theme-deprecate'], dark: [] };
      let e = null;
      const t = (n, r) => {
          if (!n) return 0;
          const e = [
            ...n.classList,
            ...(n.getAttributeNames?.() || []).flatMap((r) => {
              const e = n.getAttribute(r);
              return [r, `${r}=${e}`, `[${r}=${e}]`];
            }),
          ].map((n) => n.toLowerCase());
          return r.filter((n) => e.includes(n.toLowerCase())).length;
        },
        o = (n) => {
          const r = n.match(/\d+/g);
          if (!r || r.length < 3) return 255;
          const [e, t, o] = r.map(Number);
          return (299 * e + 587 * t + 114 * o) / 1e3;
        },
        a = () => {
          const n = window.innerWidth,
            r = window.innerHeight,
            e = 500,
            t = [
              [e, e],
              [n - e, e],
              [e, r - e],
              [n - e, r - e],
              [n / 2, r / 2],
            ].filter(([e, t]) => e >= 0 && t >= 0 && e <= n && t <= r);
          if (!t.length) return null;
          return t.reduce(
            (n, [r, e]) =>
              n +
              ((n, r) => {
                let e = document.elementFromPoint(n, r);
                for (; e && e !== document.documentElement; ) {
                  const n = getComputedStyle(e).backgroundColor;
                  if (n && 'transparent' !== n && !n.includes('rgba(0, 0, 0, 0)')) return o(n);
                  e = e.parentElement;
                }
                return 255;
              })(r, e),
            0,
          ) /
            t.length <
            128
            ? 'dark'
            : 'light';
        },
        i = () => {
          const o = document.documentElement,
            i =
              (() => {
                const { documentElement: e, body: o } = document,
                  a = (n, r) => t(n, r.dark) - t(n, r.light);
                let i = a(e, r) + a(o, r);
                return i ? (i > 0 ? 'dark' : 'light') : ((i = a(e, n) + a(o, n)), i ? (i > 0 ? 'dark' : 'light') : null);
              })() ||
              a() ||
              (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : null) ||
              'light';
          i !== e && (o.setAttribute('data-ovn-theme', i), (e = i));
        },
        s = () => {
          const n = [document.documentElement];
          document.body && n.push(document.body);
          const r = ((n, r = 20) => {
            let e;
            return () => {
              (clearTimeout(e), (e = setTimeout(n, r)));
            };
          })(i, 20);
          n.forEach((n, e) => {
            c.observeWithKey(`ovnTheme_${e}`, n, { attributes: !0 }, r, { preventDuplicate: !0, autoDisconnect: !1 });
          });
        };
      (() => {
        const n = () => {
          (i(), s(), window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', i), window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', i));
        };
        'loading' === document.readyState ? document.addEventListener('DOMContentLoaded', n) : n();
      })();
    })(),
    (function () {
      const n = new Map();
      function r(n, r, e) {
        (n.classList.add('ovnState', 'ovnBack'), n.setAttribute('data-ovn-state', ''), r.error ? n.setAttribute('data-ovn-state', 'error') : r.debug ? n.setAttribute('data-ovn-state', 'warn') : e && n.setAttribute('data-ovn-state', 'success'));
      }
      function e(n, r, e) {
        n.style.opacity = r && e ? 0.9 : 0.4;
      }
      function t(n, r, e, t, a) {
        let i = o.fold.get(t, a);
        (i ? (r.classList.add('ovnClose'), (r.style.height = '0px'), e.classList.remove('ovnRotated')) : ((r.style.height = 'auto'), e.classList.add('ovnRotated')),
          n.addEventListener('click', (n) => {
            if ((n.stopPropagation(), (i = !i), o.fold.set(t, i), r.classList.add('ovnOpen'), i)) {
              const n = r.scrollHeight + 'px';
              ((r.style.height = n),
                requestAnimationFrame(() => (r.style.height = '0px')),
                setTimeout(() => {
                  (r.classList.add('ovnClose'), (r.style.height = 'auto'));
                }, 226));
            } else {
              r.classList.remove('ovnClose');
              const n = r.scrollHeight + 'px';
              ((r.style.height = '0px'), requestAnimationFrame(() => (r.style.height = n)));
            }
            e.classList.toggle('ovnRotated', !i);
          }));
      }
      function c(n, t) {
        n.querySelectorAll('input[type=checkbox]').forEach((n) => {
          const o = n.id?.replace('ovnChild_', '');
          if (!o) return;
          const a = g.get(o),
            c = n.closest('.ovnBodyRow, .ovnHeaderRow');
          if (!c) return;
          n.disabled = !t;
          const s = i.get(o, a?.default ?? !0);
          ((n.checked = !!t && s), r(n, a || {}, n.checked), e(c, t, n.checked));
        });
      }
      function l(a, s, d) {
        const u = a.key,
          v = i.get(u, a.default ?? !0);
        if (a.children && a.children.length > 0) {
          const i = document.createElement('div');
          i.className = 'ovnGroupBase Sub';
          const g = document.createElement('div');
          g.className = 'ovnGroupHead';
          const p = document.createElement('div');
          ((p.className = 'ovnFoldBox'), (p.style.cursor = 'pointer'), o.hover.get(u, !0) && M.OVN.hover(p, 'HEIHEI 彩蛋 | ClickClick', 2));
          const N = document.createElement('div');
          ((N.className = 'ovnArrow'), (N.textContent = '›'), p.appendChild(N));
          const m = document.createElement('label');
          m.className = 'ovnHeaderRow';
          const y = document.createElement('span');
          ((y.textContent = u.split('_').pop()), (y.style.marginRight = 'auto'));
          const L = document.createElement('input');
          ((L.type = 'checkbox'), (L.checked = v), (L.disabled = !d), L.classList.add('ovnStatusDot', 'ovnState', 'ovnBack'), r(L, a, v), e(m, d, v));
          const h = document.createElement('div');
          ((h.className = 'ovnGroupBody'),
            requestAnimationFrame(() => {
              c(h, d && L.checked);
            }),
            L.addEventListener('change', () => {
              const t = L.checked;
              (n.set(u, t), r(L, a, t), e(m, d, t), c(h, d && t));
            }),
            m.append(y, L),
            g.append(p, m),
            t(p, h, N, `fold_${u}`, a.fold ?? !1),
            a.children.forEach((n) => l(n, h, d && v)),
            i.append(g, h),
            s.appendChild(i));
        } else
          s.appendChild(
            (function (t, a) {
              const c = t.key,
                s = i.get(c, t.default ?? !0),
                l = document.createElement('label');
              l.className = 'ovnBodyRow';
              const d = document.createElement('span');
              d.textContent = c.split('_').pop();
              const u = document.createElement('input');
              ((u.type = 'checkbox'),
                (u.checked = s),
                (u.disabled = !a),
                (u.id = `ovnChild_${c}`),
                u.classList.add('ovnStatusDot', 'ovnState', 'ovnBack'),
                r(u, t, s),
                e(l, a, s),
                u.addEventListener('change', () => {
                  (n.set(c, u.checked), r(u, t, u.checked), e(l, a, u.checked));
                }),
                l.append(d, u));
              const v = t.error ? t.errorMSG : t.feature;
              return (v && o.hover.get(c, !0) && M.OVN.hover(l, v), l);
            })(a, d),
          );
      }
      function d() {
        const e = document.querySelector('#ovnOptionsPanel');
        if (e) return (e.classList.add('ovnHide'), void setTimeout(() => e.remove(), 526));
        const d = document.createElement('div');
        ((d.id = 'ovnOptionsPanel'), (d.className = 'ovnPanelBase ovnOptionBase ovnFixed'));
        const u = document.createElement('h2');
        ((u.textContent = 'Options'), d.appendChild(u));
        const v = document.createElement('div');
        v.className = 'ovnPanelBody';
        const p = g.getTree();
        Object.values(p).forEach((e) => {
          const o = i.get(e.key, !0),
            a = document.createElement('div');
          a.className = 'ovnGroupBase';
          const s = document.createElement('div');
          s.className = 'ovnGroupHead';
          const d = document.createElement('div');
          d.className = 'ovnFoldBox';
          const M = document.createElement('div');
          ((M.className = 'ovnArrow'), (M.textContent = '›'), d.appendChild(M));
          const u = document.createElement('label');
          u.className = 'ovnHeaderRow';
          const g = document.createElement('span');
          ((g.textContent = e.key), (g.style.marginRight = 'auto'));
          const p = document.createElement('input');
          ((p.type = 'checkbox'), (p.checked = o), p.classList.add('ovnStatusDot', 'ovnState', 'ovnBack'), r(p, e, o));
          const N = document.createElement('div');
          ((N.className = 'ovnGroupBody'),
            p.addEventListener('change', () => {
              const t = p.checked;
              (n.set(e.key, t), r(p, e, t), c(N, t));
            }),
            u.append(g, p),
            s.append(d, u),
            t(d, N, M, `fold_${e.key}`, e.fold ?? !1),
            e.children.forEach((n) => l(n, N, o)),
            a.append(s, N),
            v.appendChild(a));
        });
        const N = document.createElement('button');
        ((N.textContent = 'Apply'),
          (N.className = 'ovnButtonBase ovnButtonAdapt ovnApply'),
          (N.onclick = () => {
            (n.forEach((n, r) => i.set(r, n)), M.OVN.top('已应用 即将刷新', 'correct'), setTimeout(() => location.reload(), 1260));
          }));
        const m = document.createElement('button');
        ((m.textContent = 'Reset'),
          (m.className = 'ovnButtonBase ovnButtonAdapt ovnReset'),
          (m.onclick = () => {
            (o.reset(), a.clear(), M.OVN.top('已重置 即将刷新', 'correct'), setTimeout(() => location.reload(), 1260));
          }));
        const y = document.createElement('div');
        ((y.className = 'ovnButton'),
          y.append(N, m),
          d.append(v, y),
          s.bindOVN((n) => n.appendChild(d)),
          setTimeout(() => d.classList.add('ovnShow'), 20),
          setTimeout(() => {
            const n = (r) => {
              d.contains(r.target) ||
                (d.classList.add('ovnHide'),
                setTimeout(() => {
                  (d.remove(), document.removeEventListener('click', n));
                }, 526));
            };
            document.addEventListener('click', n);
          }, 100));
      }
      (GM_registerMenuCommand('👽 Options Panel', d),
        document.addEventListener('keydown', (n) => {
          n.ctrlKey && n.altKey && 'x' === n.key.toLowerCase() && (n.preventDefault(), d());
        }));
    })(),
    (function () {
      function n() {
        const n = p;
        if (!n) return void console.error('[==👽OVN==] OVN_Debug | OVN_GLOBAL_DEBUG still undefined');
        const r = document.getElementById('ovnDebugOverlay');
        if (r) return (r.classList.add('ovnHide'), void setTimeout(() => r.remove(), 0));
        const e = document.createElement('div');
        e.id = 'ovnDebugOverlay';
        const t = document.createElement('div');
        ((t.id = 'ovnDebugPanel'), (t.className = 'ovnPanelBase'));
        const o = n.getSnapshot(),
          a = (function () {
            if (!g) return {};
            const n = g.getFlat(),
              r = {},
              e = location.href;
            for (const [t, o] of Object.entries(n)) {
              if (!o.match) {
                r[t] = o;
                continue;
              }
              const n = o.compiledMatch;
              n && n.test(e) && (r[t] = o);
            }
            return r;
          })(),
          i = Object.keys(a),
          l = {};
        for (const n of i) o[n] && (l[n] = o[n]);
        const d = Object.create(null);
        for (const [n, r] of Object.entries(l)) {
          const e = n.split('_')[0];
          (d[e] || (d[e] = []), d[e].push({ key: n, val: r }));
        }
        let u = 0,
          v = 0;
        for (const n of Object.values(l)) 'done' === n.state ? u++ : v++;
        const N = `[==👽OVN==][🛸] DONE - ${u}/${u + v} | FAIL - ${v}`,
          m = document.createElement('div');
        m.className = 'ovnDebugGrid';
        const y = g.getTree(),
          L = Object.keys(y),
          h = [...L.filter((n) => d[n]), ...Object.keys(d).filter((n) => !L.includes(n))];
        for (const n of h) {
          const r = d[n];
          if (!r) continue;
          const e = document.createElement('div');
          e.className = 'ovnDebugCol';
          const t = document.createElement('div');
          ((t.className = 'ovnDebugGroupTitle'), (t.textContent = n), e.appendChild(t));
          for (const { key: n, val: t } of r) {
            const n = document.createElement('div');
            n.className = 'ovnDebugItem';
            const r = document.createElement('div');
            ((r.className = 'ovnDebugModkey'), (r.textContent = t.shortName));
            const o = document.createElement('div'),
              a = 'done' === t.state ? 'success' : 'error';
            ((o.className = 'ovnDebugStatus ovnState ovnFore'), o.setAttribute('data-ovn-state', a), (o.textContent = t.state.toUpperCase()));
            const i = document.createElement('div');
            ((i.className = 'ovnDebugLine'),
              ['block', 'match', 'state', 'chain'].forEach((n) => {
                const r = document.createElement('span');
                ((r.className = 'ovnDebugDot ovnState ovnBack'), r.setAttribute('data-ovn-state', ''));
                const e = t.steps[n];
                (!0 === e ? r.setAttribute('data-ovn-state', 'success') : !1 === e && r.setAttribute('data-ovn-state', 'error'), M.OVN.hover(r, n.toUpperCase(), void 0, void 0, 20), i.appendChild(r));
              }),
              n.append(r, o, i),
              e.appendChild(n));
          }
          m.appendChild(e);
        }
        const j = document.createElement('div');
        j.className = 'ovnDebugBottom';
        const I = document.createElement('pre');
        I.className = 'ovnObserver';
        let D = '[♾️][observer] Statistics\n';
        if (((D += '----------\n'), void 0 !== c)) {
          const n = c.getActiveCount();
          ((D += `Anonymous : ${n.anonymous}\n`), (D += `Keyed     : ${n.keyed}\n`), (D += `Total     : ${n.byTarget}\n`));
        } else D += 'Observer center not available.\n';
        I.textContent = D;
        const x = document.createElement('div');
        x.className = 'ovnDevMode ovnState ovnBack';
        const b = document.documentElement.getAttribute('data-ovn-mode') || 'Unknown';
        ((x.textContent = `DevMode | ${b}`), 'SSE' === b ? x.setAttribute('data-ovn-type', 'imp') : 'ETag' === b && x.setAttribute('data-ovn-type', 'sec'));
        const T = document.createElement('pre');
        T.className = 'ovnDebugConsole';
        const w = [];
        w.push(N);
        for (const [n, r] of Object.entries(l))
          try {
            r && r.consoleLine && 'string' == typeof r.consoleLine && w.push(r.consoleLine);
          } catch (r) {
            w.push(`[==👽OVN==][👾][-.--ms][${n}] | ERROR - ${r?.message || 'Unknown'}`);
          }
        const S = document.getElementById('ovnLog');
        if (S) {
          const n = Array.from(S.querySelectorAll('pre')).map((n) => n.textContent);
          n.length > 0 && (w.push(' '), w.push('----------'), w.push(' '), w.push(...n), w.push(' '));
        }
        ((T.textContent = w.join('\n')),
          j.appendChild(I),
          j.appendChild(x),
          j.appendChild(T),
          t.appendChild(m),
          t.appendChild(j),
          e.appendChild(t),
          s.bindOVN((n) => n.appendChild(e)),
          setTimeout(() => e.classList.add('ovnShow'), 20),
          setTimeout(() => {
            const n = (r) => {
              t.contains(r.target) ||
                (e.classList.add('ovnHide'),
                setTimeout(() => {
                  (e.remove(), document.removeEventListener('click', n));
                }, 0));
            };
            document.addEventListener('click', n);
          }, 100));
      }
      (p || void 0 !== p || console.warn('[==👽OVN==] OVN_Debug | OVN_GLOBAL_DEBUG not available yet, will retry on demand'),
        GM_registerMenuCommand('👾 Debug Panel', n),
        document.addEventListener('keydown', (r) => {
          r.ctrlKey && r.altKey && 'd' === r.key.toLowerCase() && (r.preventDefault(), n());
        }));
    })(),
    y.run('ScrollBar', () => {
      GM_addStyle('\n    \n        ::-webkit-scrollbar {\n            width: 5px !important;\n            height: 5px !important;\n            scroll-behavior: smooth !important;\n            border-radius: 100vmax !important;\n        }\n        \n        /* ========== 滑块 */\n        \n            ::-webkit-scrollbar-thumb {\n                background: hsla(var(--ovnBase05HSL), .4) !important;\n                border-radius: 100vmax !important;\n            }\n            ::-webkit-scrollbar-thumb:vertical { background-image: "" !important;}\n            ::-webkit-scrollbar-thumb:horizontal { background-image: "" !important;}\n            \n            ::-webkit-scrollbar-thumb:hover {\n                background: linear-gradient(\n                    90deg,\n                    hsla(var(--ovnGlow05HSL), 1),\n                    hsla(var(--ovnGlow05HSL), 1),\n                    hsla(var(--ovnGlow03HSL), 1)\n                ) !important;\n            }\n            \n        /* ========== 背景 */\n        \n            ::-webkit-scrollbar-track {\n                background: transparent !important;\n                border-radius: 100vmax !important;\n            }\n            \n        ::-webkit-resizer,               /* ==== 拖拽调节器 */\n        ::-webkit-scrollbar-button,      /* ==== 两端调节按钮 */\n        ::-webkit-scrollbar-corner,      /* ==== 交汇处角落方块 */\n        ::-webkit-scrollbar-track-piece  /* ==== 滑块以外轨道 */ {\n            display: none !important;\n        }\n        \n    ');
    }),
    y.run('LoaderBar', () => {
      !(function () {
        function n() {
          if (document.getElementById('ovnLoaderBar')) return;
          let n = document.createElement('div');
          function r() {
            let r = ((document.documentElement.scrollTop || document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
            n.style.width = r + '%';
          }
          ((n.id = 'ovnLoaderBar'),
            s.bindOVN((r) => r.appendChild(n)),
            document.addEventListener('readystatechange', function () {
              let e = 'interactive' === document.readyState ? 80 : 'complete' === document.readyState ? 100 : 0;
              ((n.style.width = e + '%'),
                100 === e &&
                  setTimeout(() => {
                    ((n.dataset.state = 'ovnScrollBar'), (n.style.animation = 'none'), r(), document.documentElement.scrollHeight > window.innerHeight ? (window.addEventListener('scroll', r), (n.style.display = 'block')) : (n.style.display = 'none'));
                  }, 260));
            }));
        }
        document.body
          ? n()
          : c.observe(
              document.documentElement,
              { childList: !0, subtree: !0 },
              (r, e) => {
                document.body && (e.disconnect(), n());
              },
              { onceWhen: () => null !== document.body },
            );
      })();
    }),
    y.run('Gallop', () => {
      !(function () {
        const n = 12,
          r = 0.8,
          e = 926;
        function t(n, r) {
          return Math.abs(n) > Math.abs(r) ? (n > 0 ? 'right' : 'left') : r > 0 ? 'down' : 'up';
        }
        function a(e, t = 0) {
          switch (e) {
            case 'left':
              history.length > 1 && history.back();
              break;
            case 'right':
              history.forward();
              break;
            case 'up-down':
              window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
              break;
            case 'down-up':
              window.scrollTo({ top: 0, behavior: 'smooth' });
              break;
            case 'up':
            case 'down': {
              let o = r;
              t >= n && (o = t < 426 ? 1 : t <= 926 ? 4 : 12);
              !(function (n) {
                window.scrollBy({ top: n, behavior: 'smooth' });
              })(('up' === e ? -1 : 1) * window.innerHeight * o);
              break;
            }
          }
        }
        let i = null,
          c = null,
          s = null;
        function l() {
          if (i && i.parentNode) return !0;
          i && ((i = null), (c = null), (s = null));
          const n = document.getElementById('ovnDOM') || document.body;
          return !!n && ((i = document.createElement('div')), (i.id = 'ovnGallop'), (i.style.cssText = 'display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index: var(--ovnPriority09,92926192);pointer-events:none;user-select:none;-webkit-user-select:none;cursor:default;'), (c = document.createElement('canvas')), (c.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;'), (s = c.getContext('2d')), i.appendChild(c), n.appendChild(i), !0);
        }
        let d = '';
        function u() {
          return i && 'auto' === i.style.pointerEvents;
        }
        let v = null,
          g = !1;
        function p() {
          s &&
            !g &&
            (v ||
              (v = requestAnimationFrame(() => {
                (!(function () {
                  if (!s || y.length < 2 || g) return;
                  if ((s.clearRect(0, 0, c.width, c.height), s.beginPath(), s.moveTo(y[0].x, y[0].y), 2 === y.length)) s.lineTo(y[1].x, y[1].y);
                  else {
                    for (let n = 1; n < y.length - 1; n++) {
                      const r = (y[n].x + y[n + 1].x) / 2,
                        e = (y[n].y + y[n + 1].y) / 2;
                      s.quadraticCurveTo(y[n].x, y[n].y, r, e);
                    }
                    s.lineTo(y[y.length - 1].x, y[y.length - 1].y);
                  }
                  ((s.strokeStyle = d), (s.lineWidth = 2), (s.lineCap = 'round'), (s.lineJoin = 'round'), s.stroke());
                })(),
                  (v = null));
              })));
        }
        let N = !1,
          m = !1,
          y = [],
          L = 0,
          h = 0,
          j = null;
        function I() {
          (j && (clearTimeout(j), (j = null)), window.removeEventListener('mousemove', x, !0), window.removeEventListener('mouseup', b, !0), (N = !1), (m = !1), (y = []), i && ((i.style.pointerEvents = 'none'), (i.style.display = 'none')), v && (cancelAnimationFrame(v), (v = null)), (g = !1));
        }
        function D() {
          (j && clearTimeout(j), window.removeEventListener('mousemove', x, !0), window.removeEventListener('mouseup', b, !0), (j = setTimeout(I, 200)));
        }
        function x(r) {
          if (!N) return;
          if (A) return void I();
          const t = { x: r.clientX, y: r.clientY },
            a = t.x - L,
            u = t.y - h;
          if (!m) {
            if (!(a * a + u * u > n * n)) return;
            ((m = !0),
              (function () {
                if (!l()) return;
                const n = window.devicePixelRatio || 1;
                ((c.width = window.innerWidth * n), (c.height = window.innerHeight * n), s.setTransform(n, 0, 0, n, 0, 0), (i.style.display = 'block'), (i.style.pointerEvents = 'auto'), (d = getComputedStyle(document.documentElement).getPropertyValue('--ovnGallopTrail').trim() || '#2C2C3E50'));
              })());
          }
          (r.preventDefault(), r.stopPropagation());
          const v = y[y.length - 1],
            j = t.x - v.x,
            D = t.y - v.y;
          j * j + D * D < 4 ||
            (y.push(t),
            y.length >= e &&
              !g &&
              (function () {
                if (g) return;
                ((g = !0), s && s.clearRect(0, 0, c.width, c.height));
                const n = o.gallop.get('destroy_tip', 0);
                n < 2 && (M.OVN.top('YO 👾 调皮'), o.gallop.set('destroy_tip', n + 1));
              })(),
            y.length > e && y.shift(),
            p());
        }
        function b(r) {
          if (!N) return;
          if (2 !== r.button) return;
          if ((r.preventDefault(), r.stopPropagation(), !m)) return void I();
          const e = y[y.length - 1] || { x: L, y: h },
            o = e.x - L,
            i = e.y - h,
            c = Math.sqrt(o * o + i * i);
          if (c >= n) {
            const r = (function (r) {
              if (r.length < 6) return 0;
              let e = 0,
                o = null;
              for (let a = 5; a < r.length; a += 5) {
                const i = r[a].x - r[a - 5].x,
                  c = r[a].y - r[a - 5].y;
                if (i * i + c * c < n * n) continue;
                const s = t(i, c);
                (o && s !== o && e++, (o = s));
              }
              return e;
            })(y);
            if (r > 3) return void D();
            const e = (function (n) {
              if (n.length < 6) return null;
              let r = null,
                e = null,
                t = -1;
              for (let o = 3; o < n.length; o += 3) {
                const a = n[o].y - n[o - 3].y;
                if (Math.abs(a) < 8) continue;
                const i = a > 0 ? 'down' : 'up';
                if (r) {
                  if (i !== r) {
                    ((e = i), (t = o));
                    break;
                  }
                } else r = i;
              }
              if (!e) return null;
              const o = Math.min(t, n.length - 1),
                a = Math.abs(n[o].y - n[0].y),
                i = Math.abs(n[n.length - 1].y - n[o].y);
              return a < 26 || i < 26 ? null : 'up' === r && 'down' === e ? 'up-down' : 'down' === r && 'up' === e ? 'down-up' : null;
            })(y);
            if (e) a(e);
            else {
              const n = t(o, i);
              ['left', 'right', 'up', 'down'].includes(n) && a(n, c);
            }
          }
          D();
        }
        function T(n) {
          u() && (n.preventDefault(), n.stopPropagation());
        }
        function w(n) {
          u() && (n.preventDefault(), n.stopPropagation());
        }
        function S(n) {
          u() && (n.preventDefault(), n.stopPropagation());
        }
        let A = !1;
        function z(n) {
          2 !== n.button ||
            A ||
            (function (n) {
              if (!n) return !1;
              const r = n.tagName;
              return 'INPUT' === r || 'TEXTAREA' === r || 'SELECT' === r || !!n.isContentEditable || null !== n.closest?.('[contenteditable="true"], [contenteditable=""]');
            })(n.target) ||
            (I(), window.addEventListener('mousemove', x, !0), window.addEventListener('mouseup', b, !0), (N = !0), (m = !1), (g = !1), (L = n.clientX), (h = n.clientY), (y = [{ x: n.clientX, y: n.clientY }]));
        }
        (window.addEventListener('compositionstart', () => {
          A = !0;
        }),
          window.addEventListener('compositionend', () => {
            A = !1;
          }),
          setTimeout(function n() {
            l()
              ? (window.addEventListener('contextmenu', T, { capture: !0, passive: !1 }),
                window.addEventListener('auxclick', w, { capture: !0, passive: !1 }),
                window.addEventListener('selectstart', S, { capture: !0 }),
                window.addEventListener('mousedown', z, { capture: !0, passive: !1 }),
                window.addEventListener('blur', () => {
                  N && I();
                }),
                window.addEventListener('resize', () => {
                  N && c && s && ((c.width = window.innerWidth * (window.devicePixelRatio || 1)), (c.height = window.innerHeight * (window.devicePixelRatio || 1)), s.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0));
                }))
              : setTimeout(n, 524);
          }, 524));
      })();
    }),
    y.run('QuickRead', () => {
      !(function () {
        function n({ ratio: n = 0.8, scroll: r = !0, smooth: e = !0, letter: t = !0 } = {}) {
          const o = (n) => window.scrollBy({ top: n, left: 0, behavior: e ? 'smooth' : 'auto' }),
            a = { ArrowUp: () => r && o(-window.innerHeight * n), ArrowDown: () => r && o(window.innerHeight * n) };
          (t && Object.assign(a, { w: a.ArrowUp, s: a.ArrowDown }),
            document.addEventListener(
              'keydown',
              (n) => {
                if (n.ctrlKey || n.metaKey || n.altKey) return;
                const r = n.target,
                  e = r.tagName.toLowerCase();
                if ('input' === e || 'textarea' === e || 'select' === e || r.isContentEditable) return;
                if (n.defaultPrevented) return;
                const t = a[n.key] || a[n.key.toLowerCase()];
                t && (t(), n.preventDefault());
              },
              { passive: !1 },
            ),
            s.bindOVN((n) => {
              n.setAttribute('data-ovn-read', '');
            }));
        }
        n();
      })();
    }),
    y.run('CustomICON', () => {
      !(function () {
        const r = { 'm.ssone.io': '--ovnICON-Network', 'my.ssonegames.com': '--ovnICON-Network', 'ip.skk.moe': '--ovnICON-Mecha', 'convertio.co': '--ovnICON-Transition', 'bigjpg.com': '--ovnICON-AIGC', 'acronymfinder.com': '--ovnICON-Char', 'dict.cn': '--ovnICON-Dict', 'imagecompressor.com': '--ovnICON-P', 'mermaid.live': '--ovnICON-MermaidLive', 'color.adobe.com': '--ovnICON-C', 'ticktick.com': '--ovnICON-Tick-Vint', 'dida365.com': '--ovnICON-Tick-Vint', 'yuque.com': '--ovnICON-YUQUE', 'bing.com': '--ovnICON-Microsoft', 'dillinger.io': '--ovnICON-Markdown-Line', 'chat.deepseek.com': '--ovnICON-Deepseek', 'gemini.google.com': '--ovnICON-Gemini-Vint', 'liblib.art': '--ovnICON-Liblib', 'prompts.chat': '--ovnICON-Prompt', '127.0.0.1:8188': '--ovnICON-ComfyUI', '127.0.0.1:9222': '--ovnICON-ComfyUI', 'localhost:9222': '--ovnICON-ComfyUI', 'comfyworkflows.com': '--ovnICON-Workflow', 'svgviewer.dev': '--ovnICON-SVG', '2yu7z0.smartapps.baidu.com': '--ovnICON-Music' },
          e = ['dillinger.io', 'ip.skk.moe'],
          t = n.apply('custom-icon', {});
        for (const n of t) (n && n.map && Object.assign(r, n.map), n && n.stubborn && e.push(...n.stubborn));
        const o = Object.keys(r).find((n) => window.location.host === n || window.location.host.endsWith(`.${n}`));
        let a = o ? r[o] : null;
        function i(n) {
          let r = document.querySelector("link[rel*='icon'][ovn-ICON]") || document.createElement('link');
          (r.setAttribute('ovn-ICON', 'true'), (r.rel = 'icon'), (r.href = n), (r.parentNode && r.parentNode === document.head && document.head.lastChild === r) || document.head.appendChild(r));
          r.type =
            [
              { type: 'image/svg+xml', match: (n) => n.endsWith('.svg') || n.startsWith('data:image/svg+xml') },
              { type: 'image/png', match: (n) => n.endsWith('.png') || n.startsWith('data:image/png') },
              { type: 'image/jpeg', match: (n) => /\.(jpe?g)$/i.test(n) || n.startsWith('data:image/jpeg') },
              { type: 'image/webp', match: (n) => n.endsWith('.webp') || n.startsWith('data:image/webp') },
              { type: 'image/avif', match: (n) => n.endsWith('.avif') || n.startsWith('data:image/avif') },
            ].find((r) => r.match(n))?.type || 'image/x-icon';
        }
        function s() {
          if (
            (i(a),
            c.observeWithKey(
              'CustomICON',
              document.head,
              { childList: !0, subtree: !0 },
              () => {
                const n = document.querySelector("link[rel*='icon'][ovn-ICON]");
                (n && n.href === a) || i(a);
              },
              { autoDisconnect: !0 },
            ),
            e.some((n) => window.location.host.endsWith(n)))
          ) {
            new MutationObserver(() => {
              const n = document.querySelector("link[rel*='icon']:not([ovn-ICON])");
              n && (n.remove(), i(a));
            }).observe(document.head, { childList: !0, subtree: !0, attributes: !0 });
          }
        }
        a &&
          (a.startsWith('--') &&
            (a = getComputedStyle(document.documentElement)
              .getPropertyValue(a)
              .trim()
              .replace(/^url\(["']?(.*?)["']?\)$/i, '$1')
              .replace(/["']/g, '')),
          a && (document.head ? i(a) : document.addEventListener('DOMContentLoaded', () => i(a)), 'loading' === document.readyState ? document.addEventListener('DOMContentLoaded', () => setTimeout(s, 126)) : setTimeout(s, 126)));
      })();
    }),
    y.run('Selection', () => {
      GM_addStyle('\n    \n        html ::selection {\n            color: #E2E2E2 !important;\n            background: #454A54 !important;\n        }\n        \n    ');
    }),
    y.run('FontStyle', () => {
      GM_addStyle('\n        \n            body *:not(:where(\n                .icon, .icon-wrap, .fa, .DPvwYc, path, svg, i, .google-symbols, .clear-btn_2_I2l, .block-pagination ul *,\n                .code, .pre, .inline-code, .md-code, .blob-code, .blob-code-inner, .js-file-line, .code-block, .code-container, .language-css,\n                .cm-line, .cm-line span, ne-code, ne-text, .Box-sc-g0xbh4-0.iJOeCH *, [class*="BlobViewContent-module__blobContentWrapper"] *,\n                code, code *, pre, pre *, kbd, samp, [class*="language-"], [class*="-language"], [class*="code-"], [class*="-code"], [class*="editor"], [class*="icon"], [class*="emoji"]\n            )) {\n                font-family: var(--ovnBaseFont) !important;\n            }\n            \n            :where(\n                .code, .pre, .inline-code, .md-code, .blob-code, .blob-code-inner, .js-file-line, .code-block, .code-container, .language-css,\n                .cm-line, .cm-line span, ne-code, ne-text, .Box-sc-g0xbh4-0.iJOeCH *,\n                code, code *, pre, pre *, kbd, samp, [class*="language-"], [class*="-language"], [class*="code-"], [class*="-code"]\n            ):not(:where(\n                [class*="BlobViewContent-module__blobContentWrapper"] *\n            )) {\n                font-family: var(--ovnCodeFont) !important;\n            }\n            \n            /*\n            .inline-code, .ds-markdown code, .prose :where(code):not(:where([class~=not-prose] *), pre *) {\n                padding: .126em .4em !important;\n                font-weight: 526 !important;\n                text-shadow: 0 0 .126em currentColor !important;\n            }\n            */\n            \n        ');
    }));
  y.run('Baidu', () => {
    (GM_addStyle('\r\n\r\nhtml {\r\n    \r\n    &:root body {\r\n        \r\n        --ovnBaiduRepair: -6px;\r\n        --ovnBaiduTitleR: 18px;\r\n        --ovnBaiduKeyWord: #3978d0;\r\n        --ovnBaiduBG: var(--ovnBase09HEX);\r\n        --ovnBaiduP: var(--ovnSpacePadding);\r\n        --ovnBaiduM: var(--ovnSpaceMargin);\r\n        --ovnBaiduS: var(--ovnOftenSurfaceShadowBase);\r\n        --ovnBaiduSH: var(--ovnOftenSurfaceShadowHover);\r\n        --ovnBaiduSC: var(--ovnSurfaceShadow);\r\n        --ovnBaiduT: var(--ovnOftenTransition);\r\n        --ovnBaiduZ: var(--ovnSurfaceZoomIn);\r\n        --ovnBaiduWidth: var(--ovnSpaceWidthVW);\r\n        --ovnBaiduSearch: calc(var(--ovnSpaceWidthVW) / 2 );\r\n        \r\n        --ovnBaiduRS: var(--ovnBaseRadius);\r\n        --ovnBaiduRU: var(--ovnUIRadius);\r\n        --ovnBaiduRM: var(--ovnPanelRadius);\r\n        --ovnBaiduRL: var(--ovnSurfaceRadius);\r\n        --ovnBaiduRX: var(--ovnRadiusX);\r\n        \r\n    }\r\n    \r\n    #foot,                                                                      \r\n    #searchTag,                                                                 \r\n    #content_right,                                                             \r\n    #rs_new .c-color-t[class*="rs-label_"],                                     \r\n    #container .c-container[tpl="note_lead"],                                   \r\n    #container .c-container[tpl="yl_vd_generic_new"],                           \r\n    #container .c-container[tpl="recommend_list"] .c-color-t[class*="title_"] { \r\n        display: none;\r\n    }\r\n    \r\n    \r\n    \r\n        \r\n        \r\n            #container .c-container :is(\r\n                .t *,\r\n                .c-title *,\r\n                .cosc-title-slot,\r\n                .cosc-title-slot:hover,\r\n                .cosc-title-a :is(:hover, :hover em),\r\n                [class*="video-main-title_"]:hover [class*="title-default_"],\r\n                [class*="title_"] .cos-link,\r\n                [class*="site-link_"] .custom-underline a .cosc-title-slot:hover\r\n            ), a, em, :link, a:hover, em:hover, a:hover em, a.cos-link:hover {\r\n                text-decoration: none;\r\n            }\r\n            [class*="vmp-project-new_"] [class*="vmp-project-title_"] :is(a, a em) {\r\n                text-decoration: none;\r\n            }\r\n            \r\n            #container .c-container :is(\r\n                [class*="_sc-title_"] :is(*, :hover, :hover *),\r\n                [class*="doc-title_"] :is(a:hover, &:hover em, a:hover em) \r\n            ) {\r\n                text-decoration: none !important;\r\n            }\r\n            \r\n        \r\n        \r\n            .c-container[tpl="ai_ecology"] .cos-row-col-12 > .cos-col-6,                      \r\n            .c-container .cos-swiper-list .cos-swiper-item[style*="width: 34%;"],             \r\n            .c-container .cos-swiper-list .cos-swiper-item[style*="width: calc(33% - 5px)"] { \r\n                width: 15% !important;\r\n            }\r\n            .c-container[tpl="nvl_bookstore_san"] .cos-row-col-12 > .cos-col-3,                          \r\n            .c-container[tpl="sg_kg_entity_san"] .cos-row.cos-gutter > .cos-col-3,                       \r\n            .c-container .cos-row > .cos-col[style*="width:25%"],                                        \r\n            .c-container .cos-row.bottom-gap_2aWpR.single-image_6zdhC > .cos-col[style*="width:24.5%"] { \r\n                width: 10% !important;\r\n            }\r\n            \r\n        \r\n        \r\n            .pc-fresh-smooth .cu-border:after,\r\n            .pc-fresh-smooth .c-group-wrapper::after,\r\n            .pc-fresh-smooth .cosc-card-shadow:after,\r\n            .pc-fresh-smooth .new-pmd .c-border::after {\r\n                border: transparent;\r\n            }\r\n            \r\n            .pc-fresh-smooth [class*="jr-exrate-pc-wrapper_"] {\r\n                outline: transparent;\r\n            }\r\n            \r\n        \r\n        \r\n            .cu-border,\r\n            .new-pmd .c-border,\r\n            .cosc-card-shadow,\r\n            [class*="re-box-shadow_"],\r\n            [class*="pc-first-style_"] {\r\n                box-shadow: none;\r\n            }\r\n            \r\n        .wrapper_new { background: var(--ovnBaiduBG);}\r\n        .cos-button { border-radius: var(--ovnBaiduRM); }\r\n        \r\n        \r\n    \r\n    \r\n        :where(#head) {\r\n            \r\n            --ovnBaiduXXX: hsla(var(--ovnPrimaryHSL), .5);\r\n            \r\n        }\r\n        \r\n        \r\n    \r\n    \r\n        \r\n        \r\n        #wrapper_wrapper {\r\n            \r\n            margin: 0 auto;\r\n            width: var(--ovnBaiduWidth);\r\n            \r\n            #container {\r\n                width: 100%;\r\n                padding: 0;\r\n                margin: 0 auto;\r\n            }\r\n            #container #content_left {\r\n                width: 100%;\r\n                padding: 0 !important;     \r\n                margin: 0 auto !important; \r\n            }\r\n            \r\n        }\r\n        \r\n        :where(#wrapper) {\r\n            \r\n            \r\n            \r\n                --ovnBaiduMdT: 15px;\r\n                --ovnBaiduMdC: 14px;\r\n                --ovnBaiduMdH: 1.5em;\r\n                \r\n                --cos-leading-caption-sm: var(--ovnBaiduMdT);\r\n                --cos-text-body-lg-higher: var(--ovnBaiduMdC);\r\n                \r\n                .cosd-markdown .marklang h3,\r\n                [class*="accordion-panels-link_"] [class*="accordion-panels-title_"] {\r\n                    font-size: 15px;\r\n                    font-weight: bold;\r\n                    line-height: 1.5;\r\n                }\r\n                \r\n                [class*="follow-up-guide_"],\r\n                .cosd-markdown .marklang .marklang-paragraph,\r\n                [class*="baikan-pc-experiment_"] .cosd-markdown .marklang,\r\n                [class*="pc-content-container_"] .cosd-markdown .marklang {\r\n                    font-size: 14px;\r\n                }\r\n                \r\n                [class*="follow-up-guide_"],\r\n                .cosd-markdown .marklang li,\r\n                .cosd-markdown .marklang .marklang-paragraph {\r\n                    line-height: var(--ovnBaiduMdH);\r\n                }\r\n                \r\n                .marklang ol li, .marklang ul li {\r\n                    min-height: var(--ovnBaiduMdH);\r\n                }\r\n                \r\n                .cos-accordion [class*="accordion-panels-link-header_"] div span {\r\n                    font-weight: bold;\r\n                }\r\n                \r\n            \r\n            [class*="title-wrapper_"] [class*="prefix-icon_"] {\r\n                position: absolute;\r\n                right: 0;\r\n                transform: scale(.8);\r\n            }\r\n            \r\n            \r\n            \r\n                :where(.c-container) {\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="ms_new_calc"] {\r\n                        \r\n                            .new-pmd { width: 60%; margin: 20px auto; }\r\n                            .calc-oprate_24c8k { display: flex; justify-content: space-evenly; }\r\n                            .calc-oprate_24c8k .func-calc_3t0OK { width: 60%;}\r\n                            \r\n                            .calc-box_1qoea {\r\n                                box-shadow: \r\n                                    inset 1px 1px 1px 0px rgba(255, 255, 255, 0.8),\r\n                                    inset -1px -1px 1px 0px rgba(40, 49, 85, 0.3),\r\n                                    1px 1px 3px 0px rgba(40, 49, 85, 0.1);\r\n                            }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="ms_calendar_san"] {\r\n                        \r\n                            &.new-pmd { width: 60%; min-width: 600px; margin: 20px auto; }\r\n                            ._bg-header_1ml43_46 { width: 99%; top: -5px; left: 5px; }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="world_time_san"] {\r\n                        \r\n                            .source_4yrHg { position: absolute; bottom: 5px; }\r\n                            ._paragraph_1g9za_2.md, .sc-source-text { color: #FFF; }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="jr_exrate_san"] {\r\n                        \r\n                            .aladdin_3Tvaz .bg-header_G63NE { top: calc(-10px + var(--ovnBaiduRepair)); }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="ms_measures_san"] {\r\n                        \r\n                            .cosc-card-light-bg { top: -18px; }\r\n                            .cosc-card-horizontal-gradient { width: 110%; background-position: center; }\r\n                            \r\n                        }\r\n                        \r\n                }\r\n                \r\n            \r\n            \r\n                #container {\r\n                    \r\n                    :is(.new-pmd.c-container, .new-pmd.xpath-log, .new-pmd[tpl="app/rs"]) {\r\n                        box-sizing: border-box;\r\n                        position: relative;\r\n                        padding: var(--ovnBaiduP);\r\n                        margin: var(--ovnBaiduM);\r\n                        width: 100% !important; \r\n                        font-size: 12px;\r\n                        background: #FFFFFF;\r\n                        box-shadow: var(--ovnBaiduS);\r\n                        border-radius: var(--ovnBaiduRL);\r\n                        transition: var(--ovnBaiduT);\r\n                    }\r\n                    :is(.new-pmd.c-container, .new-pmd.xpath-log, .new-pmd[tpl="app/rs"]):hover {\r\n                        z-index: 2;\r\n                        box-shadow: inset 0 0 2px hsla(0, 0%, 92%, .6), var(--ovnBaiduSH);\r\n                        transform: var(--ovnBaiduZ);\r\n                    }\r\n                    #content_left > :first-of-type:hover,           \r\n                    .new-pmd[tpl="yl_ps_main"]:hover,               \r\n                    .new-pmd[tpl="yl_ps_relationship"]:hover,       \r\n                    .new-pmd[tpl="ai_ask"]:hover,                   \r\n                    .new-pmd[tpl="wenda_generate"]:hover,           \r\n                    .new-pmd[tpl="app/rs"]:hover,                   \r\n                    .new-pmd[tpl="recommend_list"]:hover,           \r\n                    .new-pmd[tpl*="jr_stock"]:hover,                \r\n                    .new-pmd[tpl*="jr_quote"]:hover,                \r\n                    .new-pmd[tpl="jr_exchange_rate"]:hover,         \r\n                    .new-pmd[tpl="new_baikan_index"]:hover,         \r\n                    .new-pmd[tpl="guanfanghao_san"]:hover,          \r\n                    .new-pmd[tpl="image_grid_san"]:hover,           \r\n                    .new-pmd[tpl="fy_sg_dict_new_san"]:hover,       \r\n                    .new-pmd[tpl="sg_kg_entity_san"]:hover,         \r\n                    .new-pmd[tpl="bk_polysemy"]:hover,              \r\n                    .new-pmd[tpl="jy_wenku_wenshu"]:hover,          \r\n                    .new-pmd[tpl="xueshu_links_new"]:hover,         \r\n                    .new-pmd[tpl="med_wenzhen_san"]:hover,          \r\n                    .new-pmd[tpl="med_aigc_guru_san"]:hover,        \r\n                    .new-pmd[tpl="med_doctor_same_name_san"]:hover, \r\n                    .new-pmd[tpl="ai_agent_qa_recommend"]:hover,    \r\n                    .new-pmd[tpl="yl_rw_figure_sample_san"]:hover { \r\n                        transform: none;\r\n                    }\r\n                    \r\n                    \r\n                    &.sam_newgrid #content_left .result-op, &.sam_newgrid #content_left .result {\r\n                        margin-bottom: 0;\r\n                    }\r\n                    \r\n                }\r\n                \r\n                #container .new-pmd {\r\n                    \r\n                    .recommend-none-border { display: flex; gap: 20px; }\r\n                    .c-gap-top-middle { margin-top: 0; }\r\n                    \r\n                    \r\n                    \r\n                        \r\n                        \r\n                        \r\n                        \r\n                        \r\n                        \r\n                        \r\n                        \r\n                        &[tpl="ai_index"],\r\n                        &[tpl="wenda_generate"],\r\n                        &[tpl="new_baikan_index"] {\r\n                            \r\n                            [class*="nbk-index_"] [class*="content-folded_"] {\r\n                                max-height: 526px !important; \r\n                            }\r\n                            [class*="cosd-fold-switch-mask_"] { border-radius: 0 0 var(--ovnBaiduRL) var(--ovnBaiduRL); }\r\n                            [class*="cosd-fold-switch_"] { padding: 20px 0 0; }\r\n                            [class*="follow-up_"] { margin-top: 30px; }\r\n                            [class*="follow-up-guide_"] { margin-bottom: 24px; }\r\n                            \r\n                            \r\n                            \r\n                            \r\n                            \r\n                            [style*="--cardBg"] { margin-top: -13px; }\r\n                            [class*="card-border_"] { border-color: transparent; }\r\n                            \r\n                            \r\n                            .cosc-card-light-bg:not([tpl="wenda_generate"] div) { top: var(--ovnBaiduRepair); }\r\n                            .cosd-markdown .marklang .marklang-paragraph { line-height: 1.5; }\r\n                            \r\n                            .cosc-card-shadow { padding: 10px var(--cos-space-md) 10px; }\r\n                            \r\n                        }\r\n                        &[tpl="ai_index"] {\r\n                        \r\n                            [class*="_aladdin"] {\r\n                                width: 97%;\r\n                                margin: 0 auto;\r\n                                padding: 0;\r\n                            }\r\n                            \r\n                            [class*="swiper-box_"] {\r\n                                width: 102.6%;\r\n                                margin: -10px auto;\r\n                                margin-left: -20px;\r\n                                box-shadow: none;\r\n                                border-radius: var(--ovnBaiduRM);\r\n                            }\r\n                            [class*="_bg-header_"] { overflow: visible; }\r\n                            [class*="_horizontal-gradient_"] {\r\n                                width: 102.6%;\r\n                                margin: 3px auto;\r\n                                margin-left: -20px;\r\n                                background-size: 110% 100% !important;\r\n                                background-position: top center !important;\r\n                                border-radius: var(--ovnBaiduRM);\r\n                            }\r\n                            \r\n                        }\r\n                        &[tpl="wenda_generate"] {\r\n                        \r\n                            padding-top: var(--ovnBaiduTitleR);\r\n                            [class*="cos-dqa-group-bg_"] .cosc-card-light-bg {\r\n                                top: -15px;\r\n                                left: -15px;\r\n                                right: -15px;\r\n                            }\r\n                            \r\n                            \r\n                            [class*="audio_"] { margin-top: 0; }\r\n                            \r\n                        }\r\n                        &[tpl="new_baikan_index"] {\r\n                            \r\n                            padding-top: var(--ovnBaiduTitleR);\r\n                            padding-bottom: 0;\r\n                            \r\n                            \r\n                            \r\n                            \r\n                            \r\n                            [class*="nbk-index_"] .cosd-markdown .marklang ul > li:before { top: 7px; }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="fy_fanyi_ai_san"],\r\n                        &[tpl="fy_sg_dictwisenew_san"] {\r\n                        \r\n                            h3.cosc-title { background: transparent; }\r\n                            [class*="dict-card_"] .cosc-card { padding-top: 0 !important; }\r\n                            \r\n                            [class*="daoliu-con_"] { margin-top: 15px; }\r\n                            [class*="footer_"] { margin-top: -5px; }\r\n                            \r\n                            .cosc-card-content { margin-top: var(--ovnBaiduRepair); }\r\n                            .cosc-card-light-bg:not([tpl="wenda_generate"] div) { top: var(--ovnBaiduRepair); }\r\n                            \r\n                        }\r\n                        &[tpl="fy_sg_dict_new_san"],\r\n                        &[tpl="fy_sg_dictwisenew_san"] {\r\n                            \r\n                            .cosc-card-shadow {\r\n                                padding-top: 10px;\r\n                                padding-bottom: 5px;\r\n                            }\r\n                            .cos-swiper-item { max-width: 15%; }\r\n                            [class*="video-wrap_"] .ovnFocal { display: none; }\r\n                            \r\n                        }\r\n                        &[tpl="fy_sg_dict_new_san"] {\r\n                            \r\n                            padding-top: var(--ovnBaiduTitleR);\r\n                            \r\n                            .cos-divider { height: 0px; }\r\n                            .cos-space-mt-sm { margin-top: 0; }\r\n                            \r\n                            \r\n                        }\r\n                        &[tpl="fy_sg_dictwisenew_san"] {\r\n                        \r\n                            h3.cosc-title, h3.cosc-title[class*="pc-title_"] {\r\n                                margin-bottom: -5px;\r\n                                background: transparent;\r\n                            }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="bk_polysemy"] {\r\n                        \r\n                            .c-span9 { width: calc(100% - 150px - 20px); }\r\n                            .c-span12 { width: 100%; }\r\n                            \r\n                        }\r\n                        &[tpl="yl_ps_main"] {\r\n                        \r\n                            [class*="matting-container_"] { width: 3rem; }\r\n                            \r\n                        }\r\n                        &[tpl="sg_kg_entity_san"] {\r\n                            \r\n                            .c-span9 { width: 85%; }\r\n                            [class*="button_"] [class*="content_"] { \r\n                                color: var(--ovnBaiduKeyWord);\r\n                            }\r\n                            \r\n                            \r\n                            .cos-swiper-list { justify-content: space-around; }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="jy_wenku_wenshu"] {\r\n                        \r\n                            [class*="title-wrapper_"] [class*="front-icon_"] { z-index: 1; font-size: 15px; }\r\n                            \r\n                            \r\n                            [class*="doc-title_"] { background: transparent; }\r\n                            \r\n                            \r\n                            [class*="_paragraph_"].sm { font-size: 14px; }\r\n                            \r\n                        }\r\n                        &[tpl="www_index"][mu*="https://wenku.baidu.com/"] {\r\n                        \r\n                            \r\n                            \r\n                                [class*="title-box_"]:has([class*="front-icon_"]) .t { padding-left: 50px; }\r\n                                [class*="title-wrapper_"] [class*="front-icon_"] {\r\n                                    position: absolute;\r\n                                    transform: scale(.5);\r\n                                    left: -18px;\r\n                                }\r\n                                \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="jy_hy_zi_broad_san"],\r\n                        &[tpl="jy_hy_zi_attr_san"],\r\n                        &[tpl="jy_hy_zi_accu_san"] {\r\n                            \r\n                            h3.t { background: transparent; }\r\n                            \r\n                            \r\n                            \r\n                                [class*="bg-header_"], [class*="bg-header_"][class*="_bg-header_"] {\r\n                                    width: 102%;\r\n                                    top: -6px;\r\n                                    left: -15px;\r\n                                }\r\n                                [class*="bg-header_"][class*="_bg-header_"] {\r\n                                    width: 99.26%;\r\n                                    top: -15px;\r\n                                    left: 615px;\r\n                                }\r\n                                [class*="bg-header_"] [class*="radial-gradient-right_"] {\r\n                                    opacity: .6;\r\n                                    left: 40%;\r\n                                    width: 60%;\r\n                                }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="image_grid_san"] {\r\n                        \r\n                            h3.cosc-title { margin: 0px -20px; background: transparent; }\r\n                            h3.cosc-title > a.ovnFocal.ovnLR { display: inline-block; }\r\n                            [class*="image-container_"][class*="image-container-pc_"] { display: flex; gap: 40px; }\r\n                            [class*="image-container_"] [class*="row-border-list_"] { gap: 20px; }\r\n                            .cos-image-background { border-radius: var(--ovnPanelRadius); }\r\n                            \r\n                            \r\n                            [class*="container_"] [class*="head_"] {\r\n                                overflow: visible;\r\n                                margin-right: 0;\r\n                            }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="tieba_general"] {\r\n                        \r\n                            .cos-space-mt-md { width: 96%; }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="xueshu_links_new"] {\r\n                        \r\n                            .c-tabs-nav { background: transparent; }\r\n                            .c-tabs-nav .c-tabs-nav-li { margin: 0; }\r\n                            .c-tabs-nav .c-tabs-nav-selected { background: #F5F5F6; }\r\n                            .op-xueshu-links-new-d20-source { margin-top: 20px; }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="weather_forecast_san"] {\r\n                        \r\n                            --ovnX: 10px;\r\n                            \r\n                            [class*="content-border_"] { box-shadow: none; }\r\n                            \r\n                            \r\n                            \r\n                                [class*="load_"][class*="back_"] { left: var(--ovnX); }\r\n                                [class*="load_"][class*="more_"] { right: var(--ovnX); }\r\n                                \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="car_kg2_san"] {\r\n                        \r\n                            --ovnX: 10px;\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="med_aigc_guru_san"] {\r\n                        \r\n                            [class*="medAigcPcCard_"] { margin-top: 10px; }\r\n                            \r\n                        }\r\n                        \r\n                        &[tpl="med_doctor_same_name_san"] {\r\n                            \r\n                            \r\n                            .cosc-card-content > div > .cos-line-clamp-1 {\r\n                                overflow: visible;\r\n                                margin-top: -18px;\r\n                            }\r\n                            \r\n                            [class*="afterFiveWrap_"] > [class*="doctorItem_"] { margin-top: 20px; }\r\n                            .cos-more-link { margin: 15px 0; }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="yl_ps_main"] {\r\n                        \r\n                            [class*="aladdin_"] { margin-top: -5px; }\r\n                            [class*="_content-border_"] { padding: 0 15px; }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="yl_music_song"] {\r\n                        \r\n                            --ovnX: 1260px;\r\n                            \r\n                            [class*="table-container_"] [class*="table-thead_"] [class*="th-num_"],\r\n                            [class*="table-container_"] [class*="table-tbody_"] [class*="td-num_"] {\r\n                                width: var(--ovnX);\r\n                            }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="game-page-pandemand"] {\r\n                        \r\n                            .content[class*="content-info_"] {\r\n                                display: grid;\r\n                                justify-items: center;\r\n                            }\r\n                            .content[class*="content-info_"] > [class*="tab-wrapper_"] {\r\n                                grid-column: 1 / 3;\r\n                                text-align: center;\r\n                            }\r\n                            .content[class*="content-info_"] > .c-row.c-gap-top-large:last-of-type { display: none; }\r\n                            .c-row.c-gap-top-large > .c-span2 { margin-right: 35px; }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="rel-baike"] {\r\n                        \r\n                            [class*="rel-baike_"] [class*="lemma-item_"] { margin: 0; }\r\n                            [class*="rel-baike_"] [class*="default-baike_"][class*="scroll-bar_"] {\r\n                                display: flex;\r\n                                margin: 15px 0 5px 0;\r\n                            }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="ai_ecology"] {\r\n                        \r\n                            --ovnX: 12%;\r\n                            \r\n                            .cos-row-col-12 > .cos-col-3 { width: var(--ovnX); }\r\n                            [class*="card-footer-normal"] { left: calc(var(--ovnX) - 15px/4); }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="yl_rw_figure_sample_san"] {\r\n                        \r\n                            [class*="movie_"][class*="single_"] [class*="cosc-image-with-tags_"] { width: 10%; }\r\n                            [class*="list_"] [class*="movie-item_"], [class*="list_"] [class*="music-item_"] {\r\n                                width: calc(10% - var(--space-between)) !important;\r\n                            }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="sp_purc_pc"] {\r\n                        \r\n                            h3 { margin: -22px -20px 10px -20px; } \r\n                            [class*="content-wrap_"] > div[style*="display: block"] {\r\n                                display: flex !important;\r\n                                justify-content: space-evenly;\r\n                            }\r\n                            [class*="row_"] { margin: 0; }\r\n                            [class*="sp_purc_pc-sku-item_"] { margin: 15px 40px 15px 0; }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="rel_base_realtime"] {\r\n                        \r\n                            img { border-radius: var(--ovnBaseRadius); }\r\n                            .cos-image-3-2 { padding-bottom: 25%; mask-image: linear-gradient(to bottom, #000 95%, transparent 100%); }\r\n                            .cos-image-fit-cover .cos-image-background { background-size: contain; }\r\n                            \r\n                            .cos-row.cos-gutter:not(:has(.cos-col-3)) { margin-left: calc(var(--cos-grid-gutter) * -.5 + 25%); }\r\n                            .cos-space-mt-md:not(:has(.cos-col-3)) .cos-row.cos-gutter { margin-left: 0; }\r\n                            \r\n                        }\r\n                        \r\n                        &[tpl="yl-vd-basis"] {\r\n                        \r\n                            .c-span9 { width: max-content; }\r\n                            \r\n                        }\r\n                        &[tpl="rel_base_realtime"] {\r\n                        \r\n                            img { border-radius: var(--ovnBaseRadius); }\r\n                            .cos-image-3-2 { padding-bottom: 25%; mask-image: linear-gradient(to bottom, #000 95%, transparent 100%); }\r\n                            .cos-image-fit-cover .cos-image-background { background-size: contain; }\r\n                            \r\n                            .cos-row.cos-gutter:not(:has(.cos-col-3)) { margin-left: calc(var(--cos-grid-gutter) * -.5 + 25%); }\r\n                            .cos-space-mt-md:not(:has(.cos-col-3)) .cos-row.cos-gutter { margin-left: 0; }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="short_video"] {\r\n                        \r\n                            .content_LHXYt > div { display: flex; gap: 20px; }\r\n                            .content_LHXYt .c-row { display: flex; gap: 20px; }\r\n                            .c-gap-top-large, .c-span4 { margin: 0; }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="ai_agent_distribute"] {\r\n                        \r\n                            .card-title_6qPL6 { width: 100%; }\r\n                            .content_EbWw1 .common-content_4dXMi { width: 95%; }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="ai_agent_qa_recommend"] {\r\n                            \r\n                            \r\n                            \r\n                                .cos-space-mt-lg { margin-top: 0; }\r\n                                .agent-qa-card_3V5cX .card-title_2GtKe { margin: 10px 0; }\r\n                                \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="news-realtime"] {\r\n                        \r\n                            .single-card-wrapper_2nlg9 {\r\n                                display: flex;\r\n                                justify-content: flex-start;\r\n                                border-radius: var(--ovnSurfaceRadius);\r\n                                box-shadow: none;\r\n                            }\r\n                            .single-card-wrapper_2nlg9 > .c-row { display: flex; }\r\n                            .single-card-wrapper_2nlg9 > .c-row:last-of-type { display: none; }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="jr_quote"] {\r\n                            \r\n                            padding-top: var(--ovnBaiduTitleR);\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[mu*="https://wenku.baidu.com/"] {\r\n                        \r\n                            ._image_14uts_1 {\r\n                                background-size: contain !important;\r\n                                padding-bottom: 25% !important;\r\n                            }\r\n                            \r\n                        }\r\n                        \r\n                    \r\n                    \r\n                        &[tpl="recommend_list"] {\r\n                        \r\n                            .pc-rg-upgrade_2X3zi .item_3WKCf {\r\n                                margin: 5px !important;\r\n                                color: var(--ovnBaiduKeyWord);\r\n                            }\r\n                            \r\n                        }\r\n                        &[tpl="app/rs"] {\r\n                        \r\n                            padding: var(--ovnSpacePadding) !important;\r\n                            margin: var(--ovnSpaceMargin) !important;\r\n                            \r\n                            #rs_new { margin: 0; width: 100%; }\r\n                            #rs_new table { margin: 20px auto; }\r\n                            #rs_new table tr { display: flex; gap: 40px; }\r\n                            #rs_new table tr .rs-link_2DE3Q { color: var(--ovnBaseColor);}\r\n                            \r\n                        }\r\n                        \r\n                }\r\n                \r\n        }\r\n        \r\n        \r\n    \r\n    \r\n        :where(#page) {\r\n            \r\n            margin-top: 40px;\r\n            width: 100%;\r\n            background: transparent !important; \r\n            \r\n        }\r\n        \r\n        #page {\r\n            \r\n            &.page-sample {\r\n                padding: 40px 0;\r\n                margin: 0;\r\n            }\r\n            \r\n            a:hover, a:hover .pc, .n:hover, a { color: var(--ovnBaiduKeyWord); }\r\n            a:hover, a:hover .pc, .n:hover {\r\n                background: transparent;\r\n                box-shadow: var(--ovnBaiduSC) hsla(var(--ovnAccentHSL), .2);\r\n            }\r\n            \r\n            \r\n            [class*="page-inner_"] {\r\n                padding: 0 !important;         \r\n                margin: 10px auto !important;  \r\n                width: max-content !important; \r\n            }\r\n            \r\n        }\r\n        \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    html {\r\n        \r\n            \r\n        /* ========== ↓ 修正标题间隙 */\r\n        \r\n            .pc-fresh-smooth .new-pmd .c-border /* 初始生效 全网热卖 */ {\r\n                padding-top: 0;\r\n            }\r\n            \r\n        /* ========== ↓ 修正标题动画 */\r\n        \r\n            .pc-fresh-title-con .custom-underline > .cosc-title-a {\r\n                display: inline-block;\r\n            }\r\n            \r\n    }\r\n        \r\n/* ================================================== ↓ Head */\r\n\r\n    html .wrapper_new #head { \r\n        top: 0;\r\n        width: 100%;\r\n        background: var(--ovnGlassBase) !important;\r\n        backdrop-filter: var(--ovnPanelFilter);\r\n        transition: var(--ovnOftenTransition);\r\n    }\r\n    html .wrapper_new #head.peak-down { background: transparent; }\r\n    html .wrapper_new #head.s_down { box-shadow: var(--ovnGlassShadow); }\r\n    \r\n    html #wrapper #head:not(.s-manhattan-index div, .s_form_nologin div) {\r\n    \r\n        .head_wrapper {\r\n            display: flex;\r\n            justify-content: space-around;\r\n            transform: translate3d(-15px, 0 , 1px);\r\n            width: 100%;\r\n        }\r\n        \r\n        /* ========== ↓ 用户中心 */\r\n        \r\n            .head_wrapper #u {\r\n                position: fixed;\r\n                right: 40px;\r\n                padding: 0;\r\n            }\r\n            \r\n        /* ========== ↓ 搜索框 */\r\n        \r\n            .s_form {\r\n                display: flex;\r\n                justify-content: center;\r\n                padding: 0;\r\n                width: auto;\r\n            }\r\n            .s_ipt_wr { width: var(--ovnBaiduSearch); }\r\n            .s_form_fresh { width: inherit; padding: 0; }\r\n            .bdsug-new { width: var(--ovnBaiduSearch); }\r\n            .soutu-env-new .soutu-layer .soutu-url-wrap, .soutu-env-new .soutu-layer #soutu-url-kw { width: var(--ovnBaiduSearch); }\r\n            \r\n            #kw.s_ipt { width: 87%; }\r\n            \r\n    }\r\n    \r\n    /* ========== ↓ 分类 */\r\n    \r\n        html .result-molecule.new-pmd:has(#s_tab) {\r\n            --container-left-gap: auto;\r\n            display: flex;\r\n            justify-content: center;\r\n        }\r\n        \r\n        html #wrapper .new-pmd[tpl="app/head-tab"] {\r\n        \r\n            #s_tab {\r\n                display: flex;\r\n                justify-content: center;\r\n                border: none;\r\n                padding-top: 70px;\r\n                padding-left: 0;\r\n            }\r\n            \r\n            #s_tab .s_tab_inner {\r\n                display: flex;\r\n                justify-content: space-between;\r\n                width: calc(var(--ovnBaiduSearch) + 260px);\r\n                min-width: 920px;\r\n                padding-left: 0;\r\n            }\r\n            \r\n        }\r\n        \r\n    /* ========== ↓ 检索信息 搜索框下 */\r\n    \r\n        html #rs_top_new, html .hit-toptip, html .hit_top_new {\r\n            opacity: .6;\r\n            display: flex;\r\n            justify-content: center;\r\n            margin: 20px 0 10px;\r\n            width: auto;\r\n        }\r\n        \r\n        html #wrapper .new-pmd[tpl="app/search-tool"] {\r\n        \r\n            br { display: none; }\r\n            \r\n            /* ========== ↓ 筛选信息 */\r\n            .outer_wqJjM { margin-top: 10px;}\r\n            .options_2Vntk { opacity: .8; width: 90%; margin: 0 auto;}\r\n            \r\n        }\r\n        \r\n        html #wrapper .new-pmd[tpl="app/toptip"] {\r\n        \r\n            br { display: none; }\r\n            .c-gap-bottom-large { margin-bottom: 0px; }\r\n            \r\n        }\r\n        \r\n        html #wrapper .new-pmd[tpl="app/hit-top-new"] {\r\n        \r\n            br { display: none; }\r\n            .c-icon-bear-circle { transform: scale(.8); }\r\n            \r\n        }\r\n        \r\n        /* ========== ↓ 以商家官网为准 */\r\n        html #content_left > .k8vt8hp {\r\n            opacity: .5;\r\n            margin: 0 auto; /* margin-top: -1.2em; */\r\n            margin-top: 10px;\r\n            width: max-content;\r\n        }\r\n        \r\n        \r\n/* ================================================== ↓ Content */\r\n\r\n\r\n    /* ========== ↓ 模块 标题 */\r\n    \r\n        html #wrapper #container h3:not( \r\n            .cos-space-mt-md h3,\r\n            [class*="doctorName_"] > h3,\r\n            [class*="card-title_"] > h3,\r\n            [class*="exta-links-pc_"] > h3,\r\n            [class*="exta-link-pc_"] > h3,\r\n            .c-container[tpl="world_time_san"] h3,\r\n            .c-container[tpl="fy_sg_dict_new_san"] h3,\r\n            .c-container[tpl="wenda_generate"] h3,\r\n            .c-container[tpl="jr_quote"] h3,\r\n            .c-container[tpl="fy_fanyi_ai_san"] h3,\r\n            .c-container[tpl="jr_stock_comment_san"] h3\r\n        ) {\r\n            padding: var(--ovnSpacePadding);\r\n            margin: -10px -20px 10px -20px;\r\n            width: 100%;\r\n            background: var(--ovnBase09HEX);\r\n            border-radius: var(--ovnSurfaceRadius) var(--ovnSurfaceRadius) 5px 5px;\r\n        }\r\n        html .cos-pc .title-box_4YBsj { width: 100%; }\r\n        html .cos-pc .title-wrapper_6E6PV { margin-top: -10px; }\r\n        html .cos-pc .title-wrapper_6E6PV .pre-text_6ulGP { z-index: 1; }\r\n        html ._link_1iyz5_2 { margin-bottom: 0; }\r\n        \r\n        /* ========== ↓ 标题字号 */\r\n        \r\n            html a, html a:hover,\r\n            html a.cos-link, html a.cos-link:hover { color: var(--ovnBaiduKeyWord); }\r\n        \r\n            html .cosc-title-md,\r\n            html ._paragraph_10ku5_2.md,\r\n            html ._paragraph_1g9za_2.md,\r\n            html #wrapper #container.sam_newgrid .c-group-title a,\r\n            html #wrapper #container.sam_newgrid .c-container .t,\r\n            html #wrapper #container.sam_newgrid .c-container .c-title,\r\n            html #wrapper #container.sam_newgrid .xpath-log.new-pmd .c-title,\r\n            html #wrapper #container.sam_newgrid .c-container ._paragraph_1g9za_2.lg {\r\n                color: var(--ovnBaiduKeyWord);\r\n                font-size: 15px;\r\n                font-weight: bold;\r\n                line-height: 1.5;\r\n            }\r\n            \r\n        /* ========== ↓ 官方标 */\r\n        \r\n            html .cos-pc .title-wrapper_6E6PV .suffix-icon_3Ox2w { position: absolute; right: calc(20px - 25px); /* 减去模块内边距 */ }\r\n            html .cos-pc .title-wrapper_6E6PV .suffix-icon_3Ox2w .www-tag-fill-blue_3n0y3 { border-radius: var(--ovnUIRadius); }\r\n            \r\n            html #wrapper #container .c-container[tpl="vmp_offical_website"] {\r\n            \r\n                .header_CIV6C:has(h3.t) { margin-top: -10px; }\r\n                \r\n                .header_CIV6C a.official-label_26SUN { position: absolute; right: calc(20px - 20px); }\r\n                \r\n            }\r\n            \r\n        /* ========== ↓ 标题 icon */\r\n        \r\n        html .front-icon_7wpfB { z-index: 999;}\r\n        \r\n        \r\n        \r\n/* ================================================== ↓ Other */\r\n\r\n    /* ---------- ↓ 修正模块距离 */\r\n    html .cos-pc .aladdin-struct_r13eS { margin: 10px 0; }\r\n    \r\n    /* ========== ↓ 内容块 -> 内容 距离 */\r\n    \r\n        html ._content-border_1ml43_4:not([tpl="jy_hy_zi_accu_san"] ._content-border_1ml43_4) {\r\n            padding: 0 20px;\r\n            margin: 10px -20px;\r\n            /* padding: var(--ovnSpacePadding);\r\n            margin: 0 -20px; */\r\n        }\r\n        \r\n        /* ========== ↓ 内容块 -> 内容 宽度 */\r\n        html #wrapper #container .c-container[tpl="www_index"] {\r\n        \r\n            .cos-row .cos-col.content-space-between_44mGk[style*="width:75%;"] {\r\n                width: 89% !important;\r\n            }\r\n            \r\n        }'), L.apply({ target: [".c-container [data-module='title']", ".c-container [class^='title_']", ".c-container h3[class*='title'] a"], subjoin: ['ovnFocal', 'ovnLR'] }), l.match({ include: ['*chat.baidu.com/*'], exclude: [] }) && GM_addStyle('\n        \n            html {\n                \n                &:root body {\n                    \n                    --ovnChatWidth: calc(var(--ovnSpaceWidthVW) - 00vw);\n                    \n                    &.cos-pc {\n                        --max-conv-width: var(--ovnSpaceWidth02);\n                    }\n                    \n                }\n                \n            }\n            \n        '), l.match({ include: ['*baike.baidu.com/*'], exclude: [] }) && GM_addStyle('\n        \n            html {\n                \n                &:root body {\n                    --ovnBaikeWidth: calc(var(--ovnSpaceWidthVW) - 05vw);\n                }\n                \n                @media (width >= 2160px) {\n                    \n                    /* ==================== ↓ Head */\n                    \n                        .index-module_navBarWrapper__X0DND .index-module_navBarList__iL2jR, \n                        .secondContainer_gkFgZ .secondContent_qd184 {\n                            width: var(--ovnBaikeWidth);\n                        }\n                        .videoListWrap_kQdph.show_c8fQR {\n                            opacity: 1;\n                            visibility: visible;\n                            z-index: 2;\n                            max-width: 1120px !important;\n                        }\n                        .videoListWrap_kQdph .videoListBox_ylJPb {\n                            width: 100% !important;\n                            max-width: 100%;\n                        }\n                        .swiper-slide { flex-shrink: revert; }\n                        \n                    /* ==================== ↓ XXX */\n                    \n                        .pageWrapper_P6xcA .contentBox_cyrt9 { width: var(--ovnBaikeWidth); }\n                        .pageWrapper_P6xcA .mainContent_Zy94E { width: 75%; }\n                        \n                }\n                \n            }\n            \n        '));
  });
  y.run('Google', () => {
    (GM_addStyle('\r\n\r\nhtml:has(#main [role="listitem"] > a[tabindex="0"]) {\r\n    \r\n    &:root body {\r\n        \r\n        --ovnGoogleICON: 50px;\r\n        --ovnGoogleLine: #00000009;\r\n        --ovnGoogleSearch: calc(var(--ovnGoogleWidth) / 1.5);\r\n        \r\n        --ovnGoogleRS: var(--ovnBaseRadius);\r\n        --ovnGoogleRU: var(--ovnUIRadius);\r\n        --ovnGoogleRM: var(--ovnPanelRadius);\r\n        --ovnGoogleRL: var(--ovnSurfaceRadius);\r\n        --ovnGoogleRX: var(--ovnRadiusX);\r\n        \r\n    }\r\n    \r\n    @media (width >= 1920px) { --ovnGoogleWidth: calc(var(--ovnSpaceWidthVW) - 05vw); }\r\n    @media (width <= 1920px) { --ovnGoogleWidth: calc(var(--ovnSpaceWidthVW) + 05vw); }\r\n    \r\n    .XXXXXXXXXX {\r\n        opacity: 0;\r\n    }\r\n    .XXXXXXXXXX,  \r\n    .XXXXXXXXXX { \r\n        display: none;\r\n    }\r\n    \r\n    \r\n    \r\n        \r\n        \r\n        .sfbg,\r\n        .appbar,\r\n        .Fgyi2e { \r\n            background: transparent;\r\n        }\r\n        \r\n        \r\n        \r\n            a:hover,\r\n            a:hover h3.LC20lb,\r\n            .ngTNl:hover .ZhosBf,\r\n            .b2Rnsc:hover,\r\n            .V5XKdd:hover .ZxS7Db,\r\n            .c30Ztd:hover~.T3Fozb .CvgGZ {\r\n                text-decoration: none;\r\n            }\r\n            \r\n            #b_results > li.b_algo h2 a {\r\n                text-decoration: none !important;\r\n            }\r\n            \r\n            \r\n    \r\n    \r\n        :where(#searchform) {\r\n            \r\n            #tsf { transition: transform var(--ovnOftenTrans); }\r\n            \r\n            \r\n            \r\n        }\r\n        \r\n        \r\n    \r\n    \r\n        :where(#rcnt) {\r\n            \r\n            \r\n            &.YNk70c {\r\n                display: flex;\r\n                justify-content: center;\r\n                align-items: center;\r\n                \r\n            }\r\n            \r\n        }\r\n        \r\n        :where(#botstuff) {\r\n            \r\n            --ovnSpace: 20px;\r\n            --ovnGap: 60px;\r\n            \r\n            \r\n            .Pqkn2e { opacity: .126; padding: 0 60px; font-size: 12px; transition: opacity var(--ovnOftenTrans); }\r\n            .Pqkn2e:hover { opacity: .4; }\r\n            \r\n        }\r\n        \r\n        \r\n    \r\n    \r\n        :where(#sfooter) {\r\n            \r\n            #fbarcnt { width: var(--ovnGoogleWidth); margin: 0 auto; }\r\n            \r\n        }\r\n        \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    \r\n    \r\n    /* ========== ↓ 仅在 "分类 => 全部" 页才应用 */\r\n    html:has(body [role="listitem"] > a[tabindex="0"]) {\r\n        \r\n        /* ================================================== ↓ Head */\r\n        \r\n            .NDnoQ {\r\n                display: grid;\r\n                grid-template-columns: 1fr auto 1fr;\r\n            }\r\n            .tsf {\r\n                grid-column: 2;\r\n                justify-self: center;\r\n                width: var(--ovnGoogleSearch);\r\n                max-width: var(--ovnGoogleSearch);\r\n                transform: translateX(-40px);\r\n            }\r\n            .Efnghe {\r\n                grid-column: 3;\r\n                justify-self: end;\r\n            }\r\n            \r\n            .xrOgrb { padding-top: 0; margin-top: -1px; }\r\n            .CvDJxb { padding: 20px 0; }\r\n            .wZQcA .BO2cCe, .zLSRge { border-color: var(--ovnGoogleLine); }\r\n            \r\n            /* ========== ↓ 粘性定位 */\r\n            \r\n                .minidiv .sfbg {\r\n                    min-height: calc(var(--ovnSpace4X) + 20px);\r\n                    background: hsla(0, 0%, 100%, 0.8);\r\n                    box-shadow: var(--ovnGlassShadow);\r\n                    backdrop-filter: var(--ovnPanelFilter);\r\n                }\r\n                \r\n                .minidiv .logo { top: 12px; }\r\n                \r\n                .LoygGf.VHFyob .zLSRge { border-color: transparent; }\r\n                \r\n                .minidiv .RNNXgb { border-radius: 26px; }\r\n                .minidiv .emcav .RNNXgb {\r\n                    border-bottom-left-radius: 0;\r\n                    border-bottom-right-radius: 0;\r\n                }\r\n                .WzNHm { margin-top: -40px; margin-right: 5px; }\r\n                \r\n                .minidiv > .NDnoQ.P3mIxe {\r\n                \r\n                    margin-top: -10px;\r\n                \r\n                    .RNNXgb {\r\n                        margin: 5px 0 0;\r\n                        min-height: var(--ovnGoogleICON);\r\n                    }\r\n                    .iblpc, .vOY7J, .XDyW0e, .nDcEnd, .Tg7LZd { min-height: var(--ovnGoogleICON); }\r\n                    \r\n                    .BKRPef { margin-top: 20px; }\r\n                    .Tg7LZd { line-height: 40px; }\r\n                    .gLFyf { padding-top: 14px; }\r\n                    \r\n                    .aajZCb { border-radius: 0 0 26px 26px; }\r\n                    \r\n                }\r\n                \r\n            /* ========== ↓ 搜索框 */\r\n            \r\n                .A8SBwf { min-width: 426px; }\r\n            \r\n                .RNNXgb {\r\n                    border: none;\r\n                    box-shadow:\r\n                        0px 0px 00px 1px hsla(0, 0%, 0%, .04),\r\n                        2px 5px 10px 1px hsla(0, 0%, 0%, .06);\r\n                }\r\n                .emcav .RNNXgb, .BgPPrc .RNNXgb {\r\n                    box-shadow:\r\n                        0px 0px 00px 1px hsla(0, 0%, 0%, .04),\r\n                        2px 5px 10px 1px hsla(0, 0%, 0%, .06);\r\n                }\r\n                .aajZCb {\r\n                    box-shadow:\r\n                        0px 00px 00px 1px hsla(0, 0%, 0%, .04),\r\n                        0px 05px 10px 0 hsla(0, 0%, 0%, .02),\r\n                        0px 20px 25px 0 hsla(0, 0%, 0%, .06);\r\n                }\r\n                .xtSCL { border-top: none; }\r\n                \r\n                #Alh6id {\r\n                    .sbct { min-height: 2.6em; }\r\n                }\r\n                \r\n            /* ========== ↓ 分类 */\r\n            \r\n                .GG4mbd {\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    grid-column: 1/-1;\r\n                    max-width: none;\r\n                }\r\n                .rQTE8b { max-width: var(--ovnGoogleSearch); margin-left: 5.26vw; }\r\n                .mXwfNd { padding: 0 20px; }\r\n                \r\n                \r\n        /* ================================================== ↓ Content */\r\n        \r\n            #center_col { width: var(--ovnGoogleWidth); }\r\n            .UFQ0Gb { grid-template-columns: none; column-gap: 0; }\r\n            \r\n            #taw {\r\n            \r\n                #oFNiHe .vt6azd { width: 80%; margin: 0 auto; }\r\n                #oFNiHe .Pqkn2e { font-size: 14px; letter-spacing: .05em; }\r\n                \r\n            }\r\n            \r\n            /* ========== ↓ 模块 通用 */\r\n            \r\n                /* .MjjYud .A6K0A */\r\n                #rso .MjjYud .A6K0A:has(h3, [aria-level="2"]) {\r\n                    box-sizing: border-box;\r\n                    position: relative;\r\n                    padding: var(--ovnSpacePadding);\r\n                    margin: var(--ovnSpaceMargin);\r\n                    width: 100%;\r\n                    font-size: 12px;\r\n                    background: #FFFFFF;\r\n                    box-shadow: var(--ovnOftenSurfaceShadowBase);\r\n                    border-radius: var(--ovnSurfaceRadius);\r\n                    transition: var(--ovnOftenTransition);\r\n                }\r\n                #rso .MjjYud .A6K0A:has(h3, [aria-level="2"]):hover {\r\n                    z-index: 2;\r\n                    box-shadow: inset 0 0 2px hsla(0, 0%, 92%, .6), var(--ovnOftenSurfaceShadowHover);\r\n                    transform: var(--ovnSurfaceZoomIn);\r\n                }\r\n                \r\n                #rso .MjjYud .A6K0A:has(.cUnQKe):hover, /* 模块 图片 | 相关问题 */\r\n                #rso .MjjYud .A6K0A[data-rpos="0"]:hover, /* 其它相关信息 */\r\n                #rso .ULSxyf > .MjjYud .A6K0A:hover /* 模块 特殊 */{\r\n                    transform: none;\r\n                }\r\n                \r\n                /* ========== ↓ 带 "源" 的模块 */\r\n                \r\n                    #rso .MjjYud .A6K0A:has(.wHYlTd.Ww4FFb.vt6azd.tF2Cxc.asEBEc, .PmEWq.wHYlTd.vt6azd.Ww4FFb, .jmjoTe.wHYlTd) {\r\n                        padding-right: 0px;\r\n                    }\r\n                    \r\n                    .jmjoTe { padding: 0 calc(36px/2 + 0px); }\r\n                    \r\n                /* ========== ↓ 特殊情况 */\r\n                \r\n                    .ULSxyf > .MjjYud .Jb0Zif .yWNJXb { margin: 0; }\r\n                    .ULSxyf > .MjjYud .Jb0Zif .yWNJXb.tQtKhb { margin: 0; }\r\n                    \r\n                /* ========== ↓ 通用模块 含图片 */\r\n                \r\n                    .srKDX > .kb0PBd.ieodic.jGGQ5e { width: calc(var(--ovnGoogleWidth) - 20px); }\r\n                    .srKDX > .kb0PBd.LnCrMe {\r\n                        position: absolute;\r\n                        right: 20px;\r\n                        bottom: -10%;\r\n                    }\r\n                    \r\n                    .A6K0A > .wHYlTd.Ww4FFb.vt6azd.tF2Cxc.asEBEc[style*="max-width:652px"] { max-width: inherit !important; }\r\n                    .A6K0A > .wHYlTd.Ww4FFb.vt6azd.tF2Cxc.asEBEc:has(.kb0PBd.LnCrMe) {\r\n                    \r\n                        height: 150px;\r\n                        \r\n                        .srKDX > .kb0PBd.ieodic.jGGQ5e { width: calc(var(--ovnGoogleWidth) - 20px); }\r\n                        .srKDX > .kb0PBd.LnCrMe { bottom: -45px; }\r\n                        \r\n                    }\r\n                    \r\n                /* ========== ↓ 通用模块 含展开内容 */\r\n                .A6K0A .kb0PBd > div[style*="max-width:600px"] { max-width: 99% !important; }\r\n                \r\n                /* ========== ↓ 通用模块 内容块内部 底距 */\r\n                \r\n                    --ovnSpaceC: 20px;\r\n                    \r\n                    .tF2Cxc.asEBEc { margin-bottom: var(--ovnSpaceC); }\r\n                    .vt6azd { margin: 0px 0px var(--ovnSpaceC); }\r\n                    \r\n                    \r\n            /* ========== ↓ 模块 带源 */\r\n            \r\n                .notranslate.ESMNde.HGLrXd.ojE3Fb {\r\n                    opacity: .6;\r\n                    padding: var(--ovnSpacePadding);\r\n                    margin: 10px -20px -10px -20px;\r\n                    width: 100%;\r\n                    background: var(--ovnBase09HEX);\r\n                    border-radius: var(--ovnSurfaceRadius) var(--ovnSurfaceRadius) 5px 5px;\r\n                }\r\n                \r\n                .b8lM7 > .B6fmyf.byrV5b.Mg1HEd { opacity: .6; position: absolute; right: 20px; }\r\n                .b8lM7 > .B6fmyf.byrV5b.Mg1HEd .byrV5b { justify-content: flex-end; }\r\n                .eFM0qc.BCF2pd { background: transparent; }\r\n                .dEEN8c { width: max-content; }\r\n                \r\n                /* ========== ↓ 标题 */\r\n                    \r\n                    .MBeuO,\r\n                    [aria-level="2"][role="heading"] span {\r\n                        font-size: 16px;\r\n                        font-weight: bold;\r\n                        color: var(--ovnGoogleBlue);\r\n                    }\r\n                    \r\n                /* ========== ↓ 正文 */\r\n                \r\n                    a { color: var(--ovnGoogleBlue); }\r\n                    .p4wth { font-size: 13px; padding-right: 20px; }\r\n                    \r\n                /* ========== ↓ 匹配 */\r\n                \r\n                    .aCOpRe em, .aCOpRe a em, .yXK7lf em, .yXK7lf a em, .p4wth em, .p4wth a em {\r\n                        color: var(--ovnGoogleRad);\r\n                    }\r\n                    \r\n                    \r\n            /* ========== ↓ Aside */\r\n            \r\n                #rhs {\r\n                    --right: -5%;\r\n                    opacity: 0;\r\n                    z-index: 9;\r\n                    position: fixed;\r\n                    top: 50%;\r\n                    right: var(--right);\r\n                    transform: translateY(-50%);\r\n                    padding: 20px 20px 0 20px;\r\n                    width: max-content;\r\n                    max-width: 526px;\r\n                    background: var(--ovnGlassBase);\r\n                    backdrop-filter: var(--ovnPanelFilter);\r\n                    border-radius: var(--ovnSurfaceRadius);\r\n                    box-shadow:\r\n                        0px 05px 10px 0 hsla(0, 0%, 0%, .02),\r\n                        0px 20px 25px 0 hsla(0, 0%, 0%, .04);\r\n                    transition: opacity .26s ease, transform .26s ease;\r\n                }\r\n                #rhs:hover { opacity: 1; transform: translate(calc(20% + -50%), -50%); }\r\n                \r\n                @media (width <= 1920px), (height <= 1260px) { #rhs { display: none; } }\r\n                \r\n                #rhs .u7yw9, #jOAHU, .CeIyHb.WY0eLb { border: none; }\r\n                .FalWJb { background: transparent; }\r\n                \r\n            /* ========== ↓ 模块 详情弹窗 */\r\n                \r\n                /* #sZmt3b .PG8i1e.Ooz8t.PyLEff */\r\n                #Sva75c {\r\n                    position: fixed;\r\n                    top: 50% !important;\r\n                    left: 50% !important;\r\n                    transform: translate(-50%, -50%);\r\n                    border-radius: var(--ovnSurfaceRadius);\r\n                    width: calc(var(--ovnSpaceWidthVW) - 20vw) !important;\r\n                    height: max-content !important;\r\n                }\r\n                /* #sZmt3b .Z7HyUd */\r\n                .VuvQze .RfPPs {\r\n                    padding: 10px 20px;\r\n                    width: 40vw;\r\n                    background: var(--ovnGlassBase);\r\n                    backdrop-filter: var(--ovnPanelFilter);\r\n                }\r\n                .k4o2Hc, .dzz8Xc { background: transparent; }\r\n                .LrPjRb[role="dialog"] iframe.P0rd4 {\r\n                    border-radius: var(--ovnSurfaceRadius);\r\n                    margin-bottom: 14px;\r\n                }\r\n                .Dgr5Hb { border-top: none; }\r\n                .VuvQze .RfPPs {\r\n                    box-shadow:\r\n                        0px 05px 10px 0 hsla(0, 0%, 0%, .02),\r\n                        0px 20px 25px 0 hsla(0, 0%, 0%, .06);\r\n                }\r\n                \r\n            /* ========== ↓ 模块 精选摘要 */\r\n            \r\n                .fm06If .ILfuVd, .c2xzTb .ILfuVd, .Jb0Zif .c2xzTb .ILfuVd { font-size: 16px; }\r\n                \r\n            /* ========== ↓ 模块 官方词条 */\r\n            \r\n                .SLPe5b { grid-column: 1 / -2; }\r\n                .e8Ck0d { padding: 20px 0 40px 0; }\r\n                \r\n                .GCSyeb { margin: 0 auto; width: calc(var(--ovnGoogleWidth) - 260px); background: var(--ovnGoogleLine); }\r\n                \r\n            /* ========== ↓ 模块 AI 概览 */\r\n            \r\n                .LT6XE, .zNsLfb { max-width: 100%; }\r\n                .in7vHe:not(.BgrTif) { display: block; margin: 0 auto; }\r\n                .omFXYd, .KMCbD { border-bottom: none; }\r\n                .zocjMe { border-bottom: 1px solid #e6effb; }\r\n                \r\n                #eKIzJc .YzCcne[data-mg-cp="YzCcne"] > div { margin-bottom: 0 !important; }\r\n                .F0OfWd { max-width: 100%; }\r\n                .WAUd4 { padding: 15px 0; }\r\n                \r\n                #eKIzJc {\r\n                \r\n                    --fontS: 14px;\r\n                    --fontM: 15px;\r\n                    --fontL: 16px;\r\n                    \r\n                    .jloFI { font-size: var(--fontL); }\r\n                    .rPeykc.pyPiTc, .rPeykc.uP58nb { font-size: var(--fontL); }\r\n                    .f5cPye ul, .f5cPye ol { font-size: var(--fontS); }\r\n                    .vM0jzc ul, .vM0jzc ol { font-size: var(--fontS) !important; }\r\n                    \r\n                }\r\n                \r\n            /* ========== ↓ 模块 图片 */\r\n            \r\n                #iur .cakeVe { display: flex; justify-content: space-evenly; }\r\n                .Lv2Cle .eA0Zlc.mkpRId, .cakeVe .m3LIae {\r\n                    width: calc(var(--ovnGoogleWidth) / 5);\r\n                    max-width: 126px;\r\n                }\r\n                .Bi9oQd { background: var(--ovnGoogleLine); }\r\n                .ZFiwCf { margin: 20px auto; }\r\n                .ULSxyf { margin-bottom: 0; }\r\n                \r\n            /* ========== ↓ 模块 影片 */\r\n            \r\n                .Ea5p3b > [data-hveid="CCQQAw"][jsname="wRSfy"] { display: flex; gap: 32px; }\r\n                .sHEJob { border-top: none; /* max-width: calc(var(--ovnGoogleWidth) / 3 - 52px); */ }\r\n                \r\n            /* ========== ↓ 模块 相关问题 */\r\n            \r\n                .cUnQKe { margin-bottom: 20px; }\r\n                \r\n                .XVdSCb.KFFQ0c.xKf9F { margin-top: 20px !important; }\r\n                \r\n                .akqY6 { background: var(--ovnGoogleLine); }\r\n                .iRPzcb { border-color: var(--ovnGoogleLine); }\r\n                \r\n                \r\n        /* ================================================== ↓ Bottom */\r\n        \r\n            \r\n            /* ========== ↓ 模块 用户还搜索了 */\r\n            \r\n                .ULSxyf .M6HR1c.PJI6ge.adDDi { display:none; }\r\n                .ULSxyf { padding: var(--ovnSpace) 60px; }\r\n                \r\n                .vIifob:hover { background: #f0f1f3; }\r\n                \r\n                \r\n            /* ========== ↓ 翻页 */\r\n            \r\n                #bres ~ [role="navigation"] {\r\n                    height: 40px;\r\n                    overflow: hidden;\r\n                    margin: calc(var(--ovnGap) - var(--ovnSpace)) auto var(--ovnGap) auto;\r\n                }\r\n                .AaVjTc { margin: 0 auto; }\r\n                \r\n            /* ========== ↓ 底部 */\r\n            \r\n                #fbar {\r\n                    opacity: .6;\r\n                    padding: 20px 40px 10px;\r\n                    background: var(--ovnBase09HEX);\r\n                    border-radius: var(--ovnSurfaceRadius) var(--ovnSurfaceRadius) 0 0;\r\n                }\r\n                .b2hzT { border-bottom: none; }\r\n                .g0F6u, .KwU3F, .xSQxL { color: var(--ovnGoogleBlue); }\r\n            \r\n    }\r\n    '), L.apply({ target: ['.V9tjod h3.LC20lb'], subjoin: ['ovnFocal', 'ovnLR'] }), h.apply({ buttonPrev: '#pnprev', buttonNext: '#pnnext' }), l.match({ include: ['*mail.google.com/*'], exclude: [] }) && GM_addStyle('\n        \n            html {\n                .mt-actions-container .ms-quick-actions-button.new-logo { display: none; }\n                .mt-tool .mt-tool-button .mt-tool-icon { background: transparent; }\n                #mailtrack-menu-opener .mt-logo > svg.mt-svg-icon { display: none; }\n            }\n            \n        '), l.match({ include: ['*google.com/search/about-this-result*'], exclude: [] }) && GM_addStyle('\n        \n            html :is(.gs3qud, .dzz8Xc) { background: transparent; }\n            \n        '));
  });
  y.run('Bing', () => {
    (GM_addStyle('\r\n\r\nhtml {\r\n    \r\n    &:root body {\r\n        \r\n        --ovnBingWidth: var(--ovnSpaceWidth02);     \r\n        --ovnBingHight: var(--ovnSpace2Y);          \r\n        \r\n        --ovnBingRS: var(--ovnBaseRadius);\r\n        --ovnBingRU: var(--ovnUIRadius);\r\n        --ovnBingRM: var(--ovnPanelRadius);\r\n        --ovnBingRL: var(--ovnSurfaceRadius);\r\n        --ovnBingRX: var(--ovnRadiusX);\r\n        \r\n    }\r\n    \r\n    .XXXXXXXXXX, /* ==== XXXXX */\r\n    .XXXXXXXXXX, /* ==== XXXXX */\r\n    .XXXXXXXXXX  /* ==== XXXXX */ {\r\n        display: none;\r\n    }\r\n    \r\n    \r\n    \r\n        \r\n        \r\n        \r\n        \r\n        \r\n    \r\n        \r\n        :where(#XXXXX) {\r\n            \r\n            --ovnBingXXX: hsla(var(--ovnPrimaryHSL), .5);\r\n            \r\n        }\r\n        \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                \r\n                    /* ================================================== ↓ Global */\r\n                    \r\n                        html {\r\n                            --ovnColorBase: var(--ovnBase09HEX);\r\n                            --ovnSearchWidth: calc(var(--ovnSpaceWidthVW) / 1.5);\r\n                            --ovnLine: #00000009;\r\n                        }\r\n                        \r\n                        /* ========== ↓ 隐藏模块 */\r\n                            \r\n                            html #b_footer,\r\n                            html #b_results > li.b_ans #brsv3 h2,     /* 相关搜索 标题 */\r\n                            html #b_results > li.b_ans.b_mop.b_vidAns /* 模块 视频 */ {\r\n                                display: none;\r\n                            }\r\n                            \r\n                        /* ========== ↓ 移除下划线 */\r\n                        \r\n                            html .b_rc_gb_sub .b_rc_gb_sub_title,\r\n                            html #b_results > li.b_algo h2 a,\r\n                            html #b_topw .b_wpt_container .b_wpt_bl:hover h2 a {\r\n                                text-decoration: none !important;\r\n                            }\r\n                            \r\n                            html a:hover,\r\n                            html .b_algoheader a h2:hover,\r\n                            html .b_algo:first-child:hover h2 a,\r\n                            html .b_algo .b_underline a,\r\n                            html .sb_add .b_underline a,\r\n                            html #b_results>.b_ad li:first-child .sb_adTA:hover h2 a,\r\n                            html #b_topw>.b_ad li:first-child .sb_adTA:hover h2 a,\r\n                            html #b_header:hover~#b_content #b_results li:first-child.b_ad li:first-child div.sb_adTA h2 a,\r\n                            html #b_header:hover~#b_content #b_topw li:first-child.b_ad li:first-child div.sb_adTA h2 a,\r\n                            html #b_header:hover~#b_content #b_results li:first-child.b_algo h2 a,\r\n                            html #b_results li.b_msg.b_canvas a:focus-visible,\r\n                            html #b_content .acfImgAns .iaheader .iacf_head:hover span,\r\n                            html #b_results #brsv3 .b_vList li a:hover,\r\n                            html #relatedQnAListDisplay .slide:hover .df_ansatb .b_algo,\r\n                            html #relatedQnAListDisplay .slide:hover .df_ansatb .b_algo a {\r\n                                text-decoration: none;\r\n                            }\r\n                            \r\n                        /* ========== ↓ 文本着重色 */\r\n                        \r\n                            html a,\r\n                            html #b_tween a:visited,\r\n                            html #b_results .b_no a,\r\n                            html .b_tranthis,                               /* 翻译此结果 */\r\n                            html #b_results > li a,                         /* 其他 */\r\n                            html #b_results > li .b_richcard a,             /* 更多咨询 */\r\n                            html #b_results > li.b_algo h2 a,               /* 标题 */\r\n                            html #b_results > li.b_algo h2:not(.sa_uc h2) a /* 标题 */ {\r\n                                color: var(--ovnBing);\r\n                            }\r\n                            \r\n                            \r\n                    /* ================================================== ↓ Head */\r\n                    \r\n                        html #b_header {\r\n                            min-height: calc(var(--ovnSpace4X) + 20px);\r\n                            background: var(--ovnColorBase);\r\n                            transition: var(--ovnOftenTransition);\r\n                        }\r\n                        html #b_header::after {\r\n                            pointer-events: none;\r\n                            z-index: -1;\r\n                            content: "";\r\n                            position: absolute;\r\n                            inset: 0;\r\n                            backdrop-filter: var(--ovnPanelFilter);\r\n                        }\r\n                        html .b_pinhead:not(.b_dark) #b_header {\r\n                            background: hsla(0, 0%, 100%, 0.6) !important;\r\n                            box-shadow: var(--ovnGlassShadow);\r\n                        }\r\n                        \r\n                        /* ========== ↓ 版本切换按钮 */\r\n                        html #b_header > #est_switch {\r\n                            display: flex;\r\n                            margin: 0 auto;\r\n                            justify-content: center;\r\n                        }\r\n                        \r\n                        @media (width <= 1500px) {\r\n                            html body #b_header #sb_form, html body #b_header .b_scopebar { width: var(--ovnSpaceWidthVW); }\r\n                        }\r\n                        \r\n                        /* ========== ↓ 搜索框 */\r\n                        \r\n                            html {\r\n                            \r\n                                #b_header #sb_form {\r\n                                    z-index: 999;\r\n                                    display: flex;\r\n                                    justify-content: space-between;\r\n                                    margin: 12px auto;\r\n                                    width: var(--ovnSearchWidth);\r\n                                }\r\n                                \r\n                                    .b_logoArea { flex: 0 0 auto; margin: 0; width: 80px; }\r\n                                    \r\n                                    .b_searchboxForm {\r\n                                        position: relative;\r\n                                        display: flex;\r\n                                        align-items: center;\r\n                                        flex: 1 1 auto;\r\n                                    }\r\n                                    \r\n                                        #b_header #sb_form .b_searchbox {\r\n                                            flex: 1 1 auto;\r\n                                            width: auto;\r\n                                            min-width: 300px;\r\n                                        }\r\n                                        #b_header .b_searchboxForm.as_shadow #sw_as {\r\n                                            position: absolute;\r\n                                            top: 100%;\r\n                                            left: 0;\r\n                                            right: 0;\r\n                                            z-index: 1000;\r\n                                            display: none;\r\n                                        }\r\n                                        #b_header .b_searchboxForm.as_rsform #sw_as #sa_ul { width: 50%; }\r\n                                        #b_header #sa_requery { width: 40%; padding-bottom: 10px; }\r\n                                        #sw_as .paa_tx, #sw_as .rs_tx, #sw_as .pasf_tx { width: auto; }\r\n                                        #sw_as .pasf_rich_drw { flex-wrap: wrap; gap: 10px; }\r\n                                        \r\n                                        #sw_as .sa_sg_corner_icon { transform: scale(.8); }\r\n                                        #sa_hs_block > ul, #sa_sug_block > ul { padding: 0 10px; }\r\n                                        #b_header .b_searchboxForm #sb_search { padding-left: 5px; }\r\n                                        #sb_form #sw_as .sa_as #sa_ul li, #sw_as .sa_prnt { border-radius: var(--ovnPanelRadius); }\r\n                                        #sw_as .sa_tm_paa, #sw_as .sa_tm_rs, #sa_ul, .pp_title { font-size: 14px; }\r\n                                        \r\n                                .b_searchboxForm {\r\n                                    box-shadow:\r\n                                        0px 0px 00px 1px hsla(0, 0%, 0%, .02),\r\n                                        2px 5px 10px 1px hsla(0, 0%, 0%, .06);\r\n                                }\r\n                                .b_searchboxForm:hover, .b_focus .b_searchboxForm {\r\n                                    box-shadow:\r\n                                        0px 0px 00px 1px hsla(0, 0%, 0%, .04),\r\n                                        2px 5px 10px 1px hsla(0, 0%, 0%, .09);\r\n                                }\r\n                                .b_searchboxForm.as_shadow.as_show, .as_on .b_searchboxForm.as_shadow {\r\n                                    box-shadow:\r\n                                        0px 02px 09px 0 hsla(0, 0%, 0%, .09),\r\n                                        0px 10px 20px 0 hsla(0, 0%, 0%, .06);\r\n                                }\r\n                                .b_searchboxForm.as_rsform.as_shadow #sw_as .sa_as, .b_searchboxForm.as_shadow #sw_as .sa_as {\r\n                                    box-shadow:\r\n                                        0px 05px 10px 0 hsla(0, 0%, 0%, .02),\r\n                                        0px 20px 25px 0 hsla(0, 0%, 0%, .06);\r\n                                }\r\n                                \r\n                            }\r\n                            \r\n                        /* ========== ↓ 分类 */\r\n                        \r\n                            html #b_header .b_scopebar {\r\n                                margin: 0 auto;\r\n                                margin-top: 10px;\r\n                                width: var(--ovnSearchWidth);\r\n                            }\r\n                            html .b_scopebar:not(:has(> #fltIdtCon)) > ul { display: flex; justify-content: space-evenly; }\r\n                            html #b_header .b_scopebar #fltIdtCon { background: transparent; }\r\n                            \r\n                            @media (width >= 1200px) {\r\n                                html .b_scopebar:not(:has(> #fltIdtCon)) > ul {\r\n                                    margin: auto 24px;\r\n                                    transform: translateX(45px);\r\n                                }\r\n                            }\r\n                            \r\n                            \r\n                        /* ========== ↓ 用户中心 */\r\n                        \r\n                            html #b_header #id_h {\r\n                                z-index: 999;\r\n                                position: fixed;\r\n                                top: 20px;\r\n                                right: 20px;\r\n                            }\r\n                            html #id_a { border-radius: var(--ovnUIRadius); }\r\n                            \r\n                            \r\n                    /* ================================================== ↓ Content */\r\n                        \r\n                        html { background: var(--ovnColorBase); }\r\n                        \r\n                        html #b_content {\r\n                            background: var(--ovnColorBase);\r\n                            max-width: 100%;\r\n                            padding: 40px 0 0 0;\r\n                        }\r\n                        html #b_content > main {\r\n                            display: block;\r\n                            width: var(--ovnSpaceWidthVW);\r\n                            max-width: 100%;\r\n                            margin: 0 auto;\r\n                        }\r\n                        html #b_results, html #b_mcw, html #b_topw { width: 100%; }\r\n                        \r\n                        /* ========== ↓ 模块 通用 */\r\n                        \r\n                            html #b_content #b_results > li:not(.b_top, .b_pag) {\r\n                                box-sizing: border-box;\r\n                                position: relative;\r\n                                padding: var(--ovnSpacePadding);\r\n                                margin: var(--ovnSpaceMargin);\r\n                                width: 100%;\r\n                                font-size: 12px;\r\n                                background: #FFFFFF;\r\n                                box-shadow: var(--ovnOftenSurfaceShadowBase);\r\n                                border-radius: var(--ovnSurfaceRadius);\r\n                                transition: var(--ovnOftenTransition);\r\n                            }\r\n                            html #b_content #b_results > li:not(.b_top, .b_pag):hover {\r\n                                z-index: 2;\r\n                                box-shadow: inset 0 0 2px hsla(0, 0%, 92%, .6), var(--ovnOftenSurfaceShadowHover);\r\n                                transform: var(--ovnSurfaceZoomIn);\r\n                            }\r\n                            \r\n                            html #b_content #b_results > li.b_ans:hover,           /* 相关搜索 */\r\n                            html #b_content #b_results > li.b_msg:hover,           /* 相关搜索 */\r\n                            html #b_content #b_results > li.b_pag:hover,           /* 底部翻页 */\r\n                            html #b_content #b_results > li.b_algoBigWiki:hover,   /* Wiki */ \r\n                            html #b_content #b_results > li.b_rc_gb_template:hover {\r\n                                transform: none;\r\n                            }\r\n                            \r\n                            /* ========== ↓ 搜索结果 相关 */\r\n                            \r\n                                /* html #b_content #b_results > li.b_ans[data-bm="6"], */\r\n                                html #b_content #b_results > li.b_msg.b_canvas {\r\n                                    opacity: .6;\r\n                                    display: flex;\r\n                                    gap: 20px;\r\n                                    margin: 0;\r\n                                    background: transparent;\r\n                                    box-shadow: none;\r\n                                }\r\n                                html #b_results .b_promtxt { font-size: 14px; }\r\n                                html .b_deepdesk { padding-left: 0; }\r\n                                \r\n                            /* ========== ↓ 标题 */\r\n                                \r\n                                html .b_algo .b_deepdesk h3,\r\n                                html .b_algo .b_deep h3.deeplink_title,\r\n                                html .b_algo .b_deep h3 .deeplink_title,\r\n                                html #b_topw .b_wpt_container .b_wpt_bl h2,\r\n                                html #b_results > li.b_algo h2 a,\r\n                                html #b_results .b_ans #brsv3 h2,\r\n                                html #b_content .b_wpt_container .b_crtrm_wrapper .b_cnt_resp h3 {\r\n                                    font-size: 15px;\r\n                                    font-weight: bold;\r\n                                }\r\n                                \r\n                            /* ========== ↓ 正文 */\r\n                                \r\n                                html .b_cnt_resp,\r\n                                html .b_cus_fields .b_field_title,\r\n                                html #b_results #brsv3 .b_vList li a,\r\n                                html #b_results .b_algo .b_lineclamp1, html #b_results .b_algo .b_lineclamp2,\r\n                                html #b_results .b_algo .b_lineclamp3, html #b_results .b_algo .b_lineclamp4,\r\n                                html #b_results .b_rc_gb_sub.b_rc_gb_sub_hero .b_rc_gb_sub_column .b_rc_gb_sub_cell p {\r\n                                    font-size: 13px;\r\n                                }\r\n                                \r\n                            /* ========== ↓ 源 */\r\n                            \r\n                                html #b_content #b_results .b_algo > .b_tpcn,\r\n                                html #b_content #b_results .b_algo_group > .b_tpcn {\r\n                                    opacity: .6;\r\n                                    padding: var(--ovnSpacePadding);\r\n                                    margin: -10px -20px 10px -20px;\r\n                                    width: 100%;\r\n                                    background: var(--ovnBase09HEX);\r\n                                    border-radius: var(--ovnSurfaceRadius) var(--ovnSurfaceRadius) 5px 5px;\r\n                                }\r\n                                html .b_algo .b_tpcn > .tilk, html .b_algo .b_tpcn strong > .tilk { padding-bottom: 0; }\r\n                                \r\n                                /* html .b_tpcn > .tilk { width: 100%; }\r\n                                html .b_tpcn > .tilk > .tptxt {\r\n                                    display: flex;\r\n                                    justify-content: space-between;\r\n                                    width: 100%;\r\n                                    align-items: center;\r\n                                } */\r\n                               \r\n                            /* ========== ↓ 图片 */\r\n                            \r\n                                html .b_imagePair > .inner { padding-bottom: 0; }\r\n                                \r\n                            /* ========== ↓ Other */\r\n                            \r\n                                html .b_rcGbMod { width: 100%; }\r\n                                \r\n                                \r\n                        /* ========== ↓ Copilot */\r\n                        \r\n                            html #b_bop_cs_sb_place.b_pinbop {\r\n                                position: fixed;\r\n                                width: 50%;\r\n                                left: 50%;\r\n                                bottom: 0;\r\n                                transform: translateX(-50%);\r\n                                padding: 0;\r\n                            }\r\n                            html .b_bop_cs_sb.b_collapsed_co .b_bop_cs_sb_l .composer_container {\r\n                                display: flex;\r\n                                flex-direction: row;\r\n                                justify-content: center;\r\n                                margin: 20px 0;\r\n                            }\r\n                            html .b_bop_cs_sb.b_collapsed_co .composer_wrapper { max-width: 50%; }\r\n                            \r\n                        /* ========== ↓ Aside */\r\n                        \r\n                            html #b_content #b_context {\r\n                                /* --top: 10px; */\r\n                                z-index: 999;\r\n                                opacity: 0;\r\n                                overflow-y: auto;\r\n                                overflow-x: hidden;\r\n                                position: fixed; /* position: absolute; */\r\n                                top: 50%; /* var(--top) */\r\n                                right: 20px;\r\n                                max-height: 80vh;\r\n                                background: var(--ovnGlassBase);\r\n                                backdrop-filter: var(--ovnPanelFilter);\r\n                                border-radius: var(--ovnPanelRadius);\r\n                                transform: translateY(-50%); /* translateY(calc(var(--top) - 20px)) */\r\n                                transition: opacity .26s ease, transform .26s ease;\r\n                            }\r\n                            html #b_content #b_context:hover { opacity: 1; transform: translateY(calc(-50% - 20px)); /* translateY(var(--top)); */ }\r\n                            \r\n                            @media (width <= 2160px), (height <= 1260px) { #b_content #b_context { display: none; } }\r\n                            \r\n                            /* ========== ↓ 官方词条 */\r\n                                \r\n                                html #b_content #b_context .lite-entcard-main { border-radius: var(--ovnPanelRadius); }\r\n                                html #b_content #b_context .spl_logobg, html #b_content #b_context .bsimg {\r\n                                    border-radius: var(--ovnPanelRadius) var(--ovnPanelRadius) 0 0;\r\n                                }\r\n                                \r\n                            /* ========== ↓ 相关搜索 */\r\n                                \r\n                                html #b_context .richrsrailtitle { display: none; }\r\n                                html #b_context .b_ans, #b_rrat_cont .b_ans { border-radius: var(--ovnPanelRadius); }\r\n                                \r\n                                html #b_context .b_ans { padding: 20px; }\r\n                                \r\n                                \r\n                        /* ========== ↓ 模块 特殊 「首个模块」 */\r\n                        \r\n                            html body #b_pole .b_poleContent { width: 80%; margin: 0 auto; }\r\n                            html #uaanswer { width: auto; }\r\n                            html #b_pole #ent-car-exp.carousel .carousel-controls { margin: 0; }\r\n                            html #b_tween:not(.b_hidetoggletween) ~ #b_pole { padding-left: 0; }\r\n                            \r\n                            html #b_topw .b_wpTabsWrapper {\r\n                                width: 80%;\r\n                                margin: 10px auto -20px auto;\r\n                                background: transparent;\r\n                            }\r\n                            \r\n                            html #b_pole #ent-car-exp.carousel {\r\n                                padding: 0 var(--smtc-gap-between-content-medium);\r\n                                padding-bottom: 30px;\r\n                                border-radius: var(--ovnPanelRadius);\r\n                            }\r\n                            \r\n                            html #b_tween { width: 80%; padding-left: 8px; margin: 0 auto; }\r\n                            \r\n                            html #b_content #b_results li.b_ans.b_top {\r\n                                opacity: 1;\r\n                                box-shadow: none;\r\n                                min-height: 200px;\r\n                            }\r\n                            html #b_content #b_results li.b_ans .qna_tlgacont { width: 80%; margin: 0 auto; }\r\n                            html #fbtop:not(.fbstatic) { bottom: 0; }\r\n                            \r\n                            html #b_results > li { background: transparent; }\r\n                            \r\n                            html .rwrl_fontexp:not(.rwrl_resetFont) {\r\n                                font-size: 15px;\r\n                                line-height: 2;\r\n                            }\r\n                            \r\n                            \r\n                        /* ========== ↓ 模块 官方词条 */\r\n                        \r\n                            html #b_pole { width: 100%; padding: 0; margin: 0; }\r\n                            html #b_pole .b_wpTabsWrapper {\r\n                                display: flex;\r\n                                justify-content: center;\r\n                                align-items: center;\r\n                                min-height: 92px;\r\n                                margin: 0;\r\n                                padding: 0;\r\n                                border-radius: var(--ovnSurfaceRadius);\r\n                            }\r\n                            html #b_pole .b_wpTabsWrapper .ent-dtab-content > div { padding: 0; margin: 0; }\r\n                            \r\n                        /* ========== ↓ 模块 Copilot Search */\r\n                        \r\n                            html #copans_container { width: 90%; margin: 0 auto; margin-bottom: 20px; }\r\n                            html #b_topw .b_ans .b_wpt_container { margin: 10px auto 20px; max-width: 100%; }\r\n                            \r\n                            @media (width >= 1405px) {\r\n                                html #copans_container { display: flex; justify-content: center; }\r\n                                \r\n                            }\r\n                            \r\n                        /* ========== ↓ 模块 Wiki */\r\n                        \r\n                            html #b_content #b_results .b_algo.b_algoBigWiki.b_algoBorder { margin-bottom: 40px; }\r\n                            html #b_results .b_algo:has(.b_wiki_bottom_cover) { min-height: 480px; }\r\n                            html #b_results .b_wiki_bottom_cover { border-radius: inherit; }\r\n                            \r\n                            /* \r\n                            html .b_rc_gb_sub.b_rc_gb_scroll { height: 260px; }\r\n                            html .b_rc_gb_sub_column {\r\n                                display: flex;\r\n                                align-items: flex-start;\r\n                                gap: 20px;\r\n                            } */\r\n                            html .b_rc_gb_sub.b_rc_gb_scroll { width: 80%; margin: 0 auto; }\r\n                            html #b_rc_gb_origin.b_rc_gb_sub .b_rc_gb_sub_column { max-width: 50%; }\r\n                            html .b_wiki_license { opacity: .5; z-index: 9; margin-top: 10px }\r\n                            \r\n                            html .b_rc_gb_sub_section .b_rc_gb_sub_cell:hover { box-shadow: none !important; }\r\n                            html .b_rc_gb_text_cell_wrapper { min-width: calc(var(--ovnSpaceWidthVW) / 6); }\r\n                            \r\n                        /* ========== ↓ 模块 查看更多 */\r\n                        \r\n                            html #b_results .b_wpt_container { margin: 0; }\r\n                            html #b_results .b_wpt_container .grid { max-width: 100%; justify-items: center; }\r\n                            \r\n                            html #b_content #b_results > li.b_rc_gb_template { margin-bottom: 40px; }\r\n                            \r\n                        /* ========== ↓ 模块 影像 */\r\n                        \r\n                            html #b_content .iacfic.mmkiaacf .iacf_crsl[data-wptds-carousel] {\r\n                                display: flex;\r\n                                justify-content: center;\r\n                            }\r\n                            \r\n                        /* ========== ↓ 模块 图像 */\r\n                        \r\n                            html #b_content .acfImgAns .salink::before,\r\n                            html #b_content .acfImgAns .iasalink::before {\r\n                                border-color: var(--ovnLine);\r\n                            }\r\n                            \r\n                            \r\n                        /* ========== ↓ 模块 表单轮播 */\r\n                        \r\n                            html [id^="tabcontrol"] .tab-menu { width: 80% !important; }\r\n                            \r\n                            \r\n                        /* ========== ↓ 模块 分类标题 */\r\n                        \r\n                            html #b_results .b_algo .b_vlist2col.b_deep, html #b_results .b_algo .b_deep.b_moreLink { padding-left: 0; }\r\n                            html #b_results .b_algo .b_vlist2col.b_deep ul, html #b_results .b_algo .b_vlist2col.b_deep h3 { width: 50%; }\r\n                            \r\n                            \r\n                        /* ========== ↓ 模块 其他人问了以下问题 */\r\n                        \r\n                            html .rqnaacfacc .df_hdr { display: none; }\r\n                            html #df_listaa .df_hd .b_primtxt { font-size: 15px; }\r\n                            html .rqnaContainerwithfeedback { margin: 10px 20px 20px 20px; padding: 0; }\r\n                            \r\n                            \r\n                    /* ================================================== ↓ Bottom */\r\n                    \r\n                        html #b_results .b_ans #brsv3 {\r\n                            display: flex;\r\n                            align-items: center;\r\n                            width: calc(var(--ovnSpaceWidthVW) - 100px);\r\n                            margin: 10px auto;\r\n                        }\r\n                        html #b_results #brsv3 .b_vList li {\r\n                            width: 260px;\r\n                            margin: 5px !important;\r\n                            transform: none !important;\r\n                        }\r\n                        html #b_results #brsv3 .b_vList a .b_suggestionText { overflow: visible; flex: none; }\r\n                        \r\n                        /* ========== ↓ 翻页 */\r\n                        \r\n                            html #b_results .b_pag, html #b_PagAboveFooter {\r\n                                display: flex;\r\n                                justify-content: center;\r\n                                padding: 0;\r\n                                margin: 50px auto;\r\n                                background: transparent;\r\n                            }\r\n                            html #b_results .b_pag a:not(.sb_pagS_bp):hover {\r\n                                border-radius: var(--ovnUIRadius);\r\n                            }\r\n                            \r\n                            /* ========== ↓ 不同版本 修正 */\r\n                            \r\n                                html .b_pag_above_footer_list .b_pag {\r\n                                    width: max-content;\r\n                                    padding: 0;\r\n                                    margin: 20px auto;\r\n                                }\r\n                            \r\n                        html .b_bop_cs_sb:not(.b_above_footer),\r\n                        html .b_bop_cs_sb:not(.b_bop_nobg),\r\n                        html #b_bop_pin_placehold:not(.b_bop_nobg) {\r\n                            background: var(--ovnColorBase);\r\n                        }\r\n                        \r\n                    /* ================================================== ↓ Other */\r\n                    \r\n                        .b_factRowContainer { margin-left: 0; margin-bottom: 10px; }\r\n                        '), L.apply({ target: ['#b_results > li.b_algo h2 > a', '#b_results .b_vList a .b_suggestionText'], subjoin: ['ovnFocal', 'ovnLR'] }), h.apply({ letterKey: !1, buttonPrev: 'nav[role="navigation"] .b_widePag > .sw_prev', buttonNext: 'nav[role="navigation"] .b_widePag > .sw_next' }));
  });
  y.run('DeepSeek', () => {
    (GM_addStyle('\r\n\r\nhtml {\r\n    \r\n    &:root body {\r\n        \r\n        --ovnDeepSeekCA: var(--ovnAccentHEX);\r\n        --ovnDeepSeekCS: var(--ovnSecondaryHEX);\r\n        --ovnDeepSeekCP: var(--ovnPrimaryHEX);\r\n        --ovnDeepSeekBG: var(--ovnBase09HEX);\r\n        \r\n        --ovnDeepSeekRS: var(--ovnBaseRadius);\r\n        --ovnDeepSeekRU: var(--ovnUIRadius);\r\n        --ovnDeepSeekRM: var(--ovnPanelRadius);\r\n        --ovnDeepSeekRL: var(--ovnSurfaceRadius);\r\n        --ovnDeepSeekRX: var(--ovnRadiusX);\r\n        \r\n        --ovnDeepSeekX: var(--ovnSpaceWidth02);\r\n        \r\n        @media (width <= 1260px) { --ovnDeepSeekV: calc(var(--ovnDeepSeekX) + 40vw) }\r\n        @media (width >= 1260px) { --ovnDeepSeekV: calc(var(--ovnDeepSeekX) + 20vw) }\r\n        @media (width >= 1920px) { --ovnDeepSeekV: calc(var(--ovnDeepSeekX) + 05vw) }\r\n        \r\n    }\r\n    \r\n    &.ovn body {\r\n        \r\n        --dsw-alias-border-l2-darkmode-thin: #0000000D;\r\n        --message-list-max-width: var(--ovnDeepSeekV);\r\n        \r\n        &[data-ds-dark-theme] {\r\n            --dsw-static-neutral-bluish-1000: #3C3C3D;\r\n        }\r\n        \r\n    }\r\n    \r\n    \r\n    \r\n        \r\n        \r\n        \r\n        \r\n            .e37a04e4, \r\n            ._090c426, \r\n            .fbb737a4, \r\n            ._546d736, \r\n            ._5a8ac7a, \r\n            .ds-button,\r\n            .ds-toggle-button {\r\n                border-radius: var(--ovnDeepSeekRM);\r\n            }\r\n            \r\n            \r\n        \r\n        \r\n            ._77cefa5 ._27c9245,   \r\n            ._77cefa5 .b13855df {  \r\n                min-height: 92px;\r\n            }\r\n            \r\n        \r\n        .md-code-block > pre { font-size: 12px; }\r\n        \r\n        \r\n    \r\n    \r\n        \r\n        .c15ec89f, .b0db7355, ._9f2341b { border-radius: var(--ovnDeepSeekRM); }\r\n        \r\n        \r\n        ._9a2f8e4 { max-width: var(--ovnDeepSeekV); }\r\n        \r\n        \r\n    \r\n    \r\n        \r\n        .ds-button.ds-button--floating {\r\n            right: 50%;\r\n            transform: translateX(calc(-50% + 35px));\r\n        }\r\n        \r\n        \r\n            .katex .base { display: contents; }\r\n            .cjk_fallback { font: var(--ovnOftenFontBase); }\r\n            \r\n}\r\n\r\n\r\n\r\n'), GM_addStyle('html .ds-markdown code{padding:.126em .4em;font-weight:526;text-shadow:0 0 .126em currentColor;border-radius:var(--ovnBaseRadius)}html .ds-markdown h3 code{padding:0 .6em}'));
  });
  y.run('ChatGPT', () => {
    GM_addStyle('\r\n\r\nhtml {\r\n    \r\n    &:root body {\r\n        \r\n        --ovnChatgptWidth: var(--ovnSpaceWidth02);     \r\n        --ovnChatgptHight: var(--ovnSpace2Y);          \r\n        \r\n        --ovnChatgptRS: var(--ovnBaseRadius);\r\n        --ovnChatgptRU: var(--ovnUIRadius);\r\n        --ovnChatgptRM: var(--ovnPanelRadius);\r\n        --ovnChatgptRL: var(--ovnSurfaceRadius);\r\n        --ovnChatgptRX: var(--ovnRadiusX);\r\n        \r\n    }\r\n    \r\n    .XXXXXXXXXX, /* ==== XXXXX */\r\n    .XXXXXXXXXX, /* ==== XXXXX */\r\n    .XXXXXXXXXX  /* ==== XXXXX */ {\r\n        display: none;\r\n    }\r\n    \r\n    \r\n    \r\n        \r\n        \r\n        \r\n        \r\n        \r\n    \r\n    \r\n        \r\n        .sm\\:rounded-\\[100px\\] {\r\n            border-radius: var(--ovnRadiusM);\r\n        }\r\n        \r\n    \r\n        \r\n        :where(#XXXXX) {\r\n            \r\n            --ovnChatgptXXX: hsla(var(--ovnPrimaryHSL), .5);\r\n            \r\n        }\r\n        \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n                \r\n                    html {\r\n                        \r\n                        &:root body {\r\n                            \r\n                            --ovn-ChatGPT-Width: var(--ovnSpaceWidth02);\r\n                            \r\n                            --ovnRadiusS: var(--ovnBaseRadius);\r\n                            --ovnRadiusU: var(--ovnUIRadius);\r\n                            --ovnRadiusM: var(--ovnPanelRadius);\r\n                            --ovnRadiusL: var(--ovnSurfaceRadius);\r\n                            \r\n                        }\r\n                        \r\n                        /* ---------- ↓ 项目设置 弹窗及指令框 */\r\n                        .max-w-lg[id^="radix-_r_"] { max-width: calc(9vw + 26vw); }\r\n                        #instructions { min-height: 12vh; height: 26vh; }\r\n                        \r\n                    }\r\n                    \r\n                    \r\n                    @media (width >= 1080px) { html [class*="--thread-content-max-width"] { --thread-content-max-width: calc(var(--ovnSpaceWidth02) + 20vw); } }\r\n                    @media (width >= 1600px) { html [class*="--thread-content-max-width"] { --thread-content-max-width: calc(var(--ovnSpaceWidth02) + 15vw); } }\r\n                    @media (width >= 1920px) { html [class*="--thread-content-max-width"] { --thread-content-max-width: calc(var(--ovnSpaceWidth02) + 05vw); } }\r\n                    \r\n                    /* ========== ↓ 首页 聊天框 */\r\n                    @media (width >= 1920px) { html main:has(#thread .mb-7 .text-page-header) [class*="--thread-content-max-width"] {\r\n                        --thread-content-max-width: calc(var(--ovnSpaceWidth02) + 02vw);\r\n                    } }\r\n                    \r\n                    html.ovn [class*="rounded-[18px]"] { border-radius: 14px; }\r\n                    \r\n                    html .shadow-xs, html .shadow-xxs, html .shadow-short-composer {\r\n                        --tw-shadow:\r\n                            0px 0px 00px 1px var(--tw-shadow-color, var(--shadow-color-2, #0000000F)),\r\n                            0px 5px 10px 0px var(--tw-shadow-color, var(--shadow-color-1, #00000009));\r\n                        border: none;\r\n                    }\r\n                    html [dir=ltr] code[class*=language-] { font-weight: 500; }\r\n                    \r\n                    /* ========== ↓ 聊天框 */\r\n                    \r\n                        html form[data-type="unified-composer"] {\r\n                        \r\n                            .min-h-14 { min-height: calc(var(--spacing) * 14 + 20px); }\r\n                            \r\n                            .shadow-short {\r\n                                --tw-shadow:\r\n                                    0px 0px 00px 1px var(--tw-shadow-color, var(--shadow-color-2, #0000000D)),\r\n                                    0px 5px 10px 0px var(--tw-shadow-color, var(--shadow-color-1, #00000012));\r\n                            }\r\n                        \r\n                            ._prosemirror-parent_ebv8s_2 p.placeholder { opacity: .4; }\r\n                            [class*="[grid-area:leading]"] { display: flex; align-items: center; } \r\n                            \r\n                            /* ========== ↓ 展开时 \r\n                            &[data-expanded] {\r\n                                ._prosemirror-parent_ebv8s_2 .ProseMirror { margin-top: auto; }\r\n                            } */\r\n                            \r\n                        }\r\n                        \r\n                        /* \r\n                            侧边栏展开 var(--sidebar-width) 侧边栏关闭 var(--sidebar-rail-width)\r\n                            transform: translateX(calc(-1 * (var(--sidebar-width) - var(--sidebar-rail-width)) / 2));\r\n                            \r\n                        html body:has([data-testid="close-sidebar-button"][aria-expanded="true"]) :is(.mx-auto, .mt-auto, button.border-token-border-default) {\r\n                            transform: translateX(calc(-52px)); \r\n                        } */\r\n                       \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n');
  });
  y.run('DOUBAO', () => {
    GM_addStyle('\r\n\r\nhtml {\r\n    \r\n    &:root body {\r\n        \r\n        --ovnDoubaoWidth: var(--ovnSpaceWidth02);     \r\n        --ovnDoubaoHight: var(--ovnSpace2Y);          \r\n        \r\n        --ovnDoubaoRS: var(--ovnBaseRadius);\r\n        --ovnDoubaoRU: var(--ovnUIRadius);\r\n        --ovnDoubaoRM: var(--ovnPanelRadius);\r\n        --ovnDoubaoRL: var(--ovnSurfaceRadius);\r\n        --ovnDoubaoRX: var(--ovnRadiusX);\r\n        \r\n    }\r\n    \r\n    .XXXXXXXXXX, /* ==== XXXXX */\r\n    .XXXXXXXXXX, /* ==== XXXXX */\r\n    .XXXXXXXXXX  /* ==== XXXXX */ {\r\n        display: none;\r\n    }\r\n    \r\n    \r\n    \r\n        \r\n        \r\n        \r\n        \r\n        \r\n    \r\n        \r\n        :where(#XXXXX) {\r\n            \r\n            --ovnDoubaoXXX: hsla(var(--ovnPrimaryHSL), .5);\r\n            \r\n        }\r\n        \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n                    html .container-arOxqB {\r\n                        --center-content-max-width: calc(var(--ovnSpaceWidth02) + 100px) !important;\r\n                    }\r\n                    \r\n                    html .chat-input-container-FpHqTd { max-width: 100%; }\r\n                    html .chat-footer-action-wrapper-Y8Gz6b { max-width: 100%; }\r\n                    \r\n                    /* ========== ↓ 聊天框悬浮 */\r\n                    \r\n                        html .footer-Wl2Pj7 > .container-arOxqB.chrome70-container {\r\n                            position: absolute;\r\n                            bottom: 0;\r\n                            background: transparent;\r\n                            --center-content-max-width: var(--ovnSpaceWidth02) !important;\r\n                        }\r\n                        /* ========== ↓ 回到底部 */\r\n                        html .message-list-V8qfyv .to-bottom-button-Bs3jaG { bottom: calc(20px + 130px); }');
  });
  (y.run('ComfyUI', () => {
    GM_addStyle('\r\n\r\nhtml {\r\n    \r\n    &:root body {\r\n        \r\n        --ovnComfyWidth: var(--ovnSpaceWidth02);     \r\n        --ovnComfyHight: var(--ovnSpace2Y);          \r\n        \r\n        --ovnComfyRS: var(--ovnBaseRadius);\r\n        --ovnComfyRU: var(--ovnUIRadius);\r\n        --ovnComfyRM: var(--ovnPanelRadius);\r\n        --ovnComfyRL: var(--ovnSurfaceRadius);\r\n        --ovnComfyRX: var(--ovnRadiusX);\r\n        \r\n    }\r\n    \r\n    .XXXXXXXXXX, /* ==== XXXXX */\r\n    .XXXXXXXXXX, /* ==== XXXXX */\r\n    .XXXXXXXXXX  /* ==== XXXXX */ {\r\n        display: none;\r\n    }\r\n    \r\n    \r\n    \r\n        \r\n        \r\n        \r\n        \r\n        \r\n    \r\n        \r\n        :where(#XXXXX) {\r\n            \r\n            --ovnComfyXXX: hsla(var(--ovnPrimaryHSL), .5);\r\n            \r\n        }\r\n        \r\n}\r\n\r\n\r\n\r\n                \r\n                    :root {\r\n                        --themeColor: 220, 90%, 60%;\r\n                        --navHeight: 50px;\r\n                        --rgHeight: 10px;\r\n                    }\r\n                    #vue-app {\r\n                        --bar-shadow: 0 0 1.5rem #00000060;\r\n                    }\r\n                    \r\n                    html .comfyui-menu[data-v-1545ebd4] { height: var(--navHeight); }\r\n                    html .comfyui-body-left[data-v-0e9641c8] { z-index: 999; }\r\n                    \r\n                    html .side-tool-bar-container[data-v-44002598], html .comfyui-menu[data-v-1545ebd4] {\r\n                        background: var(--ovnGlassShadow);\r\n                        backdrop-filter: var(--ovnSurfaceFilter);\r\n                    }\r\n                    \r\n                    /* ========== ↓ 右键菜单 */\r\n                    \r\n                        html .litegraph.litecontextmenu {\r\n                            padding: 5px;\r\n                            width: max-content;\r\n                            min-width: 150px;\r\n                            max-width: 260px;\r\n                            border-radius: var(--ovnUIRadius);\r\n                            box-shadow: var(--ovnUIShadow) #00000060 !important;\r\n                        }\r\n                        \r\n                        /* ========== ↓ 菜单选项 */\r\n                        html .litegraph.litecontextmenu .litemenu-entry:not(.separator) {\r\n                            display: flex;\r\n                            align-items: center;\r\n                            padding: 2px;\r\n                            margin: 4px 0px;\r\n                            height: 25px;\r\n                        }\r\n                        html .litegraph.litecontextmenu .litemenu-entry.submenu:not(.separator),\r\n                        html .litegraph.litecontextmenu.dark .litemenu-entry.submenu {\r\n                            padding: 0 8px;\r\n                            line-height: 1.92;\r\n                            border-radius: var(--ovnUIRadius);\r\n                        }\r\n                        html .litegraph .litemenu-entry.separator {\r\n                            border-bottom: .1em dashed #00000040;\r\n                        }\r\n                        \r\n                        /* ========== ↓ 箭头图标 */\r\n                        html .litemenu-entry.has_submenu::after {\r\n                            content: "";\r\n                            position: absolute;\r\n                            top: 50%;\r\n                            right: 5px;\r\n                            transform: translateY(-50%);\r\n                            height: 1.2em;\r\n                            width: .2rem;\r\n                            background: hsla(var(--themeColor), 1);\r\n                            box-shadow: 2px 0 6px 0px hsla(var(--themeColor), .6);\r\n                            border-radius: 1em;\r\n                        }\r\n                        html .litegraph .litemenu-entry.has_submenu { border-right: none;}\r\n                        \r\n                        /* ========== ↓ 取值输入框 */\r\n                        \r\n                            html .litegraph .graphdialog {\r\n                                padding: 7px 10px 7px 15px;\r\n                                border: var(--ovnUIBorder) var(--border-color);\r\n                                border-radius: var(--ovnPanelRadius);\r\n                            }\r\n                            html .graphdialog {\r\n                                box-shadow: var(--bar-shadow);\r\n                            }\r\n                            \r\n                            html .graphdialog input, html .graphdialog textarea, html .graphdialog select {\r\n                                border-radius: var(--ovnUIRadius);\r\n                            }\r\n                            ');
  }),
    y.run('manager', () => {
      GM_addStyle('\n        \n            html #cm-manager-dialog {\n                \n                --ovnColumnH: 40px;\n                --ovnRadiusS: var(--ovnUIRadius);\n                --ovnRadiusM: var(--ovnPanelRadius);\n                --ovnRadiusL: var(--ovnSurfaceRadius);\n                --ovnFont: var(--ovnCodeFont);\n                --ovnMappingText: var(--p-text-muted-color, #FFFFFFCC);\n                --ovnMappingBase: var(--p-dialog-background, #00000040);\n                --ovnMappingButtonBase: var(--p-listbox-option-focus-background, #00000050);\n                --ovnMappingInputBase: var(--p-inputtext-background, #00000050);\n                --ovnMappingBorder: 1px solid var(--p-select-border-color, #FFFFFF20);\n                --ovnMappingBorderColor: var(--p-dialog-border-color, #FFFFFF20);\n                \n                width: 50vw;\n                height: 50vh;\n                \n            }\n            \n            html .comfy-modal {\n                padding: 40px 20px;\n                padding-bottom: 20px;\n                border: 2px solid var(--p-dialog-border-color, #FFFFFF20);\n                background-color: var(--p-dialog-background, #00000040);\n                box-shadow: none;\n                border-radius: var(--ovnSurfaceRadius);\n                font-family: var(--ovnCodeFont);\n            }\n            \n            html .comfy-modal-content {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n            }\n            \n            html .cm-title, html #cm-close-button {\n                width: calc(100% - 40px);\n                height: calc(var(--ovnColumnH) * 2);\n                background-color: var(--ovnMappingButtonBase);\n                border-radius: var(--ovnRadiusM);\n            }\n            html body #cm-close-button {\n                position: sticky;\n                bottom: 0;\n                overflow: visible;\n                flex-shrink: 0;\n                height: calc(var(--ovnColumnH) + 20px);\n                box-shadow: 0 10px 25px 0 #00000020;\n                border-radius: var(--ovnRadiusM);\n            }\n            \n            html .cm-title > font { color: var(--ovnMappingText); }\n            \n            html .cm-menu-container {\n                display: flex;\n                justify-content: space-around;\n                gap: 20px;\n                width: calc(100% - 40px);\n                padding: 10px 0;\n            }\n            \n            html .cm-menu-column {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                justify-content: space-between;\n                width: auto;\n            }\n            html .cm-menu-column > br:first-of-type { display: none; }\n            \n            html .comfy-modal input, html .comfy-modal select {\n                height: var(--ovnColumnH);\n                padding-left: 8px;\n                border: var(--ovnMappingBorder);\n                font-family: var(--ovnFont);\n                font-size: .9em;\n                color: var(--ovnMappingText);\n                background-color: var(--ovnMappingInputBase);\n                border-radius: var(--ovnRadiusS);\n            }\n            \n            html .comfy-btn,\n            html .comfy-menu > button,\n            html .comfy-menu-btns button,\n            html .comfy-menu .comfy-list button,\n            html .comfy-modal button {\n                margin-top: 4px;\n                height: var(--ovnColumnH);\n                border: var(--ovnMappingBorder);\n                color: var(--ovnMappingText);\n                font-family: var(--ovnFont);\n                background-color: var(--ovnMappingButtonBase);\n                border-radius: var(--ovnRadiusS);\n            }\n            html .comfy-btn:hover:not(:disabled),\n            html .comfy-menu > button:hover,\n            html .comfy-menu-btns button:hover,\n            html .comfy-menu .comfy-list button:hover,\n            html .comfy-modal button:hover,\n            html .comfy-menu-actions button:hover {\n                border: var(--ovnMappingBorder);\n                background-color: var(--ovnMappingButtonBase);\n                will-change: auto;\n            }\n            \n            html #cm-manual-button, html #cm-nodeinfo-button { height: var(--ovnColumnH); }\n            html #workflowgallery-button {height: calc(var(--ovnColumnH) + 20px); }\n            \n            html .cm-notice-board {\n                border: var(--ovnMappingBorder);\n                color: #626262;\n                font-size: 14px;\n                border-radius: var(--ovnRadiusM);\n            }\n            \n            html .cm-experimental { border: var(--ovnMappingBorder); }\n            html .cm-experimental-legend { line-height: 1.7;}\n            html .cm-experimental-legend, html .cm-button-red { background-color: #B52121 !important;}\n            \n            html .comfy-modal p { color: var(--ovnMappingText) !important; }\n            html .comfy-modal p, html .cm-experimental-button, html .cm-button, html #cm-nodeinfo-button {\n                font-size: .9em !important;\n            }\n            \n        ');
    }),
    y.run('crystools', () => {
      GM_addStyle('\n        \n            /* \n            html .comfyui-menu-right > .flex > .comfyui-button-group:nth-child(2) { order: 1; flex-shrink: 0; }\n            html .comfyui-menu-right > .flex > .comfyui-button-group { order: 2; flex-shrink: 0; }\n            \n            html .comfyui-menu #crystools-monitors-root {\n            \n                --ovnRadiusS: var(--ovnBaseRadius);\n                \n                order: 0;\n                margin: 0 auto;\n                flex: 0 1 auto;\n                */\n                    \n            html .comfyui-menu #crystools-monitors-root {\n            \n                --ovnFontSize: 8px;\n                --ovnRadiusS: 3px;\n                \n                position: fixed;\n                top: calc( var(--navHeight) + var(--rgHeight) + 5px );\n                left: 50%;\n                transform: translateX(-50%);\n                width: max-content;\n                \n                .crystools-monitor {\n                    /* display: flex !important; */\n                    align-content: center;\n                    justify-content: center;\n                    border-radius: var(--ovnRadiusS);\n                    background: transparent;\n                }\n                \n                .crystools-monitor[class*="Crystools.ShowRam"] { \n                    order: 1 !important; .crystools-slider { background: #ef5f19 !important; }\n                }\n                .crystools-monitor[class*="Crystools.ShowCpu"] { \n                    order: 2 !important; .crystools-slider { background: #b5e70d !important; }\n                }\n                .crystools-monitor[class*="Crystools.ShowGpuUsageZero"] { \n                    order: 3 !important; .crystools-slider { background: #45d911 !important; }\n                }\n                .crystools-monitor[class*="Crystools.ShowGpuVramZero"] { \n                    order: 4 !important; .crystools-slider { background: #00F29C !important; }\n                }\n                .crystools-monitor[class*="Crystools.ShowGpuTemperatureZero"] { \n                    order: 5 !important; .crystools-slider { background: #8576f7 !important; }\n                }\n                .crystools-monitor[class*="Crystools.ShowHdd"] { \n                    order: 6 !important; .crystools-slider { background: #475295 !important; }\n                }\n                \n                .crystools-slider {\n                    border-radius: var(--ovnRadiusS);\n                }\n                \n                /* .crystools-monitor .crystools-content {\n                    display: flex;\n                    width: 8vw;\n                    max-width: 260px;\n                    height: 12px;\n                } */\n                .crystools-monitor .crystools-content {\n                    display: flex;\n                    width: calc( 100vw / 5 - 126px );\n                    height: var(--ovnFontSize);\n                    background: #0d0f1499 !important;\n                }\n                \n                .crystools-monitor .crystools-text {\n                    bottom: auto;\n                    margin-left: 0;\n                    color: #FFF;\n                    font-size: var(--ovnFontSize);\n                    font-weight: 700;\n                }\n                \n                .crystools-label {\n                    top: 0;\n                    right: 10px;\n                    font-size: var(--ovnFontSize);\n                    font-weight: 700;\n                }\n                \n            }\n        \n        ');
    }),
    y.run('rgthree', () => {
      GM_addStyle('\n        \n            html rgthree-progress-bar { height: var(--rgHeight) !important; }\n            \n            html rgthree-progress-bar {\n                --rgthree-progress-bg-color: #171717cc;\n                --rgthree-progress-nodes-bg-color: #524AF7cc;\n                --rgthree-progress-steps-bg-color: #1dffb7cc;\n                --rgthree-progress-error-bg-color: #e3520ccc;\n            }\n            \n        ');
    }));
  (y.run('YUQUE', () => {
    GM_addStyle('\r\n\r\nhtml {\r\n    \r\n    &:root body {\r\n        \r\n        --ovnYuequeCA: var(--ovnAccentHEX);\r\n        --ovnYuequeCS: var(--ovnSecondaryHEX);\r\n        --ovnYuequeCP: var(--ovnPrimaryHEX);\r\n        --ovnYuequeBG: var(--ovnBase09HEX);\r\n        \r\n        --ovnYuequeRS: var(--ovnBaseRadius);\r\n        --ovnYuequeRU: var(--ovnUIRadius);\r\n        --ovnYuequeRM: var(--ovnPanelRadius);\r\n        --ovnYuequeRL: var(--ovnSurfaceRadius);\r\n        --ovnYuequeRX: var(--ovnRadiusX);\r\n        \r\n        --ovnYuequeV: 260px;                                               \r\n        --ovnYuequeOffset: 0px;                                            \r\n        --ovnYuequeMargin: var(--ovnYuequeV) / 2 + var(--ovnYuequeOffset); \r\n        --ovnYuequeC: 180, 3%, 94%;\r\n        \r\n        @media (width <= 1492px) { --ovnYuequeV: 000px; }\r\n        @media (width >= 1260px) { --ovnYuequeV: 100px; }\r\n        @media (width >= 1920px) { --ovnYuequeV: 260px; }\r\n        \r\n        @media (width >= 1920px) { --ovnYuequeOffset: -40px; }\r\n        @media (width >= 2160px) { --ovnYuequeOffset: -60px; }\r\n        \r\n    }\r\n    \r\n    &.ovn body {\r\n        --xxxxxxxxxx: 000;\r\n    }\r\n    \r\n    \r\n    \r\n        #rc-tabs-0-tab-doc a[data-aspm-param="action=doc"],    \r\n        .ant-row [class*="QuickStart-module_wrapper_"],        \r\n        .ant-row [class*="Dashboard-module_dashboardTitle_"] { \r\n            display: none;\r\n        }\r\n        \r\n        \r\n        \r\n        \r\n        \r\n        \r\n        \r\n        .ant-modal-wrap { backdrop-filter: blur(2px);}\r\n        \r\n        \r\n        div[class*="BookReader-module_wrapper"] { background: transparent; }\r\n        \r\n        \r\n        \r\n            #main {\r\n                .lake-title,         \r\n                .doc-article-title { \r\n                    color: var(--ovnMarkdownH1);\r\n                }\r\n                ne-h1 ne-text { color: var(--ovnMarkdownH1); }\r\n                ne-h2 ne-text { color: var(--ovnMarkdownH2); }\r\n                ne-h3 ne-text { color: var(--ovnMarkdownH3); }\r\n                ne-h4 ne-text { color: var(--ovnMarkdownH4); }\r\n                ne-h5 ne-text { color: var(--ovnMarkdownH5); }\r\n                ne-h6 ne-text { color: var(--ovnMarkdownH6); }\r\n            }\r\n            \r\n        \r\n        \r\n            #main {\r\n                ne-card[data-card-type=block],                     \r\n                ne-card[data-card-type=block] .ne-card-container { \r\n                    border-radius: var(--ovnYuequeRU);\r\n                }\r\n            }\r\n            \r\n        \r\n        \r\n            \r\n            .ͼ1 .cm-lineNumbers .cm-gutterElement { min-width: 3.5em; }\r\n            \r\n        \r\n        \r\n            ne-alert[ne-alert-type=tips] {\r\n                background-color: hsla(var(--ovnYuequeC), .6);\r\n                border: 1px solid hsla(var(--ovnYuequeC), .8);\r\n            }\r\n            .ne-viewer ne-alert[ne-alert-type=tips]:hover {\r\n                border-color: hsla(var(--ovnYuequeC), 1) !important; \r\n            }\r\n            \r\n        \r\n        \r\n            ne-columns ne-column {\r\n                --ovnX: .2;\r\n                line-height: calc(2.6 + .4);\r\n                background: hsla(var(--ovnYuequeC), .4);\r\n                box-shadow: inset 0 0 0 1px hsla(var(--ovnYuequeC), var(--ovnX));\r\n                border-radius: var(--ovnYuequeRU);\r\n            }\r\n            ne-columns ne-column:hover { --ovnX: .9; }\r\n            \r\n            \r\n            ne-columns ne-column ne-column-border { right: -6px; }\r\n            \r\n            \r\n        \r\n        ne-uli-i .ne-list-symbol > span { color: var(--ovnAccentHEX); transform: scale(.35); }\r\n        \r\n        \r\n        ne-code ne-code-content {\r\n            padding: .126em .4em;\r\n            text-shadow: 0 0 .092em currentColor;\r\n        }\r\n        \r\n        \r\n    \r\n    \r\n        :where(.lark:has(.ant-row [class*="QuickStart-module_wrapper_"])) {\r\n            \r\n            [class*="index-module_wrapper_"] .ant-tabs > .ant-tabs-nav { margin-bottom: 20px; }\r\n            \r\n        }\r\n        \r\n        \r\n    \r\n    \r\n        .ne-viewer .ne-viewer-body {\r\n            \r\n            \r\n            ne-alert .ne-alert__content ne-p { margin-bottom: 0; }\r\n            \r\n            \r\n            .ne-code-viewer {\r\n                .ne-codeblock-copy, .ne-codeblock-explain, .ne-codeblock-mode-name, .ne-codeblock-run-button {\r\n                    font-size: 12px;\r\n                }\r\n            }\r\n            \r\n        }\r\n        \r\n        \r\n    \r\n    \r\n        :where(#commonEditPage) {\r\n            \r\n            \r\n            .lake-title-editor :is(.lake-title, .ant-input, .ant-input:focus) { background-color: transparent; }\r\n            \r\n            \r\n            .ne-card-toolbar {\r\n                margin: 10px 0 0;\r\n                border-radius: var(--ovnPanelRadius);\r\n            }\r\n            \r\n        }\r\n        \r\n    \r\n    \r\n        :where(:has(.editor > #lark-mini-editor)) {\r\n            \r\n            \r\n            #doc-reader-comment { position: relative; z-index: 1; }\r\n            \r\n        }\r\n        \r\n        \r\n    \r\n    \r\n        [class*="BookOverview-module_containerWrapper_"] {\r\n            .ovnGrid.ovnSolid::after { display: none; }\r\n        }\r\n        \r\n        \r\n    \r\n    \r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        \r\n        \r\n        \r\n        \r\n        \r\n\r\n\r\n\r\n        \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    /* ================================================== ↓ Global */\r\n    \r\n        html {\r\n            \r\n            /* ========== ↓ 右侧边栏 文档导航 */\r\n            \r\n                .ne-toc-sidebar, [id="sidePanel"][class^="sidePanel-module_panel_"] {\r\n                    \r\n                    background: var(--ovnGlassBase);\r\n                    backdrop-filter: var(--ovnPanelFilter);\r\n                    \r\n                    @media (width >= 1260px) { background: transparent; backdrop-filter: none; }\r\n                    \r\n                }\r\n                .ne-toc-sidebar .ne-toc-view {\r\n                    background-color: transparent;\r\n                    border-radius: var(--ovnYuequeRM) var(--ovnYuequeRU) var(--ovnYuequeRU) var(--ovnYuequeRM);\r\n                }\r\n                \r\n                /* ---------- ↓ 导航线 */\r\n                .ne-toc-normal-view .ne-toc-content:after, .ne-toc-normal-view .ne-toc-content:hover:after {\r\n                    background: transparent;\r\n                }\r\n                \r\n                \r\n            /* ========== ↓ 疑似 表格/数据表全宽 「侧边栏 开启时」 */\r\n            \r\n                [class^="DocReader-module_wrapper_"][data-doc-layout="fixed"]:is( [data-doc-sidebar="true"], [data-doc-toc="true"] )\r\n                    .article-content .ne-doc-major-viewer .ne-viewer-layout-mode-fixed .ne-viewer-body > :is(\r\n                        ne-alert-hole,\r\n                        ne-container-hole,\r\n                        ne-hole,\r\n                        ne-root-card-hole,\r\n                        ne-table-hole\r\n                    ).ne-full-width {\r\n                    width: calc(100% - 305px + var(--ovnYuequeV));\r\n                }\r\n                \r\n                \r\n            /* ========== ↓ 画板 */\r\n            \r\n                /* ---------- ↓ 工具栏 小弹窗 */\r\n                .lake-diagram-toolbar-shape-select-container {\r\n                    width: calc(260px + 40px);\r\n                    max-width: calc(260px + 40px);\r\n                    height: 350px;\r\n                    max-height: 350px;\r\n                }\r\n                .lake-diagram-toolbar-shape-select-container, .ant-popover .ant-popover-inner {\r\n                    border-radius: var(--ovnYuequeRM);\r\n                }\r\n                \r\n                /* ---------- ↓ 原点背景 */\r\n                .lake-board-canvas > .lake-diagram-viewport-container svg {\r\n                    --size: 2px;\r\n                    --gap: 20px;\r\n                    --dot: var(--ovnGridD);\r\n                    \r\n                    background-image:\r\n                        radial-gradient(circle, var(--dot) var(--size), transparent var(--size));\r\n                    background-size: var(--gap) var(--gap);\r\n                    background-repeat: repeat;\r\n                    background-position: 0 0;\r\n                }\r\n                \r\n            \r\n        }\r\n        \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    /* ========== ↓ 内容宽度 */\r\n        \r\n        html .ne-viewer-body > *, html [class*="DocReader-module_header"] { transition: all .92s var(--ovnTransitionSoft) }\r\n        \r\n        /* ========== ↓ 阅读模式 */\r\n        \r\n            /* ========== ↓ 标题 */\r\n            html [class*="DocReader-module_comment"],\r\n            html [class*="DocReader-module_header"],\r\n            html [class*="DocReader-module_info"] {\r\n                max-width: calc(850px + var(--ovnYuequeMargin));\r\n            }\r\n            \r\n            /* ========== ↓ 内容 */\r\n            html .ne-doc-major-viewer .ne-viewer-layout-mode-fixed .ne-viewer-body ne-root-card-hole.ne-full-width,   /* 数据表 预览模式 */\r\n            html .ne-doc-major-viewer .ne-viewer-layout-mode-fixed .ne-viewer-body > * {\r\n                max-width: calc(750px + var(--ovnYuequeV));\r\n            }\r\n            \r\n            html .article-content .ne-doc-major-viewer .ne-viewer-layout-mode-adapt .ne-viewer-body > *,\r\n            html .article-content .ne-doc-major-viewer .ne-viewer-layout-mode-fixed .ne-viewer-body > * {\r\n                margin-right: calc(var(--viewer-center-align-right) - var(--ovnYuequeMargin)) !important;\r\n            }\r\n            /* ========== ↓ 代码块 */\r\n            html .article-content .ne-doc-major-viewer .ne-viewer-layout-mode-fixed .ne-viewer-body > ne-alert-hole,\r\n            html .article-content .ne-doc-major-viewer .ne-viewer-layout-mode-fixed .ne-viewer-body > ne-container-hole,\r\n            html .article-content .ne-doc-major-viewer .ne-viewer-layout-mode-fixed .ne-viewer-body > ne-hole {\r\n                width: calc(100% - var(--viewer-center-align-value) + var(--ovnYuequeV));\r\n            }\r\n            \r\n        /* ========== ↓ 编辑模式 */\r\n        \r\n            /* ========== ↓ 标题 */\r\n            html .ne-doc-major-editor .ne-editor.layout-read-write:not(.ne-layout-mode-adapt) .ne-editor-extra-box {\r\n                max-width: calc(890px + var(--ovnYuequeMargin));\r\n            }\r\n            \r\n            /* ========== ↓ 内容 */\r\n            html .ne-doc-major-editor .ne-layout-mode-fixed:not(.ne-normal-toc):not(.ne-ui-sidebar-visible) .ne-engine ne-root-card-hole.ne-full-width, /* 数据表 编辑模式 */\r\n            html .ne-doc-major-editor .ne-editor.layout-read-write:not(.ne-layout-mode-adapt) .ne-engine>:not(.ne-full-width) {\r\n                margin-right: calc(var(--center-editor-margin-right) - var(--ovnYuequeMargin)) !important;\r\n                max-width: calc(750px + var(--ovnYuequeV));\r\n            }\r\n            html .ne-layout-mode-adapt .ne-editor-wrap-box, html .ne-layout-mode-fixed .ne-editor-wrap-box { background-color: transparent; }\r\n            \r\n            /* ========== ↓ 表格 */\r\n            html .ne-doc-major-editor .ne-layout-mode-fixed.ne-normal-toc:not(.ne-ui-sidebar-visible).ne-viewport-size-toc-XXL .ne-engine ne-table-hole {\r\n                max-width: calc(752px + var(--ovnYuequeV));\r\n            }\r\n            \r\n        \r\n        \r\n        \r\n    \r\n    \r\n    \r\n        \r\n        \r\n    /* ========== ↓ Picture */\r\n    \r\n        html .ne-image-wrap .ne-image-box {\r\n            overflow: visible;\r\n            background: transparent;\r\n        }\r\n        html .ne-image-wrap,\r\n        html .ne-viewer ne-card[data-card-type=inline][data-card-name=image], /* 预览模式 */\r\n        html .ne-editor ne-card[data-card-type=inline][data-card-name=image] /* 编辑模式 */ {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n        }\r\n        \r\n        html .ne-paragraph-spacing-relax.ne-typography-classic ne-card[data-card-name=image] img {\r\n            border-radius: var(--ovnPanelRadius);\r\n            filter: drop-shadow(0 20px 30px hsla(var(--ovnBase04HSL), 0.050));\r\n            transition: all .526s var(--ovnTransitionSoft);\r\n        }\r\n        html .ne-paragraph-spacing-relax.ne-typography-classic ne-card[data-card-name=image] img:hover {\r\n            filter: drop-shadow(0 20px 30px hsla(var(--ovnAccentHSL), 0.260));\r\n            \r\n        }\r\n        \r\n        /* ---------- ↓ 默认样式 */\r\n        \r\n            /* ---------- ↓ Hover */\r\n            html .ne-editor ne-card[data-card-type=inline][data-card-name=image].ne-card-hovered .ne-image-wrap,\r\n            html .ne-editor ne-card[data-card-type=inline][data-card-name=image].ne-focused .ne-image-wrap {\r\n                border-color: transparent;\r\n            }\r\n            /* ---------- ↓ 选中图片的默认边框 */\r\n            html .ne-active .ne-ui-image-resizer-box { display: none; }\r\n            \r\n            \r\n            \r\n    \r\n    \r\n    \r\n            \r\n            \r\n            \r\n    /* ========== ↓ Table 「下方功能添加 ovnTable样式 此处仅作修复显示」 */\r\n    \r\n        html ne-table-wrap.ne-ui-table-right-shadow:after { display: none; }\r\n    \r\n        /* ---------- ↓ table 外层容器 */\r\n        html .ne-table-hole > ne-table-wrap > ne-table-inner-wrap {\r\n            overflow: visible !important;\r\n        }\r\n        \r\n        /* ---------- ↓ 标题 */\r\n        html table[ne-table-row-head=true]:not([ne-table-head-text-gradient=true]) tr:first-child td .ne-td-content>.ne-b-filler,\r\n        html table[ne-table-row-head=true]:not([ne-table-head-text-gradient=true]) tr:first-child td ne-text {\r\n            font-weight: 700 !important;\r\n            color: #4D4D4D !important;\r\n        }\r\n        \r\n        /* ---------- ↓ 标题 背景及边框 */\r\n        html table[ne-table-row-head=true]:not([ne-table-head-text-gradient=true]) tr:first-child td {\r\n            background-color: #FAFAFA !important;\r\n            border-color: #00000000 !important;\r\n        }\r\n        html table[ne-table-row-head=true]:not([ne-table-head-text-gradient=true]) tr:first-child td:not(:first-child, :last-child) {\r\n            border-left: 1px solid #00000010 !important;\r\n            border-right: 1px solid #00000010 !important;\r\n        }\r\n        \r\n        /* ---------- ↓ Sticky */\r\n        html ne-table-hole[class="ne-table-hole"] > ne-table-wrap > div[style*="top: 0px"] {\r\n            top: -27px !important;\r\n        }\r\n        \r\n        html tr.ne-tr.ne-tr-sticky {\r\n            top: calc(79px - 27px) !important;\r\n            border-radius: 0 0 var(--ovnSurfaceRadius) var(--ovnSurfaceRadius);\r\n        }\r\n        \r\n        ');
  }),
    y.run('ovnTable', () => {
      L.apply({ target: ['#main table:not(.data-table-card table)'], subjoin: ['ovnTable'] });
    }),
    y.run('ovnGrid', () => {
      L.apply({ target: ['.ne-viewer .ne-viewer-body', '.ne-editor.layout-read-write .ne-editor-wrap-content'], subjoin: ['ovnGrid', 'ovnSolid'] });
    }));
  y.run('TickTick', () => {
    GM_addStyle('\r\n\r\nhtml {\r\n    \r\n    &:root body {\r\n        \r\n        --ovnTickWidth: var(--ovnSpaceWidth02);     \r\n        --ovnTickHight: var(--ovnSpace2Y);          \r\n        \r\n        --ovnTickRS: var(--ovnBaseRadius);\r\n        --ovnTickRU: var(--ovnUIRadius);\r\n        --ovnTickRM: var(--ovnPanelRadius);\r\n        --ovnTickRL: var(--ovnSurfaceRadius);\r\n        --ovnTickRX: var(--ovnRadiusX);\r\n        \r\n    }\r\n    \r\n    .XXXXXXXXXX, /* ==== XXXXX */\r\n    .XXXXXXXXXX, /* ==== XXXXX */\r\n    .XXXXXXXXXX  /* ==== XXXXX */ {\r\n        display: none;\r\n    }\r\n    \r\n    \r\n        \r\n        \r\n        .shadow-default, .shadow-md {\r\n            box-shadow: var(--ovnUIShadow) hsla(var(--ovnBase04HSL), .12);\r\n        }\r\n        \r\n        \r\n    \r\n    \r\n        \r\n        \r\n        \r\n        .bg-sidebar-bg-color { background: transparent; }\r\n        \r\n        \r\n        #column-list-inner > article { width: var(--ovnSpace4Y) !important; }\r\n        \r\n        \r\n        \r\n        \r\n        \r\n        \r\n        \r\n}\r\n\r\n\r\n\r\n');
  });
  y.run('Youtube', () => {
    GM_addStyle('\r\n\r\nhtml {\r\n    \r\n    &:root body {\r\n        \r\n        --ovnYoutubeVideo: 6;                    \r\n        --ovnYoutubeShots: 8;                    \r\n        --ovnYoutubeWidth: 300px;                \r\n        --ovnYoutubeBlur: var(--ovnUIFilter);    \r\n        \r\n        --ovnYoutubeRS: var(--ovnBaseRadius);\r\n        --ovnYoutubeRU: var(--ovnUIRadius);\r\n        --ovnYoutubeRM: var(--ovnPanelRadius);\r\n        --ovnYoutubeRL: var(--ovnSurfaceRadius);\r\n        --ovnYoutubeRX: var(--ovnRadiusX);\r\n        \r\n    }\r\n    \r\n    .XXXXXXXXXX,  \r\n    .XXXXXXXXXX { \r\n        display: none;\r\n    }\r\n    \r\n    \r\n        \r\n        @media (width >= 1500px) {\r\n            \r\n            \r\n            ytd-rich-grid-renderer[is-default-grid] ytd-rich-item-renderer[rendered-from-rich-grid] {\r\n                --ytd-rich-grid-items-per-row: var(--ovnYoutubeVideo);\r\n            }\r\n            \r\n            \r\n            ytd-rich-shelf-renderer[is-shorts] ytd-rich-item-renderer[items-per-row][is-slim-media] {\r\n                --ytd-rich-grid-items-per-row: var(--ovnYoutubeShots);\r\n            }\r\n            \r\n            \r\n            \r\n            \r\n            \r\n            \r\n            \r\n                \r\n            ytd-ghost-grid-renderer {\r\n                --ytd-rich-grid-items-per-row: var(--ovnYoutubeVideo);\r\n            }\r\n            \r\n        }\r\n        \r\n\r\n    \r\n    \r\n        :where(.watch-root-element) {\r\n            \r\n            &[theater] {\r\n                \r\n                .xxxxx { color: var(); }\r\n                \r\n            }\r\n            \r\n            &[fullscreen] {\r\n                \r\n                .ytp-fullscreen-grid-expand-button {\r\n                    backdrop-filter: var(--ovnYoutubeBlur);\r\n                }\r\n                @media (width > 2200px) {\r\n                    .ytp-fullscreen-grid-stills-container { grid-template-columns: repeat(6, 1fr); }\r\n                }\r\n                \r\n            }\r\n            \r\n            \r\n            \r\n                &.watch-root-element {\r\n                    .html5-video-player a:hover,                                    \r\n                    .ytp-fullscreen-grid-expand-button,                             \r\n                    .ytPlayerQuickActionButtonsHost:not(:empty),                    \r\n                    .ytp-delhi-modern .ytp-popup,                                   \r\n                    .ytp-delhi-modern .ytp-volume-area,                             \r\n                    .ytp-delhi-modern .ytp-chrome-controls .ytp-play-button,        \r\n                    .ytp-delhi-modern .ytp-chrome-controls .ytp-right-controls,     \r\n                    .ytp-delhi-modern .ytp-time-wrapper:not(.ytp-miniplayer-ui *) { \r\n                        backdrop-filter: var(--ovnYoutubeBlur);\r\n                    }\r\n                }\r\n                \r\n                \r\n                .html5-video-player .caption-visual-line .ytp-caption-segment:last-child {\r\n                    padding: 2px 10px;\r\n                    margin: 2px 0;\r\n                    font-size: 32px !important;\r\n                    background: hsla(var(--ovnBase00HSL), .6) !important;\r\n                    border-radius: var(--ovnYoutubeRS);\r\n                    backdrop-filter: var(--ovnYoutubeBlur);\r\n                }\r\n                \r\n                \r\n                .ytp-delhi-modern .ytp-progress-list {\r\n                    background: hsla(var(--ovnBase09HSL), .2);\r\n                    backdrop-filter: var(--ovnYoutubeBlur);\r\n                }\r\n                \r\n        }\r\n        \r\n    \r\n    \r\n        :where(.ytd-search[page-subtype="search"]) {\r\n            \r\n            \r\n            \r\n                ytd-video-renderer[use-bigger-thumbs][bigger-thumbs-style=BIG] ytd-thumbnail.ytd-video-renderer {\r\n                    max-width: var(--ovnYoutubeWidth);\r\n                }\r\n                \r\n                \r\n                .ytLockupViewModelHorizontal .ytLockupViewModelContentImage {\r\n                    max-width: var(--ovnYoutubeWidth);\r\n                }\r\n                \r\n            \r\n            \r\n                .shortsLockupViewModelHost { width: var(--ytd-shorts-width, 100%); }\r\n                .ytThumbnailViewModelAspectRatio2By3 { padding-top: 175%; }\r\n                \r\n            \r\n            \r\n                \r\n                \r\n                \r\n                \r\n                \r\n                \r\n                \r\n                \r\n                \r\n                \r\n                \r\n                \r\n                \r\n                \r\n                \r\n        }\r\n        \r\n}\r\n\r\n\r\n\r\n');
  });
  function b() {
    try {
      (x.SCHEDULER.run(), x.DEBUG.infoTotal());
    } catch (n) {
      console.error('[==👽OVN==] | [Global.Custom] 启动出错:', n.stack);
    }
  }
  (y.run('Bilibili', () => {
    GM_addStyle('\r\n\r\nhtml {\r\n    \r\n    &:root body {\r\n        \r\n        --ovnBiliCount: 15;\r\n        --ovnBiliPlayList: calc(35px * var(--ovnBiliCount));      \r\n        --ovnBiliBase: hsla(var(--ovnAccentHSL-H), 10%, 20%, 1);  \r\n        --ovnBiliShadow: var(--ovnGlassShadow);\r\n        --ovnBiliBlur: var(--ovnPanelFilter);\r\n        \r\n        --ovnBiliRS: var(--ovnBaseRadius);\r\n        --ovnBiliRU: var(--ovnUIRadius);\r\n        --ovnBiliRM: var(--ovnPanelRadius);\r\n        --ovnBiliRL: var(--ovnSurfaceRadius);\r\n        --ovnBiliRX: var(--ovnRadiusX);\r\n        \r\n    }\r\n    \r\n    \r\n    \r\n        \r\n        .header-channel,            \r\n        .bili-header .mini-header { \r\n            box-shadow: var(--ovnBiliShadow);\r\n        }\r\n        \r\n        \r\n    \r\n    \r\n        :where(#mirror-vdcon) {\r\n        \r\n            \r\n            \r\n                \r\n                \r\n                \r\n                \r\n                #playerWrap:not(:has(.bpx-player-container:is(\r\n                    [data-screen="web"],  \r\n                    [data-screen="full"], \r\n                    [data-screen="mini"]  \r\n                ))) {\r\n                    border-radius: var(--ovnBiliRU);\r\n                    .bpx-player-video-area {\r\n                        border-radius: var(--ovnBiliRM);\r\n                        box-shadow: 0 20px 20px hsla(var(--ovnAccentHSL), .2);\r\n                    }\r\n                }\r\n                .bpx-player-video-wrap video {\r\n                    background:\r\n                        radial-gradient(\r\n                            circle at 50% 50%,\r\n                            hsla(0, 0%, 0%, .5) 000%,\r\n                            hsla(0, 0%, 0%, .5) 050%,\r\n                            hsla(0, 0%, 0%, .2) 100%\r\n                        ),\r\n                        linear-gradient( \r\n                            to bottom,\r\n                            var(--ovnBiliBase) 000%,\r\n                            hsla(0, 0%, 0%, 1) 050%,\r\n                            var(--ovnBiliBase) 100%\r\n                        );\r\n                }\r\n                .bpx-player-video-perch, .bpx-player-video-wrap, .bpx-docker-major,\r\n                .bpx-player-container, .bpx-player-primary-area, .bpx-player-video-area {\r\n                    background: var(--bpx-dmsend-main-bg, #FFF);\r\n                }\r\n                \r\n                \r\n                \r\n                \r\n                \r\n                \r\n                \r\n                    \r\n                    #bilibili-player-placeholder, .bpx-player-container { box-shadow: none; }\r\n                    \r\n                    .video-toolbar-container, .bpx-player-sending-bar, .bpx-player-sending-area:before {\r\n                        background: transparent;\r\n                    }\r\n                    \r\n                    \r\n                    .bpx-player-container[data-screen="normal"] .bpx-player-video-wrap  video {\r\n                        box-shadow: inset 0 0 0 1px var(--bpx-dmsend-main-bg);\r\n                        border-radius: var(--ovnBiliRM);\r\n                    }\r\n                    \r\n                \r\n                .bpx-player-progress-schedule.bpx-player-progress-schedule-segment { border-radius: var(--ovnBiliRX); }\r\n                \r\n                \r\n                .bpx-player-sending-bar .bpx-player-video-inputbar { backdrop-filter: var(--ovnBiliBlur); }\r\n                \r\n                \r\n                .bpx-player-ctrl-eplist-menu-wrap { width: max-content; }\r\n                .bpx-player-ctrl-eplist-multi-menu-item .bpx-common-svg-icon { order: 1; }\r\n                \r\n            \r\n            \r\n                .simple-base-item .title { font-size: 14px; justify-content: space-between; }\r\n                .simple-base-item .title .title-txt { order: 1; }\r\n                .simple-base-item .title .playing-gif { order: 2; margin: 0 4px; }\r\n                .simple-base-item.normal.active { border-radius: var(--ovnBiliRS); }\r\n                \r\n                \r\n                .video-pod .video-pod__header .header-bottom .right .subscribe-btn.subscribe-btn {\r\n                    border-radius: var(--ovnBiliRS);\r\n                }\r\n                \r\n                .video-pod .video-pod__body.video-pod__body {\r\n                    max-height: var(--ovnBiliPlayList);\r\n                }\r\n                \r\n                \r\n            \r\n            .bpx-player-container[data-screen="mini"] { border-radius: var(--ovnBiliRU); }\r\n            \r\n            \r\n            .left-container :is(.video-toolbar-container, .video-tag-container) { border-color: #00000010; }\r\n            \r\n        }\r\n        \r\n}\r\n\r\n\r\n\r\n');
  }),
    y.run('Eagle', () => {
      GM_addStyle('\n        html {\n            \n            .eagle-drop-area .eagle-drop-area-content .title[eagle-extension][eagle-extension-theme="dark"],\n            [eagle-extension][eagle-extension-theme="dark"] .eagle-drop-area .eagle-drop-area-content .title {\n                border: none;\n            }\n            \n            /* #document 导致无法修改\n            .collect-window {\n                display: flex;\n                max-height: 900px;\n            }\n            .collect-window > .right {\n                flex: 1;\n                min-width: 0;\n            }\n            .collect-window>.right folder-select-panel .folder-select-panel {\n                width: 100%;\n            }\n            .collect-window>.right folder-select-panel .folder-select-panel .panel-list select-panel-list {\n                width: 100%;\n                height: 100%;\n                max-height: 100% !important;\n            }\n             */\n            \n        }\n    ');
    }),
    y.run('NetDisk_Check', () => {
      GM_addStyle('\n        html {\n            \n            /* ========== 连接正确 */\n            \n                .one-pan-tip { text-decoration: none;}\n                .one-pan-tip::before {\n                    height: .95em;\n                    width: .95em;\n                    margin: 0 .15em .15em;\n                    background-image: var(--ovnICON-Correct);\n                }\n                \n            /* ========== 连接错误 */\n            \n                .one-pan-tip-error { text-decoration: none;}\n                .one-pan-tip-error::before {\n                    background-image: var(--ovnICON-Error);\n                }\n                \n            /* ========== 带提取码 */\n            .one-pan-tip-lock::before { background-image: var(--ovnICON-Safety); }\n            \n            /* ========== 夸克 */\n            .one-pan-tip-partial::before { background-image: var(--ovnICON-Info); }\n            \n        }\n    ');
    }),
    y.run('Micro_Other', () => {
      (l.match({ include: ['*github.com/*'], exclude: [] }) && GM_addStyle('\n            html {\n                \n                &.ovn {\n                    \n                    --ovnGithubWidth: 1126px;\n                    --ovnGithubXXX: #000;\n                    \n                    --ovnHistoryHue: 192;\n                    \n                }\n                \n                &[data-color-mode="dark"][data-color-mode="dark"],\n                &[data-color-mode="auto"][data-color-mode="auto"] {\n                    \n                    --borderColor-default: #3d444d24;\n                    --borderColor-muted: #3d444d24;\n                    --display-orange-scale-0: hsla(var(--ovnHistoryHue), 40%, 12%, 1);\n                    --display-orange-scale-1: hsla(var(--ovnHistoryHue), 52%, 15%, 1);\n                    --display-orange-scale-2: hsla(var(--ovnHistoryHue), 77%, 22%, 1);\n                    --display-orange-scale-3: hsla(var(--ovnHistoryHue), 80%, 27%, 1);\n                    --display-orange-scale-4: hsla(var(--ovnHistoryHue), 81%, 33%, 1);\n                    --display-orange-scale-5: hsla(var(--ovnHistoryHue), 83%, 42%, 1);\n                    --display-orange-scale-6: hsla(var(--ovnHistoryHue), 85%, 54%, 1);\n                    --display-orange-scale-7: hsla(var(--ovnHistoryHue), 87%, 59%, 1);\n                    --display-orange-scale-8: hsla(var(--ovnHistoryHue), 89%, 69%, 1);\n                    --display-orange-scale-9: hsla(var(--ovnHistoryHue), 91%, 77%, 1);\n                    \n                    // --data-orange-color-emphasis: hsla(190,81%,33%,1);\n                    // --data-orange-color-muted: hsla(190,72%,11%,1);\n                    \n                    // --display-orange-bgColor-emphasis: hsla(190,81%,33%,1);\n                    // --display-orange-bgColor-muted: hsla(190,72%,11%,1);\n                    // --display-orange-borderColor-emphasis: hsla(190,83%,42%,1);\n                    // --display-orange-borderColor-muted: hsla(190,74%,15%,1);\n                    // --display-orange-fgColor: hsla(190,85%,54%,1);\n                    \n                    // --label-orange-bgColor-active: hsla(190,77%,22%,1);\n                    // --label-orange-bgColor-hover: hsla(190,74%,15%,1);\n                    // --label-orange-bgColor-rest: hsla(190,72%,11%,1);\n                    // --label-orange-borderColor: hsla(190,0%,0%,0);\n                    // --label-orange-fgColor-active: hsla(190,89%,69%,1);\n                    // --label-orange-fgColor-hover: hsla(190,87%,59%,1);\n                    // --label-orange-fgColor-rest: hsla(190,85%,54%,1);\n                    \n                }\n                \n                &[data-color-mode="dark"][data-dark-theme="dark_dimmed"],\n                &[data-color-mode="auto"][data-light-theme="dark_dimmed"] {\n                    --borderColor-default: #3d444d40;\n                    --borderColor-muted: #3d444d40;\n                }\n                \n                :focus-visible {\n                    outline: 2px solid #478FE5;\n                    outline-offset: -2px;\n                    border-radius: var(--ovnBaseRadius);\n                }\n                \n                .container-xl { max-width: calc(var(--ovnGithubWidth) + 300px); }\n                .prc-PageLayout-Content-xWL-A:where([data-width=large]) { max-width: var(--ovnGithubWidth); }\n                \n                /* ========== 导航条 分类 */\n                .MarketingNavigation-module__list__tFbMb { width: max-content; }\n                \n                .markdown-body .highlight pre, .markdown-body pre { font-size: 75%; line-height: 1.7; }\n                \n            }\n        '), l.match({ include: ['*notion.so/*'], exclude: [] }) && GM_addStyle('\n            html {\n                \n                .layout.layout-reskin-wider {\n                    --content-width: minmax(auto, var(--ovnSpaceWidth02));\n                }\n                \n            }\n        '), l.match({ include: ['*developer.mozilla.org/*'], exclude: [] }) && GM_addStyle('\n            html.ovn {\n                \n                @media (width >= 1920px) {\n                    --font-line-content: 1.5;\n                    --layout-side-padding: max(var(--layout-side-padding-min), calc(45vw - 720px + 1rem));\n                    --layout-content-max: 59rem;\n                }\n                \n            }\n        '), l.match({ include: ['*workona.com/*'], exclude: [] }) && GM_addStyle('\n            html {\n            \n                :is(.style_draggableItem__m8Jpw .style_content__AHpFv, .style_list__v0p3N .style_root__ybLxR )\n                :not(.material-icons) {\n                    font-family: var(--ovnCodeFont) !important;\n                }\n                \n                /* ========== 粘滞行 */\n                [class*="style_column"] > [id*="drg-blk"] > div > [class*="style_root"]:has(+[class*="style_block"]) {\n                    position: sticky;\n                    top: 0;\n                    z-index: 1;\n                    background: var(--ovnGlassBase);\n                    backdrop-filter: var(--ovnBaseFilter);\n                }\n                \n            }\n        '));
      const r = ['*greasyfork.org/*'],
        e = n.apply('micro-greasyfork', {});
      for (const n of e) n && Array.isArray(n.domains) && r.push(...n.domains);
      (l.match({ include: r, exclude: [] }) && (GM_addStyle('\n            html {\n            \n                p, li { line-height: 1.5; }\n                \n                .code-container {\n                    border-color: #e5e5e5c4;\n                    border-radius: var(--ovnBaseRadius);\n                    padding-top: 15px;\n                    margin-top: 10px;\n                }\n                ol.linenums {\n                    padding-left: 4em;\n                    font-size: 10px;\n                    li { line-height: 1.9; }\n                }\n                pre.prettyprint {\n                    padding: 0;\n                    border-color: transparent;\n                }\n                \n                code {\n                    padding: .126em .4em;\n                    text-shadow: 0 0 .126em currentColor;\n                    border-radius: var(--ovnBaseRadius);\n                }\n                ul:not(.block-list) code { background: #e9eaed; }\n                \n                .user-content { background: none; border-color: transparent; }\n                #additional-info img { border-radius: var(--ovnBaseRadius); }\n                #additional-info hr { opacity: .4; }\n                \n                .install-link, .install-link:visited, .install-link:active, .install-link:hover, .install-help-link { display: inline; }\n                \n                .form-control textarea:not([rows]), #ace-editor {\n                    padding: 20px 10px;\n                    margin: 10px 0;\n                    height: 24em;\n                    border-color: #00000012;\n                    border-radius: 12px;\n                }\n                \n                .list-option-group a { text-decoration: none; }\n                \n                .inline-script-stats dt, .inline-script-stats dd { line-height: 22px; }\n                #script-stats .block-list.expandable.collapsed { width: max-content; max-width: 620px; }\n                \n            }\n        '), L.apply({ target: ['body a[href]:not(#script-links [href], #install-area [href], #script-list-option-groups [href], #main-header [href], .series-nav a):not(:has(img))', '#main-header a[href]:not(#site-name [href])', '.browser-list-selector:not(.browser-list-selector-active)'], subjoin: ['ovnLink'] })), l.match({ include: ['*openuserjs.org/*'], exclude: [] }) && GM_addStyle('\n            html {\n                \n                body { max-width: var(--ovnSpaceWidthVW); margin: 0 auto; }\n                \n            }\n        '), l.match({ include: ['*shenyandayi.com/*'], exclude: [] }) && GM_addStyle('\n            html {\n                \n                #root { background-color: #f5f5f5; }\n                .result-page { background-color: transparent; }\n                .result.theme-wantwords {\n                    width: var(--ovnSpaceWidthVW);\n                    margin: 0 auto;\n                }\n                \n            }\n        '), l.match({ include: ['*wikipedia.org/*'], exclude: [] }) && GM_addStyle('\n            html {\n                \n                &:root body {\n                    \n                    --ovnWikiCA: var(--ovnAccentHEX);\n                    --ovnWikiCS: var(--ovnSecondaryHEX);\n                    --ovnWikiCP: var(--ovnPrimaryHEX);\n                    --ovnWikiBG: var(--ovnBase09HEX);\n                    --ovnWikiLine: #00000020;\n                    \n                    --ovnWikiRS: var(--ovnBaseRadius);\n                    --ovnWikiRU: var(--ovnUIRadius);\n                    --ovnWikiRM: var(--ovnPanelRadius);\n                    --ovnWikiRL: var(--ovnSurfaceRadius);\n                    --ovnWikiRX: var(--ovnRadiusX);\n                    \n                    --ovnWikiW: var(--ovnSpaceWidth02);\n                    \n                }\n                \n                /* body { font-size: 92%; } */\n                .vector-body { line-height: 1.9; }\n                \n                .mp-2012-column-right-block,\n                .mw-parser-output #mp-2012-links table {\n                    border-radius: var(--ovnWikiRU);\n                }\n                \n                .infobox {\n                    border-radius: var(--ovnWikiRU);\n                    border-color: var(--ovnWikiLine);\n                }\n                \n                .wikitable {\n                    overflow: hidden;\n                    border-radius: var(--ovnWikiRU);\n                    box-shadow: 0 0 0 1px var(--ovnWikiLine);\n                }\n                .wikitable > tr > th,\n                .wikitable > tr > td,\n                .wikitable > * > tr > th,\n                .wikitable > * > tr > td {\n                    border-color: var(--ovnWikiLine);\n                }\n                \n            }\n        '), l.match({ include: ['*dillinger.io/*'], exclude: [] }) && GM_addStyle('\n        \n            html, body { font-family: var(--ovnBaseFont); }\n            html .ace_editor { font-family: var(--ovnCodeFont) !important;}\n            \n        '), l.match({ include: ['*acronymfinder.com/*'], exclude: [] }) && GM_addStyle('\n            html {\n                \n                /* [id*="vw"], [id*="xj"]  */\n                [id^="wl"], [id^="te"] /* 不知名白色块 疑似AD */{\n                    display: none;\n                }\n                \n                .container { max-width: var(--ovnSpaceWidthVW); padding: 0; margin: 0 auto; }\n                .search-main .form-control { width: 500px; }\n                .search-results .tabs .no-link { width: max-content; }\n                \n                .r0, .r1, .r2, .r3, .r4, .r5 {\n                    display: flex;\n                    justify-content: space-between;\n                    font-weight: bold;\n                }\n                \n            }\n        '), l.match({ include: ['*abbreviations.com/*'], exclude: [] }) && GM_addStyle('\n            html {\n                \n                &:root body {\n                    \n                    --ovnAbbrWidth: 1260px;\n                    --ovnAbbrAside: 330px;\n                    \n                }\n                \n                #main, .content-top, #header-int, .page-top-search { max-width: var(--ovnAbbrWidth); }\n                \n                .page-word-search { width: calc(100% - var(--ovnAbbrAside)); }\n                #content-aside { max-width: var(--ovnAbbrAside); }\n                \n                .cblocks .cblock,\n                .category-header,\n                .translate .well,\n                .biblio .well,\n                #content-main .callout,\n                #content-main .siteprop,\n                #content-body > div > section.split > .row > div > div,\n                #content-body > section.split > div {\n                    box-shadow: 0 .5em 2em 0 hsla(184, 22%, 14%, .12);\n                }\n                \n                @media (width >= 768px) {\n                    \n                    #main , #header, #footer { min-width: var(--ovnAbbrWidth); }\n                    \n                    .col-sm-8 { width: calc(100% - var(--ovnAbbrAside) ); }\n                    .col-sm-push-4 { left: calc(var(--ovnAbbrAside)); }\n                    .col-sm-pull-8 { right: calc(100% - var(--ovnAbbrAside)); }\n                    \n                }\n                \n            }\n        '), l.match({ include: ['*bigjpg.com/*'], exclude: [] }) && GM_addStyle('\n            html {\n                \n                @media (width >= 768px) {\n                    \n                    .container { max-width: none; }\n                    .jumbotron { padding-top: 80px; padding-bottom: 80px; }\n                    \n                }\n                \n            }\n        '), l.match({ include: ['*douyin.com/*'], exclude: [] }) && (GM_addStyle('\n        \n            html.ovn, html body, html body > div:first-child { height: auto; }\n            \n        '), j.apply({ key: 'alt', ReLimits: 'all' })), l.match({ include: ['*mp.weixin.qq.com/*'], exclude: [] }) && GM_addStyle('\n            html {\n                \n                .pages_skin_pc.wx_wap_desktop_fontsize_2 .rich_media_area_primary_inner {\n                    max-width: var(--ovnSpaceWidth02);\n                }\n                \n            }\n        '), l.match({ include: ['*docs.emmet.io/*'], exclude: [] }) && GM_addStyle('\n            html {\n                \n                .wrapper { width: var(--ovnSpaceWidthVW); }\n                \n            }\n        '), l.match({ include: ['*ffmpeg.bmmmd.com/*'], exclude: [] }) && (GM_addStyle('\n            html {\n                \n                .nav-brand p { display: none; }\n                \n            }\n        '), (document.title = 'FF.MPEG')), l.match({ include: ['*periodic-table-tags-mu-six.vercel.app/*'], exclude: [] }) && GM_addStyle('\n            html {\n                \n                .title h1 { display: none; }\n                .star { margin: 100px 0; }\n                .intro { margin: 24vh 0 14vh 20vw; }\n                .elements[data-v-ff33deea] {\n                    width: 5rem;\n                    font-family: var(--ovnCodeFont);\n                    font-size: var(--ovnCodeSize);\n                    border-radius: var(--ovnUIRadius);\n                    transition: all .526s var(--ovnTransitionSoft);\n                }\n                .elements:hover {\n                    z-index: var(--ovnPriority00);\n                    box-shadow:\n                        0 0 0 2px #00000080,\n                        var(--ovnPanelShadow) hsla(var(--ovnBase02HSL), .8) !important;\n                    transform: var(--ovnUIZoomIn);\n                }\n                .elements[data-v-ff33deea]:has(.info) { z-index: var(--ovnPriority00); }\n                .elements .info[data-v-ff33deea] { border-radius: var(--ovnPanelRadius);}\n                \n            }\n        '));
    }),
    (function () {
      if ('undefined' == typeof window || (!window.OVN_GLOBAL_CUSTOM && window.top === window.self)) {
        window.OVN_GLOBAL_CUSTOM = !0;
        try {
          'loading' === document.readyState ? document.addEventListener('DOMContentLoaded', b, { once: !0 }) : 'interactive' === document.readyState ? requestAnimationFrame(() => requestAnimationFrame(b)) : b();
        } catch (n) {
          console.error('[==👽OVN==] | [Global.Custom] 初始化失败:', n);
        }
      }
    })());
})();
