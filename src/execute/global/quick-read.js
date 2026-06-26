

import { OVN_GLOBAL_SCHEDULER }  from '../../store/core/scheduler.js';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("QuickRead", () => {
    
    (function OVN_QuickRead() {
        
        const config = {
            key: 'QuickRead',
            ratio: .92,
            slow: .126,
            scroll: true,
            smooth: true,
            letter: true,
        };
        
        const doScroll = (amount) => window.scrollBy({
            top: amount,
            left: 0,
            behavior: config.smooth ? "smooth" : "auto"
        });
        
        const keyMap = {
            ArrowUp:   () => config.scroll && doScroll(-window.innerHeight * config.ratio),
            ArrowDown: () => config.scroll && doScroll( window.innerHeight * config.ratio),
        };
        if (config.letter) Object.assign(keyMap, {
            w: keyMap.ArrowUp,
            s: keyMap.ArrowDown,
        });
        
        const scrollDir = {
            ArrowUp: -1,
            ArrowDown: 1,
        };
        if (config.letter) Object.assign(scrollDir, { w: -1, s: 1 });
        
        let holdKey = null;
        let holdDir = 0;
        let holdRAF = null;
        
        let fps = 0;
        let fpsTimes = [];
        let fpsLast = 0;
        
        function startHold(dir) {
            if (holdRAF) return;
            holdDir = dir;
            fpsTimes = [];
            fpsLast = 0;
            function tick(now) {
                if (holdRAF === null) return;
                if (fpsLast) {
                    const raw = now - fpsLast;
                    if (raw < 100) {
                        fpsTimes.push(raw);
                        if (fpsTimes.length > 60) fpsTimes.shift();
                        fps = 1000 / (fpsTimes.reduce((a, b) => a + b, 0) / fpsTimes.length);
                    }
                }
                fpsLast = now;
                if (fps) {
                    const px = window.innerHeight * config.slow / fps;
                    window.scrollBy({ top: holdDir * px, left: 0, behavior: "auto" });
                }
                holdRAF = requestAnimationFrame(tick);
            }
            holdRAF = requestAnimationFrame(tick);
        }
        function stopHold(key) {
            if (key && key !== holdKey) return;
            if (holdRAF) { cancelAnimationFrame(holdRAF); holdRAF = null; }
            holdKey = null;
            holdDir = 0;
        }
        
        document.addEventListener("keydown", (event) => {
            
            if (event.ctrlKey || event.metaKey || event.altKey) return;
            
            const target = event.target;
            const tagName = target.tagName.toLowerCase();
            if (
                tagName === "input" ||
                tagName === "textarea" ||
                tagName === "select" ||
                target.isContentEditable
            ) return;
            if (event.defaultPrevented) return;
            
            const key = event.key;
            const action = keyMap[key] || keyMap[key.toLowerCase()];
            if (!action) return;
            
            event.preventDefault();
            if (event.repeat) {
                const dir = scrollDir[key];
                if (dir && !holdRAF) startHold(dir);
                return;
            }
            const dir = scrollDir[key];
            if (dir) {
                stopHold();
                holdKey = key;
            } else {
                action();
            }
            
        }, { passive: false });
        
        document.addEventListener("keyup", (event) => {
            if (event.key !== holdKey) return;
            if (!holdRAF) {
                const action = keyMap[event.key] || keyMap[event.key.toLowerCase()];
                if (action) action();
            }
            stopHold(event.key);
        });
        
        let dom = document.getElementById('ovnDOM');
        if (dom) {
            let value = dom.getAttribute('data-ovn-fn') || '';
            dom.setAttribute('data-ovn-fn', value ? value + ' ' + config.key : config.key);
        }
        
    })();
    
});

