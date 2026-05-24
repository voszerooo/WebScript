

// ! ================================================== ↓ START


OVN_GLOBAL_SCHEDULER.run("Preview", () => {
    
    (function OVN_Preview() {
            
            
                
                function apply({
                    scroll = true,
                    smooth = true,
                    ratio = .8,
                    letterKey = true,
                } = {}) {
                    const doScroll = (y) => window.scrollBy({
                        top: y,
                        left: 0,
                        behavior: smooth ? "smooth" : "auto"
                    });
                    const keyMap = {
                        ArrowUp: () => scroll && doScroll(-window.innerHeight * ratio),
                        ArrowDown: () => scroll && doScroll(window.innerHeight * ratio),
                    };
                    if (letterKey) Object.assign(keyMap, {
                        w: keyMap.ArrowUp,
                        s: keyMap.ArrowDown,
                    });
                    document.addEventListener("keydown", (e) => {
                        if (e.ctrlKey || e.metaKey || e.altKey) return;
                        const tag = e.target.tagName.toLowerCase();
                        if (tag === "input" || tag === "textarea" || e.target.isContentEditable) return;
                        const action = keyMap[e.key] || keyMap[e.key.toLowerCase()];
                        if (action) {
                            action();
                            e.preventDefault();
                        }
                    });
                }
                
                return { apply };
                

    })();

});

