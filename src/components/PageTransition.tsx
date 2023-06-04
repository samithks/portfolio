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

/**
 * This is a TypeScript React component that wraps its children in a motion section with page transition animations.
 *
 * @param - This is a functional component called `PageTransition` that takes in a single parameter as an object with a
 *   property called `children`. The `children` property is of type `React.ReactNode`, which means it can be any valid
 *   React node, such as a component, an element, or a string.
 * @returns A React functional component that takes in a `children` prop of type `React.ReactNode` and returns a
 *   `motion.section` component from the `framer-motion` library. The `motion.section` component has `initial`,
 *   `animate`, and `exit` animation states defined by the `pageVariants` object, and a `style` prop that sets the
 *   height of the section to 100
 */
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
