'use client'

import { ServicePageTemplate } from '@/components/service-page-template'
import {
  BuildingIcon,
  FileTextIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  GlobeIcon,
  ScaleIcon,
  CompassIcon,
  ListIcon,
  WrenchIcon,
  RocketIcon,
} from 'lucide-react'

export default function OnlineBusinessSetupPage() {
  return (
    <ServicePageTemplate
      badge="Online Business Setup"
      title="From idea to fully"
      titleAccent="launched business"
      subtitle="Ltd company formation, UTR, business banking, tax setup, contracts, payment processing, we handle the boring-but-critical stuff so you can focus on building, marketing, and growing."
      heroImage="/design-service.jpg"
      primaryCTA="Get a Setup Quote"
      secondaryCTA="See Checklist"
      stats={[
        { value: 600, suffix: '+', label: 'Businesses Launched' },
        { value: 40, suffix: '+', label: 'Countries Served' },
        { value: 7, suffix: 'd', label: 'Avg. Ltd Filing' },
        { value: 100, suffix: '%', label: 'Compliance Rate' },
      ]}
      featuresHeading="Everything to launch right."
      featuresSubheading="Every piece your business needs in the first 90 days, handled by people who've done this hundreds of times."
      features={[
        { icon: BuildingIcon, title: 'Ltd Company Formation', description: 'Companies House filing, registered office, UTR, and articles of association, fully white-glove.' },
        { icon: CreditCardIcon, title: 'Business Banking', description: 'Tide, Starling, or Monzo Business setup with multi-user roles and accounting integration.' },
        { icon: FileTextIcon, title: 'Contracts & Legal', description: 'Founder agreement, terms of service, privacy policy, NDA, and supplier contracts.' },
        { icon: ShieldCheckIcon, title: 'Compliance & Tax', description: 'VAT registration, PAYE setup, Confirmation Statement filing, and quarterly tax planning.' },
        { icon: GlobeIcon, title: 'International Setup', description: 'Non-UK founders: UK Ltd companies, non-resident director services, and global payments setup.' },
        { icon: ScaleIcon, title: 'Trademark & IP', description: 'UK IPO trademark filing, copyright registration, and IP strategy.' },
      ]}
      benefits={[
        "Done-for-you, we file every form, you only review and sign",
        'Same-day responses from licensed legal & tax partners',
        'Bundled pricing that beats DIY services like Rocket Lawyer',
        'Quarterly tax planning included for 12 months',
        'Document vault for safekeeping of every formation document',
        'Direct Slack access to your operations lead',
      ]}
      processHeading="From idea to live business."
      processSubheading="A predictable 4-step process to a fully launched, fully compliant business, in 2–4 weeks."
      process={[
        { step: '01', title: 'Discovery', description: 'Entity choice, state selection, and ownership structure.', icon: CompassIcon },
        { step: '02', title: 'File & Form', description: 'Companies House filing, UTR, banking, registered office.', icon: ListIcon },
        { step: '03', title: 'Set Up', description: 'Contracts, payment processing, accounting, and compliance.', icon: WrenchIcon },
        { step: '04', title: 'Launch', description: 'Final checklist, document handover, ongoing support.', icon: RocketIcon },
      ]}
      pricingHeading="Business setup packages."
      pricingSubheading="Transparent flat-fee pricing, no hidden filing fees, no monthly add-ons."
      pricing={[
        {
          name: 'Solo Founder',
          price: '£899',
          priceSuffix: 'one-time',
          description: 'Ltd company formation done right.',
          features: ['Ltd company formation', 'UTR & PAYE registration', 'Registered office (1 year)', 'Articles of association', 'Compliance calendar', 'Email support'],
        },
        {
          name: 'Launch-Ready',
          price: '£2,499',
          priceSuffix: 'one-time',
          description: 'Everything to take payments and start selling.',
          features: ['Ltd + UTR + registered office', 'Tide / Starling banking', 'Stripe + PayPal setup', 'Terms, privacy, refund policy', 'VAT registration', 'Bookkeeping setup', '60-day support'],
          popular: true,
        },
        {
          name: 'Premium Setup',
          price: '£5,999',
          priceSuffix: 'one-time',
          description: 'White-glove setup with legal & tax planning.',
          features: ['Multi-entity structuring', 'PAYE & payroll setup', 'Trademark filing (1 mark)', 'Full VAT & corporation tax setup', '12-month tax planning', 'Custom contracts (3)', 'Chartered accountant introduction', 'Annual review included'],
        },
      ]}
      faqs={[
        { question: 'Which company structure should I choose?', answer: "Most founders go with a Ltd company for liability protection and tax efficiency. Sole traders and partnerships work for smaller, lower-risk operations. We'll walk you through the trade-offs based on your situation." },
        { question: 'How long does the whole process take?', answer: 'Solo Founder packages complete in 5–7 business days. Launch-Ready in 10–14 days. Premium Setup in 3–4 weeks.' },
        { question: 'Do you offer ongoing accounting?', answer: "Yes. Through our partner network we connect you with vetted UK chartered accountants. We don't markup their fees, you get direct rates." },
        { question: 'Can non-UK founders use you?', answer: "Absolutely. We've launched 200+ businesses for international founders, UK Ltd companies + registered office + Tide / Starling banking + Stripe." },
        { question: 'What if my business is regulated (food, finance, etc.)?', answer: 'We have specialized partners for regulated industries, FDA, FINRA, state licensing. Available as an add-on at any tier.' },
      ]}
      testimonials={[
        { name: 'Aarav Sharma', role: 'Founder, Quill Notes', quote: 'Filed Ltd, UTR, Tide, Stripe, everything done in 8 days. The compliance calendar alone saves me hours every quarter.' },
        { name: 'Hannah Lee', role: 'Solo Founder', quote: 'I tried Rocket Lawyer first. Ace did it cheaper, faster, with actual humans answering. Should have started here.' },
        { name: 'Maya Robertson', role: 'DTC Founder', quote: 'Their PAYE setup and tax planning saved me £18k in year one. Pays for itself many times over.' },
      ]}
      ctaHeading="Ready to launch your business?"
      ctaSubheading="Free 30-min discovery call, we'll map the right entity, state, and timeline for your goals."
      ctaButton="Book Free Launch Consultation"
      techStack={['Tide', 'Starling', 'Stripe', 'Companies House', 'PayFit', 'QuickBooks', 'Xero', 'FreeAgent', 'Sage', 'DocuSign']}
    />
  )
}
