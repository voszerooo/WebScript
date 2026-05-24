

// $ ================================================== ↓ OVN_RANDOM_JITTER

    /**
     * 抖动延迟 - delay + interval * order + Math.random() * random 「ms」
     * @param {Object} options
     * @param {Object} [options.jitter]
     * @param {number} [options.delay=0]          - 基础延迟
     * @param {number} [options.interval=0]       - 步进延迟 「每个任务递增」
     * @param {number} [options.random=0]         - 随机扰动范围
     * @param {number} [options.order=0]          - 当前序号
     */
    const OVN_RANDOM_JITTER = (() => {
        
        function get(options = {}) {
            
            const jitter = options.jitter || options;
            
            const delay = jitter.delay ?? 0;
            const interval = jitter.interval ?? 0;
            const random = jitter.random ?? 0;
            const order = options.order || 0;
            
            return delay
                + interval * order
                + (random ? Math.random() * random : 0);
        }
        function run(fn, options = {}) {
            return setTimeout(fn, get(options));
        }
        
        return { get, run };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_RANDOM_JITTER };

