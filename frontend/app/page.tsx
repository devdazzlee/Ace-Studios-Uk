import type { Metadata } from 'next'
import HomeClient from './home-client'

export const metadata: Metadata = {
  title: {
    absolute: 'Ace Studios | Design, E-Commerce & Digital Growth Agency',
  },
  description:
    'Ace Studios helps brands build profitable online businesses — brand design, web & Shopify development, Amazon FBA, TikTok Shop & digital marketing.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ace Studios | Design, E-Commerce & Digital Growth Agency',
    description:
      'Brand design, web & Shopify development, Amazon FBA, TikTok Shop, and digital marketing for ambitious brands.',
    url: '/',
    type: 'website',
    images: ['/hero-image.jpg'],
  },
}

export default function Home() {
  return <HomeClient />
}
