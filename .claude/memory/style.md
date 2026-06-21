---
name: style
description: 命名与代码风格约定 — 禁止单字母，匹配已有代码密度
metadata:
  type: user
---

- 变量名用完整单词，禁止单字母（`s`/`n`/`d`/`e`/`x` 等）。例外：循环索引 `i`/`j`、数学惯例 `dx`/`dy`/`x`/`y`。
- 事件参数统一用 `event`，不要用 `e`。
- 滚动量等参数用 `amount`/`offset`，不要用 `y`。
- DOM 操作尽量走 `OVN_GLOBAL_DOM.bindOVN()` → `#ovnDOM` 容器。
- DOM 标记遵守 `data-ovn-*` 命名空间，用 `setAttribute` 而非直接 `dataset`。
- 注释密度参考 `scroll-bar.js`/`quick-read.js`：仅保留分隔符，不写行内说明。
- 仅一处使用的常量内联到逻辑中，不抽 config key。

**Why:** 用户反复纠正单字母命名、冗余注释、标记应该上 dom 容器。在 preview.js 开发过程中提炼。
**How to apply:** 提交前检查：1) 有无单字母变量？2) 注释是否比 `scroll-bar.js` 多？3) DOM 标记是否走 `bindOVN`？
