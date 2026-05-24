

import { OVN_GLOBAL_SCHEDULER }  from '../../../store/core/scheduler.js';
import { OVN_ADD_CLASS }         from '../../../store/utils/add-class.js';

import wave from './wave.scss';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("YUQUE", () => {
    
    GM_addStyle(wave);
    
});


OVN_GLOBAL_SCHEDULER.run("ovnTable", () => {
    (function OVN_YUQUE_ovnTable() {
        
        OVN_ADD_CLASS.apply({
            // target: [ "#main table", ],
            target: [ "#main table:not(.data-table-card table)", ],
            subjoin: [ "ovnTable", ],
        });
        
    })();
});


OVN_GLOBAL_SCHEDULER.run("ovnGrid", () => {
    (function OVN_YUQUE_ovnGrid() {
        
        OVN_ADD_CLASS.apply({
            target: [
                '.ne-editor-wrap-content',                      // 编辑模式
                '.ne-viewer-layout-mode-fixed .ne-viewer-body', // 预览模式
            ],
            subjoin: [ "ovnGrid", "ovnSolid", ],
        });
        
    })();
});

