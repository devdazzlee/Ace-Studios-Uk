'use client'

import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useMotionValue,
  AnimatePresence,
} from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { PageCTA } from '@/components/page-cta'
import {
  PaletteIcon,
  CodeIcon,
  SmartphoneIcon,
  TrendingUpIcon,
  ShoppingCartIcon,
  ZapIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  LightbulbIcon,
  UsersIcon,
  RocketIcon,
  StoreIcon,
  PackageIcon,
  DatabaseIcon,
  BuildingIcon,
  MegaphoneIcon,
  SparklesIcon,
  ChevronDownIcon,
  HeartIcon,
  StarIcon,
  ShieldCheckIcon,
  AwardIcon,
} from 'lucide-react'

function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2 }: { value: number; suffix?: string; prefix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const stepTime = 16
    const steps = (duration * 1000) / stepTime
    const inc = value / steps
    const id = setInterval(() => {
      start += inc
      if (start >= value) { setCount(value); clearInterval(id) }
      else setCount(Math.floor(start))
    }, stepTime)
    return () => clearInterval(id)
  }, [inView, value, duration])
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

function ParallaxOrb({ color, size, initialX, initialY, strength = 30 }: { color: string; size: number; initialX: string; initialY: string; strength?: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 50, damping: 20 })
  const sy = useSpring(y, { stiffness: 50, damping: 20 })
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      x.set(((e.clientX - cx) / cx) * strength)
      y.set(((e.clientY - cy) / cy) * strength)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [x, y, strength])
  return (
    <motion.div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{ background: color, width: size, height: size, left: initialX, top: initialY, x: sx, y: sy }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

const services = [
  {
    icon: PaletteIcon,
    title: 'Brand Design',
    description: 'Logos, color systems, identity guidelines, and packaging that make you unforgettable.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Packaging'],
    href: '/services/design',
    gradient: 'from-pink-500 to-rose-500',
    category: 'Design',
  },
  {
    icon: CodeIcon,
    title: 'Website Development',
    description: 'Fast, conversion-optimized websites built with the latest web technology.',
    features: ['Responsive Design', 'SEO Optimized', 'Performance Focused', 'CMS Integration'],
    href: '/services/website-development',
    gradient: 'from-blue-500 to-indigo-600',
    category: 'Development',
  },
  {
    icon: SmartphoneIcon,
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps that scale with your business.',
    features: ['iOS', 'Android', 'Cross-Platform', 'App Store Optimization'],
    href: '/services/mobile-app-development',
    gradient: 'from-violet-500 to-purple-600',
    category: 'Development',
  },
  {
    icon: ZapIcon,
    title: 'Custom Software',
    description: 'Tailored software solutions for your unique business needs.',
    features: ['System Design', 'Custom Dev', 'Integrations', 'Maintenance'],
    href: '/services/custom-software-development',
    gradient: 'from-cyan-500 to-blue-600',
    category: 'Development',
  },
  {
    icon: ShoppingCartIcon,
    title: 'E-Commerce',
    description: 'Complete online store setup and optimization across every platform.',
    features: ['Shopify', 'WooCommerce', 'BigCommerce', 'Custom Storefronts'],
    href: '/services/ecommerce',
    gradient: 'from-emerald-500 to-teal-600',
    category: 'E-Commerce',
  },
  {
    icon: StoreIcon,
    title: 'Shopify Specialists',
    description: 'Best-in-class Shopify Plus theme, storefront, and conversion optimization.',
    features: ['Theme Dev', 'Shopify Plus', 'CRO', 'Apps & Integrations'],
    href: '/services/shopify',
    gradient: 'from-green-500 to-emerald-600',
    category: 'E-Commerce',
  },
  {
    icon: PackageIcon,
    title: 'Amazon FBA & FBM',
    description: 'Listing optimization, PPC management, and marketplace scaling strategies.',
    features: ['Listing Optimization', 'PPC Ads', 'Brand Registry', 'A+ Content'],
    href: '/services/amazon-fba-fbm',
    gradient: 'from-orange-500 to-amber-500',
    category: 'E-Commerce',
  },
  {
    icon: MegaphoneIcon,
    title: 'TikTok Shop',
    description: 'Launch and scale on the fastest-growing social commerce platform.',
    features: ['Setup & Onboarding', 'Live Selling', 'Affiliate Mgmt', 'Creator Network'],
    href: '/services/tiktok-shop',
    gradient: 'from-pink-500 to-fuchsia-600',
    category: 'E-Commerce',
  },
  {
    icon: TrendingUpIcon,
    title: 'Digital Marketing',
    description: 'SEO, paid ads, and social media strategies that drive real revenue.',
    features: ['SEO', 'PPC', 'Social Media', 'Content Marketing'],
    href: '/services/digital-marketing',
    gradient: 'from-yellow-500 to-orange-500',
    category: 'Marketing',
  },
  {
    icon: DatabaseIcon,
    title: 'ERP & POS Systems',
    description: 'Enterprise resource planning and point-of-sale platforms that scale.',
    features: ['Implementation', 'Integration', 'Training', 'Support'],
    href: '/services/erp-pos-systems',
    gradient: 'from-slate-500 to-gray-700',
    category: 'Enterprise',
  },
  {
    icon: SparklesIcon,
    title: 'Merchandising',
    description: 'Product strategy, assortment planning, and visual merchandising.',
    features: ['Assortment', 'Pricing', 'Visual Merch', 'Trend Analysis'],
    href: '/services/merchandising',
    gradient: 'from-rose-500 to-pink-600',
    category: 'Retail',
  },
  {
    icon: BuildingIcon,
    title: 'Business Setup',
    description: 'End-to-end guidance for launching and structuring your online business.',
    features: ['Ltd Formation', 'Tax Setup', 'Compliance', 'Strategy'],
    href: '/services/online-business-setup',
    gradient: 'from-indigo-500 to-purple-600',
    category: 'Strategy',
  },
]

const categories = ['All', 'Design', 'Development', 'E-Commerce', 'Marketing', 'Enterprise', 'Retail', 'Strategy']

export default function ServicesPage() {
  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? services : services.filter((s) => s.category === activeCategory)

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary z-[60] origin-left"
        style={{ scaleX: progressScale }}
      />

      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxOrb color="rgba(80,96,208,0.35)" size={500} initialX="-10%" initialY="5%" strength={45} />
          <ParallaxOrb color="rgba(255,107,53,0.3)" size={450} initialX="65%" initialY="15%" strength={55} />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(15,20,25,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,20,25,1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6"
          >
            <motion.span
              className="size-2 rounded-full bg-secondary"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            12 services. One senior team.
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary leading-[1.05] tracking-tight max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Our{' '}
            <span className="relative inline-block">
              <motion.span
                className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                services
              </motion.span>
              <motion.svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <motion.path
                  d="M2 8 Q 150 -2 298 8"
                  stroke="url(#sgrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />
                <defs>
                  <linearGradient id="sgrad">
                    <stop offset="0%" stopColor="#5060d0" />
                    <stop offset="100%" stopColor="#ff6b35" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
            .
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mt-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Comprehensive solutions to launch, grow, and scale your online business. Every discipline you need, under one roof, run by senior in-house experts.
          </motion.p>

          {/* Stat ribbon */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
          >
            {[
              { v: 12, s: '', l: 'Services' },
              { v: 500, s: '+', l: 'Clients' },
              { v: 50, s: 'M+', p: '£', l: 'Revenue' },
              { v: 98, s: '%', l: 'Satisfaction' },
            ].map((s) => (
              <motion.div
                key={s.l}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-border"
              >
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter value={s.v} prefix={s.p || ''} suffix={s.s} />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ CATEGORY FILTER ============ */}
      <section className="py-6 sticky top-16 z-30 bg-background/80 backdrop-blur-lg border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <motion.button
                key={c}
                onClick={() => setActiveCategory(c)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === c
                    ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg'
                    : 'bg-white border border-border text-primary hover:border-secondary'
                }`}
              >
                {c}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <AnimatedSection className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((service, i) => (
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Link href={service.href} className="block h-full">
                    <div className="relative h-full p-8 rounded-3xl bg-white border-2 border-border hover:border-secondary hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      <motion.div
                        className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${service.gradient} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-500`}
                      />

                      <div className="flex items-start justify-between mb-5 relative">
                        <motion.div
                          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                        >
                          <service.icon className="size-7 text-white" />
                        </motion.div>
                        <Badge variant="outline" className="text-xs">
                          {service.category}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-primary mb-3 relative">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-5 relative">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-6 relative">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm">
                            <CheckCircle2Icon className="size-4 text-accent flex-shrink-0" />
                            <span className="text-muted-foreground">{f}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center text-secondary font-semibold text-sm relative">
                        <span>Explore service</span>
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRightIcon className="size-4" />
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ============ WHY OUR SERVICES ============ */}
      <AnimatedSection className="py-24 sm:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-15"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #5060d0 0%, transparent 50%), radial-gradient(circle at 80% 80%, #ff6b35 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Why our services
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Built differently. Delivered better.</h2>
            <p className="text-lg text-white/70">
              We combine expertise, innovation, and results-driven strategies, without the agency overhead.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: UsersIcon, t: 'Senior In-House Team', d: 'No outsourcing, no junior hand-offs. The people who pitch are the people doing the work.' },
              { icon: LightbulbIcon, t: 'Custom Strategies', d: 'No templates. Every engagement starts with deep discovery and finishes with a bespoke plan.' },
              { icon: TrendingUpIcon, t: 'Results-Focused', d: 'We measure success in revenue and growth, not impressions, vanity metrics, or page views.' },
              { icon: ShieldCheckIcon, t: 'Total Transparency', d: 'See every number, every decision, every result, in plain English, in real time.' },
            ].map((item, i) => (
              <motion.div
                key={item.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                  className="inline-flex p-3 rounded-xl bg-gradient-to-br from-secondary to-accent shadow-lg mb-4"
                >
                  <item.icon className="size-5 text-white" />
                </motion.div>
                <h3 className="font-bold text-lg mb-2">{item.t}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ============ HOW WE WORK TOGETHER ============ */}
      <AnimatedSection className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              How we work
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">A simple, proven flow.</h2>
            <p className="text-lg text-muted-foreground">
              Every service follows the same playbook, refined over 1,000+ engagements.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {[
              { n: 1, t: 'Free discovery call', d: 'A 30-min conversation about your goals, budget, and timeline. No pitch deck, no pressure.', icon: HeartIcon },
              { n: 2, t: 'Custom proposal', d: "We send a scoped plan with three tiers, transparent pricing, and a fixed timeline. You decide if we're a fit.", icon: SparklesIcon },
              { n: 3, t: 'Kickoff & build', d: 'Onboarding within 5 business days. You meet your senior team and we ship the first milestone within 2 weeks.', icon: RocketIcon },
              { n: 4, t: 'Launch & optimize', d: 'We monitor, analyze, and continuously optimize. Launch is the beginning, not the end.', icon: TrendingUpIcon },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex items-start gap-6 mb-8 last:mb-0"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="flex-shrink-0 size-16 rounded-2xl bg-gradient-to-br from-secondary to-accent text-white flex items-center justify-center font-bold text-2xl shadow-xl"
                >
                  {s.n}
                </motion.div>
                <div className="flex-1 p-6 rounded-2xl bg-white border-2 border-border hover:border-secondary transition-colors hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <s.icon className="size-5 text-secondary" />
                    <h3 className="text-xl font-bold text-primary">{s.t}</h3>
                  </div>
                  <p className="text-muted-foreground">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ============ AWARDS ROW ============ */}
      <section className="py-16 bg-primary/[0.02] border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
              Recognized worldwide
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">
              Award-winning work, award-winning team.
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { t: 'Agency of the Year', y: '2023' },
              { t: 'Top Shopify Partner', y: '2024' },
              { t: 'Clutch Top B2B', y: '2023' },
              { t: 'Meta Partner', y: '2022' },
              { t: 'Google Premier', y: '2024' },
              { t: 'Webby Winner', y: '2024' },
            ].map((a, i) => (
              <motion.div
                key={a.t}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, rotate: [0, -2, 2, 0] }}
                className="p-5 rounded-2xl bg-white border-2 border-border hover:border-accent transition-all text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex p-2 rounded-lg bg-accent/10 mb-2"
                >
                  <AwardIcon className="size-5 text-accent" />
                </motion.div>
                <p className="text-xs font-bold text-primary leading-tight">{a.t}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{a.y}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        heading="One conversation. Endless possibilities."
        subheading="Tell us about your business, your goals, and your timeline. We'll respond within 24 hours with honest, jargon-free advice."
        primaryButton={{ label: 'Schedule Free Consultation', href: '/contact' }}
      />

      <Footer />
    </div>
  )
}
