import type { BrandIconProps } from '@/components/icon/BrandIcon'

import { FaEllipsisH } from 'react-icons/fa'
import avatar from '~/images/avatar.png'

import { Roboto_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import { BrandIcon } from '@/components/icon/BrandIcon'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

const homeHeroIcons = ['typescript', 'nodejs', 'javascript'] as BrandIconProps['name'][]

/** This is a React functional component that renders an ellipsis button with a link to a specific section on the page. */
const HomeEllipsisButton: React.FC = () => {
  return (
    <div className="rounded-md border px-3 py-2 shadow-md transition-transform duration-300 ease-in-out hover:scale-110 dark:border-gray-200 dark:bg-black/5 dark:shadow-white/10">
      <Link href={{ hash: '#tech_stack' }}>
        <FaEllipsisH fontSize="1.5em" className="stroke-2" />
      </Link>
    </div>
  )
}

/**
 * This code renders the home page's technology icons. It creates a new HomeTechIcons component for each technology
 * icon, and passes the name of the icon as a prop.
 */
const HomeTechIcons: React.FC<{ name: BrandIconProps['name']; key: string }> = ({ name, key }) => {
  return (
    <div
      className="rounded-md border px-3 py-2 shadow-md transition-transform duration-300 ease-in-out hover:scale-110 dark:border-gray-200 dark:bg-black/5 dark:shadow-white/10"
      key={key}
    >
      <BrandIcon name={name} fontSize="1.5em" />
    </div>
  )
}

/**
 * The HomeIcons component displays a list of icons. It is used in the HomeScreen component to show the tech stack
 * icons.
 */
const HomeIcons: React.FC<{ iconsArray: BrandIconProps['name'][] }> = ({ iconsArray }) => {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2">
      {iconsArray.map((icon) => (
        <HomeTechIcons name={icon} key={icon} />
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
      <h1 className={`${robotoMono.className} text-4xl font-medium leading-relaxed`}>Full-stack web developer</h1>
      <HomeIcons iconsArray={homeHeroIcons} />
    </section>
  )
}

export default HomeHero
