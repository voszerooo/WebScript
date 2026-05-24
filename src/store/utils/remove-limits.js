

import { OVN_OBSERVER_CENTER }   from '../../store/infra/observer.js';


// $ ================================================== ↓ OVN_REMOVE_LIMITS

    const OVN_REMOVE_LIMITS = (() => {
        
        const reset = () => {
            document.querySelectorAll('*').forEach(el => {
                el.onselectstart = null;
                el.style.userSelect = el.style.webkitUserSelect = 'auto';
                el.style.pointerEvents = 'auto';
                ['ondragstart','ondrag','ondragend'].forEach(k => el[k] = null);
                el.removeAttribute?.('ondragstart');
            });
        };
        const hotkey = (key) => {
            if (!key) return () => true;
            const map = { ctrl: 'control', alt: 'alt', shift: 'shift' };
            const keys = (Array.isArray(key) ? key : [key]) .map(k => map[k.toLowerCase()] || k.toLowerCase());
            let state = false;
            document.addEventListener('keydown', e => { if (keys.includes(e.key.toLowerCase())) state = true; }, true);
            document.addEventListener('keyup', e => { if (keys.includes(e.key.toLowerCase())) state = false; }, true);
            return () => state;
        };
        const menu = (isActive) => {
            const handler = e => {
                if (!isActive()) return;
                e.stopPropagation();
            };
            document.oncontextmenu = window.oncontextmenu = null;
            ['contextmenu','selectstart','copy','cut','paste'].forEach(t =>
                window.addEventListener(t, handler, true)
            );
        };
        const drag = (isActive) => {
            const run = () => {
                if (!isActive()) return;
                reset();
            };
            if (isActive()) reset();
            const stop = e => {
                if (!isActive()) return;
                e.stopImmediatePropagation();
            };
            document.addEventListener('pointerdown', stop, true);
            document.addEventListener('touchstart', stop, true);
            document.addEventListener('mousedown', e => {
                if (!isActive()) return;
                e.stopImmediatePropagation();
                let target = e.target;
                while (target && target !== document) {
                    if (target.tagName === 'IMG' || target.tagName === 'VIDEO') break;
                    target = target.parentNode;
                }
                if (!target) return;
                if (target.tagName === 'IMG' || target.tagName === 'VIDEO') {
                    target.setAttribute('draggable', 'true');
                    target.style.pointerEvents = 'auto';
                    target.removeAttribute('controlslist');
                }
            }, true);
            OVN_OBSERVER_CENTER.observe(document.documentElement, {
                childList: true,
                subtree: true
            }, run);
        };
        
        function apply({
            key,
            ReLimits = 'all',
        } = {}) {
            const isActive = hotkey(key);
            const list = (() => {
                if (!ReLimits || ReLimits === 'all') return ['menu','drag'];
                return Array.isArray(ReLimits) ? ReLimits : [ReLimits];
            })();
            list.forEach(type => {
                if (type === 'menu') menu(isActive);
                if (type === 'drag') drag(isActive);
            });
        }
        
        return { apply };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_REMOVE_LIMITS };

