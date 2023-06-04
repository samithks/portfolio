import type { BrandIconProps } from '@/components/_icon/BrandIcon'

import HomeIcons from '@/components/home/HomeIcons'
import HeroImage from '@/components/home/HeroImage'
import HeroText from '@/components/home/HeroText'

const homeHeroIcons = ['typescript', 'nodejs', 'javascript'] as BrandIconProps['name'][]

/**
 * The HomeHero function returns a section with an image, a heading, and icons for a full-stack web developer.
 *
 * @returns A React functional component called HomeHero, which returns a section element in which the Image component
 *   displays an image file specified by the avatar variable, and the HomeIcons component displays a set of icons
 *   specified by the homeHeroIcons array.
 */
const HomeHero: React.FC = () => {
  return (
    <section id="hero" className="mx-5 my-16 flex flex-col items-center justify-between gap-y-3 px-5">
      <HeroImage />
      <HeroText />
      <HomeIcons iconsArray={homeHeroIcons} />
    </section>
  )
}

export default HomeHero
