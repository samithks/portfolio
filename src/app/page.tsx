import TheInsightSection from '@/components/TheInsightSection'
import ThePageSection from '@/components/ThePageSection'
import TheTechSection from '@/components/TheTechSection'
import HomeHero from '@/components/hero/HomeHero'

/** Home page */
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mb-10 space-y-20">
        <HomeHero />
        <ThePageSection />
        <TheInsightSection />
        <TheTechSection />
      </div>
    </main>
  )
}
