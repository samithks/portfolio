import { format, parseISO } from 'date-fns'
import { allBlogs } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

/** This function generates the static paths for a blog post. */
export const generateStaticParams = async () => allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }))

/** This function generates the metadata for a blog post. */
export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)
  if (!blog) throw new Error(`Blog not found for slug: ${params.slug}`)
  return { title: blog.title }
}

/** The blog post page. */
const BlogLayout = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)
  if (!blog) throw new Error(`Blog not found for slug: ${params.slug}`)

  const Content = getMDXComponent(blog.body.code)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={blog.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(blog.date), 'LLLL d, yyyy')}
        </time>
        <h1>{blog.title}</h1>
      </div>
      <Content />
    </article>
  )
}

export default BlogLayout
