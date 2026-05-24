

// $ ================================================== ↓ OVN_OBSERVER_CENTER

    const OVN_OBSERVER_CENTER = (() => {
        
        const keys = new Map()
        const pool = new Map()
        const links = new WeakMap()
        
        function optionKey(options) {
            return `${options.childList ? 1 : 0}_${options.subtree ? 1 : 0}_${options.attributes ? 1 : 0}_${options.characterData ? 1 : 0}`
        }
        
        function observerFor(target, options) {
            let group = pool.get(target)
            if (!group) {
                group = new Map()
                pool.set(target, group)
            }
            const id = optionKey(options)
            if (group.has(id)) return group.get(id)
            const cbs = new Set()
            let timer = null
            
            const observer = new MutationObserver((mutations, instance) => {
                const run = () => {
                    cbs.forEach(cb => {
                        try {
                            cb(mutations, instance)
                        } catch (err) {
                            document.documentElement.classList.add('ovnTips', 'error')
                        }
                    })
                }
                if (observer._debounce > 0) {
                    clearTimeout(timer)
                    timer = setTimeout(run, observer._debounce)
                } else {
                    run()
                }
            })
            observer._callbacks = cbs
            observer._debounce = 0
            observer.observe(target, options)
            group.set(id, observer)
            return observer
        }
        
        function link(target, observer) {
            if (!links.has(target)) links.set(target, new Set())
            links.get(target).add(observer)
        }
        
        function observe(target, options = { childList: true, subtree: true }, callback, config = {}) {
            if (!(target instanceof Node)) return null
            
            const observer = observerFor(target, options)
            observer._callbacks.add(callback)
            if (config.debounce) {
                observer._debounce = Math.max(observer._debounce, config.debounce)
            }
            link(target, observer)
            
            if (config.autoDisconnect || typeof config.onceWhen === 'function') {
                const wrapper = (mutations, instance) => {
                    if (
                        config.autoDisconnect ||
                        (typeof config.onceWhen === 'function' && config.onceWhen(mutations))
                    ) {
                        observer._callbacks.delete(wrapper)
                    }
                    callback(mutations, instance)
                }
                observer._callbacks.delete(callback)
                observer._callbacks.add(wrapper)
            }
            return observer
        }
        function observeWithKey(key, target, options = { childList: true, subtree: true }, callback, config = {}) {
            if (!key || typeof key !== 'string') return null
            if (keys.has(key)) disconnectKey(key)
            const observer = observe(target, options, callback, config)
            keys.set(key, observer)
            return observer
        }
        
        function disconnect(target) {
            const set = links.get(target)
            if (!set) return
            set.forEach(obs => obs.disconnect())
            links.delete(target)
            pool.delete(target)
        }
        function disconnectKey(key) {
            const observer = keys.get(key)
            if (!observer) return
            observer.disconnect()
            keys.delete(key)
        }
        function disconnectAll() {
            pool.forEach(group => group.forEach(obs => obs.disconnect()))
            pool.clear()
            keys.clear()
        }
        function hasKey(key) {
            return keys.has(key)
        }
        function getActiveCount() {
            let total = 0
            pool.forEach(group => (total += group.size))
            return { pooled: total, keyed: keys.size }
        }
        
        return {
            observe,
            observeWithKey,
            disconnect,
            disconnectKey,
            disconnectAll,
            hasKey,
            getActiveCount
        }
        
    })()
    
// $ ================================================== ↓ END

export { OVN_OBSERVER_CENTER };

