import { MetadataRoute } from 'next'

/**
 * This TypeScript function returns metadata for a robots.txt file with a user agent rule, sitemap URL, and host URL.
 *
 * @returns {MetadataRoute.Robots} Robots.txt configuration
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
    },
    sitemap: 'https://samithks.website/sitemap.xml',
    host: 'https://samithks.website',
  }
}
