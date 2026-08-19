import type { Metadata } from 'next'
import WorkClient from './work-client'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    "Case studies and results from brands we've helped grow — Shopify builds, Amazon scaling, brand design, and digital marketing campaigns.",
  alternates: { canonical: '/work/' },
  openGraph: {
    title: 'Our Work | Ace Studios',
    description:
      "Case studies and results from brands we've helped grow across Shopify, Amazon, brand design, and marketing.",
    url: '/work/',
    type: 'website',
    images: ['/hero-image.jpg'],
  },
}

export default function WorkPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Work', url: '/work/' }]} />
      <WorkClient />
    </>
  )
}
