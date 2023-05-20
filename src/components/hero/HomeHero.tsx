import Image from 'next/image'
import type { BrandIconProps } from '@/components/icon/BrandIcon'
import { BrandIcon } from '@/components/icon/BrandIcon'
import { FaEllipsisH } from 'react-icons/fa'
import Link from 'next/link'

const homeHeroIcons = ['typescript', 'nodejs', 'javascript'] as BrandIconProps['name'][]

const HomeHero: React.FC = () => {
  return (
    <section id="hero" className="mx-5 my-16 flex flex-col items-center justify-between gap-y-3 px-5 py-10">
      <Image src="/images/avatar.png" className="rounded-full" width={300} height={300} alt="avatar" />
      <h1 className="text-4xl font-semibold leading-normal">Full-stack web developer</h1>
      <div className="flex flex-wrap gap-x-3 gap-y-2">
        {homeHeroIcons.map((icon) => (
          <div
            className="rounded-md border px-3 py-2 shadow-md transition-transform duration-300 hover:scale-110 dark:border-gray-200 dark:bg-black/5 dark:shadow-white/10"
            key={icon}
          >
            <BrandIcon name={icon} fontSize="1.5em" />
          </div>
        ))}
        <div className="rounded-md border px-3 py-2 shadow-md transition-transform duration-300 hover:scale-110 dark:border-gray-200 dark:bg-black/5 dark:shadow-white/10">
          <Link href={{ hash: '#tech_stack' }}>
            <FaEllipsisH fontSize="1.5em" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
