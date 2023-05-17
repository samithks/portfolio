'use client'

import type { IconType } from 'react-icons'

import { Command, CommandInput, CommandList, CommandOption } from 'superkey'

import { AiOutlineHome, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import DynamicIcon from './DynamicIcon'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface ICommandOptions {
  id: number
  name: string
  action: () => void
  icon: IconType
  shortcut: string[]
}

interface Props {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

/**
 * This is a TypeScript React component that renders a command menu with options that can be filtered by a search query.
 *
 * @param {Props} - - `isOpen`: a boolean value indicating whether the command menu is open or not
 * @returns The component `TheCommandMenu` is being returned, which renders a `Command` component with a search input
 *   and a list of command options. The command options are filtered based on the user's search query and are displayed
 *   with their respective icons, names, and shortcuts. When a command option is selected, it triggers the corresponding
 *   action, which navigates the user to a different page using the `router
 */
const TheCommandMenu = ({ isOpen, setIsOpen }: Props) => {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const commandOptions: ICommandOptions[] = [
    {
      id: 1,
      name: 'Home',
      action: () => router.push('/'),
      icon: AiOutlineHome,
      shortcut: ['h', 'o'],
    },
    {
      id: 2,
      name: 'About',
      action: () => router.push('/about'),
      icon: AiOutlineSearch,
      shortcut: ['a', 'b'],
    },
    {
      id: 3,
      name: 'Contact',
      action: () => router.push('/contact'),
      icon: AiOutlineUser,
      shortcut: ['c', 'o'],
    },
  ]
  // Filter data =>
  const filteredData = query
    ? commandOptions.filter((action) => action.name.toLowerCase().includes(query.toLowerCase()))
    : commandOptions
  return (
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
      <CommandInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value)
        }}
      />
      <CommandList>
        {filteredData.map((option) => {
          return (
            <CommandOption value={option.action} key={option.id} activeClassName="bg-gray-100 dark:bg-zinc-700/25">
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
  )
}

export default TheCommandMenu
