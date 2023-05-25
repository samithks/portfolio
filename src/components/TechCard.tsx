'use client'

import type { BrandIconProps } from '@/components/_icon/BrandIcon'

import { BrandIcon } from '@/components/_icon/BrandIcon'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'

export interface ITechnology {
  title: string
  icon: BrandIconProps['name']
  rating: number
}

interface TechAccordionProps {
  isExpanded: boolean
  rating: number
}

/** This component renders the rating of a technology card. */
const TechRatings: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = []
  for (let i = 0; i < rating; i++) {
    stars.push(
      <span key={i} className="text-2xl text-green-500">
        ★
      </span>
    )
  }
  return <>{stars}</>
}

/** This component renders the accordion of a technology card. */
const TechAccordion: React.FC<TechAccordionProps> = ({ isExpanded, rating }) => {
  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          className="flex flex-row gap-x-1"
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
          <TechRatings rating={rating} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/** This is a React functional component that renders a technology card with a title and an icon */
const TechCard: React.FC<ITechnology> = ({ title, icon, rating }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const toggleExpansion = useCallback(() => {
    setIsExpanded((isShowing) => !isShowing)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      toggleExpansion()
    }
  }
  return (
    <div
      className="block space-y-2 rounded-md border border-slate-200 bg-white p-6 pt-5 shadow-md transition duration-300 hover:bg-slate-100 hover:shadow-lg dark:border-gray-200 dark:bg-black/5 dark:shadow-white/10 dark:hover:bg-white/10 dark:hover:shadow-lg dark:hover:shadow-white/20"
      role="button"
      tabIndex={0}
      onClick={toggleExpansion}
      onKeyDown={handleKeyDown}
    >
      <div className="flex cursor-pointer flex-row gap-x-2">
        <BrandIcon name={icon} fontSize={'2em'} className="stroke-2" />
        <h2 className="mb-2 text-sm font-medium leading-snug tracking-tight text-black dark:text-white">{title}</h2>
      </div>
      <TechAccordion isExpanded={isExpanded} rating={rating} />
    </div>
  )
}

export default TechCard

{
  /* <div className="flex justify-center items-center bg-white p-8 shadow-lg shadow-slate-200 rounded-lg w-auto space-x-1 lg:space-x-2">
    <button>
      <svg className="text-teal-400 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
      </svg>
    </button>

    <button>
      <svg className="text-teal-400 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
      </svg>
    </button>

    <button>
      <svg class="text-teal-400 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
      </svg>
    </button>

    <button>
      <svg className="text-teal-400 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"/>
      </svg>
    </button>

    <button class="mr-2">
      <svg class="text-teal-400 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"/>
      </svg>
    </button>

    <span className="text-slate-400 font-medium">
      3.5 out of 5 stars
    </span>
  </div>
   */
}
