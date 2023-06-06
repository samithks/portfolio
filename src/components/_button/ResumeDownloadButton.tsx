'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'


/** This is a React functional component that renders an ellipsis button with a link to a specific section on the page. */
const ResumeDownloadButton: React.FC = () => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link
        href={{ pathname: '/Samith_Lead_Engineer_CV.pdf' }}
        className="mb-2 mr-2 rounded-lg border border-gray-600 bg-[#d6dbdc] px-5 py-2.5 text-sm font-medium text-slate-700 dark:border-gray-600 dark:bg-black dark:text-white dark:hover:border-gray-600 dark:hover:bg-white/10 dark:focus:ring-gray-700"
        target="_blank"
        role="button"
      >
        Download CV
      </Link>
    </motion.div>
  )
}

export default ResumeDownloadButton
