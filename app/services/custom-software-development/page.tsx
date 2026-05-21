'use client'

import { ServicePageTemplate } from '@/components/service-page-template'
import {
  CodeIcon,
  CpuIcon,
  CloudIcon,
  DatabaseIcon,
  ShieldCheckIcon,
  GitBranchIcon,
  CompassIcon,
  LayoutDashboardIcon,
  WrenchIcon,
  RocketIcon,
} from 'lucide-react'

export default function CustomSoftwarePage() {
  return (
    <ServicePageTemplate
      badge="Custom Software Development"
      title="Software built for your"
      titleAccent="exact business"
      subtitle="Off-the-shelf tools only get you so far. We design, build, and ship custom web apps, internal tools, dashboards, and integrations engineered around your unique workflows."
      heroImage="/design-service.jpg"
      primaryCTA="Get a Software Quote"
      secondaryCTA="See Case Studies"
      stats={[
        { value: 120, suffix: '+', label: 'Apps Shipped' },
        { value: 99.99, suffix: '%', label: 'Uptime SLA' },
        { value: 2, suffix: 'wk', label: 'Avg. Sprint' },
        { value: 100, suffix: '%', label: 'Code Ownership' },
      ]}
      featuresHeading="From prototype to production."
      featuresSubheading="Senior full-stack engineers, modern stack, and battle-tested architecture from day one."
      features={[
        { icon: CodeIcon, title: 'Web Applications', description: 'SaaS apps, dashboards, marketplaces, and internal tools built on Next.js + TypeScript.' },
        { icon: CpuIcon, title: 'API Development', description: 'REST and GraphQL APIs with versioning, rate limiting, docs, and SDK generation.' },
        { icon: CloudIcon, title: 'Cloud Architecture', description: 'AWS, GCP, and Vercel infrastructure designed to scale from 100 to 10M users.' },
        { icon: DatabaseIcon, title: 'Databases & Pipelines', description: 'Postgres, MongoDB, Redis, and ETL pipelines that keep your data clean.' },
        { icon: ShieldCheckIcon, title: 'Security & Compliance', description: 'SOC2, HIPAA, GDPR-ready. Authentication, encryption, and audit logging baked in.' },
        { icon: GitBranchIcon, title: 'Integrations', description: 'Stripe, HubSpot, Salesforce, Slack, Zapier, we connect anything to anything.' },
      ]}
      benefits={[
        'Senior full-stack engineers, 10+ years experience each',
        'Two-week sprints with demo every Friday',
        'You own the code, the repo, the cloud accounts',
        'CI/CD, testing, and monitoring shipped with every project',
        'Type-safe end to end, TypeScript everywhere',
        'Optional dedicated maintenance team post-launch',
      ]}
      processHeading="The build process."
      processSubheading="From kickoff to production in 8–16 weeks with predictable, milestone-based delivery."
      process={[
        { step: '01', title: 'Discovery', description: 'Requirements gathering, architecture design, and tech selection.', icon: CompassIcon },
        { step: '02', title: 'Design', description: 'UX wireframes, data models, and API contracts approved upfront.', icon: LayoutDashboardIcon },
        { step: '03', title: 'Build', description: 'Two-week sprints with Friday demos on a staging environment.', icon: WrenchIcon },
        { step: '04', title: 'Launch', description: 'Production deployment, observability, and handover.', icon: RocketIcon },
      ]}
      pricingHeading="Software development pricing."
      pricingSubheading="Engagement models scale from prototype to enterprise."
      pricing={[
        {
          name: 'Prototype',
          price: '£8,000',
          priceSuffix: 'starting',
          description: 'Validate an idea with a working MVP.',
          features: ['Up to 6 core screens', 'Auth & basic database', 'Stripe integration', 'Deployed to Vercel', '30-day support', '6-week delivery'],
        },
        {
          name: 'Production App',
          price: '£35,000',
          priceSuffix: 'starting',
          description: 'A polished launch app with full feature set.',
          features: ['Unlimited screens & flows', 'Custom API & database', 'Auth, roles, multi-tenant', 'Stripe billing & subscriptions', 'Admin dashboard', 'CI/CD + monitoring', 'Documentation & handover', '90-day support'],
          popular: true,
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          description: 'Mission-critical, large-scale software.',
          features: ['Dedicated engineering team', 'SOC2 / HIPAA compliance', 'Microservices architecture', 'High-availability infra', 'Real-time features', 'On-call SLA', 'Quarterly roadmap', 'Bespoke pricing'],
        },
      ]}
      faqs={[
        { question: 'What tech stack do you use?', answer: 'Default: Next.js, TypeScript, Node.js, Postgres, and Tailwind. We adjust based on requirements, Python/Django, Rust, or Go where it fits.' },
        { question: 'How long does an MVP take?', answer: 'Prototypes ship in 6 weeks. Production apps in 10–14 weeks. Enterprise builds depend on scope and team size.' },
        { question: 'Do I own the code?', answer: 'Completely. We hand over the GitHub repo, all cloud credentials, and full documentation at the end of every engagement.' },
        { question: 'Do you offer ongoing maintenance?', answer: 'Yes. We offer fractional engineering retainers and dedicated team augmentation, typically £5,000–£25,000/month based on need.' },
        { question: 'Can you take over an existing codebase?', answer: 'Yes. We do tech audits, code reviews, and team take-overs frequently. We can stabilize, refactor, or extend code that started elsewhere.' },
      ]}
      testimonials={[
        { name: 'David Kim', role: 'SaaS Founder', quote: 'Outstanding custom development. They built our platform exactly as envisioned, delivered on time, and provided excellent ongoing support.' },
        { name: 'Hannah Lee', role: 'CTO, Vita Health', quote: 'The cleanest codebase we have ever owned. Our internal team picked it up effortlessly post-handover.' },
        { name: 'James Wilson', role: 'Tech Startup CEO', quote: 'Shipped an MVP in 8 weeks that raised our seed round two months later. Couldn\'t recommend more.' },
      ]}
      ctaHeading="Got a product idea?"
      ctaSubheading="Tell us about it, we'll respond within 24 hours with a feasibility review, architecture sketch, and honest budget."
      ctaButton="Get a Free Software Quote"
      techStack={['Next.js', 'TypeScript', 'Node.js', 'Postgres', 'GraphQL', 'AWS', 'Vercel', 'Stripe', 'Tailwind']}
    />
  )
}
