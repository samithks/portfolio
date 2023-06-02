'use client'

import type { BrandIconProps } from '@/components/_icon/BrandIcon'

import { BrandIcon } from '@/components/_icon/BrandIcon'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { SVGIcon } from '@/components/_icon/SVGIcon'

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
  const TOTAL_STAR = 5
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStar = TOTAL_STAR - (fullStars + Number(hasHalfStar))
  const hasEmptyStar = emptyStar > 0

  /** This function renders the full stars of a technology card. */
  const renderFullStars = () => {
    const stars = []
    for (let i = 0; i < fullStars; i++) {
      stars.push(<SVGIcon key={i} className="h-auto w-5 fill-green-600" name={'star'} />)
    }
    return stars
  }

  /** This function renders the half star of a technology card. */
  const renderHalfStar = () => {
    return <SVGIcon className="h-auto w-5 fill-green-600" name={'halfStar'} />
  }

  const renderEmptyStar = () => {
    const stars = []
    for (let i = 0; i < emptyStar; i++) {
      stars.push(<SVGIcon key={i} className="h-auto w-5 stroke-green-600" name={'star'} />)
    }
    return stars
  }

  return (
    <div className="flex flex-row gap-x-1">
      {renderFullStars()}
      {hasHalfStar && renderHalfStar()}
      {hasEmptyStar && renderEmptyStar()}
    </div>
  )
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

  /** This component renders a project card. */
  const handleClick = () => {
    toggleExpansion()
  }

  /*This function is used to toggle the expansion of the accordion when the user presses the Enter key. */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      toggleExpansion()
    }
  }
  return (
    <div
      className="block space-y-2 rounded-md border border-slate-200 bg-white p-6 pt-5 shadow-md transition duration-300 hover:bg-slate-100 hover:shadow-lg dark:border-gray-200 dark:bg-black/5 dark:shadow-white/10 dark:hover:bg-white/10 dark:hover:shadow-lg dark:hover:shadow-white/20 mx-1 mb-1"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="flex cursor-pointer flex-row gap-x-2">
        <div className="w-1/6">
          <BrandIcon name={icon} fontSize={'2em'} className="stroke-2" />
        </div>
        <div className="flex w-5/6 justify-start items-center">
          <h2 className="text-xs text-left font-medium">{title}</h2>
        </div>
      </div>
      <TechAccordion isExpanded={isExpanded} rating={rating} />
    </div>
  )
}

export default TechCard
