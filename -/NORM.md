

# WebScript

用户脚本/浏览器扩展工程。通过 Webpack 打包，向目标站点注入样式与行为。

## 入口与流程

- [../src/custom.js](../src/custom.js) — 主入口：防重复 → DOM 就绪 → 调度器 + 调试输出
- 完整执行流程图、阶段调度、验证链路见 [-/GUIDE.md](../-/GUIDE.md)

## 结构总览

详细目录树见 [-/GUIDE.md](../-/GUIDE.md)，以下是核心模块速查：

| 层级 | 文件                                                             | 职责                                   |
| ---- | ---------------------------------------------------------------- | -------------------------------------- |
| 入口 | [../src/custom.js](../src/custom.js)                             | 主入口                                 |
| 聚合 | [../src/execute/ignite.js](../src/execute/ignite.js)             | 汇集 global + matrix + micro           |
| 注册 | [../src/store/derive.js](../src/store/derive.js)                 | OVN 命名空间，模块导出注册             |
| 核心 | [../src/store/core/config.js](../src/store/core/config.js)       | 模块声明树 (Global / Matrix / Micro)   |
| 核心 | [../src/store/core/scheduler.js](../src/store/core/scheduler.js) | 阶段队列调度 (start→init→ready→end)    |
| 核心 | [../src/store/core/resolver.js](../src/store/core/resolver.js)   | 模块 key 解析 (精确/尾部/分组)         |
| 核心 | [../src/store/core/verify.js](../src/store/core/verify.js)       | 4 步激活校验 (block→match→state→chain) |
| 核心 | [../src/store/core/hook.js](../src/store/core/hook.js)           | Subjoin 插件钩子系统                   |
| 基础 | [../src/store/infra/match.js](../src/store/infra/match.js)       | URL glob→regex 匹配                    |
| 基础 | [../src/store/infra/dom.js](../src/store/infra/dom.js)           | ovnDOM 容器生命周期                    |
| 基础 | [../src/store/infra/observer.js](../src/store/infra/observer.js) | MutationObserver 池                    |
| 基础 | [../src/store/infra/debug.js](../src/store/infra/debug.js)       | 链路追踪与性能统计                     |
| 状态 | [../src/store/value/runtime.js](../src/store/value/runtime.js)   | 运行时状态 (get/set/toggle)            |
| 状态 | [../src/store/value/prefs.js](../src/store/value/prefs.js)       | 持久化偏好                             |
| 状态 | [../src/store/value/temp.js](../src/store/value/temp.js)         | 临时缓存 (memoization)                 |
| 样式 | [../src/style/injector.js](../src/style/injector.js)             | CSS 注入引擎                           |

## 命名约定

- `OVN_GLOBAL_*` — 单例模块 (SCHEDULER / VERIFY / DEBUG …)
- `OVN_VALUE_*` — 状态层 (PREFS=持久化 / RUNTIME=运行时 / TEMP=缓存)
- `OVN_*` — 工具模块 (ADD_CLASS / QUICK_READ …)

## 构建

- [../webpack.config.infra.js](../webpack.config.infra.js) — 基础配置
- [../webpack.config.dev.js](../webpack.config.dev.js) — 开发配置
- [../webpack.config.build.js](../webpack.config.build.js) — 生产配置

## 约定

- 非必要 别用 `window.xxxx`
- Git 规范见 [-/NORM.md](../-/NORM.md) — 分支前缀、提交类型
- 待办事项见 [-/TODO.ovn](../-/TODO.ovn) — ERROR / WARN / OPTIMIZE / NEW 分类

