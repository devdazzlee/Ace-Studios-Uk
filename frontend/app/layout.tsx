import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { SITE_URL } from '@/config/config'
import './globals.css'

const GTM_ID = 'GTM-NG27GXLG'
const GA_MEASUREMENT_ID = 'G-00ECS9VQT7'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

const SITE_NAME = 'Ace Studios'
const SITE_TITLE = 'Ace Studios | Design, E-Commerce & Digital Growth Agency'
const SITE_DESCRIPTION =
  'Ace Studios helps brands build profitable online businesses — brand design, web development, Amazon FBA, TikTok Shop, Shopify & digital marketing.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Ace Studios',
  },
  description: SITE_DESCRIPTION,
  generator: 'v0.app',
  applicationName: SITE_NAME,
  publisher: SITE_NAME,
  creator: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  category: 'business',
  keywords: [
    'web development agency',
    'Shopify development',
    'e-commerce agency',
    'Amazon FBA management',
    'TikTok Shop management',
    'digital marketing agency UK',
    'brand design agency',
  ],
  icons: {
    icon: '/Logo.svg',
    apple: '/Logo.svg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    images: [
      {
        url: '/hero-image.jpg',
        width: 1024,
        height: 1024,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/hero-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'm4MQUsSjjb4u5KepucGPpZaneYzCT46od15QSuHrU5E',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/Logo.svg`,
  image: `${SITE_URL}/Logo.svg`,
  description: SITE_DESCRIPTION,
  telephone: '+44-7366-488595',
  email: 'contact@acestudiosuk.com',
  priceRange: '££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Chancery Place, 50 Brown St',
    addressLocality: 'Manchester',
    postalCode: 'M2 2JG',
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44-7366-488595',
    email: 'contact@acestudiosuk.com',
    contactType: 'customer service',
    areaServed: 'GB',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#0a0c10] scroll-smooth" style={{ fontFamily: poppins.style.fontFamily }}>
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
