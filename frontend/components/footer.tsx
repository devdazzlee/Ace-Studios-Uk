'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  SparklesIcon,
  CheckCircle2Icon,
} from 'lucide-react'
import axios from 'axios'
import { API } from '@/config/config'

const CONTACT_EMAIL = 'contact@acestudiosuk.com'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Footer() {
  const [email, setEmail] = React.useState('')
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    try {
      await axios.post(API.send, { type: 'subscribe', email, source: 'footer' })
    } catch {
      // silent; show optimistic confirmation either way
    }
    setIsSubmitted(true)
    setEmail('')
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  const services = [
    { name: 'Brand Design', href: '/services/design' },
    { name: 'Website Development', href: '/services/website-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app-development' },
    { name: 'E-Commerce Solutions', href: '/services/ecommerce' },
    { name: 'Amazon FBA', href: '/services/amazon-fba-fbm' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ]

  const legal = [
    { name: 'Privacy Policy', href: '/contact' },
    { name: 'Terms of Service', href: '/contact' },
    { name: 'Cookie Policy', href: '/contact' },
    { name: 'Sitemap', href: '/services' },
  ]

  return (
    <footer className="relative bg-[#0a0c10] text-white overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[420px] h-[420px] rounded-full blur-[100px] bg-accent/15"
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '0%', left: '-8%' }}
        />
        <motion.div
          className="absolute w-[380px] h-[380px] rounded-full blur-[100px] bg-secondary/20"
          animate={{ x: [0, -50, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '10%', right: '-6%' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Stay Updated */}
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.4 }}
          >
            {/* Animated border gradient */}
            <motion.div
              className="absolute -inset-[1px] rounded-2xl opacity-80"
              style={{
                background:
                  'linear-gradient(90deg, rgba(80,96,208,0.6), rgba(255,107,53,0.6), rgba(80,96,208,0.6))',
                backgroundSize: '200% 100%',
              }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />

            <div className="relative rounded-2xl bg-[#141820]/90 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-10">
              <motion.div
                className="absolute top-4 right-4 text-white/10"
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <SparklesIcon className="size-12 sm:size-16" />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center relative">
                <div>
                  <motion.h3
                    className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    Stay Updated
                  </motion.h3>
                  <motion.p
                    className="text-white/65 text-sm sm:text-base leading-relaxed max-w-md"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Get the latest tips on growing your online business, direct to your inbox.
                  </motion.p>
                </div>

                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <motion.div
                    className="flex-1 relative"
                    animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      className="h-12 bg-white/5 border-white/15 text-white placeholder:text-white/40 focus:border-accent/60 focus:ring-accent/20 transition-all"
                      required
                      disabled={isSubmitted}
                    />
                    {isFocused && (
                      <motion.div
                        layoutId="newsletter-glow"
                        className="absolute inset-0 -z-10 rounded-md blur-md bg-accent/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitted}
                      className="h-12 px-6 bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg shadow-accent/25 relative overflow-hidden group"
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                      />
                      <span className="relative flex items-center gap-2">
                        {isSubmitted ? (
                          <>
                            <CheckCircle2Icon className="size-4" />
                            Subscribed!
                          </>
                        ) : (
                          <>
                            Subscribe
                            <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
                          </>
                        )}
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </div>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -8, height: 0 }}
                    className="text-accent text-sm mt-4 flex items-center gap-2"
                  >
                    <CheckCircle2Icon className="size-4" />
                    You&apos;re on the list, welcome to the Ace community!
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        <Separator className="bg-white/10 max-w-6xl mx-auto" />

        {/* Main footer */}
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <Link href="/" className="inline-block mb-5 group">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Image
                    src="/Logo.svg"
                    alt="Ace Studios"
                    width={280}
                    height={170}
                    className="h-14 w-auto sm:h-16 brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              </Link>
              <p className="text-white/55 text-sm mb-6 leading-relaxed">
                Helping entrepreneurs and brands build profitable online businesses through design,
                development, and digital growth.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: FacebookIcon, label: 'Facebook' },
                  { Icon: TwitterIcon, label: 'Twitter' },
                  { Icon: LinkedinIcon, label: 'LinkedIn' },
                  { Icon: InstagramIcon, label: 'Instagram' },
                ].map(({ Icon, label }) => (
                  <motion.a
                    key={label}
                    href={`mailto:${CONTACT_EMAIL}`}
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-accent hover:border-accent/40 hover:bg-accent/10 transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-2.5">
                {services.map((service, i) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={service.href}
                      className="text-white/55 hover:text-white text-sm inline-flex items-center gap-1 group transition-colors"
                    >
                      <span className="w-0 h-px bg-accent group-hover:w-3 transition-all duration-300" />
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5">
                {company.map((item) => (
                  <motion.li key={item.name} whileHover={{ x: 4 }}>
                    <Link
                      href={item.href}
                      className="text-white/55 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2.5">
                {legal.map((item) => (
                  <motion.li key={item.name} whileHover={{ x: 4 }}>
                    <Link
                      href={item.href}
                      className="text-white/55 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Get in Touch</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 group">
                  <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} className="shrink-0">
                    <MailIcon size={18} className="text-accent mt-0.5" />
                  </motion.div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-white/55 hover:text-accent transition-colors text-sm break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex gap-3">
                  <PhoneIcon size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:+447366488595"
                    className="text-white/55 hover:text-white transition-colors text-sm"
                  >
                    07366 488595
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPinIcon size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-white/55 text-sm leading-relaxed">
                    Chancery Place, 50 Brown St,
                    <br />
                    Manchester, United Kingdom, M2 2JG
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          <Separator className="bg-white/10 mb-6" />

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/45"
          >
            <p>© {new Date().getFullYear()} Ace Studios. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Designed & built with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
                className="text-accent inline-block"
              >
                ♥
              </motion.span>
              by Ace Studios
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
