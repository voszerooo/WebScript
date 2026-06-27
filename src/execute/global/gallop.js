

import { OVN_VALUE_PREFS }       from '../../store/value/prefs.js';
import { OVN_GLOBAL_INFORM }     from '../../store/infra/inform.js';
import { OVN_GLOBAL_SCHEDULER }  from '../../store/core/scheduler.js';


// $ ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("Gallop", () => {
    
    (function OVN_Gallop() {
        
        const config = {
            effective: 12,
            pageScrollRatio: .8,
            maxPath: 926,
        };
        
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
                if (dx * dx + dy * dy < config.effective * config.effective) continue;
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
            if (firstMove < 26 || secondMove < 26) return null;
            return firstDir === 'up' && secondDir === 'down' ? 'up-down'
                : (firstDir === 'down' && secondDir === 'up' ? 'down-up' : null);
        }
        
        function isEditable(el) {
            if (!el) return false;
            const tag = el.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
            if (el.isContentEditable) return true;
            return el.closest?.('[contenteditable="true"], [contenteditable=""]') !== null;
        }
        
        function doScroll(amount) {
            window.scrollBy({ top: amount, behavior: 'smooth' });
        }
        function executeAction(action, distance = 0) {
            switch (action) {
                case 'left': if (history.length > 1) history.back(); break;
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
        
        let overlay = null;
        let canvas = null;
        let ctx = null;
        
        function ensureOverlay() {
            if (overlay && overlay.parentNode) return true;
            if (overlay) { overlay = null; canvas = null; ctx = null; }
            const container = document.getElementById('ovnDOM') || document.body;
            if (!container) return false;
            
            overlay = document.createElement('div');
            overlay.id = 'ovnGallop';
            overlay.style.cssText =
                'display:none;' +
                'position:fixed;top:0;left:0;width:100%;height:100%;' +
                'z-index: var(--ovnPriority09,9292692);' +
                'pointer-events:none;' +
                'user-select:none;' +
                '-webkit-user-select:none;' +
                'cursor:default;';
            canvas = document.createElement('canvas');
            canvas.style.cssText =
                'position:absolute;top:0;left:0;width:100%;height:100%;' +
                'pointer-events:none;';
            ctx = canvas.getContext('2d');
            
            overlay.appendChild(canvas);
            container.appendChild(overlay);
            return true;
        }
        
        let trailColor = '';
        
        function showOverlay() {
            if (!ensureOverlay()) return;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            overlay.style.display = 'block';
            overlay.style.pointerEvents = 'auto';
            trailColor = getComputedStyle(document.documentElement)
                .getPropertyValue('--ovnGallopTrail').trim() || '#2C2C3E50';
        }
        function hideOverlay() {
            if (!overlay) return;
            overlay.style.pointerEvents = 'none';
            overlay.style.display = 'none';
        }
        function isOverlayActive() {
            return overlay && overlay.style.pointerEvents === 'auto';
        }
        
        let rafId = null;
        let trailStopped = false;
        
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
            ctx.strokeStyle = trailColor;
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
        
        let isGestureActive = false;
        let gestureStarted = false;
        let path = [];
        let startX = 0, startY = 0;
        let gestureTimer = null;
        
        function cleanupGesture() {
            if (gestureTimer) {
                clearTimeout(gestureTimer);
                gestureTimer = null;
            }
            window.removeEventListener('mousemove', onWinMouseMove, true);
            window.removeEventListener('mouseup', onWinMouseUp, true);
            isGestureActive = false;
            gestureStarted = false;
            path = [];
            hideOverlay();
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            trailStopped = false;
        }
        
        function scheduleCleanup() {
            if (gestureTimer) clearTimeout(gestureTimer);
            window.removeEventListener('mousemove', onWinMouseMove, true);
            window.removeEventListener('mouseup', onWinMouseUp, true);
            gestureTimer = setTimeout(cleanupGesture, 200);
        }
        
        function onWinMouseMove(e) {
            if (!isGestureActive) return;
            if (isComposing) { cleanupGesture(); return; }
            
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
        
        function onWinMouseUp(e) {
            if (!isGestureActive) return;
            if (e.button !== 2) return;
            
            e.preventDefault();
            e.stopPropagation();
            
            if (!gestureStarted) {
                cleanupGesture();
                return;
            }
            const lastPoint = path[path.length - 1] || { x: startX, y: startY };
            const dx = lastPoint.x - startX;
            const dy = lastPoint.y - startY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance >= config.effective) {
                const dirChanges = countDirectionChanges(path);
                if (dirChanges > 3) { scheduleCleanup(); return; }
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
            scheduleCleanup();
        }
        
        function onWinContextMenu(e) {
            if (isOverlayActive()) {
                e.preventDefault();
                e.stopPropagation();
                // e.stopImmediatePropagation();
            }
        }
        function onWinAuxClick(e) {
            if (isOverlayActive()) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
        function onWinSelectStart(e) {
            if (isOverlayActive()) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
        
        let isComposing = false;
        
        function onDocMouseDown(e) {
            if (e.button !== 2 || isComposing || isEditable(e.target)) return;
            
            cleanupGesture();
            
            window.addEventListener('mousemove', onWinMouseMove, true);
            window.addEventListener('mouseup', onWinMouseUp, true);
            
            isGestureActive = true;
            gestureStarted = false;
            trailStopped = false;
            startX = e.clientX;
            startY = e.clientY;
            path = [{ x: e.clientX, y: e.clientY }];
        }
        
        window.addEventListener('compositionstart', () => { isComposing = true; });
        window.addEventListener('compositionend', () => { isComposing = false; });
        
        function init() {
            if (!ensureOverlay()) {
                setTimeout(init, 524);
                return;
            }
            window.addEventListener('contextmenu', onWinContextMenu, { capture: true, passive: false });
            window.addEventListener('auxclick', onWinAuxClick, { capture: true, passive: false });
            window.addEventListener('selectstart', onWinSelectStart, { capture: true });
            window.addEventListener('mousedown', onDocMouseDown, { capture: true, passive: false });
            window.addEventListener('blur', () => { if (isGestureActive) cleanupGesture(); });
            window.addEventListener('resize', () => {
                if (isGestureActive && canvas && ctx) {
                    canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
                    canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
                    ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);
                }
            });
        }
        setTimeout(init, 524);
        
        let dom = document.getElementById('ovnDOM');
        if (dom) {
            let value = dom.getAttribute('data-ovn-fn') || '';
            dom.setAttribute('data-ovn-fn', value ? value + ' Gallop' : 'Gallop');
        }
        
    })();
    
});

