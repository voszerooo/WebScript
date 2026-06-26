---
name: derive-registry
description: 全局封装注册中心 — 将所有 store 模块组装为 window.OVN 命名空间
metadata:
  type: reference
---

[src/store/derive.js](../../src/store/derive.js) — 全局封装注册中心。

将所有 store 子模块 import 并按职责分组组装成 `OVN` 对象：

| 分组 | 模块 |
|------|------|
| 值存储 | PREFS / RUNTIME / REDIS |
| 基础设施 | DOM / MATCH / SITE / OBSERVER / INFORM / RANDOM / DEBUG / BUTTON |
| 核心调度 | CONFIG / RESOLVER / VERIFY / SCHEDULER / HOOK |
| 工具封装 | ADD_CLASS / QUICK_READ / REMOVE_LIMITS / AUTO_LOAD / AUTO_EXECUTE |

最终挂载到 `window.OVN`。CLAUDE.md 中的全局封装列表即由此文件导出。查找封装源码位置时应以此为索引。
