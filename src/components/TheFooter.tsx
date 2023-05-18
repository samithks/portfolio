import type { UrlObject } from 'node:url'

import Link from 'next/link'
import { DOMAIN_NAME } from '@/constant'

const footerReference: UrlObject = {
  pathname: '/',
  protocol: 'https:',
  hostname: DOMAIN_NAME,
}

export default function TheFooter() {
  return (
    <footer>
      <div className="w-full pb-2 pt-4">
        <div className="flex justify-center">
          <span className="text-center text-sm dark:text-gray-400">
            © 2023 <Link href={footerReference}>Samith K S</Link>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
