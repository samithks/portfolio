import type { Metadata } from 'next'
import type { Contact } from '@prisma/client'

import type { BrandIconProps } from '@/components/_icon/BrandIcon'

import ContactCard from '@/components/card/ContactCard'
import { getContact } from '@/db/query'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact me',
}

/** This component renders a list of contact as cards. */
const TheContactSection: React.FC<{ contacts: Contact[] }> = ({ contacts }) => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-10">
      {contacts.map((contact) => {
        return (
          <div className="col-span-2 md:col-span-1" key={contact.title}>
            <ContactCard
              title={contact.title}
              description={contact.description}
              icon={contact.icon as BrandIconProps['name']}
              to={contact.link}
            />
          </div>
        )
      })}
    </div>
  )
}

/** Contact page */
export default async function ContactPage() {
  const contacts = await getContact()

  return (
    <div className="mb-10 space-y-20">
      <section id="Heading" className="flex flex-col gap-y-3">
        <div id="contact_heading">
          <h1 className="font-serif text-4xl font-medium">Contact</h1>
        </div>
        <div id="contact_header_description">
          <p className="text-sm dark:text-gray-400">If you have any questions please feel free to contact</p>
        </div>
      </section>
      <section id="Contact" className="mt-10">
        <TheContactSection contacts={contacts} />
      </section>
    </div>
  )
}
