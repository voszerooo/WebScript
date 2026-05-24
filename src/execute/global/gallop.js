

import { OVN_GLOBAL_DOM }        from '../../store/infra/dom.js';
import { OVN_GLOBAL_SCHEDULER }  from '../../store/core/scheduler.js';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("Gallop", () => {
    
    (function OVN_Gallop() {
        
        const config = {
            enhance: true,
            trailColor: '#2C2C3E50',    // 轨迹颜色
            smoothScroll: true,         // 平滑滚动
            initDelay: 524,             // 进入站点延迟作用
            effective: 12,              // 手势生效最小距离
            maxDirection: 3,            // 滑动方向 X 次后无效
            minDistance: 15,            // 最小触发距离
            verticalThreshold: 30,      // 有效位移阈值
            vShapeSmoothStep: 3,        // 抗抖动 采样间隔
            pageScrollRatio: .8,        // 上下滑 滚动比率
            maxPathBeforeDestroy: 200,  // 动作超过销毁画布
            maxPathPoints: 300,         // 最大路径数 防内存膨胀
        };
        const enhanceRules = [
            { condition: (d) => d < 400, ratio: 1 },
            { condition: (d) => d > 400 && d <= 999, ratio: 4 },
            { condition: (d) => d > 999, ratio: 14 },
        ];
        
        function getEnhancedRatio(distance) {
            for (const rule of enhanceRules) {
                if (rule.condition(distance)) return rule.ratio;
            }
            return config.pageScrollRatio;
        }
        
        let isGestureActive = false;
        let hasMoved = false;
        let gestureStarted = false;
        let gestureTimer = null;
        let path = [];
        let startX = 0, startY = 0;
        let canvas = null, ctx = null;
        let mountContainer = null;
        let rafId = null;
        let canvasDestroyed = false;
        let isListenerBound = false;
        let eventAbortController = null;
        
        function getMountContainer() {
            return document.getElementById('ovnDOM') || document.body;
        }
        function getDirection(dx, dy) {
            return Math.abs(dx) > Math.abs(dy)
                ? (dx > 0 ? 'right' : 'left')
                : (dy > 0 ? 'down' : 'up');
        }
        function countDirectionChanges(points) {
            if (points.length < 6) return 0;
            let changes = 0;
            let lastDir = null;
            for (let i = 5; i < points.length; i += 5) {
                const dx = points[i].x - points[i - 5].x;
                const dy = points[i].y - points[i - 5].y;
                if (Math.abs(dx) < 3 && Math.abs(dy) < 3) continue;
                const dir = getDirection(dx, dy);
                if (lastDir && dir !== lastDir) changes++;
                lastDir = dir;
            }
            return changes;
        }
        function detectVShape(points) {
            if (points.length < 6) return null;
            
            const step = config.vShapeSmoothStep;
            let firstDir = null, secondDir = null;
            let turnIndex = -1;
            for (let i = step; i < points.length; i += step) {
                const dy = points[i].y - points[i - step].y;
                if (Math.abs(dy) < 8) continue;
                const dir = dy > 0 ? 'down' : 'up';
                if (!firstDir) {
                    firstDir = dir;
                } else if (dir !== firstDir) {
                    secondDir = dir;
                    turnIndex = i;
                    break;
                }
            }
            if (!secondDir) return null;
            
            const realTurnIdx = Math.min(turnIndex, points.length - 1);
            const firstMove = Math.abs(points[realTurnIdx].y - points[0].y);
            const secondMove = Math.abs(points[points.length - 1].y - points[realTurnIdx].y);
            
            if (firstMove < config.verticalThreshold || secondMove < config.verticalThreshold) {
                return null;
            }
            return firstDir === 'up' && secondDir === 'down' ? 'up-down'
                : (firstDir === 'down' && secondDir === 'up' ? 'down-up' : null);
        }
        
        function doScroll(amount) {
            window.scrollBy({
                top: amount,
                behavior: config.smoothScroll ? 'smooth' : 'auto'
            });
        }
        function executeAction(action, distance = 0) {
            switch (action) {
                case 'left': history.back(); break;
                case 'right': history.forward(); break;
                case 'up-down':
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: config.smoothScroll ? 'smooth' : 'auto'
                    });
                    break;
                case 'down-up':
                    window.scrollTo({
                        top: 0,
                        behavior: config.smoothScroll ? 'smooth' : 'auto'
                    });
                    break;
                case 'up':
                case 'down': {
                    let ratio = config.pageScrollRatio;
                    if (config.enhance && distance >= config.minDistance) {
                        ratio = getEnhancedRatio(distance);
                    }
                    const amount = (action === 'up' ? -1 : 1) * window.innerHeight * ratio;
                    doScroll(amount);
                    break;
                }
                default: break;
            }
        }
        
        function isInteractiveElement(element) {
            if (!element) return false;
            const tag = element.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'BUTTON' || tag === 'A') return true;
            if (element.isContentEditable) return true;
            const role = element.getAttribute('role');
            if (role === 'textbox' || role === 'searchbox' || role === 'combobox' || role === 'button' || role === 'link') return true;
            return element.closest?.('[contenteditable="true"], [contenteditable=""]') !== null;
        }
        function getOrCreateCanvas() {
            if (!mountContainer) mountContainer = getMountContainer();
            if (!canvas) {
                canvas = document.createElement('canvas');
                canvas.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 999999999;
                    opacity: 0;
                    transition: opacity .2s ease;
                `;
                mountContainer.appendChild(canvas);
                ctx = canvas.getContext('2d');
            }
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            return canvas;
        }
        
        function showCanvas() {
            canvasDestroyed = false;
            const el = getOrCreateCanvas();
            el.style.transition = 'none';
            el.style.opacity = '1';
            void el.offsetHeight;
            el.style.transition = 'opacity .2s ease';
            clearCanvas();
        }
        function hideCanvas() {
            if (canvas) canvas.style.opacity = '0';
        }
        function destroyCanvas() {
            if (!canvas || canvasDestroyed) return;
            canvasDestroyed = true;
            canvas.style.opacity = '0';
            const onTransitionEnd = () => {
                canvas.removeEventListener('transitionend', onTransitionEnd);
                if (canvas) {
                    canvas.remove();
                    canvas = null;
                    ctx = null;
                }
            };
            canvas.addEventListener('transitionend', onTransitionEnd, { once: true });
            setTimeout(() => {
                if (canvas && canvas.parentNode && canvas.style.opacity === '0') {
                    canvas.remove();
                    canvas = null;
                    ctx = null;
                }
            }, 200);
        }
        function clearCanvas() {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        function scheduleDraw() {
            if (canvasDestroyed) return;
            if (!rafId) {
                rafId = requestAnimationFrame(() => {
                    drawTrailNow();
                    rafId = null;
                });
            }
        }
        function drawTrailNow() {
            if (!ctx || path.length < 2 || canvasDestroyed) return;
            clearCanvas();
            ctx.beginPath();
            ctx.moveTo(path[0].x, path[0].y);
            for (let i = 1; i < path.length; i++) {
                ctx.lineTo(path[i].x, path[i].y);
            }
            ctx.strokeStyle = config.trailColor;
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
        }
        
        function resetGesture(immediate = false) {
            const doReset = () => {
                isGestureActive = false;
                hasMoved = false;
                gestureStarted = false;
                path = [];
                hideCanvas();
                document.documentElement.classList.remove('gesture-active');
                window.removeEventListener('mousemove', onMouseMove, true);
                window.removeEventListener('mouseup', onMouseUp, true);
                if (gestureTimer) clearTimeout(gestureTimer);
                if (rafId) {
                    cancelAnimationFrame(rafId);
                    rafId = null;
                }
            };
            if (immediate) {
                doReset();
            } else {
                if (gestureTimer) clearTimeout(gestureTimer);
                gestureTimer = setTimeout(doReset, 150);
            }
        }
        
        let isComposing = false;
        window.addEventListener('compositionstart', () => { isComposing = true; });
        window.addEventListener('compositionend', () => { isComposing = false; });
        
        function onMouseDown(e) {
            if (e.button !== 2 || isComposing) return;
            if (isInteractiveElement(e.target)) return;
            
            if (gestureTimer) {
                clearTimeout(gestureTimer);
                gestureTimer = null;
            }
            resetGesture(true);
            
            isGestureActive = true;
            hasMoved = false;
            gestureStarted = false;
            startX = e.clientX;
            startY = e.clientY;
            path = [{ x: e.clientX, y: e.clientY }];
            
            document.documentElement.classList.add('gesture-active');
            window.addEventListener('mousemove', onMouseMove, true);
            window.addEventListener('mouseup', onMouseUp, true);
        }
        
        function onMouseMove(e) {
            if (!isGestureActive) return;
            if (isComposing) {
                resetGesture(true);
                return;
            }
            hasMoved = true;
            e.preventDefault();
            e.stopPropagation();
            
            const point = { x: e.clientX, y: e.clientY };
            const dx = point.x - startX;
            const dy = point.y - startY;
            const distanceSq = dx * dx + dy * dy;
            if (!gestureStarted) {
                if (distanceSq > config.effective * config.effective) {
                    gestureStarted = true;
                    showCanvas();
                } else {
                    return;
                }
            }
            path.push(point);
            if (path.length > config.maxPathPoints) {
                path.shift();
            }
            if (path.length > config.maxPathBeforeDestroy && !canvasDestroyed) {
                destroyCanvas();
            }
            scheduleDraw();
        }
        function onMouseUp(e) {
            if (!isGestureActive) return;
            if (gestureStarted) {
                e.stopPropagation();
                const lastPoint = path[path.length - 1] || { x: startX, y: startY };
                const dx = lastPoint.x - startX;
                const dy = lastPoint.y - startY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance >= config.minDistance) {
                    const dirChanges = countDirectionChanges(path);
                    if (dirChanges > config.maxDirection) {
                        resetGesture(false);
                        return;
                    }
                    const vShapeAction = detectVShape(path);
                    if (vShapeAction) {
                        executeAction(vShapeAction);
                    } else {
                        const dir = getDirection(dx, dy);
                        if (['left', 'right', 'up', 'down'].includes(dir)) {
                            executeAction(dir, distance);
                        }
                    }
                }
            }
            resetGesture(false);
        }
        window.addEventListener('contextmenu', (e) => {
            if (isGestureActive && hasMoved) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }, { capture: true, passive: false });
        
        function startGestureListener(container) {
            mountContainer = container;
            if (isListenerBound) return;
            const styleId = 'ovn-gesture-style';
            if (!document.getElementById(styleId)) {
                const style = document.createElement('style');
                style.id = styleId;
                style.textContent = '.gesture-active { user-select: none !important; -webkit-user-select: none !important; }';
                const ovnContainer = document.getElementById('ovnDOM');
                if (ovnContainer) ovnContainer.appendChild(style);
                else document.head.appendChild(style);
            }
            
            eventAbortController = new AbortController();
            const signal = eventAbortController.signal;
            
            document.addEventListener('mousedown', onMouseDown, { capture: true, passive: false, signal });
            window.addEventListener('blur', () => resetGesture(true), { signal });
            window.addEventListener('resize', () => {
                if (canvas) {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    if (isGestureActive) clearCanvas();
                }
            }, { signal });
            
            isListenerBound = true;
        }
        
        if (typeof OVN_GLOBAL_DOM !== 'undefined' && OVN_GLOBAL_DOM.bindOVN) {
            OVN_GLOBAL_DOM.bindOVN().then(container => {
                setTimeout(() => startGestureListener(container), config.initDelay);
            });
        } else {
            setTimeout(() => startGestureListener(getMountContainer()), config.initDelay);
        }
        
    })();
    
});

