'use client'

import { ServicePageTemplate } from '@/components/service-page-template'
import {
  TrendingUpIcon,
  SearchIcon,
  Share2Icon,
  MailIcon,
  TargetIcon,
  BarChart3Icon,
  CompassIcon,
  LineChartIcon,
  MegaphoneIcon,
  RocketIcon,
} from 'lucide-react'

export default function DigitalMarketingPage() {
  return (
    <ServicePageTemplate
      badge="Digital Marketing"
      title="Marketing that drives"
      titleAccent="real revenue"
      subtitle="Not impressions, not vanity metrics, actual revenue. We run SEO, paid ads, email/SMS, and social media for brands that measure growth in pounds and pence."
      heroImage="/design-service.jpg"
      primaryCTA="Get a Free Marketing Audit"
      secondaryCTA="See Case Studies"
      stats={[
        { value: 8, suffix: 'x', label: 'Avg. ROAS' },
        { value: 320, suffix: '+', label: 'Brands Scaled' },
        { value: 50, suffix: 'M+', prefix: '£', label: 'Ad Spend Managed' },
        { value: 47, suffix: '%', label: 'Avg. Revenue Lift' },
      ]}
      featuresHeading="A full-stack growth team."
      featuresSubheading="Six channels, one team. We orchestrate them together so every pound compounds."
      features={[
        { icon: SearchIcon, title: 'SEO & Content', description: 'Technical SEO, content strategy, and link-building that ranks for high-intent keywords.' },
        { icon: TargetIcon, title: 'Paid Search', description: 'Google Ads, Bing, and Performance Max managed to your CAC and target ROAS.' },
        { icon: Share2Icon, title: 'Paid Social', description: 'Meta, TikTok, Pinterest, and LinkedIn ads with in-house creative production.' },
        { icon: MailIcon, title: 'Email & SMS', description: 'Klaviyo and Postscript flows, broadcasts, and segmentation that drives 30%+ of revenue.' },
        { icon: TrendingUpIcon, title: 'CRO & Analytics', description: 'A/B testing, funnel analytics, and attribution modeling with GA4 and Triple Whale.' },
        { icon: BarChart3Icon, title: 'Influencer & UGC', description: 'Creator partnerships, UGC production, and affiliate networks at scale.' },
      ]}
      benefits={[
        'Senior strategist + senior media buyer + in-house creative, every account',
        'Weekly reporting on revenue, ROAS, and CAC (not just impressions)',
        'In-house creative team, no extra fees for ad production',
        'No long-term contracts, month-to-month, cancel anytime',
        'Triple Whale, GA4, and Northbeam attribution included',
        'Founder-level access, text our CMO directly',
      ]}
      processHeading="The growth playbook."
      processSubheading="A repeatable model used to scale brands from £1M to £20M+ in annual revenue."
      process={[
        { step: '01', title: 'Audit', description: 'Funnel, channel, and competitor audit with growth opportunities.', icon: CompassIcon },
        { step: '02', title: 'Strategy', description: 'Channel mix, budget allocation, and 90-day roadmap.', icon: LineChartIcon },
        { step: '03', title: 'Activate', description: 'Launch ads, content, email, and SEO in parallel.', icon: MegaphoneIcon },
        { step: '04', title: 'Scale', description: 'Daily optimization, weekly experiments, monthly expansion.', icon: RocketIcon },
      ]}
      pricingHeading="Marketing retainers."
      pricingSubheading="Pricing scales with your ad spend, no setup fees, no long-term contracts."
      pricing={[
        {
          name: 'Launch',
          price: '£3,500',
          priceSuffix: '/month',
          description: 'For brands under £50k/month in revenue.',
          features: ['1–2 paid channels', 'SEO basics & blog content (2/month)', 'Email flows (5 core)', 'Weekly reporting', 'Bi-weekly strategy calls', 'Up to £20k ad spend managed'],
        },
        {
          name: 'Growth',
          price: '£7,500',
          priceSuffix: '/month',
          description: 'For brands doing £50k–£500k monthly.',
          features: ['Up to 4 paid channels', 'Full SEO + 4 blog posts/mo', 'Klaviyo + Postscript managed', 'In-house UGC creative', 'CRO testing on-site', 'Weekly strategy calls', 'Up to £100k ad spend'],
          popular: true,
        },
        {
          name: 'Scale',
          price: 'Custom',
          description: 'For brands £500k+/month.',
          features: ['All paid channels', 'Influencer & affiliate programs', 'Lifecycle marketing engine', 'Brand & PR campaigns', 'Quarterly creative refresh', 'Dedicated growth team', 'Attribution & MMM', 'Bespoke pricing'],
        },
      ]}
      faqs={[
        { question: 'Do you require a long-term contract?', answer: 'No. All retainers are month-to-month. We earn the next month by performing this month.' },
        { question: 'Is ad spend included in pricing?', answer: 'No, retainers cover our team. Ad spend is paid directly to platforms via your credit card. You always own the accounts.' },
        { question: 'How fast can we see results?', answer: 'Paid channels show signal in 2–4 weeks. SEO and content compound over 3–6 months. We set channel-specific expectations during onboarding.' },
        { question: 'Do you create the ad creative?', answer: 'Yes. In-house copy, photography, UGC, motion graphics, and video, included in every retainer. No outsourced creative fees.' },
        { question: 'Who owns the accounts?', answer: 'You always own your ad accounts, GA, and email platform. We work inside your accounts under our login, full transparency, full ownership.' },
      ]}
      testimonials={[
        { name: 'Emma Rodriguez', role: 'Digital Agency Owner', quote: 'Conversion rates up 45% and lead quality improved dramatically. Their attribution work alone is worth the retainer.' },
        { name: 'Marcus Chen', role: 'DTC Founder', quote: '8x blended ROAS across paid, organic, and email. Best growth team we have hired in five years.' },
        { name: 'Sarah Johnson', role: 'E-Commerce Founder', quote: 'They scaled us from £200k to £1.4M/month in 11 months. The creative and email work compounded everything.' },
      ]}
      ctaHeading="Ready to scale profitably?"
      ctaSubheading="Free 60-min audit, we'll identify the biggest growth levers in your business within 24 hours."
      ctaButton="Book Free Marketing Audit"
      techStack={['Meta Ads', 'Google Ads', 'TikTok Ads', 'Klaviyo', 'Postscript', 'GA4', 'Triple Whale', 'Northbeam', 'Ahrefs', 'Semrush']}
    />
  )
}
