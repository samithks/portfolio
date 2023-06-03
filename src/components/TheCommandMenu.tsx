'use client'

import 'react-cmdk/dist/cmdk.css'

import type { JsonStructure } from 'react-cmdk'
import { Tooltip } from 'react-tooltip'

import { useCallback, useEffect, useState } from 'react'
import CommandPalette, { filterItems, getItemIndex } from 'react-cmdk'
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser, AiOutlineProject } from 'react-icons/ai'
import { TbBrandBlogger, TbCertificate, TbStack } from 'react-icons/tb'

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
        children: 'Blog',
        href: '/blogs',
        icon: TbBrandBlogger,
      },
      {
        id: '3',
        children: 'Projects',
        href: '/project',
        icon: AiOutlineProject,
      },
      {
        id: '4',
        children: 'Contact',
        href: '/contact',
        icon: AiOutlineUser,
      },
      {
        id: '5',
        children: 'About',
        href: '/about',
        icon: AiOutlineSearch,
      },
    ],
  },
  {
    heading: 'Section',
    id: 'section',
    items: [
      {
        id: '5',
        children: 'Experience',
        href: '/#experience',
        icon: TbCertificate,
      },
      {
        id: '6',
        children: 'Tech Stack',
        href: '/#tech_stack',
        icon: TbStack,
      },
    ],
  },
]

interface TheNavIconProps {
  toggle: () => void
}

/**
 * This is a React functional component that renders a hamburger icon button with a toggle function.
 *
 * @param {TheNavIconProps} props The props for this component.
 * @returns A React functional component that renders a button with a hamburger icon. The component takes a prop called
 *   `toggle` which is a function that will be called when the button is clicked. The function will toggle the command
 */
const TheNavIcon: React.FC<TheNavIconProps> = ({ toggle }: TheNavIconProps) => {
  return (
    <>
      <button
        type="button"
        onClick={toggle}
        data-tooltip-id="command_icon"
        data-tooltip-content="cmd+k/ctrl+k"
        className="transition duration-300 ease-in-out hover:scale-105"
      >
        {/* Command icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 14 14">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.75 10A1.75 1.75 0 1 1 10 11.75v-9.5A1.75 1.75 0 1 1 11.75 4h-9.5A1.75 1.75 0 1 1 4 2.25v9.5A1.75 1.75 0 1 1 2.25 10Z"
          />
        </svg>
        {/* Hamburger icon */}
        {/*  <svg
        className="h-10 w-8"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg> */}
      </button>
      <Tooltip id="command_icon" />
    </>
  )
}

/**
 * Component that renders a footer for the command palette menu. This code closes the menu when the escape key is
 * pressed.
 */
const TheMenuFooter: React.FC = () => {
  return (
    <div style={{ paddingInline: '1rem', paddingBlock: '0.75rem' }} className="px-4 py-3">
      <p className="inline-flex items-center justify-center gap-x-1 rounded-md text-xs font-light">
        <span className="font-medium">Esc</span> <span>to close</span>
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
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

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
      <TheNavIcon toggle={toggle} />
      <CommandPalette
        onChangeSearch={setQuery}
        onChangeOpen={setIsOpen}
        onChangeSelected={setSelectedIndex}
        search={query}
        isOpen={isOpen}
        selected={selectedIndex}
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
