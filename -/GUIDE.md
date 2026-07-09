

### 项目结构

  ```
  src/
  ├── .meta/
  │   └── header.js                 # 脚本头
  │
  ├── execute/                      # 功能执行
  │   ├── .ionic/                       # 站点模板
  │   │   ├── .rocket.js                    # 功能
  │   │   └── wave.scss                     # 样式
  │   │
  │   ├── global/                       # 全局功能
  │   ├── matrix/                       # 站点功能
  │   │    ├── xxxxx/
  │   │    │  ├── .rocket.js
  │   │    │  └── wave.scss
  │   │    └─ ...
  │   ├── micro/                        # 微型功能
  │   │
  │   └── ignite.js                     # 执行入口
  │
  ├── store/                        # 模块封装
  │   ├── core/                         # 核心封装
  │   ├── infra/                        # 基础封装
  │   ├── utils/                        # 工具封装
  │   ├── value/                        # 数据封装
  │   └── derive.js                     # 导出入口
  │
  ├── style/                        # 全局样式
  │   ├── ...
  │   └── injector.js                   # 样式入口
  │
  └── custom.js                    # 主入口
  
  webpack.config.build.js          # 生产配置
  webpack.config.dev.js            # 开发配置
  webpack.config.infra.js          # 基础配置
  ```
  
<br>
  
  
### 模块封装

  可在 [derive.js](../src/store/derive.js) 总览封装引用及依赖关系 
  
<table>
    <tr>
        <td colspan="4">&nbsp;</td>
    </tr>
    <tr>
        <td rowspan="5"><b>core</b></td>
        <td><code>OVN_GLOBAL_CONFIG</code></td>
        <td>全局配置</td>
        <td>统一管理各模块配置 控制启用与匹配规则等</td>
    </tr>
    <tr>
        <td><code>OVN_MODULE_RESOLVER</code></td>
        <td>模块解析与查询</td>
        <td>按 key 查找模块 解析依赖链与分组归属</td>
    </tr>
    <tr>
        <td><code>OVN_GLOBAL_VERIFY</code></td>
        <td>模块执行前置校验</td>
        <td>校验 block → match → state → chain 判定模块能否执行</td>
    </tr>
    <tr>
        <td><code>OVN_GLOBAL_SCHEDULER</code></td>
        <td>模块调度与执行</td>
        <td>按阶段与优先级 统一调度各模块的执行顺序</td>
    </tr>
    <tr>
        <td><code>OVN_SUBJOIN_HOOK</code></td>
        <td>插件扩展钩子</td>
        <td>允许外部注入自定义逻辑 扩展 修改配置等</td>
    </tr>
    <tr>
        <td colspan="4">&nbsp;</td>
    </tr>
    <tr>
        <td rowspan="8"><b>infra</b></td>
        <td><code>OVN_GLOBAL_DOM</code></td>
        <td>DOM 容器管理</td>
        <td>全局 #ovnDOM 容器 统一管理 style/script/log 防 DOM 污染</td>
    </tr>
    <tr>
        <td><code>OVN_MATCH_RULE</code></td>
        <td>URL 规则编译与匹配</td>
        <td>检测 URL 是否命中 include/exclude 规则</td>
    </tr>
    <tr>
        <td><code>OVN_SITE_GROUP</code></td>
        <td>站点 URL 分组</td>
        <td>预设常用站点分组</td>
    </tr>
    <tr>
        <td><code>OVN_OBSERVER_CENTER</code></td>
        <td>观察者池管理</td>
        <td>统一管理页面 DOM 变化监听 避免重复创建观察者</td>
    </tr>
    <tr>
        <td><code>OVN_GLOBAL_INFORM</code></td>
        <td>全局通知与提示</td>
        <td>操作反馈通知与悬浮提示</td>
    </tr>
    <tr>
        <td><code>OVN_RANDOM_JITTER</code></td>
        <td>随机延迟生成</td>
        <td>生成随机延迟抖动 让自动化操作更像人类行为</td>
    </tr>
    <tr>
        <td><code>OVN_GLOBAL_DEBUG</code></td>
        <td>链路追踪与日志</td>
        <td>追踪并记录各模块的执行过程</td>
    </tr>
    <tr>
        <td><code>OVN_GLOBAL_BUTTON</code></td>
        <td>按钮生成</td>
        <td>在页面上创建功能开关或操作按钮</td>
    </tr>
    <tr>
        <td colspan="4">&nbsp;</td>
    </tr>
    <tr>
        <td rowspan="5"><b>utils</b></td>
        <td><code>OVN_ADD_CLASS</code></td>
        <td>CSS 类名添加</td>
        <td>给目标节点附加 CSS 类名 可选标记已访问链接</td>
    </tr>
    <tr>
        <td><code>OVN_QUICK_READ</code></td>
        <td>键盘翻页与滚动</td>
        <td>用键盘方向键或 WASD 快速翻页滚动页面</td>
    </tr>
    <tr>
        <td><code>OVN_REMOVE_LIMITS</code></td>
        <td>解除页面交互限制</td>
        <td>解除右键/选择/拖拽限制 hotkey 条件激活</td>
    </tr>
    <tr>
        <td><code>OVN_AUTO_LOAD</code></td>
        <td>自动翻页加载</td>
        <td>支持 smart / loadInfinite / multipage 三种模式</td>
    </tr>
    <tr>
        <td><code>OVN_BATCH_LOAD</code></td>
        <td>批量加载</td>
        <td>可配置常用网站的目标容器 一键打开前 X 个内容</td>
    </tr>
    <tr>
        <td><code>OVN_AUTO_EXECUTE</code></td>
        <td>自动执行操作序列</td>
        <td>按步骤序列自动 click/focus/hover 最多 10 步</td>
    </tr>
    <tr>
        <td colspan="4">&nbsp;</td>
    </tr>
    <tr>
        <td rowspan="3"><b>value</b></td>
        <td><code>OVN_VALUE_PREFS</code></td>
        <td>持久化键值存储</td>
        <td>GM 持久化存储 保存用户设置</td>
    </tr>
    <tr>
        <td><code>OVN_VALUE_RUNTIME</code></td>
        <td>运行时状态管理</td>
        <td>统一 get/set/toggle 模块开关状态 chain 检测依赖链完整性</td>
    </tr>
    <tr>
        <td><code>OVN_VALUE_TEMP</code></td>
        <td>版本化临时缓存</td>
        <td>缓存中间计算结果 避免重复编译和解析</td>
    </tr>
    <tr>
        <td colspan="4">&nbsp;</td>
    </tr>
</table>


<br>


### 执行流程

  ```
  🌐 访问网页
      ↓
  📦 加载全局样式与封装
      ├─ script/flux.js         # 防闪烁
      ├─ src/style/injector.js  # 样式注入
      └─ src/store/derive.js    # 核心模块封装导出
      ↓
  🎯 [custom.js] initializeScript()
      ├─ 检测重复加载 / iframe 环境 → 直接返回
      └─ 检测 document.readyState
          ├─ loading → 等待 DOMContentLoaded
          ├─ interactive → requestAnimationFrame(onReady)
          └─ complete → 立即执行 onReady()
          ↓
      onReady()
          ├─ OVN_GLOBAL_SCHEDULER.run()
          └─ OVN_GLOBAL_DEBUG.infoTotal()
          
      ┌─────────────────────────────────────────────────────────┐
      │                OVN_GLOBAL_SCHEDULER                     │
      └─────────────────────────────────────────────────────────┘
              ↓
      ┌─ 1️⃣ 模块解析
      │   OVN_MODULE_RESOLVER.resolve(key)
      │   ├─ 直接匹配 → 返回完整 key 「如 "Global_ScrollBar"」 
      │   ├─ 尾部匹配 → 如 "ScrollBar" → "Global_ScrollBar"
      │   └─ 分组匹配 → 返回匹配的第一个模块
      │
      ├─ 2️⃣ 创建执行上下文
      │   createCtx(mod, options)
      │   ├─ url: location.href
      │   ├─ runtime: OVN_VALUE_RUNTIME
      │   └─ chain: OVN_MODULE_RESOLVER.getChain(mod.key)
      │
      ├─ 3️⃣ 执行激活检查 OVN_GLOBAL_VERIFY.check()
      │   ┌─ 🚫 Block Check
      │   │   ├─ 检查所属分组的 block[] 数组
      │   │   ├─ 使用 OVN_MATCH_RULE.check() 匹配 URL
      │   │   └─ ❌ 被阻塞 → 返回 { ready: false, reason: "BLOCK" }
      │   │
      │   ├─ ✅ Match Check
      │   │   ├─ 检查 mod.match.include[]
      │   │   ├─ 使用 mod.compiledMatch.test(url) 测试
      │   │   └─ ❌ 不匹配 → 返回 { ready: false, reason: "MATCH" }
      │   │
      │   ├─ 📊 State Check
      │   │   ├─ 检查 OVN_VALUE_RUNTIME.get(mod.key, mod.state ?? true)
      │   │   └─ ❌ 状态关闭 → 返回 { ready: false, reason: "STATE" }
      │   │
      │   └── 🔗 Chain Check
      │      ├─ 遍历 ctx.chain 「模块链条从自身到根节点」
      │      ├─ 检查每个父级模块状态 OVN_VALUE_RUNTIME.get(key, true)
      │      ├─ 检查 mod.depend[] 「依赖项」
      │      └─ ❌ 链条关闭 → 返回 { ready: false, reason: "CHAIN" }
      │   
      ├─ 4️⃣ 调度决策
      │   ├─ 判断是否需要调度 → schedule(mod) 
      │   │   └─ 需要条件：有依赖 / 有 phase / priority > 0
      │   │
      │   ├─ 不需要调度 → 直接执行 execute(mod, callback)
      │   └─ 需要调度 → 放入队列，等待 flush()
      │
      └─ 5️⃣ 阶段队列执行
          ├─ 分配到对应 phase 队列：start / init / ready / end
          ├─ 默认 phase 为 "init"
          └─ 等待 Promise.resolve().then(flush)
          
      ┌─────────────────────────────────────────────────────────┐
      │                      阶段执行顺序                         │
      └─────────────────────────────────────────────────────────┘
              ↓
      ┌─ start 阶段 立即开始
      │
      ├─ init 阶段
      │   └─ 页面初始化阶段 紧跟 start 之后执行
      │
      ├─ ready 阶段
      │   └─ DOMContentLoaded 后执行
      │
      └─ end 阶段
          └─ 页面加载完全完成后执行
          
  ✅ 所有模块执行完成
      ↓
  👾 OVN_GLOBAL_DEBUG 链路追踪
      ├─ startTrace(key, step)           → 记录步骤开始
      ├─ okTrace(key, step)              → 记录步骤成功
      ├─ failTrace(key, step, reason)    → 记录步骤失败
      ├─ skipTrace(key, step, reason)    → 记录步骤跳过
      ├─ getSnapshot()                   → 获取完整的执行状态快照
      └─ infoTotal()                     → 在控制台输出汇总信息
      
  ```
  
  