import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { App } from './App'
import { detectLocale } from './i18n/I18nProvider'
import './styles/index.css'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// 预渲染 HTML 的语言与用户语言一致时做 hydration；不一致则清空后重渲染，
// 避免 hydration mismatch 报错（预渲染产物通过 data-prerender-locale 标记语言）
const prerenderLocale = document.documentElement.dataset.prerenderLocale
if (container.hasChildNodes() && prerenderLocale === detectLocale()) {
  hydrateRoot(container, app)
} else {
  container.innerHTML = ''
  createRoot(container).render(app)
}
