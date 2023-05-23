// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import type { Blog } from 'contentlayer/generated'
import { allBlogs } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

/** This component renders a blog post as a card. */
function PostCard(blog: Blog) {
  const Content = getMDXComponent(blog.body.code)

  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={{ pathname: blog.url }} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {blog.title}
        </Link>
      </h2>
      <time dateTime={blog.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(blog.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm">
        <Content />
      </div>
    </div>
  )
}

/** The blogs page. */
export default function Blogs() {
  const posts = allBlogs
    .slice()
    .sort((a: { date: string }, b: { date: string }) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Blog</h1>
      {posts.map((post) => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>
  )
}
