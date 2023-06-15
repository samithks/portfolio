'use client'

import { TbGitPullRequestDraft } from 'react-icons/tb'
import { Tooltip } from 'react-tooltip'

import Link from 'next/link'
import { motion } from 'framer-motion'

/** This is a React functional component that renders a logo with a link to the home page of the website. */
function TheLogo() {
  return (
    <div
      data-tooltip-id="logo_tip"
      data-tooltip-content="Home"
      className="h-12 w-12 flex-shrink-0 rounded-md bg-slate-700 ring-2 ring-black ring-opacity-5 transition duration-300 ease-in-out hover:scale-105 dark:bg-gray-100"
    >
      <motion.div whileTap={{ scale: 0.9 }}>
        <Link href="/" className="items-center" role='button' aria-roledescription='Home button'>
          <TbGitPullRequestDraft className="invert" fontSize="2.4em" stroke="currentColor" />
        </Link>
      </motion.div>
      <Tooltip id="logo_tip" />
    </div>
  )
}

export default TheLogo
