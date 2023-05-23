'use client'

import AboutHeroAnime from '@/components/hero/AboutHeroAnime'

/** The AboutHero function returns a React component that displays a hero section with the author's name and designation. */
const AboutHero: React.FC<{ name: string; designation: string }> = ({ name, designation }) => {
  return (
    <section id="about_hero" className="flex flex-col items-center gap-y-2">
      <AboutHeroAnime />
      <div className="w-4/5 text-center">
        <h1 className="text-4xl font-medium uppercase">{name}</h1>
        <h4 className="text-base uppercase text-black dark:text-gray-300">{designation}</h4>
      </div>
    </section>
  )
}

export default AboutHero
