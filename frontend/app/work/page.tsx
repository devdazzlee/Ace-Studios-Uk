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
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { PageCTA } from '@/components/page-cta'
import { ArrowRightIcon, ArrowUpRightIcon, RocketIcon } from 'lucide-react'
import { works } from '@/lib/work-data'

function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
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

const categories = ['All', 'Shopify · DTC', 'Brand · Web', 'E-com · Amazon', 'Web App · Brand', 'Mobile · iOS & Android', 'Health · Mobile + Web']

export default function WorkPage() {
  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? works : works.filter((w) => w.category === activeCategory)

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
            Case studies · {works.length} featured projects
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary leading-[1.05] tracking-tight max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Selected{' '}
            <span className="relative inline-block">
              <motion.span
                className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                work
              </motion.span>
              <motion.svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <motion.path
                  d="M2 8 Q 100 -2 198 8"
                  stroke="url(#wgrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />
                <defs>
                  <linearGradient id="wgrad">
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
            A curated glimpse into how we turn ambitious ideas into measurable outcomes, brands launched, stores scaled, products shipped.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
          >
            {[
              { v: works.length, s: '+', l: 'Case Studies' },
              { v: 500, s: '+', l: 'Total Clients' },
              { v: 50, s: 'M+', p: '£', l: 'Revenue' },
              { v: 98, s: '%', l: 'Repeat Clients' },
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

      {/* ============ WORKS GRID ============ */}
      <AnimatedSection className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((w, i) => (
                <motion.div
                  key={w.slug}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className={`group ${i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-1' : ''}`}
                >
                  <Link href={`/work/${w.slug}`} className="block">
                    <div className="relative aspect-[16/11] rounded-3xl overflow-hidden mb-5 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                      <Image
                        src={w.heroImage}
                        alt={w.client}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${w.gradient} opacity-50 mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Floating service chips */}
                      <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                        {w.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-sm text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Result metric */}
                      <motion.div
                        className="absolute top-5 right-5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-xs font-bold text-secondary">{w.shortResult}</p>
                      </motion.div>

                      {/* Arrow hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-500 flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: -45 }}
                          whileHover={{ scale: 1, rotate: 0 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="p-5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        >
                          <ArrowUpRightIcon className="size-7 text-white" />
                        </motion.div>
                      </motion.div>

                      {/* Bottom info */}
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <p className="text-xs uppercase tracking-widest text-white/80 mb-1">
                          {w.category} · {w.year}
                        </p>
                        <h3 className="text-2xl sm:text-3xl font-bold">{w.client}</h3>
                      </div>
                    </div>

                    <div className="px-2">
                      <h4 className="text-lg sm:text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                        {w.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{w.summary}</p>
                      <div className="flex items-center text-secondary font-semibold text-sm mt-4">
                        <span>Read case study</span>
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

      {/* ============ APPROACH BAR ============ */}
      <AnimatedSection className="py-24 sm:py-32 bg-primary/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">How we work</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Every project starts the same way.
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you&apos;re launching a £5k brand refresh or a £500k SaaS, we approach work with the same rigor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: 'Listen first', d: 'A 30-min call with the people doing the work, not a salesperson.' },
              { t: 'Scope honestly', d: 'A scoped proposal with three tiers and transparent pricing in 48 hours.' },
              { t: 'Ship fast', d: 'First milestone in 2 weeks, full launch in 4–16 weeks depending on scope.' },
              { t: 'Stay close', d: 'Direct Slack access, weekly demos, and 30–90 days of post-launch support.' },
            ].map((step, i) => (
              <motion.div
                key={step.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative p-6 rounded-3xl bg-white border-2 border-border hover:border-secondary hover:shadow-xl transition-all"
              >
                <div className="text-5xl font-bold text-secondary/10 mb-2 group-hover:text-secondary/30 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <PageCTA
        heading="Your story could be the next case study."
        subheading="Tell us about your business, your goals, your timeline. We'll come back within 24 hours with honest, jargon-free advice."
        primaryButton={{ label: 'Start Your Project', href: '/contact' }}
      />

      <Footer />
    </div>
  )
}
