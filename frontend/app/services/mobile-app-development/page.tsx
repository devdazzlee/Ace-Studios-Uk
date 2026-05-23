'use client'

import { ServicePageTemplate } from '@/components/service-page-template'
import {
  SmartphoneIcon,
  ZapIcon,
  ShieldCheckIcon,
  CloudIcon,
  BellIcon,
  LayoutDashboardIcon,
  CompassIcon,
  PaintbrushIcon,
  WrenchIcon,
  RocketIcon,
} from 'lucide-react'

export default function MobileAppDevelopmentPage() {
  return (
    <ServicePageTemplate
      badge="Mobile App Development"
      title="Apps people actually"
      titleAccent="love using"
      subtitle="From iOS to Android to cross-platform, we design and build mobile experiences that delight users, drive retention, and scale to millions of installs."
      heroImage="/design-service.jpg"
      primaryCTA="Get an App Quote"
      secondaryCTA="See App Portfolio"
      stats={[
        { value: 80, suffix: '+', label: 'Apps Shipped' },
        { value: 4.8, suffix: '★', label: 'Avg. App Store Rating' },
        { value: 12, suffix: 'M+', label: 'Combined Downloads' },
        { value: 65, suffix: '%', label: 'Day-30 Retention' },
      ]}
      featuresHeading="Built for performance & retention."
      featuresSubheading="Beautiful UI is just the start. We engineer apps that stay fast, stay updated, and keep users coming back."
      features={[
        { icon: SmartphoneIcon, title: 'Native iOS & Android', description: 'Swift and Kotlin where performance matters most, smooth as silk, every interaction.' },
        { icon: ZapIcon, title: 'Cross-Platform', description: 'React Native and Flutter for faster shipping with a single codebase across platforms.' },
        { icon: CloudIcon, title: 'Backend & APIs', description: 'Scalable cloud infrastructure on AWS, Firebase, or Supabase. Built to handle viral growth.' },
        { icon: BellIcon, title: 'Push & Engagement', description: 'Smart push notifications, in-app messaging, and lifecycle marketing baked in.' },
        { icon: ShieldCheckIcon, title: 'Security & Privacy', description: 'Encryption, secure auth, GDPR/HIPAA compliance, and biometric login.' },
        { icon: LayoutDashboardIcon, title: 'Analytics & Insights', description: 'Real-time analytics, crash reporting, and A/B testing built into every release.' },
      ]}
      benefits={[
        'Submission to both App Store and Google Play included',
        'Pixel-perfect design from Figma to production',
        'Built for app store featuring and ASO from day one',
        '90-day post-launch support with bug fixes',
        'Backend infrastructure included in every plan',
        'Source code and accounts fully transferred to you',
      ]}
      processHeading="From concept to store."
      processSubheading="A proven 4-stage flow that ships in 12–20 weeks, and keeps shipping after launch."
      process={[
        { step: '01', title: 'Strategy', description: 'User research, competitive analysis, and feature prioritization.', icon: CompassIcon },
        { step: '02', title: 'Design', description: 'Wireframes, prototypes, and pixel-perfect Figma designs.', icon: PaintbrushIcon },
        { step: '03', title: 'Build', description: 'Engineering in 2-week sprints with beta builds via TestFlight.', icon: WrenchIcon },
        { step: '04', title: 'Launch', description: 'App store submission, ASO, and 90-day support.', icon: RocketIcon },
      ]}
      pricingHeading="App development pricing."
      pricingSubheading="Three engagement models built for different ambitions and budgets."
      pricing={[
        {
          name: 'MVP App',
          price: '£18,000',
          priceSuffix: 'starting',
          description: 'Validate your idea quickly with a focused MVP.',
          features: ['Up to 8 core screens', 'iOS or Android', 'Basic backend & auth', 'Analytics setup', 'App store submission', '60-day support', '12-week delivery'],
        },
        {
          name: 'Full Production App',
          price: '£45,000',
          priceSuffix: 'starting',
          description: 'A polished launch app with full feature set.',
          features: ['Unlimited screens', 'iOS + Android', 'Custom backend', 'Push & in-app messaging', 'Stripe / IAP integration', 'Admin dashboard', 'ASO & launch marketing', '90-day support'],
          popular: true,
        },
        {
          name: 'Enterprise App',
          price: 'Custom',
          description: 'Mission-critical apps for scale.',
          features: ['Dedicated team', 'Custom integrations', 'Compliance (GDPR, HIPAA)', 'Multi-platform', 'Real-time features', 'Quarterly roadmap', 'On-call SLA', 'Bespoke pricing'],
        },
      ]}
      faqs={[
        { question: 'iOS only, Android only, or both?', answer: "We recommend cross-platform (React Native or Flutter) for most clients, same UX, half the cost and time. For performance-critical apps we go fully native." },
        { question: 'How long does it take to launch?', answer: 'MVPs ship in 10–12 weeks. Full production apps take 16–20 weeks. Enterprise builds vary by scope.' },
        { question: 'Who handles app store submission?', answer: 'We do, including App Store screenshots, descriptions, ASO, and the actual review process.' },
        { question: 'Do you handle backend infrastructure?', answer: 'Yes. Every project includes a scalable backend, typically on Supabase, Firebase, or AWS depending on your needs.' },
        { question: 'What happens after launch?', answer: 'Every project includes 60–90 days of support. After that, we offer maintenance retainers starting at £2,500/month.' },
      ]}
      testimonials={[
        { name: 'Aarav Sharma', role: 'Founder, Quill Notes', quote: 'They built our app in 14 weeks and we hit 100k downloads in month one. The code quality is exceptional.' },
        { name: 'Hannah Lee', role: 'CTO, Vita Health', quote: 'Cross-platform from day one. Same UX on iOS and Android, half the cost we expected.' },
        { name: 'Marcus Chen', role: 'CEO, FieldKit', quote: 'Featured by Apple in our second month. The design and onboarding flow they crafted made all the difference.' },
      ]}
      ctaHeading="Ready to launch your app?"
      ctaSubheading="Tell us your idea, we'll respond with a feasibility review, timeline, and honest budget within 24 hours."
      ctaButton="Get a Free App Quote"
      techStack={['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'Supabase', 'AWS', 'Stripe', 'OneSignal']}
    />
  )
}
