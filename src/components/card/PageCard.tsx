'use client'
import type { SVGIconProps } from '@/components/_icon/SVGIcon'

import Link from 'next/link'

import { SVGIcon } from '@/components/_icon/SVGIcon'
import { motion } from 'framer-motion'

export interface IPage {
  title: string
  description: string
  icon: SVGIconProps['name']
  to: string
}

/** This component renders a page as a card. */
const PageCard: React.FC<IPage> = ({ title, description, icon, to }) => {
  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <Link href={{ pathname: to }} className="card">
        <div className="flex flex-row gap-x-2">
          <SVGIcon name={icon} fontSize={'2em'} className="stroke-2" />
          <h2 className="text-md mb-2 font-medium leading-snug tracking-tight">{title}</h2>
        </div>
        <p className="text-sm font-normal text-black/50 dark:text-gray-400">{description}</p>
      </Link>
    </motion.div>
  )
}

export default PageCard
