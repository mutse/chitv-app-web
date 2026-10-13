import { Hero } from '../components/Hero'
import { PageMeta } from '../components/PageMeta'
import { FeatureGrid } from '../components/FeatureGrid'
import { CTASection } from '../components/CTASection'

export function Home() {
  return (
    <>
      <PageMeta titleKey="meta.home.title" descKey="meta.home.desc" />
      <Hero />
      <FeatureGrid />
      <CTASection />
    </>
  )
}
