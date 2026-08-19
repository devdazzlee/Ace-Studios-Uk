import type { Metadata } from 'next'
import BlogClient from './blog-client'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on e-commerce, Amazon FBA, Shopify, digital marketing, and brand growth from the Ace Studios team.',
  alternates: { canonical: '/blog/' },
  openGraph: {
    title: 'Blog | Ace Studios',
    description:
      'Insights on e-commerce, Amazon FBA, Shopify, digital marketing, and brand growth.',
    url: '/blog/',
    type: 'website',
    images: ['/hero-image.jpg'],
  },
}

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog/' }]} />
      <BlogClient />
    </>
  )
}
