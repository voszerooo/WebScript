---
name: custom-entry
description: 脚本主入口 — Webpack 打包起点，组装全局模块并调度启动
metadata:
  type: reference
---

[src/custom.js](../../src/custom.js) — Webpack 打包入口。

- import `flux.js`（流程控制）、`injector.js`（样式注入）、`derive.js`（封装注册）、`ignite.js`（模块点火）
- 防重复加载检查（`OVN_GLOBAL_CUSTOM`、iframe 隔离）
- 按 `document.readyState` 选择启动时机：loading → DOMContentLoaded / interactive → 双 rAF / complete → 直接执行
- 最终调用 `OVN.SCHEDULER.run()` 启动所有模块，`OVN.DEBUG.infoTotal()` 输出总览
