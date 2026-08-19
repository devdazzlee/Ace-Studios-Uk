import {
  HelpCircleIcon,
  DollarSignIcon,
  SettingsIcon,
  ShoppingBagIcon,
  ShieldIcon,
  PlayCircleIcon,
  type LucideIcon,
} from 'lucide-react'

export interface FAQItem {
  q: string
  a: string
}

export interface FAQCategory {
  category: string
  description: string
  icon: LucideIcon
  gradient: string
  items: FAQItem[]
}

export const faqs: FAQCategory[] = [
  {
    category: 'General',
    description: 'Basic info about Ace Studios, our team, and how we work.',
    icon: HelpCircleIcon,
    gradient: 'from-blue-500 to-indigo-600',
    items: [
      {
        q: 'What services does Ace Studios offer?',
        a: 'Twelve disciplines in-house: brand design, web & mobile development, custom software, e-commerce (Shopify, WooCommerce, BigCommerce), Amazon FBA/FBM, TikTok Shop, digital marketing, ERP & POS, merchandising, and online business setup. All delivered by senior in-house specialists.',
      },
      {
        q: 'How long have you been in business?',
        a: 'Founded in 2015. We have spent the last decade helping over 500 brands launch, scale, and dominate online, across 40+ countries.',
      },
      {
        q: 'Do you work with international clients?',
        a: 'Yes. Roughly 35% of our clients are based outside the UK. We work asynchronously by default, with synchronous touchpoints scheduled to your time zone.',
      },
      {
        q: 'Are you really in-house, or do you outsource?',
        a: 'Truly in-house. Every designer, engineer, marketer, and strategist on your project is a full-time Ace employee. No agency networks, no offshore subcontractors.',
      },
    ],
  },
  {
    category: 'Projects & Pricing',
    description: 'Tier structure, custom quotes, payment terms, and timelines.',
    icon: DollarSignIcon,
    gradient: 'from-emerald-500 to-teal-600',
    items: [
      {
        q: 'How much do your services cost?',
        a: 'Every service has three transparent tiers, Starter, Growth, and Elite, visible on each service page. Brand design starts at £799, websites at £3,500, mobile apps at £18,000, marketing retainers at £3,500/month. We also offer fully bespoke pricing.',
      },
      {
        q: 'How long does a typical project take?',
        a: 'Brand projects ship in 2–4 weeks. Websites in 3–8 weeks. Mobile apps in 10–20 weeks. Custom software in 8–16 weeks. Marketing retainers show signal in 2–4 weeks. Every engagement has milestone-based, fixed timelines.',
      },
      {
        q: 'Can I customize a package?',
        a: 'Always. The tiers are starting points. We routinely combine services across disciplines and shape pricing around your specific scope, goals, and budget.',
      },
      {
        q: 'Do you offer payment plans?',
        a: 'Yes. Most engagements run on a 30/40/30 milestone split. Retainers are billed monthly. Larger enterprise projects can be split across 4–6 milestones.',
      },
      {
        q: 'Do you require long-term contracts?',
        a: 'Never. Project work is milestone-based. Retainers are month-to-month. We earn the next month by performing this month.',
      },
    ],
  },
  {
    category: 'Process & Support',
    description: 'How we kick off, communicate, and support post-launch.',
    icon: SettingsIcon,
    gradient: 'from-purple-500 to-fuchsia-600',
    items: [
      {
        q: 'What is your process for starting a project?',
        a: 'Five steps: (1) Free 30-min discovery call. (2) Scoped proposal within 48 hours with three tiers. (3) Kickoff within 5 business days. (4) Weekly demos in a shared Slack channel. (5) Launch and 30–90 days of post-launch support.',
      },
      {
        q: 'How do we communicate during a project?',
        a: 'Every engagement gets a dedicated Slack channel with the people actually doing the work, not an account manager. We hold weekly sync calls and ship every Friday on a staging URL.',
      },
      {
        q: 'What happens after project completion?',
        a: 'Every package includes 30–90 days of post-launch support depending on tier. After that, you can either move to a maintenance retainer or pay for on-demand support, your choice.',
      },
      {
        q: 'Do you provide training?',
        a: 'Yes, every engagement includes live training sessions and recorded videos tailored to your team. Whether it is Shopify, WordPress, NetSuite, or a custom dashboard, your team will own it after handover.',
      },
      {
        q: 'What if I need changes after launch?',
        a: 'Bug fixes during the support period are always free. New features and enhancements are billed against a maintenance retainer (typical) or on-demand (project-based).',
      },
    ],
  },
  {
    category: 'E-Commerce & Platforms',
    description: 'Shopify, Amazon, TikTok Shop, and multi-channel commerce.',
    icon: ShoppingBagIcon,
    gradient: 'from-orange-500 to-amber-500',
    items: [
      {
        q: 'Which e-commerce platform should I use?',
        a: 'Shopify for 90% of brands, it is fast, reliable, and the app ecosystem compounds. WooCommerce for content-heavy stores. BigCommerce for B2B. Custom headless for high-performance, edge cases. We are platform-agnostic and recommend honestly.',
      },
      {
        q: 'Can you help me sell on Amazon?',
        a: 'Yes, full FBA/FBM service. Listing optimization, PPC, A+ Content, Brand Registry, Vine, inventory forecasting, hijacker takedowns, international expansion. We have launched over 180 Amazon brands and driven £200M+ in sales.',
      },
      {
        q: 'Do you do TikTok Shop?',
        a: 'Yes, and we are a TikTok Shop Partner. Setup, content production, creator affiliate management, live shopping, Spark Ads, GMV Max. We have driven £18M+ in TikTok Shop GMV for our clients.',
      },
      {
        q: 'Can you migrate my existing store?',
        a: 'Yes. We migrate from WooCommerce, Magento, BigCommerce, and custom platforms to Shopify (or vice versa) with SEO preservation and zero downtime.',
      },
    ],
  },
  {
    category: 'Technology & Security',
    description: 'Our tech stack, infrastructure choices, and compliance.',
    icon: ShieldIcon,
    gradient: 'from-cyan-500 to-blue-600',
    items: [
      {
        q: 'What technologies do you use?',
        a: 'Default web stack: Next.js, React, TypeScript, Tailwind, Postgres. Mobile: React Native, Swift, Kotlin. Infrastructure: Vercel, AWS, Cloudflare. CMS: Sanity, Contentful. Marketing: Klaviyo, Postscript, Triple Whale.',
      },
      {
        q: 'Is my data secure?',
        a: 'Yes. SSL by default, secure auth via Auth0 or Clerk, daily backups, role-based access control, and audit logging. For regulated industries we ship SOC2-, HIPAA-, and GDPR-compliant infrastructure.',
      },
      {
        q: 'Do you provide ongoing maintenance?',
        a: 'Yes. Maintenance retainers cover hosting, security patches, performance monitoring, minor feature work, and bug fixes. Pricing starts at £500/month for sites and scales with complexity.',
      },
      {
        q: 'Will I own the code?',
        a: 'Completely. At project completion you get the GitHub repo, cloud credentials, and full documentation. No vendor lock-in, ever.',
      },
    ],
  },
  {
    category: 'Getting Started',
    description: 'How to begin, what to expect, and what we need from you.',
    icon: PlayCircleIcon,
    gradient: 'from-pink-500 to-rose-600',
    items: [
      {
        q: 'How do I get started?',
        a: 'Two ways: fill out our contact form, or book a free 30-minute strategy call directly. We will respond within 24 hours either way.',
      },
      {
        q: 'Is there a consultation fee?',
        a: 'No. The first 30-minute strategy call is completely free, and we will give you honest advice whether or not you end up working with us.',
      },
      {
        q: 'What information do you need from me?',
        a: 'Just enough to have a useful conversation: your goals, your timeline, your rough budget, and any context on your current setup. We do the rest from there.',
      },
      {
        q: "What if I'm not sure what service I need?",
        a: 'That is what the discovery call is for. Tell us the business outcome you want and we will recommend the right service mix, even if it is a service we do not offer (we will refer you out honestly).',
      },
    ],
  },
]
