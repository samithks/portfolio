import type { Metadata } from 'next'

import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import type { Blog } from 'contentlayer/generated'
import { allBlogs } from 'contentlayer/generated'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
}

/** This component renders a blog post as a card. */
function BlogCard(blog: Blog) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={{ pathname: blog.url }} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {blog.title}
        </Link>
      </h2>
      <time dateTime={blog.publishedAt} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
      </time>
      <div className="text-justify text-sm">{blog.description}</div>
    </div>
  )
}

/** The blogs page. */
export default function Blogs() {
  const posts = allBlogs
    .slice()
    .sort((a: { publishedAt: string }, b: { publishedAt: string }) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    )

  return (
    <div className="prose mx-auto max-w-xl py-8 dark:prose-invert">
      <h1 className="mb-8 text-center text-2xl font-black">Blog</h1>
      {posts.map((post) => (
        <BlogCard key={post._id} {...post} />
      ))}
    </div>
  )
}
