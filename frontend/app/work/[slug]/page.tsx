import { works } from '@/lib/work-data'
import WorkDetailClient from './work-detail-client'

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }))
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <WorkDetailClient slug={slug} />
}
