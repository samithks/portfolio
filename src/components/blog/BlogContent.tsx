'use client'

import type { MDXComponents } from 'mdx/types'

import { memo } from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import NextImage from 'next/image'
import { notFound } from 'next/navigation'
import NoSSR from '@/utils/NoSSR'
import Link from 'next/link'
import { UrlObject } from 'url'

interface BlogContentProps {
  params: {
    title: string
    publishedAt: string
    formattedDate: string
    code: string
  }
}


// Define your custom MDX components.
const components: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as unknown as UrlObject}>{children}</Link>,
}

/* This component renders the content of a blog post. **/
const BlogContent: React.FC<BlogContentProps> = ({ params }) => {


  if (!params?.code) notFound()

  const MDXContent = useMDXComponent(params.code)

  return (
    <article className="lg:prose-md prose mx-auto py-8 dark:prose-invert md:prose-lg prose-headings:underline prose-p:text-justify prose-a:text-blue-600">
      <div className="mb-8 text-center">
        <h1 className="max-w-[650px] text-3xl font-bold">{params?.title}</h1>
        <time dateTime={params?.publishedAt} className="mb-1 text-xs text-gray-600">
          {params?.formattedDate}
        </time>
      </div>
      <NoSSR>
        <MDXContent components={components} />
      </NoSSR>
    </article>
  )
}

export default memo(BlogContent)
