'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  AnimatePresence,
} from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageCTA } from '@/components/page-cta'
import { AnimatedSection } from '@/components/animated-section'
import { works } from '@/lib/work-data'
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  SparklesIcon,
  RocketIcon,
  BarChart3Icon,
  ZapIcon,
  HeartIcon,
  CodeIcon,
  PaletteIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  UsersIcon,
  AwardIcon,
  StarIcon,
  QuoteIcon,
  ChevronDownIcon,
  ShieldCheckIcon,
  PlayCircleIcon,
  BrainIcon,
} from 'lucide-react'

// ---------- Helpers ----------

function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
}: {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}) {
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
      if (start >= value) {
        setCount(value)
        clearInterval(id)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)
    return () => clearInterval(id)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

function ParallaxOrb({
  color,
  size,
  initialX,
  initialY,
  strength = 30,
}: {
  color: string
  size: number
  initialX: string
  initialY: string
  strength?: number
}) {
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
      style={{
        background: color,
        width: size,
        height: size,
        left: initialX,
        top: initialY,
        x: sx,
        y: sy,
      }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

// ---------- Page ----------

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(heroProgress, [0, 1], [0, 250])
  const heroOpacity = useTransform(heroProgress, [0, 0.85], [1, 0])
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.92])

  const { scrollYProgress: pageProgress } = useScroll()
  const progressScale = useSpring(pageProgress, { stiffness: 100, damping: 30 })

  const services = [
    {
      icon: PaletteIcon,
      title: 'Brand & Design',
      description:
        'Logo design, brand identity, visual assets, and brand guidelines that make you memorable.',
      href: '/services/design',
      gradient: 'from-pink-500 to-rose-500',
      tags: ['Logos', 'Identity', 'Guidelines'],
    },
    {
      icon: CodeIcon,
      title: 'Web Development',
      description: 'Fast, responsive, conversion-optimized websites built with latest tech.',
      href: '/services/website-development',
      gradient: 'from-blue-500 to-indigo-600',
      tags: ['Next.js', 'React', 'Headless'],
    },
    {
      icon: ShoppingCartIcon,
      title: 'E-Commerce Solutions',
      description: 'Complete online store setup on Shopify, WooCommerce, and custom platforms.',
      href: '/services/ecommerce',
      gradient: 'from-emerald-500 to-teal-600',
      tags: ['Shopify', 'Woo', 'Custom'],
    },
    {
      icon: RocketIcon,
      title: 'Amazon & Marketplace',
      description: 'FBA/FBM setup, product optimization, and marketplace scaling strategies.',
      href: '/services/amazon-fba-fbm',
      gradient: 'from-yellow-500 to-orange-600',
      tags: ['FBA', 'PPC', 'Listings'],
    },
    {
      icon: TrendingUpIcon,
      title: 'Digital Marketing',
      description: 'SEO, social media, paid ads, and content strategies that drive real revenue.',
      href: '/services/digital-marketing',
      gradient: 'from-orange-500 to-amber-500',
      tags: ['SEO', 'Paid', 'Content'],
    },
    {
      icon: UsersIcon,
      title: 'Business Setup',
      description: 'End-to-end guidance for launching and structuring your online business.',
      href: '/services/online-business-setup',
      gradient: 'from-purple-500 to-fuchsia-600',
      tags: ['Ltd', 'Tax', 'Strategy'],
    },
  ]

  const values = [
    {
      icon: AwardIcon,
      title: 'Award-Winning Team',
      description:
        'Industry-recognized designers, developers, and strategists with 15+ years of combined experience.',
    },
    {
      icon: BarChart3Icon,
      title: 'Results-Driven',
      description:
        'We measure success in revenue, not vanity metrics. Every strategy aligned with your bottom line.',
    },
    {
      icon: RocketIcon,
      title: 'Built to Scale',
      description:
        'Solutions designed to grow with you. From startup to enterprise, services adapt with you.',
    },
    {
      icon: ZapIcon,
      title: 'Fast & Efficient',
      description:
        'Agile processes and proven workflows mean faster time-to-market without compromising quality.',
    },
    {
      icon: UsersIcon,
      title: 'True Partnership',
      description:
        "You're not hiring an agency, you're gaining a strategic partner invested in your success.",
    },
    {
      icon: SparklesIcon,
      title: 'Innovation First',
      description:
        'We stay ahead of trends, leveraging the latest technologies to keep you competitive.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business, market, and goals to craft a tailored plan.',
      icon: BrainIcon,
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Wireframes, designs, and detailed roadmaps prepared for your approval.',
      icon: PaletteIcon,
      gradient: 'from-secondary to-purple-600',
    },
    {
      step: '03',
      title: 'Development & Build',
      description: 'Our team builds, codes, and implements with precision and craft.',
      icon: CodeIcon,
      gradient: 'from-accent to-orange-500',
    },
    {
      step: '04',
      title: 'Launch & Optimize',
      description: 'We launch, monitor, analyze, and continuously optimize for max ROI.',
      icon: RocketIcon,
      gradient: 'from-emerald-500 to-teal-600',
    },
  ]

  const portfolio = works.slice(0, 4).map((w) => ({
    slug: w.slug,
    title: w.client,
    category: w.category,
    result: w.shortResult,
    gradient: w.gradient,
    image: w.heroImage,
    tags: w.tags.slice(0, 2),
  }))

  const techStack = [
    'Next.js',
    'React',
    'TypeScript',
    'Shopify',
    'Webflow',
    'Figma',
    'Framer',
    'TailwindCSS',
    'Node.js',
    'Stripe',
    'Klaviyo',
    'GA4',
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'E-Commerce Founder',
      testimonial:
        'Ace Studios completely transformed my Shopify store. Revenue increased 300% in the first quarter after launch. Their team is responsive, professional, and results-focused.',
      rating: 5,
    },
    {
      name: 'Marcus Chen',
      role: 'Amazon Seller',
      testimonial:
        'The FBA optimization was game-changing. They helped me rank on first page for 12 competitive keywords and increased sales velocity significantly.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'Digital Agency Owner',
      testimonial:
        'We partnered with Ace for our website redesign. The results speak for themselves, conversion rates up 45% and lead quality improved dramatically.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'SaaS Founder',
      testimonial:
        'Outstanding custom development work. They built our platform exactly as envisioned, delivered on time, and provided excellent ongoing support.',
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      role: 'Fashion Brand Owner',
      testimonial:
        'The branding and design work elevated our entire business. We look more professional than competitors 10x our size.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Tech Startup CEO',
      testimonial:
        'Exceptional team. They understood our vision, provided valuable insights, and delivered a product that exceeded expectations.',
      rating: 5,
    },
  ]

  const plans = [
    {
      name: 'Starter',
      price: '£2,500',
      blurb: 'For founders launching their first online presence.',
      perks: ['Brand & identity', '5-page website', 'Basic SEO', '30-day support'],
      featured: false,
    },
    {
      name: 'Growth',
      price: '£7,500',
      blurb: 'For brands ready to scale revenue and reach.',
      perks: ['Everything in Starter', 'Shopify or custom build', 'Paid media setup', '90-day optimization'],
      featured: true,
    },
    {
      name: 'Scale',
      price: 'Custom',
      blurb: 'For 7-8 figure brands with ambitious goals.',
      perks: ['Dedicated team', 'Full-stack growth', 'Quarterly strategy', 'Priority support'],
      featured: false,
    },
  ]

  const insights = [
    {
      slug: 'shopify-store-guide',
      tag: 'E-commerce',
      title: 'The Shopify checkout playbook that lifts conversion 18%',
      readTime: '6 min read',
      gradient: 'from-emerald-400 to-teal-500',
      image: '/ecommerce-service.jpg',
    },
    {
      slug: 'brand-identity-checklist',
      tag: 'Brand',
      title: 'Why your logo is the least important part of your brand',
      readTime: '4 min read',
      gradient: 'from-pink-400 to-fuchsia-500',
      image: '/design-service.jpg',
    },
    {
      slug: 'digital-marketing-trends-2025',
      tag: 'Marketing',
      title: 'A simple paid-ads framework that scales to £1M/month',
      readTime: '8 min read',
      gradient: 'from-blue-400 to-indigo-500',
      image: '/marketing-service.jpg',
    },
  ]

  const faqs = [
    {
      q: 'How quickly can we get started?',
      a: 'Most engagements kick off within 5 business days of our discovery call. We also offer a 48-hour fast-track for urgent launches.',
    },
    {
      q: 'Do you work with startups or only established brands?',
      a: 'Both. Our pricing scales with you, we are equally happy launching a first store as we are optimizing an 8-figure brand.',
    },
    {
      q: 'What does pricing look like?',
      a: 'Every service has three transparent tiers. No hidden fees, no surprise invoices. You see every number before we begin.',
    },
    {
      q: 'Is everything done in-house?',
      a: 'Yes. Every role is senior and full-time. There are no junior hand-offs, no offshore subcontracting, no account managers who never touch the work.',
    },
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary z-[60] origin-left"
        style={{ scaleX: progressScale }}
      />

      <Navbar />

      {/* ================ HERO ================ */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center pt-28 pb-20 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <ParallaxOrb color="rgba(80,96,208,0.35)" size={520} initialX="-12%" initialY="8%" strength={45} />
          <ParallaxOrb color="rgba(255,107,53,0.3)" size={460} initialX="65%" initialY="18%" strength={55} />
          <ParallaxOrb color="rgba(112,128,224,0.25)" size={400} initialX="35%" initialY="65%" strength={40} />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(15,20,25,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,20,25,1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
        >
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium"
              >
                <motion.span
                  className="size-2 rounded-full bg-secondary"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Trusted by 500+ founders worldwide
              </motion.div>

              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary leading-[1.02] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Build your dream{' '}
                <span className="relative inline-block">
                  <motion.span
                    className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  >
                    online business
                  </motion.span>
                  <motion.svg
                    className="absolute -bottom-3 left-0 w-full"
                    viewBox="0 0 400 14"
                    fill="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.path
                      d="M2 10 Q 200 -2 398 10"
                      stroke="url(#hg)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                    />
                    <defs>
                      <linearGradient id="hg">
                        <stop offset="0%" stopColor="#5060d0" />
                        <stop offset="100%" stopColor="#ff6b35" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
                .
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                From brand identity to e-commerce mastery, we help entrepreneurs and established
                brands scale online with design, development, and data-driven marketing.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto group">
                      Start Your Journey
                      <motion.span
                        className="ml-2 inline-block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRightIcon className="size-4" />
                      </motion.span>
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/work">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto group">
                      <PlayCircleIcon className="mr-2 size-5 text-secondary group-hover:scale-110 transition-transform" />
                      Watch Showreel
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                {['Free consultation', 'Custom solutions', 'ROI focused'].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckCircle2Icon className="text-accent size-5" />
                    <span className="text-sm text-muted-foreground">{t}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right visual */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/hero-image.jpg"
                  alt="Team collaborating"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 via-transparent to-accent/30 mix-blend-multiply" />
              </motion.div>

              {/* Floating cards */}
              <motion.div
                className="absolute -left-6 top-12 bg-white rounded-2xl p-4 shadow-2xl border border-border max-w-[200px]"
                initial={{ opacity: 0, x: -50, rotate: -8 }}
                animate={{ opacity: 1, x: 0, rotate: -6 }}
                transition={{ delay: 1, type: 'spring' }}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-100">
                    <TrendingUpIcon className="size-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                    <div className="font-bold text-primary">+312%</div>
                  </div>
                </div>
                <div className="h-8 flex items-end gap-1">
                  {[40, 55, 35, 70, 50, 85, 75, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-secondary to-accent rounded-sm"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1.2 + i * 0.05, duration: 0.5 }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-16 bg-white rounded-2xl p-4 shadow-2xl border border-border"
                initial={{ opacity: 0, x: 50, rotate: 8 }}
                animate={{ opacity: 1, x: 0, rotate: 5 }}
                transition={{ delay: 1.2, type: 'spring' }}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.4 + i * 0.08 }}
                    >
                      <StarIcon className="size-4 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-xs font-semibold text-primary">4.9 / 5.0</div>
                <div className="text-xs text-muted-foreground">500+ reviews</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-8 bg-gradient-to-br from-secondary to-accent rounded-2xl p-4 shadow-2xl text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, type: 'spring' }}
                whileHover={{ scale: 1.05 }}
              >
                <ShieldCheckIcon className="size-5 mb-1" />
                <div className="text-xs font-bold leading-tight">100% ROI<br />Guarantee</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-muted-foreground to-transparent"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ transformOrigin: 'top' }}
          />
        </motion.div>
      </section>

      {/* ================ LOGO / TRUST MARQUEE ================ */}
      <section className="py-12 border-y border-border bg-primary/[0.02] overflow-hidden">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Trusted by ambitious brands worldwide
        </p>
        <motion.div
          className="flex gap-12 items-center whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(2)].flatMap((_, g) =>
            ['LUMORA', 'NORTHSTAR', 'FIELD & FORGE', 'HALCYON', 'OAKMONT', 'EVERMORE', 'BRIGHTLY', 'CRESTLINE'].map(
              (b, i) => (
                <span
                  key={`${g}-${i}`}
                  className="text-2xl sm:text-3xl font-bold text-muted-foreground/40 hover:text-primary transition-colors px-4"
                >
                  {b}
                </span>
              )
            )
          )}
        </motion.div>
      </section>

      {/* ================ STATS ================ */}
      <section className="py-20 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              By the Numbers
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Results that speak louder than words.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 500, suffix: '+', label: 'Clients Served', icon: HeartIcon },
              { value: 1000, suffix: '+', label: 'Projects Completed', icon: RocketIcon },
              { value: 50, suffix: 'M+', prefix: '£', label: 'Revenue Generated', icon: TrendingUpIcon },
              { value: 98, suffix: '%', label: 'Client Satisfaction', icon: StarIcon },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-3xl bg-white border-2 border-border hover:border-secondary hover:shadow-2xl transition-all duration-500 text-center overflow-hidden"
              >
                <motion.div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-secondary/10 to-accent/10 blur-2xl group-hover:from-secondary/30 group-hover:to-accent/30 transition-all duration-500"
                />
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                  className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 mb-4 relative"
                >
                  <s.icon className="size-6 text-secondary" />
                </motion.div>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 relative">
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    prefix={s.prefix || ''}
                  />
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider relative">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================ SERVICES ================ */}
      <AnimatedSection className="py-24 sm:py-32 bg-gradient-to-b from-transparent to-primary/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Comprehensive Services
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Everything you need.{' '}
              <span className="text-secondary">Under one roof.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              No more juggling agencies. Six core disciplines, one senior team, fully integrated.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={service.href} className="block h-full">
                  <div className="relative h-full p-8 rounded-3xl bg-white border-2 border-border hover:border-secondary hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Gradient blob */}
                    <motion.div
                      className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${service.gradient} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-500`}
                    />

                    <motion.div
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg mb-6`}
                    >
                      <service.icon className="size-7 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/5 border border-border text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-secondary font-semibold text-sm">
                      <span>Learn More</span>
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
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link href="/services">
                <Button size="lg" variant="outline">
                  Explore All Services
                  <ArrowRightIcon className="ml-2 size-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ================ WHY CHOOSE ================ */}
      <AnimatedSection className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Why Ace Studios
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Strategy. Craft. Velocity.
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine strategic thinking, creative excellence, and technical expertise to deliver
              results that exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <Card className="h-full border-2 border-border hover:border-secondary transition-all duration-300 hover:shadow-xl relative overflow-hidden bg-white">
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-accent/0 group-hover:from-secondary/5 group-hover:to-accent/5 transition-all duration-500" />
                  <CardHeader className="relative">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      className="p-3 bg-secondary/10 w-fit rounded-xl mb-4 group-hover:bg-secondary/20 transition-colors"
                    >
                      <value.icon className="size-6 text-secondary" />
                    </motion.div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================ PROCESS ================ */}
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
            className="text-center mb-20 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              The Ace Process
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              From idea to launch in four steps.
            </h2>
            <p className="text-lg text-white/70">
              A proven methodology that ensures success at every stage, refined over 1,000+ projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="relative p-7 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 h-full overflow-hidden">
                  <motion.div
                    className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${p.gradient} opacity-20 blur-2xl group-hover:opacity-50 transition-opacity duration-500`}
                  />
                  <div className="relative">
                    <span className="text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                      {p.step}
                    </span>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${p.gradient} shadow-lg mb-4 mt-2`}
                    >
                      <p.icon className="size-5 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-xl mb-2">{p.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{p.description}</p>
                  </div>
                </div>

                {/* Connector arrow */}
                {i < process.length - 1 && (
                  <motion.div
                    className="hidden lg:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.4 }}
                  >
                    <ArrowRightIcon className="size-5 text-white/30" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================ PORTFOLIO HIGHLIGHTS ================ */}
      <AnimatedSection className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl">
              <Badge variant="secondary" className="mb-4">
                Recent Work
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                Selected case studies.
              </h2>
              <p className="text-lg text-muted-foreground">
                A glimpse into how we turn ambitious ideas into measurable outcomes.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/work">
                <Button variant="outline" size="lg">
                  View All Work
                  <ArrowRightIcon className="ml-2 size-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={`/work/${item.slug}`} className="block">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-55 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-white/90 backdrop-blur-sm text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover arrow */}
                    <motion.div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="p-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      >
                        <ArrowRightIcon className="size-6 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Floating result badge */}
                    <motion.div
                      className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 shadow-lg"
                      initial={{ y: 60, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    >
                      <p className="text-xs font-bold text-secondary">{item.result}</p>
                    </motion.div>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================ TECH STACK MARQUEE ================ */}
      <section className="py-20 bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5 border-y border-border overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 px-4"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">
            Powered by the best
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-primary">
            A modern stack, in expert hands.
          </h3>
        </motion.div>

        <div className="relative">
          <motion.div
            className="flex gap-4 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {[...techStack, ...techStack].map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-4 rounded-full bg-white border-2 border-border shadow-sm flex-shrink-0 hover:border-secondary transition-colors"
              >
                <span className="size-2 rounded-full bg-gradient-to-br from-secondary to-accent" />
                <span className="font-semibold text-primary">{t}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================ TESTIMONIALS ================ */}
      <AnimatedSection className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Client Love
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Don&apos;t take our word for it.
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real entrepreneurs and businesses we&apos;ve partnered with.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative p-8 rounded-3xl bg-white border-2 border-border hover:border-secondary hover:shadow-2xl transition-all duration-500"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="absolute -top-5 left-8 p-3 rounded-2xl bg-gradient-to-br from-secondary to-accent shadow-lg"
                >
                  <QuoteIcon className="size-5 text-white" />
                </motion.div>

                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(t.rating)].map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <StarIcon className="size-4 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6 italic">
                  &ldquo;{t.testimonial}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-bold text-white shrink-0">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="font-bold text-primary">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================ PRICING ================ */}
      <AnimatedSection className="py-24 sm:py-32 bg-gradient-to-b from-primary/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Transparent Pricing
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Three plans. <span className="text-secondary">Zero surprises.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Pricing that scales with you. Pick the tier that fits today, upgrade when you&apos;re ready.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {p.featured && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
                  >
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-secondary to-accent text-white text-xs font-bold shadow-lg">
                      ★ Most Popular
                    </div>
                  </motion.div>
                )}

                <div
                  className={`h-full p-8 rounded-3xl border-2 transition-all duration-500 ${
                    p.featured
                      ? 'bg-gradient-to-br from-secondary to-accent text-white border-transparent shadow-2xl'
                      : 'bg-white border-border hover:border-secondary hover:shadow-xl'
                  }`}
                >
                  <h3 className={`text-2xl font-bold mb-2 ${p.featured ? 'text-white' : 'text-primary'}`}>
                    {p.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      p.featured ? 'text-white/80' : 'text-muted-foreground'
                    }`}
                  >
                    {p.blurb}
                  </p>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span
                      className={`text-5xl font-bold ${p.featured ? 'text-white' : 'text-primary'}`}
                    >
                      {p.price}
                    </span>
                    {p.price !== 'Custom' && (
                      <span
                        className={`text-sm ${
                          p.featured ? 'text-white/70' : 'text-muted-foreground'
                        }`}
                      >
                        starting
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {p.perks.map((perk) => (
                      <motion.li
                        key={perk}
                        className="flex items-start gap-3 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle2Icon
                          className={`size-5 flex-shrink-0 mt-0.5 ${
                            p.featured ? 'text-white' : 'text-accent'
                          }`}
                        />
                        <span className={p.featured ? 'text-white/90' : 'text-foreground'}>
                          {perk}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className={`w-full ${
                          p.featured
                            ? 'bg-white text-secondary hover:bg-white/90'
                            : ''
                        }`}
                        variant={p.featured ? 'default' : 'outline'}
                      >
                        Get Started
                        <ArrowRightIcon className="ml-2 size-4" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================ INSIGHTS / BLOG TEASER ================ */}
      <AnimatedSection className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl">
              <Badge variant="secondary" className="mb-4">
                Insights
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                From our journal.
              </h2>
              <p className="text-lg text-muted-foreground">
                Tactical playbooks, deep dives, and lessons from 1,000+ shipped projects.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/blog">
                <Button variant="outline" size="lg">
                  Read All Posts
                  <ArrowRightIcon className="ml-2 size-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="rounded-3xl overflow-hidden bg-white border-2 border-border hover:border-secondary hover:shadow-2xl transition-all duration-500 h-full">
                  <motion.div
                    className={`relative aspect-[16/10] bg-gradient-to-br ${post.gradient} overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-30 mix-blend-multiply`} />
                  </motion.div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline">{post.tag}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-secondary font-semibold text-sm">
                      <span>Read article</span>
                      <ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================ FAQ ================ */}
      <AnimatedSection className="py-16 sm:py-20 bg-primary/[0.02]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Quick answers.
            </h2>
            <p className="text-lg text-muted-foreground">
              The questions we hear most often, answered honestly.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl bg-white border-2 border-border overflow-hidden hover:border-secondary transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-semibold text-primary">{f.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDownIcon className="size-5 text-secondary" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/faq">
              <Button variant="outline" size="lg">
                View All FAQs
                <ArrowRightIcon className="ml-2 size-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      <PageCTA
        heading="Like what you see?"
        subheading="Let's talk about your project. We'll respond within 24 hours with honest, jargon-free advice."
        primaryButton={{ label: 'Start Your Project', href: '/contact' }}
        secondaryButton={{ label: 'See All Work', href: '/work' }}
        disclaimer="No obligations · No pressure · Just clarity on whether we're the right fit."
      />

      <Footer />
    </div>
  )
}
