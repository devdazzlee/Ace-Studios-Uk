import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/config/config'
import { blogPosts } from '@/lib/blog-data'
import { works } from '@/lib/work-data'

export const dynamic = 'force-static'

const SERVICE_SLUGS = [
  'shopify',
  'website-development',
  'design',
  'merchandising',
  'erp-pos-systems',
  'ecommerce',
  'online-business-setup',
  'digital-marketing',
  'mobile-app-development',
  'custom-software-development',
  'tiktok-shop',
  'amazon-fba-fbm',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/faq/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/services/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/work/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/services/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const workRoutes: MetadataRoute.Sitemap = works.map((work) => ({
    url: `${SITE_URL}/work/${work.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...workRoutes]
}
