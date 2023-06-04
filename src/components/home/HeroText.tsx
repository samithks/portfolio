'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

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
 * The HomeIcons component displays a list of icons. It is used in the HomeScreen component to show the tech stack
 * icons.
 */
const HeroText: React.FC = () => {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(true)
  }, [])
  return (
    <motion.h1
      className={`${robotoMono.className} text-center text-2xl font-medium leading-relaxed md:text-4xl`}
      initial={animationVariants.initial}
      animate={animated ? animationVariants.animate : animationVariants.initial}
      transition={animationVariants.spring}
    >
      Full-stack web developer
    </motion.h1>
  )
}

export default HeroText
