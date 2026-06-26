---
name: quick-read-repeat-fix
description: OVN_QUICK_READ 键盘翻页按住重复触发问题的修复方案
metadata:
  type: project
---

## 问题

`OVN_QUICK_READ` 模块中，按住上下箭头或 w/s 键时，OS 按键重复导致 `keydown` 高频触发，每帧都执行 `window.scrollBy`，滚动过快。

## 修复过程

前后尝试了三个方案，最终定稿：

### 方案一：节流（被否）

加 `Date.now()` 节流，repeat 事件间隔 < 120ms 跳过。属于补丁式写法，不够干净。

### 方案二：rAF 状态循环（被否）

`keydown`/`keyup` 追踪按键状态（`DIR` 对象），`requestAnimationFrame` 驱动滚动，与 OS 重复率解耦。首按完整 scrollBy，按住后小步高频。虽结构正确但过于复杂，用户要求"简简单单"。

### 方案三（最终）：`event.repeat` 跳过

加一行 `if (event.repeat) return;`，浏览器原生属性 `event.repeat` 在 OS 自动重复时为 `true`，直接跳过所有重复事件。按住只触发首次按下，抬起再按才触发下一次。

## 后续统一

最终还重构了键位映射逻辑：从 `keyMap` 存函数引用（箭头和 w/s 走不同分支）改为 `dirs` 存方向值（`ArrowUp: -1, ArrowDown: 1, w: -1, s: 1`），统一成一条滚动执行路径。

**Why:** 用户发现上下箭头和 w/s 逻辑不一致，更喜欢箭头逻辑。方向值映射 + 单点执行确保了四个键走完全相同的代码路径。

**How to apply:** 模块内的键盘事件如果涉及"按下一瞬间触发一次，按住不重复"，优先用 `event.repeat` guard，不做节流或 rAF 循环。
