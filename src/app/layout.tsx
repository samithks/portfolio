import '@/styles/globals.scss'

import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
import { IBM_Plex_Mono } from 'next/font/google'

import TheFooter from '@/components/TheFooter'
import TheNavBar from '@/components/TheNavBar'

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Samith K S',
  description: 'Developer, Backend Developer, Fullstack',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: 'icons/favicon.ico',
  },
}

/** This is a React functional component that renders the root layout for the application. */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ibm_plex_mono.className} container px-4 dark:bg-black dark:text-white`}>
        <header>
          <TheNavBar />
        </header>
        <main className="min-h-screen pb-4">{children}</main>
        <TheFooter />
        <Analytics />
      </body>
    </html>
  )
}
