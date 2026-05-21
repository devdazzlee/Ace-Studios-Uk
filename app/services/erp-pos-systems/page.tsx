'use client'

import { ServicePageTemplate } from '@/components/service-page-template'
import {
  DatabaseIcon,
  CreditCardIcon,
  PackageIcon,
  BarChart3Icon,
  ShieldCheckIcon,
  UsersIcon,
  CompassIcon,
  LayoutDashboardIcon,
  WrenchIcon,
  RocketIcon,
} from 'lucide-react'

export default function ErpPosPage() {
  return (
    <ServicePageTemplate
      badge="ERP & POS Systems"
      title="Operations software that"
      titleAccent="actually works"
      subtitle="From multi-location retail POS to enterprise ERP, we implement, customize, and integrate the operating systems that run your business. NetSuite, SAP, Lightspeed, Square, Shopify POS, we know them all."
      heroImage="/design-service.jpg"
      primaryCTA="Get an ERP Audit"
      secondaryCTA="See Implementations"
      stats={[
        { value: 75, suffix: '+', label: 'ERP Implementations' },
        { value: 200, suffix: '+', label: 'POS Locations' },
        { value: 99.9, suffix: '%', label: 'Uptime SLA' },
        { value: 42, suffix: '%', label: 'Avg. Time Saved' },
      ]}
      featuresHeading="Operations, unified."
      featuresSubheading="Inventory, finance, sales, and customer data, flowing seamlessly across every system."
      features={[
        { icon: DatabaseIcon, title: 'ERP Implementation', description: 'NetSuite, SAP Business One, and Odoo implementations done by certified consultants.' },
        { icon: CreditCardIcon, title: 'POS Setup', description: 'Lightspeed, Square, Shopify POS, and Toast, hardware to software, single or multi-location.' },
        { icon: PackageIcon, title: 'Inventory & Warehouse', description: 'Real-time stock, multi-warehouse, lot tracking, and barcode workflows.' },
        { icon: BarChart3Icon, title: 'Financial Reporting', description: 'GL, AR, AP, multi-currency, and consolidated reporting across entities.' },
        { icon: ShieldCheckIcon, title: 'Security & Compliance', description: 'SOX, PCI, GDPR, role-based access, audit logs, and encryption by default.' },
        { icon: UsersIcon, title: 'Team Training', description: 'Live training, video courses, and ongoing support so your team adopts day one.' },
      ]}
      benefits={[
        'NetSuite and SAP certified consultants on every engagement',
        'Custom integrations with Shopify, Amazon, and TikTok Shop',
        'Migration plans that preserve every historical record',
        'On-site or remote rollout with parallel-run safety nets',
        'Documentation, training videos, and Slack support included',
        'Optional fractional ERP admin retainer post-launch',
      ]}
      processHeading="Implementation, done right."
      processSubheading="A phased, risk-averse rollout model used at brands from £5M to £500M ARR."
      process={[
        { step: '01', title: 'Discovery', description: 'Process mapping, data audit, and gap analysis.', icon: CompassIcon },
        { step: '02', title: 'Configure', description: 'System setup, custom fields, workflows, and reports.', icon: LayoutDashboardIcon },
        { step: '03', title: 'Migrate', description: 'Data import, integrations, and parallel-run testing.', icon: WrenchIcon },
        { step: '04', title: 'Go Live', description: 'Cutover weekend, training, and stabilization.', icon: RocketIcon },
      ]}
      pricingHeading="ERP & POS engagements."
      pricingSubheading="Scoped to your business size, complexity, and number of entities."
      pricing={[
        {
          name: 'POS Setup',
          price: '£5,500',
          priceSuffix: 'starting',
          description: 'Single-location POS, end to end.',
          features: ['Hardware specs & sourcing', 'Software config', 'Inventory import', 'Staff training', 'Shopify / e-com integration', '30-day support'],
        },
        {
          name: 'ERP Implementation',
          price: '£25,000',
          priceSuffix: 'starting',
          description: 'NetSuite, SAP, or Odoo full rollout.',
          features: ['Process mapping', 'System configuration', 'Data migration', 'Custom integrations (3)', 'Training & documentation', 'Parallel-run support', '90-day post-launch support'],
          popular: true,
        },
        {
          name: 'Enterprise Multi-Site',
          price: 'Custom',
          description: 'Multi-entity, multi-currency rollouts.',
          features: ['Multi-entity consolidation', 'Multi-currency & tax', 'Custom modules & workflows', 'Bulk POS deployment', 'EDI & supplier integration', 'Dedicated team', 'On-call SLA', 'Bespoke pricing'],
        },
      ]}
      faqs={[
        { question: 'Which ERP should we use?', answer: 'It depends on size, industry, and complexity. We recommend NetSuite for £5M–£100M brands, SAP for enterprise, Odoo for cost-conscious mid-market. We are platform-agnostic.' },
        { question: 'Can you integrate ERP with Shopify or Amazon?', answer: 'Yes. We build real-time bidirectional integrations for inventory, orders, customers, and financials, using Celigo, MESA, or custom middleware.' },
        { question: 'How long does an ERP implementation take?', answer: 'Typical small-business implementations take 12–16 weeks. Mid-market takes 5–8 months. Enterprise can run 9–18 months phased.' },
        { question: 'Will you train our team?', answer: 'Absolutely. Every engagement includes live training sessions, recorded videos, and written SOPs tailored to your team and workflows.' },
        { question: 'Can you take over a failed implementation?', answer: 'Frequently, yes. We do "rescue" engagements where another partner left things half-done. We audit, stabilize, and finish.' },
      ]}
      testimonials={[
        { name: 'Jessica Williams', role: 'COO, Multi-brand Retail', quote: 'They migrated us from QuickBooks to NetSuite across 4 entities in 4 months. Best implementation we have lived through.' },
        { name: 'Marcus Chen', role: 'Founder, 12-location Retailer', quote: 'Lightspeed rollout across 12 stores in 8 weeks. Zero downtime, zero data loss, total adoption.' },
        { name: 'David Kim', role: 'CFO, DTC Brand', quote: 'Cut month-end close from 12 days to 3. Reporting that actually tells the truth.' },
      ]}
      ctaHeading="Ready to upgrade your operations?"
      ctaSubheading="Free 60-min discovery, we'll map your current systems and recommend the right ERP/POS path forward."
      ctaButton="Book Free ERP Audit"
      techStack={['NetSuite', 'SAP B1', 'Odoo', 'Lightspeed', 'Square', 'Shopify POS', 'Toast', 'Celigo', 'MESA', 'QuickBooks']}
    />
  )
}
