import type { Metadata } from 'next'
import TikTokShopClient from './tiktok-shop-client'
import { ServiceJsonLd } from '@/components/service-json-ld'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'TikTok Shop Management',
  description:
    'TikTok Shop setup, creator partnerships, live selling, affiliate management, and ads — we help brands win on the fastest-growing commerce channel.',
  alternates: { canonical: '/services/tiktok-shop/' },
  openGraph: {
    title: 'TikTok Shop Management | Ace Studios',
    description:
      'TikTok Shop setup, creator partnerships, live selling, affiliate management, and ads.',
    url: '/services/tiktok-shop/',
    type: 'website',
    images: ['/marketing-service.jpg'],
  },
}

export default function TikTokShopPage() {
  return (
    <>
      <ServiceJsonLd
        name="TikTok Shop Management"
        description={metadata.description as string}
        url="/services/tiktok-shop/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'TikTok Shop Management', url: '/services/tiktok-shop/' },
        ]}
      />
      <TikTokShopClient />
    </>
  )
}
