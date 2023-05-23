import type { BrandIconProps } from '@/components/_icon/BrandIcon'

import avatar from '~/images/avatar.png'

import { Roboto_Mono } from 'next/font/google'
import Image from 'next/image'

import { BrandIcon } from '@/components/_icon/BrandIcon'
import HomeEllipsisButton from '@/components/_button/HomeEllipsisButton'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

const homeHeroIcons = ['typescript', 'nodejs', 'javascript'] as BrandIconProps['name'][]

/**
 * The HomeIcons component displays a list of icons. It is used in the HomeScreen component to show the tech stack
 * icons.
 */
const HomeIcons: React.FC<{ iconsArray: BrandIconProps['name'][] }> = ({ iconsArray }) => {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2">
      {iconsArray.map((icon) => (
        <div
          className="rounded-md border border-slate-200 bg-white px-3 py-2 shadow-md transition-transform duration-300 ease-in-out hover:scale-110 dark:border-gray-200 dark:bg-black/5 dark:shadow-white/10"
          key={icon}
        >
          <BrandIcon name={icon} fontSize="1.5em" />
        </div>
      ))}
      <HomeEllipsisButton />
    </div>
  )
}

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
      <Image src={avatar} className="w-44 rounded-full md:w-64 lg:w-72" alt="avatar" placeholder={'empty'} priority />
      <h1 className={`${robotoMono.className} text-4xl font-medium leading-relaxed sm:text-2xl md:text-4xl`}>
        Full-stack web developer
      </h1>
      <HomeIcons iconsArray={homeHeroIcons} />
    </section>
  )
}

export default HomeHero
