// 站点级配置：所有对外链接集中在这里，换地址只改这一处。
// TODO(Young): 拿到 TestFlight / App Store 真实下载链接后更新 DOWNLOAD_URLS。

export const SITE_URL = 'https://chitv.fit'

export const GITHUB_URL = 'https://github.com/mutse/chitv-app-web'

// 更新日志指向发布仓 chitv-app（Release 实际所在地）；
// 关于页 GitHub 按钮指向主项目仓 chitv。
// 注意：GITHUB_URL 仍是本站仓库，供 iOS/macOS/tvOS 下载占位链接使用，不要改动。
export const CHANGELOG_URL = 'https://github.com/mutse/chitv-app/releases'
export const PROJECT_GITHUB_URL = 'https://github.com/mutse/chitv-app'

export const CONTACT_EMAIL = 'hi@chitv.fit'

export const TWITTER_URL = 'https://x.com/mutse_young'
export const TELEGRAM_URL = 'https://t.me/+eiCvvlxhyzowMDJh'

export const DOWNLOAD_URLS = {
  ios: `${GITHUB_URL}/releases`,
  macos: `${GITHUB_URL}/releases`,
  tvos: `${GITHUB_URL}/releases`,
  android: 'https://downloads.chitv.fit/chitv-app-release.apk',
  androidGithub: 'https://github.com/mutse/chitv-app/releases/download/v0.1.4/app-release.apk',
} as const
