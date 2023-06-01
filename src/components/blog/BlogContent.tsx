'use client'

import { memo, useState, useEffect } from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface BlogContentProps {
  params: {
    title: string
    publishedAt: string
    formattedDate: string
    code: string
  }
}

/* This component renders the content of a blog post. **/
const BlogContent: React.FC<BlogContentProps> = memo(({ params }) => {
  const [showMDX, setShowMDX] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShowMDX(true)
    }
  }, [])

  const components = {
    Image,
  }

  if (!params?.code) notFound()

  const MDXContent = useMDXComponent(params.code)

  return showMDX ? (
    <article className="prose mx-auto max-w-xl py-8 dark:prose-invert">
      <div className="mb-8 text-center">
        <h1 className="max-w-[650px] text-3xl font-bold">{params?.title}</h1>
        <time dateTime={params?.publishedAt} className="mb-1 text-xs text-gray-600">
          {params?.formattedDate}
        </time>
      </div>
      <MDXContent components={components} />
    </article>
  ) : null
})

BlogContent.displayName = 'BlogContent'
export default BlogContent
