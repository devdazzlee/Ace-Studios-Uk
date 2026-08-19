import type { Metadata } from 'next'
import ContactClient from './contact-client'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Ace Studios. Tell us about your project and our team will get back to you to discuss web development, e-commerce, marketing, and more.',
  alternates: { canonical: '/contact/' },
  openGraph: {
    title: 'Contact Ace Studios',
    description:
      'Tell us about your project. Our team will get back to you to discuss how we can help you grow.',
    url: '/contact/',
    type: 'website',
    images: ['/hero-image.jpg'],
  },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact/' }]} />
      <ContactClient />
    </>
  )
}
