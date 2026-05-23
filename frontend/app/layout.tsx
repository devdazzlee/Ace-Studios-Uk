import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Ace Studios | Design, E-Commerce & Digital Growth Agency',
  description: 'Ace Studios helps entrepreneurs and brands build profitable online businesses, brand design, web development, Amazon FBA, TikTok Shop, Shopify & digital marketing.',
  generator: 'v0.app',
  icons: {
    icon: '/Logo.svg',
    apple: '/Logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#0a0c10] scroll-smooth" style={{ fontFamily: poppins.style.fontFamily }}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
