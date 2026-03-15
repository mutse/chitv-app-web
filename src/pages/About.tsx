import { Github, Mail, Code2, Database, Layers, Palette } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'

export function About() {
  const { t, locale } = useTranslation()

  const techStack = [
    { icon: Code2, name: 'SwiftUI', desc: { zh: '跨平台 UI 框架', en: 'Cross-platform UI framework' } },
    { icon: Layers, name: 'Riverpod', desc: { zh: '响应式状态管理', en: 'Reactive state management' } },
    { icon: Database, name: 'Hive', desc: { zh: '轻量级本地数据库', en: 'Lightweight local database' } },
    { icon: Palette, name: 'Material 3', desc: { zh: '现代化设计系统', en: 'Modern design system' } },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('about.title')}</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t('about.subtitle')}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t('about.story.title')}</h2>
            <p className="text-text-secondary leading-relaxed text-lg">{t('about.story.content')}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">{t('about.vision.title')}</h2>
            <p className="text-text-secondary leading-relaxed text-lg">{t('about.vision.content')}</p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('about.tech.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-surface rounded-xl p-6 border border-black/5 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{tech.name}</h3>
                <p className="text-text-secondary text-sm">{tech.desc[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('about.contact.title')}</h2>
          <p className="text-text-secondary text-lg mb-8">{t('about.contact.desc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/user/chitv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface/80 border border-black/10 text-text-primary font-semibold px-6 py-3 rounded-lg transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="mailto:contact@chitv.app"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              {t('about.contact.title')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
