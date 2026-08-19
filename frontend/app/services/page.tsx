import type { Metadata } from 'next'
import ServicesClient from './services-client'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    "Explore Ace Studios' full range of services: web & Shopify development, e-commerce, Amazon FBA & FBM, TikTok Shop, digital marketing, brand design, and more.",
  alternates: { canonical: '/services/' },
  openGraph: {
    title: 'Services | Ace Studios',
    description:
      'Web & Shopify development, e-commerce, Amazon FBA & FBM, TikTok Shop, digital marketing, brand design, and more.',
    url: '/services/',
    type: 'website',
    images: ['/design-service.jpg'],
  },
}

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services/' }]} />
      <ServicesClient />
    </>
  )
}
