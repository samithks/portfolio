import HomeHero from '@/components/hero/HomeHero'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mb-10 space-y-24">
        <section id="hero" className="my-16 flex flex-col items-center justify-between gap-y-3 py-10">
          <HomeHero />
        </section>
        <section id="technologies"></section>
      </div>
    </main>
  )
}
