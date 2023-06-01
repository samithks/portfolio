import type { Metadata } from 'next'

import { format, parseISO } from 'date-fns'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import BlogContent from '@/components/blog/BlogContent'

/** This function finds a blog post by its slug. */
const findBlogBySlug = (slug: string) => {
  return allBlogs.find((blog) => blog._raw.flattenedPath === slug)
}

/** This function generates the static paths for a blog post. */
export const generateStaticParams = async () => allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }))

/** This function generates the metadata for a blog post. */
export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const blog = findBlogBySlug(params.slug)
  if (!blog) throw new Error(`Blog not found for slug: ${params.slug}`)
  const { title, description } = blog
  return { title, description }
}

/** The blog post page. */
const BlogLayout = ({ params }: { params: { slug: string } }) => {
  const blog = findBlogBySlug(params.slug)
  // if (!blog) throw new Error(`Blog not found for slug: ${params.slug}`)
  // 404 if the post does not exist.
  if (!blog) notFound()

  const parsedDate = parseISO(blog.publishedAt)
  const formattedDate = format(parsedDate, 'LLLL d, yyyy')

  return (
    <section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blog.structuredData) }} />
      <BlogContent
        params={{
          title: blog.title,
          publishedAt: blog.publishedAt,
          formattedDate,
          code: blog.body.code,
        }}
      />
    </section>
  )
}

export default BlogLayout
