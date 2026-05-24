

import color     from './.package/color.scss';
import font      from './.package/font.scss';
import ui        from './.package/ui.scss';
import space     from './.package/space.scss';
import icon      from './.package/icon.scss';
import xfilter   from './.package/icon.xxfilterxx.scss';
import global    from './.package/global.scss';


const subjoin = [];


if (!__OVN_RELEASE__) { subjoin.push(xfilter); }
const base = [color, font, ui, space, icon, global];
const merge = [...base, ...subjoin].filter(Boolean).join('\n\n');

class Injector {
    
    constructor() {
        this.styleContainer = null;
        this.styleElement = null;
        this.version = 0;
    }
    inject(cssText) {
        const finalCss = cssText || merge;
        const doInject = () => {
            try {
                if (!document.body) {
                    requestAnimationFrame(() => doInject());
                    return;
                }
                let rootContainer = document.getElementById('ovnDOM');
                if (!rootContainer) {
                    rootContainer = document.createElement('div');
                    rootContainer.id = 'ovnDOM';
                    document.body.insertBefore(rootContainer, document.body.firstChild);
                }
                let styleContainer = document.getElementById('ovnStyle');
                if (!styleContainer) {
                    styleContainer = document.createElement('div');
                    styleContainer.id = 'ovnStyle';
                    rootContainer.insertBefore(styleContainer, rootContainer.firstChild);
                }
                this.styleContainer = styleContainer;
                
                const existing = this.styleContainer.querySelectorAll('style[data-ovn-style-global]');
                for (let i = 0; i < existing.length; i++) {
                    existing[i].remove();
                }
                this.styleElement = document.createElement('style');
                this.styleElement.setAttribute('data-ovn-style-global', '');
                this.styleElement.textContent = finalCss;
                this.styleContainer.insertBefore(this.styleElement, this.styleContainer.firstChild);
                
                this.version++;
                
            } catch (e) {
                requestAnimationFrame(() => doInject());
            }
        };
        doInject();
    }
    
}

const injector = new Injector();
injector.inject();

window.OVN_CSS_INJECTOR = injector;
export { injector as OVN_CSS_INJECTOR };

