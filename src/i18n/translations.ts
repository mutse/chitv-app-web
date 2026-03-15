import type { Translations } from './types'

export const translations: Translations = {
  // Nav
  'nav.home': { zh: '首页', en: 'Home' },
  'nav.features': { zh: '产品特性', en: 'Features' },
  'nav.about': { zh: '关于', en: 'About' },

  // Hero
  'hero.title': { zh: '随时随地，畅享视频', en: 'Stream Videos, Anytime, Anywhere' },
  'hero.subtitle': {
    zh: 'ChiTV 是一款基于 Flutter 构建的跨平台视频流媒体应用，支持 macOS、iOS 和 tvOS，为您带来极致的观看体验。',
    en: 'ChiTV is a cross-platform video streaming app built with SwiftUI, supporting macOS, iOS, and tvOS for the ultimate viewing experience.',
  },
  'hero.download': { zh: '立即下载', en: 'Download Now' },
  'hero.learnMore': { zh: '了解更多', en: 'Learn More' },

  // Features
  'features.title': { zh: '核心特性', en: 'Core Features' },
  'features.subtitle': {
    zh: '精心打造的功能，满足您的所有观看需求',
    en: 'Carefully crafted features to meet all your viewing needs',
  },

  'features.crossPlatform.title': { zh: '跨平台支持', en: 'Cross-Platform' },
  'features.crossPlatform.desc': {
    zh: '一次开发，多端运行。支持 macOS、iOS 和 tvOS，在任何设备上享受一致体验。',
    en: 'Build once, run everywhere. Supports macOS, iOS, and tvOS for a consistent experience on any device.',
  },

  'features.search.title': { zh: '智能搜索', en: 'Smart Search' },
  'features.search.desc': {
    zh: '强大的视频搜索引擎，快速找到您想看的内容，支持搜索历史记录。',
    en: 'Powerful video search engine to quickly find what you want to watch, with search history support.',
  },

  'features.hls.title': { zh: '高清播放', en: 'HD Streaming' },
  'features.hls.desc': {
    zh: '支持 HLS 流媒体协议，自适应码率切换，流畅播放高清视频。',
    en: 'HLS streaming protocol support with adaptive bitrate switching for smooth HD video playback.',
  },

  'features.bookmarks.title': { zh: '收藏夹', en: 'Bookmarks' },
  'features.bookmarks.desc': {
    zh: '一键收藏喜爱的视频，随时回看。支持本地持久化存储，数据永不丢失。',
    en: 'Bookmark your favorite videos with one tap. Local persistent storage ensures your data is never lost.',
  },

  'features.history.title': { zh: '观看历史', en: 'Watch History' },
  'features.history.desc': {
    zh: '自动记录观看进度和历史，轻松续看。智能排序，最近观看优先显示。',
    en: 'Automatically tracks your viewing progress and history for easy resume. Smart sorting shows recent watches first.',
  },

  'features.darkMode.title': { zh: '暗色主题', en: 'Dark Theme' },
  'features.darkMode.desc': {
    zh: '精心设计的暗色主题，保护视力，提升观看沉浸感。支持亮暗双主题切换。',
    en: 'Carefully designed dark theme to protect your eyes and enhance immersion. Supports light/dark theme switching.',
  },

  // Features page detail
  'features.page.title': { zh: '强大功能', en: 'Powerful Features' },
  'features.page.subtitle': {
    zh: '每一项功能都经过精心设计，为您提供最佳的视频观看体验',
    en: 'Every feature is carefully designed to provide you with the best video viewing experience',
  },

  'features.detail.search.title': { zh: '视频搜索', en: 'Video Search' },
  'features.detail.search.desc': {
    zh: '内置强大的搜索引擎，支持关键词搜索视频内容。搜索历史自动保存，方便快速重复搜索。搜索结果以网格形式展示，包含封面图、标题和评分等信息。',
    en: 'Built-in powerful search engine supporting keyword-based video content search. Search history is automatically saved for quick repeat searches. Results are displayed in a grid with cover images, titles, and ratings.',
  },

  'features.detail.player.title': { zh: 'HLS 流媒体播放器', en: 'HLS Streaming Player' },
  'features.detail.player.desc': {
    zh: '专业级 HLS 流媒体播放器，支持自适应码率切换，确保在不同网络环境下都能流畅播放。内置播放控制条，支持进度拖拽、暂停播放等操作。全屏播放模式提供沉浸式观看体验。',
    en: 'Professional HLS streaming player with adaptive bitrate switching for smooth playback across different network conditions. Built-in playback controls support seeking, pause/play, and more. Fullscreen mode provides an immersive viewing experience.',
  },

  'features.detail.bookmarks.title': { zh: '收藏管理', en: 'Bookmark Management' },
  'features.detail.bookmarks.desc': {
    zh: '在视频详情页一键添加收藏，所有收藏视频以网格形式集中展示。支持长按删除收藏，使用 Hive 本地数据库持久化存储，即使应用重启数据也不会丢失。',
    en: 'Add bookmarks with one tap from the video detail page. All bookmarked videos are displayed in a centralized grid. Long-press to remove bookmarks, with Hive local database for persistent storage that survives app restarts.',
  },

  'features.detail.history.title': { zh: '观看历史', en: 'Watch History' },
  'features.detail.history.desc': {
    zh: '自动记录每次观看的进度，包含视频标题、封面、观看时长和总时长。智能排序，最近观看的内容优先展示。进度条直观显示观看完成百分比，方便续看。',
    en: 'Automatically records viewing progress including video title, cover, watched duration, and total duration. Smart sorting prioritizes recently watched content. Progress bars intuitively show completion percentage for easy resume.',
  },

  'features.detail.crossPlatform.title': { zh: '跨平台支持', en: 'Cross-Platform Support' },
  'features.detail.crossPlatform.desc': {
    zh: '基于 SwiftUI 框架开发，一套代码同时支持 macOS、iOS 和 tvOS 三个平台。响应式设计自动适配不同屏幕尺寸和方向，在手机、平板和桌面端都能获得原生级体验。',
    en: 'Built with SwiftUI framework, a single codebase supports macOS, iOS, and tvOS simultaneously. Responsive design automatically adapts to different screen sizes and orientations for a native-like experience on phones, tablets, and desktops.',
  },

  'features.detail.auth.title': { zh: '用户认证', en: 'User Authentication' },
  'features.detail.auth.desc': {
    zh: '安全的用户认证系统，支持登录注册。用户数据与云端同步，在不同设备间无缝切换，保持您的收藏和观看历史数据一致。',
    en: 'Secure user authentication system with login and registration support. User data syncs with the cloud for seamless switching between devices while keeping your bookmarks and watch history consistent.',
  },

  // Tech highlights
  'features.tech.title': { zh: '技术亮点', en: 'Tech Highlights' },
  'features.tech.subtitle': {
    zh: '采用现代化技术栈，确保应用的性能和可靠性',
    en: 'Modern tech stack ensuring app performance and reliability',
  },

  // CTA
  'cta.title': { zh: '开始使用 ChiTV', en: 'Get Started with ChiTV' },
  'cta.subtitle': {
    zh: '下载 ChiTV，开启您的视频之旅',
    en: 'Download ChiTV and start your video journey',
  },
  'cta.android': { zh: 'Android 下载', en: 'Android' },
  'cta.ios': { zh: 'iOS 下载', en: 'iOS' },
  'cta.macos': { zh: 'macOS 下载', en: 'macOS' },

  // App Preview
  'preview.title': { zh: '应用预览', en: 'App Preview' },
  'preview.subtitle': {
    zh: '精美的界面设计，流畅的操作体验',
    en: 'Beautiful interface design with smooth user experience',
  },

  // About
  'about.title': { zh: '关于 ChiTV', en: 'About ChiTV' },
  'about.subtitle': {
    zh: '让每个人都能享受优质的视频内容',
    en: 'Making quality video content accessible to everyone',
  },
  'about.story.title': { zh: '项目故事', en: 'Our Story' },
  'about.story.content': {
    zh: 'ChiTV 诞生于对优质视频体验的追求。受 MoonTV 项目启发，我们使用 Flutter 框架从零构建了这款跨平台应用。我们相信，每个人都应该能在任何设备上享受流畅、高质量的视频内容，而不受平台限制。',
    en: 'ChiTV was born from the pursuit of a premium video experience. Inspired by the MoonTV project, we built this cross-platform app from scratch using the Flutter framework. We believe everyone should enjoy smooth, high-quality video content on any device without platform restrictions.',
  },
  'about.vision.title': { zh: '我们的愿景', en: 'Our Vision' },
  'about.vision.content': {
    zh: '打造一个简洁、高效、跨平台的视频播放解决方案。我们专注于核心观看体验——快速搜索、流畅播放、便捷收藏，让技术服务于内容本身。',
    en: 'To create a clean, efficient, cross-platform video playback solution. We focus on the core viewing experience — fast search, smooth playback, and easy bookmarking — letting technology serve the content itself.',
  },
  'about.tech.title': { zh: '技术栈', en: 'Tech Stack' },
  'about.contact.title': { zh: '联系我们', en: 'Contact Us' },
  'about.contact.github': { zh: '在 GitHub 上关注我们', en: 'Follow us on GitHub' },
  'about.contact.desc': {
    zh: 'ChiTV 是一个开源项目，欢迎参与贡献和交流。',
    en: 'ChiTV is an open-source project. Contributions and discussions are welcome.',
  },

  // Footer
  'footer.desc': {
    zh: '跨平台视频流媒体应用，支持 macOS、iOS 和 macOS。',
    en: 'Cross-platform video streaming app for macOS, iOS, and tvOS.',
  },
  'footer.quickLinks': { zh: '快速链接', en: 'Quick Links' },
  'footer.resources': { zh: '资源', en: 'Resources' },
  'footer.github': { zh: 'GitHub', en: 'GitHub' },
  'footer.privacy': { zh: '隐私政策', en: 'Privacy Policy' },
  'footer.terms': { zh: '使用条款', en: 'Terms of Service' },
  'footer.copyright': {
    zh: `© ${new Date().getFullYear()} ChiTV. 保留所有权利。`,
    en: `© ${new Date().getFullYear()} ChiTV. All rights reserved.`,
  },

  // Language
  'lang.zh': { zh: '中文', en: '中文' },
  'lang.en': { zh: 'English', en: 'English' },
}
