import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact me',
}

export default function Contact() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Contatc Me</h1>
    </section>
  )
}
