import type { Metadata } from 'next'
import AmazonFbaFbmClient from './amazon-fba-fbm-client'
import { ServiceJsonLd } from '@/components/service-json-ld'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'Amazon FBA & FBM Services',
  description:
    'Amazon listing optimization, advertising, brand registry, and inventory management for sellers scaling on FBA and FBM.',
  alternates: { canonical: '/services/amazon-fba-fbm/' },
  openGraph: {
    title: 'Amazon FBA & FBM Services | Ace Studios',
    description:
      'Amazon listing optimization, advertising, brand registry, and inventory management for growing sellers.',
    url: '/services/amazon-fba-fbm/',
    type: 'website',
    images: ['/amazon-fba-service.jpg'],
  },
}

export default function AmazonFBAFBMPage() {
  return (
    <>
      <ServiceJsonLd
        name="Amazon FBA & FBM"
        description={metadata.description as string}
        url="/services/amazon-fba-fbm/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'Amazon FBA & FBM', url: '/services/amazon-fba-fbm/' },
        ]}
      />
      <AmazonFbaFbmClient />
    </>
  )
}
