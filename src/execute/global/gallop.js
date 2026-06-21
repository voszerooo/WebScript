
import { OVN_VALUE_PREFS }       from '../../store/value/prefs.js';
import { OVN_GLOBAL_INFORM }     from '../../store/infra/inform.js';
import { OVN_GLOBAL_SCHEDULER }  from '../../store/core/scheduler.js';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("Gallop", () => {
    
    (function OVN_Gallop() {
        
        const config = {
            trailColor: '#2C2C3E50',
            effective: 12,
            pageScrollRatio: .8,
            maxPath: 926,
        };
        
        let overlay = null;
        let canvas = null;
        let ctx = null;
        let isGestureActive = false;
        let gestureStarted = false;
        let path = [];
        let startX = 0, startY = 0;
        let rafId = null;
        let gestureTimer = null;
        let trailStopped = false;
        let isComposing = false;
        
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
            const step = 3;
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
            if (firstMove < 30 || secondMove < 30) return null;
            return firstDir === 'up' && secondDir === 'down' ? 'up-down'
                : (firstDir === 'down' && secondDir === 'up' ? 'down-up' : null);
        }
        
        function doScroll(amount) {
            window.scrollBy({ top: amount, behavior: 'smooth' });
        }
        function executeAction(action, distance = 0) {
            switch (action) {
                case 'left': history.back(); break;
                case 'right': history.forward(); break;
                case 'up-down':
                    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
                    break;
                case 'down-up':
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    break;
                case 'up':
                case 'down': {
                    let ratio = config.pageScrollRatio;
                    if (distance >= config.effective) {
                        if (distance < 426) ratio = 1;
                        else if (distance <= 926) ratio = 4;
                        else ratio = 12;
                    }
                    const amount = (action === 'up' ? -1 : 1) * window.innerHeight * ratio;
                    doScroll(amount);
                    break;
                }
                default: break;
            }
        }
        
        function ensureOverlay() {
            if (overlay && overlay.parentNode) return true;
            if (overlay) { overlay = null; canvas = null; ctx = null; }
            const container = document.getElementById('ovnDOM') || document.body;
            if (!container) return false;
            
            overlay = document.createElement('div');
            overlay.id = 'ovnGallop';
            overlay.style.cssText = 'display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index: var(--ovnPriority09,92926192);pointer-events:none;';
            
            canvas = document.createElement('canvas');
            canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;';
            ctx = canvas.getContext('2d');
            overlay.appendChild(canvas);
            container.appendChild(overlay);
            return true;
        }
        function showOverlay() {
            if (!ensureOverlay()) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            overlay.style.display = 'block';
        }
        function hideOverlay() {
            if (!overlay) return;
            overlay.style.display = 'none';
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            trailStopped = false;
        }
        
        function scheduleDraw() {
            if (!ctx || trailStopped) return;
            if (!rafId) {
                rafId = requestAnimationFrame(() => {
                    drawTrailNow();
                    rafId = null;
                });
            }
        }
        function drawTrailNow() {
            if (!ctx || path.length < 2 || trailStopped) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.moveTo(path[0].x, path[0].y);
            if (path.length === 2) {
                ctx.lineTo(path[1].x, path[1].y);
            } else {
                for (let i = 1; i < path.length - 1; i++) {
                    const midX = (path[i].x + path[i + 1].x) / 2;
                    const midY = (path[i].y + path[i + 1].y) / 2;
                    ctx.quadraticCurveTo(path[i].x, path[i].y, midX, midY);
                }
                ctx.lineTo(path[path.length - 1].x, path[path.length - 1].y);
            }
            ctx.strokeStyle = config.trailColor;
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
        }
        
        function stopTrail() {
            if (trailStopped) return;
            trailStopped = true;
            if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
            const count = OVN_VALUE_PREFS.gallop.get('destroy_tip', 0);
            if (count < 2) {
                OVN_GLOBAL_INFORM.OVN.top('YO 👾 调皮');
                OVN_VALUE_PREFS.gallop.set('destroy_tip', count + 1);
            }
        }
        
        function resetGesture(immediate) {
            const doReset = () => {
                isGestureActive = false;
                gestureStarted = false;
                path = [];
                hideOverlay();
                if (gestureTimer) clearTimeout(gestureTimer);
            };
            if (immediate) {
                doReset();
            } else {
                if (gestureTimer) clearTimeout(gestureTimer);
                gestureTimer = setTimeout(doReset, 150);
            }
        }
        
        window.addEventListener('compositionstart', () => { isComposing = true; });
        window.addEventListener('compositionend', () => { isComposing = false; });
        
        function onMouseDown(e) {
            if (e.button !== 2 || isComposing) return;
            if (gestureTimer) {
                clearTimeout(gestureTimer);
                gestureTimer = null;
            }
            resetGesture(true);
            
            isGestureActive = true;
            gestureStarted = false;
            trailStopped = false;
            startX = e.clientX;
            startY = e.clientY;
            path = [{ x: e.clientX, y: e.clientY }];
        }
        
        function onContextMenu(e) {
            if (isGestureActive && gestureStarted) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
        function onMouseMove(e) {
            if (!isGestureActive) return;
            if (isComposing) { resetGesture(true); return; }
            
            const point = { x: e.clientX, y: e.clientY };
            const dx = point.x - startX;
            const dy = point.y - startY;
            const distanceSq = dx * dx + dy * dy;
            if (!gestureStarted) {
                if (distanceSq > config.effective * config.effective) {
                    gestureStarted = true;
                    showOverlay();
                } else {
                    return;
                }
            }
            e.preventDefault();
            e.stopPropagation();
            const lastPt = path[path.length - 1];
            const stepDx = point.x - lastPt.x;
            const stepDy = point.y - lastPt.y;
            if (stepDx * stepDx + stepDy * stepDy < 4) return;
            path.push(point);
            if (path.length >= config.maxPath && !trailStopped) stopTrail();
            if (path.length > config.maxPath) path.shift();
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
                if (distance >= config.effective) {
                    const dirChanges = countDirectionChanges(path);
                    if (dirChanges > 3) { resetGesture(false); return; }
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
                resetGesture(false);
            } else {
                resetGesture(true);
            }
        }
        
        function init() {
            document.addEventListener('mousedown', onMouseDown, { capture: true, passive: false });
            document.addEventListener('mousemove', onMouseMove, { capture: true, passive: false });
            document.addEventListener('mouseup', onMouseUp, { capture: true, passive: false });
            document.addEventListener('contextmenu', onContextMenu, { capture: true, passive: false });
            window.addEventListener('blur', () => { if (isGestureActive) resetGesture(true); });
            window.addEventListener('resize', () => {
                if (isGestureActive && canvas) {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            });
        }
        
        setTimeout(init, 524);
        
    })();
    
});
