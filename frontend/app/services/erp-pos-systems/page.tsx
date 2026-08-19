import type { Metadata } from 'next'
import ErpPosSystemsClient from './erp-pos-systems-client'
import { ServiceJsonLd } from '@/components/service-json-ld'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'ERP & POS Systems',
  description:
    'Implementation, customization, and integration of ERP and POS systems — NetSuite, SAP, Lightspeed, Square, and Shopify POS — from Ace Studios.',
  alternates: { canonical: '/services/erp-pos-systems/' },
  openGraph: {
    title: 'ERP & POS Systems | Ace Studios',
    description:
      'Implementation, customization, and integration of ERP and POS systems for multi-location retail and enterprise.',
    url: '/services/erp-pos-systems/',
    type: 'website',
    images: ['/design-service.jpg'],
  },
}

export default function ErpPosPage() {
  return (
    <>
      <ServiceJsonLd
        name="ERP & POS Systems"
        description={metadata.description as string}
        url="/services/erp-pos-systems/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'ERP & POS Systems', url: '/services/erp-pos-systems/' },
        ]}
      />
      <ErpPosSystemsClient />
    </>
  )
}
