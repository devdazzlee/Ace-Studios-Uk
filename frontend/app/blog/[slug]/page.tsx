import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog-data'
import { SITE_URL } from '@/config/config'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'
import BlogPostClient from './blog-post-client'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}

  const url = `/blog/${post.slug}/`

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.heroImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.heroImage}`,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ace Studios',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/Logo.svg`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}/`,
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
          { name: 'Blog', url: '/blog/' },
          { name: post.title, url: `/blog/${post.slug}/` },
        ]}
      />
      <BlogPostClient slug={slug} />
    </>
  )
}
