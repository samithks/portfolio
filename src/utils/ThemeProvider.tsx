'use client'

import { useEffect, useMemo, useState } from 'react'

import { ThemeContext, type Theme } from '@/utils/ThemeContext'

/** This is a React component that provides the theme context to the application. */
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light') // Example initial theme state

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    setTheme(systemTheme)
  }, [])

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
