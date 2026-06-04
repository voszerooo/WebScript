

import { OVN_GLOBAL_SCHEDULER }  from '../../../store/core/scheduler.js';

import wave from './wave.scss';
import scss from './.wave.scss';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("DeepSeek", () => {
    
    GM_addStyle(wave);
    GM_addStyle(scss);
    
});

