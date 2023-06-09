import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
    },
    sitemap: 'https://samithks.website/sitemap.xml',
    host: 'https://samithks.website',
  }
}