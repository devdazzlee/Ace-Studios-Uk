import type { Metadata } from 'next'
import OnlineBusinessSetupClient from './online-business-setup-client'
import { ServiceJsonLd } from '@/components/service-json-ld'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'Online Business Setup',
  description:
    'Ltd company formation, UTR, business banking, tax setup, contracts, and payment processing — we handle business setup so you can focus on growth.',
  alternates: { canonical: '/services/online-business-setup/' },
  openGraph: {
    title: 'Online Business Setup | Ace Studios',
    description:
      'Company formation, UTR, business banking, tax setup, contracts, and payment processing handled for you.',
    url: '/services/online-business-setup/',
    type: 'website',
    images: ['/design-service.jpg'],
  },
}

export default function OnlineBusinessSetupPage() {
  return (
    <>
      <ServiceJsonLd
        name="Online Business Setup"
        description={metadata.description as string}
        url="/services/online-business-setup/"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'Online Business Setup', url: '/services/online-business-setup/' },
        ]}
      />
      <OnlineBusinessSetupClient />
    </>
  )
}
