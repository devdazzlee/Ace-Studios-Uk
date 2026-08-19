import type { Metadata } from 'next'
import WebsiteDevelopmentClient from './website-development-client'
import { ServiceJsonLd } from '@/components/service-json-ld'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'Website Development',
  description:
    'Custom websites built to load fast, rank on Google, and convert visitors into customers. Modern, future-proof web development from Ace Studios.',
  alternates: { canonical: '/services/website-development/' },
  openGraph: {
    title: 'Website Development | Ace Studios',
    description:
      'Fast, modern, future-proof websites built to rank on Google and convert visitors into customers.',
    url: '/services/website-development/',
    type: 'website',
    images: ['/development-service.jpg'],
  },
}

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <ServiceJsonLd
        name="Website Development"
        description={metadata.description as string}
        url="/services/website-development/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'Website Development', url: '/services/website-development/' },
        ]}
      />
      <WebsiteDevelopmentClient />
    </>
  )
}
