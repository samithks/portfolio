'use client'

import Link from 'next/link'
import { useCallback, useState } from 'react'
import Accordion from '@/components/Accordion'
import { motion } from 'framer-motion'

interface IAchievement {
  id: string
  title: string
}

export interface InsightCardProps {
  id: string
  title: string
  organization?: string
  university?: string
  year: string
  link: string
  achievements: IAchievement[]
}

/** This is a TypeScript React functional component that renders a card. */
export const InsightCard: React.FC<Omit<InsightCardProps, 'id'>> = ({ title, organization, year, achievements, link }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const toggleExpansion = useCallback(() => {
    setIsExpanded((isShowing) => !isShowing)
  }, [])

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      transition={{ ease: 'easeIn', duration: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex cursor-pointer flex-row flex-wrap justify-between">
        <button
          className="text-md mb-2 font-medium leading-snug tracking-tight text-black dark:text-white"
          onClick={toggleExpansion}
        >
          {title}
        </button>
        <h4 className="cursor-text truncate text-xs font-light text-black/50 dark:text-white/50">{year}</h4>
      </div>
      <Link href={{ pathname: link }} className="text-sm font-medium text-black/50 dark:text-gray-400" target="_blank">
        {organization}
      </Link>
      <Accordion body={achievements} isExpanded={isExpanded} />
    </motion.div>
  )
}
