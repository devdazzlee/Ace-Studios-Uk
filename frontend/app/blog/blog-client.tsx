'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
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
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { PageCTA } from '@/components/page-cta'
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  SearchIcon,
  CalendarIcon,
  ClockIcon,
  MailIcon,
  SparklesIcon,
  TrendingUpIcon,
  BookOpenIcon,
} from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'
import axios from 'axios'
import { API } from '@/config/config'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const id = setInterval(() => {
      start += value / 100
      if (start >= value) { setCount(value); clearInterval(id) } else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(id)
  }, [inView, value])
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
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

const categories = ['All', 'E-Commerce', 'Shopify', 'TikTok Shop', 'Brand Design', 'Web Development', 'Digital Marketing']

export default function BlogPage() {
  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [subscribeEmail, setSubscribeEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!subscribeEmail) return
    try {
      await axios.post(API.send, { type: 'subscribe', email: subscribeEmail, source: 'blog' })
    } catch {}
    setSubscribed(true)
    setSubscribeEmail('')
    setTimeout(() => setSubscribed(false), 4000)
  }

  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  const filtered = rest.filter((p) => {
    const catOk = activeCategory === 'All' || p.category === activeCategory
    const q = query.trim().toLowerCase()
    const qOk =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    return catOk && qOk
  })

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary z-[60] origin-left"
        style={{ scaleX: progressScale }}
      />
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxOrb color="rgba(80,96,208,0.3)" size={500} initialX="-10%" initialY="5%" strength={45} />
          <ParallaxOrb color="rgba(255,107,53,0.25)" size={420} initialX="65%" initialY="15%" strength={55} />
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
            The Ace Studios Journal · Updated weekly
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary leading-[1.05] tracking-tight max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Field notes from{' '}
            <span className="relative inline-block">
              <motion.span
                className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                the workshop
              </motion.span>
              <motion.svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 400 12" fill="none">
                <motion.path
                  d="M2 8 Q 200 -2 398 8"
                  stroke="url(#bgrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />
                <defs>
                  <linearGradient id="bgrad">
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
            Tactical playbooks, deep dives, and lessons from the 1,000+ shipped projects behind Ace Studios.
            Practical, honest, and built for builders.
          </motion.p>

          {/* Search */}
          <motion.div
            className="max-w-xl mx-auto mt-10 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-muted-foreground pointer-events-none" />
            <Input
              type="text"
              placeholder="Search articles, tags, or topics..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 h-14 rounded-full bg-white border-2 border-border focus-visible:border-secondary text-base shadow-sm"
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } } }}
          >
            {[
              { v: blogPosts.length, s: '+', l: 'Articles' },
              { v: 6, s: '', l: 'Categories' },
              { v: 100, s: 'k+', l: 'Monthly readers' },
              { v: 8, s: '+', l: 'Years of insights' },
            ].map((s) => (
              <motion.div
                key={s.l}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-border"
              >
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter value={s.v} suffix={s.s} />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ FEATURED ============ */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-6 flex items-center gap-2"
          >
            <SparklesIcon className="size-4" />
            Featured article
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <Link href={`/blog/${featured.slug}`} className="block">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-3xl border-2 border-border hover:border-secondary hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden">
                  <Image
                    src={featured.heroImage}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} opacity-55 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <motion.div
                    className="absolute top-6 left-6 p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  >
                    <featured.icon className="size-6 text-white" />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-gradient-to-r from-secondary to-accent text-white text-xs font-bold shadow-lg"
                  >
                    ★ Featured
                  </motion.div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <Badge variant="secondary">{featured.category}</Badge>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <ClockIcon className="size-3" /> {featured.readTime}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-5 leading-tight group-hover:text-secondary transition-colors">
                    {featured.title}
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {featured.excerpt}
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-bold text-white text-xs">
                        {featured.author.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-primary text-sm">{featured.author}</p>
                        <p className="text-xs text-muted-foreground">{featured.date}</p>
                      </div>
                    </div>

                    <motion.div
                      className="flex items-center gap-2 text-secondary font-semibold"
                      whileHover={{ x: 4 }}
                    >
                      Read article
                      <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ArrowRightIcon className="size-4" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Link>
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

      {/* ============ POSTS GRID ============ */}
      <AnimatedSection className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <BookOpenIcon className="size-12 text-muted-foreground/40 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try a different search or category.</p>
            </motion.div>
          ) : (
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((post, i) => (
                  <motion.div
                    key={post.slug}
                    layout
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                      <article className="h-full rounded-3xl overflow-hidden bg-white border-2 border-border hover:border-secondary hover:shadow-2xl transition-all duration-500 flex flex-col">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={post.heroImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-55 mix-blend-multiply`} />

                          {/* Category badge */}
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-white/95 text-primary backdrop-blur-sm border-0">
                              {post.category}
                            </Badge>
                          </div>

                          {/* Icon */}
                          <motion.div
                            className="absolute top-4 right-4 p-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30"
                            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          >
                            <post.icon className="size-4 text-white" />
                          </motion.div>

                          {/* Hover arrow */}
                          <motion.div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center">
                            <motion.div
                              initial={{ scale: 0, rotate: -45 }}
                              whileHover={{ scale: 1, rotate: 0 }}
                              animate={{ scale: 1, rotate: 0 }}
                              className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            >
                              <ArrowUpRightIcon className="size-5 text-white" />
                            </motion.div>
                          </motion.div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-1">
                              <CalendarIcon className="size-3" /> {post.date}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <ClockIcon className="size-3" /> {post.readTime}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                            {post.title}
                          </h3>

                          <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-bold text-white text-[10px]">
                                {post.author.split(' ').map((n) => n[0]).join('')}
                              </div>
                              <p className="text-xs font-semibold text-primary">{post.author}</p>
                            </div>

                            <div className="flex items-center text-secondary font-semibold text-sm">
                              Read
                              <ArrowRightIcon className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </AnimatedSection>

      {/* ============ NEWSLETTER ============ */}
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-secondary to-accent shadow-2xl mb-6"
          >
            <motion.div animate={{ rotate: [0, 12, -12, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <MailIcon className="size-7 text-white" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-4 leading-tight"
          >
            One playbook in your inbox, every Tuesday.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
          >
            No fluff. No sponsored posts. Just one actionable playbook per week from our team, built for founders, operators, and growth folks.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              required
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              placeholder="your@email.com"
              className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:border-white"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button type="submit" size="lg" className="bg-white text-secondary hover:bg-white/90 h-12 w-full sm:w-auto whitespace-nowrap">
                {subscribed ? 'Subscribed!' : 'Subscribe'}
                <ArrowRightIcon className="ml-2 size-4" />
              </Button>
            </motion.div>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xs text-white/50 mt-5"
          >
            12,000+ subscribers · Unsubscribe anytime
          </motion.p>
        </div>
      </AnimatedSection>

      <PageCTA
        heading="Done reading? Now let's build."
        subheading="Insights are great. Execution is what compounds. Let's talk about turning ideas into shipped projects."
        primaryButton={{ label: 'Book a Free Consultation', href: '/contact' }}
        icon={TrendingUpIcon}
      />

      <Footer />
    </div>
  )
}
