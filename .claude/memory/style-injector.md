---
name: style-injector
description: 样式注入器 — 拼接所有 SCSS 并注入到 #ovnStyle 容器
metadata:
  type: reference
---

[src/style/injector.js](../src/style/injector.js) — 样式注入器。

- import 全部 SCSS 文件：`color` `font` `ui` `space` `icon` `global`（及 dev 模式下的 `xfilter`）
- 拼接为单一 CSS 字符串，注入到 `#ovnStyle` 容器（位于 `#ovnDOM` 内）
- 处理 body 未就绪时的重试（rAF 轮询）
- DEV 模式下通过 `OVN_CSS_INJECTOR.inject(css)` 可热替换样式
- 给 `<html>` 添加 `ovn` class，并通过 `OVN_SUBJOIN_HOOK.apply('class')` 触发扩展
