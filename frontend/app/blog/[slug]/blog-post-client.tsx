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
  useMotionValue,
} from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { PageCTA } from '@/components/page-cta'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  ClockIcon,
  ShareIcon,
  BookmarkIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  CheckCircle2Icon,
  RocketIcon,
} from 'lucide-react'
import { getPostBySlug, getRelatedPosts, blogPosts } from '@/lib/blog-data'

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

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = getPostBySlug(slug)

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(heroProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(heroProgress, [0, 0.85], [1, 0])

  const { scrollYProgress: pageProgress } = useScroll()
  const progressScale = useSpring(pageProgress, { stiffness: 100, damping: 30 })

  const [copied, setCopied] = useState(false)

  if (!post) notFound()

  const Icon = post.icon
  const related = getRelatedPosts(post.related)
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length]

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary z-[60] origin-left"
        style={{ scaleX: progressScale }}
      />
      <Navbar />

      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxOrb color="rgba(80,96,208,0.3)" size={500} initialX="-10%" initialY="5%" strength={45} />
          <ParallaxOrb color="rgba(255,107,53,0.25)" size={420} initialX="65%" initialY="20%" strength={55} />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors">
              <ArrowLeftIcon className="size-4" />
              Back to journal
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 mb-5 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Badge variant="secondary">{post.category}</Badge>
            {post.tags.slice(0, 3).map((t) => (
              <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
            ))}
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {post.title}
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {post.excerpt}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-6 pb-8 border-b border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-bold text-white text-sm">
                {post.author.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <p className="font-bold text-primary text-sm">{post.author}</p>
                <p className="text-xs text-muted-foreground">{post.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarIcon className="size-4" />
              {post.date}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ClockIcon className="size-4" />
              {post.readTime}
            </div>

            <div className="ml-auto flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCopy}
                className="p-2 rounded-full bg-white border border-border hover:border-secondary transition-colors"
                title={copied ? 'Copied!' : 'Copy link'}
              >
                {copied ? <CheckCircle2Icon className="size-4 text-accent" /> : <ShareIcon className="size-4 text-primary" />}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: -8 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white border border-border hover:border-secondary transition-colors"
              >
                <BookmarkIcon className="size-4 text-primary" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============ HERO IMAGE ============ */}
      <section className="relative pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[16/9] sm:aspect-[16/8] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image src={post.heroImage} alt={post.title} fill className="object-cover" priority />
            <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-50 mix-blend-multiply`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <motion.div
              className="absolute top-6 left-6 p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            >
              <Icon className="size-6 text-white" />
            </motion.div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs uppercase tracking-widest text-white/80 mb-1">{post.category}</p>
              <p className="font-bold text-2xl sm:text-3xl line-clamp-2">{post.title}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ TLDR ============ */}
      <AnimatedSection className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-secondary/5 via-accent/5 to-secondary/5 border-2 border-secondary/20"
          >
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-2 rounded-xl bg-gradient-to-br from-secondary to-accent"
              >
                <RocketIcon className="size-5 text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold text-primary">TL;DR</h2>
            </div>
            <ul className="space-y-3">
              {post.tldr.map((t, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2Icon className="size-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{t}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ============ ARTICLE BODY ============ */}
      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-foreground leading-relaxed mb-12 first-letter:text-6xl first-letter:font-bold first-letter:text-secondary first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:pt-1"
          >
            {post.intro}
          </motion.p>

          {/* Sections */}
          {post.sections.map((section, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-5 leading-tight">
                {section.heading}
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">{section.body}</p>
              {section.bullets && (
                <ul className="space-y-2 mt-4 ml-1">
                  {section.bullets.map((b, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                      <span className="text-foreground leading-relaxed">{b}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}

          {/* Conclusion pull-quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="my-16 p-8 rounded-3xl bg-primary text-primary-foreground relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-15">
              <motion.div
                className="absolute inset-0"
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 50%, #5060d0 0%, transparent 50%), radial-gradient(circle at 80% 80%, #ff6b35 0%, transparent 50%)',
                  backgroundSize: '200% 200%',
                }}
              />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4 relative">Conclusion</p>
            <p className="text-xl sm:text-2xl font-medium leading-relaxed relative">
              {post.conclusion}
            </p>
          </motion.div>

          {/* Share */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-between py-8 border-y border-border"
          >
            <p className="text-sm font-semibold text-primary">Found this useful? Share it.</p>
            <div className="flex items-center gap-2">
              {[
                { Icon: TwitterIcon, label: 'Twitter' },
                { Icon: LinkedinIcon, label: 'LinkedIn' },
                { Icon: FacebookIcon, label: 'Facebook' },
                { Icon: ShareIcon, label: 'Copy link' },
              ].map(({ Icon: SIcon, label }) => (
                <motion.button
                  key={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={label === 'Copy link' ? handleCopy : undefined}
                  className="p-2.5 rounded-full bg-white border border-border hover:border-secondary hover:text-secondary transition-colors"
                  title={label}
                >
                  <SIcon className="size-4" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Author bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-3xl bg-primary/[0.02] border border-border flex items-start gap-5"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-bold text-white text-lg flex-shrink-0">
              {post.author.split(' ').map((n) => n[0]).join('')}
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Written by</p>
              <p className="font-bold text-primary">{post.author}</p>
              <p className="text-sm text-secondary font-semibold mb-2">{post.authorRole}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A senior practitioner at Ace Studios. Has shipped work across hundreds of brands and channels, and writes about what is actually working, not what is fashionable.
              </p>
            </div>
          </motion.div>
        </div>
      </article>

      {/* ============ RELATED POSTS ============ */}
      {related.length > 0 && (
        <AnimatedSection className="py-20 sm:py-24 bg-primary/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4">Keep reading</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Related articles.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Link href={`/blog/${r.slug}`} className="block h-full">
                    <div className="rounded-3xl overflow-hidden bg-white border-2 border-border hover:border-secondary hover:shadow-2xl transition-all duration-500 h-full">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={r.heroImage}
                          alt={r.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${r.gradient} opacity-55 mix-blend-multiply`} />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline">{r.category}</Badge>
                          <span className="text-xs text-muted-foreground">{r.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                          {r.title}
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
      )}

      {/* ============ NEXT POST ============ */}
      {nextPost && nextPost.slug !== slug && (
        <AnimatedSection className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-center mb-6">
              Next up
            </p>
            <Link href={`/blog/${nextPost.slug}`} className="group block">
              <motion.div
                whileHover={{ y: -8 }}
                className="relative aspect-[16/8] sm:aspect-[16/6] rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow"
              >
                <Image src={nextPost.heroImage} alt={nextPost.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-br ${nextPost.gradient} opacity-65 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-white/80 mb-3">{nextPost.category}</p>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">{nextPost.title}</h3>
                    <motion.div
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      Read next
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
        heading="Want help putting this into practice?"
        subheading="We've helped 500+ brands ship the playbooks we write about. Let's talk about yours."
        primaryButton={{ label: 'Book a Free Consultation', href: '/contact' }}
      />

      <Footer />
    </div>
  )
}
