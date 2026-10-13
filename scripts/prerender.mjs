// 预渲染：在 vite build 产物 dist/index.html 的基础上，为每个路由生成含真实
// 内容的静态 HTML（dist/<route>/index.html），供搜索引擎与 AI 爬虫直接读取。
// 运行前需要：1) vite build 已生成 dist/；2) vite build --ssr 已生成 dist-ssr/。
// 用法：node scripts/prerender.mjs
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

// I18nProvider 的 detectLocale 会读 localStorage / navigator，Node 下兜底
globalThis.localStorage ??= { getItem: () => null, setItem: () => {}, removeItem: () => {} }
globalThis.navigator ??= { language: 'zh-CN' }

const { render } = await import(join(root, 'dist-ssr', 'entry-prerender.js'))

const SITE = 'https://chitv-app.mutse.top'
const template = readFileSync(join(dist, 'index.html'), 'utf8')

const routes = {
  '/': {
    file: 'index.html',
    title: 'ChiTV - 跨平台视频播放器',
    desc: 'ChiTV - 跨平台视频播放器，支持 macOS、iOS、tvOS。随时随地，畅享视频。',
  },
  '/features': {
    file: 'features/index.html',
    title: '产品特性 - ChiTV',
    desc: 'ChiTV 核心特性：跨平台支持、智能搜索、HLS 高清播放、收藏夹、观看历史、暗色主题。',
  },
  '/android': {
    file: 'android/index.html',
    title: 'ChiTV 安卓版',
    desc: 'ChiTV 安卓版：基于 Flutter 构建，HLS 流媒体播放搭配 Material 3 设计，在安卓设备上同样流畅。',
  },
  '/about': {
    file: 'about/index.html',
    title: '关于 ChiTV',
    desc: '关于 ChiTV：基于 SwiftUI 构建的跨平台视频流媒体应用，让每个人都能享受优质的视频内容。',
  },
}

for (const [url, { file, title, desc }] of Object.entries(routes)) {
  const appHtml = render(url)
  if (appHtml.length < 500) throw new Error(`预渲染 ${url} 内容过短，可能渲染失败`)
  const pageUrl = SITE + (url === '/' ? '/' : url)
  const html = template
    .replace('<html lang="zh-CN">', '<html lang="zh-CN" data-prerender-locale="zh">')
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=").*?(" \/>)/, `$1${desc}$2`)
    .replace(/(<meta property="og:title" content=").*?(" \/>)/, `$1${title}$2`)
    .replace(/(<meta property="og:description" content=").*?(" \/>)/, `$1${desc}$2`)
    .replace(/(<meta property="og:url" content=").*?(" \/>)/, `$1${pageUrl}$2`)
    .replace(/(<link rel="canonical" href=").*?(" \/>)/, `$1${pageUrl}$2`)
    .replace(/(<meta name="twitter:title" content=").*?(" \/>)/, `$1${title}$2`)
    .replace(/(<meta name="twitter:description" content=").*?(" \/>)/, `$1${desc}$2`)
  const outPath = join(dist, file)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  console.log(`prerendered ${url} -> ${file} (${(appHtml.length / 1024).toFixed(1)}KB HTML)`)
}

rmSync(join(root, 'dist-ssr'), { recursive: true, force: true })
console.log('done')
