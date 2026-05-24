

import { OVN_GLOBAL_SCHEDULER }  from '../../../store/core/scheduler.js';

import wave from './wave.scss';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("TickTick", () => {
    
    GM_addStyle(wave);
    
});
