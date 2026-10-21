import { Github, Mail, Code2, Database, Layers, Palette } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { PageMeta } from '../components/PageMeta'
import { FaqSection } from '../components/FaqSection'
import { GITHUB_URL, CONTACT_EMAIL } from '../config'

export function About() {
  const { t } = useTranslation()

  const techStack = [
    { icon: Code2, name: 'SwiftUI', descKey: 'about.tech.swiftui.desc' },
    { icon: Layers, name: 'AVPlayer', descKey: 'about.tech.avplayer.desc' },
    { icon: Database, name: 'SwiftData', descKey: 'about.tech.swiftdata.desc' },
    { icon: Palette, name: 'CloudKit', descKey: 'about.tech.cloudkit.desc' },
  ]

  return (
    <>
      <PageMeta titleKey="meta.about.title" descKey="meta.about.desc" />
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
                <p className="text-text-secondary text-sm">{t(tech.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('about.contact.title')}</h2>
          <p className="text-text-secondary text-lg mb-8">{t('about.contact.desc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface/80 border border-black/10 text-text-primary font-semibold px-6 py-3 rounded-lg transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              {t('about.contact.title')}
            </a>
          </div>
          <div className="mt-12 inline-flex flex-col items-center gap-3 bg-surface border border-black/10 rounded-2xl px-8 py-6">
            <img
              src="/telegram-qr.png"
              alt="ChiTV Telegram"
              className="w-40 h-40 rounded-xl"
              loading="lazy"
            />
            <p className="font-semibold">{t('about.contact.telegram.title')}</p>
            <p className="text-text-secondary text-sm">{t('about.contact.telegram.desc')}</p>
          </div>
        </div>
      </section>
    </>
  )
}
