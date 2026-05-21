'use client'

import { ServicePageTemplate } from '@/components/service-page-template'
import {
  PaletteIcon,
  SparklesIcon,
  UsersIcon,
  TrendingUpIcon,
  ZapIcon,
  CheckCircle2Icon,
  CompassIcon,
  LightbulbIcon,
  PenToolIcon,
  PackageIcon,
} from 'lucide-react'

export default function BrandDesignPage() {
  return (
    <ServicePageTemplate
      badge="Brand Design Services"
      title="Brand design that"
      titleAccent="stands out"
      subtitle="A strong brand is more than just a logo, it's the soul of your business. We create distinctive, memorable brands that resonate with your audience and drive measurable business growth."
      heroImage="/design-service.jpg"
      primaryCTA="Start Your Brand Journey"
      secondaryCTA="View Portfolio"
      stats={[
        { value: 200, suffix: '+', label: 'Brands Designed' },
        { value: 18, suffix: 'yrs', label: 'Combined Experience' },
        { value: 47, suffix: '+', label: 'Design Awards' },
        { value: 100, suffix: '%', label: 'Original Concepts' },
      ]}
      featuresHeading="A complete brand system."
      featuresSubheading="A complete identity that works seamlessly across every channel, digital and print."
      features={[
        { icon: PaletteIcon, title: 'Color Strategy', description: 'Carefully selected palettes that evoke emotion, build recognition, and align with your brand personality.' },
        { icon: SparklesIcon, title: 'Logo Design', description: 'Timeless logos that work everywhere, from favicons to billboards, and stand the test of time.' },
        { icon: UsersIcon, title: 'Brand Guidelines', description: 'Comprehensive brand books that ensure consistency across every touchpoint and team member.' },
        { icon: TrendingUpIcon, title: 'Visual Identity', description: 'Complete visual systems including typography, imagery, and design patterns for cohesive expression.' },
        { icon: ZapIcon, title: 'Marketing Materials', description: 'Professionally designed business cards, letterheads, social templates, and marketing collateral.' },
        { icon: CheckCircle2Icon, title: 'Brand Strategy', description: 'Deep market positioning, audience research, and competitive analysis to inform every decision.' },
      ]}
      benefits={[
        'Senior in-house designers, no junior hand-offs',
        'Strategy-first approach grounded in market research',
        'Unlimited revisions until you love it (Premium tier)',
        'All source files delivered, you own everything',
        'Brand evolution roadmap for the first 12 months',
        'Direct Slack access to your design lead',
      ]}
      processHeading="Our design process."
      processSubheading="A strategic, collaborative four-step journey from blank page to finished brand."
      process={[
        { step: '01', title: 'Discovery', description: 'Deep dive into your vision, market, and audience.', icon: CompassIcon },
        { step: '02', title: 'Strategy', description: 'Define positioning and creative direction.', icon: LightbulbIcon },
        { step: '03', title: 'Design', description: 'Create and refine concepts with your feedback.', icon: PenToolIcon },
        { step: '04', title: 'Delivery', description: 'Final files and comprehensive brand guidelines.', icon: PackageIcon },
      ]}
      pricingHeading="Three packages. Zero surprises."
      pricingSubheading="Pick the tier that fits today, every package can be expanded as your brand grows."
      pricing={[
        {
          name: 'Starter Brand',
          price: '£2,499',
          priceSuffix: 'one-time',
          description: 'Perfect for new ventures and solopreneurs.',
          features: [
            'Logo design (5 concepts)',
            'Color palette (2–3 colors)',
            'Basic brand guidelines',
            'Business card design',
            'Email signature template',
            '1 round of revisions',
            '2-week turnaround',
          ],
        },
        {
          name: 'Professional Brand',
          price: '£6,999',
          priceSuffix: 'one-time',
          description: 'Most popular for growing businesses.',
          features: [
            'Logo design (7 concepts)',
            'Complete color palette',
            'Comprehensive brand guide',
            'Business cards & letterhead',
            'Email & social templates',
            'Website design mockups',
            'Marketing collateral suite',
            '2 rounds of revisions',
            'Brand strategy consultation',
          ],
          popular: true,
        },
        {
          name: 'Premium Brand',
          price: '£14,999',
          priceSuffix: 'one-time',
          description: 'For established brands ready to elevate.',
          features: [
            'Logo design (10 concepts)',
            'Extended palettes & variants',
            'Premium guidelines (50+ pages)',
            'Full stationery suite',
            'Social template library',
            'Website design system',
            'Print & digital materials',
            'Packaging consultation',
            'Unlimited revisions (60 days)',
            'Brand evolution roadmap',
          ],
        },
      ]}
      faqs={[
        { question: 'How long does the brand design process take?', answer: 'Depending on your package, 2–4 weeks. This includes discovery, concept development, revisions, and final deliverables.' },
        { question: 'Do you provide all file formats for my logo?', answer: "Absolutely. You'll receive PNG, SVG, PDF, EPS, and high-resolution JPG, plus variations for different backgrounds and sizes." },
        { question: "What if I don't like the initial concepts?", answer: "We build in revision rounds for this exact reason. We'll work with you until we get it right, your satisfaction is non-negotiable." },
        { question: 'Can you redesign my existing brand?', answer: "Yes. Whether you're looking for a complete overhaul or a refresh, we can update your brand while preserving what's already working." },
        { question: 'Do you provide unlimited revisions?', answer: 'Standard packages include 1–2 revision rounds. Our Premium package includes unlimited revisions for 60 days.' },
        { question: 'Do I own all the design files?', answer: 'Completely. Once final payment is made, all source files, fonts, and rights are transferred to you. No ongoing licensing fees, ever.' },
      ]}
      testimonials={[
        { name: 'Lisa Chen', role: 'Fashion Brand Founder', quote: 'The branding elevated our entire business. We looked more professional than competitors 10x our size. Sales increased 40% post-launch.' },
        { name: 'Marcus Williams', role: 'Tech Startup CEO', quote: 'Professional, creative, and collaborative. They understood our vision and delivered something that exceeded expectations.' },
        { name: 'Priya Mehta', role: 'Wellness Brand Owner', quote: "Every detail was considered. The brand guidelines alone are a masterclass, we still reference them three years later." },
      ]}
      ctaHeading="Ready to transform your brand?"
      ctaSubheading="Let's create a brand that captures your essence and drives real business results."
      ctaButton="Book Your Free Consultation"
      techStack={['Adobe CC', 'Figma', 'Illustrator', 'Photoshop', 'InDesign', 'After Effects', 'Sketch', 'Procreate']}
    />
  )
}
