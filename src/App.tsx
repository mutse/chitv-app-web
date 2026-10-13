import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { I18nProvider } from './i18n/I18nProvider'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const Features = lazy(() => import('./pages/Features').then((m) => ({ default: m.Features })))
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))
const Android = lazy(() => import('./pages/Android').then((m) => ({ default: m.Android })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

export function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="features" element={<Features />} />
              <Route path="android" element={<Android />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </I18nProvider>
  )
}
