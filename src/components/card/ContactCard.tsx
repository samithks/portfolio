'use client'

import type { BrandIconProps } from '@/components/_icon/BrandIcon'
import { BrandIcon } from '@/components/_icon/BrandIcon'
import Link from 'next/link'
import { useCallback, useState } from 'react'

import { Tooltip } from 'react-tooltip'

export interface IContact {
  title: string
  description: string
  icon: BrandIconProps['name']
  to: string
}

/** This component renders a contact card. */
const ContactCard: React.FC<IContact> = ({ title, description, icon, to }) => {
  const [copyState, setCopyState] = useState<string>('Click to copy')

  /** This function copies the text to the clipboard. */
  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text)
    setCopyState('Copied!')
  }, [])

  /** This function copy content on click */
  const onClickCopy = () => copyToClipboard(to)

  return (
    <div className="card">
      <div className="flex flex-row items-center justify-between">
        <Link
          href={{ pathname: to }}
          className="flex flex-col"
          target="_blank"
          data-tooltip-id="contact_tip"
          data-tooltip-content="Open"
        >
          <h2 className="text-md mb-2 font-medium leading-snug tracking-tight">{title}</h2>
          <p className="line-clamp-3 text-sm font-normal text-black/50 dark:text-gray-400">{description}</p>
        </Link>
        <BrandIcon
          role="button"
          name={icon}
          fontSize={'2em'}
          fill="currentColor"
          onClick={onClickCopy}
          data-tooltip-id="contact_tip"
          data-tooltip-content={copyState}
        />
      </div>
      <Tooltip id="contact_tip" />
    </div>
  )
}

export default ContactCard
