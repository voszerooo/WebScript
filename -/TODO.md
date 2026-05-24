

/**
 * & NEXT
 * - 
 * - 写好 README.MD 中英
 * - OVN_GLOBAL_BUTTON 默认按钮颜色不正确 开关可正常作用颜色 但功能开启 然后刷新 则没应用高亮颜色
 * - 
 * ? ==================== ↓ ERROR
 * ? 
 * ? GLOBAL | 样式加载问题 有时可能丢失全局变量
 * ? GLOBAL | OVN_Gallop 在某些站点下会导致滚轮失效
 * ? BUILD  | 
 * ? DEV    | 
 * ? 
 * ? 
 * ! ==================== ↓ WARN
 * !
 * ! GLOBAL | OVN_OBSERVER_CENTER 共享 Observer 实例可能导致一断全断或空转不释放
 * ! BUILD  | 在某些网站动态更新页面内容后 需要手动刷新才可正确应用样式
 * ! DEV    | 在某些网站会触发弹窗 "访问此设备上的其他应用和服务" 允许 屏蔽
 * ! UNK    | 语雀站点下 上下滚动可能引发 "抽搐"
 * ! 
 * ! 
 * # ==================== ↓ OPTIMIZE
 * # 
 * # OVN_Options 按住 ctrl 点击 组名可反选操作
 * # OVN_Options 可储存 三个常用配置 
 * # OVN_Options 在 UI 面板中 OVN_VALUE_RUNTIME 同步状态灯
 * # OVN_Options 当站点出现在 exclude 中时 状态灯为橙色 block 为 红色
 * # 
 * # OVN_GLOBAL_SCHEDULER scheduler depend priority phase 应该未生效
 * # OVN_GLOBAL_SCHEDULER 任务粒度 + 调度方式 + 执行时机 帧调度器
 * # 
 * # data-ovn-script-bundle 注入时就放进 ovnScript
 * # 
 * # OVN_GLOBAL_POPUP
 * # 
 * # eager lazy
 * # scope‌ 拆分
 * # 
 * # Webpack HMR - chunk 每个模块编写 dispose / accept 逻辑
 * # scss
 * # 
 * # 改掉 __XXXX__ 这类命名
 * # 
 * # 
 * + ==================== ↓ NEW
 * + 
 * + 导入导出配置
 * + 用户配置可覆盖默认配置 比如 主题色
 * + 
 * + OVN_REMOVE_LIMITS 新增 解除复制限制
 * + OVN_REMOVE_LOGIN
 * + 
 * + YOUTUBE 字幕翻译
 * + 
 * + 挂载 悬浮/面板按钮 点击呼出弹窗 可输入多行下载链接 进行 单独/批量下载 「调用浏览器原生方式」
 * + 
 * + 关灯模式 可 快捷键 > 视频下新增一个遮罩层
 * + 
 * + 封装 按键 > 绑定某些功能
 * + 将 站点的某个功能绑定快捷键
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

