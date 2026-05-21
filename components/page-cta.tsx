'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon, RocketIcon, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animated-section'

const DEFAULT_FROM = 'rgb(80, 96, 208)'
const DEFAULT_TO = 'rgb(255, 107, 53)'

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: 2 + (i % 4),
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  duration: 5 + (i % 4),
  delay: (i % 5) * 0.5,
}))

export interface PageCTAProps {
  heading: React.ReactNode
  subheading: string
  primaryButton: { label: string; href: string }
  secondaryButton?: { label: string; href: string }
  disclaimer?: string
  gradientFrom?: string
  gradientTo?: string
  icon?: LucideIcon
}

export function PageCTA({
  heading,
  subheading,
  primaryButton,
  secondaryButton,
  disclaimer,
  gradientFrom = DEFAULT_FROM,
  gradientTo = DEFAULT_TO,
  icon: Icon = RocketIcon,
}: PageCTAProps) {
  return (
    <AnimatedSection className="py-10 sm:py-12 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
            `linear-gradient(225deg, ${gradientTo} 0%, ${gradientFrom} 100%)`,
            `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/20"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
            }}
            animate={{ y: [0, -80, 0], opacity: [0, 0.8, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 mb-3"
        >
          <motion.div
            animate={{ rotate: [0, 12, -12, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <Icon className="size-6 text-white" />
          </motion.div>
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {heading}
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base text-white/90 mb-5 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          {subheading}
        </motion.p>

        <motion.div
          className={`flex ${secondaryButton ? 'flex-col sm:flex-row' : ''} gap-3 justify-center`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link href={primaryButton.href}>
              <Button className="bg-white text-secondary hover:bg-white/90 font-semibold shadow-lg h-10 px-5">
                {primaryButton.label}
                <ArrowRightIcon className="ml-2 size-4" />
              </Button>
            </Link>
          </motion.div>
          {secondaryButton && (
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link href={secondaryButton.href}>
                <Button
                  variant="outline"
                  className="h-10 px-5 bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"
                >
                  {secondaryButton.label}
                </Button>
              </Link>
            </motion.div>
          )}
        </motion.div>

        {disclaimer && (
          <motion.p
            className="text-xs text-white/65 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            {disclaimer}
          </motion.p>
        )}
      </div>
    </AnimatedSection>
  )
}
