import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About me',
}

export default function About() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
    </section>
  )
}
