

import { OVN_OBSERVER_CENTER }   from '../../store/infra/observer.js';


// $ ================================================== ↓ START

    (function OVN_Theme() {
        
        const rule = {
            light: [ 
                "light", "light-theme", "theme-light",
            ],
            dark: [
                "dark", "dark-theme", "theme-dark", "nb-theme-dark", "dark-mode",
                "[data-kumuhana=pouli]", "[data-theme=dark]", "[data-color-mode=dark]",
            ]
        };
        // class / attribute name / attribute=value / [attribute=value]
        const antonym = {
            light: [ "darker-dark-theme-deprecate", ],
            dark: [ ]
        };
        
        let currentTheme = null;
        
        const themeSystem = () =>
            window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" :
            window.matchMedia("(prefers-color-scheme: light)").matches ? "light" :
            null;
            
        const matchCount = (target, keywords) => {
            if (!target) return 0;
            const items = [
                ...target.classList,
                ...(target.getAttributeNames?.() || []).flatMap(name => {
                    const val = target.getAttribute(name);
                    return [name, `${name}=${val}`, `[${name}=${val}]`];
                })
            ].map(string => string.toLowerCase());
            return keywords.filter(keyword => items.includes(keyword.toLowerCase())).length;
        };
        
        const themeWebsite = () => {
            const { documentElement: html, body } = document;
            const score = (el, list) => matchCount(el, list.dark) - matchCount(el, list.light);
            
            let result = score(html, antonym) + score(body, antonym);
            if (result) return result > 0 ? "dark" : "light";
            result = score(html, rule) + score(body, rule);
            return result ? (result > 0 ? "dark" : "light") : null;
        };
        
        const colorBright = rgb => {
            const match = rgb.match(/\d+/g);
            if (!match || match.length < 3) return 255;
            const [r, g, b] = match.map(Number);
            return (r * 299 + g * 587 + b * 114) / 1000;
        };
        
        const pointBright = (x, y) => {
            let element = document.elementFromPoint(x, y);
            while (element && element !== document.documentElement) {
                const bg = getComputedStyle(element).backgroundColor;
                if (bg && bg !== "transparent" && !bg.includes("rgba(0, 0, 0, 0)"))
                    return colorBright(bg);
                element = element.parentElement;
            }
            return 255;
        };
        
        const themeBrightness = () => {
            
            const width = window.innerWidth;
            const height = window.innerHeight;
            const offset = 500;
            const points = [
                [offset, offset],
                [width - offset, offset],
                [offset, height - offset],
                [width - offset, height - offset],
                [width / 2, height / 2]
            ];
            
            const valid = points.filter(([x, y]) => x >= 0 && y >= 0 && x <= width && y <= height);
            if (!valid.length) return null;
            const total = valid.reduce((sum, [x, y]) => sum + pointBright(x, y), 0);
            return total / valid.length < 128 ? "dark" : "light";
        };
        
        const subjoinClass = () => {
            const html = document.documentElement;
            const newTheme = themeWebsite() || themeBrightness() || themeSystem() || "light";
            if (newTheme === currentTheme) return;
            // html.classList.remove("ovnThemeLight", "ovnThemeDark");
            // html.classList.add(newTheme === "light" ? "ovnThemeLight" : "ovnThemeDark");
            html.setAttribute("data-ovn-theme", newTheme);
            currentTheme = newTheme;
        };
        
        const debounce = (fn, delay = 20) => {
            let timer;
            return () => {
                clearTimeout(timer);
                timer = setTimeout(fn, delay);
            };
        };
        
        const observeTargets = () => {
            const targets = [document.documentElement];
            if (document.body) targets.push(document.body);
            const handler = debounce(subjoinClass, 20);
            targets.forEach((target, index) => {
                OVN_OBSERVER_CENTER.observeWithKey(
                    `ovnTheme_${index}`, target, { attributes: true }, handler,
                    { preventDuplicate: true, autoDisconnect: false }
                );
            });
        };
        
        const init = () => {
            const start = () => {
                subjoinClass();
                // setTimeout(subjoinClass, 20);
                observeTargets();
                window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", subjoinClass);
                window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", subjoinClass);
            };
            document.readyState === "loading"
                ? document.addEventListener("DOMContentLoaded", start)
                : start();
        };
        
        init();
        
    })();
    
    