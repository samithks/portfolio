import type { Metadata } from 'next'

import AboutHero from '@/components/hero/AboutHero'

export const metadata: Metadata = {
  title: 'About',
  description: 'About me',
}

/** About page */
export default function About() {
  return (
    <main>
      <AboutHero />
    </main>
  )
}
