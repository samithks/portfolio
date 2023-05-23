import type { SVGIconProps } from '@/components/_icon/SVGIcon'

import Link from 'next/link'

import { SVGIcon } from '@/components/_icon/SVGIcon'

interface IPage {
  title: string
  description: string
  icon: SVGIconProps['name']
  to: string
}

const pages: IPage[] = [
  {
    title: 'Blog',
    description: 'My thoughts on various topics',
    icon: 'blog',
    to: '/blog',
  },
  {
    title: 'Projects',
    description: 'My projects',
    icon: 'project',
    to: '/project',
  },
  {
    title: 'Contact',
    description: 'Contact me',
    icon: 'contact',
    to: '/contact',
  },
  {
    title: 'About Me',
    description: 'About me',
    icon: 'aboutMe',
    to: '/about',
  },
]
/** This component renders a page as a card. */
const PageCard: React.FC<IPage> = ({ title, description, icon, to }) => {
  return (
    <Link href={{ pathname: to }} className="card">
      <div className="flex flex-row gap-x-2">
        <SVGIcon name={icon} fontSize={'2em'} className="stroke-2" />
        <h2 className="text-md mb-2 truncate font-medium leading-snug tracking-tight">{title}</h2>
      </div>
      <p className="truncate text-sm font-normal text-black/50 dark:text-gray-400">{description}</p>
    </Link>
  )
}

/** This component renders a list of pages as cards. */
const ThePagesSection: React.FC<{ pages: IPage[] }> = ({ pages }) => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-10">
      {pages.map((page) => {
        return (
          <div className="col-span-1" key={page.title}>
            <PageCard title={page.title} description={page.description} icon={page.icon} to={page.to} />
          </div>
        )
      })}
    </div>
  )
}

/**
 * This is the main entry point of our app. It renders a single component, TheApp, which is the root component of our
 * app.
 */
const ThePageSection: React.FC = () => {
  return (
    <section id="pages" className="mx-5 flex flex-col gap-y-3 px-5">
      <div className="flex flex-none">
        <h2 className="section-heading">pages</h2>
      </div>
      <ThePagesSection pages={pages} />
    </section>
  )
}

export default ThePageSection
