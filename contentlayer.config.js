import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string' },
    image: { type: 'string' },
  },
}))

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  url: {
    type: 'string',
    resolve: (blog) => `/blog/${blog._raw.flattenedPath}`,
  },
  structuredData: {
    type: 'object',
    resolve: (blog) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: blog.title,
      datePublished: blog.publishedAt,
      dateModified: blog.publishedAt,
      description: blog.summary,
      author: {
        '@type': 'Person',
        name: 'Samith K S',
      },
    }),
  },
}

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.{md,mdx}`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the blog',
      required: true,
    },
    shortTitle: {
      type: 'string',
      description: 'The title of the blog list',
      required: true,
    },
    publishedAt: {
      type: 'date',
      description: 'The date of the blog',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    category: { type: 'string', required: true },
    author: {
      type: 'nested',
      of: Author,
    },
    image: {
      type: 'string',
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          keepBackground: true,
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word']
          },
          filterMetaString: (string) => string.replace(/filename="[^"]*"/, ''),
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})
