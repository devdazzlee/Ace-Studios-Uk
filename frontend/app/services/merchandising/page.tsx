'use client'

import { ServicePageTemplate } from '@/components/service-page-template'
import {
  SparklesIcon,
  TagIcon,
  LayoutGridIcon,
  PackageIcon,
  TrendingUpIcon,
  EyeIcon,
  CompassIcon,
  PenToolIcon,
  WrenchIcon,
  RocketIcon,
} from 'lucide-react'

export default function MerchandisingPage() {
  return (
    <ServicePageTemplate
      badge="Merchandising"
      title="Product strategy that"
      titleAccent="moves units"
      subtitle="Assortment planning, pricing, visual merchandising, and trend forecasting, for retail and e-commerce brands serious about turning catalog into category leadership."
      heroImage="/design-service.jpg"
      primaryCTA="Get a Merch Audit"
      secondaryCTA="See Portfolios"
      stats={[
        { value: 150, suffix: '+', label: 'Brands Merchandised' },
        { value: 32, suffix: '%', label: 'Avg. Sell-Through Lift' },
        { value: 5, suffix: 'M+', label: 'SKUs Strategized' },
        { value: 18, suffix: '%', label: 'Avg. Margin Lift' },
      ]}
      featuresHeading="Merchandising, end to end."
      featuresSubheading="From line review to in-store display to PDP photography, every lever pulled."
      features={[
        { icon: LayoutGridIcon, title: 'Assortment Planning', description: 'Category strategy, SKU rationalization, and line architecture grounded in data.' },
        { icon: TagIcon, title: 'Pricing Strategy', description: 'Price ladders, competitive analysis, and promotional cadence that maximizes margin.' },
        { icon: EyeIcon, title: 'Visual Merchandising', description: 'On-site, in-store, and PDP merchandising that guides shoppers to the right products.' },
        { icon: TrendingUpIcon, title: 'Trend Forecasting', description: 'Macro and micro trends mapped to your category, audience, and buying cycle.' },
        { icon: PackageIcon, title: 'Inventory Strategy', description: 'Demand planning, depth and breadth balance, and markdown management.' },
        { icon: SparklesIcon, title: 'Product Photography', description: 'PDP photography, lifestyle shoots, and 3D rendering that converts.' },
      ]}
      benefits={[
        'Senior merchandisers from top global retailers and DTC brands',
        'Live merchandising dashboards with weekly sell-through tracking',
        'Photography and 3D rendering studio in-house',
        'Trend reports delivered quarterly with actionable buys',
        'Plug-and-play with Shopify, NetSuite, and major PLMs',
        'Optional buying agent support globally',
      ]}
      processHeading="The merchandising playbook."
      processSubheading="A proven model used at brands from emerging DTC to global retail."
      process={[
        { step: '01', title: 'Audit', description: 'Sell-through, margin, and category share analysis.', icon: CompassIcon },
        { step: '02', title: 'Plan', description: 'Assortment architecture, pricing, and seasonal cadence.', icon: PenToolIcon },
        { step: '03', title: 'Execute', description: 'PDP optimization, photography, in-store display.', icon: WrenchIcon },
        { step: '04', title: 'Optimize', description: 'Weekly performance reviews and quick wins.', icon: RocketIcon },
      ]}
      pricingHeading="Merchandising engagements."
      pricingSubheading="Project, retainer, and embedded models depending on need."
      pricing={[
        {
          name: 'Merch Audit',
          price: '£3,500',
          priceSuffix: 'one-time',
          description: 'Snapshot of your assortment and quick wins.',
          features: ['Category sell-through review', 'Pricing & margin analysis', 'PDP audit (top 25 SKUs)', 'Photography assessment', 'Quick-win action plan', '2-week delivery'],
        },
        {
          name: 'Merch Retainer',
          price: '£5,500',
          priceSuffix: '/month',
          description: 'Ongoing senior merchandiser embedded with your team.',
          features: ['Weekly sell-through reviews', 'Assortment & pricing strategy', 'Trend forecasting', 'PDP optimization', 'Photo & 3D direction', 'Seasonal planning', 'Bi-weekly strategy calls'],
          popular: true,
        },
        {
          name: 'Enterprise Merch',
          price: 'Custom',
          description: 'Multi-brand or multi-category retail.',
          features: ['Dedicated merch team', 'Multi-category strategy', 'Buying & sourcing support', 'Visual merch direction', 'Quarterly trend reports', 'Custom dashboarding', 'Bespoke pricing'],
        },
      ]}
      faqs={[
        { question: 'Do you work with DTC brands or only retail?', answer: 'Both. We have senior merchandisers from both worlds, luxury retail, mass retail, and digitally-native DTC.' },
        { question: 'Can you handle product photography?', answer: 'Yes. Studio photography, lifestyle shoots, video, and 3D rendering, all in-house.' },
        { question: 'How do you measure success?', answer: 'Sell-through rate, sell-in margin, AUR, and category share. Custom dashboards built around your KPIs.' },
        { question: 'Do you help with sourcing?', answer: 'In Enterprise tiers, yes. We have sourcing partners across Asia, Europe, and the Americas for OEM, ODM, and private label.' },
        { question: 'Can you work alongside our in-house team?', answer: 'Absolutely. Most engagements are collaborative, we augment your team with senior expertise, not replace them.' },
      ]}
      testimonials={[
        { name: 'Maya Robertson', role: 'Founder, Field & Forge', quote: 'Sell-through up 34% in one season. The line architecture work was a turning point for the brand.' },
        { name: 'Priya Mehta', role: 'CEO, Lumora Beauty', quote: 'Their PDP photography and merchandising lifted conversion 41%. Best ROI of any agency engagement we have run.' },
        { name: 'Daniel Park', role: 'CEO, Northstar Apparel', quote: 'Quarterly trend reports alone are worth the retainer. Our buys are sharper, fresher, and faster to market.' },
      ]}
      ctaHeading="Ready to merchandise smarter?"
      ctaSubheading="Free 30-min consultation, we'll spot the biggest opportunities in your current assortment and PDP."
      ctaButton="Book Free Merch Audit"
      techStack={['Shopify', 'NetSuite', 'Centric PLM', 'EDITED', 'Trendalytics', 'Wiser', 'PriceSpider', 'Lookbook', 'Tableau']}
    />
  )
}
