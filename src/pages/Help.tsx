import { Link, useLocation } from 'react-router-dom'
import { Download, Github, Smartphone } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { PageMeta } from '../components/PageMeta'
import { CONTACT_EMAIL, TELEGRAM_URL, DOWNLOAD_URLS } from '../config'

// 帮助页：与 Releases 同款平台判定——/android/help 显示 Android 版，其余显示 Apple 版。
// 导航栏的 Apple/Android 切换在帮助页上会在 /help 与 /android/help 之间跳转（见 PlatformSwitcher）。
// 布局参考 mole.fit/zh/help 的文档式排版：左对齐文档标题 + 左侧锚点目录 + 右侧中窄栏正文，
// 章节靠字号与留白分层；步骤用缩进数字列表，FAQ 全部展开，链接用蓝色文字（不做卡片与折叠）；
// 下载链接例外，用首页 Hero 同款圆角胶囊主按钮。
export function Help() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const android = pathname.startsWith('/android')

  // 左侧目录：与正文的 h2 章节一一对应（无滚动跟随高亮，mole.fit 的目录同样不吸顶）。
  const toc = android
    ? [
        { id: 'download', label: t('help.android.download.title') },
        { id: 'sources', label: t('help.android.sources.title') },
        { id: 'tvbox', label: t('help.android.tvbox.title') },
        { id: 'export', label: t('help.android.export.title') },
        { id: 'import', label: t('help.android.import.title') },
        { id: 'update', label: t('help.android.update.title') },
        { id: 'faq', label: t('faq.title') },
        { id: 'contact', label: t('help.contact.title') },
      ]
    : [
        { id: 'download', label: t('help.apple.download.title') },
        { id: 'sources', label: t('help.apple.sources.title') },
        { id: 'sync', label: t('help.apple.sync.title') },
        { id: 'pro', label: t('help.apple.pro.title') },
        { id: 'faq', label: t('faq.title') },
        { id: 'contact', label: t('help.contact.title') },
      ]

  const linkClassName =
    'text-primary underline underline-offset-4 hover:text-primary/80 transition-colors duration-300'

  // 下载按钮：与首页 Hero 同款（圆角胶囊主按钮 + 平台图标 + 下载图标）
  const downloadButtonClassName =
    'inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-7 py-[13px] rounded-full min-w-[158px] transition-all duration-300 hover:-translate-y-px'

  return (
    <>
      <PageMeta
        titleKey={android ? 'meta.help.title.android' : 'meta.help.title.apple'}
        descKey="meta.help.desc"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* 标题区：左对齐文档标题 + 灰色副标题，不用居中横幅 */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t('help.title')}</h1>
          <p className="text-text-secondary text-lg">{t('help.subtitle')}</p>
        </div>

        <div className="lg:grid lg:grid-cols-[192px_1fr] lg:gap-12">
          {/* 左侧目录：窄屏时堆在正文上方，宽屏时为左栏 */}
          <nav className="mb-10 lg:mb-0">
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 正文：中窄栏，章节间留白大 */}
          <div className="space-y-16 min-w-0">
            {android ? (
              <>
                <section id="download" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">{t('help.android.download.title')}</h2>
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {t('help.android.download.content')}
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-4">
                    <a href={DOWNLOAD_URLS.android} className={downloadButtonClassName}>
                      <Smartphone className="w-5 h-5" />
                      <Download className="w-4 h-4" />
                      {t('android.cta.official')}
                    </a>
                    <a
                      href={DOWNLOAD_URLS.androidGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={downloadButtonClassName}
                    >
                      <Github className="w-5 h-5" />
                      <Download className="w-4 h-4" />
                      {t('android.cta.github')}
                    </a>
                  </div>
                </section>

                <section id="sources" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-8">{t('help.android.sources.title')}</h2>
                  <div className="space-y-12">
                    <div>
                      <h3 className="text-xl font-bold mb-4">{t('android.guide.title')}</h3>
                      <ol className="list-decimal ml-6 space-y-3 text-text-secondary leading-relaxed text-lg">
                        {[1, 2, 3, 4].map((n) => (
                          <li key={n} className="break-words">
                            {t(`android.guide.step${n}`)}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">{t('android.liveGuide.title')}</h3>
                      <ol className="list-decimal ml-6 space-y-3 text-text-secondary leading-relaxed text-lg">
                        {[1, 2, 3, 4].map((n) => (
                          <li key={n} className="break-words">
                            {t(`android.liveGuide.step${n}`)}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </section>

                <section id="tvbox" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">{t('help.android.tvbox.title')}</h2>
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {t('help.android.tvbox.content')}
                  </p>
                </section>

                <section id="export" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">{t('help.android.export.title')}</h2>
                  <ol className="list-decimal ml-6 space-y-3 text-text-secondary leading-relaxed text-lg">
                    {[1, 2, 3].map((n) => (
                      <li key={n} className="break-words">
                        {t(`help.android.export.step${n}`)}
                      </li>
                    ))}
                  </ol>
                </section>

                <section id="import" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">{t('help.android.import.title')}</h2>
                  <ol className="list-decimal ml-6 space-y-3 text-text-secondary leading-relaxed text-lg">
                    {[1, 2, 3].map((n) => (
                      <li key={n} className="break-words">
                        {t(`help.android.import.step${n}`)}
                      </li>
                    ))}
                  </ol>
                </section>

                <section id="update" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">{t('help.android.update.title')}</h2>
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {t('help.android.update.content')}
                  </p>
                </section>
              </>
            ) : (
              <>
                <section id="download" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">{t('help.apple.download.title')}</h2>
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {t('help.apple.download.content')}
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-4">
                    <a
                      href={DOWNLOAD_URLS.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={downloadButtonClassName}
                    >
                      <Smartphone className="w-5 h-5" />
                      <Download className="w-4 h-4" />
                      {t('cta.ios')}
                    </a>
                  </div>
                </section>

                <section id="sources" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">{t('help.apple.sources.title')}</h2>
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {t('help.apple.sources.content')}
                  </p>
                  <ol className="mt-4 list-decimal ml-6 space-y-3 text-text-secondary leading-relaxed text-lg">
                    {[1, 2, 3].map((n) => (
                      <li key={n} className="break-words">
                        {t(`help.apple.sources.step${n}`)}
                      </li>
                    ))}
                  </ol>
                </section>

                <section id="sync" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">{t('help.apple.sync.title')}</h2>
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {t('help.apple.sync.content')}
                  </p>
                </section>

                <section id="pro" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">{t('help.apple.pro.title')}</h2>
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {t('help.apple.pro.content')}
                  </p>
                </section>
              </>
            )}

            {/* 通用 FAQ：全部展开的三级标题 + 正文，不用折叠手风琴 */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-8">{t('faq.title')}</h2>
              <div className="space-y-8">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n}>
                    <h3 className="text-xl font-bold mb-3">{t(`faq.q${n}`)}</h3>
                    <p className="text-text-secondary leading-relaxed text-lg">{t(`faq.a${n}`)}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 联系：正文 + 行内链接，不用居中按钮组 */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">{t('help.contact.title')}</h2>
              <p className="text-text-secondary leading-relaxed text-lg mb-6">
                {t('help.contact.content')}
              </p>
              <ul className="space-y-2 text-lg">
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className={linkClassName}>
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <Link to="/about" className={linkClassName}>
                    {t('help.contact.about')}
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
