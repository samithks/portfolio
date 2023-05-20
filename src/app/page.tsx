import TheInsight from '@/components/TheInsight'
import ThePages from '@/components/ThePage'
import TheTechStack from '@/components/TheTechStack'
import HomeHero from '@/components/hero/HomeHero'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mb-10 space-y-24">
        <HomeHero />
        <ThePages />
        <TheInsight />
        <TheTechStack />
      </div>
    </main>
  )
}
