import TheInsightSection from '@/components/TheInsightSection'
import ThePageSection from '@/components/ThePageSection'
import TheTechSection from '@/components/TheTechSection'
import HomeHero from '@/components/home/HomeHero'

/** Home page */
export default function Home() {
  return (
    <div className="mb-10 space-y-20">
      <HomeHero />
      <ThePageSection />
      <TheInsightSection />
      <TheTechSection />
    </div>
  )
}
