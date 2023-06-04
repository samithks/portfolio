'use client'

import { motion } from 'framer-motion'

const pageVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: 'spring',
      bounce: 0.5,
      mass: 1.2,
    },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.3,
    },
  },
}

export default function PageTransition({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <motion.section initial="initial" animate="animate" exit="exit" variants={pageVariants} style={{ height: '100%' }}>
      {children}
    </motion.section>
  )
}
