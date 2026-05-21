'use client'

import { ServicePageTemplate } from '@/components/service-page-template'
import {
  MegaphoneIcon,
  VideoIcon,
  UsersIcon,
  TrendingUpIcon,
  ShoppingBagIcon,
  ZapIcon,
  CompassIcon,
  StoreIcon,
  PlayCircleIcon,
  RocketIcon,
} from 'lucide-react'

export default function TikTokShopPage() {
  return (
    <ServicePageTemplate
      badge="TikTok Shop"
      title="Win on the world's"
      titleAccent="biggest video commerce"
      subtitle="TikTok Shop is the fastest-growing commerce channel on Earth. We handle setup, creator partnerships, live selling, affiliate management, and ads, so you can ride the wave instead of figuring it out alone."
      heroImage="/design-service.jpg"
      primaryCTA="Get TikTok Shop Setup"
      secondaryCTA="See Creator Reels"
      stats={[
        { value: 90, suffix: '+', label: 'TikTok Shops' },
        { value: 18, suffix: 'M+', prefix: '£', label: 'GMV Generated' },
        { value: 2500, suffix: '+', label: 'Creators Activated' },
        { value: 7, suffix: 'x', label: 'Avg. ROAS' },
      ]}
      featuresHeading="Everything TikTok Shop, handled."
      featuresSubheading="From setup to scale, we own every lever, so you can focus on product."
      features={[
        { icon: ShoppingBagIcon, title: 'Shop Setup & Onboarding', description: 'Full Shopify ↔ TikTok integration, catalog sync, and Seller Center configuration.' },
        { icon: VideoIcon, title: 'Content & Reels', description: 'Short-form video creation with hooks, B-roll, and trending audio that convert.' },
        { icon: UsersIcon, title: 'Creator Affiliate Program', description: 'Recruit, onboard, and manage hundreds of TikTok creators on commission.' },
        { icon: PlayCircleIcon, title: 'Live Shopping', description: 'Live commerce production, hosts, sets, scripts, and 24/7 live streams.' },
        { icon: TrendingUpIcon, title: 'TikTok Ads', description: 'Spark Ads, GMV Max, and Video Shopping Ads optimized for ROAS.' },
        { icon: ZapIcon, title: 'Fulfillment & Returns', description: 'TikTok-compliant fulfillment, label generation, and dispute resolution.' },
      ]}
      benefits={[
        'TikTok Shop Partner, official certified expertise',
        'In-house creator network, 500+ vetted influencers',
        'Dedicated affiliate manager and content producer',
        'Spark Ads + GMV Max managed to your ROAS target',
        'Weekly reporting on GMV, ROAS, and creator performance',
        'Live shopping studio access included in Growth+ tiers',
      ]}
      processHeading="The TikTok Shop playbook."
      processSubheading="A repeatable model used to launch and scale brands on TikTok Shop to 7-figure GMV."
      process={[
        { step: '01', title: 'Setup', description: 'Shop integration, product approval, compliance review.', icon: StoreIcon },
        { step: '02', title: 'Content', description: 'Reel production, hooks, and content engine setup.', icon: VideoIcon },
        { step: '03', title: 'Creators', description: 'Recruit, onboard, and activate affiliate creators.', icon: UsersIcon },
        { step: '04', title: 'Scale', description: 'Spark Ads + GMV Max + live selling for compound growth.', icon: RocketIcon },
      ]}
      pricingHeading="TikTok Shop pricing."
      pricingSubheading="Scales with your monthly GMV, no long-term lock-ins."
      pricing={[
        {
          name: 'Launch',
          price: '£2,500',
          priceSuffix: '/month',
          description: 'Get on TikTok Shop the right way.',
          features: ['Full shop setup & integration', 'Catalog sync', '10 reels per month', 'Up to 25 creators onboarded', 'Weekly reporting', 'Email support'],
        },
        {
          name: 'Growth',
          price: '£6,500',
          priceSuffix: '/month',
          description: 'For brands doing £25k–£250k GMV monthly.',
          features: ['30 reels per month', 'Up to 200 creators managed', 'Spark Ads management', 'Live shopping (4/month)', 'GMV Max optimization', 'Weekly strategy calls', 'Slack support'],
          popular: true,
        },
        {
          name: 'Scale',
          price: 'Custom',
          description: 'For brands £250k+/month GMV.',
          features: ['Unlimited content', 'Unlimited creators', 'Daily live shopping', 'Unlimited ad spend', 'In-house creator partnerships', 'Dedicated production crew', 'Quarterly strategy', 'Bespoke pricing'],
        },
      ]}
      faqs={[
        { question: 'Is TikTok Shop right for my brand?', answer: 'TikTok Shop excels for visually-driven products under £100, beauty, fashion, home, food, and gadgets. We can audit your category and tell you honestly.' },
        { question: 'Do you handle creator payments?', answer: 'Yes. We onboard creators on commission, manage payouts via TikTok Affiliate, and handle all 1099 paperwork.' },
        { question: 'How do live shopping streams work?', answer: 'For Growth and Scale tiers, we produce 4–30+ lives per month with hosts, sets, scripts, and full production. You ship product, we run the show.' },
        { question: 'Can you sync inventory with Shopify?', answer: 'Yes. Real-time sync with Shopify, including pricing, stock, variants, and orders. No double-data entry.' },
        { question: "What if TikTok Shop doesn't work for us?", answer: "We are honest. If our 60-day pilot doesn't show clear traction, we'll either pivot the strategy or recommend you redirect that budget to channels with better fit." },
      ]}
      testimonials={[
        { name: 'Lisa Thompson', role: 'Beauty Brand Owner', quote: 'Hit £400k GMV in our second month on TikTok Shop. Their creator network is unreal.' },
        { name: 'Emma Rodriguez', role: 'DTC Founder', quote: 'Lives alone do 6 figures a month for us now. They handle production end to end.' },
        { name: 'David Kim', role: 'Apparel Founder', quote: 'Best 7x ROAS we have ever seen. Spark Ads + creators compound on each other beautifully.' },
      ]}
      ctaHeading="Ready to win on TikTok Shop?"
      ctaSubheading="Free 30-min strategy session, we'll audit your category and identify your fastest path to 6-figure GMV."
      ctaButton="Book Free TikTok Strategy"
      techStack={['TikTok Seller Center', 'TikTok Shop API', 'Spark Ads', 'GMV Max', 'TikTok Affiliate', 'Shopify Integration', 'CapCut', 'TikTok Ads Manager']}
    />
  )
}
