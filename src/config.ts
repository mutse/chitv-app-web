// 站点级配置：所有对外链接集中在这里，换地址只改这一处。
// TODO(Young): macOS 的 App Store 真实下载链接拿到后更新 DOWNLOAD_URLS（iOS / tvOS 已上架）。

export const SITE_URL = 'https://chitv.fit'

export const GITHUB_URL = 'https://github.com/mutse/chitv-app-web'

// 更新日志指向发布仓 chitv-app（Release 实际所在地）；
// 关于页 GitHub 按钮指向主项目仓 chitv-app。
// 注意：GITHUB_URL 仍是本站仓库，供 macOS 下载占位链接使用，不要改动。
export const CHANGELOG_URL = 'https://github.com/mutse/chitv-app/releases'
export const PROJECT_GITHUB_URL = 'https://github.com/mutse/chitv-app'

export const CONTACT_EMAIL = 'hi@chitv.fit'

export const TWITTER_URL = 'https://x.com/chitvapp'
export const TELEGRAM_URL = 'https://t.me/chitv_app'

export const DOWNLOAD_URLS = {
  ios: 'https://apps.apple.com/app/chitv-%E6%92%AD%E6%94%BE%E5%99%A8/id6823914003',
  macos: `${GITHUB_URL}/releases`,
  tvos: 'https://apps.apple.com/app/chitv-%E6%92%AD%E6%94%BE%E5%99%A8/id6823914003',
  android: 'https://downloads.chitv.fit/chitv-app-release.apk',
  androidGithub: 'https://github.com/mutse/chitv-app/releases/download/v0.1.5/app-release.apk',
} as const
