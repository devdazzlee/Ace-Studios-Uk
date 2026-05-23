'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown, Menu, X } from 'lucide-react'

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const serviceItems = [
    { label: 'Design Services', href: '/services/design' },
    { label: 'Website Development', href: '/services/website-development' },
    { label: 'Mobile App Development', href: '/services/mobile-app-development' },
    { label: 'Custom Software Development', href: '/services/custom-software-development' },
    { label: 'ERP & POS Systems', href: '/services/erp-pos-systems' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'Merchandising', href: '/services/merchandising' },
    { label: 'Amazon FBA & FBM', href: '/services/amazon-fba-fbm' },
    { label: 'TikTok Shop', href: '/services/tiktok-shop' },
    { label: 'Shopify Development', href: '/services/shopify' },
    { label: 'E-Commerce Services', href: '/services/ecommerce' },
    { label: 'Online Business Setup', href: '/services/online-business-setup' },
  ]

  const navLinkClass =
    'text-sm text-primary-foreground/90 hover:text-accent transition-colors font-medium'

  return (
    <nav className="sticky top-0 z-50 bg-primary border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center py-2">
            <Image
              src="/Logo.svg"
              alt="Ace Studios"
              width={280}
              height={170}
              priority
              className="h-14 w-auto sm:h-16"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={navLinkClass}>
              Home
            </Link>
            <Link href="/about" className={navLinkClass}>
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`flex items-center gap-1 ${navLinkClass}`}>
                Services
                <motion.div
                  animate={{ rotate: openDropdown === 'services' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center"
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white border border-border rounded-lg shadow-xl py-2 z-50"
                  >
                    {serviceItems.map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 4 }}
                        className="overflow-hidden"
                      >
                        <Link
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary/10 hover:text-secondary transition-colors"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/blog" className={navLinkClass}>
              Blog
            </Link>
            <Link href="/faq" className={navLinkClass}>
              FAQ
            </Link>
            <Link href="/contact" className={navLinkClass}>
              Contact
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden sm:block">
            <Link href="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Started
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-foreground hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-2">
                <Link href="/" className="block px-4 py-2 text-primary-foreground hover:bg-white/10 rounded-lg transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block px-4 py-2 text-primary-foreground hover:bg-white/10 rounded-lg transition-colors">
                  About
                </Link>

                {/* Mobile Services Dropdown */}
                <div className="px-4 py-2">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                    className="w-full text-left flex items-center justify-between text-primary-foreground hover:text-accent transition-colors font-medium"
                  >
                    Services
                    <motion.div
                      animate={{ rotate: openDropdown === 'services' ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openDropdown === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 ml-4 space-y-1 border-l-2 border-accent/40"
                      >
                        {serviceItems.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/blog" className="block px-4 py-2 text-primary-foreground hover:bg-white/10 rounded-lg transition-colors">
                  Blog
                </Link>
                <Link href="/faq" className="block px-4 py-2 text-primary-foreground hover:bg-white/10 rounded-lg transition-colors">
                  FAQ
                </Link>
                <Link href="/contact" className="block px-4 py-2 text-primary-foreground hover:bg-white/10 rounded-lg transition-colors">
                  Contact
                </Link>

                {/* Mobile CTA Button */}
                <Link href="/contact" className="block mt-4">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
