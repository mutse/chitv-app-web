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

// 从 src/locale/zh.ts 解析中文 meta 文案，与客户端 PageMeta 共用同一数据源
const zhSrc = readFileSync(join(root, 'src/locale/zh.ts'), 'utf8')
const zhDict = Object.fromEntries(
  [...zhSrc.matchAll(/^  '([\w.]+)': '((?:[^'\\]|\\.)*)',?$/gm)].map((m) => [m[1], m[2]])
)

const routes = {
  '/': { file: 'index.html', titleKey: 'meta.home.title', descKey: 'meta.home.desc' },
  '/features': { file: 'features/index.html', titleKey: 'meta.features.title', descKey: 'meta.features.desc' },
  '/android': { file: 'android/index.html', titleKey: 'meta.android.title', descKey: 'meta.android.desc' },
  '/about': { file: 'about/index.html', titleKey: 'meta.about.title', descKey: 'meta.about.desc' },
  // 404 页：Cloudflare Pages 对未知路径以 404 状态 serve dist/404.html（noindex，不被收录）
  '/404': { file: '404.html', titleKey: 'meta.notfound.title', descKey: 'meta.notfound.desc', noindex: true },
}

for (const [url, { file, titleKey, descKey, noindex }] of Object.entries(routes)) {
  const title = zhDict[titleKey]
  const desc = zhDict[descKey]
  if (!title || !desc) throw new Error(`zh.ts 缺少 ${titleKey} / ${descKey}`)
  const appHtml = render(url)
  if (appHtml.length < 500) throw new Error(`预渲染 ${url} 内容过短，可能渲染失败`)
  // canonical / OG / hreflang 统一用 trailing slash（与线上实际 URL 一致）
  const pageUrl = SITE + (url === '/' ? '/' : `${url}/`)
  // hreflang：单 URL 三语（客户端切换），四个标签均指向本页，x-default 兜底；noindex 页跳过
  const hreflang = noindex
    ? ''
    : ['zh-CN', 'zh-TW', 'en', 'x-default']
        .map((l) => `<link rel="alternate" hreflang="${l}" href="${pageUrl}" />`)
        .join('\n  ')
  let html = template
    .replace('<html lang="zh-CN">', '<html lang="zh-CN" data-prerender-locale="zh">')
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=").*?(" \/>)/, `$1${desc}$2`)
    .replace(/(<meta property="og:title" content=").*?(" \/>)/, `$1${title}$2`)
    .replace(/(<meta property="og:description" content=").*?(" \/>)/, `$1${desc}$2`)
    .replace(/(<meta property="og:url" content=").*?(" \/>)/, `$1${pageUrl}$2`)
    .replace(/(<link rel="canonical" href=").*?(" \/>)/, noindex ? `$1${pageUrl}$2` : `$1${pageUrl}$2\n  ${hreflang}`)
    .replace(/(<meta name="twitter:title" content=").*?(" \/>)/, `$1${title}$2`)
    .replace(/(<meta name="twitter:description" content=").*?(" \/>)/, `$1${desc}$2`)
  if (noindex) {
    html = html.replace('</head>', '  <meta name="robots" content="noindex" />\n</head>')
  }
  // /about 页：可见 FAQ 与 FAQPage 结构化数据保持一致（Google 富摘要 / AI 引用）
  if (url === '/about') {
    const faqJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [1, 2, 3, 4, 5, 6].map((n) => ({
        '@type': 'Question',
        name: zhDict[`faq.q${n}`],
        acceptedAnswer: { '@type': 'Answer', text: zhDict[`faq.a${n}`] },
      })),
    }
    for (const item of faqJsonLd.mainEntity) {
      if (!item.name || !item.acceptedAnswer.text) throw new Error(`zh.ts 缺少 faq.q/a`)
    }
    html = html.replace(
      '</head>',
      `<script type="application/ld+json">${JSON.stringify(faqJsonLd)}</script>\n</head>`
    )
  }
  const outPath = join(dist, file)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  console.log(`prerendered ${url} -> ${file} (${(appHtml.length / 1024).toFixed(1)}KB HTML)`)
}

rmSync(join(root, 'dist-ssr'), { recursive: true, force: true })
console.log('done')
