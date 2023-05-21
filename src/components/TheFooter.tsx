import type { UrlObject } from 'node:url'

import { DOMAIN_NAME } from '@/constant'

import Link from 'next/link'

const footerReference: UrlObject = {
  pathname: '/',
  protocol: 'https:',
  hostname: DOMAIN_NAME,
}

/** This is a React functional component that renders a link to the home page. */
const FooterContent: React.FC<{ domainAddress: UrlObject }> = ({ domainAddress }) => {
  return (
    <div className="flex justify-center">
      <span className="text-center text-sm dark:text-gray-400">
        © 2023 <Link href={domainAddress}>Samith K S</Link>. All Rights Reserved.
      </span>
    </div>
  )
}

/** A React functional component called TheFooter, which returns a footer element in which the FooterContent */
export default function TheFooter() {
  return (
    <footer>
      <div className="w-full pb-2 pt-6">
        <FooterContent domainAddress={footerReference} />
      </div>
    </footer>
  )
}
