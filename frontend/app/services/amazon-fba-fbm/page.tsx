'use client'

import { ServicePageTemplate } from '@/components/service-page-template'
import {
  PackageIcon,
  SearchIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  ImageIcon,
  StarIcon,
  CompassIcon,
  ListIcon,
  BarChartIcon,
  RocketIcon,
} from 'lucide-react'

export default function AmazonFBAFBMPage() {
  return (
    <ServicePageTemplate
      badge="Amazon FBA & FBM"
      title="Dominate the world's"
      titleAccent="biggest marketplace"
      subtitle="From product launch to category leadership, we manage Amazon listings, advertising, brand registry, and inventory for sellers serious about scaling on FBA and FBM."
      heroImage="/design-service.jpg"
      primaryCTA="Get an Amazon Audit"
      secondaryCTA="See Case Studies"
      stats={[
        { value: 180, suffix: '+', label: 'Amazon Brands' },
        { value: 200, suffix: 'M+', prefix: '£', label: 'Sales Driven' },
        { value: 4.3, suffix: '%', label: 'Avg. ACOS' },
        { value: 12, suffix: '+', label: '#1 BSR Rankings' },
      ]}
      featuresHeading="A complete Amazon engine."
      featuresSubheading="Listings, ads, brand registry, A+ content, and inventory, handled by a dedicated senior team."
      features={[
        { icon: SearchIcon, title: 'Listing Optimization', description: 'Keyword research, copywriting, and backend search-term optimization that ranks on page 1.' },
        { icon: TrendingUpIcon, title: 'PPC Management', description: 'Sponsored Products, Brands, Display, and DSP campaigns managed to your target ACOS.' },
        { icon: ImageIcon, title: 'A+ Content & Brand Store', description: 'Premium A+ modules, comparison tables, and immersive brand storefronts.' },
        { icon: ShieldCheckIcon, title: 'Brand Registry & IP', description: 'Trademark filing, Brand Registry enrollment, and hijacker / counterfeit removal.' },
        { icon: PackageIcon, title: 'Inventory & FBA Ops', description: 'Demand forecasting, FBA shipment planning, and stranded inventory recovery.' },
        { icon: StarIcon, title: 'Reviews & Ratings', description: 'Vine, Request-a-Review automation, and review velocity strategy to build social proof.' },
      ]}
      benefits={[
        'Senior Amazon strategists with 8+ figure portfolios',
        'Dedicated account manager + dedicated PPC specialist',
        'Weekly reporting with ACOS, TACoS, and profit-per-unit',
        'Brand Registry, Vine, and Amazon Posts all enrolled',
        'Walmart, Target+, and Faire expansion ready when you are',
        'No long-term contracts, cancel anytime',
      ]}
      processHeading="The Amazon playbook."
      processSubheading="A repeatable model used to scale brands from zero to 8 figures on Amazon."
      process={[
        { step: '01', title: 'Audit', description: 'Listing, PPC, and category audit with growth opportunities.', icon: CompassIcon },
        { step: '02', title: 'Optimize', description: 'Listing rewrite, image refresh, A+ build, backend SEO.', icon: ListIcon },
        { step: '03', title: 'Launch Ads', description: 'PPC structure, bid strategy, and Amazon DSP rollout.', icon: BarChartIcon },
        { step: '04', title: 'Scale', description: 'Weekly optimization, expansion, and new product launches.', icon: RocketIcon },
      ]}
      pricingHeading="Amazon management pricing."
      pricingSubheading="Pricing scales with your monthly Amazon revenue, pay for results, not retainers."
      pricing={[
        {
          name: 'Launch',
          price: '£2,500',
          priceSuffix: '/month',
          description: 'For new sellers or single-product launches.',
          features: ['Listing optimization (up to 5)', 'PPC management (up to £5k ad spend)', 'Weekly reporting', 'Brand Registry setup', 'Review request automation', 'Email support'],
        },
        {
          name: 'Growth',
          price: '£5,500',
          priceSuffix: '/month',
          description: 'For brands doing £50k–£500k/month on Amazon.',
          features: ['Listings (up to 25)', 'PPC up to £25k spend', 'A+ content & Brand Store', 'Inventory forecasting', 'Hijacker removal', 'Bi-weekly strategy calls', 'Slack support'],
          popular: true,
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          description: 'For brands £500k+/month on Amazon.',
          features: ['Unlimited listings', 'Unlimited PPC spend', 'Amazon DSP', 'International expansion', 'Walmart & Target+ ready', 'Dedicated team', 'Quarterly strategy', 'Bespoke pricing'],
        },
      ]}
      faqs={[
        { question: 'Do you manage PPC and creative both?', answer: 'Yes. We are end-to-end, copy, images, A+ content, PPC, DSP, and inventory all under one roof. No vendors to coordinate.' },
        { question: "What's a typical ACOS target?", answer: 'It depends on category and product margin. We start with category benchmarks and optimize toward your target TACoS over 60–90 days.' },
        { question: 'Do you help with international expansion?', answer: 'Yes. We launch on Amazon UK, EU (5), US, CA, MX, and JP. Same approach, localized for each marketplace.' },
        { question: "Can you remove hijackers and counterfeit sellers?", answer: 'Absolutely. We handle test buys, IP complaints, and Amazon brand protection escalations, included in Growth and Enterprise tiers.' },
        { question: "Do I keep ownership of my Seller Central?", answer: 'Always. We work inside your account, never our own. Full transparency, full ownership, full control.' },
      ]}
      testimonials={[
        { name: 'Marcus Chen', role: 'Amazon Seller', quote: 'They helped me rank #1 BSR in three subcategories and 4x revenue in 6 months. ACOS dropped from 38% to 14%.' },
        { name: 'Jessica Williams', role: 'FBA Founder', quote: 'Their PPC team is on another level. We have tried five agencies. None compare to the dedicated strategy and creative they bring.' },
        { name: 'James Wilson', role: 'CPG Brand Owner', quote: 'Crossed £1M/month on Amazon nine months in. Could not have done it without their listing and PPC playbook.' },
      ]}
      ctaHeading="Ready to scale on Amazon?"
      ctaSubheading="Free audit identifying the top 3 gaps in your Amazon listings, ads, and brand presence."
      ctaButton="Book Free Amazon Audit"
      techStack={['Seller Central', 'Vendor Central', 'Amazon DSP', 'Helium 10', 'Jungle Scout', 'DataDive', 'A+ Content Manager', 'Brand Registry']}
    />
  )
}
