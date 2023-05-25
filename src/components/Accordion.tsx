import { AnimatePresence, motion } from 'framer-motion'

interface AccordionProps {
  isExpanded: boolean
  body: {
    id: string
    title: string
  }[]
}

/**
 * This is a TypeScript React component that renders an accordion with animated expand/collapse functionality.
 *
 * @param - The code defines a React functional component called `Accordion` that takes in two props: `isExpanded` and
 *   `body`.
 */
const Accordion: React.FC<AccordionProps> = ({ isExpanded, body }) => {
  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.ul
          layout
          initial="collapsed"
          animate="open"
          exit="collapsed"
          transition={{
            opacity: { duration: 0.3, ease: 'backInOut' },
            layout: { duration: 0.2, ease: 'backInOut' },
          }}
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
        >
          {body.map((data) => (
            <motion.li key={data.id} className="text-justify text-sm font-medium text-black/50 dark:text-gray-400">
              {data.title}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  )
}

export default Accordion
