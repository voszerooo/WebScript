

const ovnMagic = (() => {
    
    if (window.__OVN_MAGIC__) return;
    window.__OVN_MAGIC__ = true;
    
    const ID = 'ovnMagic';
    const html = document.documentElement;
    
    const exist = document.getElementById(ID);
    if (exist) {
        if (html.classList.contains('ovn')) {
            exist.remove();
            return;
        }
        const obs = new MutationObserver(() => {
            if (html.classList.contains('ovn')) {
                const element = document.getElementById(ID);
                if (element) element.remove();
                obs.disconnect();
            }
        });
        obs.observe(html, { attributes: true, attributeFilter: ['class'] });
        return;
    }
    if (html.classList.contains('ovn')) return;
    
    const style = document.createElement('style');
    style.id = ID;
    style.textContent = 'html:not(.ovn){opacity:0!important;pointer-events:none!important}';
    
    const clear = () => {
        style.remove();
        if (observer) observer.disconnect();
    };
    
    let observer = new MutationObserver(() => {
        if (html.classList.contains('ovn')) clear();
    });
    observer.observe(html, { attributes: true, attributeFilter: ['class'] });
    setTimeout(() => {
        if (!html.classList.contains('ovn') && document.getElementById(ID)) {
            clear();
        }
    }, 526);
    
    const insert = () => {
        if (document.getElementById(ID)) return;
        const head = document.head;
        if (head) {
            head.insertBefore(style, head.firstChild);
            return true;
        }
        return false;
    };
    if (!insert()) {
        const tryInsert = () => {
            if (insert()) {
                observer?.disconnect();
            } else {
                requestAnimationFrame(tryInsert);
            }
        };
        requestAnimationFrame(tryInsert);
    }
    
})();

