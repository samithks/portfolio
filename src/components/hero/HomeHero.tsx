import Image from 'next/image'
import type { BrandIconProps } from '@/components/icon/Brand'
import { BrandIcon } from '@/components/icon/Brand'
import { FaEllipsisH } from 'react-icons/fa'
import Link from 'next/link'

const homeHeroIcons = ['typescript', 'nodejs', 'javascript'] as BrandIconProps['name'][]

const HomeHero: React.FC = () => {
  return (
    <>
      <Image src="/images/avatar.png" className="rounded-full" width={300} height={300} alt="avatar" />
      <h1 className="text-4xl font-semibold leading-normal">Full-stack web developer</h1>
      <div className="flex flex-wrap gap-x-3 gap-y-2">
        {homeHeroIcons.map((icon) => (
          <div className="rounded-md border-2 border-slate-700 px-3 py-2" key={icon}>
            <BrandIcon name={icon} fontSize="1.5em" />
          </div>
        ))}
        <div className="rounded-md border-2 border-slate-700 px-3 py-2">
          <Link href={{ hash: '#technologies' }}>
            <FaEllipsisH fontSize="1.5em" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default HomeHero
