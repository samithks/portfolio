'use client'

import { TbGitPullRequestDraft } from 'react-icons/tb'

import Link from 'next/link'

import TheCommandMenu from '@/components/TheCommandMenu'
import TheDarkMode from '@/components/TheDarkMode'

/** This is a React functional component that renders a logo with a link to the home page of the website. */
function TheLogo() {
  const currentMode = localStorage.getItem('darkMode') === 'true'
  return (
    <div className="h-12 w-12 flex-shrink-0 rounded-md bg-slate-700 ring-2 ring-black ring-opacity-5 transition duration-300 ease-in-out hover:scale-105 dark:bg-gray-100">
      <Link href="/" className="items-center">
        <TbGitPullRequestDraft fontSize="2.4em" stroke={currentMode ? 'black' : 'white'} />
      </Link>
    </div>
  )
}

/**
 * This is a TypeScript React component that renders a navigation bar with a logo and a command menu.
 *
 * @returns A React component that renders a navigation bar with a logo and a command menu.
 */
export default function TheNavBar() {
  return (
    <nav>
      <div className="w-full pb-4 pt-6">
        <div className="flex flex-row items-center justify-between">
          {/* Logo */}
          <TheLogo />
          {/* Command menu */}
          <div className="flex flex-row items-center gap-2">
            <TheCommandMenu />
            <TheDarkMode />
          </div>
        </div>
      </div>
    </nav>
  )
}
