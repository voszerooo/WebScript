

import { OVN_GLOBAL_BUTTON }     from '../../../store/infra/button.js';
import { OVN_GLOBAL_SCHEDULER }  from '../../../store/core/scheduler.js';
import { OVN_BATCH_LOAD }        from '../../../store/utils/batch-load.js';

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


OVN_GLOBAL_SCHEDULER.run("Bilibili_BatchLoad", () => {
    (function OVN_Bilibili_BatchLoad() {
        
        OVN_GLOBAL_BUTTON.OVN([{
            key: 'Bilibili_BatchLoad',
            type: 'action',
            name: ['GO'],
            color: ['var(--ovnAccentHEX)', 'var(--ovnBase04HEX)'],
            group: 'ovnButtonUpper',
            class: ['ovnButtonBase', 'ovnButtonFixed'],
            order: 20,
            onClick: () => {
                OVN_BATCH_LOAD.apply({
                    item: 7,
                    target: ".video-list.row",
                    url: ".bili-video-card .bili-video-card__wrap > a[href*='//www.bilibili.com/video']",
                });
            }
        }]);
        
    })();
});

