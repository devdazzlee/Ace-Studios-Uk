'use client'

import { ServicePageTemplate } from '@/components/service-page-template'
import {
  CodeIcon,
  ZapIcon,
  SmartphoneIcon,
  ShieldCheckIcon,
  SearchIcon,
  GaugeIcon,
  CompassIcon,
  PaintbrushIcon,
  WrenchIcon,
  RocketIcon,
} from 'lucide-react'

export default function WebsiteDevelopmentPage() {
  return (
    <ServicePageTemplate
      badge="Website Development"
      title="Websites that"
      titleAccent="convert"
      subtitle="Beautiful is the baseline. We build websites that load in under a second, rank on Google, and turn visitors into customers, all on a modern, future-proof stack."
      heroImage="/design-service.jpg"
      primaryCTA="Get a Website Quote"
      secondaryCTA="View Live Sites"
      stats={[
        { value: 1000, suffix: '+', label: 'Sites Launched' },
        { value: 98, suffix: '%', label: 'PageSpeed Score' },
        { value: 45, suffix: '%', label: 'Avg. CR Uplift' },
        { value: 24, suffix: 'h', label: 'Avg. Reply Time' },
      ]}
      featuresHeading="Engineered to convert."
      featuresSubheading="Every site we ship hits the same bar, pixel-perfect design, sub-second performance, and architecture that scales."
      features={[
        { icon: ZapIcon, title: 'Blazing Performance', description: 'Sub-second load times via static rendering, image optimization, and edge caching.' },
        { icon: SmartphoneIcon, title: 'Responsive Design', description: 'Mobile-first builds that look and work flawlessly on every screen and device.' },
        { icon: SearchIcon, title: 'SEO Foundations', description: 'Technical SEO baked in from day one, schema, sitemaps, meta, Core Web Vitals.' },
        { icon: ShieldCheckIcon, title: 'Security & Reliability', description: 'SSL, DDoS protection, daily backups, and 99.99% uptime hosting.' },
        { icon: GaugeIcon, title: 'CMS Integration', description: 'Edit your content yourself with Sanity, Contentful, or WordPress, no dev needed.' },
        { icon: CodeIcon, title: 'Conversion-Optimized', description: 'A/B testing, heatmaps, and analytics built in to keep optimizing post-launch.' },
      ]}
      benefits={[
        'Built on Next.js, React, and TypeScript, modern, future-proof stack',
        'Lighthouse scores 95+ across performance, SEO, and accessibility',
        'Full ownership, you get the code, the repo, everything',
        '30-day post-launch optimization included',
        'Optional white-glove hosting & maintenance retainer',
        'Direct Slack channel with your dev lead',
      ]}
      processHeading="Our build process."
      processSubheading="From kickoff to launch in 4–8 weeks. No mystery, no missed deadlines."
      process={[
        { step: '01', title: 'Discovery', description: 'Audit your current site, competitors, and conversion funnel.', icon: CompassIcon },
        { step: '02', title: 'Design', description: 'Wireframes, mockups, and prototypes in Figma for your approval.', icon: PaintbrushIcon },
        { step: '03', title: 'Build', description: 'Pixel-perfect engineering with daily progress on a staging URL.', icon: WrenchIcon },
        { step: '04', title: 'Launch', description: 'QA, optimization, deployment, and 30-day post-launch support.', icon: RocketIcon },
      ]}
      pricingHeading="Transparent website pricing."
      pricingSubheading="Three tiers built for different stages of growth, every one production-grade."
      pricing={[
        {
          name: 'Starter Site',
          price: '£3,500',
          priceSuffix: 'one-time',
          description: 'A 5-page launch site for new ventures.',
          features: ['Up to 5 pages', 'Mobile-responsive design', 'On-page SEO', 'Contact form & analytics', '1 round of revisions', '30-day support', '3-week delivery'],
        },
        {
          name: 'Growth Site',
          price: '£9,500',
          priceSuffix: 'one-time',
          description: 'Conversion-focused marketing site.',
          features: ['Up to 15 pages', 'Custom CMS integration', 'Advanced SEO & schema', 'Blog & content system', 'A/B testing setup', '2 rounds of revisions', '60-day optimization', '5-week delivery'],
          popular: true,
        },
        {
          name: 'Enterprise Site',
          price: '£24,000+',
          priceSuffix: 'custom',
          description: 'Complex sites, integrations, and bespoke features.',
          features: ['Unlimited pages', 'Custom integrations', 'Headless CMS', 'Personalization', 'Multi-language', 'Performance budget', 'Quarterly optimization', 'Dedicated team'],
        },
      ]}
      faqs={[
        { question: 'How long does it take to build a website?', answer: 'Starter sites ship in 3 weeks, Growth sites in 5 weeks, Enterprise builds in 8–12 weeks. Timelines are guaranteed with milestone payments.' },
        { question: 'What technologies do you use?', answer: 'We default to Next.js, React, TypeScript, and Tailwind CSS for marketing sites. For content-heavy projects we pair with Sanity or Contentful as a headless CMS.' },
        { question: 'Do I own the website after launch?', answer: 'Completely. We hand over the GitHub repo, all assets, and full credentials. No vendor lock-in, ever.' },
        { question: 'Can you migrate my existing site?', answer: 'Yes. We handle data migration, URL redirects, and SEO preservation so you keep your rankings during the move.' },
        { question: 'Do you offer ongoing maintenance?', answer: 'Yes. Maintenance retainers start at £500/month and cover hosting, updates, security, and minor changes.' },
      ]}
      testimonials={[
        { name: 'Daniel Park', role: 'CEO, Northstar Apparel', quote: 'Conversion rate jumped 45% in the first month after launch. The team treated our project like their own startup.' },
        { name: 'Sarah Johnson', role: 'E-Commerce Founder', quote: 'Fastest, best-built site we have ever owned. PageSpeed scores of 100 across the board.' },
        { name: 'James Wilson', role: 'SaaS Founder', quote: 'They delivered on time, on budget, and the code is so clean my internal team can maintain it easily.' },
      ]}
      ctaHeading="Ready to ship a faster, better website?"
      ctaSubheading="Tell us your goals, we'll respond with a fixed timeline and transparent quote within 24 hours."
      ctaButton="Get a Free Quote"
      techStack={['Next.js', 'React', 'TypeScript', 'Tailwind', 'Sanity', 'Contentful', 'Vercel', 'Framer Motion', 'GSAP']}
    />
  )
}
