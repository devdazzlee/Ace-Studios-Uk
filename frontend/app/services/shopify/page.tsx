import type { Metadata } from 'next'
import ShopifyClient from './shopify-client'
import { ServiceJsonLd } from '@/components/service-json-ld'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'Shopify Plus Development',
  description:
    'Shopify Plus partners specializing in custom themes, headless storefronts, and conversion optimization for brands scaling past 7 and 8 figures.',
  alternates: { canonical: '/services/shopify/' },
  openGraph: {
    title: 'Shopify Plus Development | Ace Studios',
    description:
      'Custom themes, headless storefronts, and conversion optimization from Shopify Plus partners.',
    url: '/services/shopify/',
    type: 'website',
    images: ['/design-service.jpg'],
  },
}

export default function ShopifyPage() {
  return (
    <>
      <ServiceJsonLd
        name="Shopify Plus Development"
        description={metadata.description as string}
        url="/services/shopify/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'Shopify Plus Development', url: '/services/shopify/' },
        ]}
      />
      <ShopifyClient />
    </>
  )
}
