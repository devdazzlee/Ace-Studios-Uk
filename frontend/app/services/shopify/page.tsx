'use client'

import { ServicePageTemplate } from '@/components/service-page-template'
import {
  StoreIcon,
  ZapIcon,
  CreditCardIcon,
  PackageIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  CompassIcon,
  PaintbrushIcon,
  WrenchIcon,
  RocketIcon,
} from 'lucide-react'

export default function ShopifyPage() {
  return (
    <ServicePageTemplate
      badge="Shopify Specialists"
      title="Shopify Plus, built"
      titleAccent="the right way"
      subtitle="We're Shopify Plus partners specializing in custom themes, headless storefronts, and conversion optimization for ambitious brands ready to scale past 7 and 8 figures."
      heroImage="/design-service.jpg"
      primaryCTA="Get a Shopify Audit"
      secondaryCTA="See Shopify Work"
      stats={[
        { value: 250, suffix: '+', label: 'Shopify Stores' },
        { value: 22, suffix: 'M+', prefix: '£', label: 'Annual GMV' },
        { value: 4.6, suffix: '%', label: 'Avg. Conversion' },
        { value: 95, suffix: '+', label: 'PageSpeed Score' },
      ]}
      featuresHeading="Shopify, mastered."
      featuresSubheading="Everything Shopify can do, done at the highest level by a Plus-certified senior team."
      features={[
        { icon: StoreIcon, title: 'Custom Theme Dev', description: 'Bespoke themes built from scratch, no bloat, no pre-built junk, just clean Liquid.' },
        { icon: ZapIcon, title: 'Shopify Plus Setup', description: 'Plus migrations, Launchpad campaigns, Scripts, B2B, and Wholesale Channel mastery.' },
        { icon: CreditCardIcon, title: 'Checkout Customization', description: 'Native checkout extensibility, Shop Pay, accelerated checkouts, and one-page flows.' },
        { icon: PackageIcon, title: 'Apps & Integrations', description: 'Klaviyo, Recharge, Yotpo, Gorgias, Loop, vetted apps that compound revenue.' },
        { icon: TrendingUpIcon, title: 'CRO & Speed', description: 'PageSpeed 95+, conversion-rate experiments, and A/B testing that actually moves numbers.' },
        { icon: ShieldCheckIcon, title: 'Headless / Hydrogen', description: 'When Liquid hits its ceiling, we build with Hydrogen/Oxygen or fully custom headless.' },
      ]}
      benefits={[
        'Shopify Plus Partner, official certified expertise',
        'Native checkout extensibility (not legacy Checkout.liquid hacks)',
        'PageSpeed 95+ on mobile and desktop',
        'Plus migration with zero downtime',
        'Klaviyo flows pre-built for revenue from day one',
        'Direct Slack access to your senior Shopify lead',
      ]}
      processHeading="From audit to scale."
      processSubheading="A repeatable 4-stage Shopify engagement model, used to scale hundreds of brands."
      process={[
        { step: '01', title: 'Audit', description: 'Deep dive into your store, funnel, theme, and apps.', icon: CompassIcon },
        { step: '02', title: 'Design', description: 'Custom theme designs in Figma based on conversion data.', icon: PaintbrushIcon },
        { step: '03', title: 'Build', description: 'Theme development, app setup, and full integration.', icon: WrenchIcon },
        { step: '04', title: 'Optimize', description: 'A/B testing and CRO experiments to lift revenue.', icon: RocketIcon },
      ]}
      pricingHeading="Shopify pricing."
      pricingSubheading="Engagements scale from theme tweaks to full Plus rebuilds."
      pricing={[
        {
          name: 'Theme Refresh',
          price: '£3,500',
          priceSuffix: 'one-time',
          description: 'Speed up and redesign your existing store.',
          features: ['Premium theme + customization', 'CRO audit & quick wins', 'PageSpeed optimization', 'Up to 30 products migrated', '30-day support', '3-week delivery'],
        },
        {
          name: 'Custom Theme Build',
          price: '£15,000',
          priceSuffix: 'one-time',
          description: 'Bespoke theme built from scratch.',
          features: ['Custom Figma design', 'Custom Liquid theme', 'Klaviyo & subscription setup', 'B2B / wholesale optional', 'Headless option available', '90-day optimization', '8-week delivery'],
          popular: true,
        },
        {
          name: 'Shopify Plus / Headless',
          price: '£40,000+',
          priceSuffix: 'custom',
          description: 'Enterprise-grade Plus or Hydrogen builds.',
          features: ['Plus migration', 'Hydrogen / Oxygen storefront', 'Custom checkout', 'ERP & POS integration', 'Multi-region & currency', 'Dedicated Plus team', 'Quarterly roadmap', 'Bespoke pricing'],
        },
      ]}
      faqs={[
        { question: 'Are you a Shopify Partner?', answer: 'Yes, Shopify Plus Partner. Our senior devs are Liquid, Hydrogen, and Shopify Functions certified.' },
        { question: 'Can you migrate to Shopify from another platform?', answer: 'Yes. We handle migrations from WooCommerce, Magento, BigCommerce, and custom platforms, with SEO preserved and zero downtime.' },
        { question: 'Should I go headless?', answer: "Only if your speed or UX goals exceed what Liquid can deliver. We'll honestly tell you whether headless is worth the added complexity for your business." },
        { question: 'Do you maintain stores after launch?', answer: 'Yes. Retainers cover theme updates, app management, CRO experiments, and bug fixes, typically £2,500–£8,000/month.' },
        { question: 'Can you optimize my existing Shopify store?', answer: "Absolutely. We run a free 30-min audit identifying the top 3 conversion-killers in your store. From there we can scope a CRO sprint or full rebuild." },
      ]}
      testimonials={[
        { name: 'Priya Mehta', role: 'Founder, Lumora Beauty', quote: 'PageSpeed went from 42 to 96. Conversion lifted 38% in the first month. They know Shopify inside out.' },
        { name: 'Daniel Park', role: 'CEO, Northstar Apparel', quote: 'Smoothest Shopify Plus migration we could have hoped for. Zero downtime, zero lost SEO, and Black Friday went off without a hitch.' },
        { name: 'Maya Robertson', role: 'Founder, Field & Forge', quote: 'They rebuilt our store on Hydrogen. Page loads are now instant and our checkout conversion is the highest in our category.' },
      ]}
      ctaHeading="Ready to unlock more revenue from Shopify?"
      ctaSubheading="Free 30-minute Shopify audit, we identify the top 3 conversion-killers in your store."
      ctaButton="Book Free Shopify Audit"
      techStack={['Shopify Plus', 'Hydrogen', 'Oxygen', 'Liquid', 'Shopify Functions', 'Klaviyo', 'Recharge', 'Gorgias', 'Yotpo']}
    />
  )
}
