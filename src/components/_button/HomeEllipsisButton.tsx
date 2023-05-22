'use client'

import Link from 'next/link'
import { useCallback } from 'react'
import { FaEllipsisH } from 'react-icons/fa'

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  // first prevent the default behavior
  e.preventDefault()
  // get the href and remove everything before the hash (#)
  const { href } = e.currentTarget
  const targetId = href.replace(/.*#/, '')
  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId)
  elem?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

/** This is a React functional component that renders an ellipsis button with a link to a specific section on the page. */
const HomeEllipsisButton: React.FC = () => {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleScroll(e), [])
  return (
    <div className="rounded-md border px-3 py-2 shadow-md transition-transform duration-300 ease-in-out hover:scale-110 dark:border-gray-200 dark:bg-black/5 dark:shadow-white/10">
      <Link href="/#tech_stack" scroll={false} onClick={handleClick} rel="noopener noreferrer">
        <FaEllipsisH fontSize="1.5em" className="stroke-2" />
      </Link>
    </div>
  )
}

export default HomeEllipsisButton
