---
name: data-ovn-fn-pattern
description: #ovnDOM 上 data-ovn-fn 属性的注册与状态切换规范
metadata:
  type: project
---

`#ovnDOM` 上的 `data-ovn-fn` 用于标识当前激活的功能模块，空格分隔多 token。

**注册规范：**
- 每个模块追加自己的 token，不要覆盖已有值
- 初始注册用 `OVN_GLOBAL_DOM.bindOVN`（异步安全），后续状态切换用 `document.getElementById('ovnDOM')` 直接操作（DOM 已确保存在）
- 多状态模块用独立 token 切换（如 `LoaderBar` → `ScrollBar`），禁止用 `/` 拼接成单 token

**统一 helper 模式：**
```js
function setFnToken(dom, token) {
    let val = dom.getAttribute('data-ovn-fn') || '';
    let list = val ? val.split(' ') : [];
    list = list.filter(t => t !== 'LoaderBar' && t !== 'ScrollBar');
    list.push(token);
    dom.setAttribute('data-ovn-fn', list.join(' '));
}
```

**CSS 选择器：** 用 `~=` 做空格分隔 token 精确匹配，如 `#ovnDOM[data-ovn-fn~="LoaderBar"] #ovnLoaderBar`

**DOM 模块识别：** `data-ovn-fn` 已被 `OVN_GLOBAL_DOM.classify` 识别为特殊属性，具备该属性的元素不会被自动归类移动。

**Why:** 避免各模块各自为政的 data 属性命名，统一到主容器上一个属性管理，CSS 可根据功能激活状态精确控制样式。

**How to apply:** 新增全局功能模块时，用 `OVN_GLOBAL_DOM.bindOVN` 追加自身 token 到 `data-ovn-fn`；有多状态则在状态切换时更新 token。CSS 中用 `~=` 选择器匹配。
