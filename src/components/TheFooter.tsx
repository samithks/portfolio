import type { UrlObject } from 'node:url'

import { Fragment } from 'react'

import Link from 'next/link'

export default function TheFooter() {
  const footerReference: UrlObject = {
    pathname: '/',
    protocol: 'https:',
    hostname: 'samithks.com',
  }
  return (
    <Fragment>
      <footer>
        <div className="bg-slate-400 w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className=" content-center xl:text-center text-sm sm:text-center dark:text-gray-400">
            © 2023{' '}
            <Link href={footerReference} className="hover:underline">
              Samith K S
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </Fragment>
  )
}
