import { SITE_URL } from '@/config/config'

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'Organization',
      name: 'Ace Studios',
      url: SITE_URL,
    },
    areaServed: 'GB',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
