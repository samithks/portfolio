'use client'
import 'react-cmdk/dist/cmdk.css'

import type { IconType } from 'react-icons'

import CommandPalette, { filterItems, getItemIndex } from 'react-cmdk'

import { AiOutlineHome, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import { useEffect, useState } from 'react'

const commandOptions = [
  {
    heading: 'Pages',
    id: 'pages',
    items: [
      {
        id: '1',
        children: 'Home',
        href: '/',
        icon: AiOutlineHome,
      },
      {
        id: '2',
        children: 'About',
        href: '/about',
        icon: AiOutlineSearch,
      },
      {
        id: '3',
        children: 'Contact',
        href: '/contact',
        icon: AiOutlineUser,
      },
    ],
  },
]

/** This is a React component that renders a command menu with search functionality and keyboard shortcut support. */
const TheCommandMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const [query, setQuery] = useState<string>('')

  // Ctrl+k to open command =>
  useEffect(() => {
    function handleKeyDown(event?: KeyboardEvent) {
      if (event?.key === 'k' && (event?.metaKey || event?.ctrlKey)) {
        event?.preventDefault()
        event?.stopPropagation()
        setIsOpen((currentValue) => {
          return !currentValue
        })
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
  const filteredData = filterItems(commandOptions, query)

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
      <CommandPalette onChangeSearch={setQuery} onChangeOpen={setIsOpen} search={query} isOpen={isOpen}>
        {filteredData.length ? (
          filteredData.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem key={id} index={getItemIndex(filteredData, id)} {...rest} />
              ))}
            </CommandPalette.List>
          ))
        ) : (
          <CommandPalette.FreeSearchAction />
        )}
      </CommandPalette>
    </>
  )
}

export default TheCommandMenu
