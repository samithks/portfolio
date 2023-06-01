'use client'

import { memo } from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import NoSSR from '@/utils/NoSSR'

interface BlogContentProps {
  params: {
    title: string
    publishedAt: string
    formattedDate: string
    code: string
  }
}

/* This component renders the content of a blog post. **/
const BlogContent: React.FC<BlogContentProps> = ({ params }) => {
  const components = {
    Image,
  }

  if (!params?.code) notFound()

  const MDXContent = useMDXComponent(params.code)

  return (
    <article className="lg:prose-md prose mx-auto max-w-xl py-8 dark:prose-invert md:prose-lg prose-headings:underline prose-p:text-justify prose-a:text-blue-600">
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
