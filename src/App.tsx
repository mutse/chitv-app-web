import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { I18nProvider } from './i18n/I18nProvider'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Features } from './pages/Features'
import { About } from './pages/About'

export function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  )
}
