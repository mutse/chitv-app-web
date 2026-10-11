# ChiTV App Website

ChiTV 官网：基于 SwiftUI 的跨平台（macOS / iOS / tvOS）视频播放器产品站。

- 技术栈：Vite 6 + React 19 + Tailwind CSS v4 + react-router v7
- 双语：中文 / English（`src/i18n/translations.ts`，语言偏好存 localStorage）
- 部署：Cloudflare Pages（`wrangler.toml`，构建产物 `dist/`）

## 本地开发

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build，产物在 dist/
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

## 目录结构

```
src/
  components/   Header / Footer / Hero / FeatureGrid / CTASection / MobileNav / ...
  pages/        Home / Features / About / NotFound
  i18n/         双语实现（I18nProvider / translations / useTranslation）
  styles/       Tailwind v4 主题（index.css）
  config.ts     对外链接集中配置
public/
  _redirects    Cloudflare Pages SPA fallback（/* -> /index.html 200）
  robots.txt / sitemap.xml / og-image.png
```
