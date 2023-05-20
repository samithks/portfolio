import TheInsightSection from '@/components/TheInsight'
import ThePages from '@/components/ThePage'
import TheTechSection from '@/components/TheTechStack'
import HomeHero from '@/components/hero/HomeHero'

/** Home page */
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mb-10 space-y-20">
        <HomeHero />
        <ThePages />
        <TheInsightSection />
        <TheTechSection />
      </div>
    </main>
  )
}
