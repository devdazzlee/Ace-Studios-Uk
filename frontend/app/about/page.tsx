import type { Metadata } from 'next'
import AboutClient from './about-client'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet Ace Studios — a design, e-commerce, and digital growth agency helping ambitious brands scale online. Learn about our team, mission, and approach.',
  alternates: { canonical: '/about/' },
  openGraph: {
    title: 'About Ace Studios',
    description:
      'Meet the team behind Ace Studios and learn how we help brands build profitable online businesses.',
    url: '/about/',
    type: 'website',
    images: ['/hero-image.jpg'],
  },
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'About', url: '/about/' }]} />
      <AboutClient />
    </>
  )
}
