'use client'

import { useState } from 'react'
import { TbGitPullRequestDraft } from 'react-icons/tb'

import Link from 'next/link'

export default function TheNavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav>
      <div className="w-full pt-6">
        <div className="flex flex-row items-center justify-between">
          {/* Logo */}
          <div className=" h-10 w-10 flex-shrink-0 rounded-md bg-gray-100 ring-2 ring-black ring-opacity-5 transition duration-300 ease-in-out hover:scale-105">
            <Link href="/" className="items-center">
              <TbGitPullRequestDraft color="black" fontSize="2em" />
            </Link>
          </div>

          {/* Hamburger menu */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              className="transition duration-300 ease-in-out hover:scale-105 focus:outline-none"
            >
              <svg
                className="h-10 w-8"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown menu */}
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="py-3">
            <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="block rounded-md px-3 py-2 text-base font-medium">
              About
            </Link>
            <Link href="/contact" className="block rounded-md px-3 py-2 text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
