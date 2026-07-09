---
name: global-style-management
description: 多功能组件样式在 global.scss 中的组织策略
metadata:
  type: project
---

**样式文件分层：**

| 文件 | 职责 |
|------|------|
| `scss/color.scss` `scss/theme.scss` | HSL 色板、主题 token |
| `storage/space.scss` | `--ovnGap` `--ovnXXX` 间距体系 |
| `storage/ui.scss` | `--ovnUIRadius` `--ovnTransition*` 等 UI 变量 |
| `storage/global.scss` | 所有功能组件的具体样式 + `@keyframes` |

**变量归属判断：**
- 组件私有变量（如 LoaderBar 的 `--ovnX: 2px`）直接写在组件 Section 内
- 跨组件复用的变量才提升到 `space.scss` / `ui.scss`

**何时拆文件：** 单个 Section 膨胀到 ~200 行以上再考虑拆成独立 `_xxx.scss`，目前没必要。

**状态驱动样式：** 组件状态通过 `#ovnDOM[data-ovn-fn~="Token"]` 选择器区分，而非元素自身的 `data-state`。[[data-ovn-fn-pattern]]

**Why:** 保持样式集中便于查找和维护，变量作用域清晰（私有 vs 共享），避免过早拆分导致文件碎片化。

**How to apply:** 新增组件样式在 `global.scss` 中用 `// $ ==== ↓ ComponentName` 注释分隔，私有变量写在对应 Section 顶部。
