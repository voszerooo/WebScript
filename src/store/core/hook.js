

// $ ================================================== ↓ OVN_SUBJOIN_HOOK

    const OVN_SUBJOIN_HOOK = (() => {
        
        const hooks   = {};
        const targets = {};
        
        function inject(name, handler, context) {
            try {
                const result = handler(context);
                if (result && typeof result === 'object' && context && typeof context === 'object') {
                    Object.assign(context, result);
                }
                return result;
            } catch (error) {
                console.error(`[SUBJOIN] Hook "${name}" error:`, error);
                return null;
            }
        }
        return {
            on(name, handler) {
                if (typeof handler !== 'function') return false;
                (hooks[name] ??= []).push(handler);
                if (targets[name]) inject(name, handler, targets[name]);
                return true;
            },
            apply(name, context) {
                targets[name] = context;
                return (hooks[name] || []).map(handler => inject(name, handler, context));
            },
            getHandlers: name => hooks[name] || [],
            getTarget: name => targets[name] || null,
        };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_SUBJOIN_HOOK };

