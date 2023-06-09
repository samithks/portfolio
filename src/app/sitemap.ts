import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = allBlogs.map((blog) => ({
    url: `https://samithks.website/blog/${blog._raw.flattenedPath}`,
    lastModified: blog.publishedAt,
  }))

  const routes = ['', '/about', '/blog', '/project', '/contact'].map((route) => ({
    url: `https://samithks.website${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
