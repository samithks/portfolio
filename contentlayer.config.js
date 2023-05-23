import { defineDocumentType, makeSource } from 'contentlayer/source-files'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  url: {
    type: 'string',
    resolve: (blog) => `/blogs/${blog._raw.flattenedPath}`,
  },
}

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the blog',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the blog',
      required: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: './src/blogs',
  documentTypes: [Blog],
})
