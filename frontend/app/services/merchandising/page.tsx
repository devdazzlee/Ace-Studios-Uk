import type { Metadata } from 'next'
import MerchandisingClient from './merchandising-client'
import { ServiceJsonLd } from '@/components/service-json-ld'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'Merchandising Services',
  description:
    'Assortment planning, pricing, visual merchandising, and trend forecasting for retail and e-commerce brands ready to turn catalog into category leadership.',
  alternates: { canonical: '/services/merchandising/' },
  openGraph: {
    title: 'Merchandising Services | Ace Studios',
    description:
      'Assortment planning, pricing, visual merchandising, and trend forecasting for retail and e-commerce brands.',
    url: '/services/merchandising/',
    type: 'website',
    images: ['/design-service.jpg'],
  },
}

export default function MerchandisingPage() {
  return (
    <>
      <ServiceJsonLd
        name="Merchandising"
        description={metadata.description as string}
        url="/services/merchandising/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'Merchandising', url: '/services/merchandising/' },
        ]}
      />
      <MerchandisingClient />
    </>
  )
}
