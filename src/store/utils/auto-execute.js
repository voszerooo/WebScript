

import { OVN_RANDOM_JITTER }     from '../../store/infra/jitter.js';
import { OVN_GLOBAL_DEBUG }      from '../../store/infra/debug.js';


// $ ================================================== ↓ OVN_AUTO_EXECUTE

    /**
     * 自动执行 | 进入页面后 自动执行一系列操作 「最多可支持10个步骤」
     * @param {Object} options
     * @param {boolean} [options.backstage=false]          - 后台执行 页面未激活/未在前台时 是否执行
     * @param {boolean} [options.strict=false]             - 严格模式 若某步骤执行失败 是否中断后续步骤
     * @param {boolean} [options.debug=false]              - 调试输出
     * @param {Object} [options.step1.step10]              - 定义每个步骤的目标及操作类型
     *      - target：目标选择器
     *      - action：执行类型 "click" | "focus" | "hover"
     */
    const OVN_AUTO_EXECUTE = (() => {
        
        const maxAutoStep = 10;
        const moduleMark = "AUTO_EXECUTE";
        
        function runAction(el, action = "click") {
            if (!el) return false;
            switch (action) {
                case "click": el.click(); break;
                case "focus": el.focus(); break;
                case "hover":
                    const event = new MouseEvent("mouseover", { bubbles: true });
                    el.dispatchEvent(event);
                    break;
            }
            return true;
        }
        
        function apply(options = {}) {
            const {
                jitter,
                delay,
                interval,
                random,
                backstage = false,
                strict = false,
                debug = false
            } = options;
            
            const finalJitter = jitter || {
                delay: delay || 200,
                interval: interval || 20,
                random: random || 0
            };
            const steps = [];
            for (let i = 1; i <= maxAutoStep; i++) {
                const key = `step${i}`;
                if (options[key]) steps.push(options[key]);
            }
            if (!steps.length) return;
            let executed = false;
            let shouldBreak = false;
            
            async function runSteps() {
                for (let i = 0; i < steps.length; i++) {
                    if (shouldBreak) break;
                    const step = steps[i];
                    await new Promise(resolve => {
                        OVN_RANDOM_JITTER.run(() => {
                            if (shouldBreak) {
                                resolve();
                                return;
                            }
                            const { target, action = "click" } = step;
                            try {
                                const el = document.querySelector(target);
                                if (el) {
                                    runAction(el, action);
                                    OVN_GLOBAL_DEBUG.log(moduleMark, `Step${i + 1} ✅ ${action} - ${target}`);
                                } else {
                                    OVN_GLOBAL_DEBUG.warn(moduleMark, `Step${i + 1} ❓ None - ${target}`);
                                    if (strict) {
                                        shouldBreak = true;
                                        OVN_GLOBAL_DEBUG.error(moduleMark, `Step${i + 1} ❌ Break`);
                                    }
                                }
                            } catch (e) {
                                OVN_GLOBAL_DEBUG.error(moduleMark, `Step${i + 1} ❌ Error - ${e.message}`, 0, e.stack);
                                if (strict) shouldBreak = true;
                            }
                            resolve();
                        }, { jitter: finalJitter, order: i });
                    });
                }
            }
            const tryRun = () => {
                if (executed) return;
                if (!backstage && document.visibilityState !== "visible") return;
                executed = true;
                runSteps();
            };
            
            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", tryRun);
            } else {
                tryRun();
            }
            document.addEventListener("visibilitychange", tryRun);
        }
        
        return { apply };
        
    })();
    
// $ ================================================== ↓ END

export { OVN_AUTO_EXECUTE };

