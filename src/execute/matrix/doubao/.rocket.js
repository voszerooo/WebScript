

import { OVN_GLOBAL_SCHEDULER }  from '../../../store/core/scheduler.js';

import wave from './wave.scss';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("DOUBAO", () => {
    
    GM_addStyle(wave);
    
});

