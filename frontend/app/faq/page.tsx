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
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageCTA } from '@/components/page-cta'
import { AnimatedSection } from '@/components/animated-section'
import {
  HelpCircleIcon,
  DollarSignIcon,
  SettingsIcon,
  ShoppingBagIcon,
  ShieldIcon,
  PlayCircleIcon,
  MessageSquareIcon,
  SearchIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  SparklesIcon,
  RocketIcon,
  MailIcon,
  PhoneIcon,
  ClockIcon,
  type LucideIcon,
} from 'lucide-react'
import axios from 'axios'
import { API } from '@/config/config'

interface FAQItem {
  q: string
  a: string
}

interface FAQCategory {
  category: string
  description: string
  icon: LucideIcon
  gradient: string
  items: FAQItem[]
}

const faqs: FAQCategory[] = [
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
        a: "That is what the discovery call is for. Tell us the business outcome you want and we will recommend the right service mix, even if it is a service we do not offer (we will refer you out honestly).",
      },
    ],
  },
]

function AnimatedCounter({ value, suffix = '', duration = 1.5 }: { value: number; suffix?: string; duration?: number }) {
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

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

function ParallaxOrb({ color, size, initialX, initialY, strength = 40 }: { color: string; size: number; initialX: string; initialY: string; strength?: number }) {
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
      className="absolute rounded-full blur-[100px] pointer-events-none opacity-40 mix-blend-screen"
      style={{ background: color, width: size, height: size, left: initialX, top: initialY, x: sx, y: sy }}
      animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default function FAQPage() {
  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [openKey, setOpenKey] = useState<string | null>('General-0')
  const [customQuestion, setCustomQuestion] = useState({ name: '', email: '', question: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleCustomQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg(null)
    setSending(true)
    try {
      await axios.post(API.send, { type: 'question', ...customQuestion })
      setSubmitted(true)
      setCustomQuestion({ name: '', email: '', question: '' })
      setTimeout(() => setSubmitted(false), 4000)
    } catch (err) {
      const msg = axios.isAxiosError(err)
        ? err.response?.data?.error || err.message
        : err instanceof Error ? err.message : 'Something went wrong'
      setErrorMsg(msg)
    } finally {
      setSending(false)
    }
  }

  // Filter FAQ items
  const q = searchQuery.trim().toLowerCase()
  const filtered = faqs
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((i) =>
        !q ||
        i.q.toLowerCase().includes(q) ||
        i.a.toLowerCase().includes(q)
      ),
    }))
    .filter((cat) => (activeCategory === 'All' ? cat.items.length > 0 : cat.category === activeCategory && cat.items.length > 0))

  const totalQuestions = faqs.reduce((acc, c) => acc + c.items.length, 0)

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-background text-foreground overflow-hidden font-poppins selection:bg-accent selection:text-white">
      {/* Top progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary z-[60] origin-left"
        style={{ scaleX: progressScale }}
      />
      <Navbar />

      {/* ============ HERO SECTION ============ */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-b from-[#f2f4ff] via-white to-transparent dark:from-background dark:via-background dark:to-transparent">
        <div className="absolute inset-0 z-0">
          <ParallaxOrb color="rgba(80,96,208,0.35)" size={600} initialX="-15%" initialY="-10%" strength={40} />
          <ParallaxOrb color="rgba(255,107,53,0.3)" size={550} initialX="70%" initialY="5%" strength={50} />
          <div
            className="absolute inset-0 opacity-[0.06] dark:opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/15 border border-secondary/20 text-secondary text-sm font-semibold mb-8 shadow-sm backdrop-blur-sm"
          >
            <motion.span
              className="size-2.5 rounded-full bg-secondary"
              animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {totalQuestions}+ Answers &bull; Verified Agency Expert Insights
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight max-w-4xl mx-auto drop-shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Ask us{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary bg-[length:200%_auto] animate-gradient-flow">
              anything
              <motion.svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 250 12" fill="none">
                <motion.path
                  d="M2 8 Q 125 -2 248 8"
                  stroke="url(#fgrad-main)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />
                <defs>
                  <linearGradient id="fgrad-main">
                    <stop offset="0%" stopColor="#5060d0" />
                    <stop offset="100%" stopColor="#ff6b35" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
            .
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mt-10 leading-relaxed font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Before launching your next digital venture, explore honest, direct answers regarding our design process, pricing structures, timeframes, and technologies.
          </motion.p>

          {/* Search box */}
          <motion.div
            className="max-w-2xl mx-auto mt-12 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center bg-white dark:bg-card border-2 border-border/80 rounded-full shadow-lg overflow-hidden group hover:border-secondary transition-all">
              <SearchIcon className="absolute left-6 size-5 text-muted-foreground/75 pointer-events-none" />
              <Input
                type="text"
                placeholder="Search pricing, FBA, Shopify, custom software..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 pr-6 h-16 w-full border-none bg-transparent text-base focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/50 font-medium"
              />
            </div>
          </motion.div>

          {/* Key Stats Strip */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-20"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } } }}
          >
            {[
              { v: totalQuestions, s: '+', l: 'In-Depth Answers', color: 'text-secondary bg-secondary/5' },
              { v: faqs.length, s: '', l: 'Topic Categories', color: 'text-indigo-600 bg-indigo-50/50' },
              { v: 24, s: 'h', l: 'Avg Response Time', color: 'text-accent bg-accent/5' },
              { v: 500, s: '+', l: 'Brands Empowered', color: 'text-emerald-600 bg-emerald-50/50' },
            ].map((s) => (
              <motion.div
                key={s.l}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-3xl bg-white/70 dark:bg-card/50 backdrop-blur-md border border-border/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-center items-center text-center"
              >
                <div className={`text-4xl font-extrabold ${s.color.split(' ')[0]} mb-2`}>
                  <AnimatedCounter value={s.v} suffix={s.s} />
                </div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">{s.l}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ CATEGORIES TOPIC BAR ============ */}
      <AnimatedSection className="py-10 bg-white/40 dark:bg-card/20 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-3 px-3 py-1 bg-secondary/10 text-secondary border-none hover:bg-secondary/15 font-semibold text-xs rounded-full">
              Topic Filtering
            </Badge>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">Browse by Category</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {faqs.map((cat, i) => {
              const isActive = activeCategory === cat.category
              return (
                <motion.button
                  key={cat.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveCategory(isActive ? 'All' : cat.category)}
                  className={`relative p-5 rounded-2xl border-2 text-left overflow-hidden transition-all duration-300 flex flex-col justify-between h-40 ${
                    isActive
                      ? 'border-secondary bg-gradient-to-br from-secondary/5 via-accent/5 to-white dark:to-card shadow-lg shadow-secondary/5'
                      : 'border-border/60 bg-white dark:bg-card hover:border-secondary/40 hover:shadow-md'
                  }`}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.gradient} shadow-md inline-flex self-start`}>
                    <cat.icon className="size-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-primary text-base mb-1">{cat.category}</h3>
                    <p className="text-xs text-muted-foreground font-medium">
                      {cat.items.length} {cat.items.length === 1 ? 'article' : 'articles'}
                    </p>
                  </div>
                  {/* Subtle hover background highlight */}
                  <div className={`absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-gradient-to-br ${cat.gradient} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity`} />
                </motion.button>
              )
            })}
          </div>

          {activeCategory !== 'All' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mt-8"
            >
              <button
                onClick={() => setActiveCategory('All')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold hover:bg-secondary/20 transition-all shadow-sm"
              >
                Category: {activeCategory}
                <span className="text-xs bg-white dark:bg-background px-2 py-0.5 rounded-full font-bold ml-1 border border-secondary/10">Clear Filter &times;</span>
              </button>
            </motion.div>
          )}
        </div>
      </AnimatedSection>

      {/* ============ QUESTIONS ACCORDION ============ */}
      <AnimatedSection className="py-20 pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white dark:bg-card border border-border/80 rounded-3xl p-10 shadow-sm"
            >
              <HelpCircleIcon className="size-16 text-muted-foreground/45 mx-auto mb-5 animate-pulse" />
              <h3 className="text-2xl font-bold text-primary mb-2">No matching questions</h3>
              <p className="text-muted-foreground text-base max-w-md mx-auto">We couldn&apos;t find any articles matching your search query. Try resetting the filters or type another keyword.</p>
              <Button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="mt-6 bg-secondary hover:bg-secondary/90">
                Reset All Filters
              </Button>
            </motion.div>
          ) : (
            filtered.map((cat) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-14"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${cat.gradient} shadow-lg shadow-indigo-500/10`}>
                    <cat.icon className="size-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">{cat.category}</h2>
                    <p className="text-sm text-muted-foreground font-medium mt-0.5">{cat.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, i) => {
                    const key = `${cat.category}-${i}`
                    const isOpen = openKey === key
                    return (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? 'border-secondary/60 bg-white dark:bg-card shadow-md shadow-secondary/5 ring-1 ring-secondary/10'
                            : 'border-border/60 bg-white/70 dark:bg-card/70 hover:border-secondary/40 hover:bg-white dark:hover:bg-card'
                        }`}
                      >
                        <button
                          onClick={() => setOpenKey(isOpen ? null : key)}
                          className="w-full flex items-center justify-between gap-6 p-6 text-left"
                        >
                          <span className="font-bold text-primary text-base sm:text-lg leading-snug">{item.q}</span>
                          <div className="flex-shrink-0">
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className={`p-2 rounded-xl transition-all ${
                                isOpen
                                  ? 'bg-gradient-to-br from-secondary to-accent shadow-md'
                                  : 'bg-primary/5 dark:bg-white/5 group-hover:bg-primary/10'
                              }`}
                            >
                              <ChevronDownIcon className={`size-4 ${isOpen ? 'text-white' : 'text-primary dark:text-white/80'}`} />
                            </motion.div>
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 -mt-2">
                                <div className="h-[2px] bg-gradient-to-r from-secondary/20 via-accent/20 to-transparent mb-5 rounded-full" />
                                <p className="text-muted-foreground text-base leading-relaxed font-normal whitespace-pre-line">
                                  {item.a}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </AnimatedSection>

      {/* ============ STILL HAVE A QUESTION? ============ */}
      <AnimatedSection className="py-24 sm:py-32 bg-gradient-to-br from-primary via-primary/95 to-secondary/80 text-primary-foreground relative overflow-hidden">
        {/* Abstract glowing blobs for premium dynamic look */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute w-[500px] h-[500px] bg-accent/25 rounded-full blur-[110px]"
            animate={{ x: [0, 80, 0], y: [0, 60, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            style={{ top: '-15%', left: '-10%' }}
          />
          <motion.div
            className="absolute w-[600px] h-[600px] bg-secondary/35 rounded-full blur-[130px]"
            animate={{ x: [0, -80, 0], y: [0, -60, 0], scale: [1.1, 0.9, 1.1] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            style={{ bottom: '-20%', right: '-10%' }}
          />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left side text and direct contact details */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex p-3 rounded-2xl bg-white/10 border border-white/15 shadow-inner"
              >
                <MessageSquareIcon className="size-6 text-white" />
              </motion.div>

              <div className="space-y-4">
                <span className="text-xs font-extrabold tracking-widest text-accent uppercase bg-white/10 px-4 py-2 rounded-full inline-block">
                  Direct Support
                </span>
                <h2 className="text-4xl sm:text-5xl font-black leading-[1.15] text-white">
                  Still have <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">questions?</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed font-normal max-w-md">
                  We respond directly to every single query within 24 hours. No boilerplate answers, no bots, always real experts.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: ClockIcon, label: '24-hour average response target' },
                  { icon: SparklesIcon, label: 'Free, zero-pressure strategy advice' },
                  { icon: ShieldIcon, label: '100% strict IP & privacy protection' },
                ].map((b, i) => (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-3.5 text-white/90"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/15">
                      <b.icon className="size-4 text-accent" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide">{b.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Direct email / phone grid */}
              <div className="pt-6 border-t border-white/10 space-y-3.5">
                <p className="text-xs uppercase tracking-widest text-white/50 font-bold">Reach us directly</p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm">
                  <div className="flex items-center gap-2.5 text-white/80">
                    <MailIcon className="size-5 text-accent" />
                    <a href="mailto:contact@acestudiosuk.com" className="hover:text-accent font-semibold transition-colors">
                      contact@acestudiosuk.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 text-white/80">
                    <PhoneIcon className="size-5 text-accent" />
                    <span className="font-semibold">07366 488595</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form card */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-8 sm:p-10 border border-white/15 bg-white/10 dark:bg-card/10 backdrop-blur-xl shadow-2xl rounded-3xl relative overflow-hidden">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-20 text-center space-y-4"
                    >
                      <div className="text-7xl">🎉</div>
                      <p className="text-3xl font-extrabold text-white">Message Transmitted!</p>
                      <p className="text-white/70 text-base max-w-xs mx-auto">Our specialists are already notified and will reply via email shortly.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleCustomQuestionSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-white/80 uppercase tracking-widest">Your Name</label>
                          <Input
                            type="text"
                            placeholder="John Doe"
                            value={customQuestion.name}
                            onChange={(e) => setCustomQuestion({ ...customQuestion, name: e.target.value })}
                            className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/30 text-base focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-accent focus:border-accent rounded-xl"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-white/80 uppercase tracking-widest">Email Address</label>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            value={customQuestion.email}
                            onChange={(e) => setCustomQuestion({ ...customQuestion, email: e.target.value })}
                            className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/30 text-base focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-accent focus:border-accent rounded-xl"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-white/80 uppercase tracking-widest">Your Inquiry</label>
                        <Textarea
                          rows={4}
                          placeholder="Tell us what you want to build or what you are curious about..."
                          value={customQuestion.question}
                          onChange={(e) => setCustomQuestion({ ...customQuestion, question: e.target.value })}
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/30 text-base focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-accent focus:border-accent rounded-xl min-h-[120px] resize-none"
                          required
                        />
                      </div>

                      {errorMsg && (
                        <p className="text-sm text-red-300">{errorMsg}</p>
                      )}
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button type="submit" size="lg" disabled={sending} className="w-full bg-white text-secondary hover:bg-white/95 font-bold h-14 text-base rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                          {sending ? 'Sending...' : 'Submit Your Inquiry'}
                          <ArrowRightIcon className="size-4 text-secondary" />
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ============ CTA SECTION ============ */}
      <PageCTA
        heading="Ready to skip the FAQ and just talk?"
        subheading="Book a free 30-minute growth strategy consultation. Get dedicated time with senior agency leads to map out your digital roadmap."
        primaryButton={{ label: 'Book a Free Consultation', href: '/contact' }}
      />

      <Footer />
    </div>
  )
}
