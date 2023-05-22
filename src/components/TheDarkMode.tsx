import { useCallback, useEffect, useState } from 'react'
import { SVGIcon } from './_icon/SVGIcon'

const TheDarkModeButton: React.FC<{ toggle: () => void; mode: boolean }> = ({ toggle, mode }) => {
  return (
    <button type="button" onClick={toggle} className="transition duration-300 ease-in-out hover:scale-105">
      <SVGIcon name={mode ? 'moon' : 'sun'} fontSize={'2em'} fill={mode ? 'white' : 'black'} />
    </button>
  )
}

const TheDarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') === 'true')

  const switchMode = useCallback(() => {
    setDarkMode((mode) => !mode)
  }, [])

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark')
    } else {
      window.document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  return (
    <div>
      <TheDarkModeButton toggle={switchMode} mode={darkMode} />
    </div>
  )
}

export default TheDarkMode
