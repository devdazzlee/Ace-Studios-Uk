import type { LucideIcon } from 'lucide-react'
import {
  ShirtIcon,
  CodeIcon,
  SparklesIcon,
  SmartphoneIcon,
  HeartIcon,
  TreesIcon,
} from 'lucide-react'

export interface WorkResult {
  metric: string
  label: string
}

export interface WorkCase {
  slug: string
  title: string
  client: string
  category: string
  tags: string[]
  year: string
  industry: string
  services: string[]
  heroImage: string
  gradient: string
  accent: string // tailwind color stop e.g. 'pink'
  shortResult: string
  summary: string
  challenge: string
  solution: string
  outcome: string
  icon: LucideIcon
  results: WorkResult[]
  gallery: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  nextSlug: string
}

export const works: WorkCase[] = [
  {
    slug: 'lumora-beauty',
    title: 'A clean-beauty brand reborn for the Shopify era',
    client: 'Lumora Beauty',
    category: 'Shopify · DTC',
    tags: ['Shopify Plus', 'Brand', 'CRO', 'Email'],
    year: '2024',
    industry: 'Beauty & Skincare',
    services: ['Brand Design', 'Shopify Development', 'Digital Marketing', 'Email & SMS'],
    heroImage: '/ecommerce-service.jpg',
    gradient: 'from-pink-400 via-rose-400 to-fuchsia-500',
    accent: 'pink',
    shortResult: '+312% revenue in 6 months',
    summary:
      'A 4-year-old clean-beauty brand was stuck at £40k/month after a stale Shopify build and a logo no one remembered. We rebuilt the brand, the storefront, and the entire growth engine.',
    challenge:
      'Lumora had product-market fit but no growth lever was working. Their store loaded in 8s on mobile, the brand felt indistinguishable from competitors, and email was generating less than 4% of revenue.',
    solution:
      'We rebuilt the visual identity from scratch, new wordmark, palette, and packaging system. Then we shipped a custom Shopify Plus theme with a one-page checkout, rolled out a 14-flow Klaviyo program, and ran Meta + TikTok creative in parallel.',
    outcome:
      "Lumora's monthly revenue grew from £40k to £164k within six months. Email rose to 32% of revenue. Mobile load time dropped from 8s to 1.1s.",
    icon: SparklesIcon,
    results: [
      { metric: '+312%', label: 'Revenue (6 months)' },
      { metric: '4.6%', label: 'Storefront CVR' },
      { metric: '32%', label: 'Email rev share' },
      { metric: '1.1s', label: 'Mobile load time' },
    ],
    gallery: ['/ecommerce-service.jpg', '/design-service.jpg', '/marketing-service.jpg'],
    testimonial: {
      quote:
        'Revenue tripled in six months. The CRO work alone paid for the entire engagement, and the brand feels like ours for the first time.',
      author: 'Priya Mehta',
      role: 'Founder, Lumora Beauty',
    },
    nextSlug: 'northstar-apparel',
  },
  {
    slug: 'northstar-apparel',
    title: 'Premium outerwear brand finds its identity (and 45% more conversions)',
    client: 'Northstar Apparel',
    category: 'Brand · Web',
    tags: ['Brand', 'Website', 'CRO', 'Photography'],
    year: '2024',
    industry: 'Apparel & Outdoor',
    services: ['Brand Strategy', 'Website Development', 'Photography Direction', 'CRO'],
    heroImage: '/design-service.jpg',
    gradient: 'from-blue-400 via-indigo-500 to-purple-600',
    accent: 'blue',
    shortResult: '+45% conversion uplift',
    summary:
      'A premium outdoor apparel brand needed a refreshed identity and a website that finally matched the quality of their product. We delivered both, plus a 45% lift in conversion rate.',
    challenge:
      "Northstar's existing site looked like a 2014 boilerplate Shopify theme. Their products retailed at £400+ but the digital experience screamed bargain bin. Bounce rate on PDPs sat at 78%.",
    solution:
      'We led with brand strategy, defining their voice, audience, and competitive position. Then we built a custom Next.js storefront with cinematic photography direction, an editorial PDP system, and a frictionless checkout.',
    outcome:
      'Conversion rate jumped 45% in the first month after launch. Average order value rose 18%. Bounce rate on PDPs dropped from 78% to 32%.',
    icon: ShirtIcon,
    results: [
      { metric: '+45%', label: 'Conversion rate' },
      { metric: '+18%', label: 'Avg. order value' },
      { metric: '-46pp', label: 'PDP bounce rate' },
      { metric: '99', label: 'PageSpeed score' },
    ],
    gallery: ['/design-service.jpg', '/development-service.jpg', '/ecommerce-service.jpg'],
    testimonial: {
      quote:
        'They treated our project like their own startup. The brand and site finally match the quality of the jackets we make.',
      author: 'Daniel Park',
      role: 'CEO, Northstar Apparel',
    },
    nextSlug: 'field-and-forge',
  },
  {
    slug: 'field-and-forge',
    title: 'Heritage outdoor brand dominates three Amazon subcategories',
    client: 'Field & Forge',
    category: 'E-com · Amazon',
    tags: ['Amazon FBA', 'PPC', 'Listings', 'Brand Registry'],
    year: '2023',
    industry: 'Outdoor & Gear',
    services: ['Amazon FBA', 'PPC Management', 'Listing Optimization', 'Brand Protection'],
    heroImage: '/amazon-fba-service.jpg',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    accent: 'emerald',
    shortResult: '#1 BSR in 3 categories',
    summary:
      'A 12-year-old outdoor gear maker was stuck at the bottom of Amazon search and bleeding margin to inefficient PPC. We rebuilt their entire Amazon presence in 90 days.',
    challenge:
      'Field & Forge had a hero product worthy of #1 BSR but were ranking on page 4. ACOS sat at 41%. Counterfeits were eating their margin and brand registry was a mess.',
    solution:
      'We rewrote every listing for SEO and conversion, shot premium A+ content, restructured PPC into a clean 4-tier campaign model, enrolled them in Brand Registry, and ran a counterfeit takedown sweep.',
    outcome:
      'Three subcategories now hold #1 BSR. ACOS fell from 41% to 14%. Monthly revenue 4x in nine months. Counterfeits eliminated.',
    icon: TreesIcon,
    results: [
      { metric: '#1 BSR', label: '3 subcategories' },
      { metric: '14%', label: 'ACOS (from 41%)' },
      { metric: '4x', label: 'Monthly revenue' },
      { metric: '0', label: 'Active hijackers' },
    ],
    gallery: ['/amazon-fba-service.jpg', '/ecommerce-service.jpg', '/marketing-service.jpg'],
    testimonial: {
      quote:
        'They built our Shopify store, ran our paid media, and rebuilt our Amazon presence, all without a single hand-off. Cleanest agency engagement I have had in 10 years.',
      author: 'Maya Robertson',
      role: 'Founder, Field & Forge',
    },
    nextSlug: 'halcyon-saas',
  },
  {
    slug: 'halcyon-saas',
    title: 'B2B SaaS goes from zero to £2M ARR in 12 months',
    client: 'Halcyon SaaS',
    category: 'Web App · Brand',
    tags: ['SaaS', 'Custom Software', 'Brand', 'Web App'],
    year: '2024',
    industry: 'B2B SaaS',
    services: ['Custom Software', 'Brand Design', 'Marketing Site', 'Onboarding UX'],
    heroImage: '/development-service.jpg',
    gradient: 'from-orange-400 via-amber-500 to-yellow-500',
    accent: 'orange',
    shortResult: '£2M ARR in year one',
    summary:
      'A solo founder with a deep insight into compliance workflows came to us with a Figma file and a deadline. We built the product, the brand, and the GTM site, and helped them hit £2M ARR in year one.',
    challenge:
      'Halcyon needed a production-grade SaaS, a brand that signaled enterprise trust, and a marketing site that converted skeptical compliance buyers. All on a 5-month runway.',
    solution:
      'We shipped the MVP web app in 12 weeks on Next.js + Postgres + Stripe. In parallel, we built the brand identity, marketing site, and onboarding flow. We then ran their Meta and LinkedIn ads for the first 90 days post-launch.',
    outcome:
      'Halcyon crossed £2M ARR exactly twelve months after launch. Net revenue retention sits at 118%. They closed their seed round eight weeks after we shipped the MVP.',
    icon: CodeIcon,
    results: [
      { metric: '£2M', label: 'ARR (year one)' },
      { metric: '118%', label: 'Net retention' },
      { metric: '12 wk', label: 'MVP to launch' },
      { metric: '5%', label: 'Free-to-paid CVR' },
    ],
    gallery: ['/development-service.jpg', '/design-service.jpg', '/marketing-service.jpg'],
    testimonial: {
      quote:
        'They shipped an MVP in 8 weeks that raised our seed round two months later. Best engineering investment I have ever made.',
      author: 'James Wilson',
      role: 'CEO, Halcyon SaaS',
    },
    nextSlug: 'quill-notes',
  },
  {
    slug: 'quill-notes',
    title: 'Indie note-taking app hits 100k downloads in month one',
    client: 'Quill Notes',
    category: 'Mobile · iOS & Android',
    tags: ['Mobile App', 'iOS', 'Android', 'Brand'],
    year: '2024',
    industry: 'Productivity',
    services: ['Mobile App Development', 'Brand Design', 'App Store Optimization'],
    heroImage: '/development-service.jpg',
    gradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
    accent: 'violet',
    shortResult: '100k downloads · month one',
    summary:
      'An ambitious solo founder wanted to build the most beautiful note-taking app on iOS. We helped him design, build, and launch it, and Apple featured the app in week three.',
    challenge:
      'Quill needed a category-defining mobile app, a brand identity that felt like an Apple product, and an ASO strategy strong enough to break through a crowded App Store.',
    solution:
      'We crafted the brand and product design in Figma, shipped a React Native MVP in 10 weeks, and built an ASO + launch plan including a Product Hunt launch and curated press outreach.',
    outcome:
      'Quill hit 100,000 downloads in its first month and was featured by Apple in week three. The app holds a 4.9-star rating across 12,000+ reviews.',
    icon: SmartphoneIcon,
    results: [
      { metric: '100k', label: 'Downloads (month 1)' },
      { metric: '4.9★', label: 'App Store rating' },
      { metric: 'Featured', label: 'by Apple' },
      { metric: '10 wk', label: 'Idea to launch' },
    ],
    gallery: ['/development-service.jpg', '/design-service.jpg', '/hero-image.jpg'],
    testimonial: {
      quote:
        'Featured by Apple in our second month. The design and onboarding flow they crafted made all the difference.',
      author: 'Aarav Sharma',
      role: 'Founder, Quill Notes',
    },
    nextSlug: 'vita-health',
  },
  {
    slug: 'vita-health',
    title: 'Telehealth platform crosses 50k patients across two stores',
    client: 'Vita Health',
    category: 'Health · Mobile + Web',
    tags: ['Healthcare', 'Cross-Platform', 'HIPAA', 'Custom Software'],
    year: '2023',
    industry: 'Healthcare',
    services: ['Custom Software', 'Mobile App', 'HIPAA Compliance', 'Brand'],
    heroImage: '/hero-image.jpg',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    accent: 'cyan',
    shortResult: '50k+ patients onboarded',
    summary:
      "Vita Health needed a HIPAA-compliant telehealth platform with native iOS and Android apps, plus a clinician-facing web dashboard. We shipped all three with shared infrastructure.",
    challenge:
      'Healthcare regulation, multi-stakeholder UX (patients + clinicians), real-time video, and rapid growth ambitions all needed to be solved at once, by an early-stage team.',
    solution:
      "We architected a single backend with three clients (iOS, Android, web). Built HIPAA-compliant infrastructure on AWS with audit logging and SOC2 readiness. Released in 16 weeks.",
    outcome:
      "Vita launched on schedule and crossed 50,000 onboarded patients in year one. Day-30 retention sits at 71%. The platform passed two SOC2 audits without a single finding.",
    icon: HeartIcon,
    results: [
      { metric: '50k+', label: 'Patients onboarded' },
      { metric: '71%', label: 'Day-30 retention' },
      { metric: '16 wk', label: 'To launch' },
      { metric: '0', label: 'SOC2 findings' },
    ],
    gallery: ['/hero-image.jpg', '/development-service.jpg', '/design-service.jpg'],
    testimonial: {
      quote:
        'Cross-platform from day one. Same UX on iOS and Android, half the cost we expected, and HIPAA was rock solid from launch.',
      author: 'Hannah Lee',
      role: 'CTO, Vita Health',
    },
    nextSlug: 'lumora-beauty',
  },
]

export function getWorkBySlug(slug: string): WorkCase | undefined {
  return works.find((w) => w.slug === slug)
}
