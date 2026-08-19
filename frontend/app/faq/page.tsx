import type { Metadata } from 'next'
import FaqClient from './faq-client'
import { faqs } from '@/lib/faq-data'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about working with Ace Studios — pricing, timelines, process, and the services we offer for e-commerce and digital growth.',
  alternates: { canonical: '/faq/' },
  openGraph: {
    title: 'FAQ | Ace Studios',
    description:
      'Answers to common questions about pricing, timelines, and our process at Ace Studios.',
    url: '/faq/',
    type: 'website',
    images: ['/hero-image.jpg'],
  },
}

export default function FaqPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.flatMap((category) =>
      category.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      }))
    ),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'FAQ', url: '/faq/' }]} />
      <FaqClient />
    </>
  )
}
