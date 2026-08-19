import type { Metadata } from 'next'
import DesignClient from './design-client'
import { ServiceJsonLd } from '@/components/service-json-ld'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'Brand Design Services',
  description:
    'Distinctive, memorable brand design that resonates with your audience and drives measurable growth — logo, identity, and creative direction from Ace Studios.',
  alternates: { canonical: '/services/design/' },
  openGraph: {
    title: 'Brand Design Services | Ace Studios',
    description:
      'Distinctive, memorable brand design that resonates with your audience and drives measurable growth.',
    url: '/services/design/',
    type: 'website',
    images: ['/design-service.jpg'],
  },
}

export default function BrandDesignPage() {
  return (
    <>
      <ServiceJsonLd
        name="Brand Design"
        description={metadata.description as string}
        url="/services/design/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'Brand Design', url: '/services/design/' },
        ]}
      />
      <DesignClient />
    </>
  )
}
