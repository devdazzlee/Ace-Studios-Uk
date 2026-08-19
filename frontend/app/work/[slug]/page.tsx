import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { works } from '@/lib/work-data'
import { SITE_URL } from '@/config/config'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'
import WorkDetailClient from './work-detail-client'

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const work = works.find((w) => w.slug === slug)
  if (!work) return {}

  const url = `/work/${work.slug}/`
  const title = `${work.title} — ${work.client}`

  return {
    title,
    description: work.summary,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title,
      description: work.summary,
      url,
      images: [{ url: work.heroImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: work.summary,
      images: [work.heroImage],
    },
  }
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const work = works.find((w) => w.slug === slug)
  if (!work) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${work.title} — ${work.client}`,
    description: work.summary,
    image: `${SITE_URL}${work.heroImage}`,
    about: work.industry,
    creator: {
      '@type': 'Organization',
      name: 'Ace Studios',
      url: SITE_URL,
    },
    url: `${SITE_URL}/work/${work.slug}/`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Work', url: '/work/' },
          { name: work.title, url: `/work/${work.slug}/` },
        ]}
      />
      <WorkDetailClient slug={slug} />
    </>
  )
}
