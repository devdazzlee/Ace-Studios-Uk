import type { Metadata } from 'next'
import CustomSoftwareDevelopmentClient from './custom-software-development-client'
import { ServiceJsonLd } from '@/components/service-json-ld'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'Custom Software Development',
  description:
    'Bespoke web apps, internal tools, dashboards, and integrations engineered around your exact business workflows by Ace Studios.',
  alternates: { canonical: '/services/custom-software-development/' },
  openGraph: {
    title: 'Custom Software Development | Ace Studios',
    description:
      'Bespoke web apps, internal tools, dashboards, and integrations engineered around your workflows.',
    url: '/services/custom-software-development/',
    type: 'website',
    images: ['/development-service.jpg'],
  },
}

export default function CustomSoftwarePage() {
  return (
    <>
      <ServiceJsonLd
        name="Custom Software Development"
        description={metadata.description as string}
        url="/services/custom-software-development/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'Custom Software Development', url: '/services/custom-software-development/' },
        ]}
      />
      <CustomSoftwareDevelopmentClient />
    </>
  )
}
