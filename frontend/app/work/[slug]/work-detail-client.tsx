'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
} from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { PageCTA } from '@/components/page-cta'
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CheckCircle2Icon,
  CalendarIcon,
  BuildingIcon,
  LayersIcon,
  QuoteIcon,
  StarIcon,
  RocketIcon,
} from 'lucide-react'
import { works, getWorkBySlug } from '@/lib/work-data'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const id = setInterval(() => {
      start += value / 80
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

function extractNumeric(metric: string): { num: number; suffix: string } {
  const match = metric.match(/^([+\-$#]*)?([\d,.]+)(.*)$/)
  if (!match) return { num: 0, suffix: metric }
  const prefix = match[1] || ''
  const numStr = match[2].replace(/,/g, '')
  const suffix = match[3] || ''
  return { num: parseFloat(numStr) || 0, suffix: prefix + suffix }
}

export default function WorkDetailClient({ slug }: { slug: string }) {
  const work = getWorkBySlug(slug)

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(heroProgress, [0, 1], [0, 250])
  const heroOpacity = useTransform(heroProgress, [0, 0.85], [1, 0])

  const { scrollYProgress: pageProgress } = useScroll()
  const progressScale = useSpring(pageProgress, { stiffness: 100, damping: 30 })

  if (!work) {
    notFound()
  }

  const nextWork = works.find((w) => w.slug === work.nextSlug)
  const Icon = work.icon

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary z-[60] origin-left"
        style={{ scaleX: progressScale }}
      />
      <Navbar />

      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxOrb color="rgba(80,96,208,0.3)" size={500} initialX="-10%" initialY="5%" strength={45} />
          <ParallaxOrb color="rgba(255,107,53,0.25)" size={420} initialX="65%" initialY="20%" strength={55} />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link href="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors">
              <ArrowLeftIcon className="size-4" />
              Back to all work
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-2"
              >
                {work.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
              </motion.div>

              <motion.p
                className="text-sm uppercase tracking-[0.3em] text-secondary font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {work.category} · {work.year}
              </motion.p>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.05] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                {work.client}
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl text-primary/80 font-medium leading-snug"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                {work.title}
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {work.summary}
              </motion.p>

              {/* Meta strip */}
              <motion.div
                className="grid grid-cols-3 gap-4 pt-4 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    <BuildingIcon className="inline size-3 mr-1" />
                    Industry
                  </p>
                  <p className="text-sm font-semibold text-primary">{work.industry}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    <CalendarIcon className="inline size-3 mr-1" />
                    Year
                  </p>
                  <p className="text-sm font-semibold text-primary">{work.year}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    <LayersIcon className="inline size-3 mr-1" />
                    Services
                  </p>
                  <p className="text-sm font-semibold text-primary">{work.services.length} delivered</p>
                </div>
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
                <Image src={work.heroImage} alt={work.client} fill className="object-cover" priority />
                <div className={`absolute inset-0 bg-gradient-to-tr ${work.gradient} opacity-50 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating icon */}
                <motion.div
                  className="absolute top-6 left-6 p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                >
                  <Icon className="size-6 text-white" />
                </motion.div>

                {/* Bottom result chip */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Headline result</p>
                  <p className="text-xl font-bold text-secondary">{work.shortResult}</p>
                </motion.div>
              </motion.div>

              {/* Floating stat */}
              <motion.div
                className="absolute -left-4 top-12 bg-white rounded-2xl p-4 shadow-2xl border border-border"
                initial={{ opacity: 0, x: -40, rotate: -8 }}
                animate={{ opacity: 1, x: 0, rotate: -5 }}
                transition={{ delay: 1, type: 'spring' }}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="size-3 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xs font-bold text-primary">5.0 client rating</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ============ RESULTS STRIP ============ */}
      <section className="py-12 border-y border-border bg-primary/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {work.results.map((r, i) => {
              const { num, suffix } = extractNumeric(r.metric)
              const isNumeric = num > 0 && /^[+\-£#]*[\d,.]+/.test(r.metric)
              return (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="text-center p-6 rounded-2xl bg-white border border-border hover:border-secondary hover:shadow-lg transition-all"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                    {isNumeric ? (
                      <>
                        {r.metric.startsWith('+') && '+'}
                        {r.metric.startsWith('£') && '£'}
                        {r.metric.startsWith('-') && '-'}
                        {r.metric.startsWith('#') && '#'}
                        <AnimatedCounter value={num} suffix={suffix.replace(/^[#£+\-]/, '')} />
                      </>
                    ) : (
                      r.metric
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{r.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ CHALLENGE / SOLUTION / OUTCOME ============ */}
      <AnimatedSection className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {[
            { label: 'The Challenge', body: work.challenge, color: 'from-rose-500 to-pink-600' },
            { label: 'Our Approach', body: work.solution, color: 'from-secondary to-blue-500' },
            { label: 'The Outcome', body: work.outcome, color: 'from-emerald-500 to-teal-600' },
          ].map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid md:grid-cols-12 gap-8 items-start"
            >
              <div className="md:col-span-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${block.color} text-white text-sm font-bold shadow-lg`}
                >
                  {String(i + 1).padStart(2, '0')}, {block.label}
                </motion.div>
              </div>
              <div className="md:col-span-8">
                <p className="text-xl sm:text-2xl text-foreground leading-relaxed">{block.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ============ SERVICES DELIVERED ============ */}
      <AnimatedSection className="py-20 sm:py-24 bg-primary/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">What we delivered</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
              Services delivered for {work.client}.
            </h2>
            <p className="text-muted-foreground">
              An end-to-end engagement, one team, one Slack channel, one accountability line.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {work.services.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-white border-2 border-border hover:border-secondary hover:shadow-lg transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex p-2 rounded-lg bg-secondary/10 mb-3"
                >
                  <CheckCircle2Icon className="size-5 text-secondary" />
                </motion.div>
                <p className="font-bold text-primary">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ============ GALLERY ============ */}
      <AnimatedSection className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">Gallery</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Selected moments from the project.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {work.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group ${
                  i === 1 ? 'md:mt-12' : ''
                }`}
              >
                <Image src={img} alt={`${work.client} gallery ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-br ${work.gradient} opacity-30 mix-blend-multiply`} />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ============ TESTIMONIAL ============ */}
      {work.testimonial && (
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
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-secondary to-accent shadow-2xl mb-8"
            >
              <QuoteIcon className="size-7 text-white" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-medium leading-relaxed mb-8"
            >
              &ldquo;{work.testimonial.quote}&rdquo;
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-bold text-white text-lg">
                {work.testimonial.author.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className="text-left">
                <p className="font-bold">{work.testimonial.author}</p>
                <p className="text-sm text-white/70">{work.testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      )}

      {/* ============ NEXT PROJECT ============ */}
      {nextWork && (
        <AnimatedSection className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-center mb-6">
              Next project
            </p>
            <Link href={`/work/${nextWork.slug}`} className="group block">
              <motion.div
                whileHover={{ y: -8 }}
                className="relative aspect-[16/8] sm:aspect-[16/6] rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow"
              >
                <Image src={nextWork.heroImage} alt={nextWork.client} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-br ${nextWork.gradient} opacity-60 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-white/80 mb-3">{nextWork.category}</p>
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{nextWork.client}</h3>
                    <p className="text-lg text-white/90 max-w-xl mx-auto mb-6">{nextWork.shortResult}</p>
                    <motion.div
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      View case study
                      <ArrowUpRightIcon className="size-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </AnimatedSection>
      )}

      <PageCTA
        heading="Like what you see?"
        subheading="Let's talk about your project. We'll respond within 24 hours with honest, jargon-free advice."
        primaryButton={{ label: 'Start Your Project', href: '/contact' }}
        secondaryButton={{ label: 'See All Work', href: '/work' }}
      />

      <Footer />
    </div>
  )
}
