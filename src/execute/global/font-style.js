

import { OVN_GLOBAL_SCHEDULER }  from '../../store/core/scheduler.js';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("FontStyle", () => {
    
    (function OVN_FontStyle() {
        
        GM_addStyle( /* css */ `
        
            body *:not(:where(
                .icon, .icon-wrap, .fa, .DPvwYc, path, svg, i, .google-symbols, .clear-btn_2_I2l, .block-pagination ul *,
                .code, .pre, .inline-code, .md-code, .blob-code, .blob-code-inner, .js-file-line, .code-block, .code-container, .language-css,
                .cm-line, .cm-line span, ne-code, ne-text, .Box-sc-g0xbh4-0.iJOeCH *, [class*="BlobViewContent-module__blobContentWrapper"] *,
                code, code *, pre, pre *, kbd, samp, [class*="language-"], [class*="-language"], [class*="code-"], [class*="-code"], [class*="editor"], [class*="icon"], [class*="emoji"]
            )) {
                font-family: var(--ovnBaseFont) !important;
            }
            
            :where(
                .code, .pre, .inline-code, .md-code, .blob-code, .blob-code-inner, .js-file-line, .code-block, .code-container, .language-css,
                .cm-line, .cm-line span, ne-code, ne-text, .Box-sc-g0xbh4-0.iJOeCH *,
                code, code *, pre, pre *, kbd, samp, [class*="language-"], [class*="-language"], [class*="code-"], [class*="-code"]
            ):not(:where(
                [class*="BlobViewContent-module__blobContentWrapper"] *
            )) {
                font-family: var(--ovnCodeFont) !important;
            }
            
            .inline-code, .ds-markdown code, .prose :where(code):not(:where([class~=not-prose] *), pre *) {
                padding: .126em .4em !important;
                font-weight: 526 !important;
                text-shadow: 0 0 .126em currentColor !important;
            }
            
        `);
        
    })();
    
});

