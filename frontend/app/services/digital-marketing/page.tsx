import type { Metadata } from 'next'
import DigitalMarketingClient from './digital-marketing-client'
import { ServiceJsonLd } from '@/components/service-json-ld'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'Digital Marketing Services',
  description:
    'SEO, paid ads, email/SMS, and social media marketing focused on real revenue, not vanity metrics. Performance marketing from Ace Studios.',
  alternates: { canonical: '/services/digital-marketing/' },
  openGraph: {
    title: 'Digital Marketing Services | Ace Studios',
    description:
      'SEO, paid ads, email/SMS, and social media marketing focused on real revenue.',
    url: '/services/digital-marketing/',
    type: 'website',
    images: ['/marketing-service.jpg'],
  },
}

export default function DigitalMarketingPage() {
  return (
    <>
      <ServiceJsonLd
        name="Digital Marketing"
        description={metadata.description as string}
        url="/services/digital-marketing/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'Digital Marketing', url: '/services/digital-marketing/' },
        ]}
      />
      <DigitalMarketingClient />
    </>
  )
}
