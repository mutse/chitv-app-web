import { Hero } from '../components/Hero'
import { PageMeta } from '../components/PageMeta'
import { FeatureGrid } from '../components/FeatureGrid'
import { FaqSection } from '../components/FaqSection'

export function Home() {
  return (
    <>
      <PageMeta titleKey="meta.home.title" descKey="meta.home.desc" />
      <Hero />
      <FeatureGrid />
      <FaqSection />
    </>
  )
}
