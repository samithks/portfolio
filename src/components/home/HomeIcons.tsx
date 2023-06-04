'use client'

import type { BrandIconProps } from '@/components/_icon/BrandIcon'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BrandIcon } from '@/components/_icon/BrandIcon'
import HomeEllipsisButton from '@/components/_button/HomeEllipsisButton'

const container = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
}

/**
 * The HomeIcons component displays a list of icons. It is used in the HomeScreen component to show the tech stack
 * icons.
 */
const HomeIcons: React.FC<{ iconsArray: BrandIconProps['name'][] }> = ({ iconsArray }) => {
  return (
    <motion.div className="flex flex-wrap gap-x-3 gap-y-2" variants={container} initial="hidden" animate="show">
      {iconsArray.map((icon) => (
        <motion.div
          className="rounded-md border border-slate-200 bg-white px-3 py-2 shadow-md transition-transform duration-300 ease-in-out hover:scale-110 dark:border-gray-200 dark:bg-black/5 dark:shadow-white/10"
          key={icon}
          variants={item}
        >
          <BrandIcon name={icon} fontSize="1.5em" />
        </motion.div>
      ))}
      <motion.div variants={item}>
        <HomeEllipsisButton />
      </motion.div>
    </motion.div>
  )
}

export default HomeIcons
