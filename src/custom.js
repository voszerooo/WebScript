

'use strict';

import '../script/flux.js';
import './style/injector.js';

import { OVN } from './store/derive.js';

import './execute/ignite.js';


(function init() {
    
    if (
        typeof window !== "undefined" &&
        ((!__OVN_DEV_BUILD__ && window.OVN_GLOBAL_CUSTOM) ||
            window.top !== window.self)
    ) {
        return;
    }
    window.OVN_GLOBAL_CUSTOM = true;
    
    try {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', onReady, { once: true });
        } else if (document.readyState === 'interactive') {
            requestAnimationFrame(() => requestAnimationFrame(onReady));
        } else {
            onReady();
        }
    } catch (error) {
        console.error('[==👽OVN==] | [Global.Custom] 初始化失败:', error);
    }
    
})();

function onReady() {
    try {
        OVN.SCHEDULER.run();
        OVN.DEBUG.infoTotal();
    } catch (error) {
        console.error('[==👽OVN==] | [Global.Custom] 启动出错:', error.stack);
    }
}

