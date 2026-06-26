

- [主入口](../.claude/memory/custom-entry.md) — Webpack 打包起点，组装全局模块、防重复加载、按 readyState 启动调度
- [封装入口](../.claude/memory/derive-registry.md) — 所有 store 模块组装为 `window.OVN` 命名空间，含各封装源码位置索引
- [执行入口](../.claude/memory/ignite-mount.md) — import Global → Matrix → Micro 三级模块树，触发热模块副作用注册
- [样式入口](../.claude/memory/style-injector.md) — 拼接全部 SCSS 注入 `#ovnStyle`，管理版本与热替换
- [data-ovn-fn 规范](../.claude/memory/data-ovn-fn-pattern.md) — `#ovnDOM` 上 `data-ovn-fn` 属性的 token 注册、状态切换与 CSS 选择器
- [全局样式管理](../.claude/memory/global-style-management.md) — 多功能组件样式在 `global.scss` 中的组织、变量分层与拆文件标准

