import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact me',
}

/** Contact page */
export default function Contact() {
  return (
    <section>
      <h1 className="font-serif text-3xl font-bold">Contatc Me</h1>
    </section>
  )
}
