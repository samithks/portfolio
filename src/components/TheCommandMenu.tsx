'use client'

import 'react-cmdk/dist/cmdk.css'

import type { JsonStructure } from 'react-cmdk'

import { useCallback, useEffect, useState } from 'react'
import CommandPalette, { filterItems, getItemIndex } from 'react-cmdk'
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'

const commandOptions: JsonStructure = [
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

interface TheHamburgerIconProps {
  toggle: () => void
}

/**
 * This is a React functional component that renders a hamburger icon button with a toggle function.
 *
 * @param {TheHamburgerIconProps} props The props for this component.
 * @returns A React functional component that renders a button with a hamburger icon. The component takes a prop called
 *   `toggle` which is a function that will be called when the button is clicked. The function will toggle the command
 */
const TheHamburgerIcon: React.FC<TheHamburgerIconProps> = ({ toggle }: TheHamburgerIconProps) => {
  return (
    <button type="button" onClick={toggle} className="transition duration-300 ease-in-out hover:scale-105">
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
  )
}

/**
 * Component that renders a footer for the command palette menu. This code closes the menu when the escape key is
 * pressed.
 */
const TheMenuFooter: React.FC = () => {
  return (
    <div style={{ paddingInline: '1rem', paddingBlock: '0.75rem' }} className="px-4 py-3">
      <p>
        <span className="inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium dark:bg-gray-800 dark:text-gray-500">
          Esc
        </span>{' '}
        to close
      </p>
    </div>
  )
}

/** This is a functional component called `TheCommandMenu` that renders a button and a command palette. */
const TheCommandMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  /** This is a function that toggles the state of the component. */
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])
  const [query, setQuery] = useState<string>('')

  /**
   * This is a `useEffect` hook that adds an event listener for the `keydown` event on the window object. This allows
   * the user to open and close the command palette by pressing `Ctrl/Cmd + k`.
   */
  useEffect(() => {
    /**
     * This function handles a keydown event and toggles the state of a component if the key pressed is 'k' and either
     * the meta or ctrl key is also pressed.
     */
    function handleKeyDown(event?: KeyboardEvent) {
      const { key, metaKey, ctrlKey } = event || {}
      if (key === 'k' && (metaKey || ctrlKey)) {
        event?.stopImmediatePropagation()
        setIsOpen((currentValue) => {
          return !currentValue
        })
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [])

  /** The filtered data according to the command line options and the query. */
  const filteredData = filterItems(commandOptions, query)

  return (
    <>
      <TheHamburgerIcon toggle={toggle} />
      <CommandPalette
        onChangeSearch={setQuery}
        onChangeOpen={setIsOpen}
        search={query}
        isOpen={isOpen}
        footer={<TheMenuFooter />}
      >
        {filteredData.length > 0 &&
          filteredData.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem key={id} index={getItemIndex(filteredData, id)} {...rest} />
              ))}
            </CommandPalette.List>
          ))}
      </CommandPalette>
    </>
  )
}

export default TheCommandMenu
