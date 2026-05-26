

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
  │   ├── .package/
  │   ├── storage/
  │   └── injector.js                   # 样式入口
  │
  └── custom.js                    # 主入口
  
  webpack.config.build.js          # 生产配置
  webpack.config.dev.js            # 开发配置
  webpack.config.infra.js          # 基础配置
  ```
  
<br>
  
  
### 模块封装

  可在 [derive.js](https://github.com/voszerooo/WebScript/blob/main/src/store/derive.js) 总览封装及依赖关系 
  
  
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
  
  