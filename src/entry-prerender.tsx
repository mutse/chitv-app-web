// 预渲染入口：仅在 Node SSR 环境下使用，不会打进客户端 bundle。
// 路由结构与 src/App.tsx 保持一致；页面直接 import（不用 lazy，避免 SSR 悬空）。
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Routes, Route } from 'react-router-dom'
import { I18nProvider } from './i18n/I18nProvider'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Features } from './pages/Features'
import { Android } from './pages/Android'
import { About } from './pages/About'

export function render(url: string): string {
  return renderToString(
    <I18nProvider>
      <StaticRouter location={url}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="android" element={<Android />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </StaticRouter>
    </I18nProvider>
  )
}
