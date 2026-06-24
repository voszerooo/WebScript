

import { OVN_MATCH_RULE }        from '../../store/infra/match.js';
import { OVN_GLOBAL_SCHEDULER }  from '../../store/core/scheduler.js';
import { OVN_SUBJOIN_HOOK }      from '../../store/core/hook.js';
import { OVN_ADD_CLASS }         from '../../store/utils/add-class.js';
import { OVN_REMOVE_LIMITS }     from '../../store/utils/remove-limits.js';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("Eagle", () => {
    
    GM_addStyle( /* css */ `
        html {
            
            .eagle-drop-area .eagle-drop-area-content .title[eagle-extension][eagle-extension-theme="dark"],
            [eagle-extension][eagle-extension-theme="dark"] .eagle-drop-area .eagle-drop-area-content .title {
                border: none;
            }
            
            /* #document 导致无法修改
            .collect-window {
                display: flex;
                max-height: 900px;
            }
            .collect-window > .right {
                flex: 1;
                min-width: 0;
            }
            .collect-window>.right folder-select-panel .folder-select-panel {
                width: 100%;
            }
            .collect-window>.right folder-select-panel .folder-select-panel .panel-list select-panel-list {
                width: 100%;
                height: 100%;
                max-height: 100% !important;
            }
             */
            
        }
    `);
    
});


OVN_GLOBAL_SCHEDULER.run("NetDisk_Check", () => {
    
    GM_addStyle( /* css */ `
        html {
            
            /* ========== 连接正确 */
            
                .one-pan-tip { text-decoration: none;}
                .one-pan-tip::before {
                    height: .95em;
                    width: .95em;
                    margin: 0 .15em .15em;
                    background-image: var(--ovnICON-Correct);
                }
                
            /* ========== 连接错误 */
            
                .one-pan-tip-error { text-decoration: none;}
                .one-pan-tip-error::before {
                    background-image: var(--ovnICON-Error);
                }
                
            /* ========== 带提取码 */
            .one-pan-tip-lock::before { background-image: var(--ovnICON-Safety); }
            
            /* ========== 夸克 */
            .one-pan-tip-partial::before { background-image: var(--ovnICON-Info); }
            
        }
    `);
    
});


OVN_GLOBAL_SCHEDULER.run("Micro_Other", () => {
    
    if (OVN_MATCH_RULE.match({
        include: [ "*github.com/*" ], exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html {
                
                &.ovn {
                    
                    --ovnGithubWidth: 1126px;
                    --ovnGithubXXX: #000;
                    
                    --ovnHistoryHue: 192;
                    
                }
                
                &[data-color-mode="dark"][data-color-mode="dark"],
                &[data-color-mode="auto"][data-color-mode="auto"] {
                    
                    --borderColor-default: #3d444d24;
                    --borderColor-muted: #3d444d24;
                    --display-orange-scale-0: hsla(var(--ovnHistoryHue), 40%, 12%, 1);
                    --display-orange-scale-1: hsla(var(--ovnHistoryHue), 52%, 15%, 1);
                    --display-orange-scale-2: hsla(var(--ovnHistoryHue), 77%, 22%, 1);
                    --display-orange-scale-3: hsla(var(--ovnHistoryHue), 80%, 27%, 1);
                    --display-orange-scale-4: hsla(var(--ovnHistoryHue), 81%, 33%, 1);
                    --display-orange-scale-5: hsla(var(--ovnHistoryHue), 83%, 42%, 1);
                    --display-orange-scale-6: hsla(var(--ovnHistoryHue), 85%, 54%, 1);
                    --display-orange-scale-7: hsla(var(--ovnHistoryHue), 87%, 59%, 1);
                    --display-orange-scale-8: hsla(var(--ovnHistoryHue), 89%, 69%, 1);
                    --display-orange-scale-9: hsla(var(--ovnHistoryHue), 91%, 77%, 1);
                    
                    // --data-orange-color-emphasis: hsla(190,81%,33%,1);
                    // --data-orange-color-muted: hsla(190,72%,11%,1);
                    
                    // --display-orange-bgColor-emphasis: hsla(190,81%,33%,1);
                    // --display-orange-bgColor-muted: hsla(190,72%,11%,1);
                    // --display-orange-borderColor-emphasis: hsla(190,83%,42%,1);
                    // --display-orange-borderColor-muted: hsla(190,74%,15%,1);
                    // --display-orange-fgColor: hsla(190,85%,54%,1);
                    
                    // --label-orange-bgColor-active: hsla(190,77%,22%,1);
                    // --label-orange-bgColor-hover: hsla(190,74%,15%,1);
                    // --label-orange-bgColor-rest: hsla(190,72%,11%,1);
                    // --label-orange-borderColor: hsla(190,0%,0%,0);
                    // --label-orange-fgColor-active: hsla(190,89%,69%,1);
                    // --label-orange-fgColor-hover: hsla(190,87%,59%,1);
                    // --label-orange-fgColor-rest: hsla(190,85%,54%,1);
                    
                }
                
                &[data-color-mode="dark"][data-dark-theme="dark_dimmed"],
                &[data-color-mode="auto"][data-light-theme="dark_dimmed"] {
                    --borderColor-default: #3d444d40;
                    --borderColor-muted: #3d444d40;
                }
                
                :focus-visible {
                    outline: 2px solid #478FE5;
                    outline-offset: -2px;
                    border-radius: var(--ovnBaseRadius);
                }
                
                .container-xl { max-width: calc(var(--ovnGithubWidth) + 300px); }
                .prc-PageLayout-Content-xWL-A:where([data-width=large]) { max-width: var(--ovnGithubWidth); }
                
                /* ========== 导航条 分类 */
                .MarketingNavigation-module__list__tFbMb { width: max-content; }
                
                .markdown-body .highlight pre, .markdown-body pre { font-size: 75%; line-height: 1.7; }
                
            }
        `);
    }
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*notion.so/*" ], exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html {
                
                .layout.layout-reskin-wider {
                    --content-width: minmax(auto, var(--ovnSpaceWidth02));
                }
                
            }
        `);
    }
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*developer.mozilla.org/*" ], exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html.ovn {
                
                @media (width >= 1920px) {
                    --font-line-content: 1.5;
                    --layout-side-padding: max(var(--layout-side-padding-min), calc(45vw - 720px + 1rem));
                    --layout-content-max: 59rem;
                }
                
            }
        `);
    }
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*workona.com/*" ], exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html {
            
                :is(.style_draggableItem__m8Jpw .style_content__AHpFv, .style_list__v0p3N .style_root__ybLxR )
                :not(.material-icons) {
                    font-family: var(--ovnCodeFont) !important;
                }
                
                /* ========== 粘滞行 */
                [class*="style_column"] > [id*="drg-blk"] > div > [class*="style_root"]:has(+[class*="style_block"]) {
                    position: sticky;
                    top: 0;
                    z-index: 1;
                    background: var(--ovnGlassBase);
                    backdrop-filter: var(--ovnBaseFilter);
                }
                
            }
        `);
    }
    
    
    const merge = ["*greasyfork.org/*"];
    const subjoin = OVN_SUBJOIN_HOOK.apply('micro-greasyfork', {});
    for (const entry of subjoin) {
        if (entry && Array.isArray(entry.domains)) {
            merge.push(...entry.domains);
        }
    }
    
    if (OVN_MATCH_RULE.match({
        include: merge,
        exclude: [] })
    ) {
        GM_addStyle( /* css */ `
            html {
            
                p, li { line-height: 1.5; }
                
                .code-container {
                    border-color: #e5e5e5c4;
                    border-radius: var(--ovnBaseRadius);
                    padding-top: 15px;
                    margin-top: 10px;
                }
                ol.linenums {
                    padding-left: 4em;
                    font-size: 10px;
                    li { line-height: 1.9; }
                }
                pre.prettyprint {
                    padding: 0;
                    border-color: transparent;
                }
                
                code {
                    padding: .126em .4em;
                    text-shadow: 0 0 .126em currentColor;
                    border-radius: var(--ovnBaseRadius);
                }
                ul:not(.block-list) code { background: #e9eaed; }
                
                .user-content { background: none; border-color: transparent; }
                #additional-info img { border-radius: var(--ovnBaseRadius); }
                #additional-info hr { opacity: .4; }
                
                .install-link, .install-link:visited, .install-link:active, .install-link:hover, .install-help-link { display: inline; }
                
                .form-control textarea:not([rows]), #ace-editor {
                    padding: 20px 10px;
                    margin: 10px 0;
                    height: 24em;
                    border-color: #00000012;
                    border-radius: 12px;
                }
                
                .list-option-group a { text-decoration: none; }
                
                .inline-script-stats dt, .inline-script-stats dd { line-height: 22px; }
                #script-stats .block-list.expandable.collapsed { width: max-content; max-width: 620px; }
                
            }
        `);
        
        (function OVN_Greasyfork_ovnLink() {
            
            OVN_ADD_CLASS.apply({
                target: [
                    "body a[href]:not(#script-links [href], #install-area [href], #script-list-option-groups [href], #main-header [href], .series-nav a):not(:has(img))",
                    "#main-header a[href]:not(#site-name [href])",
                    ".browser-list-selector:not(.browser-list-selector-active)",
                ],
                subjoin: [ "ovnLink", ],
            });
            
        })();
    }
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*openuserjs.org/*" ], exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html {
                
                body { max-width: var(--ovnSpaceWidthVW); margin: 0 auto; }
                
            }
        `);
    }
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*shenyandayi.com/*" ], exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html {
                
                #root { background-color: #f5f5f5; }
                .result-page { background-color: transparent; }
                .result.theme-wantwords {
                    width: var(--ovnSpaceWidthVW);
                    margin: 0 auto;
                }
                
            }
        `);
    }
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*wikipedia.org/*" ], exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html {
                
                &:root body {
                    
                    --ovnWikiCA: var(--ovnAccentHEX);
                    --ovnWikiCS: var(--ovnSecondaryHEX);
                    --ovnWikiCP: var(--ovnPrimaryHEX);
                    --ovnWikiBG: var(--ovnBase09HEX);
                    --ovnWikiLine: #00000020;
                    
                    --ovnWikiRS: var(--ovnBaseRadius);
                    --ovnWikiRU: var(--ovnUIRadius);
                    --ovnWikiRM: var(--ovnPanelRadius);
                    --ovnWikiRL: var(--ovnSurfaceRadius);
                    --ovnWikiRX: var(--ovnRadiusX);
                    
                    --ovnWikiW: var(--ovnSpaceWidth02);
                    
                }
                
                /* body { font-size: 92%; } */
                .vector-body { line-height: 1.9; }
                
                .mp-2012-column-right-block,
                .mw-parser-output #mp-2012-links table {
                    border-radius: var(--ovnWikiRU);
                }
                
                .infobox {
                    border-radius: var(--ovnWikiRU);
                    border-color: var(--ovnWikiLine);
                }
                
                .wikitable {
                    overflow: hidden;
                    border-radius: var(--ovnWikiRU);
                    box-shadow: 0 0 0 1px var(--ovnWikiLine);
                }
                .wikitable > tr > th,
                .wikitable > tr > td,
                .wikitable > * > tr > th,
                .wikitable > * > tr > td {
                    border-color: var(--ovnWikiLine);
                }
                
            }
        `);
    }
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*dillinger.io/*" ], exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
        
            html, body { font-family: var(--ovnBaseFont); }
            html .ace_editor { font-family: var(--ovnCodeFont) !important;}
            
        `);
    }
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*acronymfinder.com/*" ], exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html {
                
                /* [id*="vw"], [id*="xj"]  */
                [id^="wl"], [id^="te"] /* 不知名白色块 疑似AD */{
                    display: none;
                }
                
                .container { max-width: var(--ovnSpaceWidthVW); padding: 0; margin: 0 auto; }
                .search-main .form-control { width: 500px; }
                .search-results .tabs .no-link { width: max-content; }
                
                .r0, .r1, .r2, .r3, .r4, .r5 {
                    display: flex;
                    justify-content: space-between;
                    font-weight: bold;
                }
                
            }
        `);
    }
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*abbreviations.com/*" ], exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html {
                
                &:root body {
                    
                    --ovnAbbrWidth: 1260px;
                    --ovnAbbrAside: 330px;
                    
                }
                
                #main, .content-top, #header-int, .page-top-search { max-width: var(--ovnAbbrWidth); }
                
                .page-word-search { width: calc(100% - var(--ovnAbbrAside)); }
                #content-aside { max-width: var(--ovnAbbrAside); }
                
                .cblocks .cblock,
                .category-header,
                .translate .well,
                .biblio .well,
                #content-main .callout,
                #content-main .siteprop,
                #content-body > div > section.split > .row > div > div,
                #content-body > section.split > div {
                    box-shadow: 0 .5em 2em 0 hsla(184, 22%, 14%, .12);
                }
                
                @media (width >= 768px) {
                    
                    #main , #header, #footer { min-width: var(--ovnAbbrWidth); }
                    
                    .col-sm-8 { width: calc(100% - var(--ovnAbbrAside) ); }
                    .col-sm-push-4 { left: calc(var(--ovnAbbrAside)); }
                    .col-sm-pull-8 { right: calc(100% - var(--ovnAbbrAside)); }
                    
                }
                
            }
        `);
    }
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*bigjpg.com/*" ], exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html {
                
                @media (width >= 768px) {
                    
                    .container { max-width: none; }
                    .jumbotron { padding-top: 80px; padding-bottom: 80px; }
                    
                }
                
            }
        `);
    }
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*douyin.com/*" ], exclude: [ ] })
    ) {
        
        GM_addStyle( /* css */ `
        
            html.ovn, html body, html body > div:first-child { height: auto; }
            
        `);
        
        (function OVN_DOU_ReLimits() {
            
            OVN_REMOVE_LIMITS.apply({
                key: "alt",
                ReLimits: "all",
            });
            
        })();
        
    }
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*mp.weixin.qq.com/*" ], exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html {
                
                .pages_skin_pc.wx_wap_desktop_fontsize_2 .rich_media_area_primary_inner {
                    max-width: var(--ovnSpaceWidth02);
                }
                
            }
        `);
    }
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*docs.emmet.io/*" ], exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html {
                
                .wrapper { width: var(--ovnSpaceWidthVW); }
                
            }
        `);
    }
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*ffmpeg.bmmmd.com/*" ], exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html {
                
                .nav-brand p { display: none; }
                
            }
        `);
        document.title = 'FF.MPEG';
    }
    
    
    if (OVN_MATCH_RULE.match({
        include: [ "*periodic-table-tags-mu-six.vercel.app/*" ], exclude: [ ] })
    ) {
        GM_addStyle( /* css */ `
            html {
                
                .title h1 { display: none; }
                .star { margin: 100px 0; }
                .intro { margin: 24vh 0 14vh 20vw; }
                .elements[data-v-ff33deea] {
                    width: 5rem;
                    font-family: var(--ovnCodeFont);
                    font-size: var(--ovnCodeSize);
                    border-radius: var(--ovnUIRadius);
                    transition: all .526s var(--ovnTransitionSoft);
                }
                .elements:hover {
                    z-index: var(--ovnPriority00);
                    box-shadow:
                        0 0 0 2px #00000080,
                        var(--ovnPanelShadow) hsla(var(--ovnBase02HSL), .8) !important;
                    transform: var(--ovnUIZoomIn);
                }
                .elements[data-v-ff33deea]:has(.info) { z-index: var(--ovnPriority00); }
                .elements .info[data-v-ff33deea] { border-radius: var(--ovnPanelRadius);}
                
            }
        `);
    }
    
});

