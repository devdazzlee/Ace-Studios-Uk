import type { Metadata } from 'next'
import EcommerceClient from './ecommerce-client'
import { ServiceJsonLd } from '@/components/service-json-ld'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'E-Commerce Solutions',
  description:
    'Shopify, WooCommerce, and fully custom storefronts designed, built, and optimized to turn browsers into buyers and repeat customers.',
  alternates: { canonical: '/services/ecommerce/' },
  openGraph: {
    title: 'E-Commerce Solutions | Ace Studios',
    description:
      'Shopify, WooCommerce, and fully custom storefronts designed, built, and optimized to sell.',
    url: '/services/ecommerce/',
    type: 'website',
    images: ['/ecommerce-service.jpg'],
  },
}

export default function EcommercePage() {
  return (
    <>
      <ServiceJsonLd
        name="E-Commerce Solutions"
        description={metadata.description as string}
        url="/services/ecommerce/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'E-Commerce Solutions', url: '/services/ecommerce/' },
        ]}
      />
      <EcommerceClient />
    </>
  )
}
