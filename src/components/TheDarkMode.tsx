'use client'

import { useCallback, useEffect, useState } from 'react'
import { SVGIcon } from './_icon/SVGIcon'

/** TheDarkModeButton component */
const TheDarkModeButton: React.FC<{ toggle: () => void; mode: boolean }> = ({ toggle, mode }) => {
  return (
    <button type="button" onClick={toggle} className="transition duration-300 ease-in-out hover:scale-105">
      <SVGIcon name={mode ? 'moon' : 'sun'} fontSize={'2em'} fill="currentColor" />
    </button>
  )
}

/**
 * This is a React component that toggles between light and dark mode based on user preference stored in local storage.
 *
 * @returns TheDarkMode component is being returned, which renders a div containing TheDarkModeButton component.
 */
const TheDarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const switchMode = useCallback(() => {
    setDarkMode((mode) => !mode)
  }, [])

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark')
    } else {
      window.document.documentElement.classList.remove('dark')
    }
    // localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  // Switch dark mode based on system preference
  /* useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, []) */

  return <TheDarkModeButton toggle={switchMode} mode={darkMode} />
}

export default TheDarkMode
