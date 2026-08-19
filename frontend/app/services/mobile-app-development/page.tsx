import type { Metadata } from 'next'
import MobileAppDevelopmentClient from './mobile-app-development-client'
import { ServiceJsonLd } from '@/components/service-json-ld'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'Mobile App Development',
  description:
    'iOS, Android, and cross-platform app design and development that delights users, drives retention, and scales to millions of installs.',
  alternates: { canonical: '/services/mobile-app-development/' },
  openGraph: {
    title: 'Mobile App Development | Ace Studios',
    description:
      'iOS, Android, and cross-platform app design and development that delights users and drives retention.',
    url: '/services/mobile-app-development/',
    type: 'website',
    images: ['/development-service.jpg'],
  },
}

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <ServiceJsonLd
        name="Mobile App Development"
        description={metadata.description as string}
        url="/services/mobile-app-development/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'Mobile App Development', url: '/services/mobile-app-development/' },
        ]}
      />
      <MobileAppDevelopmentClient />
    </>
  )
}
