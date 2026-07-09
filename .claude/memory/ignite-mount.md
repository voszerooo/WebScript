---
name: ignite-mount
description: 模块执行入口 — import 三级模块树触发热模块副作用执行
metadata:
  type: reference
---

[src/execute/ignite.js](../../src/execute/ignite.js) — 模块执行文件。

按 Global → Matrix → Micro 三级分层 import 所有 `.js` 模块：

- **Global**：`.theme` `.options` `.debug` + loader-bar / gallop / quick-read / custom-icon / selection / font-style / scroll-bar
- **Matrix**：baidu / google / bing / deepseek / chatgpt / doubao / comfyui / yuque / ticktick / youtube / bilibili（各站点的 `.rocket.js`）
- **Micro**：通用微模块 `.rocket.js`

每个被 import 的模块通过 `OVN_GLOBAL_SCHEDULER.run()` 注册自身，import 即触发注册。新增模块时需在此文件对应层级添加 import。
