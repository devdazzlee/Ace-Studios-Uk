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
import { AnimatedSection } from '@/components/animated-section'
import { PageCTA } from '@/components/page-cta'
import {
  CheckCircle2Icon,
  SparklesIcon,
  RocketIcon,
  UsersIcon,
  LightbulbIcon,
  TargetIcon,
  ArrowRightIcon,
  HeartIcon,
  TrophyIcon,
  GlobeIcon,
  ZapIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  AwardIcon,
  StarIcon,
  CompassIcon,
  CodeIcon,
  PaletteIcon,
  MegaphoneIcon,
  ShoppingBagIcon,
  BrainIcon,
  HandshakeIcon,
  QuoteIcon,
  ChevronDownIcon,
} from 'lucide-react'

// Animated counter that smoothly counts up when in view
function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = value
    const stepTime = 16
    const steps = (duration * 1000) / stepTime
    const inc = end / steps
    const id = setInterval(() => {
      start += inc
      if (start >= end) {
        setCount(end)
        clearInterval(id)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)
    return () => clearInterval(id)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// Mouse-following parallax orb used in the hero background
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
  const springX = useSpring(x, { stiffness: 50, damping: 20 })
  const springY = useSpring(y, { stiffness: 50, damping: 20 })

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
        x: springX,
        y: springY,
      }}
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  // Global progress bar
  const { scrollYProgress: pageProgress } = useScroll()
  const progressScale = useSpring(pageProgress, { stiffness: 100, damping: 30 })

  const stats = [
    { value: 500, suffix: '+', label: 'Happy Clients', icon: HeartIcon },
    { value: 50, suffix: 'M+', label: 'Revenue Generated', icon: TrendingUpIcon, prefix: '£' },
    { value: 12, suffix: '+', label: 'Years of Excellence', icon: TrophyIcon },
    { value: 40, suffix: '+', label: 'Countries Served', icon: GlobeIcon },
  ]

  const pillars = [
    {
      icon: CompassIcon,
      title: 'Our Mission',
      tagline: 'Empower entrepreneurs.',
      description:
        'To democratize digital growth by giving every entrepreneur access to the strategy, design, and engineering once reserved for Fortune 500 brands.',
      color: 'from-secondary to-blue-500',
    },
    {
      icon: SparklesIcon,
      title: 'Our Vision',
      tagline: 'A better internet for builders.',
      description:
        'A world where ambitious businesses are no longer slowed down by agencies that overpromise, underdeliver, and disappear after launch.',
      color: 'from-accent to-pink-500',
    },
    {
      icon: HandshakeIcon,
      title: 'Our Promise',
      tagline: 'Skin in the game.',
      description:
        'We win when you win. Every engagement is measured against your ROI, not impressions, not vanity metrics, just revenue you can put in the bank.',
      color: 'from-purple-500 to-secondary',
    },
  ]

  const values = [
    {
      icon: LightbulbIcon,
      title: 'Innovation First',
      description:
        'We stay ahead of market trends, constantly exploring new technologies and strategies to keep your business at the forefront of your industry.',
    },
    {
      icon: TargetIcon,
      title: 'Results-Driven',
      description:
        'Every decision, every strategy, every campaign is measured against one metric: your revenue growth and profitability.',
    },
    {
      icon: UsersIcon,
      title: 'True Partnership',
      description:
        "Your success is our success. We're invested in your long-term growth and sustainability, celebrating milestones with you.",
    },
    {
      icon: SparklesIcon,
      title: 'Excellence',
      description:
        "We don't just meet expectations, we exceed them. Every project receives meticulous attention to detail and craftsmanship.",
    },
    {
      icon: ShieldCheckIcon,
      title: 'Radical Transparency',
      description:
        'No hidden fees, no smoke and mirrors. You see every number, every decision, every result, in plain English, in real time.',
    },
    {
      icon: ZapIcon,
      title: 'Velocity',
      description:
        'Speed compounds. We ship faster, iterate faster, and learn faster, turning months of agency overhead into weeks of measurable progress.',
    },
  ]

  const process = [
    {
      step: '01',
      icon: BrainIcon,
      title: 'Listen & Learn',
      description:
        'Deep-dive into your business, your customers, your competition. We become an extension of your team, not an outsider with a template.',
    },
    {
      step: '02',
      icon: CompassIcon,
      title: 'Strategize',
      description:
        'A bespoke roadmap rooted in data. Every milestone is tied to a revenue goal, not a deliverable on a Gantt chart.',
    },
    {
      step: '03',
      icon: PaletteIcon,
      title: 'Design & Build',
      description:
        'World-class design fused with rock-solid engineering. Pixel-perfect, accessible, performant, and obsessed over.',
    },
    {
      step: '04',
      icon: RocketIcon,
      title: 'Launch',
      description:
        'Coordinated rollout across every channel with monitoring, analytics, and contingency plans baked in from day one.',
    },
    {
      step: '05',
      icon: TrendingUpIcon,
      title: 'Optimize & Scale',
      description:
        "Launch day isn't the finish line, it's the starting line. We measure, iterate, and compound your results month over month.",
    },
  ]

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & Strategy Director',
      bio: 'Former VP at a top digital agency with 15+ years in digital transformation. Passionate about helping entrepreneurs scale globally.',
      gradient: 'from-secondary/30 to-accent/30',
    },
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      bio: 'Award-winning designer and brand strategist. Has created identities for 200+ brands ranging from startups to Fortune 500 companies.',
      gradient: 'from-pink-400/30 to-purple-500/30',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Development',
      bio: 'Full-stack engineer with expertise in e-commerce platforms. Led development for 100+ high-performing web properties.',
      gradient: 'from-blue-400/30 to-secondary/30',
    },
    {
      name: 'Jessica Williams',
      role: 'E-Commerce Specialist',
      bio: 'Amazon FBA expert with a track record of launching and scaling 50+ successful product lines to multiple 6-figures.',
      gradient: 'from-accent/30 to-yellow-400/30',
    },
  ]

  const timeline = [
    {
      year: '2015',
      title: 'Ace Studios Founded',
      description:
        'Started with a simple mission: help entrepreneurs build profitable online businesses without the overwhelming jargon.',
    },
    {
      year: '2017',
      title: 'Expanded to E-Commerce',
      description:
        'Recognized the need for specialized Amazon FBA and Shopify expertise. Built proprietary frameworks for rapid scaling.',
    },
    {
      year: '2019',
      title: '100+ Clients Milestone',
      description:
        'Celebrated 100 successful client partnerships and £20M+ in collective client revenue. Expanded team to 25+ specialists.',
    },
    {
      year: '2021',
      title: 'Multi-Platform Mastery',
      description:
        'Launched expertise in TikTok Shop and international e-commerce. Became one of the most trusted agencies for social commerce.',
    },
    {
      year: '2023',
      title: 'AI-Powered Solutions',
      description:
        'Integrated cutting-edge AI tools for content creation, analytics, and customer insights. Maintained human touch throughout.',
    },
    {
      year: '2024',
      title: '500+ Success Stories',
      description:
        'Celebrated 500 successful client partnerships. Established as the top choice for entrepreneur-focused digital growth.',
    },
  ]

  const achievements = [
    { icon: AwardIcon, title: 'Agency of the Year', year: '2023' },
    { icon: TrophyIcon, title: 'Top 10 Shopify Partner', year: '2024' },
    { icon: StarIcon, title: 'Clutch Top B2B Award', year: '2023' },
    { icon: ShieldCheckIcon, title: 'Meta Business Partner', year: '2022' },
    { icon: GlobeIcon, title: 'Google Premier Partner', year: '2024' },
    { icon: SparklesIcon, title: 'Webby Award Winner', year: '2024' },
  ]

  const expertise = [
    { icon: ShoppingBagIcon, label: 'Amazon FBA & FBM' },
    { icon: CodeIcon, label: 'Shopify Plus' },
    { icon: MegaphoneIcon, label: 'TikTok Shop' },
    { icon: PaletteIcon, label: 'Brand Design' },
    { icon: BrainIcon, label: 'AI Integration' },
    { icon: TrendingUpIcon, label: 'Paid Media' },
    { icon: GlobeIcon, label: 'SEO & Content' },
    { icon: RocketIcon, label: 'Launch Strategy' },
  ]

  const testimonials = [
    {
      quote:
        "Working with Ace Studios felt less like hiring an agency and more like adding a co-founder. They obsessed over our numbers as much as we did.",
      author: 'Priya Mehta',
      role: 'Founder, Lumora Beauty',
    },
    {
      quote:
        'We tripled revenue in six months. The strategy was sharp, the execution was flawless, and the communication was the best I have ever experienced.',
      author: 'Daniel Park',
      role: 'CEO, Northstar Apparel',
    },
    {
      quote:
        "They built our Shopify store, ran our paid media, and re-branded us, all without a single hand-off. It's the cleanest agency engagement I've had in 10 years.",
      author: 'Maya Robertson',
      role: 'Founder, Field & Forge',
    },
  ]

  const faqs = [
    {
      q: 'How is Ace Studios different from other agencies?',
      a: 'Every role is in-house and senior. There are no junior hand-offs, no offshore black boxes, and no "account managers" who never touch the work. You speak directly with the people doing the work.',
    },
    {
      q: 'What size businesses do you typically work with?',
      a: 'From scrappy first-time founders to 8-figure brands. Our pricing scales with you, so we are equally happy launching a brand-new store as we are optimizing a multi-million-pound one.',
    },
    {
      q: 'How quickly can we get started?',
      a: 'Most engagements kick off within 5 business days of our discovery call. For urgent launches we have a fast-track program that can begin within 48 hours.',
    },
    {
      q: 'Do you offer ongoing support after launch?',
      a: 'Yes. Launch is the beginning, not the end. We offer monthly retainers, growth-share agreements, and on-demand support packages so you never feel abandoned.',
    },
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Top scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary z-[60] origin-left"
        style={{ scaleX: progressScale }}
      />

      <Navbar />

      {/* ============ HERO ============ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
      >
        {/* Animated background orbs */}
        <div className="absolute inset-0 z-0">
          <ParallaxOrb
            color="rgba(80, 96, 208, 0.35)"
            size={500}
            initialX="-10%"
            initialY="10%"
            strength={40}
          />
          <ParallaxOrb
            color="rgba(255, 107, 53, 0.3)"
            size={450}
            initialX="65%"
            initialY="20%"
            strength={50}
          />
          <ParallaxOrb
            color="rgba(112, 128, 224, 0.25)"
            size={400}
            initialX="30%"
            initialY="60%"
            strength={35}
          />

          {/* Grid overlay */}
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
          <div className="text-center space-y-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="size-2 rounded-full bg-secondary"
              />
              About Ace Studios, Est. 2015
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                className="text-5xl sm:text-7xl lg:text-8xl font-bold text-primary leading-[1.05] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                We build{' '}
                <span className="relative inline-block">
                  <motion.span
                    className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  >
                    businesses
                  </motion.span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.9 }}
                  >
                    <motion.path
                      d="M2 8 Q 150 -2 298 8"
                      stroke="url(#g1)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.9 }}
                    />
                    <defs>
                      <linearGradient id="g1">
                        <stop offset="0%" stopColor="#5060d0" />
                        <stop offset="100%" stopColor="#ff6b35" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
                ,<br />
                not just websites.
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                We&apos;re a team of entrepreneurs, strategists, and builders obsessed with helping
                ambitious businesses scale profitably, from your first sale to your tenth million.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <Button size="lg" className="group">
                    Start Your Project
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
                <Link href="/services">
                  <Button variant="outline" size="lg">
                    Explore Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating badges around hero */}
          <div className="relative h-24 hidden md:block">
            {[
              { label: 'Shopify Plus', x: '5%', delay: 0 },
              { label: 'Amazon FBA', x: '25%', delay: 0.2 },
              { label: 'TikTok Shop', x: '50%', delay: 0.4 },
              { label: 'AI Strategy', x: '70%', delay: 0.6 },
              { label: 'Brand Design', x: '88%', delay: 0.8 },
            ].map((b) => (
              <motion.div
                key={b.label}
                className="absolute top-0 px-4 py-2 bg-white/80 backdrop-blur-sm border border-border rounded-full text-xs font-semibold text-primary shadow-lg"
                style={{ left: b.x }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.7 + b.delay },
                  y: { duration: 3, delay: 0.7 + b.delay, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                {b.label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ transformOrigin: 'top' }}
          />
        </motion.div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="py-16 border-y border-border bg-primary/[0.02] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  className="inline-flex p-3 rounded-xl bg-secondary/10 mb-3 group-hover:bg-secondary/20 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="size-6 text-secondary" />
                </motion.div>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-1">
                  {stat.prefix}
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STORY ============ */}
      <AnimatedSection className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/design-service.jpg"
                  alt="Ace Studios team collaborating"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-accent/40 mix-blend-multiply" />
              </motion.div>

              {/* Floating sticker */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-border max-w-[220px]"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 150 }}
                whileHover={{ rotate: 3, scale: 1.05 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.08 }}
                    >
                      <StarIcon className="size-4 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-snug">
                  &ldquo;Truly the best agency we&apos;ve ever worked with.&rdquo;
                </p>
                <p className="text-xs font-semibold text-primary mt-2">500+ clients</p>
              </motion.div>

              {/* Decorative floating dot */}
              <motion.div
                className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent opacity-80"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="w-fit">
                Our Story
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
                Born from frustration.{' '}
                <span className="text-secondary">Built on results.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ace Studios was born from frustration. Our founder, Alex Johnson, kept hearing the
                same complaint from entrepreneur friends: digital agencies were expensive,
                out-of-touch, and focused on vanity metrics instead of actual revenue.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In 2015, we set out to build the agency we wished existed, one that combines
                world-class design and development with an obsessive focus on ROI. One that
                doesn&apos;t disappear after launch. One that actually understands what it takes to
                build a profitable online business.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we&apos;ve helped 500+ entrepreneurs and businesses generate over £50M in
                combined revenue. Every project, every client, every day, we&apos;re here to prove
                that great design and engineering, aligned with smart strategy, transforms
                businesses.
              </p>

              <motion.div
                className="flex flex-wrap gap-3 pt-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              >
                {['Founder-led', 'In-house only', 'ROI-first', 'Long-term partner'].map((tag) => (
                  <motion.div
                    key={tag}
                    variants={{
                      hidden: { opacity: 0, scale: 0.5 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-4 py-2 rounded-full bg-primary/5 border border-border text-sm font-medium text-primary"
                  >
                    {tag}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-2">
                <Link href="/contact">
                  <Button size="lg" className="mt-2">
                    Let&apos;s Work Together
                    <ArrowRightIcon className="ml-2 size-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* ============ MISSION / VISION / PROMISE ============ */}
      <AnimatedSection className="py-24 sm:py-32 bg-gradient-to-b from-primary/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              What Drives Us
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              The fuel behind every line of code.
            </h2>
            <p className="text-lg text-muted-foreground">
              Three convictions guide everything we do, from a five-minute Slack reply to a
              six-month brand overhaul.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-3xl bg-white border-2 border-border overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500">
                  <motion.div
                    className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}
                  />
                  <motion.div
                    className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${p.color} mb-6 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <p.icon className="size-7 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary mb-1">{p.title}</h3>
                  <p className="text-sm font-semibold text-secondary mb-4">{p.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ============ CORE VALUES ============ */}
      <AnimatedSection className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Our Core Values
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Six principles, zero compromises.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These aren&apos;t words on our wall, they guide every decision and every project.
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
                <Card className="h-full border-2 border-border hover:border-secondary transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-accent/0 group-hover:from-secondary/5 group-hover:to-accent/5 transition-all duration-500"
                  />
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
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ============ PROCESS ============ */}
      <AnimatedSection className="py-24 sm:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #5060d0 0%, transparent 50%), radial-gradient(circle at 80% 80%, #ff6b35 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              The Ace Method
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              A proven 5-step playbook.
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Refined over 500+ engagements. Same rigor whether you&apos;re launching your first
              store or scaling past your tenth million.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                  <motion.div
                    className="text-5xl font-bold text-white/10 mb-2"
                    whileHover={{ scale: 1.1, color: 'rgba(255,255,255,0.3)' }}
                  >
                    {step.step}
                  </motion.div>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    className="inline-flex p-2.5 rounded-lg bg-secondary/20 mb-4"
                  >
                    <step.icon className="size-5 text-secondary" />
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{step.description}</p>
                </div>
                {/* Connector line */}
                {i < process.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-white/20 to-transparent z-10"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ============ WHY DIFFERENT ============ */}
      <AnimatedSection className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Badge variant="secondary" className="mb-4">
                Why Ace Studios
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
                Five reasons clients{' '}
                <span className="text-accent">stay for years</span>, not months.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The agency world is crowded. Here&apos;s what makes our relationships compound year
                after year, instead of ending in disappointment.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: '98%', l: 'Client retention' },
                  { v: '24h', l: 'Avg. reply time' },
                  { v: '£50M+', l: 'Revenue generated' },
                  { v: '0', l: 'Junior hand-offs' },
                ].map((m, i) => (
                  <motion.div
                    key={m.l}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-2xl bg-primary/5 border border-border"
                  >
                    <div className="text-2xl font-bold text-secondary">{m.v}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      {m.l}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-3">
              {[
                'In-house experts only, no outsourcing, no junior hand-offs, no third-party black boxes',
                'Deep platform expertise in Amazon FBA/FBM, Shopify, TikTok Shop, and global e-commerce',
                'Plain-language guidance, zero jargon, zero buzzwords, total clarity',
                'Transparent pricing that scales with you, three tiers, every service',
                "Dedicated support that's always available to answer questions and solve problems",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 items-start p-5 bg-white rounded-2xl border-2 border-border hover:border-secondary hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                    className="flex-shrink-0"
                  >
                    <CheckCircle2Icon className="size-6 text-accent" />
                  </motion.div>
                  <p className="text-foreground text-sm leading-relaxed pt-0.5">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ============ EXPERTISE / MARQUEE ============ */}
      <section className="py-20 bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5 border-y border-border overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 px-4"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">
            Where we excel
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-primary">
            Eight disciplines. One team.
          </h3>
        </motion.div>

        <div className="relative">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {[...expertise, ...expertise].map((e, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-4 rounded-full bg-white border-2 border-border shadow-sm flex-shrink-0"
              >
                <e.icon className="size-5 text-secondary" />
                <span className="font-semibold text-primary">{e.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <AnimatedSection className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              The Team
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              The humans behind the work.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Senior, full-time, in-house. Each brings years of expertise and an unwavering
              commitment to your growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-3xl border-2 border-border overflow-hidden hover:border-secondary hover:shadow-2xl transition-all duration-500">
                  <motion.div
                    className={`relative aspect-square bg-gradient-to-br ${member.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.4 }}
                      className="relative"
                    >
                      <UsersIcon className="size-20 text-white/60" />
                    </motion.div>
                    {/* Floating sparkle */}
                    <motion.div
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    >
                      <SparklesIcon className="size-5 text-white" />
                    </motion.div>
                  </motion.div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-primary mb-1">{member.name}</h3>
                    <p className="text-sm text-secondary font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ============ TIMELINE ============ */}
      <AnimatedSection className="py-24 sm:py-32 bg-primary/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Our Journey
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              A decade of compounding.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small team with a big dream to a trusted partner for hundreds of brands.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <motion.div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-accent to-secondary -translate-x-1/2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              style={{ transformOrigin: 'top' }}
            />

            <div className="space-y-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className={`flex flex-col md:flex-row ${
                    i % 2 === 0 ? '' : 'md:flex-row-reverse'
                  } gap-8 items-center`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  viewport={{ once: true, margin: '-50px' }}
                >
                  <motion.div
                    className="flex-1 w-full"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="border-2 border-border hover:border-secondary transition-all duration-300 hover:shadow-xl">
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2 text-base px-3 py-1">
                          {item.year}
                        </Badge>
                        <CardTitle className="text-2xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    className="relative z-10 flex-shrink-0"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.2, duration: 0.6 }}
                  >
                    <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent text-white items-center justify-center font-bold text-xl shadow-xl border-4 border-background">
                      {i + 1}
                    </div>
                  </motion.div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ============ ACHIEVEMENTS ============ */}
      <AnimatedSection className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Recognition
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Awards & partnerships.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don&apos;t chase trophies, but when the industry recognizes the work, we&apos;ll
              take it.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, rotate: [0, -2, 2, 0] }}
                className="p-6 rounded-2xl bg-white border-2 border-border hover:border-accent hover:shadow-xl transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex p-3 rounded-xl bg-accent/10 mb-3 group-hover:bg-accent/20 transition-colors"
                >
                  <a.icon className="size-6 text-accent" />
                </motion.div>
                <p className="text-sm font-bold text-primary leading-tight">{a.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{a.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ============ TESTIMONIALS ============ */}
      <AnimatedSection className="py-24 sm:py-32 bg-gradient-to-b from-transparent to-primary/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Kind Words
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Don&apos;t take our word for it.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the founders and operators we&apos;ve had the privilege of building with.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative p-8 rounded-3xl bg-white border-2 border-border hover:border-secondary hover:shadow-2xl transition-all duration-500"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className="absolute -top-5 left-8 p-3 rounded-2xl bg-gradient-to-br from-secondary to-accent shadow-lg"
                >
                  <QuoteIcon className="size-5 text-white" />
                </motion.div>

                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(5)].map((_, idx) => (
                    <StarIcon key={idx} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-primary">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ============ FAQ ============ */}
      <AnimatedSection className="py-24 sm:py-32">
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
        </div>
      </AnimatedSection>

      <PageCTA
        heading={
          <>
            Ready to build something <span className="italic">remarkable</span>?
          </>
        }
        subheading="Let's discuss your vision, your challenges, and how Ace Studios can help you achieve goals you didn't think were possible."
        primaryButton={{ label: 'Schedule Free Consultation', href: '/contact' }}
        secondaryButton={{ label: 'See Our Services', href: '/services' }}
        disclaimer="No obligations · No pressure · Just clarity on whether we're the right fit."
        icon={HeartIcon}
      />

      <Footer />
    </div>
  )
}
