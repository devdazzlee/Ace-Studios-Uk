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
import type { LucideIcon as LucideIconType } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { PageCTA } from '@/components/page-cta'
import {
  CheckCircle2Icon,
  ArrowRightIcon,
  ChevronDownIcon,
  StarIcon,
  QuoteIcon,
  SparklesIcon,
  RocketIcon,
} from 'lucide-react'

// ---------- Types ----------

export interface ServiceFeature {
  icon: LucideIconType
  title: string
  description: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  icon: LucideIconType
}

export interface PricingTier {
  name: string
  price: string
  priceSuffix?: string
  description: string
  features: string[]
  popular?: boolean
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ServiceTestimonial {
  name: string
  role: string
  quote: string
}

export interface ServiceStat {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

export interface ServicePageProps {
  badge: string
  title: string
  titleAccent: string
  titleSuffix?: string
  subtitle: string
  heroImage?: string
  heroBullets?: string[]
  primaryCTA?: string
  secondaryCTA?: string
  stats?: ServiceStat[]
  featuresHeading?: string
  featuresSubheading?: string
  features: ServiceFeature[]
  processHeading?: string
  processSubheading?: string
  process: ProcessStep[]
  pricingHeading?: string
  pricingSubheading?: string
  pricing: PricingTier[]
  benefits?: string[]
  benefitsHeading?: string
  benefitsSubheading?: string
  faqs: FAQItem[]
  testimonials: ServiceTestimonial[]
  ctaHeading?: string
  ctaSubheading?: string
  ctaButton?: string
  themeFrom?: string // tailwind color stop, e.g. "from-secondary"
  themeTo?: string // e.g. "to-accent"
  gradientCSSFrom?: string // raw CSS, e.g. "rgb(80,96,208)"
  gradientCSSTo?: string // raw CSS, e.g. "rgb(255,107,53)"
  techStack?: string[]
}

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

// ---------- Main Component ----------

export function ServicePageTemplate(props: ServicePageProps) {
  const {
    badge,
    title,
    titleAccent,
    titleSuffix,
    subtitle,
    heroImage = '/design-service.jpg',
    heroBullets = ['Free consultation', 'Custom solutions', 'ROI focused'],
    primaryCTA = 'Start Your Project',
    secondaryCTA = 'View Portfolio',
    stats,
    featuresHeading = 'What you get',
    featuresSubheading = 'A complete solution, end to end.',
    features,
    processHeading = 'Our Process',
    processSubheading = 'A proven methodology that ensures success at every stage.',
    process,
    pricingHeading = 'Transparent Pricing',
    pricingSubheading = 'Three plans designed for different needs and budgets.',
    pricing,
    benefits,
    benefitsHeading = 'Why choose us',
    benefitsSubheading = 'Reasons clients trust us with their growth.',
    faqs,
    testimonials,
    ctaHeading = 'Ready to get started?',
    ctaSubheading = "Let's discuss your goals and build something remarkable together.",
    ctaButton = 'Schedule Free Consultation',
    gradientCSSFrom = 'rgb(80, 96, 208)',
    gradientCSSTo = 'rgb(255, 107, 53)',
    techStack,
  } = props

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(heroProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(heroProgress, [0, 0.85], [1, 0])

  const { scrollYProgress: pageProgress } = useScroll()
  const progressScale = useSpring(pageProgress, { stiffness: 100, damping: 30 })

  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary z-[60] origin-left"
        style={{ scaleX: progressScale }}
      />

      <Navbar />

      {/* ============ HERO ============ */}
      <section
        ref={heroRef}
        className="relative pt-28 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <ParallaxOrb color="rgba(80,96,208,0.3)" size={500} initialX="-10%" initialY="5%" strength={45} />
          <ParallaxOrb color="rgba(255,107,53,0.25)" size={420} initialX="65%" initialY="20%" strength={55} />
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
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium"
              >
                <motion.span
                  className="size-2 rounded-full bg-secondary"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {badge}
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-[1.05] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {title}{' '}
                <span className="relative inline-block">
                  <motion.span
                    className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  >
                    {titleAccent}
                  </motion.span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.path
                      d="M2 8 Q 150 -2 298 8"
                      stroke="url(#hgrad)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                    />
                    <defs>
                      <linearGradient id="hgrad">
                        <stop offset="0%" stopColor="#5060d0" />
                        <stop offset="100%" stopColor="#ff6b35" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
                {titleSuffix ? ` ${titleSuffix}` : '.'}
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {subtitle}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto">
                      {primaryCTA}
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
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    {secondaryCTA}
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                {heroBullets.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <CheckCircle2Icon className="text-accent size-5" />
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 via-transparent to-accent/30 mix-blend-multiply" />
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                className="absolute -left-4 top-12 bg-white rounded-2xl p-4 shadow-2xl border border-border"
                initial={{ opacity: 0, x: -40, rotate: -8 }}
                animate={{ opacity: 1, x: 0, rotate: -5 }}
                transition={{ delay: 1, type: 'spring' }}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100">
                    <SparklesIcon className="size-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Avg. growth</div>
                    <div className="font-bold text-primary text-sm">+247%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-16 bg-white rounded-2xl p-4 shadow-2xl border border-border"
                initial={{ opacity: 0, x: 40, rotate: 8 }}
                animate={{ opacity: 1, x: 0, rotate: 5 }}
                transition={{ delay: 1.2, type: 'spring' }}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="size-3 fill-accent text-accent" />
                  ))}
                </div>
                <div className="text-xs font-bold text-primary">4.9/5.0</div>
                <div className="text-[10px] text-muted-foreground">500+ reviews</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-8 bg-gradient-to-br from-secondary to-accent rounded-2xl p-4 shadow-2xl text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, type: 'spring' }}
                whileHover={{ scale: 1.05 }}
              >
                <RocketIcon className="size-5 mb-1" />
                <div className="text-xs font-bold leading-tight">
                  Trusted by<br />500+ founders
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ============ STATS ============ */}
      {stats && stats.length > 0 && (
        <section className="py-16 border-y border-border bg-primary/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-1">
                    <AnimatedCounter value={s.value} prefix={s.prefix || ''} suffix={s.suffix || ''} />
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ FEATURES ============ */}
      <AnimatedSection className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              What we deliver
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              {featuresHeading}
            </h2>
            <p className="text-lg text-muted-foreground">{featuresSubheading}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full p-7 rounded-3xl bg-white border-2 border-border hover:border-secondary hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <motion.div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-secondary/10 to-accent/10 blur-2xl group-hover:from-secondary/30 group-hover:to-accent/30 transition-all duration-500" />
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="relative inline-flex p-4 rounded-2xl bg-gradient-to-br from-secondary to-accent shadow-lg mb-5"
                  >
                    <feature.icon className="size-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary mb-3 relative">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ============ BENEFITS BAR ============ */}
      {benefits && benefits.length > 0 && (
        <AnimatedSection className="py-20 sm:py-24 bg-primary/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4">
                Why choose us
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
                {benefitsHeading}
              </h2>
              <p className="text-muted-foreground">{benefitsSubheading}</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-3 p-5 bg-white rounded-2xl border-2 border-border hover:border-secondary hover:shadow-lg transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.4 }}
                    className="flex-shrink-0"
                  >
                    <CheckCircle2Icon className="size-6 text-accent" />
                  </motion.div>
                  <p className="text-foreground text-sm leading-relaxed pt-0.5">{b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* ============ PROCESS ============ */}
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
              The Process
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{processHeading}</h2>
            <p className="text-lg text-white/70">{processSubheading}</p>
          </motion.div>

          <div className={`grid grid-cols-1 md:grid-cols-2 ${process.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
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
                  <motion.div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-secondary to-accent opacity-20 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative">
                    <span className="text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                      {p.step}
                    </span>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                      className="inline-flex p-3 rounded-xl bg-gradient-to-br from-secondary to-accent shadow-lg mb-4 mt-2"
                    >
                      <p.icon className="size-5 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-xl mb-2">{p.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{p.description}</p>
                  </div>
                </div>

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

      {/* ============ TECH STACK MARQUEE ============ */}
      {techStack && techStack.length > 0 && (
        <section className="py-16 bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5 border-y border-border overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 px-4"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
              Tools & Platforms
            </p>
            <h3 className="text-2xl font-bold text-primary">
              We work with the best in the business.
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
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-border shadow-sm flex-shrink-0"
                >
                  <span className="size-2 rounded-full bg-gradient-to-br from-secondary to-accent" />
                  <span className="font-semibold text-primary">{t}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ============ PRICING ============ */}
      <AnimatedSection className="py-24 sm:py-32 bg-gradient-to-b from-primary/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Pricing
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">{pricingHeading}</h2>
            <p className="text-lg text-muted-foreground">{pricingSubheading}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {tier.popular && (
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
                    tier.popular
                      ? 'bg-gradient-to-br from-secondary to-accent text-white border-transparent shadow-2xl'
                      : 'bg-white border-border hover:border-secondary hover:shadow-xl'
                  }`}
                >
                  <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-primary'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm mb-6 ${tier.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {tier.description}
                  </p>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className={`text-4xl font-bold ${tier.popular ? 'text-white' : 'text-primary'}`}>
                      {tier.price}
                    </span>
                    {tier.priceSuffix && (
                      <span className={`text-sm ${tier.popular ? 'text-white/70' : 'text-muted-foreground'}`}>
                        {tier.priceSuffix}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((perk) => (
                      <li key={perk} className="flex items-start gap-3 text-sm">
                        <CheckCircle2Icon
                          className={`size-5 flex-shrink-0 mt-0.5 ${
                            tier.popular ? 'text-white' : 'text-accent'
                          }`}
                        />
                        <span className={tier.popular ? 'text-white/90' : 'text-foreground'}>
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className={`w-full ${tier.popular ? 'bg-white text-secondary hover:bg-white/90' : ''}`}
                        variant={tier.popular ? 'default' : 'outline'}
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

      {/* ============ TESTIMONIALS ============ */}
      <AnimatedSection className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Client love
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Don&apos;t take our word for it.
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real clients we&apos;ve had the privilege of partnering with.
            </p>
          </motion.div>

          <div className={`grid gap-6 ${testimonials.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative p-8 rounded-3xl bg-white border-2 border-border hover:border-secondary hover:shadow-2xl transition-all duration-500"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.2 }}
                  className="absolute -top-5 left-8 p-3 rounded-2xl bg-gradient-to-br from-secondary to-accent shadow-lg"
                >
                  <QuoteIcon className="size-5 text-white" />
                </motion.div>

                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(5)].map((_, idx) => (
                    <StarIcon key={idx} className="size-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
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

      {/* ============ FAQ ============ */}
      <AnimatedSection className="py-24 sm:py-32 bg-primary/[0.02]">
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
              Frequently asked.
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
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl bg-white border-2 border-border overflow-hidden hover:border-secondary transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-semibold text-primary">{f.question}</span>
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
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <PageCTA
        heading={ctaHeading}
        subheading={ctaSubheading}
        primaryButton={{ label: ctaButton, href: '/contact' }}
        secondaryButton={{ label: 'Explore All Services', href: '/services' }}
        disclaimer="No obligations · No pressure · Just clarity on whether we're the right fit."
        gradientFrom={gradientCSSFrom}
        gradientTo={gradientCSSTo}
      />

      <Footer />
    </div>
  )
}
