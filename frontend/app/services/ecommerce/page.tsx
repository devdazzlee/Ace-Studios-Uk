'use client'

import { ServicePageTemplate } from '@/components/service-page-template'
import {
  ShoppingCartIcon,
  CreditCardIcon,
  TruckIcon,
  PackageIcon,
  ZapIcon,
  TrendingUpIcon,
  CompassIcon,
  PaintbrushIcon,
  WrenchIcon,
  RocketIcon,
} from 'lucide-react'

export default function EcommercePage() {
  return (
    <ServicePageTemplate
      badge="E-Commerce Solutions"
      title="Online stores built to"
      titleAccent="sell"
      subtitle="From Shopify and WooCommerce to fully custom storefronts, we design, build, and optimize e-commerce experiences that turn browsers into buyers and one-time customers into lifelong fans."
      heroImage="/design-service.jpg"
      primaryCTA="Get an E-Commerce Quote"
      secondaryCTA="See Store Portfolio"
      stats={[
        { value: 400, suffix: '+', label: 'Stores Built' },
        { value: 38, suffix: 'M+', prefix: '£', label: 'GMV Generated' },
        { value: 4.2, suffix: '%', label: 'Avg. Conversion' },
        { value: 67, suffix: '%', label: 'Avg. Return Customer' },
      ]}
      featuresHeading="Everything a store needs."
      featuresSubheading="A complete commerce stack, from storefront to checkout to fulfillment, engineered for revenue."
      features={[
        { icon: ShoppingCartIcon, title: 'Storefront Design', description: 'Custom themes that look beautiful and convert. Mobile-first and conversion-tested.' },
        { icon: CreditCardIcon, title: 'Checkout Optimization', description: 'One-page, express, and accelerated checkouts that reduce cart abandonment dramatically.' },
        { icon: TruckIcon, title: 'Shipping & Fulfillment', description: 'Real-time rates, fulfillment integrations, and 3PL routing, all automated.' },
        { icon: PackageIcon, title: 'Inventory & Orders', description: 'Sync stock across channels (Shopify, Amazon, TikTok) from a single source of truth.' },
        { icon: ZapIcon, title: 'Apps & Integrations', description: 'Klaviyo, ReCharge, Yotpo, Loop, Stripe, pre-vetted apps that compound revenue.' },
        { icon: TrendingUpIcon, title: 'CRO & Analytics', description: 'Funnel analytics, heatmaps, and A/B testing baked in to keep lifting conversion.' },
      ]}
      benefits={[
        'Platform-agnostic, Shopify, WooCommerce, BigCommerce, or fully custom',
        'Conversion rate optimization built into every build',
        'Multi-channel sync, store + Amazon + TikTok in one dashboard',
        'Subscription, B2B, and wholesale support out of the box',
        'Email and SMS marketing flows pre-built for you',
        '90-day post-launch optimization included',
      ]}
      processHeading="From idea to first sale."
      processSubheading="A 6–10 week launch process designed for revenue from day one."
      process={[
        { step: '01', title: 'Strategy', description: 'Audit your products, audience, competitors, and pricing.', icon: CompassIcon },
        { step: '02', title: 'Design', description: 'Custom storefront design optimized for your audience.', icon: PaintbrushIcon },
        { step: '03', title: 'Build', description: 'Theme development, app setup, and full integration.', icon: WrenchIcon },
        { step: '04', title: 'Launch', description: 'Migration, QA, training, and 90-day optimization.', icon: RocketIcon },
      ]}
      pricingHeading="E-commerce pricing."
      pricingSubheading="Three tiers built for different stages, every store production-grade."
      pricing={[
        {
          name: 'Launch Store',
          price: '£4,500',
          priceSuffix: 'one-time',
          description: 'For founders launching their first store.',
          features: ['Premium theme customization', 'Up to 50 product listings', 'Payment & shipping setup', 'Basic email flows', 'Analytics setup', '30-day support', '4-week delivery'],
        },
        {
          name: 'Growth Store',
          price: '£12,500',
          priceSuffix: 'one-time',
          description: 'Custom design with conversion focus.',
          features: ['Custom storefront design', 'Unlimited products', 'Klaviyo email & SMS', 'CRO audit & A/B testing', 'Subscription support', 'Reviews & loyalty', '90-day optimization', '6-week delivery'],
          popular: true,
        },
        {
          name: 'Enterprise Store',
          price: '£30,000+',
          priceSuffix: 'custom',
          description: 'Shopify Plus or headless commerce.',
          features: ['Headless or Shopify Plus', 'Custom checkout', 'B2B + wholesale', 'Multi-region & currency', 'ERP & POS integration', 'Dedicated team', 'Quarterly roadmap', 'Bespoke pricing'],
        },
      ]}
      faqs={[
        { question: 'Which platform should I use?', answer: "We recommend Shopify for 90% of clients, it's fast, reliable, and the app ecosystem compounds growth. We also build on WooCommerce, BigCommerce, or fully headless." },
        { question: 'Can you migrate my existing store?', answer: 'Yes. We handle product, customer, and order data migration with zero downtime and SEO preservation.' },
        { question: 'Do you set up payments & shipping?', answer: 'Completely. Stripe, PayPal, Shop Pay, real-time shipping rates, tax automation, all configured before launch.' },
        { question: 'How do you handle subscriptions or B2B?', answer: 'We integrate ReCharge for subscriptions and Shopify B2B (or Wholesale Hero) for wholesale. Custom flows for either are available.' },
        { question: 'Do you offer ongoing optimization?', answer: 'Yes. Our retainers cover CRO experiments, app management, and growth experiments, typically £2,500–£10,000/month.' },
      ]}
      testimonials={[
        { name: 'Priya Mehta', role: 'Founder, Lumora Beauty', quote: 'Revenue tripled in six months. The CRO work alone paid for the entire engagement.' },
        { name: 'Maya Robertson', role: 'Founder, Field & Forge', quote: 'They built our Shopify store and ran our paid media, all without a single hand-off. Cleanest agency engagement in 10 years.' },
        { name: 'David Kim', role: 'DTC Founder', quote: 'Cart abandonment dropped from 71% to 48% after their checkout work. Game-changing.' },
      ]}
      ctaHeading="Ready to launch a store that sells?"
      ctaSubheading="Tell us your goals, we'll respond within 24 hours with a fixed quote and timeline."
      ctaButton="Get a Free Quote"
      techStack={['Shopify Plus', 'WooCommerce', 'BigCommerce', 'Klaviyo', 'ReCharge', 'Yotpo', 'Stripe', 'Shop Pay', 'Gorgias']}
    />
  )
}
