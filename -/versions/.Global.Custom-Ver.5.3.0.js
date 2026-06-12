// ==UserScript==


// @name                      Global.Custom
// @description               全局定制
// @version                   5.3.0
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
// @exclude                   *://xxxxx.com/*
// @run-at                    document-start
// @grant                     GM_addStyle
// @grant                     GM_getValue
// @grant                     GM_setValue
// @grant                     GM_registerMenuCommand
// @grant                     GM_deleteValue
// @connect                   Viktor.Dennie@Gmail.com
// @require                   XXXXX
// @resource                  XXXXX

// @namespace                 XXXXX
// @homepage                  XXXXX
// @compatible                XXXXX
// @license                   Apache-2.0
// @copyright                 XXXXX
// @supportURL                XXXXX
// @contributionURL           XXXXX
// @downloadURL               https://update.greasyfork.org/scripts/579569/%E5%85%A8%E5%B1%80%E5%AE%9A%E5%88%B6%20GlobalCustom.user.js
// @updateURL                 https://update.greasyfork.org/scripts/579569/%E5%85%A8%E5%B1%80%E5%AE%9A%E5%88%B6%20GlobalCustom.meta.js

// @LOG                       20.02.02 - Ver.0.1.0
// @LOG                       25.03.14 - Ver.1.0.0
// @LOG                       25.04.05 - Ver.2.0.0
// @LOG                       25.04.24 - Ver.3.0.0
// @LOG                       25.05.12 - Ver.4.0.0
// @LOG                       25.06.05 - Ver.5.0.0
// @LOG                       25.06.12 - Ver.5.2.4
// @LOG                       25.07.16 - Ver.5.3.0


// ==/UserScript==


/**
 * & TODO
 * 
 * = ========== ↓ NEXT
 * = 
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


(function pkgVBN_GlobalVariable() {
    
    'use strict';
    
    /* ========== variableMark */
    
        (function pkgVBN_variableMark() {
            
            const vbnVariable = "data-vbnvariable";
            if (!document.documentElement.hasAttribute(vbnVariable)) {
                document.documentElement.setAttribute(vbnVariable, "true");
            }
            
        })();
        
        
    GM_addStyle( /* css */ `
    
        :root, [vbnGlobalColor] {
        
            --vbnBase09HEX: #F9F9F9;
            --vbnBase08HEX: #F4F4F4;
            --vbnBase07HEX: #BEC2CA;
            --vbnBase06HEX: #ABB0BA;
            --vbnBase05HEX: #757C8A;
            --vbnBase04HEX: #454A54;
            --vbnBase03HEX: #353941;
            --vbnBase02HEX: #2C2F35;
            --vbnBase01HEX: #1F2228;
            --vbnBase00HEX: #1C1E22;
            
            --vbnBase00HSL: var(--vbnBase00HSL-H), var(--vbnBase00HSL-S), var(--vbnBase00HSL-L);
            --vbnBase01HSL: var(--vbnBase00HSL-H), var(--vbnBase01HSL-S), var(--vbnBase01HSL-L);
            --vbnBase02HSL: var(--vbnBase00HSL-H), var(--vbnBase02HSL-S), var(--vbnBase02HSL-L);
            --vbnBase03HSL: var(--vbnBase00HSL-H), var(--vbnBase03HSL-S), var(--vbnBase03HSL-L);
            --vbnBase04HSL: var(--vbnBase00HSL-H), var(--vbnBase04HSL-S), var(--vbnBase04HSL-L);
            --vbnBase05HSL: var(--vbnBase00HSL-H), var(--vbnBase05HSL-S), var(--vbnBase05HSL-L);
            --vbnBase06HSL: var(--vbnBase00HSL-H), var(--vbnBase06HSL-S), var(--vbnBase06HSL-L);
            --vbnBase07HSL: var(--vbnBase00HSL-H), var(--vbnBase07HSL-S), var(--vbnBase07HSL-L);
            --vbnBase08HSL: var(--vbnBase00HSL-H), var(--vbnBase08HSL-S), var(--vbnBase08HSL-L);
            --vbnBase09HSL: var(--vbnBase00HSL-H), var(--vbnBase09HSL-S), var(--vbnBase09HSL-L);
            
            --vbnBase00HSL-H: 220;
            --vbnBase00HSL-S: 10%;    --vbnBase00HSL-L: 12%;
            --vbnBase01HSL-S: 13%;    --vbnBase01HSL-L: 34%;
            --vbnBase02HSL-S: 09%;    --vbnBase02HSL-L: 19%;
            --vbnBase03HSL-S: 10%;    --vbnBase03HSL-L: 23%;
            --vbnBase04HSL-S: 10%;    --vbnBase04HSL-L: 30%;
            --vbnBase05HSL-S: 08%;    --vbnBase05HSL-L: 50%;
            --vbnBase06HSL-S: 10%;    --vbnBase06HSL-L: 70%;
            --vbnBase07HSL-S: 10%;    --vbnBase07HSL-L: 77%;
            --vbnBase08HSL-S: 00%;    --vbnBase08HSL-L: 96%;
            --vbnBase09HSL-S: 00%;    --vbnBase09HSL-L: 98%;
            
            --vbnBase02AltXXX: var(--vbnBase00HSL-H), calc(var(--vbnBase02HSL-S) - 000%), calc(var(--vbnBase02HSL-L) - 000%);
            --vbnBase02PickXX: var(--vbnBase00HSL-H), calc(var(--vbnBase02HSL-S) - 000%), calc(var(--vbnBase02HSL-L) - 000%);
            --vbnBase02Border: var(--vbnBase00HSL-H), calc(var(--vbnBase02HSL-S) - 000%), calc(var(--vbnBase02HSL-L) + 020%);
            --vbnBase02Shadow: var(--vbnBase00HSL-H), calc(var(--vbnBase04HSL-S) - 000%), calc(var(--vbnBase04HSL-L) - 000%);
            --vbnBase04AltXXX: var(--vbnBase00HSL-H), calc(var(--vbnBase04HSL-S) - 000%), calc(var(--vbnBase04HSL-L) - 000%);
            --vbnBase04PickXX: var(--vbnBase00HSL-H), calc(var(--vbnBase04HSL-S) - 000%), calc(var(--vbnBase04HSL-L) - 010%);
            --vbnBase04Border: var(--vbnBase00HSL-H), calc(var(--vbnBase04HSL-S) - 000%), calc(var(--vbnBase04HSL-L) + 020%);
            --vbnBase04Shadow: var(--vbnBase00HSL-H), calc(var(--vbnBase04HSL-S) - 000%), calc(var(--vbnBase04HSL-L) - 000%);
            
            --vbnGlow09HEX: #85E0D7;
            --vbnGlow02HEX: #9087F8;
            --vbnGlow06HEX: #CEF4FD;
            --vbnGlow00HEX: #D9B9F9;
            --vbnGlow08HEX: #BCF5F4;
            --vbnGlow07HEX: #F7F0B7;
            --vbnGlow05HEX: #79ECD9;
            --vbnGlow04HEX: #13EC99;
            --vbnGlow03HEX: #25F493;
            --vbnGlow01HEX: #708BC2;
            --vbnGlow09HSL: 174, 059%, 070%;
            --vbnGlow02HSL: 245, 089%, 075%;
            --vbnGlow06HSL: 191, 092%, 090%;
            --vbnGlow00HSL: 270, 084%, 085%;
            --vbnGlow08HSL: 179, 074%, 085%;
            --vbnGlow07HSL: 053, 080%, 084%;
            --vbnGlow05HSL: 170, 075%, 070%;
            --vbnGlow04HSL: 157, 085%, 050%;
            --vbnGlow03HSL: 152, 090%, 055%;
            --vbnGlow01HSL: 220, 040%, 060%;
            
            --vbnMarkdownH1: #494F4D;
            --vbnMarkdownH2: #515463;
            --vbnMarkdownH3: #40465D;
            --vbnMarkdownH4: #4D5B66;
            --vbnMarkdownH5: #4F5E68;
            --vbnMarkdownH6: #5B7481;
            
            --vbnRed00000: #EF4444;
            --vbnOrange00: #EE5C2A;
            --vbnYellow00: var(--vbnGlow07HEX);
            --vbnGreen000: #10B981;
            --vbnCyan0000: #00B3B3;
            --vbnBlue0000: #478BE5;
            --vbnPurple00: var(--vbnGlow02HEX);
            
            --vbnRed00001: #000;
            --vbnOrange01: #FF5242;
            --vbnYellow01: #000;
            --vbnGreen001: #29F9A9;
            --vbnCyan0001: #000;
            --vbnBlue0001: #2BC2FF;
            --vbnPurple01: #000;
            
            --vbnLink: var(--vbnBlue0000);
            --vbnStateCorrect: var(--vbnGreen00);
            --vbnStateWarn: var(--vbnOrange00);
            --vbnStateError: var(--vbnRed00000);
            --vbnStateVisited: var(--vbnCyan0000);
            --vbnStateMatch: var(--vbnOrange01);
            
            --vbnBackdrop: ;
            --vbnForeground: ;
            --vbnBackground: ;
            --vbnGlassDark: hsla(var(--vbnPrimaryHSL), .526);
            --vbnGlassLight: hsla(var(--vbnBase09HSL), .526);
            
            --vbn115: #2777F8;
            --vbnBaidu: #4E6EF2;
            --vbnIQIYI: #00F48E;
            --vbnBiliPink: #FB7299;
            --vbnBiliBlue: #00AEEC;
            
        }
        
        :root, [vbnGlobalFont] {
            
            --vbnBaseFont: Emoji, "Public Sans", "Inter", "PingFang SC", "Source Han Sans SC", "Microsoft YaHei", sans-serif, system-ui;
            --vbnBaseSize: 14px;
            --vbnBaseWeight: 400;
            --vbnBaseLineHeight: 1.5;
            --vbnBaseColor: var(--vbnBase04HEX);
            
            --vbnTitleSize: 24px;
            --vbnTitleWeight: 700;
            --vbnTitleLineHeight: 1.5;
            --vbnTitleColor: var(--vbnBase02HEX);
            
            --vbnCodeFont: "JetBrains Mono", "Fira Code", "PingFang SC", "Source Han Sans SC", "Microsoft YaHei", monospace;
            --vbnCodeSize: 12px;
            --vbnCodeWeight: 400;
            --vbnCodeLineHeight: 1.5;
            --vbnCodeColor: var(--vbnAccentHEX);
            
            --vbnOftenFontBase: var(--vbnBaseWeight) var(--vbnBaseSize)/var(--vbnBaseLineHeight) var(--vbnBaseFont);
            --vbnOftenFontTitle: var(--vbnTitleWeight) var(--vbnTitleSize)/var(--vbnTitleLineHeight) var(--vbnBaseFont);
            
        }
        
        @font-face {  font-family: Emoji; src: local("Apple Color Emoji"), local("Segoe UI Emoji"), local("Segoe UI Symbol"), local("Noto Color Emoji"); unicode-range: U+1F000-1F9FF; }
        
        :root, [vbnGlobalSpace] {
            
            --vbnPriority00: 9999;
            --vbnPriority02: 999999;
            --vbnPriority09: 999999999;
            --vbnPriorityHead: ;
            --vbnPrioritySidebar: ;
            --vbnPriorityFooter: ;
            --vbnPriorityBase: ;
            
            --vbnSpace2X: 20px;
            --vbnSpace4X: 60px;
            --vbnSpace2Y: 260px;
            --vbnSpace4Y: 292.6px;
            --vbnSpaceAxialX: 1.26%;
            --vbnSpaceAxialY: ;
            --vbnSpaceWidth00: 80%;
            --vbnSpaceWidth02: 40vw;
            --vbnSpaceWidthVW: 60vw;
            --vbnSpaceWidthPX: calc(260px + 920px + 220px);
            --vbnSpaceHead: ;
            --vbnSpacePadding: 10px 20px;
            --vbnSpaceMargin: 15px 0;
            
            --vbnButtonWidth: 92px;
            --vbnButtonHeight: 40px;
            --vbnButtonPadding: ;
            --vbnButtonAxialX: ;
            --vbnButtonAxialY: ;
            --vbnButtonBase: ;
            
            --vbnTransitionSmooth:  cubic-bezier(.260, .920, .60, 0.926);
            --vbnTransitionSoft:    cubic-bezier(.250, .460, .45, 0.940);
            --vbnTransitionDrop:    cubic-bezier(.240, .920, .92, 0.240);
            --vbnTransitionZoom:    cubic-bezier(.526, .260, .92, 0.920);
            --vbnTransitionFlow:    cubic-bezier(.240, .926, .60, 0.920);
            --vbnTransitionElastic: cubic-bezier(.175, .885, .32, 1.260);
            --vbnOftenTransition: all .526s var(--vbnTransitionSoft);
            
        }
        
        :root, [vbnGlobalStyle] {
            
            --vbnBaseRadius: 4px;
            --vbnBaseBorder: 1px solid;
            --vbnBaseShadow: 0 0 10px 0;
            --vbnBaseFilter: blur(5.26px);
            --vbnBaseZoomIn: ;
            --vbnOftenBaseBorderBase: var();
            --vbnOftenBaseBorderHover: var();
            --vbnOftenBaseShadowBase: var();
            --vbnOftenBaseShadowHover: var();
            
            --vbnUIRadius: 6px;
            --vbnUIBorder: 2px solid;
            --vbnUIShadow: 10px 10px 20px 0;
            --vbnUIFilter: blur(9.26px) saturate(1.52);
            --vbnUIZoomIn: scale(1.26);
            --vbnOftenUIBorderBase: var();
            --vbnOftenUIBorderHover: var();
            --vbnOftenUIShadowBase: var();
            --vbnOftenUIShadowHover: var();
            
            --vbnPanelRadius: 12.6px;
            --vbnPanelBorder: 3px solid;
            --vbnPanelShadow: 0px 10px 20px 0;
            --vbnPanelFilter: blur(12.6px);
            --vbnPanelZoomIn: ;
            --vbnOftenPanelBorderBase: var(--vbnPanelBorder) hsla(var(--vbnAccentHSL), .4);
            --vbnOftenPanelBorderHover: var(--vbnPanelBorder) hsla(var(--vbnAccentHSL), .6);
            --vbnOftenPanelShadowBase: var(--vbnPanelShadow) hsla(var(--vbnAccentShadow), .4);
            --vbnOftenPanelShadowHover: var(--vbnPanelShadow) hsla(var(--vbnAccentShadow), .6);
            
            --vbnSurfaceRadius: 20.6px;
            --vbnSurfaceBorder: 2px solid;
            --vbnSurfaceShadow: 0px 20px 30px 0;
            --vbnSurfaceFilter: blur(20.6px);
            --vbnSurfaceZoomIn: scale(1.026);
            --vbnOftenSurfaceBorderBase: var();
            --vbnOftenSurfaceBorderHover: var();
            --vbnOftenSurfaceShadowBase: var(--vbnSurfaceShadow) hsla(var(--vbnBase04HSL), .05);
            --vbnOftenSurfaceShadowHover: var(--vbnSurfaceShadow) hsla(var(--vbnAccentHSL), .260);
            
            --vbnGlassShadow: 
                inset 0px -1px 4px hsla(var(--vbnBase09HSL), .26),
                var(--vbnPanelShadow) hsla(var(--vbnBase04HSL), .0526);
                
            --vbnTipsShadowS: inset 0 0 0 2px;
            --vbnTipsShadowM: 10px 10px 20px;
            --vbnTipsShadowL: 10px 10px 40px;
            
        }
        
        :root, [vbnGlobalURL] {
            
            --vbnICON-URL-Markdown-Fill: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzQzNzU3Mzg3OTY3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEyODAgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyMDE2IiB3aWR0aD0iNjI1IiBoZWlnaHQ9IjUwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0xMTg3LjcgOTA1Ljg0SDkyLjNDNDEuNCA5MDUuODQgMCA4NjQuNDQgMCA4MTMuNTRWMjEwLjQ2YzAtNTAuOSA0MS40LTkyLjMgOTIuMy05Mi4zaDEwOTUuMzhjNTAuOSAwIDkyLjMgNDEuNCA5Mi4zIDkyLjN2NjAzLjA4YzAuMDIgNTAuOS00MS4zOCA5Mi4zLTkyLjI4IDkyLjN6IG0tODgwLTE4NC42di0yNDBsMTIzLjA4IDE1My44NCAxMjMuMDgtMTUzLjg0djI0MGgxMjMuMDhWMzAyLjc2aC0xMjMuMDhsLTEyMy4wOCAxNTMuODQtMTIzLjA4LTE1My44NEgxODQuNjJ2NDE4LjQ2aDEyMy4wOHpNMTEzMi4zIDUxMmgtMTIzLjA4VjMwMi43NmgtMTIzLjA4VjUxMmgtMTIzLjA4bDE4NC42MiAyMTUuMzhMMTEzMi4zIDUxMnoiIGZpbGw9IiMwMDAwMDAiIHAtaWQ9IjEyMDE3Ij48L3BhdGg+PC9zdmc+");
            --vbnICON-URL-Markdown-Line: url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDI1NjAgMjU2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+PHBhdGggZD0iTTIyOS45NzUgNDgwQzEwNS42IDQ4MCAwIDU4MC4yNjggMCA3MDUuMDY3djExNDkuODY1QzAgMTk3OS43MzMgMTA1LjYgMjA4MCAyMjkuOTc1IDIwODBoMjEwMC4wNUMyNDU0LjQgMjA4MCAyNTYwIDE5NzkuNzMzIDI1NjAgMTg1NC45MzNWNzA1LjA2N0MyNTYwIDU4MC4yNjcgMjQ1NC40IDQ4MCAyMzMwLjAyNSA0ODB6bTAgMTYwaDIxMDAuMDVjNDEuMTc1IDAgNjkuOTc1IDMwLjYxMiA2OS45NzUgNjUuMDY3djExNDkuODY1YzAgMzQuNDU2LTI4LjggNjUuMDY4LTY5Ljk3NSA2NS4wNjhIMjI5Ljk3NUMxODguOCAxOTIwIDE2MCAxODg5LjM4OCAxNjAgMTg1NC45MzJWNzA1LjA2N0MxNjAgNjcwLjYxMiAxODguOCA2NDAgMjI5Ljk3NSA2NDBNNDAwIDg4MHY4MDBoMjQwdi01MzIuNDhsMjQwIDMxNy40NCAyNDAtMzE3LjQ0VjE2ODBoMjQwVjg4MGgtMjQwbC0yNDAgMzIwLTI0MC0zMjB6bTEzNjAgMHY0MDBoLTI0MGwzNjAgNDAwIDM2MC00MDBoLTI0MFY4ODB6Ii8+PC9zdmc+");
            --vbnICON-URL-Deepseek: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAuMDAwMDAwIiBoZWlnaHQ9IjUwLjAwMDAwMCIgdmlld0JveD0iMCAwIDUwIDUwIiBmaWxsPSJub25lIiB2Ym5HbG9iYWxWYXJpYWJsZT0idHJ1ZSI+Cgk8cGF0aCBpZD0icGF0aCIgZD0iTTQ4LjgzNTQgMTAuMDQ3OUM0OC4zMjMyIDkuNzkxOTkgNDguMTAyNSAxMC4yNzk4IDQ3LjgwMzIgMTAuNTI3OEM0Ny43MDA3IDEwLjYwNzkgNDcuNjE0MyAxMC43MTE5IDQ3LjUyNzMgMTAuODA3NkM0Ni43NzkzIDExLjYyNCA0NS45MDQ4IDEyLjE1OTcgNDQuNzYyMiAxMi4wOTU3QzQzLjA5MjMgMTIgNDEuNjY2IDEyLjUzNTYgNDAuNDA1OCAxMy44Mzk4QzQwLjEzNzcgMTIuMjMxOSAzOS4yNDc2IDExLjI3MiAzNy44OTI2IDEwLjY1NThDMzcuMTgzNiAxMC4zMzU5IDM2LjQ2NjggMTAuMDE1NiAzNS45NzAyIDkuMzE5ODJDMzUuNjIzNSA4LjgyMzczIDM1LjUyOTMgOC4yNzE5NyAzNS4zNTYgNy43Mjc1NEMzNS4yNDU2IDcuMzk5OSAzNS4xMzUzIDcuMDYzOTYgMzQuNzY1MSA3LjAwNzgxQzM0LjM2MzMgNi45NDM4NSAzNC4yMDU2IDcuMjg3NiAzNC4wNDc5IDcuNTc1NjhDMzMuNDE4IDguNzUxOTUgMzMuMTczMyAxMC4wNDc5IDMzLjE5NzMgMTEuMzU5OUMzMy4yNTI0IDE0LjMxMiAzNC40NzM2IDE2LjY2NDEgMzYuODk5OSAxOC4zMzU5QzM3LjE3NTggMTguNTI3OCAzNy4yNDY2IDE4LjcxOTcgMzcuMTU5NyAxOUMzNi45OTQ2IDE5LjU3NTcgMzYuNzk3NCAyMC4xMzU3IDM2LjYyNCAyMC43MTE5QzM2LjUxMzcgMjEuMDgwMSAzNi4zNDg2IDIxLjE1OTcgMzUuOTYyNCAyMUMzNC42MzA5IDIwLjQzMjEgMzMuNDgxIDE5LjU5MTggMzIuNDY0NCAxOC41NzU3QzMwLjczOTMgMTYuODcyMSAyOS4xNzkyIDE0Ljk5MTcgMjcuMjMzNCAxMy41MkMyNi43NzY0IDEzLjE3NTggMjYuMzE5MyAxMi44NTYgMjUuODQ2NyAxMi41NTE4QzIzLjg2MTggMTAuNTg0IDI2LjEwNjkgOC45Njc3NyAyNi42MjcgOC43NzU4OEMyNy4xNzA0IDguNTc1NjggMjYuODE1OSA3Ljg4NzcgMjUuMDU5MSA3Ljg5NkMyMy4zMDIyIDcuOTAzODEgMjEuNjk1MyA4LjUwMzkxIDE5LjY0NyA5LjMwMzcxQzE5LjM0NzcgOS40MjM4MyAxOS4wMzIyIDkuNTExNzIgMTguNzA5NSA5LjU4Mzk4QzE2Ljg1MDEgOS4yMjM2MyAxNC45MTk5IDkuMTQzNTUgMTIuOTAzMyA5LjM3NTk4QzkuMTA1OTYgOS44MDc2MiA2LjA3Mjc1IDExLjYzOTYgMy44NDMyNiAxNC43NjgxQzEuMTY0NTUgMTguNTI3OCAwLjUzNDE4IDIyLjc5OTggMS4zMDY2NCAyNy4yNTU5QzIuMTE3NjggMzEuOTUyMSA0LjQ2NTgyIDM1LjgzOTggOC4wNzM3MyAzOC44Nzk5QzExLjgxNTkgNDIuMDMyMiAxNi4xMjU1IDQzLjU3NjIgMjEuMDQxIDQzLjI4MDNDMjQuMDI2OSA0My4xMDQgMjcuMzUxNiA0Mi42OTYzIDMxLjEwMTYgMzkuNDU2MUMzMi4wNDY5IDM5LjkzNiAzMy4wMzk2IDQwLjEyNzkgMzQuNjg2IDQwLjI3MkMzNS45NTQ2IDQwLjM5MjEgMzcuMTc1OCA0MC4yMDggMzguMTIxMSA0MC4wMDc4QzM5LjYwMjEgMzkuNjg4IDM5LjQ5OTUgMzguMjg4MSAzOC45NjM5IDM4LjAzMjJDMzQuNjIzIDM1Ljk2NzggMzUuNTc2MiAzNi44MDgxIDM0LjcxIDM2LjEyNzlDMzYuOTE1NSAzMy40NjM5IDQwLjI0MDIgMzAuNjk1OCA0MS41NCAyMS43MjhDNDEuNjQyNiAyMS4wMTYxIDQxLjU1NTcgMjAuNTY3OSA0MS41NCAxOS45OTE3QzQxLjUzMjIgMTkuNjM5NiA0MS42MTA4IDE5LjUwMzkgNDIuMDA0OSAxOS40NjM5QzQzLjA5MjMgMTkuMzM1OSA0NC4xNDc5IDE5LjAzMTcgNDUuMTE2NyAxOC40ODc4QzQ3LjkyOTIgMTYuOTE5OSA0OS4wNjQgMTQuMzQzOCA0OS4zMzE1IDExLjI1NTlDNDkuMzcxMSAxMC43ODM3IDQ5LjMyMzcgMTAuMjk1OSA0OC44MzU0IDEwLjA0NzlaTTI0LjMyNjIgMzcuODM5OEMyMC4xMTk2IDM0LjQ2MzkgMTguMDc5MSAzMy4zNTIxIDE3LjIzNTggMzMuMzk5OUMxNi40NDgyIDMzLjQ0ODIgMTYuNTg5OCAzNC4zNjgyIDE2Ljc2MzIgMzQuOTY3OEMxNi45NDQzIDM1LjU2MDEgMTcuMTgxMiAzNS45NjgzIDE3LjUxMTcgMzYuNDg3OEMxNy43NDAyIDM2LjgzMiAxNy44OTc5IDM3LjM0NDIgMTcuMjgzMiAzNy43MjhDMTUuOTI4MiAzOC41ODQgMTMuNTcyOCAzNy40Mzk5IDEzLjQ2MjQgMzcuMzgzOEMxMC43MjA3IDM1LjczNTggOC40MjgyMiAzMy41NjAxIDYuODEzNDggMzAuNTg0QzUuMjUzNDIgMjcuNzE5NyA0LjM0NzY2IDI0LjY0NzkgNC4xOTc3NSAyMS4zNjc3QzQuMTU4MiAyMC41NzU3IDQuMzg2NzIgMjAuMjk1OSA1LjE1ODY5IDIwLjE1MTlDNi4xNzUyOSAxOS45NiA3LjIyMzE0IDE5LjkxOTkgOC4yMzkyNiAyMC4wNzE4QzEyLjUzMjcgMjAuNzExOSAxNi4xODg1IDIyLjY3MTkgMTkuMjUyOSAyNS43NzU5QzIxLjAwMiAyNy41NDM5IDIyLjMyNTIgMjkuNjU1OCAyMy42ODg1IDMxLjcyMDJDMjUuMTM3NyAzMy45MTIxIDI2LjY5NzggMzYgMjguNjgzMSAzNy43MTE5QzI5LjM4NDMgMzguMzEyIDI5Ljk0MzQgMzguNzY4MSAzMC40NzkgMzkuMTA0QzI4Ljg2NDMgMzkuMjg4MSAyNi4xNjk5IDM5LjMyODEgMjQuMzI2MiAzNy44Mzk4Wk0yNi4zNDMzIDI0LjYwMDFDMjYuMzQzMyAyNC4yNDggMjYuNjE5MSAyMy45Njc4IDI2Ljk2NTggMjMuOTY3OEMyNy4wNDQ0IDIzLjk2NzggMjcuMTE1MiAyMy45ODM5IDI3LjE3ODIgMjQuMDA3OEMyNy4yNjUxIDI0LjA0IDI3LjM0MzggMjQuMDg3OSAyNy40MDY3IDI0LjE2MDJDMjcuNTE3MSAyNC4yNzIgMjcuNTgwMSAyNC40MzIxIDI3LjU4MDEgMjQuNjAwMUMyNy41ODAxIDI0Ljk1MjEgMjcuMzA0MiAyNS4yMzE5IDI2Ljk1NzUgMjUuMjMxOUMyNi42MTA4IDI1LjIzMTkgMjYuMzQzMyAyNC45NTIxIDI2LjM0MzMgMjQuNjAwMVpNMzIuNjA2NCAyNy44Nzk5QzMyLjIwNDYgMjguMDQ3OSAzMS44MDI3IDI4LjE5MTkgMzEuNDE2NSAyOC4yMDhDMzAuODE3OSAyOC4yMzk3IDMwLjE2NDEgMjcuOTkyMiAyOS44MDk2IDI3LjY4OEMyOS4yNTgzIDI3LjIxNTggMjguODY0MyAyNi45NTIxIDI4LjY5ODcgMjYuMTI3OUMyOC42Mjc5IDI1Ljc3NTkgMjguNjY3NSAyNS4yMzE5IDI4LjczMDUgMjQuOTE5OUMyOC44NzIxIDI0LjI0OCAyOC43MTQ0IDIzLjgxNTkgMjguMjQ5NSAyMy40MjM4QzI3Ljg3MTYgMjMuMTA0IDI3LjM5MTEgMjMuMDE2MSAyNi44NjMzIDIzLjAxNjFDMjYuNjY2IDIzLjAxNjEgMjYuNDg0OSAyMi45Mjc3IDI2LjM1MTEgMjIuODU2QzI2LjEzMDQgMjIuNzQ0MSAyNS45NDkyIDIyLjQ2MzkgMjYuMTIyNiAyMi4xMjAxQzI2LjE3NzcgMjIuMDA3OCAyNi40NDU4IDIxLjczNTggMjYuNTA4OCAyMS42ODhDMjcuMjI1NiAyMS4yNzIgMjguMDUyNyAyMS40MDc3IDI4LjgxNjkgMjEuNzE5N0MyOS41MjU5IDIyLjAxNjEgMzAuMDYxNSAyMi41NjAxIDMwLjgzNCAyMy4zMjgxQzMxLjYyMTYgMjQuMjU1OSAzMS43NjMyIDI0LjUxMTcgMzIuMjEyNCAyNS4yMDhDMzIuNTY2OSAyNS43NTIgMzIuODkwMSAyNi4zMTIgMzMuMTEwNCAyNi45NTIxQzMzLjI0NDYgMjcuMzUyMSAzMy4wNzEzIDI3LjY4MDIgMzIuNjA2NCAyNy44Nzk5WiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxLjAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPg==");
            --vbnICON-URL-OpenAI: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NyIgaGVpZ2h0PSI4NyIgdmlld0JveD0iMCAwIDg3IDg3IiBmaWxsPSJub25lIj4KICAgIDxzdHlsZT4KICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7CiAgICAgICAgICAgICNjaXJjbGUgeyBmaWxsOiBibGFjayB9CiAgICAgICAgICAgICNtYXJrIHsgZmlsbDogd2hpdGUgfQogICAgICAgIH0KICAgIDwvc3R5bGU+CgogICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyMzdfNDQ2NzUpIj4KICAgICAgICA8cmVjdCBpZD0iY2lyY2xlIiB4PSIwLjM2MTMyOCIgeT0iMC4wNDk4MDQ3IiB3aWR0aD0iODYuNjM4NyIgaGVpZ2h0PSI4Ni42Mzg3IiByeD0iNDMuMzE5MyIgZmlsbD0id2hpdGUiLz4KICAgICAgICA8cGF0aCBpZD0ibWFyayIgZD0iTTM2LjM2MyAzNS40OTlWMjkuNDU4MUMzNi4zNjMgMjkuMDUxNSAzNi40NzkyIDI4Ljc2MTEgMzYuODg1OCAyOC41Mjg3TDQ4LjA5NjIgMjIuMDIzMkM0OS42MDY1IDIxLjE1MTkgNTEuNTIzMyAyMC43NDUzIDUzLjM4MiAyMC43NDUzQzYwLjQ2ODQgMjAuNzQ1MyA2NC45NDEgMjYuMjA1MyA2NC45NDEgMzIuMDcyQzY0Ljk0MSAzMi41MzY2IDY0Ljk0MSAzMy4xNzU2IDY0LjgyNDkgMzMuNjk4NEw1My4wOTE2IDI2Ljg0NDNDNTIuNTEwNyAyNi40OTU4IDUxLjg3MTggMjYuNDM3NyA1MS4xNzQ4IDI2Ljg0NDNMMzYuMzYzIDM1LjQ5OVpNNjIuMjY5MSA1Ni45MzI1VjQzLjUxNDhDNjIuMjY5MSA0Mi43NTk3IDYxLjk3ODcgNDIuMjM2OSA2MS4yODE2IDQxLjgzMDNMNDYuNDExOCAzMy4xNzU2TDUxLjYzOTUgMzAuMTU1MUM1MS45Mjk5IDI5Ljk4MDkgNTIuMzk0NiAyOS45ODA5IDUyLjY4NSAzMC4xNTUxTDYzLjk1MzYgMzYuNjYwN0M2Ny4xNDgzIDM4LjUxOTQgNjkuMzU1NSA0Mi41ODU0IDY5LjM1NTUgNDYuNDc3MkM2OS4zNTU1IDUxLjA2NTkgNjYuNTY3NCA1NS4zMDYxIDYyLjI2OTEgNTYuOTMyNVpNMzMuMjg0NSA0NS4zNzM1TDI4LjExNDggNDIuMjk1QzI3LjcwODIgNDIuMDYyNyAyNy41OTIxIDQxLjc3MjIgMjcuNTkyMSA0MS4zNjU2VjI4LjQxMjZDMjcuNTkyMSAyMi4wODEzIDMyLjQxMzIgMTcuMzE4MyAzOC45NzY4IDE3LjMxODNDNDEuNTMyNiAxNy4zMTgzIDQzLjk3MjIgMTguMTg5NSA0NS45NDcxIDE5Ljc1NzhMMzQuMjcxOSAyNi41NTM4QzMzLjU3NDkgMjYuOTYwNCAzMy4yODQ1IDI3LjQ4MzIgMzMuMjg0NSAyOC4yMzgzVjQ1LjM3MzVaTTQzLjM5MTMgNTEuMTgyMUwzNi4zNjMgNDcuMjMyM1YzOC44NjhMNDMuMzkxMyAzNC45MTgxTDUwLjM2MTYgMzguODY4VjQ3LjIzMjNMNDMuMzkxMyA1MS4xODIxWk00Ny43NDc3IDY4Ljc4MkM0NS4xOTIgNjguNzgyIDQyLjc1MjQgNjcuOTEwNyA0MC43Nzc1IDY2LjM0MjRMNTIuNDUyNyA1OS41NDY0QzUzLjE0OTcgNTkuMTM5OCA1My40NDAxIDU4LjYxNyA1My40NDAxIDU3Ljg2MTlWNDAuNzI2N0w1OC42Njc4IDQzLjgwNTJDNTkuMDc0NCA0NC4wMzc2IDU5LjE5MDYgNDQuMzI4IDU5LjE5MDYgNDQuNzM0NlY1Ny42ODc3QzU5LjE5MDYgNjQuMDE5IDU0LjMxMTQgNjguNzgyIDQ3Ljc0NzcgNjguNzgyWk0zNC4wMzk2IDU1Ljk0NTFMMjIuNzcxIDQ5LjQzOTVDMTkuNTc2MyA0Ny41ODA4IDE3LjM2OSA0My41MTQ4IDE3LjM2OSAzOS42MjMxQzE3LjM2OSAzNC45NzYyIDIwLjIxNTIgMzAuNzk0MSAyNC41MTM1IDI5LjE2NzdWNDIuNjQzNUMyNC41MTM1IDQzLjM5ODYgMjQuODA0IDQzLjkyMTQgMjUuNTAxIDQ0LjMyOEw0MC4zMTI4IDUyLjkyNDZMMzUuMDg1MSA1NS45NDUxQzM0Ljc5NDcgNTYuMTE5MyAzNC4zMyA1Ni4xMTkzIDM0LjAzOTYgNTUuOTQ1MVpNMzMuMzQyNSA2NS4zNTQ5QzI2LjY2MjcgNjUuMzU0OSAyMS43ODM1IDYwLjM1OTYgMjEuNzgzNSA1NC4xNDQ0QzIxLjc4MzUgNTMuNTYzNiAyMS44NDE2IDUyLjk4MjcgMjEuODk5NyA1Mi40NkwzMy41NzQ5IDU5LjE5NzlDMzQuMjcxOSA1OS42MDQ1IDM0Ljg1MjggNTkuNjA0NSAzNS41NDk4IDU5LjE5NzlMNTAuMzYxNiA1MC42MDEyVjU2LjY0MjFDNTAuMzYxNiA1Ny4wNDg3IDUwLjI0NTQgNTcuMzM5MSA0OS44Mzg4IDU3LjU3MTVMMzguNjI4MyA2NC4wNzcxQzM3LjExODEgNjQuOTQ4MyAzNS4yMDEzIDY1LjM1NDkgMzMuMzQyNSA2NS4zNTQ5Wk00Ny43NDc3IDcxLjkxODZDNTQuNzE4IDcxLjkxODYgNjAuNTI2NSA2Ni45MjMyIDYxLjgwNDQgNjAuMzAxNUM2OC4zMSA1OC42NzUxIDcyLjQ5MjEgNTIuNjM0MiA3Mi40OTIxIDQ2LjQ3NzJDNzIuNDkyMSA0Mi40MTEyIDcwLjc0OTYgMzguNTE5NCA2Ny41NTQ5IDM1LjY3MzNDNjcuODQ1MyAzNC40NTM1IDY4LjA3NzYgMzMuMTc1NiA2OC4wNzc2IDMxLjk1NThDNjguMDc3NiAyMy43NjU3IDYxLjM5NzggMTcuNjA4NyA1My43MzA1IDE3LjYwODdDNTIuMTYyMiAxNy42MDg3IDUwLjU5MzkgMTcuODk5MSA0OS4wODM3IDE4LjQyMTlDNDYuNDY5OSAxNS44MDggNDIuOTI2NiAxNC4xODE2IDM4Ljk3NjggMTQuMTgxNkMzMi4wMDY2IDE0LjE4MTYgMjYuMTk4IDE5LjE3NyAyNC45MjAxIDI1Ljc5ODdDMTguNDE0NiAyNy40MjUxIDE0LjIzMjQgMzMuNDY2IDE0LjIzMjQgMzkuNjIzMUMxNC4yMzI0IDQzLjY4OTEgMTUuOTc1IDQ3LjU4MDggMTkuMTY5NyA1MC40MjdDMTguODc5MyA1MS42NDY4IDE4LjY0NjkgNTIuOTI0NiAxOC42NDY5IDU0LjE0NDRDMTguNjQ2OSA2Mi4zMzQ1IDI1LjMyNjcgNjguNDkxNSAzMi45OTQgNjguNDkxNUMzNC41NjIzIDY4LjQ5MTUgMzYuMTMwNiA2OC4yMDExIDM3LjY0MDkgNjcuNjc4M0M0MC4yNTQ3IDcwLjI5MjIgNDMuNzk3OSA3MS45MTg2IDQ3Ljc0NzcgNzEuOTE4NloiIGZpbGw9ImJsYWNrIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyMzdfNDQ2NzUiPgogICAgICAgICAgICA8cmVjdCB4PSIwLjM2MTMyOCIgeT0iMC4wNDk4MDQ3IiB3aWR0aD0iODYuNjM4NyIgaGVpZ2h0PSI4Ni42Mzg3IiByeD0iNDMuMzE5MyIgZmlsbD0id2hpdGUiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4=");
            --vbnICON-URL-Tick: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIxOS41MzE5OTk1ODgwMTI2OTUgMTkuNTMxOTk5NTg4MDEyNjk1IDg3LjUxOTAwNDgyMTc3NzM0IDg3LjUxOTAwNDgyMTc3NzM0IiBjbGFzcz0icHJvZHVjdExvZ29fXzFMUkgiPjxwYXRoIGQ9Im01MC4xMTcgNTIuNjQyIC03LjI5NyA4Ljg4NiAxNy4yODggMTQuMTc3YTUuNzU5IDUuNzU5IDAgMCAwIDguMTM2IC0wLjg1MWwzMS4wMDkgLTM4LjcxOCAtOC45NzggLTcuMTg3IC0yNy4zNjcgMzQuMTc0eiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZCMDAwIi8+PHBhdGggZD0iTTYzLjI5MSA5Ny4yMDZjLTE4LjcwMyAwIC0zMy45MTUgLTE1LjIxNSAtMzMuOTE1IC0zMy45MTVTNDQuNTkyIDI5LjM3NyA2My4yOTEgMjkuMzc3VjE5LjUzMkMzOS4xNjEgMTkuNTMyIDE5LjUzMiAzOS4xNjEgMTkuNTMyIDYzLjI5MVMzOS4xNjEgMTA3LjA1MSA2My4yOTEgMTA3LjA1MSAxMDcuMDUxIDg3LjQyMSAxMDcuMDUxIDYzLjI5MWgtOS44NDVjMCAxOC43MDMgLTE1LjIxNSAzMy45MTUgLTMzLjkxNSAzMy45MTUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzQ3NzJGQSIvPjwvc3ZnPg==");
            --vbnICON-URL-Tick-Vint: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSI3Ny4xNTAwMDE1MjU4Nzg5IDc3LjE1MDAwMTUyNTg3ODkgMzQ1LjcwMDAxMjIwNzAzMTI1IDM0NS43MDAwMTIyMDcwMzEyNSIgY2xhc3M9InByb2R1Y3RMb2dvX18xTFJIIj48cGF0aCBkPSJtMTk3Ljk2MyAyMDcuOTM4IC0yOC44MjUgMzUuMSA2OC4yODcgNTZhMjIuNzUgMjIuNzUgMCAwIDAgMzIuMTM4IC0zLjM2M2wxMjIuNDg3IC0xNTIuOTM4IC0zNS40NjMgLTI4LjM4NyAtMTA4LjEgMTM0Ljk4N3oiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzM1Q0M3QiIvPjxwYXRoIGQ9Ik0yNTAgMzgzLjk2MmMtNzMuODc1IDAgLTEzMy45NjMgLTYwLjEgLTEzMy45NjMgLTEzMy45NjNTMTc2LjEzNyAxMTYuMDM3IDI1MCAxMTYuMDM3Vjc3LjE1QzE1NC42ODggNzcuMTUgNzcuMTUgMTU0LjY4OCA3Ny4xNSAyNTBTMTU0LjY4OCA0MjIuODUgMjUwIDQyMi44NSA0MjIuODUgMzQ1LjMxMyA0MjIuODUgMjUwaC0zOC44ODhjMCA3My44NzUgLTYwLjEgMTMzLjk2MyAtMTMzLjk2MyAxMzMuOTYzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiM0NzcyRkEiLz48L3N2Zz4=");
            --vbnICON-URL-YUQUE: url("data:image/svg+xml;base64,PHN2ZyB0PSIxNzQzOTQ5MDMzNTU4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iOC43NzgxMjU3NjI5Mzk0NTMgOC43Nzg5NTI1OTg1NzE3NzcgMTA5OS4yNDAwMzIxOTYwNDUgMTAwNi4xNjUzODMzMzg5MjgyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcC1pZD0iNjAyMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPjxwYXRoIGQ9Ik0xMTA4LjAxODE1MDE5IDE1Mi4yMzM3MDgzOGwtODkuNzI2ODE5MDQtNC44OTA2ODc1OVM5ODQuMzU1MzA2MDEgMjUuODU0MjUyMzYgODI4LjYwNTE4NzM0IDE0Ljk1NDM4Nzk0QzY3Mi44NTYwNTE1NSA0LjA1NzQ3MjA4IDU3MC45NDc3MjQ4NyAxMC44OTkxMjcyOCA1NzAuOTQ3NzI0ODcgMTAuODk5MTI3MjhzMTE1LjUzMjY2NTc4IDc1LjA0Njg5MzQyIDY5LjIzMjMyMTkyIDIwOC45NjE5MDA0NWMtMzQuNDAxODk4NTIgNzIuMjI3MDgxNzktODguODI4NDg5MzYgMTMxLjI0MDY1Nzk1LTE0Ni44NTgyMjc0NSAxOTkuMDYzNTY1NDlsLTM4My43MTY1MDc3IDQ0Ni44MzU0NzAxM2MzNTcuMTk2MTI1MjEtNS4zNDM3ODM4NSA1NjcuNzg0NjUxMDQtOC4wMTcxNTAwNiA2MzEuNzY4NTI2MDctOC4wMTcxNTAwNiAxNzkuNDMzOTgwOTcgMCAzMzEuMDc3NzMwNTEtMTU4Ljc3NzMxMjc0IDMyNC44NzI5NjU0OS0zMzUuNDM3Njc2MjctNC4yNjY1NzQ1Mi0xMjEuNDEzMDg4NTgtNDIuMTQ5NzQ2MjUtMTQ4Ljg0NTU2MDcyLTU1LjE3MTU5NTEtMjAyLjAxOTk5NDAxLTEzLjAxNjkzNDU3LTUzLjE3NTQxNjE1IDEzLjA0MjQ4ODgyLTEzNy45NzQxOTkwOSA5Ni45NDI5NDIwOS0xNjguMDUxNTM0NjN6IiBmaWxsPSIjMzFDQzc5IiBwLWlkPSI2MDIxIi8+PHBhdGggZD0iTTQ5MS43NTUxNDgxMSA0MjAuMzY4NDA3NTRDMzAzLjk0MTM0MzUgNjM2Ljc5ODA0MTk3IDguNzc4MTI1NzEgOTgxLjE1MTE5Nzk3IDguNzc4MTI1NzEgOTgxLjE1MTE5Nzk3YzUzMS4wMDMyNjAwMyAxNDIuMjA4MzM5MzkgNzc1LjY1NjU2NTA1LTIwMi45MzExMDA3OSA4MTMuOTY3Mjc4OC0zMjIuNDE1ODI3NDIgNTEuMzYyMDQ4MjUtMTYwLjE5ODUyMTQtMjEuMjEwMDE1NzItMjM4LjM2ODkyODcyLTYyLjI4MzUzNTUtMjYzLjg2MjIyNzUxLTEzOS4yNjI3MjIyOS04Ni40MzgxODU0Ny0yNDIuNTg5MzA5MDUtNC42MDM2OTM4Ny0yNjguNzA2NzIwOSAyNS40OTMyOTg3OXoiIGZpbGw9IiM5M0U2NUMiIHAtaWQ9IjYwMjIiLz48cGF0aCBkPSJNNDk0LjM2MjY2MzAyIDQxNS4zNzM1MzczYzI5Ljc5MzI5MDM4LTMyLjE0OTE5NDM1IDEzMS4wNzg0ODY4NC0xMDYuOTI4NzUxMTUgMjY2LjE3ODgxNzI3LTIyLjc0MTMwNDE3IDQxLjA3NzQ1MTE5IDI1LjU5MzU1MDAxIDExMy42NTM0NDY1OSAxMDQuMDc5NDUzODYgNjIuMjg3NDY2OTEgMjY0LjkzMTU3NC0xNC44ODA0MjgwOCA0Ni42MDUwMjg5OC02MC45MDI2MjM5IDEyNy4zOTQ3NDU0Ny0xNDIuNzUyODQxMTkgMjAwLjQwNzEyODU3LTg0Ljg3NDQ2MjggMC41ODI4MzMxNC0yNzUuMzY2NTQ3ODkgMy4wOTAwOTY4MS01NzEuNDg1MTAwOTYgNy41MzE2MTk1OEw0NzQuNjEyMTg3MzEgNDM4LjMxNzMwOTYyYTg0MDUuNzMzNjYyNTYgODQwNS43MzM2NjI1NiAwIDAgMSAxOC45MzQ3MDU4OC0yMi4wNjIxNTExOXoiIGZpbGw9IiM2MERCNjkiIHAtaWQ9IjYwMjMiLz48L3N2Zz4=");
            --vbnICON-URL-YUQUE-Line: url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+PHBhdGggZD0iTTUxMS40MDcgMjEuMTU1aDEwLjAxMmw5LjkwNS4wNiAxNC41MzQuMTE3IDE0LjEwNC4xMTkgOS4yMDQuMTE4IDkuMDQ0LjExOCAxMy4yOTYuMjM2IDEyLjkyLjI5NiAxMi41OTUuMjk1IDEyLjIyLjQxNCAxMS44NDIuNDE0IDcuNjk4LjI5NSA3LjUzNi4zNTUgMTEuMDM1LjU5MSA3LjE2LjM1NSA2Ljk5Ny40MTMgNi44MzcuNDE0IDYuNjc1LjQ3MyA2LjU2Ny40NzMgOS40NzQuNzY4IDYuMTkuNTkxIDUuOTc2LjU5MSA1Ljg2Ny41OTEgNS43MDYuNTkxIDUuNTQ0LjU5MSA1LjM4My43MSAyLjY5Mi4zNTQgNy42NDQgMS4wNjQgNy4zNzQgMS4wNjQgNC43MzguODI3IDQuNTc1Ljc2OSA0LjQ2OC44MjcgNC4zMDYuODg3IDQuMDkxLjgyNyA0LjAzOC45NDYgMy44MjIuOTQ1IDMuNzY4Ljk0NmM5LjY4OSAyLjU0MSAxNy43NjMgNS40MzggMjQuNDkyIDguNjMgMzcuNDY2IDE3LjczIDY4LjA0MSA1MC43MSA5Mi4wNSA5Ny40MDFsLjY0NSAxLjM2aDM2LjkyOGM0MS42MSAwIDU3LjcwNSA1OS4xMDMgMjMuNjg1IDg0LjM0bC0zLjUgMi40ODNjLTEyLjkxOCA5LjQ1Ni0yNS44MzggMjEuNjktMzguNTk1IDM2Ljg4bC0xLjQgMS42NTVjLTcuMzIgOS4xNjEtMTEuMDM1IDE4LjMyMi0xMi43NTggMzMuNTdsLS4yNjkgMi44MzgtLjI2OSAyLjk1NS0uMTA3IDEuNTk2LS4xNjIgMy4yNS0uMTYxIDMuMzd2MS43NzJsLS4xNjIgMy42NjV2My44NDFsLS4wNTQgNC4wMnYyLjcxOGwuMTA4LjU5MS4yMTUuODg3LjQzIDEuNDE4LjY0NyAxLjg5Mi45NjkgMi40MjMgMS41MDcgMy42NjQgMi4wNDYgNC43MjggNC4wOSA5LjI4IDcuMzc1IDE2LjE5NGMyMi4wNyA0OC43NiAzMy4wNTIgODguMzYgMzMuMDUyIDEzOS45NTcgMCA5OC4xNy0yNS42MjMgMTc1LjM2LTc2LjAwOCAyNDIuMDg3LTUxLjY3NyA2OC41Ni0xNDcuMjI1IDEyMi42NC0yMjkuMzY5IDEyMi42NGgtNzIuMjRjLTM5LjE4OCAyOC45Ni04MS44NzUgNTMuOTYtMTI2LjMzOCA3My4xNy0xMTAuNDYgNDcuNjk2LTI0MC42MiA1My4xOTItMzg5Ljg5IDE3LjczQTU4Ljg5IDY0LjY2IDAgMCAxIDQyLjQ0IDg2Ny44MWw0NS4wMDItNTYuMzg0YTQ0LjM1NiA0OC43MDEgMCAwIDEgMy43NjgtNS40MzhsMTI1LjkxLTE1Ni42ODMgNjkuMTcyLTg2LjUyN0wzODkuNTkgNDMzLjkzM2wzMS41OTgtMzkuMzA0IDE1LjA3My0xOC44NTQgMTMuNDU3LTE3LjAyMiAyMi45ODUtMjkuMzE1IDUuMTY4LTYuNzM4IDMuMzM3LTQuMzE0IDMuMjMtNC4yNTYgMy4wNjktNC4xMzcgMy4wMTQtNC4wNzggMi45MDctMy45NiAyLjc5OS0zLjkgMi42OTItMy44NDMgMS4yOTEtMS44OSAzLjIzLTQuNjEgMi45Ni00LjU1MiAyLjMxNi0zLjU0NiAyLjIwNy0zLjQ4NyAxLjA3Ni0xLjcxNCAyLjA0Ni0zLjM3IDEuOTkxLTMuMzY4IDEuODg0LTMuMjUgMS43NzctMy4yNTFhMTQ1IDE0NSAwIDAgMCA0Ljg0NS05LjQ1N2wxLjUwNy0yLjk1NSAxLjM0NS0zLjA3My42NDYtMS40NzggMS4yMzktMi45NTVhMTAyLjI3NyAxMTIuMjk2IDAgMCAwIDkuNDc0LTQ3LjA0NmMwLTMxLjY4LTE1LjI4OC02MC4xNjgtNDkuOS04Ny43NjlsLTIuOC0yLjI0NmMtMzIuMDI5LTI2LjQxOS0xNS4xOC04My4wNCAyNS4zNTQtODMuMDRtMTAzLjY3NiAzNzQuNTk3Yy00MS4wNzItOC42ODgtODIuNjI4Ljk0Ni05OC4yOTMgMTkuOGwtMS44ODQgMi4yNDYtMTYuNTI2IDIwLjM5LTI5LjQ0NSAzNi41ODUtNDUuOTE3IDU3LjIxMkwyNjQuMjIgNzMwLjI3NyAxMzQuNzA2IDg5Mi4zMzhsMy4xMjIuNTkxYzExMi45MzUgMjAuNDUgMjEwLjMxMyAxMy4wMDMgMjkyLjU2NS0yMS43NWwyLjk2LTEuMjRDNTg3LjA5MyA4MDMuNTA1IDcxNS44IDY1NS45MjQgNzE1LjggNTUxLjA3NWMwLTQ4LjQ2NS0xMy40NTctODYuMjMyLTM2LjkyNy0xMTQuMDctMTguNjI1LTIyLjE2NC00My4wMS0zNi44OC02My43MzUtNDEuMjU0em0tOS40Mi0yODEuMDk1LjUzOCAxLjA2M2MxMC45ODIgMjQuMzUxIDE2LjY4OCA1MC41OTMgMTYuNjg4IDc4LjQ5IDAgMzYuODIxLTkuNDIgNzEuNTE1LTI2LjgwOCAxMDYuMjA4YTIzNCAyMzQgMCAwIDEgMzQuODgyIDQuNjFjMzguMjIgOC4wOTggNzguNzUzIDMyLjUwNyAxMDkuNjUyIDY5LjI3IDM3Ljc4OCA0NC45MTggNTkuMjEyIDEwNS4wMjYgNTkuMjEyIDE3Ni43NzggMCA3Ny4xODktNDAuNTMzIDE2MS4xNzQtMTA0LjY5OSAyMzUuMjkgNDguMzQtMTEuMjMgMTAwLjk4NS00NC45MTkgMTMwLjg2LTgzLjUxM2wxLjI5My0xLjcxNGMzNy45NS01MC4yMzggNTYuNjgzLTEwNi42MjIgNTYuNjgzLTE4My4yMiAwLTM0Ljc1My03LjUzNy02MS43MDQtMjQuMjI0LTk4LjcwM2wtMS42NjktMy42NjQtNC41NzUtOS44Ny00LjE5OS05LjI4LTEuODMtNC4xMzdhMjk0Ljg4IDMyMy43NjggMCAwIDEtMS42NjktNC4wMmwtMS41Ni0zLjcyM2EyMDUuMDkyIDIyNS4xODQgMCAwIDEtMS40NTQtMy42NjQgMTAyLjQzOCAxMTIuNDc0IDAgMCAxLTkuMzEzLTQ0LjU2NHYtMi43NzhsLjA1NC01LjQzNy4wNTQtMi43Mi4xNjEtNS4yNmMxLjE4NC0zOC45NDggNy4zNzUtNjYuNjY4IDIzLjg0Ny05Mi42NzNsLjc1My0xLjE4Mi0uNTM4LS41MzJhNDEuOTg3IDQ2LjEgMCAwIDEtNi45OTgtMTEuMjNsLS41MzgtMS4xODJjLTE3LjYwMi00Mi41NTQtMzguNDM0LTY4LjIwNS02MS45MDQtNzkuMzE3bC0xLjYxNS0uNzY4LTEuODg0LS43MS0xLjYxNS0uNTktLjgwOC0uMjk2LTEuNzc2LS41OS0xLjgzLS41OTItMS45OTItLjQ3My0yLjA0NS0uNTktMi4xNTQtLjUzMy0zLjQ5OS0uNzY4LTMuNjYtLjgyNy0zLjkzLS43MS00LjE5OC0uNzY4LTQuMzYtLjcxLTQuNjMtLjcwOS00Ljg0NS0uNjUtMy4zOS0uNDczLTYuOTk5LS44ODYtNy40MjgtLjgyOC03Ljg2LS43NjgtNi4xMzYtLjU5LTQuMTk5LS4zNTUtOC43NzQtLjcxLTYuNzgzLS40NzMtOS40Mi0uNjUtOS44NS0uNTktNy42NDUtLjQxNC0xMy4xODgtLjY1LTEwLjk4MS0uNDczLTE0LjI2NS0uNTkxLTExLjg0My0uMzU1eiIvPjwvc3ZnPg==");
            --vbnICON-URL-Dict: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIiB2aWV3Qm94PSIwIDAuMDA1IDEwMjMuOTk2IDEwMjMuODY3IiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+PHBhdGggZD0iTTkzNC4xODMgMTc5Ljg4Nkg1NjEuMDIybDc4LjAzNyA2MjUuMTA3YTkzLjg3IDkzLjg3IDAgMCAxLTIyLjUyOCA2OC4yNjZsLTEzMS40NTYgMTUwLjYxM0g5MzQuMTRhOTAuMjQgOTAuMjQgMCAwIDAgODkuODU2LTg5Ljk0MVYyNzIuNDcyYTkyLjU4NiA5Mi41ODYgMCAwIDAtODkuNi05MC40NTJ2LTIuMTc2eiIgZmlsbD0iIzMxMzU0MyIgZGF0YS1zcG0tYW5jaG9yLWlkPSJhMzEzeC5zZWFyY2hfaW5kZXguMC5pMjcuM2Y5ODNhODFxa1RqcEkiLz48cGF0aCBkPSJNNDg4LjE0NyA3OS4xNUE5MC40OTYgOTAuNDk2IDAgMCAwIDM5OC4yOTIuMDA1SDkwLjMyNUE5MC4yOCA5MC4yOCAwIDAgMCAwIDkwLjIwMXY2NjguNTQxYTkwLjQ5NiA5MC40OTYgMCAwIDAgOTAuMzI1IDg5Ljk0MWg0NzMuM2M4LjUzMy05LjcyOCAxNi4zODMtMTYuNDI2IDE2LjM4My0yOS4yNjl6IiBmaWxsPSIjNEI4QkY1IiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4LnNlYXJjaF9pbmRleC4wLmkyMy4zZjk4M2E4MXFrVGpwSSIvPjxwYXRoIGQ9Im0zNTAuMDc5IDkwNi4yODMgNS4xMiA0MS4xM2E5MC41OCA5MC41OCAwIDAgMCA1MS4yIDY5Ljg4OGwxMDIuNjU1LTExMC45MzNIMzUwLjA3OXoiIGZpbGw9IiMzMTM1NDMiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTI4LjNmOTgzYTgxcWtUanBJIi8+PHBhdGggZD0iTTMzMS4wOTIgMjM5LjAyMmEzMC4yMSAzMC4yMSAwIDAgMC0yOS44NjctMjQuMTkyaC02MS45OTRhMjkuMjcgMjkuMjcgMCAwIDAtMjkuMjcgMjQuMTkyTDE0OS44NDYgNTM5LjgyYTMwLjI5MyAzMC4yOTMgMCAxIDAgNTkuMDkzIDExLjc3NmwxOC45NDQtOTYuMTI4aDg0Ljc3OGwxOS40NTYgOTYuMTI4YTMwLjI1IDMwLjI1IDAgMCAwIDM1LjQxMyAyMy42Mzd2LTIuNTZhMzAuOTMgMzAuOTMgMCAwIDAgMjMuNjM3LTMyLjkzOXptLTkxLjg2MSAxNTMuNiAyNC42MTktMTIwLjMyaDEyLjhsMjMuNjM3IDEyMC4zMnptNjk2LjQ4OCA2MC4yNDRoLTkyLjQxNnYtMzAuMjkzYTMwLjI5MyAzMC4yOTMgMCAwIDAtNjAuMDMyIDB2MzAuMjkzaC04OS42YTI5Ljg3IDI5Ljg3IDAgMCAwLTIxLjMzMiA4LjUzNCAzMC4yMDggMzAuMjA4IDAgMCAwIDIxLjMzMyA1MS41ODNoNy42OGEzODguMyAzODguMyAwIDAgMCA3MC4zNTcgMTMxLjU4NGMtMjIuMDU5IDIwLjA1My00My42MDUgMzYuNTIyLTY2Ljc3MyA1NS40NjZhMjkuNCAyOS40IDAgMCAwLTExLjMwNyAyMC4wNTQgMzAuMjA4IDMwLjIwOCAwIDAgMCA0OC43NjggMjYuNjY2YzI1LjIxNi0yMC4wMSA0Ny4yMzItMzYuOTkyIDcxLjM4LTU5LjA5M2E3NjYgNzY2IDAgMCAwIDczLjM0NSA1OS4wOTMgMzAuMDM3IDMwLjAzNyAwIDAgMCAzNy40Ni00Ni45MzNjLTIzLjU5NC0xOS4wMy00Ny4yMzEtMzUuNDk5LTY5LjI5LTU1LjQ2NmEzODIuMyAzODIuMyAwIDAgMCA3MC44Ny0xMzEuNTg0aDguMTkxYTMwLjM4IDMwLjM4IDAgMCAwIDI4Ljg4Ni0xOC40NzQgMjkuMSAyOS4xIDAgMCAwIDIuNDc0LTExLjk5IDI5Ljg2NyAyOS44NjcgMCAwIDAtMjkuODY2LTI5Ljg2Nk04MTQuMjA1IDU5OS41MWEzMTIuMyAzMTIuMyAwIDAgMS01MS4yLTg2LjkxMkg4NjUuNjZhMzI4LjggMzI4LjggMCAwIDEtNTEuMiA4Ni45MTIiIGZpbGw9IiNGRkYiIG9wYWNpdHk9Ii42Ii8+PC9zdmc+");
            --vbnICON-URL-Character: url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwLjA3OSAxMTM4LjM5NiAxMDIzLjkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTQzLjNmOTgzYTgxcWtUanBJIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+PHBhdGggZD0iTTU2OS4wMTcgODAwLjU3Yy01Ljc5My4xODItMTEuNDA2LTEuMDg2LTE2LjY1Ni0zLjQ0TDIxNC4zNTQgNjU1LjE5NGE0My41MSA0My41MSAwIDAgMS0yNy4xNTYtNDAuMzcyVjQzLjk5M2MwLTE0LjY2NCA3LjI0Mi0yOC40MjMgMTkuMTktMzYuNzUxIDEyLjMxMi04LjE0NyAyNy43LTkuNDE1IDQxLjA5Ny0zLjQ0bDE4NS41NjkgNzguMDNhNDMuNjEzIDQzLjYxMyAwIDEgMS0zMy4zMTIgODAuNTYzbC0xMjUuMS01Mi41MDJ2NDc1LjU5OWwyNTAuMzgyIDEwNS4wMDVWMTg1Ljc1YTQzLjUxIDQzLjUxIDAgMCAxIDI3LjE1Ni00MC4zNzNMODkwLjM2OCAzLjYyMWMxMy41NzgtNS40MzEgMjguNzg1LTQuMTY0IDQxLjA5NiAzLjQ0IDEyLjMxMSA4LjE0NyAxOS41NTMgMjIuMDg3IDE5LjE5IDM2Ljc1MVY2MTQuNjRhNDMuNTEgNDMuNTEgMCAwIDEtMjcuMTU1IDQwLjM3MmwtMTg0Ljg0NSA3Ny4xMjRjLTIxLjkwNiA4LjE0Ny00Ni4zNDctMi43MTUtNTUuNC0yNC4yNi04Ljg3LTIxLjcyNC43MjUtNDYuNTI3IDIyLjA4OC01Ni4zMDRMODYzLjAzIDU4NC45NVYxMDkuNTNMNjEyLjQ2NyAyMTQuNTM2djU0MS4xMzZjMCAxNC42NjQtNy4yNDEgMjguNDI0LTE5LjE5IDM2Ljc1Mi03LjA2IDUuMjUtMTUuNzUxIDcuOTY2LTI0LjQ0MSA3Ljk2NnoiIGZpbGw9IiMzQTgzOUIiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTM3LjNmOTgzYTgxcWtUanBJIiBjbGFzcz0ic2VsZWN0ZWQiLz48cGF0aCBkPSJNNTY5LjAxNyAxMDIzLjk3N2MtNS4yNSAwLTEwLjMyLS45MDUtMTUuMjA4LTIuNTM0TDI3LjE1NiA4MTcuNDA4QzEwLjY4MiA4MTAuODkgMCA3OTQuNzc4IDAgNzc2Ljg1NFYyNjUuNTljMC0yMy41MzYgMTkuMDEtNDIuNTQ1IDQyLjU0NS00Mi41NDVTODUuMDkgMjQyLjA1NCA4NS4wOSAyNjUuNTlWNzQ2LjhsNDg0LjEwOCAxODcuNzQyIDQ4NC4xMDgtMTg3Ljc0MVYyOTkuOTg4YzAtMjMuNTM2IDE5LjAxLTQyLjU0NSA0Mi41NDUtNDIuNTQ1czQyLjU0NSAxOS4wMSA0Mi41NDUgNDIuNTQ1djQ3Ni44NjZjMCAxNy43NDItMTAuODYyIDMzLjY3NC0yNy4xNTYgNDAuNTU0bC01MjYuNDcyIDIwNC4wMzVjLTQuODg4IDEuODEtMTAuMTM5IDIuNzE1LTE1LjIwOCAyLjUzNHoiIGZpbGw9IiMzQTgzOUIiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTM4LjNmOTgzYTgxcWtUanBJIiBjbGFzcz0ic2VsZWN0ZWQiLz48L3N2Zz4=");
            
            --vbnICON-URL-Twitter: url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMTMzLjc2IDI0MCAyMzAxLjEyIDIwODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPjxwYXRoIGQ9Ik0xOTQ2LjAyNSAyNDBoMzUyLjg1NUwxNTI4IDExMjEuMDY4IDI0MzQuODggMjMyMEgxNzI0LjhsLTU1Ni4xNi03MjcuMTQ4TDUzMi4yNjUgMjMyMEgxNzkuMmw4MjQuNTMzLTk0Mi40TDEzMy43NiAyNDBoNzI4LjEwN2w1MDIuNzIgNjY0LjY0em0tMTIzLjgzNyAxODY4LjhoMTk1LjUyTDc1NS42MjUgNDQwLjEwOEg1NDUuODF6Ii8+PC9zdmc+");
            
            --vbnICON-URL-AIGC: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQuMDAwMiA0NUMyNy4yMjA4IDQ1IDMyLjcyNzYgNDAuOCAzMi43Mjc2IDI0QzMyLjcyNzYgNy4yIDI3LjIyMDggMyAyNC4wMDAyIDNDMjAuNzc5NyAzIDE1LjI3MjkgNy40ODMwMiAxNS4yNzI5IDI0QzE1LjI3MjkgNDAuNTE3IDIwLjc3OTcgNDUgMjQuMDAwMiA0NVoiIHN0cm9rZT0iIzFmYWNhZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMTA1MTUgMzUuMDAwMUM2LjcxNTQ1IDM3LjgxMjQgMTMuMjQ3OSA0MC40MjExIDI4LjM2NCAzMS42MjExQzQzLjQ4IDIyLjgyMTEgNDQuNTA1NyAxNS44MTI0IDQyLjg5NTQgMTMuMDAwMUM0MS4yODUxIDEwLjE4NzggMzQuNDk4MSA3LjcyNzI4IDE5LjYzNjcgMTYuMzc5MUM0Ljc3NTIxIDI1LjAzMDggMy40OTQ4OSAzMi4xODc4IDUuMTA1MTUgMzUuMDAwMVoiIHN0cm9rZT0iIzFmYWNhZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMTA1MDYgMTMuMDAwMUMzLjQ5NDggMTUuODEyNCA0LjUyMDQ2IDIyLjgyMTEgMTkuNjM2NiAzMS42MjExQzM0Ljc1MjcgNDAuNDIxMSA0MS4yODUgMzcuODEyNCA0Mi44OTUzIDM1LjAwMDFDNDQuNTA1NiAzMi4xODc4IDQzLjIyNTMgMjUuMDMwOCAyOC4zNjM4IDE2LjM3OTFDMTMuNTAyNCA3LjcyNzI4IDYuNzE1MzcgMTAuMTg3OCA1LjEwNTA2IDEzLjAwMDFaIiBzdHJva2U9IiMxZmFjYWYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+");
            --vbnICON-URL-Network: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAxMkMxMC4yMDkxIDEyIDEyIDEwLjIwOTEgMTIgOEMxMiA1Ljc5MDg2IDEwLjIwOTEgNCA4IDRDNS43OTA4NiA0IDQgNS43OTA4NiA0IDhDNCAxMC4yMDkxIDUuNzkwODYgMTIgOCAxMloiIGZpbGw9IiMxM0VDOTkiIHN0cm9rZT0iIzJDMkYzNSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDQyQzEzLjMxMzcgNDIgMTYgMzkuMzEzNyAxNiAzNkMxNiAzMi42ODYzIDEzLjMxMzcgMzAgMTAgMzBDNi42ODYyOSAzMCA0IDMyLjY4NjMgNCAzNkM0IDM5LjMxMzcgNi42ODYyOSA0MiAxMCA0MloiIGZpbGw9IiMxM0VDOTkiIHN0cm9rZT0iIzJDMkYzNSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM4IDQ0QzQxLjMxMzcgNDQgNDQgNDEuMzEzNyA0NCAzOEM0NCAzNC42ODYzIDQxLjMxMzcgMzIgMzggMzJDMzQuNjg2MyAzMiAzMiAzNC42ODYzIDMyIDM4QzMyIDQxLjMxMzcgMzQuNjg2MyA0NCAzOCA0NFoiIGZpbGw9IiMxM0VDOTkiIHN0cm9rZT0iIzJDMkYzNSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIyIDI4QzI2LjQxODMgMjggMzAgMjQuNDE4MyAzMCAyMEMzMCAxNS41ODE3IDI2LjQxODMgMTIgMjIgMTJDMTcuNTgxNyAxMiAxNCAxNS41ODE3IDE0IDIwQzE0IDI0LjQxODMgMTcuNTgxNyAyOCAyMiAyOFoiIGZpbGw9IiMxM0VDOTkiIHN0cm9rZT0iIzJDMkYzNSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM0IDEyQzM2LjIwOTEgMTIgMzggMTAuMjA5MSAzOCA4QzM4IDUuNzkwODYgMzYuMjA5MSA0IDM0IDRDMzEuNzkwOSA0IDMwIDUuNzkwODYgMzAgOEMzMCAxMC4yMDkxIDMxLjc5MDkgMTIgMzQgMTJaIiBmaWxsPSIjMTNFQzk5IiBzdHJva2U9IiMyQzJGMzUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTExIDExTDE1IDE1IiBzdHJva2U9IiMyQzJGMzUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTMwIDEyTDI4IDE0IiBzdHJva2U9IiMyQzJGMzUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTM0IDMzLjVMMjggMjYiIHN0cm9rZT0iIzJDMkYzNSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTQgMzFMMTggMjciIHN0cm9rZT0iIzJDMkYzNSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=");
            --vbnICON-URL-SVG: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE5My43NSAxMTIuNSA4Ny41IDE3NXYyNTBsMTA2LjI1IDYyLjVMMzAwIDU1MGwxMDYuMjUtNjIuNUw1MTIuNSA0MjVWMTc1bC0xMDYuMjUtNjIuNUwzMDAgNTB6TTMwMCA1MHYyNTBtMjEyLjUgMTI1TDMwMCAzMDBNODcuNSA0MjUgMzAwIDMwMG0wIDI1MFY0MjVtMjEyLjUtMjUwLTEwMCA2Mi41TTg3LjUgMTc1bDEwMCA2Mi41IiBzdHJva2U9IiMwOEUwQUQiIHN0cm9rZS13aWR0aD0iNTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==");
            --vbnICON-URL-Mecha: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00MSAxMy45OTk3TDI0IDRMNyAxMy45OTk3VjMzLjk5OThMMjQgNDRMNDEgMzMuOTk5OFYxMy45OTk3WiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTYgMTguOTk3NkwyMy45OTMyIDI0LjAwMDJMMzEuOTk1MSAxOC45OTc2IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTI0IDI0VjMzIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+");
            
            --vbnICON-URL-Music: url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMjQyLjUgNjI0LjUgMjA3NC43NSAxMzExLjI1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cGF0aCBkPSJNNDg3LjI1IDE5MzUuNzVIMjA3Mi41YzEzNC43NSAwIDI0NC43NS0xMTAuMjUgMjQ0Ljc1LTI0NC43NVY4NjkuMjVjMC0xMzQuNzUtMTEwLjI1LTI0NC43NS0yNDQuNzUtMjQ0Ljc1SDQ4Ny4yNWMtMTM0Ljc1IDAtMjQ0Ljc1IDExMC4yNS0yNDQuNzUgMjQ0Ljc1VjE2OTFjMCAxMzQuNSAxMTAuMjUgMjQ0Ljc1IDI0NC43NSAyNDQuNzUiIGZpbGw9IiMyNDIyMkQiLz48cGF0aCBkPSJNNDgzLjc1IDE5MzUuNzVIMjA2OWMxMy43NSAwIDI3LjUtMSA0MC43NS0yLjc1LTQxLTEyNy41LTE1Ny41LTIxOS41LTM0Mi0yMTkuNUg4NTEuNWMtMTg0Ljc1IDAtMzQzIDkyLjI1LTQwMS4yNSAyMjAuMjUgMTEgMS4yNSAyMi4yNSAyIDMzLjUgMm0zLjUtMzc5SDIwNzIuNWM2NS4yNSAwIDExOS01My43NSAxMTktMTE5di01NjguNWMwLTY1LjI1LTUzLjc1LTExOS0xMTktMTE5SDQ4Ny4yNWMtNjUuMjUgMC0xMTkgNTMuNzUtMTE5IDExOVYxNDM4Yy4yNSA2NSA1NCAxMTguNzUgMTE5IDExOC43NSIgZmlsbD0iI0Y2NiIvPjxwYXRoIGQ9Ik04NTEuNSAxMDQxLjVoODU3Yzk3LjI1IDAgMTc2Ljc1IDc5LjUgMTc2Ljc1IDE3Ni43NXMtNzkuNSAxNzYuNS0xNzYuNzUgMTc2LjVoLTg1N2MtOTcuMjUgMC0xNzYuNS03OS41LTE3Ni41LTE3Ni41IDAtOTcuMjUgNzkuNS0xNzYuNzUgMTc2LjUtMTc2Ljc1IiBmaWxsPSIjMjQyMjJEIi8+PHBhdGggZD0iTTE3MDguNSAxMDk2YzY3LjUgMCAxMjIgNTQuNzUgMTIyIDEyMiAwIDY3LjUtNTQuNzUgMTIyLTEyMiAxMjItNjcuNSAwLTEyMi01NC43NS0xMjItMTIyIDAtNjcuNSA1NC41LTEyMiAxMjItMTIybS04NTcgMGM2Ny41IDAgMTIyIDU0Ljc1IDEyMiAxMjIgMCA2Ny41LTU0Ljc1IDEyMi0xMjIgMTIyLTY3LjUgMC0xMjItNTQuNzUtMTIyLTEyMiAwLTY3LjUgNTQuNzUtMTIyIDEyMi0xMjJNNDczLjI1IDgxMWMyNCAwIDQzLjUgMTkuNSA0My41IDQzLjVzLTE5LjUgNDMuNS00My41IDQzLjUtNDMuNS0xOS41LTQzLjUtNDMuNSAxOS41LTQzLjUgNDMuNS00My41bTE2MTMuNS0yLjc1YzI0IDAgNDMuNSAxOS41IDQzLjUgNDMuNXMtMTkuNSA0My41LTQzLjUgNDMuNS00My41LTE5LjUtNDMuNS00My41IDE5LjUtNDMuNSA0My41LTQzLjVtNzcuNSA5MDUuMjVjMjYuMjUgMCA0Ny43NSAyMS41IDQ3Ljc1IDQ3Ljc1cy0yMS4yNSA0Ny43NS00Ny43NSA0Ny43NWMtMjYuMjUgMC00Ny43NS0yMS41LTQ3Ljc1LTQ3Ljc1czIxLjI1LTQ3Ljc1IDQ3Ljc1LTQ3Ljc1bS0xNzY4LjUgMGMyNi4yNSAwIDQ3Ljc1IDIxLjUgNDcuNzUgNDcuNzVTNDIyLjI1IDE4MDkgMzk1Ljc1IDE4MDljLTI2LjI1IDAtNDcuNzUtMjEuNS00Ny43NS00Ny43NS4yNS0yNi4yNSAyMS41LTQ3Ljc1IDQ3Ljc1LTQ3Ljc1IiBmaWxsPSIjRkZGIi8+PC9zdmc+");
            --vbnICON-URL-VideoPlay: url("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9InZpZGVvUGxheSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPjxwYXRoIGQ9Ik0yNTAgMGM3Ny42OS43IDE0NCAyMC4xOSAxODYuNTUgNjMuNDVDNDc5LjgxIDEwNS45OSA0OTkuMyAxNzIuMzEgNTAwIDI1MGMtLjcgNzcuNjktMjAuMTkgMTQ0LTYzLjQ1IDE4Ni41NUMzOTQgNDc5LjgxIDMyNy42OSA0OTkuMyAyNTAgNTAwYy03Ny42OS0uNy0xNDQtMjAuMTktMTg2LjU1LTYzLjQ1QzIwLjE5IDM5NCAuNyAzMjcuNjkgMCAyNTBjLjctNzcuNjkgMjAuMTktMTQ0IDYzLjQ1LTE4Ni41NUMxMDYgMjAuMTkgMTcyLjMxLjcgMjUwIDAiIGZpbGw9IiM1MzVkZjciLz48cGF0aCBkPSJNMTkwLjk3IDE3OC4zMmMzLjE5LTIxLjY5IDE4LjgzLTM1LjAxIDM1LjczLTI0LjE1IDI5LjkxIDE5LjAyIDY0LjkyIDQ3LjI4IDEwMC4xIDcxLjg2IDIwLjU3IDE0LjQxIDIwLjU3IDMzLjU0IDAgNDcuOTUtMzUuMTggMjQuNTgtNzAuMTkgNTIuODMtMTAwLjEgNzEuODYtMTYuOTEgMTAuODYtMzIuNTQtMi40Ny0zNS43My0yNC4xNWE1ODYuNyA1ODYuNyAwIDAgMSAwLTE0My4zNiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjgiLz48L3N2Zz4=");
            --vbnICON-URL-VideoStop: url("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9InZpZGVvU3RvcCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPjxwYXRoIGQ9Ik0yNTAgMGM3Ny42OS43IDE0NCAyMC4xOSAxODYuNTUgNjMuNDVDNDc5LjgxIDEwNS45OSA0OTkuMyAxNzIuMzEgNTAwIDI1MGMtLjcgNzcuNjktMjAuMTkgMTQ0LTYzLjQ1IDE4Ni41NUMzOTQgNDc5LjgxIDMyNy42OSA0OTkuMyAyNTAgNTAwYy03Ny42OS0uNy0xNDQtMjAuMTktMTg2LjU1LTYzLjQ1QzIwLjE5IDM5NCAuNyAzMjcuNjkgMCAyNTBjLjctNzcuNjkgMjAuMTktMTQ0IDYzLjQ1LTE4Ni41NUMxMDYgMjAuMTkgMTcyLjMxLjcgMjUwIDAiIGZpbGw9IiNmZjZiNmIiLz48cGF0aCBkPSJNMjQyLjMxIDM0Ni4xOGMtNTguOTkgMC04OC40OC0yOS40OS04OC40OC04OC40OHYtMTUuMzljMC01OC45OSAyOS40OS04OC40OCA4OC40OC04OC40OGgxNS4zOWM1OC45OSAwIDg4LjQ4IDI5LjQ5IDg4LjQ4IDg4LjQ4djE1LjM5YzAgNTguOTktMjkuNDkgODguNDgtODguNDggODguNDh6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuOCIvPjwvc3ZnPg==");
            --vbnICON-URL-Correct: url("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkNvcnJlY3QiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cGF0aCBkPSJNMjUwIDBjNzcuNjkuNyAxNDQgMjAuMTkgMTg2LjU1IDYzLjQ1QzQ3OS44MSAxMDUuOTkgNDk5LjMgMTcyLjMxIDUwMCAyNTBjLS43IDc3LjY5LTIwLjE5IDE0NC02My40NSAxODYuNTVDMzk0IDQ3OS44MSAzMjcuNjkgNDk5LjMgMjUwIDUwMGMtNzcuNjktLjctMTQ0LTIwLjE5LTE4Ni41NS02My40NUMyMC4xOSAzOTQgLjcgMzI3LjY5IDAgMjUwYy43LTc3LjY5IDIwLjE5LTE0NCA2My40NS0xODYuNTVDMTA2IDIwLjE5IDE3Mi4zMS43IDI1MCAwIiBmaWxsPSIjMWZlNDdlIi8+PHBhdGggZD0iTTIyOS4yMSAzMzkuNDNjLTUuNTkgMC0xMS4xOS0yLjEzLTE1LjQ2LTYuNGwtNzUuNTctNzUuNTdjLTguNTQtOC41NC04LjU0LTIyLjM4IDAtMzAuOTEgOC41NC04LjU0IDIyLjM4LTguNTQgMzAuOTEgMGw2MC4xMiA2MC4xMkwzNDQuOSAxNzAuOThjOC41NC04LjU0IDIyLjM4LTguNTQgMzAuOTEgMCA4LjU0IDguNTQgOC41NCAyMi4zOCAwIDMwLjkxTDI0NC42NiAzMzMuMDRjLTQuMjcgNC4yNy05Ljg2IDYuNC0xNS40NiA2LjRaIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuOCIvPjwvc3ZnPg==");
            --vbnICON-URL-Error: url("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkVycm9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgNTAwIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+PHBhdGggZD0iTTI1MCAwYzc3LjY5LjcgMTQ0IDIwLjE5IDE4Ni41NSA2My40NUM0NzkuODEgMTA1Ljk5IDQ5OS4zIDE3Mi4zMSA1MDAgMjUwYy0uNyA3Ny42OS0yMC4xOSAxNDQtNjMuNDUgMTg2LjU1QzM5NCA0NzkuODEgMzI3LjY5IDQ5OS4zIDI1MCA1MDBjLTc3LjY5LS43LTE0NC0yMC4xOS0xODYuNTUtNjMuNDVDMjAuMTkgMzk0IC43IDMyNy42OSAwIDI1MGMuNy03Ny42OSAyMC4xOS0xNDQgNjMuNDUtMTg2LjU1QzEwNiAyMC4xOSAxNzIuMzEuNyAyNTAgMCIgZmlsbD0iI2ZmNzE0ZCIvPjxwYXRoIGQ9Ik0zMzguNTcgMzA2Ljk0IDI4MS42MyAyNTBsNTYuOTMtNTYuOTNjOC43NC04LjczIDguNzQtMjIuOSAwLTMxLjYzLTguNzQtOC43NC0yMi45LTguNzQtMzEuNjMgMEwyNTAgMjE4LjM3bC01Ni45My01Ni45M2MtOC43NC04Ljc0LTIyLjktOC43NC0zMS42MyAwLTguNzQgOC43My04Ljc0IDIyLjkgMCAzMS42M0wyMTguMzcgMjUwbC01Ni45NCA1Ni45NGMtOC43NCA4LjczLTguNzQgMjIuOSAwIDMxLjYzIDQuMzcgNC4zNyAxMC4wOSA2LjU1IDE1LjgyIDYuNTVzMTEuNDUtMi4xOCAxNS44Mi02LjU1bDU2Ljk0LTU2Ljk0IDU2Ljk0IDU2Ljk0YzQuMzcgNC4zNyAxMC4wOSA2LjU1IDE1LjgyIDYuNTVzMTEuNDUtMi4xOCAxNS44Mi02LjU1YzguNzQtOC43MyA4Ljc0LTIyLjkgMC0zMS42M1oiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii44Ii8+PC9zdmc+");
            --vbnICON-URL-Transition: url("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IlRyYW5zaXRpb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cGF0aCBkPSJNMjUwIDBjNzcuNjkuNyAxNDQgMjAuMTkgMTg2LjU1IDYzLjQ1QzQ3OS44MSAxMDUuOTkgNDk5LjMgMTcyLjMxIDUwMCAyNTBjLS43IDc3LjY5LTIwLjE5IDE0NC02My40NSAxODYuNTVDMzk0IDQ3OS44MSAzMjcuNjkgNDk5LjMgMjUwIDUwMGMtNzcuNjktLjctMTQ0LTIwLjE5LTE4Ni41NS02My40NUMyMC4xOSAzOTQgLjcgMzI3LjY5IDAgMjUwYy43LTc3LjY5IDIwLjE5LTE0NCA2My40NS0xODYuNTVDMTA2IDIwLjE5IDE3Mi4zMS43IDI1MCAwIiBmaWxsPSIjNzM3ZGY0Ii8+PHBhdGggZD0iTTI1MCAxNDYuNjNjMjIuMjkgMCA0My41IDYuOTggNjEuMzcgMjAuMTggMy4xMS02Ljk4IDEwLjEtMTEuODQgMTguMjMtMTEuODQgMTEuMDIgMCAxOS45NSA4LjkzIDE5Ljk1IDE5Ljk1djUwLjA1YzAgOS44NS03LjE5IDE4LjIyLTE2LjkyIDE5LjcyLTkuNzMgMS40OS0xOS4xLTQuMzQtMjIuMDUtMTMuNzQtOC4zNS0yNi41Ny0zMi42OS00NC40My02MC41Ny00NC40M3MtNTIuMjMgMTcuODUtNjAuNTcgNDQuNDNjLTMuMyAxMC41MS0xNC41IDE2LjM1LTI1LjAxIDEzLjA1cy0xNi4zNS0xNC41LTEzLjA1LTI1LjAxYzYuNTUtMjAuODQgMTkuMy0zOC43OSAzNi44OS01MS45IDE3Ljk1LTEzLjM5IDM5LjMtMjAuNDYgNjEuNzUtMjAuNDZabTc5LjYgMTA4LjQ1YzEuOTggMCAzLjk5LjMgNS45OC45MiAxMC41MSAzLjMgMTYuMzUgMTQuNSAxMy4wNSAyNS4wMS02LjU1IDIwLjg0LTE5LjMgMzguNzktMzYuODkgNTEuOS0xNy45NSAxMy4zOS0zOS4zIDIwLjQ2LTYxLjc1IDIwLjQ2cy00My41LTYuOTgtNjEuMzctMjAuMThjLTMuMTEgNi45OC0xMC4xIDExLjg0LTE4LjIzIDExLjg0LTExLjAyIDAtMTkuOTUtOC45My0xOS45NS0xOS45NXYtNTAuMDVjMC05Ljg1IDcuMTktMTguMjIgMTYuOTItMTkuNzIgOS43NC0xLjQ5IDE5LjEgNC4zNCAyMi4wNSAxMy43NCA4LjM1IDI2LjU3IDMyLjY5IDQ0LjQzIDYwLjU3IDQ0LjQzczUyLjIzLTE3Ljg1IDYwLjU3LTQ0LjQzYzIuNjgtOC41MiAxMC41NC0xMy45NyAxOS4wMi0xMy45N1oiIGZpbGw9IiNmNWY0ZmYiIG9wYWNpdHk9Ii44Ii8+PC9zdmc+");
            --vbnICON-URL-Info: url("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkluZm8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cGF0aCBkPSJNMjUwIDBjNzcuNjkuNyAxNDQgMjAuMTkgMTg2LjU1IDYzLjQ1QzQ3OS44MSAxMDUuOTkgNDk5LjMgMTcyLjMxIDUwMCAyNTBjLS43IDc3LjY5LTIwLjE5IDE0NC02My40NSAxODYuNTVDMzk0IDQ3OS44MSAzMjcuNjkgNDk5LjMgMjUwIDUwMGMtNzcuNjktLjctMTQ0LTIwLjE5LTE4Ni41NS02My40NUMyMC4xOSAzOTQgLjcgMzI3LjY5IDAgMjUwYy43LTc3LjY5IDIwLjE5LTE0NCA2My40NS0xODYuNTVDMTA2IDIwLjE5IDE3Mi4zMS43IDI1MCAwIiBmaWxsPSIjM2Q5NmE2Ii8+PHBhdGggZD0iTTI0OC4zNCAxMzMuNTFjMTMuNDQgMCAyNC4zMyAxMC44OSAyNC4zMyAyNC4zM3MtMTAuODkgMjQuMzMtMjQuMzMgMjQuMzMtMjQuMzMtMTAuODktMjQuMzMtMjQuMzMgMTAuODktMjQuMzMgMjQuMzMtMjQuMzNtMzcuMjYgMTkzLjU4aC0xMi45VjIxNi40YzAtMTAuODgtOC44Mi0xOS43LTE5LjctMTkuN2gtMTguNjNjLTEwLjg4IDAtMTkuNyA4LjgyLTE5LjcgMTkuN3M4LjI1IDE5LjExIDE4LjYzIDE5LjY3djkxLjAyaC0xMi45Yy0xMC44OCAwLTE5LjcgOC44Mi0xOS43IDE5LjdzOC44MiAxOS43IDE5LjcgMTkuN2g2NS4xOWMxMC44OCAwIDE5LjctOC44MiAxOS43LTE5LjdzLTguODItMTkuNy0xOS43LTE5LjdaIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuOCIvPjwvc3ZnPg==");
            --vbnICON-URL-Safety: url("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IlNhZmV0eSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPjxwYXRoIGQ9Ik0yNTAgMGM3Ny42OS43IDE0NCAyMC4xOSAxODYuNTUgNjMuNDVDNDc5LjgxIDEwNS45OSA0OTkuMyAxNzIuMzEgNTAwIDI1MGMtLjcgNzcuNjktMjAuMTkgMTQ0LTYzLjQ1IDE4Ni41NUMzOTQgNDc5LjgxIDMyNy42OSA0OTkuMyAyNTAgNTAwYy03Ny42OS0uNy0xNDQtMjAuMTktMTg2LjU1LTYzLjQ1QzIwLjE5IDM5NCAuNyAzMjcuNjkgMCAyNTBjLjctNzcuNjkgMjAuMTktMTQ0IDYzLjQ1LTE4Ni41NUMxMDYgMjAuMTkgMTcyLjMxLjcgMjUwIDAiIGZpbGw9IiMzZDk2YTYiLz48cGF0aCBkPSJtMzMyLjY2IDE2NC4zOS03My41My0yMS43NWgtLjAzYTMyLjI0IDMyLjI0IDAgMCAwLTE4LjExIDBoLS4wM2wtNzMuNjIgMjEuNzZjLTguNTQgMi41MS0xNC41MSAxMC40Ny0xNC41MSAxOS4zOHY0NC40OWMwIDI4LjM2IDguNTkgNTUuNjMgMjQuODUgNzguODcgMTYuMjMgMjMuMTkgMzguODQgNDAuNTkgNjUuNCA1MC4zMmEyMC4yIDIwLjIgMCAwIDAgMTMuODggMGMyNi41NS05LjczIDQ5LjE2LTI3LjEzIDY1LjM4LTUwLjMyIDE2LjI1LTIzLjIzIDI0Ljg0LTUwLjUgMjQuODQtNzguODV2LTQ0LjUxYzAtOC45MS01Ljk2LTE2Ljg3LTE0LjUxLTE5LjM4Wm0tMTkuNTkgNTcuODgtNjMuMjggNjMuMjhjLTIuMDYgMi4wNi00Ljc2IDMuMDktNy40NiAzLjA5cy01LjQtMS4wMy03LjQ2LTMuMDlsLTM2LjQ2LTM2LjQ2Yy00LjEyLTQuMTItNC4xMi0xMC44IDAtMTQuOTEgNC4xMi00LjEyIDEwLjgtNC4xMiAxNC45MSAwbDI5LjAxIDI5LjAxIDU1LjgyLTU1LjgyYzQuMTItNC4xMiAxMC44LTQuMTIgMTQuOTEgMCA0LjEyIDQuMTIgNC4xMiAxMC44IDAgMTQuOTFaIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuOCIvPjwvc3ZnPg==");
            
        }
        
            .vbnThemeDark {
                
                --vbnAccentHEX: #4C525E;
                --vbnAccentHSL: 220, 011%, 033%;
                --vbnAccentHSL-H: 220;
                --vbnAccentHSL-S: 11%;
                --vbnAccentHSL-L: 33%;
                --vbnAccentAltXXX: var(--vbnAccentHSL-H), calc(var(--vbnAccentHSL-S) - 000%), calc(var(--vbnAccentHSL-L) - 000%);
                --vbnAccentPickXX: var(--vbnAccentHSL-H), calc(var(--vbnAccentHSL-S) - 002%), calc(var(--vbnAccentHSL-L) - 010%);
                --vbnAccentBorder: var(--vbnAccentHSL-H), calc(var(--vbnAccentHSL-S) - 000%), calc(var(--vbnAccentHSL-L) + 020%);
                --vbnAccentShadow: var(--vbnAccentHSL-H), calc(var(--vbnAccentHSL-S) - 000%), calc(var(--vbnAccentHSL-L) - 000%);
                --vbnSecondaryHEX: #2D3139;
                --vbnSecondaryHSL: 220, 012%, 020%;
                --vbnSecondaryHSL-H: 220;
                --vbnSecondaryHSL-S: 12%;
                --vbnSecondaryHSL-L: 20%;
                --vbnSecondaryAltXXX: var(--vbnSecondaryHSL-H), calc(var(--vbnSecondaryHSL-S) - 000%), calc(var(--vbnSecondaryHSL-L) - 000%);
                --vbnSecondaryPickXX: var(--vbnSecondaryHSL-H), calc(var(--vbnSecondaryHSL-S) - 000%), calc(var(--vbnSecondaryHSL-L) - 010%);
                --vbnSecondaryBorder: var(--vbnSecondaryHSL-H), calc(var(--vbnSecondaryHSL-S) - 000%), calc(var(--vbnSecondaryHSL-L) + 020%);
                --vbnSecondaryShadow: var(--vbnSecondaryHSL-H), calc(var(--vbnSecondaryHSL-S) - 000%), calc(var(--vbnSecondaryHSL-L) - 000%);
                --vbnPrimaryHEX: #1D1E20;
                --vbnPrimaryHSL: 220, 005%, 012%;
                --vbnPrimaryHSL-H: 220;
                --vbnPrimaryHSL-S: 05%;
                --vbnPrimaryHSL-L: 12%;
                --vbnPrimaryAltXXX: var(--vbnPrimaryHSL-H), calc(var(--vbnPrimaryHSL-S) - 000%), calc(var(--vbnPrimaryHSL-L) - 000%);
                --vbnPrimaryPickXX: var(--vbnPrimaryHSL-H), calc(var(--vbnPrimaryHSL-S) - 000%), calc(var(--vbnPrimaryHSL-L) - 010%);
                --vbnPrimaryBorder: var(--vbnPrimaryHSL-H), calc(var(--vbnPrimaryHSL-S) - 000%), calc(var(--vbnPrimaryHSL-L) + 020%);
                --vbnPrimaryShadow: var(--vbnPrimaryHSL-H), calc(var(--vbnPrimaryHSL-S) - 000%), calc(var(--vbnPrimaryHSL-L) - 010%);
                
            }
            
            .vbnThemeLight {
            
                --vbnAccentHEX: #75839F;
                --vbnAccentHSL: 220, 018%, 054%;
                --vbnAccentHSL-H: 220;
                --vbnAccentHSL-S: 18%;
                --vbnAccentHSL-L: 54%;
                --vbnAccentAltXXX: var(--vbnAccentHSL-H), calc(var(--vbnAccentHSL-S) - 000%), calc(var(--vbnAccentHSL-L) - 000%);
                --vbnAccentPickXX: var(--vbnAccentHSL-H), calc(var(--vbnAccentHSL-S) - 002%), calc(var(--vbnAccentHSL-L) - 010%);
                --vbnAccentBorder: var(--vbnAccentHSL-H), calc(var(--vbnAccentHSL-S) - 000%), calc(var(--vbnAccentHSL-L) + 020%);
                --vbnAccentShadow: var(--vbnAccentHSL-H), calc(var(--vbnAccentHSL-S) - 000%), calc(var(--vbnAccentHSL-L) - 000%);
                --vbnSecondaryHEX: #454A54;
                --vbnSecondaryHSL: 220, 010%, 030%;
                --vbnSecondaryHSL-H: 220;
                --vbnSecondaryHSL-S: 10%;
                --vbnSecondaryHSL-L: 30%;
                --vbnSecondaryAltXXX: var(--vbnSecondaryHSL-H), calc(var(--vbnSecondaryHSL-S) - 000%), calc(var(--vbnSecondaryHSL-L) - 000%);
                --vbnSecondaryPickXX: var(--vbnSecondaryHSL-H), calc(var(--vbnSecondaryHSL-S) - 000%), calc(var(--vbnSecondaryHSL-L) - 010%);
                --vbnSecondaryBorder: var(--vbnSecondaryHSL-H), calc(var(--vbnSecondaryHSL-S) - 000%), calc(var(--vbnSecondaryHSL-L) + 020%);
                --vbnSecondaryShadow: var(--vbnSecondaryHSL-H), calc(var(--vbnSecondaryHSL-S) - 000%), calc(var(--vbnSecondaryHSL-L) - 000%);
                --vbnPrimaryHEX: #2C2F35;
                --vbnPrimaryHSL: 220, 009%, 019%;
                --vbnPrimaryHSL-H: 220;
                --vbnPrimaryHSL-S: 09%;
                --vbnPrimaryHSL-L: 19%;
                --vbnPrimaryAltXXX: var(--vbnPrimaryHSL-H), calc(var(--vbnPrimaryHSL-S) - 000%), calc(var(--vbnPrimaryHSL-L) - 000%);
                --vbnPrimaryPickXX: var(--vbnPrimaryHSL-H), calc(var(--vbnPrimaryHSL-S) - 000%), calc(var(--vbnPrimaryHSL-L) - 010%);
                --vbnPrimaryBorder: var(--vbnPrimaryHSL-H), calc(var(--vbnPrimaryHSL-S) - 000%), calc(var(--vbnPrimaryHSL-L) + 020%);
                --vbnPrimaryShadow: var(--vbnPrimaryHSL-H), calc(var(--vbnPrimaryHSL-S) - 000%), calc(var(--vbnPrimaryHSL-L) - 010%);
                
            }
            
            
        #vbnDOM { z-index: var(--vbnPriority09); padding: 0; margin: 0; font-size: var(--vbnBaseSize); }
        
        #vbnDOM, #vbnDOM *, #vbnDOM ::before, #vbnDOM ::after { box-sizing: border-box; outline: none; }
        
        /* ================================================== ↓ VBN */
        
            /* ========== ↓ Animation */
            
                @keyframes vbnSlideIn {
                    000% { transform: scale(0.00); opacity: 0; }
                    020% { transform: scale(0.40); opacity: 0.5; }
                    030% { transform: scale(0.80); opacity: 1.0; }
                    085% { transform: scale(1.03); opacity: 1.0; }
                    100% { transform: scale(1.00); opacity: 1.0; }
                }
                @keyframes vbnSlideOut {
                    000% { transform: translateX(-200%) scale(0.90); opacity: 0; }
                    020% { transform: translateX(010px) scale(1.02); opacity: 1; }
                    030% { transform: translateX(000px) scale(1.00); opacity: 1; }
                    085% { transform: translateX(000px) scale(1.00); opacity: 1; }
                    100% { transform: translateX(-100%) scale(0.95); opacity: 0; }
                }
                @keyframes vbnLoaderUnknown { 
                    000% { left: -10%; width: 10%; }
                    020% { left: 010%; width: 30%; }
                    040% { left: 040%; width: 50%; }
                    060% { left: 070%; width: 30%; }
                    100% { left: 100%; width: 10%; }
                }
                
                
            /* ========== ↓ LoaderBar */
            
                #vbnLoaderBar {
                    
                    opacity: .92;
                    z-index: var(--vbnPriority09);
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 0%;
                    height: 2px;
                    
                    background: linear-gradient(
                        90deg,
                        hsla(var(--vbnGlow05HSL), 1),
                        hsla(var(--vbnGlow05HSL), 1),
                        hsla(var(--vbnGlow03HSL), 1));
                    box-shadow:
                        0 2px 05px 0px hsla(var(--vbnGlow05HSL), .6),
                        0 2px 15px 0px hsla(var(--vbnGlow05HSL), .6),
                        0 2px 25px 2px hsla(var(--vbnGlow03HSL), .6);
                        
                    border-radius: 100vmax;
                    will-change: left, width;
                    transition: width .4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity .26s ease-out;
                    
                }
                #vbnLoaderBar[data-state="loading"] {
                    animation: vbnLoaderUnknown 2.4s infinite cubic-bezier(0.4, 0.0, 0.6, 1);
                }
                
                
            /* ========== ↓ Panel */
            
                #vbnOptionsPanel {
                    
                    --vbnArrowSize: 35px;
                    --vbnRowPadding: 15px;
                    --vbnGap: 12px;
                    
                }
                
                .vbnPanelBase {
                    will-change: opacity, transform;
                    opacity: 0;
                    padding: 20px;
                    border: var(--vbnOftenPanelBorderBase);
                    font-family: var(--vbnBaseFont);
                    color: var(--vbnBase06HEX);
                    background: hsla(var(--vbnBase00HSL-H), 60%, 6%, .8);
                    box-shadow: var(--vbnSurfaceShadow) hsla(var(--vbnAccentShadow), .8);
                    border-radius: var(--vbnSurfaceRadius);
                    backdrop-filter: var(--vbnPanelFilter);
                    transition: all .526s var(--vbnTransitionElastic), opacity .26s ease;
                }
                .vbnPanelBase.show { opacity: 1; transform: translate(0, -50%); }
                .vbnPanelBase.hide { opacity: 0; transform: translate(120%, -50%); }
                
                .vbnOptionBase {
                    
                    z-index: var(--vbnPriority09);
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    gap: var(--vbnGap);
                    width: calc(260px + 40px);
                    
                }
                
                /* ========== ↓ Fixed */
                
                    .vbnFixed {
                        position: fixed;
                        top: 50%;
                        right: var(--vbnSpaceAxialX);
                        transform: translate(120%, -50%);
                    }
                    
                /* ========== ↓ Relative */
                
                    .vbnRelative {
                        position: relative;
                        top: 20px;
                        right: 20px;
                    }
                    
                /* ========== ↓ Other */
                
                    .vbnOptionBase input[type="checkbox"] {
                        cursor: pointer;
                        position: relative;
                        appearance: none;
                        width: .6em;
                        height: .6em;
                        margin: 0;
                        background: var(--vbnBase04HEX);
                        border: none;
                        border-radius: 50%;
                        transition: background-color .26s ease;
                        box-shadow: 0 0 2px hsla(0, 0%, 0%, .3);
                    }
                    .vbnOptionBase input[type="checkbox"]:checked {
                        background: var(--vbnGlow04HEX);
                        box-shadow: 0 0 10px var(--vbnGlow04HEX);
                    }
                    
                    .vbnOptionBase h2 {
                        margin-top: 0;
                        margin: calc(var(--vbnGap) / 2) 0 calc(var(--vbnGap) / 2 + 5px) 0;
                        color: var(--vbnGlow04HEX);
                        font-size: 1.7em;
                        font-weight: var(--vbnTitleWeight);
                        text-align: center;
                        text-shadow: 0 0 5px var(--vbnGlow04HEX);
                    }
                    
                    .vbnPanelGroup {
                        display: flex;
                        flex-direction: column;
                        gap: 0;
                        width: 100%;
                    }
                    
                    .vbnGroupHeader {
                        display: flex;
                        align-items: center;
                        width: 100%;
                    }
                    
                        .vbnHeaderRow, .vbnFoldBox {
                            background: hsla(var(--vbnBase00HSL), .6);
                            box-shadow: 0 10px 20px hsla(var(--vbnBase00HSL), .4);
                            transition: background-color .26s;
                        }
                        .vbnHeaderRow:hover, .vbnFoldBox:hover { background: hsla(var(--vbnBase00HSL), .8); }
                        
                        .vbnHeaderRow {
                            cursor: pointer;
                            padding: 5px var(--vbnRowPadding) 5px 5px;
                            height: var(--vbnArrowSize);
                            display: flex;
                            flex: 1 1 auto;
                            align-items: center;
                            justify-content: flex-start;
                            gap: 0;
                            font-size: .85em;
                            font-weight: var(--vbnTitleWeight);
                            border-radius: 0 var(--vbnUIRadius) var(--vbnUIRadius) 0;
                        }
                        
                        .vbnHeaderRow > span {
                            flex-grow: 0;
                            margin-right: auto;
                            user-select: none;
                        }
                        
                        .vbnFoldBox {
                            cursor: pointer;
                            flex: 0 0 auto;
                            width: calc(var(--vbnArrowSize) - 5px);
                            height: var(--vbnArrowSize);
                            font-size: 18px;
                            user-select: none;
                            transition: transform 0.4s ease;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: var(--vbnUIRadius) 0 0 var(--vbnUIRadius);
                        }
                        
                        .vbnArrow {
                            margin: -1px -4px 0 0;
                            font-size: 16px;
                            transform: rotate(0deg);
                            transition: transform .4s ease;
                        }
                        .vbnArrow.rotated { transform: rotate(90deg); }
                        
                    .vbnGroupBody {
                        display: flex;
                        flex-direction: column;
                        gap: calc(var(--vbnGap) / 2 - 1px);
                        opacity: 1;
                        height: auto;
                        transition: all .526s var(--vbnTransitionSmooth);
                    }
                    .vbnGroupBody.open { overflow: hidden; }
                    .vbnGroupBody.close { overflow: hidden; opacity: 0; height: 0 !important; }
                    
                        .vbnBodyRow {
                            cursor: pointer;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 9px var(--vbnRowPadding);
                            margin: 0 0 0 calc(var(--vbnGap) - 2px);
                            font-size: .82em;
                            background: hsla(var(--vbnBase00HSL), .4);
                            border-radius: var(--vbnUIRadius);
                            transition: background-color .26s, opacity 0.26s;
                        }
                        .vbnBodyRow:first-of-type { margin: calc(var(--vbnGap) / 2) 0 0 calc(var(--vbnGap) - 2px); }
                        .vbnBodyRow:last-of-type { margin: 0 0 calc(var(--vbnGap) / 4) calc(var(--vbnGap) - 2px); }
                        .vbnBodyRow:hover { background: hsla(var(--vbnBase00HSL), .8); }
                        
                        
            /* ========== ↓ ItemBlock */
            
                .vbnItemBlock {
                    box-sizing: border-box;
                    position: relative;
                    padding: var(--vbnSpacePadding);
                    margin: var(--vbnSpaceMargin);
                    border: none;
                    width: 100%;
                    font-size: 12px;
                    background: #FFFFFF;
                    box-shadow: var(--vbnOftenSurfaceShadowBase);
                    border-radius: var(--vbnSurfaceRadius);
                    transition: var(--vbnOftenTransition);
                }
                .vbnItemBlock:hover {
                    z-index: var(--vbnPriority00);
                    box-shadow: inset 0 0 2px hsla(0, 0%, 92%, .6), var(--vbnOftenSurfaceShadowHover);
                    transform: var(--vbnSurfaceZoomIn);
                }
                
                
            /* ========== ↓ Button */
            
                .vbnButtonBase {
                    cursor: pointer;
                    user-select: none;
                    border: var(--vbnUIBorder) var(--vbnAccentBorder);
                    font-size: 1em;
                    font-weight: var(--vbnTitleWeight);
                    color: var(--vbnBase00HEX);
                    background: var(--vbnAccentHEX);
                    box-shadow: var(--vbnUIShadow) var(--vbnAccentShadow);
                    border-radius: var(--vbnPanelRadius);
                    transition: transform .26s var(--vbnTransitionSoft);
                }
                .vbnButtonBase:hover { transform: var(--vbnSurfaceZoomIn); }
                .vbnButtonBase:first-of-type { margin-top: calc(var(--vbnGap) - 2px); }
                
                .vbnButtonBase.fill { cursor: pointer; }
                .vbnButtonBase.outline { cursor: pointer; }
                .vbnButtonBase.text { cursor: pointer; }
                .vbnButtonBase.ICON { cursor: pointer; }
                
                .vbnButtonBase.open {
                    border: none;
                    color: var(--vbnBase00HEX);
                    background: linear-gradient(
                        90deg,
                        var(--vbnGreen001),
                        var(--vbnBlue0001)
                    );
                    box-shadow:
                        inset 0 0 20px hsla(var(--vbnGlow06HSL), .6),
                        0 0 10px hsla(var(--vbnGlow04HSL), .4);
                }
                .vbnButtonBase.close {
                    border: none;
                    color: var(--vbnBase00HEX);
                    background: linear-gradient(
                        90deg,
                        var(--vbnGreen001),
                        var(--vbnBlue0001)
                    );
                    box-shadow:
                        inset 0 0 20px hsla(var(--vbnGlow06HSL), .6),
                        0 0 10px hsla(var(--vbnGlow04HSL), .4);
                }
                .vbnButtonFixed {
                    padding: 5px 10px;
                    width: var(--vbnButtonWidth);
                    height: var(--vbnButtonHeight);
                }
                .vbnButtonAdapt {
                    padding: 10px 0;
                    width: 100%;
                }
                
                
            /* ========== ↓ State */
            
                .vbnCurrentRow::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 1.2%;
                    transform: translateY(-50%);
                    height: 1.2em;
                    width: .26rem;
                    background: var(--vbnGlow01HEX);
                    box-shadow: 4px 0 14px 1px hsla(var(--vbnGlow01HSL), .92);
                    border-radius: 1em;
                }
                
                .vbnTipsInside {
                    position: absolute;
                    top: 2%;
                    left: 50%;
                    width: 80%;
                    padding: 5px 12px;
                    text-align: center;
                    font-size: 12px;
                    font-weight: var(--vbnTitleWeight);
                    color: var(--vbnBase00HEX);
                    background: var(--vbnAccentHEX);
                    border-radius: var(--vbnPanelRadius);
                    transform: translateX(-50%);
                }
                
                .vbnTips {
                    
                    z-index: var(--vbnPriority09);
                    position: fixed;
                    top: 2.26em;
                    left: 2em;
                    padding: .6em 1.26em;
                    border: 1.52px solid hsla(var(--vbnBase09HSL), .526);
                    
                    font-size: 15px;
                    font-weight: 526;
                    line-height: 1.5;
                    color: hsla(var(--vbnBase00HSL), .8);
                    background: var(--vbnBase08HEX);
                    box-shadow:
                        var(--vbnTipsShadowS) hsla(var(--vbnBase09HSL), .226),
                        var(--vbnTipsShadowM) hsla(var(--vbnAccentHSL), .120),
                        var(--vbnTipsShadowL) hsla(var(--vbnAccentHSL), .092);
                    border-radius: .92em;
                    animation: vbnSlideOut 2s cubic-bezier(0.25, 1.4, 0.5, 1) forwards;
                    transition: var(--vbnOftenTransition);
                    
                }
                
                .vbnTips.remind {
                    background: var(--vbnAccentHEX);
                    box-shadow:
                        var(--vbnTipsShadowS) hsla(var(--vbnBase09HSL), .226),
                        var(--vbnTipsShadowM) hsla(var(--vbnAccentHSL), .120),
                        var(--vbnTipsShadowL) hsla(var(--vbnAccentHSL), .092);
                }
                .vbnTips.correct {
                    background: var(--vbnAccentHEX);
                    box-shadow:
                        var(--vbnTipsShadowS) hsla(var(--vbnBase09HSL), .226),
                        var(--vbnTipsShadowM) hsla(var(--vbnAccentHSL), .120),
                        var(--vbnTipsShadowL) hsla(var(--vbnAccentHSL), .092);
                }
                .vbnTips.warn {
                    background: var(--vbnStateWarn);
                    box-shadow:
                        var(--vbnTipsShadowS) hsla(var(--vbnBase09HSL), .226),
                        var(--vbnTipsShadowM) hsla(20, 85%, 55%, .120),
                        var(--vbnTipsShadowL) hsla(20, 85%, 55%, .092);
                }
                .vbnTips.error {
                    background: var(--vbnStateError);
                    box-shadow:
                        var(--vbnTipsShadowS) hsla(var(--vbnBase09HSL), .226),
                        var(--vbnTipsShadowM) hsla(0, 85%, 55%, .120),
                        var(--vbnTipsShadowL) hsla(0, 85%, 55%, .092);
                }
                
                
            /* ========== ↓ Link */
            
                .vbnLink {
                    position: relative !important;
                    text-decoration: none !important;
                }
                
                .vbnLink::before, .vbnLink::after {
                    content: "" !important;
                    position: absolute !important;
                    top: calc(100% + 0px) !important;
                    left: 0 !important;
                    width: 100% !important;
                    border-bottom: dashed .0926em currentColor !important;
                }
                .vbnLink:hover::before, .vbnLink:hover::after {
                    border-bottom: solid .0926em currentColor !important;
                }
                
                
            /* ========== ↓ Load */
            
                .vbnFadeInLoad {
                    opacity: 0;
                    transform: translateY(100px);
                    transition: opacity .5s var(--vbnTransitionSmooth), transform .9s var(--vbnTransitionSmooth);
                }
                
                .vbnFadeInLoad.loaded {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                
            /* ========== ↓ Focal */
            
                .vbnFocal {
                    
                    --height: 2px;
                    --time: .526s;
                    --offset: -2px;
                    --base: var(--vbnAccentHEX);
                    --radius: var(--vbnBaseRadius);
                    --bezier: var(--vbnTransitionSoft);
                    
                    position: relative;
                    width: max-content;
                    text-decoration: none;
                    
                }
                
                .vbnFocal.CT::after {
                    content: "";
                    position: absolute;
                    left: 50%;
                    bottom: var(--offset);
                    width: 100%;
                    height: var(--height);
                    background: var(--base);
                    border-radius: var(--radius);
                    transform: translateX(-50%) scaleX(0);
                    transform-origin: center;
                    transition: transform var(--time) var(--bezier);
                }
                .vbnFocal.CT:hover::after { transform: translateX(-50%) scaleX(1);}
                
                .vbnFocal.LR::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: var(--offset);
                    width: 100%;
                    height: var(--height);
                    background: var(--base);
                    border-radius: var(--radius);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform var(--time) var(--bezier);
                }
                .vbnFocal.LR:hover::after { transform: scaleX(1); }
                
                
            /* ========== ↓ Table */
            
                .vbnTableBox {
                    display: flex;
                    justify-content: center;
                    padding: 15px;
                }
                
                .vbnTable {
                    overflow: hidden !important;
                    border-collapse: collapse !important;
                    background: transparent !important;
                    box-shadow: 
                        0 0 0 1px hsla(0, 0%, 5%, .02),
                        0 2px 10px hsla(0, 0%, 0%, .04),
                        0 10px 10px hsla(0, 0%, 0%, .02) !important;
                    border-radius: var(--vbnSurfaceRadius) !important;
                }
                .vbnTable :is(thead) {
                    font-weight: var(--vbnTitleWeight) !important;
                    background: #FFF !important;
                }
                .vbnTable :is(tr):hover { background: #FAFAFA !important; }
                
                /* ========== ↓ 首行 */
                .vbnTable :is(tr):first-child :is(td):not(:first-child, :last-child) {
                    border-left: 1px solid #00000006 !important;
                    border-right: 1px solid #00000006 !important;
                }
                
                /* ========== ↓ 尾行 */
                .vbnTable tbody tr:last-child :is(td) { border-bottom: none !important;}
                
                /* ========== ↓ 含代码 */
                .vbnTable :is(code) {
                    padding: 2px 5px !important;
                    font-family: var(--vbnCodeFont) !important;
                    color: var(--vbnCodeColor) !important;
                    background: #F2F2F2 !important;
                    border-radius: var(--vbnBaseRadius) !important;
                }
                
                /* ========== ↓ 单元格 */
                
                    .vbnTable :is(th),
                    .vbnTable :is(td) {
                        border-style: solid !important;
                        border-width: 0 0 1px 0 !important;
                        border-color: transparent transparent #FAFAFA transparent !important;
                        text-align: left !important;
                    }
                    .vbnTable :is(th)[style*="padding: 0px"],
                    .vbnTable :is(td):not([style*="padding"]) {
                        padding: 5px 10px !important;
                    }
                    
                    .vbnTable :is(th) { color: #4D4D4D !important;}
                    .vbnTable :is(td) { color: #444 !important;}
                    
    `)
    
})();


(function pkgVBN_GlobalCustom() {
    
    'use strict';
    
    // $ ================================================== ↓ Global
    
        const vbnMatchURL = window.location.href;
        const vbnMatchHost = window.location.hostname;
        
        document.documentElement.classList.add('vbn');
        
        // #region Config
        
            const VBN_SITE_GROUP = {
                
                AIGC: [ "*deepseek.com/*", "*chatgpt.com/*", ],
                
                ProgDev: [ "*github.com/*", ],
                
                Manage: [ "*yuque.com/*", "*ticktick.com/*", "*dida365.com/*", "*workona.com/*", ],
                
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
        
        
        // #region Modules
        
            const VBN_GLOBAL_MODULES = {
                
                debug: false,
                
                siteBlock: {
                    Global: [
                        "*127.0.0.1:8188*",
                        "*localhost:8188*",
                    ],
                    Assign: [ ],
                    Script: [ ],
                },
                
                featureFlags: {
                    disableAllMutationObserver: false,
                    disableGM_StyleInject: false,
                    disableFontLoad: false,
                },
                
                customHooks: {
                    beforeInit: null,
                    afterInit: null,
                },
                
            };
            
            
        // #endregion
        
        
        // #region Basics
        
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
            
            
            const VBN_MATCH_LOGIC = (() => {
                
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
                    const isActive = VBN_MATCH_LOGIC.activate(key, { matchReplace });
                    return { isActive, moduleMark: key };
                }
                
                return {
                    useModule
                };
                
            })();
            
        // #endregion
        
        
        // #region Manager
        
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
            
        // #endregion
        
        
        // #region Utils
        
            /**
             * 类名添加 | 在定位的 DOM 结构上 添加自定义类名 「支持检测链接已访问后添加」
             * @param {Object} options
             * @param {number} [options.delay=0]                        - 进入页面后 延迟多久执行 「毫秒」
             * @param {string|string[]} options.target                  - 目标DOM 「选择器」 「支持多个」
             * @param {string|string[]} options.subjoin                 - 需添加的类名 「支持多个」
             * @param {boolean} [options.trace=false]                   - 是否启用 已访问的链接痕迹
             * @param {string} [options.traceQuery="a[href]"]           - 需查询的链接类型 「选择器」
             * @param {string[]|function} [options.traceJudge]          - 增强判定 链接中需含有的关键词
             */
            const VBN_ADD_CLASS = (() => {
                
                const storageKey = 'vbnVisitedLinks';
                const attrMark = 'data-vbn-trace';
                
                function apply({
                    delay = 0,
                    target,
                    subjoin,
                    trace = false,
                    traceQuery = "a[href]",
                    traceJudge,
                }) {
                    const packSelector = Array.isArray(target) ? target : [target];
                    const packClass = Array.isArray(subjoin) ? subjoin : [subjoin];
                    const visitedSet = new Set(JSON.parse(localStorage.getItem(storageKey) || '[]'));
                    const observerKey = `subjoin_${packSelector.join('_')}_${packClass.join('_')}`;
                    
                    function defaultShouldApply(el) {
                        const links = el.querySelectorAll(traceQuery);
                        return [...links].some(link => {
                            const href = link.getAttribute("href");
                            if (!href) return false;
                            
                            const isTraceTarget =
                                typeof traceJudge === "function"
                                    ? traceJudge(href)
                                    : Array.isArray(traceJudge)
                                        ? traceJudge.every(keyword => href.includes(keyword))
                                        : true;
                                        
                            return isTraceTarget && visitedSet.has(href);
                        });
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
                            const anchor = e.target.closest(traceQuery);
                            if (!anchor) return;
                            
                            const href = anchor.getAttribute("href");
                            if (!href) return;
                            
                            const isTraceTarget =
                                typeof traceJudge === "function"
                                    ? traceJudge(href)
                                    : Array.isArray(traceJudge)
                                        ? traceJudge.every(keyword => href.includes(keyword))
                                        : true;
                                        
                            if (!isTraceTarget) return;
                            
                            visitedSet.add(href);
                            localStorage.setItem(storageKey, JSON.stringify([...visitedSet]));
                            
                            packSelector.forEach(sel => {
                                const el = anchor.closest(sel);
                                if (el) applyClass(el);
                            });
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
            
            
            /**
             * 自动执行 | 进入页面后 自动执行一系列操作 「最多支持10个步骤」
             * @param {Object} options
             * @param {number} [options.delay=200]                 - 延迟 起始执行 「毫秒」
             * @param {number} [options.delayStep=20]              - 延迟 每个执行步骤间 「毫秒」
             * @param {boolean} [options.backstage=false]          - 后台执行 「页面未激活/未在前台 是否执行」
             * @param {boolean} [options.strict=false]             - 严格模式 「若步骤执行失败 是否中断后续步骤」
             * @param {boolean} [options.debug=false]              - 调试输出
             * @param {Object} [options.step1.step10]              - 定义每个步骤的目标及操作类型
             *      - target：目标选择器
             *      - action：执行类型 "click" | "focus" | "hover"
             */
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
            
            
            /**
             * 自动加载 | 支持 无限滚动加载 / 每次加载多页
             * @param {Object} options
             * @param {boolean} [options.loadInfinite=false]                           - 无限滚动加载 是否启用
             * @param {number} [options.loadPage=9]                                    - 加载页数 「仅在非无限滚动模式下生效」
             * @param {string} [options.itemTarget="#container .c-container"]          - 内容所在容器 「父选择器」
             * @param {string|HTMLElement} [options.itemWrapper="#container"]          - 将新加载内容插入至何处 「选择器」
             * @param {string} [options.buttonPrev=".page-prev"]                       - 上一页按钮 「选择器」
             * @param {string} [options.buttonNext=".page-next"]                       - 下一页按钮 「选择器」
             * @param {boolean} [options.fragment=false]                               - 统一加载 是否启用 「加载每页的完整内容后统一插入」
             * @param {boolean} [options.throttle=true]                                - 动态加载 是否启用 「可防止性能及其他问题」
             * @param {number} [options.throttleBase=10]                               - 动态加载 延迟 基础
             * @param {number} [options.throttleJitter=50]                             - 动态加载 延迟 随机波动
             */
            const VBN_AUTO_LOAD = (() => {
                
                function apply({
                    
                    loadInfinite = false,
                    loadPage = 9,
                    itemTarget = "#container .c-container",
                    itemWrapper = "#container",
                    buttonPrev = ".page-prev",
                    buttonNext = ".page-next",
                    fragment = false,
                    throttle = true,
                    throttleBase = 10,
                    throttleJitter = 50,
                    
                } = {}) {
                    const currentPage = getCurrentPage();
                    const wrapperEl = typeof itemWrapper === "string"
                        ? document.querySelector(itemWrapper)
                        : itemWrapper;
                        
                    if (!wrapperEl) return;
                    
                    let loading = false;
                    let loadedPage = currentPage;
                    
                    // 节流加载单页函数
                    function loadSinglePage(pageNum) {
                        return new Promise(resolve => {
                            setTimeout(() => {
                                $.get(buildPageUrl(pageNum), html => {
                                    const temp = document.createElement("div");
                                    temp.innerHTML = html;
                                    const items = temp.querySelectorAll(itemTarget);
                                    
                                    const mount = fragment
                                        ? document.createDocumentFragment()
                                        : wrapperEl;
                                        
                                    items.forEach(el => {
                                        el.classList.add("vbnFadeInLoad");
                                        mount.appendChild(el);
                                    });
                                    
                                    if (fragment) wrapperEl.appendChild(mount);
                                    
                                    requestAnimationFrame(() => {
                                        wrapperEl.querySelectorAll(".vbnFadeInLoad:not(.loaded)").forEach(el => {
                                            el.classList.add("loaded");
                                        });
                                    });
                                    
                                    resolve();
                                });
                            }, throttle ? (pageNum * throttleBase + Math.random() * throttleJitter) : 0);
                        });
                    }
                    
                    // 非无限滚动 按页数加载
                    if (!loadInfinite) {
                        const nextBtn = document.querySelector(buttonNext);
                        if (nextBtn) {
                            nextBtn.href = buildPageUrl(currentPage + loadPage + 1);
                            nextBtn.textContent = `Next ${loadPage + 1}`;
                        }
                        
                        const promises = [];
                        for (let i = 1; i <= loadPage; i++) {
                            const pageNum = currentPage + i;
                            promises.push(loadSinglePage(pageNum));
                        }
                        return Promise.all(promises);
                    }
                    
                    // 无限滚动加载
                    const observer = new IntersectionObserver(entries => {
                        const entry = entries[0];
                        if (!entry.isIntersecting || loading) return;
                        
                        loading = true;
                        loadedPage += 1;
                        
                        observer.unobserve(entry.target);
                        
                        loadSinglePage(loadedPage).then(() => {
                            
                            const url = new URL(location.href);
                            url.searchParams.set("page", loadedPage);
                            history.replaceState(null, "", url.toString());
                            
                            observeLastItem();
                        }).finally(() => {
                            loading = false;
                        });
                    }, {
                        rootMargin: "500px"
                    });
                    
                    function observeLastItem() {
                        const items = wrapperEl.querySelectorAll(itemTarget);
                        const lastItem = items[items.length - 1];
                        if (lastItem) observer.observe(lastItem);
                    }
                    
                    observeLastItem();
                    
                }
                
                function getCurrentPage() {
                    const match = location.href.match(/page=(\d+)/);
                    return match ? parseInt(match[1]) : 1;
                }
                
                function buildPageUrl(page) {
                    const url = new URL(location.href);
                    url.searchParams.set("page", page);
                    return url.toString();
                }
                
                return { apply };
                
            })();
            
            
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
        
            if (VBN_MATCH_LOGIC.activate("LoaderBar")) {
                
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
                
                // 配置映射关系 "网址" => "变量"
                const vbnICON_Map = {
                    
                    "chat.deepseek.com": "--vbnICON-URL-Deepseek",
                    "chatgpt.com": "--vbnICON-URL-OpenAI",
                    "ticktick.com": "--vbnICON-URL-Tick-Vint",
                    "dida365.com": "--vbnICON-URL-Tick-Vint",
                    "yuque.com": "--vbnICON-URL-YUQUE",
                    
                    "m.ssone.io": "--vbnICON-URL-Network",
                    "my.ssonegames.com": "--vbnICON-URL-Network",
                    "ip.skk.moe": "--vbnICON-URL-Mecha",
                    "dillinger.io": "--vbnICON-URL-Markdown-Line",
                    "svgviewer.dev": "--vbnICON-URL-SVG",
                    "convertio.co": "--vbnICON-URL-Transition",
                    "bigjpg.com": "--vbnICON-URL-AIGC",
                    "abbreviationfinder.org": "--vbnICON-URL-Character",
                    "dict.cn": "--vbnICON-URL-Dict",
                    
                    "2yu7z0.smartapps.baidu.com": "--vbnICON-URL-Music",
                    
                };
                
                const vbnICON_Matched = Object.keys(vbnICON_Map).find(site => vbnMatchHost.includes(site));
                if (
                    GM_getValue("vbnGroup_Global", true) &&
                    GM_getValue("CustomICON", true) &&
                    vbnICON_Matched
                ) {
                    const vbnICON_CssVarName = vbnICON_Map[vbnICON_Matched];
                    
                    const vbnICON_URL = getComputedStyle(document.documentElement)
                        .getPropertyValue(vbnICON_CssVarName)
                        .trim()
                        .replace(/^url\(["']?(.*?)["']?\)$/i, '$1')
                        .replace(/["']/g, '');
                        
                    const vbnICON_TagLink = document.querySelector("link[rel*='icon']") || document.createElement('link');
                    
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
                        vbnICON_TagLink.type = 'image/x-icon';
                    }
                    
                    vbnICON_TagLink.rel = 'icon';
                    vbnICON_TagLink.href = vbnICON_URL;
                    
                    const head = document.head;
                    
                    head.appendChild(vbnICON_TagLink);
                    
                }
                
            })();
            
        // #endregion
        
        
        // #region FontStyle
        
            if (VBN_MATCH_LOGIC.activate("FontStyle", {
                matchReplace: {
                    include: [
                        
                        "file:///*",
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
                        .icon, .icon-wrap, .fa, .DPvwYc, path, svg, i, #sslct, .block-pagination ul *,
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
        
            if (VBN_MATCH_LOGIC.activate("Selection")) {
                
                GM_addStyle(`
                
                    ::selection {
                        color: #E2E2E2 !important;
                        background: var(--vbnBase04HEX) !important;
                    }
                    
                `);
                
            }
            
        // #endregion
        
        
        // #region ScrollBar
        
            if (VBN_MATCH_LOGIC.activate("ScrollBar")) {
                
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
        
            if (VBN_MATCH_LOGIC.activate("Search", {
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
                            html #wrapper #container .c-container .title_7Iz74 .cos-link,
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
                            html .re-box-shadow_3l74t,
                            html .re-box-shadow_1FfgR,
                            html .pc-first-style_4Jcx0 {
                                box-shadow: none;
                            }
                            
                        /* ========== ↓ 标题 */
                        
                            html #wrapper #container h3:not( 
                                .cos-space-mt-md h3,
                                .card-title_2GtKe h3,
                                .exta-links-pc_2sXPl h3,
                                .exta-link-pc_3aUAb h3
                            ) {
                                padding: var(--vbnSpacePadding);
                                margin: -10px -20px 10px -20px;
                                background: var(--vbnBase09HEX);
                                border-radius: var(--vbnSurfaceRadius) var(--vbnSurfaceRadius) 5px 5px;
                            }
                            html .cos-pc .title-box_4YBsj { width: 100%; }
                            html .cos-pc .title-wrapper_6E6PV { margin-top: -10px; }
                            html .cos-pc .title-wrapper_6E6PV .pre-text_6ulGP { z-index: 1; }
                            html ._link_1iyz5_2 { margin-bottom: 0; }
                            
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
                                box-shadow: inset 0 0 2px hsla(0, 0%, 92%, .6), var(--vbnOftenSurfaceShadowHover);
                                transform: var(--vbnSurfaceZoomIn);
                            }
                            
                            html #wrapper #container #content_left > :first-of-type:hover,                   /* 内容区 首个 */
                            html #wrapper #container .new-pmd[tpl="app/rs"]:hover,                           /* 相关搜索 */
                            html #wrapper #container .new-pmd.c-container[tpl="jr_stock"]:hover,             /* 百度股市通 */
                            html #wrapper #container .new-pmd.c-container[tpl="jr_exchange_rate"]:hover,     /* 百度股市通 */
                            html #wrapper #container .new-pmd.c-container[tpl="image_grid_san"]:hover,       /* 百度图片 */
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
                                .soutu-env-new .soutu-layer .soutu-url-wrap, .soutu-env-new .soutu-layer #soutu-url-kw { width: var(--SearchWidth); }
                                
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
                                    min-width: 920px;
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
                                
                                    &.new-pmd { width: 60%; min-width: 600px; margin: 20px auto; }
                                    ._bg-header_1ml43_46 { width: 99%; top: -5px; left: 5px; }
                                    
                                }
                                
                            /* ========== ↓ 汇率换算 */
                            
                                html #wrapper #container .c-container[tpl="jr_exrate_san"] { vbn { top: var(); }
                                
                                    .aladdin_3Tvaz .bg-header_G63NE { top: var(--bgRepair); }
                                    
                                }
                                
                            /* ========== ↓ 单位换算 */
                            
                                html #wrapper #container .c-container[tpl="ms_measures_san"] { vbn { top: var(); }
                                
                                    .cosc-card-light-bg { top: -18px; }
                                    .cosc-card-horizontal-gradient { width: 110%; background-position: center; }
                                    
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
                                    .cosd-markdown .marklang .marklang-paragraph { line-height: 1.5; }
                                    
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
                            
                                h3 { margin: -10px -20px -5px -20px; background: transparent; }
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
                                
                                .c-span9 { width: calc(100% - 128px - 20px); }
                                .c-span12 { width: 100%; }
                                
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
                            
                        /* ========== ↓ 模块 音乐 */
                        
                            html #wrapper #container .c-container[tpl="yl_music_song"] { vbn { top: var(); }
                            
                                --width: 1260px;
                                
                                .table-container_39X6k .table-thead_2yUCX .th-num_390pb,
                                .table-container_39X6k .table-tbody_3exJd .td-num_evVor {
                                    width: var(--width);
                                }
                                
                            }
                            
                        /* ========== ↓ 模块 百家号 */
                        
                            
                        /* ========== ↓ 模块 全网热卖 */
                        
                            html #wrapper #container .c-container[tpl="sp_purc_pc"] { vbn { top: var(); }
                            
                                h3 { margin: -22px -20px 10px -20px; } 
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
                                .content_LHXYt .c-row { display: flex; gap: 20px; }
                                .c-gap-top-large, .c-span4 { margin: 0; }
                                
                            }
                            
                        /* ========== ↓ 模块 聊一下更多精彩 */
                        
                            html #wrapper #container .c-container[tpl="ai_agent_distribute"] { vbn { top: var(); }
                            
                                .card-title_6qPL6 { width: 100%; }
                                .content_EbWw1 .common-content_4dXMi { width: 95%; }
                                
                            }
                            
                        /* ========== ↓ 模块 实时智能回复 */
                        
                            html #wrapper #container .c-container[tpl="ai_agent_qa_recommend"] { vbn { top: var(); } 
                            
                                /* ========== ↓ 标题 */
                                
                                    .cos-space-mt-lg { margin-top: 0; }
                                    .agent-qa-card_3V5cX .card-title_2GtKe { margin: 10px 0; }
                                    
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
                            
                        /* ========== ↓ Other */
                        
                            html #wrapper #container .c-container { vbn { top: var(); }
                            
                                .recommend-none-border { display: flex; gap: 20px; }
                                .c-gap-top-middle { margin-top: 0; }
                                
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
                
                    (function pkgVBN_Baidu_vbnFocal() {
                        
                        VBN_ADD_CLASS.apply({
                            delay: 260,
                            target: [
                                ".c-container [data-module='title']",
                                ".c-container [class^='title_']",
                                ".c-container h3[class*='title'] a",
                            ],
                            subjoin: [ "vbnFocal", "LR", ],
                        });
                        
                    })();
                    
            }
            
        // #endregion
        
        
        // // #region Google
        
        //     if (VBN_MATCH_LOGIC.activate("Search", {
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
        
        //     if (VBN_MATCH_LOGIC.activate("Search", {
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
        
        
        // #region ComfyUI
        
            if (VBN_MATCH_LOGIC.activate("AIGC", {
                matchReplace: {
                    include: [ "*127.0.0.1:8188*", "*localhost:8188*", ],
                    exclude: [ ]
                }
            })) {
                GM_addStyle( /* css */ `
                
                    /* ============================== ↓ ComfyUI Manager */
                    
                `);
            }
            
        // #endregion
        
        
        // #region DeepSeek
        
            if (VBN_MATCH_LOGIC.activate("AIGC", {
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
        
            if (VBN_MATCH_LOGIC.activate("AIGC", {
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
        
            if (VBN_MATCH_LOGIC.activate("YUQUE", {
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
                
                    (function pkgVBN_YUQUE_vbnTable() {
                        
                        VBN_ADD_CLASS.apply({
                            delay: 260,
                            target: [ "#main.BookReader-module_content_BGKYX table", ],
                            subjoin: [ "vbnTable", ],
                        });
                        
                    })();
                    
            }
            
        // #endregion
        
        
        // #region TickTick
        
            if (VBN_MATCH_LOGIC.activate("TickTick", {
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
        
            if (VBN_MATCH_LOGIC.activate("Youtube", {
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
        
            if (VBN_MATCH_LOGIC.activate("Bilibili", {
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
                        include: [
                            
                            "*greasyfork.org/*",
                                
                        ],
                        exclude: [ ]
                    })
                ) {
                    GM_addStyle( /* css */ `
                    
                        /* html .install-help-link { font-size: 1.08em; } */
                    
                    `);
                    
                    /* ========== vbnLink */
                    
                        (function pkgVBN_Greasyfork_vbnLink() {
                            
                            VBN_ADD_CLASS.apply({
                                delay: 260,
                                target: [
                                    "body a[href]:not(#script-links [href], #install-area [href], #script-list-option-groups [href], #main-header [href]):not(:has(img))",
                                    "#main-header a[href]:not(#site-name [href])",
                                    ".browser-list-selector:not(.browser-list-selector-active)",
                                ],
                                subjoin: [ "vbnLink", ],
                            });
                            
                        })();
                        
                }
                
            /* ========== Dillinger */
            
                if (
                    VBN_MATCH_RULE.match({
                        include: [ "*dillinger.io/*" ],
                        exclude: [ ]
                    })
                ) {
                    GM_addStyle( /* css */ `
                        
                        .vbn {
                            & html, body { font-family: var(--vbnBaseFont); }
                        }
                        
                    `);
                }
                
            /* ========== Bigjpg */
            
                if (
                    VBN_MATCH_RULE.match({
                        include: [ "*bigjpg.com/*" ],
                        exclude: [ ]
                    })
                ) {
                    GM_addStyle( /* css */ `
                    
                        @media (min-width: 768px) {
                            
                            html .container { max-width: none; }
                            
                            html .jumbotron {
                                padding-top: 80px;
                                padding-bottom: 80px;
                            }
                            
                        }
                        
                    `);
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
                        include: [ "*douyin.com/*" ],
                        exclude: [ ]
                    })
                ) {
                    GM_addStyle( /* css */ `
                    
                        html.vbn, html body, html body > div:first-child { height: auto; }
                        
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
        
            if (VBN_MATCH_LOGIC.activate("CSDN_RemLimits", {
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
        
            if (VBN_MATCH_LOGIC.activate("NetDisk_Check")) {
                
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