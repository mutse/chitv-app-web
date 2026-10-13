import type { Translations } from './types'

export const translations: Translations = {
  // Nav
  'nav.home': { zh: '首页', tw: '首頁', en: 'Home' },
  'nav.features': { zh: '产品特性', tw: '產品特性', en: 'Features' },
  'nav.android': { zh: '安卓版', tw: '安卓版', en: 'Android' },
  'nav.about': { zh: '关于', tw: '關於', en: 'About' },

  // Hero
  'hero.title': { zh: '随时随地，畅享视频', tw: '隨時隨地，暢享視頻', en: 'Stream Videos, Anytime, Anywhere' },
  'hero.subtitle': {
    zh: 'ChiTV 是一款基于 SwiftUI 构建的跨平台视频流媒体应用，支持 macOS、iOS 和 tvOS，为您带来极致的观看体验。',
    tw: 'ChiTV 是一款基於 SwiftUI 構建的跨平台視頻流媒體應用，支持 macOS、iOS 和 tvOS，為您帶來極致的觀看體驗。',
    en: 'ChiTV is a cross-platform video streaming app built with SwiftUI, supporting macOS, iOS, and tvOS for the ultimate viewing experience.',
  },
  'hero.download': { zh: '立即下载', tw: '立即下載', en: 'Download Now' },
  'hero.learnMore': { zh: '了解更多', tw: '瞭解更多', en: 'Learn More' },

  // Features
  'features.title': { zh: '核心特性', tw: '核心特性', en: 'Core Features' },
  'features.subtitle': {
    zh: '精心打造的功能，满足您的所有观看需求',
    tw: '精心打造的功能，滿足您的所有觀看需求',
    en: 'Carefully crafted features to meet all your viewing needs',
  },

  'features.crossPlatform.title': { zh: '跨平台支持', tw: '跨平台支持', en: 'Cross-Platform' },
  'features.crossPlatform.desc': {
    zh: '一次开发，多端运行。支持 macOS、iOS 和 tvOS，在任何设备上享受一致体验。',
    tw: '一次開發，多端運行。支持 macOS、iOS 和 tvOS，在任何設備上享受一致體驗。',
    en: 'Build once, run everywhere. Supports macOS, iOS, and tvOS for a consistent experience on any device.',
  },

  'features.search.title': { zh: '智能搜索', tw: '智能搜索', en: 'Smart Search' },
  'features.search.desc': {
    zh: '强大的视频搜索引擎，快速找到您想看的内容，支持搜索历史记录。',
    tw: '強大的視頻搜索引擎，快速找到您想看的內容，支持搜索歷史記錄。',
    en: 'Powerful video search engine to quickly find what you want to watch, with search history support.',
  },

  'features.hls.title': { zh: '高清播放', tw: '高清播放', en: 'HD Streaming' },
  'features.hls.desc': {
    zh: '支持 HLS 流媒体协议，自适应码率切换，流畅播放高清视频。',
    tw: '支持 HLS 流媒體協議，自適應碼率切換，流暢播放高清視頻。',
    en: 'HLS streaming protocol support with adaptive bitrate switching for smooth HD video playback.',
  },

  'features.bookmarks.title': { zh: '收藏夹', tw: '收藏夾', en: 'Bookmarks' },
  'features.bookmarks.desc': {
    zh: '一键收藏喜爱的视频，随时回看。支持本地持久化存储，数据永不丢失。',
    tw: '一鍵收藏喜愛的視頻，隨時回看。支持本地持久化存儲，數據永不丟失。',
    en: 'Bookmark your favorite videos with one tap. Local persistent storage ensures your data is never lost.',
  },

  'features.history.title': { zh: '观看历史', tw: '觀看歷史', en: 'Watch History' },
  'features.history.desc': {
    zh: '自动记录观看进度和历史，轻松续看。智能排序，最近观看优先显示。',
    tw: '自動記錄觀看進度和歷史，輕鬆續看。智能排序，最近觀看優先顯示。',
    en: 'Automatically tracks your viewing progress and history for easy resume. Smart sorting shows recent watches first.',
  },

  'features.darkMode.title': { zh: '暗色主题', tw: '暗色主題', en: 'Dark Theme' },
  'features.darkMode.desc': {
    zh: '精心设计的暗色主题，保护视力，提升观看沉浸感。支持亮暗双主题切换。',
    tw: '精心設計的暗色主題，保護視力，提升觀看沉浸感。支持亮暗雙主題切換。',
    en: 'Carefully designed dark theme to protect your eyes and enhance immersion. Supports light/dark theme switching.',
  },

  // Features page detail
  'features.page.title': { zh: '强大功能', tw: '強大功能', en: 'Powerful Features' },
  'features.page.subtitle': {
    zh: '每一项功能都经过精心设计，为您提供最佳的视频观看体验',
    tw: '每一項功能都經過精心設計，為您提供最佳的視頻觀看體驗',
    en: 'Every feature is carefully designed to provide you with the best video viewing experience',
  },

  'features.detail.search.title': { zh: '视频搜索', tw: '視頻搜索', en: 'Video Search' },
  'features.detail.search.desc': {
    zh: '内置强大的搜索引擎，支持关键词搜索视频内容。搜索历史自动保存，方便快速重复搜索。搜索结果以网格形式展示，包含封面图、标题和评分等信息。',
    tw: '內置強大的搜索引擎，支持關鍵詞搜索視頻內容。搜索歷史自動保存，方便快速重複搜索。搜索結果以網格形式展示，包含封面圖、標題和評分等信息。',
    en: 'Built-in powerful search engine supporting keyword-based video content search. Search history is automatically saved for quick repeat searches. Results are displayed in a grid with cover images, titles, and ratings.',
  },

  'features.detail.player.title': { zh: 'HLS 流媒体播放器', tw: 'HLS 流媒體播放器', en: 'HLS Streaming Player' },
  'features.detail.player.desc': {
    zh: '专业级 HLS 流媒体播放器，支持自适应码率切换，确保在不同网络环境下都能流畅播放。内置播放控制条，支持进度拖拽、暂停播放等操作。全屏播放模式提供沉浸式观看体验。',
    tw: '專業級 HLS 流媒體播放器，支持自適應碼率切換，確保在不同網絡環境下都能流暢播放。內置播放控制條，支持進度拖拽、暫停播放等操作。全屏播放模式提供沉浸式觀看體驗。',
    en: 'Professional HLS streaming player with adaptive bitrate switching for smooth playback across different network conditions. Built-in playback controls support seeking, pause/play, and more. Fullscreen mode provides an immersive viewing experience.',
  },

  'features.detail.bookmarks.title': { zh: '收藏管理', tw: '收藏管理', en: 'Bookmark Management' },
  'features.detail.bookmarks.desc': {
    zh: '在视频详情页一键添加收藏，所有收藏视频以网格形式集中展示。支持长按删除收藏，使用 SwiftData 本地持久化存储，即使应用重启数据也不会丢失。',
    tw: '在視頻詳情頁一鍵添加收藏，所有收藏視頻以網格形式集中展示。支持長按刪除收藏，使用 SwiftData 本地持久化存儲，即使應用重啟數據也不會丟失。',
    en: 'Add bookmarks with one tap from the video detail page. All bookmarked videos are displayed in a centralized grid. Long-press to remove bookmarks, with SwiftData local persistence that survives app restarts.',
  },

  'features.detail.history.title': { zh: '观看历史', tw: '觀看歷史', en: 'Watch History' },
  'features.detail.history.desc': {
    zh: '自动记录每次观看的进度，包含视频标题、封面、观看时长和总时长。智能排序，最近观看的内容优先展示。进度条直观显示观看完成百分比，方便续看。',
    tw: '自動記錄每次觀看的進度，包含視頻標題、封面、觀看時長和總時長。智能排序，最近觀看的內容優先展示。進度條直觀顯示觀看完成百分比，方便續看。',
    en: 'Automatically records viewing progress including video title, cover, watched duration, and total duration. Smart sorting prioritizes recently watched content. Progress bars intuitively show completion percentage for easy resume.',
  },

  'features.detail.crossPlatform.title': { zh: '跨平台支持', tw: '跨平台支持', en: 'Cross-Platform Support' },
  'features.detail.crossPlatform.desc': {
    zh: '基于 SwiftUI 框架开发，一套代码同时支持 macOS、iOS 和 tvOS 三个平台。响应式设计自动适配不同屏幕尺寸和方向，在手机、平板和桌面端都能获得原生级体验。',
    tw: '基於 SwiftUI 框架開發，一套代碼同時支持 macOS、iOS 和 tvOS 三個平台。響應式設計自動適配不同屏幕尺寸和方向，在手機、平板和桌面端都能獲得原生級體驗。',
    en: 'Built with SwiftUI framework, a single codebase supports macOS, iOS, and tvOS simultaneously. Responsive design automatically adapts to different screen sizes and orientations for a native-like experience on phones, tablets, and desktops.',
  },

  'features.detail.auth.title': { zh: '用户认证', tw: '用戶認證', en: 'User Authentication' },
  'features.detail.auth.desc': {
    zh: '安全的用户认证系统，支持登录注册。用户数据与云端同步，在不同设备间无缝切换，保持您的收藏和观看历史数据一致。',
    tw: '安全的用戶認證系統，支持登錄註冊。用戶數據與雲端同步，在不同設備間無縫切換，保持您的收藏和觀看歷史數據一致。',
    en: 'Secure user authentication system with login and registration support. User data syncs with the cloud for seamless switching between devices while keeping your bookmarks and watch history consistent.',
  },

  // Tech highlights
  'features.tech.title': { zh: '技术亮点', tw: '技術亮點', en: 'Tech Highlights' },
  'features.tech.subtitle': {
    zh: '采用现代化技术栈，确保应用的性能和可靠性',
    tw: '採用現代化技術棧，確保應用的性能和可靠性',
    en: 'Modern tech stack ensuring app performance and reliability',
  },

  // CTA
  'cta.title': { zh: '开始使用 ChiTV', tw: '開始使用 ChiTV', en: 'Get Started with ChiTV' },
  'cta.subtitle': {
    zh: '下载 ChiTV，开启您的视频之旅',
    tw: '下載 ChiTV，開啟您的視頻之旅',
    en: 'Download ChiTV and start your video journey',
  },
  'cta.ios': { zh: 'iOS 下载', tw: 'iOS 下載', en: 'iOS' },
  'cta.macos': { zh: 'macOS 下载', tw: 'macOS 下載', en: 'macOS' },
  'cta.tvos': { zh: 'tvOS 下载', tw: 'tvOS 下載', en: 'tvOS' },
  'cta.android': { zh: 'Android 下载', tw: 'Android 下載', en: 'Android' },

  // Android page
  'android.hero.title': { zh: 'ChiTV 安卓版', tw: 'ChiTV 安卓版', en: 'ChiTV for Android' },
  'android.hero.subtitle': {
    zh: '基于 Flutter 构建的安卓视频播放器，HLS 流媒体播放搭配 Material 3 设计，在安卓设备上同样流畅。',
    tw: '基於 Flutter 構建的安卓視頻播放器，HLS 流媒體播放搭配 Material 3 設計，在安卓設備上同樣流暢。',
    en: 'An Android video player built with Flutter, pairing HLS streaming with Material 3 design — smooth on Android too.',
  },
  'android.features.player.title': { zh: 'HLS 流媒体播放', tw: 'HLS 流媒體播放', en: 'HLS Streaming' },
  'android.features.player.desc': {
    zh: 'HLS 协议自适应码率播放，根据网络状况自动切换清晰度，弱网环境也能流畅观看。支持进度拖拽、倍速播放与全屏沉浸体验。',
    tw: 'HLS 協議自適應碼率播放，根據網絡狀況自動切換清晰度，弱網環境也能流暢觀看。支持進度拖拽、倍速播放與全屏沉浸體驗。',
    en: 'Adaptive-bitrate HLS playback that switches quality with your network, staying smooth even on weak connections. Seeking, speed control, and immersive fullscreen included.',
  },
  'android.features.design.title': { zh: 'Material 3 设计', tw: 'Material 3 設計', en: 'Material 3 Design' },
  'android.features.design.desc': {
    zh: '遵循 Material 3 设计语言，原生安卓质感，动态取色与圆角卡片，亮暗主题随系统自动切换。',
    tw: '遵循 Material 3 設計語言，原生安卓質感，動態取色與圓角卡片，亮暗主題隨系統自動切換。',
    en: 'Built on the Material 3 design language with a native Android feel — dynamic color, rounded cards, and light/dark themes following the system.',
  },
  'android.features.bookmarks.title': { zh: '收藏管理', tw: '收藏管理', en: 'Bookmark Management' },
  'android.features.bookmarks.desc': {
    zh: '一键收藏喜爱的视频，集中网格展示，长按即可删除。Hive 本地数据库持久化存储，离线可用，数据不丢失。',
    tw: '一鍵收藏喜愛的視頻，集中網格展示，長按即可刪除。Hive 本地數據庫持久化存儲，離線可用，數據不丟失。',
    en: 'Bookmark videos with one tap, browse them in a grid, long-press to remove. Hive local persistence keeps your data safe and available offline.',
  },
  'android.features.history.title': { zh: '观看历史', tw: '觀看歷史', en: 'Watch History' },
  'android.features.history.desc': {
    zh: '自动记录每次观看的进度与时长，Riverpod 响应式状态管理让列表实时更新，打开即续看。',
    tw: '自動記錄每次觀看的進度與時長，Riverpod 響應式狀態管理讓列表實時更新，打開即續看。',
    en: 'Every watch session is recorded with progress and duration. Riverpod reactive state management keeps the list live — open and resume instantly.',
  },
  'android.tech.title': { zh: '技术亮点', tw: '技術亮點', en: 'Tech Highlights' },
  'android.tech.subtitle': {
    zh: 'Flutter 跨平台技术栈，为安卓深度优化',
    tw: 'Flutter 跨平台技術棧，為安卓深度優化',
    en: 'A Flutter tech stack, tuned for Android',
  },
  'android.cta.title': { zh: '下载 ChiTV 安卓版', tw: '下載 ChiTV 安卓版', en: 'Download ChiTV for Android' },
  'android.cta.subtitle': {
    zh: '在 GitHub Releases 获取最新 APK，免费使用',
    tw: '在 GitHub Releases 獲取最新 APK，免費使用',
    en: 'Get the latest APK from GitHub Releases, free to use',
  },
  'android.cta.button': { zh: '前往下载', tw: '前往下載', en: 'Get the App' },

  // About
  'about.title': { zh: '关于 ChiTV', tw: '關於 ChiTV', en: 'About ChiTV' },
  'about.subtitle': {
    zh: '让每个人都能享受优质的视频内容',
    tw: '讓每個人都能享受優質的視頻內容',
    en: 'Making quality video content accessible to everyone',
  },
  'about.story.title': { zh: '项目故事', tw: '項目故事', en: 'Our Story' },
  'about.story.content': {
    zh: 'ChiTV 诞生于对优质视频体验的追求。受 MoonTV 项目启发，我们使用 SwiftUI 框架从零构建了这款跨平台应用。我们相信，每个人都应该能在任何设备上享受流畅、高质量的视频内容，而不受平台限制。',
    tw: 'ChiTV 誕生於對優質視頻體驗的追求。受 MoonTV 項目啟發，我們使用 SwiftUI 框架從零構建了這款跨平台應用。我們相信，每個人都應該能在任何設備上享受流暢、高質量的視頻內容，而不受平台限制。',
    en: 'ChiTV was born from the pursuit of a premium video experience. Inspired by the MoonTV project, we built this cross-platform app from scratch using the SwiftUI framework. We believe everyone should enjoy smooth, high-quality video content on any device without platform restrictions.',
  },
  'about.vision.title': { zh: '我们的愿景', tw: '我們的願景', en: 'Our Vision' },
  'about.vision.content': {
    zh: '打造一个简洁、高效、跨平台的视频播放解决方案。我们专注于核心观看体验——快速搜索、流畅播放、便捷收藏，让技术服务于内容本身。',
    tw: '打造一個簡潔、高效、跨平台的視頻播放解決方案。我們專注於核心觀看體驗——快速搜索、流暢播放、便捷收藏，讓技術服務於內容本身。',
    en: 'To create a clean, efficient, cross-platform video playback solution. We focus on the core viewing experience — fast search, smooth playback, and easy bookmarking — letting technology serve the content itself.',
  },
  'about.tech.title': { zh: '技术栈', tw: '技術棧', en: 'Tech Stack' },
  'about.contact.title': { zh: '联系我们', tw: '聯繫我們', en: 'Contact Us' },
  'about.contact.github': { zh: '在 GitHub 上关注我们', tw: '在 GitHub 上關注我們', en: 'Follow us on GitHub' },
  'about.contact.desc': {
    zh: 'ChiTV 是一个开源项目，欢迎参与贡献和交流。',
    tw: 'ChiTV 是一個開源項目，歡迎參與貢獻和交流。',
    en: 'ChiTV is an open-source project. Contributions and discussions are welcome.',
  },

  // Footer
  'footer.desc': {
    zh: '跨平台视频流媒体应用，支持 macOS、iOS 和 tvOS。',
    tw: '跨平台視頻流媒體應用，支持 macOS、iOS 和 tvOS。',
    en: 'Cross-platform video streaming app for macOS, iOS, and tvOS.',
  },
  'footer.quickLinks': { zh: '快速链接', tw: '快速鏈接', en: 'Quick Links' },
  'footer.resources': { zh: '资源', tw: '資源', en: 'Resources' },
  'footer.github': { zh: 'GitHub', tw: 'GitHub', en: 'GitHub' },
  'footer.privacy': { zh: '隐私政策', tw: '隱私政策', en: 'Privacy Policy' },
  'footer.terms': { zh: '使用条款', tw: '使用條款', en: 'Terms of Service' },
  'footer.copyright': {
    zh: `© ${new Date().getFullYear()} ChiTV. 保留所有权利。`,
    tw: `© ${new Date().getFullYear()} ChiTV. 保留所有權利。`,
    en: `© ${new Date().getFullYear()} ChiTV. All rights reserved.`,
  },

  // Language
  'lang.zh': { zh: '中文', tw: '中文', en: '中文' },
  'lang.tw': { zh: '繁體', tw: '繁體', en: '繁體' },
  'lang.en': { zh: 'English', tw: 'English', en: 'English' },

  // Accessibility
  'a11y.toggleMenu': { zh: '切换菜单', tw: '切換菜單', en: 'Toggle menu' },
  'a11y.switchLanguage': { zh: '切换语言', tw: '切換語言', en: 'Switch language' },

  // 404
  'notfound.title': { zh: '页面未找到', tw: '頁面未找到', en: 'Page Not Found' },
  'notfound.desc': { zh: '抱歉，您访问的页面不存在或已被移动。', tw: '抱歉，您訪問的頁面不存在或已被移動。', en: 'Sorry, the page you are looking for does not exist or has been moved.' },
  'notfound.back': { zh: '返回首页', tw: '返回首頁', en: 'Back to Home' },
}
