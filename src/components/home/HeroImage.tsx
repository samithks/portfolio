'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import avatar from '~/images/avatar.png'
import Image from 'next/image'

const animationVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  spring: {
    type: 'spring',
    damping: 10,
    stiffness: 100,
  },
}
/**
 * The HomeImage component displays an image. It is used in the HomeHero component to show the avatar.
 *
 * @returns
 */
const HomeImage: React.FC = () => {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(true)
  }, [])

  return (
    <motion.div
      initial={animationVariants.initial}
      animate={animated ? animationVariants.animate : animationVariants.initial}
      transition={animationVariants.spring}
    >
      <Image src={avatar} className="w-44 rounded-full md:w-64 lg:w-72" alt="avatar" placeholder={'empty'} priority />
    </motion.div>
  )
}

export default HomeImage
