

# WebScript

一个油猴脚本工程 通过 Webpack 打包 向目标站点注入样式与功能


### 代码风格

 - 最小化修改 不加多余内容 不格式化无关代码 不顺手重构
 - 空格缩进完全匹配已有风格 
 - 变量名最好为一两个简短的单词 尽可能不超过10个字符 禁止单字母 「`s`/`n`/`d`/`e`/`x` 等」 例外：如超8个字符 且是基础共识 数学惯例 才可用该类缩写 `fn`/`dx`/`dy`/`x`/`y`
 - 不加解释性注释 尤其是一大块的 除非明确要求
 
 
### 编码规范

 - 变更全局封装时 在我定稿后 使用方法如有更新 则同步更新相关 [文档](../-/GUIDE.md#模块封装)
 - 修改/新增代码时 非必要勿用 `window.xxxx`
 - 编写代码 有相应封装的情况下 应优先调用全局封装实现 确定要调用后 见 [模块封装](../src/store/derive.js) 会有引用 可找到具体代码位置
 
 
| 全局封装               | 职责范围            | 核心行为                                                                                                                                                                                             |
| ---------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OVN_GLOBAL_CONFIG`    | 全局模块注册中心    | 定义 Global / Matrix / Micro 三级模块树 每个模块含 match「URL 匹配」 phase「start / init / ready / end」 priority「优先级」 depend「依赖」 state「默认开关」等字段 OVN_CONFIG_MERGE 支持深度合并扩展 |
| `OVN_MODULE_RESOLVER`  | 模块解析与查询      | 从 CONFIG 构建 flat「key→mod」 + tree「嵌套」双索引 resolve(key) 依次尝试完整匹配 → 尾部匹配 → 分组匹配 getChain 获取从根到自身的依赖链 getGroup 获取所属分组 compiledMatch 预编译 URL 规则          |
| `OVN_GLOBAL_VERIFY`    | 模块执行前置校验    | 四步流水线 block「分组屏蔽」→ match「URL 匹配」→ state「RUNTIME 开关」→ chain「依赖链完整性」 任一步失败返回 { ready: false, reason } 每步通过 OVN_GLOBAL_DEBUG 记录 trace                           |
| `OVN_GLOBAL_SCHEDULER` | 模块调度与执行      | 按 phase「start → init → ready → end」分队列调度 简单模块「无依赖 / 无 phase / priority=0」直接同步执行 复杂模块入队后 microtask flush run(key, callback) 为统一入口                                 |
| `OVN_SUBJOIN_HOOK`     | 插件扩展钩子        | on(name, handler) 注册扩展处理器 apply(name, context) 触发全部已注册处理器 返回值可合并到 context 向 CONFIG / DOM / INFORM / BUTTON 注入外部逻辑                                                     |
|                        |                     |                                                                                                                                                                                                      |
| `OVN_GLOBAL_DOM`       | DOM 容器管理        | 维护 #ovnDOM 全局容器 含 #ovnStyle #ovnScript #ovnLog 子容器 自动分类 style / script 标签到对应子容器 MutationObserver 监听 body 容器被外部移除后自动重建 create(id) 可创建独立命名容器              |
| `OVN_MATCH_RULE`       | URL 规则编译与匹配  | compile({ include, exclude }) 将通配符 * 编译为正则 返回 { test(url) } 对象 结果由 OVN_VALUE_TEMP 缓存 check(pattern, url) 单模式检测 any(patterns, url) 批量检测                                    |
| `OVN_SITE_GROUP`       | 站点 URL 分组       | 静态维护 AIGC / Chat / ProgDev / Manage / Search / Media / Font 七组 URL 通配符数组 供 CONFIG 模块 match.include 通过 spread 引用「如 ...OVN_SITE_GROUP.Chat」                                       |
| `OVN_OBSERVER_CENTER`  | MutationObserver 池 | 按 target + options 合并复用观察者实例 避免重复创建 observeWithKey(key) 支持 key 索引管理 disconnectKey / disconnectAll debounce / autoDisconnect / onceWhen                                         |
| `OVN_GLOBAL_INFORM`    | 全局通知与悬浮提示  | top / left 位置弹出 toast「自动渐隐」 hover(element, msg, times) 悬浮提示「支持次数限制 通过 PREFS 持久化」 create(bindFn) 工厂模式 可绑定自定义 DOM 容器                                            |
| `OVN_RANDOM_JITTER`    | 随机延迟生成        | get({ delay, interval, random, order }) → delay + interval×order + Math.random()×random「毫秒」 run(fn, options) 封装 setTimeout 供 AUTO_LOAD / AUTO_EXECUTE 调用                                    |
| `OVN_GLOBAL_DEBUG`     | 链路追踪与日志      | startTrace / okTrace / failTrace / skipTrace 记录模块各步骤状态及耗时 getSnapshot() 汇总全部模块执行结果「含步骤明细 / 控制台行」 infoTotal() 输出总览到控制台                                       |
| `OVN_GLOBAL_BUTTON`    | 页面控制按钮        | 支持 switch「开关 与 RUNTIME 双向绑定」/ action「执行回调」/ jump「跳转 URL map」三种按钮 create(bindDOM, scope) 工厂模式 按 data-order 排序插入 DOM                                                 |
|                        |                     |                                                                                                                                                                                                      |
| `OVN_ADD_CLASS`        | CSS 类名添加        | apply({ target, subjoin, trace }) 为 DOM 批量添加类名 trace 模式追踪已访问链接「click 事件 + visitedSet + PREFS 持久化」 通过 OBSERVER 监听动态内容自动应用                                          |
| `OVN_QUICK_READ`       | 键盘翻页与滚动      | 绑定 Arrow / WASD 键 ←→ 点击翻页按钮 ↑↓ 滚动视口 apply({ scroll, smooth, ratio, letterKey, buttonPrev, buttonNext })                                                                                 |
| `OVN_REMOVE_LIMITS`    | 解除页面交互限制    | menu 模式放行右键菜单 / 文本选择 / 复制粘贴 drag 模式重置 userSelect / pointerEvents 启用图片视频拖拽 支持 hotkey 条件激活「按住指定键时生效」                                                       |
| `OVN_AUTO_LOAD`        | 自动翻页加载        | smart「IntersectionObserver + 上滚累计检测」/ loadInfinite「IntersectionObserver 触底」/ multipage「批量加载 N 页」 含 JITTER 随机延迟防频率检测                                                     |
| `OVN_AUTO_EXECUTE`     | 自动执行操作序列    | apply({ step1..step10 }) 最多 10 步 每步 target「选择器」+ action「click / focus / hover」 JITTER 步进延迟 strict 模式遇错即停 backstage 后台也执行                                                  |
|                        |                     |                                                                                                                                                                                                      |
| `OVN_VALUE_PREFS`      | 持久化键值存储      | GM_getValue / GM_setValue 封装 内置 prefs / hover / fold / visited / gallop 五个命名空间 store(prefix) 工厂含内存缓存层 reset() 清空全部                                                             |
| `OVN_VALUE_RUNTIME`    | 运行时状态管理      | get(key, default) / set / toggle 基于 PREFS 持久化 chain(keys) 检测依赖链全部启用 group(key) 检测分组状态 snapshot / restore 备份恢复                                                                |
| `OVN_VALUE_TEMP`       | 版本化临时缓存      | compute(type, key, factory) 惰性创建并缓存 分类存储 regex / match / chain / compiled bump() 全局版本递增 统一失效所有缓存                                                                            |

