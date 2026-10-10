// 站点级配置：所有对外链接集中在这里，换地址只改这一处。
// TODO(Young): 拿到 TestFlight / App Store 真实下载链接后更新 DOWNLOAD_URLS。

export const SITE_URL = 'https://chitv-app.mutse.top'

export const GITHUB_URL = 'https://github.com/mutse/chitv-app-web'

export const CONTACT_EMAIL = 'young@mutse.top'

export const DOWNLOAD_URLS = {
  ios: `${GITHUB_URL}/releases`,
  macos: `${GITHUB_URL}/releases`,
  tvos: `${GITHUB_URL}/releases`,
} as const
