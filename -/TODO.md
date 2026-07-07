

/**
 * $ NEXT
 * - 
 * - ---------- | GLOBAL | 
 * - ---------- | GLOBAL | 
 * - ---------- | DEV    | 
 * - ---------- | UNK    | 
 * - 
 * ! ==================== ↓ ERROR
 * ! 
 * ! 
 * ? ==================== ↓ WARN
 * ?
 * ? OVN_Debug           | GLOBAL | 被排除的站点 面板状态灯非 MATCH 红灯
 * ? OVN_OBSERVER_CENTER | GLOBAL | 共享 Observer 实例可能导致一断全断或空转不释放
 * ? ------------------- | BUILD  | 在某些网站动态更新页面内容后 需手动刷新才可正确应用样式
 * ? ------------------- | DEV    | 在某些网站会触发弹窗 "访问此设备上的其他应用和服务" 允许 屏蔽
 * ? 
 * ? 
 * & ==================== ↓ OPTIMIZE
 * & 
 * & OVN_Options          | 按住 ctrl 点击 组名可反选操作
 * & OVN_Options          | 可储存 三个常用配置 
 * & OVN_Options          | 每个 / 有需求变更的 项 后方新增配置齿轮 点击可弹出窗口 更改配置
 * & OVN_Options          | 在 UI 面板中 OVN_VALUE_RUNTIME 同步状态灯
 * & OVN_Options          | 当站点出现在 exclude 中时 状态灯为橙色 block 为 红色
 * & OVN_Options          | 右键功能 可弹出功能菜单 编辑配置
 * & OVN_Options          | 导入导出配置 +- 按钮 快速添加 排除当前站点
 * & OVN_Options          | 用户配置可覆盖默认配置 比如 主题色
 * & 
 * & OVN_GLOBAL_SCHEDULER | scheduler depend priority phase 应该未生效
 * & OVN_GLOBAL_SCHEDULER | 任务粒度 + 调度方式 + 执行时机 帧调度器
 * & 
 * & Webpack              | eager lazy
 * & Webpack              | scope‌ 拆分
 * & Webpack              | Webpack HMR - chunk 每个模块编写 dispose / accept 逻辑
 * & injector.js          | 换掉声明式注入
 * & 
 * & 
 * + ==================== ↓ NEW
 * + 
 * + OVN_GLOBAL_POPUP  | 
 * + OVN_REMOVE_LOGIN  | 
 * + OVN_REMOVE_LIMITS | 解除复制限制 如有难以越过的防御/不好实现 则弹出复制按钮 自动拼接
 * + 
 * + ----------------- | YOUTUBE 字幕翻译
 * + 
 * + ----------------- | 挂载 悬浮/面板按钮/快捷键 可呼出弹窗 能输入多行下载链接 进行 单独/批量下载 「调用浏览器原生方式」
 * + 
 * + ----------------- | 按住 在图片资源上 按住 alt .2 ms 可放大预览图片
 * + ----------------- | 关灯模式 可 快捷键 > 视频下新增一个遮罩层
 * + ----------------- | 封装 按键 > 绑定某些功能
 * + ----------------- | 将 站点的某个功能绑定快捷键
 * + 
 * + 
 */








scheduler.run(key, fn, {
    phase: 'ready',
    priority: 50,
    idle: true,        // 用 requestIdleCallback
    raf: true,         // 用 requestAnimationFrame
    delay: [50, 150],  // jitter
})


“任务状态”

你当前 queue：

{ mod, callback }

但没有：

status
promise
done
running




<div id="ovnDOM">
    <div id="ovnStyle"></div>
    <div id="ovnMagic" data-ovn-fn="..." ></div>
    <div id="ovnGallop" style=""></canvas></div>
    <div id="ovnLoaderBar" style=""></div>
    <div id="ovnScript"></div>
    <div id="ovnLog"></div>
</div>




### 项目结构

 - 保持现有 未经允许不得乱建文件/文件夹
 - 记忆 .claude/memory/ 文件名规范: 作用域-功能-xxxxx



方案 B：统一 setFnToken 工具函数

把 LoaderBar 里 setFnToken 的逻辑抽象为通用工具，基于 config 中定义的顺序做有序插入（而非简单 push
到末尾）。各模块调用时传入自己的 key，工具函数保证最终结果按 config 顺序排列。
