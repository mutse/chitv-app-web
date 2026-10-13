# ChiTV App Website

ChiTV 官网：基于 SwiftUI 的跨平台（macOS / iOS / tvOS）视频播放器产品站。

- 技术栈：Vite 6 + React 19 + Tailwind CSS v4 + react-router v7
- 三语：简体中文 / 繁體中文 / English（`src/locale/{zh,tw,en}.ts`，语言偏好存 localStorage）
- 部署：Cloudflare Pages（`wrangler.toml`，构建产物 `dist/`）

## 本地开发

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build && 预渲染，产物在 dist/
npm run preview  # 预览构建产物
```

Node >= 22。

## 对外链接配置

所有对外链接集中在 `src/config.ts`：

| 常量 | 说明 |
| --- | --- |
| `SITE_URL` | 生产域名（canonical / sitemap / OG 图用） |
| `GITHUB_URL` | GitHub 仓库地址 |
| `CONTACT_EMAIL` | 联系邮箱 |
| `DOWNLOAD_URLS` | iOS / macOS / tvOS 下载地址 |

## 自动部署

`.github/workflows/deploy.yml`：push 到 `main` 自动构建并 `wrangler pages deploy`。
首次使用需在仓库 Settings > Secrets and variables > Actions 中配置：

- `CLOUDFLARE_API_TOKEN`（需 Cloudflare Pages 写权限）
- `CLOUDFLARE_ACCOUNT_ID`

PR 只跑构建校验，不部署。

## 预渲染（SEO / AI 搜索）

`npm run build` 最后一步会做预渲染：用 `src/entry-prerender.tsx` 在 Node 里
把 `/` `/features` `/android` `/about` 渲染成静态 HTML（含各路由独立的
title / description / OG / canonical），AI 爬虫与搜索引擎无需执行 JS
即可读取页面内容。Cloudflare Pages 上静态文件优先于 `_redirects` 的
`/* /index.html 200`，因此各路由的预渲染 HTML 会被直接 serve，兜底规则不受影响。

客户端启动时：预渲染语言与用户语言一致则 `hydrateRoot`，不一致则清空后
重新挂载（`src/main.tsx`），避免 hydration mismatch。

## 目录结构

```
src/
  components/   Header / Footer / Hero / FeatureGrid / CTASection / MobileNav / ...
  pages/        Home / Features / About / NotFound
  i18n/         语言机制（I18nProvider / useTranslation / types）
  locale/       三语文本资源（zh.ts / tw.ts / en.ts，index.ts 组装并校验 key 对齐）
  styles/       Tailwind v4 主题（index.css）
  config.ts     对外链接集中配置
  entry-prerender.tsx  预渲染 SSR 入口（Node 专用，不进客户端 bundle）
scripts/
  prerender.mjs 构建后为 / /features /android /about 生成静态 HTML
public/
  _redirects    Cloudflare Pages SPA fallback（/* -> /index.html 200）
  robots.txt / sitemap.xml / og-image.png
```
