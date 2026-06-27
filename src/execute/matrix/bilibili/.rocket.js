

import { OVN_GLOBAL_SCHEDULER }  from '../../../store/core/scheduler.js';

import wave from './wave.scss';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("Bilibili", () => {
    
    GM_addStyle(wave);
    
    document.addEventListener('DOMContentLoaded', () => {
        const body = document.querySelector('.video-pod__body');
        const list = document.querySelector('.video-pod__list');
        const item = list?.querySelectorAll('.video-pod__item');
        if (item && item.length >= 2 && body) {
            body.style.setProperty('--ovnBiliItemH', (item[1].offsetTop - item[0].offsetTop) + 'px');
        }
    });
    
});

