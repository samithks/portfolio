import '@/styles/globals.scss'

import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import TheNavBar from '@/components/TheNavBar'

const inter = Inter({ subsets: ['latin'] })

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <TheNavBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
