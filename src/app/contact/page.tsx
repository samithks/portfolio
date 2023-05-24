import type { BrandIconProps } from '@/components/_icon/BrandIcon'
import { BrandIcon } from '@/components/_icon/BrandIcon'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact me',
}

interface IContact {
  title: string
  description: string
  icon: BrandIconProps['name']
  to: string
}

const contacts: IContact[] = [
  {
    title: 'Email',
    description: 'Send me an email',
    icon: 'email',
    to: 'mailto:samithsarasan@gmail.com',
  },
  {
    title: 'LinkedIn',
    description: 'Connect with me on LinkedIn',
    icon: 'linkedin',
    to: 'https://www.linkedin.com/in/samithks/',
  },
  {
    title: 'GitHub',
    description: 'Follow me on GitHub',
    icon: 'github',
    to: 'https://github.com/samithks',
  },
]

/** This component renders a contact card. */
const ContactCard: React.FC<IContact> = ({ title, description, icon, to }) => {
  return (
    <Link href={{ pathname: to }} className="card" target="_blank">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-md mb-2 font-medium leading-snug tracking-tight text-black dark:text-white">{title}</h2>
          <p className="line-clamp-3 text-sm font-normal text-black/50 dark:text-gray-400">{description}</p>
        </div>
        <BrandIcon name={icon} fontSize={'2em'} fill="currentColor" />
      </div>
    </Link>
  )
}

/** This component renders a list of contact as cards. */
const TheContactSection: React.FC<{ data: IContact[] }> = ({ data }) => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-10">
      {data.map((page) => {
        return (
          <div className="col-span-2 md:col-span-1" key={page.title}>
            <ContactCard title={page.title} description={page.description} icon={page.icon} to={page.to} />
          </div>
        )
      })}
    </div>
  )
}

/** Contact page */
export default function Contact() {
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
        <TheContactSection data={contacts} />
      </section>
    </div>
  )
}
