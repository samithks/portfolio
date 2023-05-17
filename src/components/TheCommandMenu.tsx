'use client'

import type { IconType } from 'react-icons'

import { Command, CommandInput, CommandList, CommandOption } from 'superkey'

import { AiOutlineHome, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import DynamicIcon from './DynamicIcon'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Route } from 'next'

interface ICommandOptions {
  id: number
  name: string
  pagePath: Route<string>
  icon: IconType
  shortcut: string[]
}

interface Props {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const commandOptions: ICommandOptions[] = [
  {
    id: 1,
    name: 'Home',
    pagePath: '/',
    icon: AiOutlineHome,
    shortcut: ['h', 'o'],
  },
  {
    id: 2,
    name: 'About',
    pagePath: '/about',
    icon: AiOutlineSearch,
    shortcut: ['a', 'b'],
  },
  {
    id: 3,
    name: 'Contact',
    pagePath: '/contact',
    icon: AiOutlineUser,
    shortcut: ['c', 'o'],
  },
]

/** This is a React component that renders a command menu with search functionality and keyboard shortcut support. */
const TheCommandMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const [query, setQuery] = useState<string>('')
  const router = useRouter()

  // Ctrl+k to open command =>
  useEffect(() => {
    function handleKeyDown(event?: KeyboardEvent) {
      if (event?.key === 'k' && (event?.metaKey || event?.ctrlKey)) {
        event?.preventDefault()
        setIsOpen(!isOpen)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen, setIsOpen])

  // Filter data =>
  const filteredData = query
    ? commandOptions.filter((action) => action.name.toLowerCase().includes(query.toLowerCase()))
    : commandOptions

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const navigateToPage = (pagePath: Route<string>) => {
    router.push(pagePath)
  }
  return (
    <>
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
      <Command
        open={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
        afterLeave={() => {
          setQuery('')
        }}
        commandFunction={() => {
          setIsOpen(false)
        }}
      >
        <CommandInput onChange={handleQueryChange} />
        <CommandList>
          {filteredData.map((option) => {
            return (
              <CommandOption
                value={() => navigateToPage(option.pagePath)}
                key={option.id}
                activeClassName="bg-gray-100 dark:bg-zinc-700/25"
              >
                <div className="flex items-center justify-between space-x-1 py-1">
                  <div className="flex items-center space-x-1">
                    <div className="mr-2">
                      <DynamicIcon icon={option.icon} />
                    </div>
                    <h1>{option.name}</h1>
                  </div>
                  <div className="flex items-center space-x-1">
                    {option.shortcut.map((shortcut) => {
                      return (
                        <span
                          className="rounded-md border border-zinc-300 bg-zinc-100 p-2 text-xs lowercase dark:border-zinc-800 dark:bg-zinc-900 dark:text-gray-200"
                          key={shortcut}
                        >
                          {shortcut}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </CommandOption>
            )
          })}
        </CommandList>
      </Command>
    </>
  )
}

export default TheCommandMenu
