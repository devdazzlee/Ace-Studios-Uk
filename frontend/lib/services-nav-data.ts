export interface ServiceLinkInfo {
  slug: string
  label: string
  href: string
}

export const allServices: ServiceLinkInfo[] = [
  { slug: 'shopify', label: 'Shopify Development', href: '/services/shopify/' },
  { slug: 'website-development', label: 'Website Development', href: '/services/website-development/' },
  { slug: 'design', label: 'Brand Design', href: '/services/design/' },
  { slug: 'merchandising', label: 'Merchandising', href: '/services/merchandising/' },
  { slug: 'erp-pos-systems', label: 'ERP & POS Systems', href: '/services/erp-pos-systems/' },
  { slug: 'ecommerce', label: 'E-Commerce Solutions', href: '/services/ecommerce/' },
  { slug: 'online-business-setup', label: 'Online Business Setup', href: '/services/online-business-setup/' },
  { slug: 'digital-marketing', label: 'Digital Marketing', href: '/services/digital-marketing/' },
  { slug: 'mobile-app-development', label: 'Mobile App Development', href: '/services/mobile-app-development/' },
  { slug: 'custom-software-development', label: 'Custom Software Development', href: '/services/custom-software-development/' },
  { slug: 'tiktok-shop', label: 'TikTok Shop Management', href: '/services/tiktok-shop/' },
  { slug: 'amazon-fba-fbm', label: 'Amazon FBA & FBM', href: '/services/amazon-fba-fbm/' },
]

export const relatedServiceSlugs: Record<string, string[]> = {
  shopify: ['ecommerce', 'digital-marketing', 'design'],
  'website-development': ['design', 'digital-marketing', 'custom-software-development'],
  design: ['website-development', 'shopify', 'digital-marketing'],
  merchandising: ['ecommerce', 'erp-pos-systems', 'digital-marketing'],
  'erp-pos-systems': ['ecommerce', 'merchandising', 'custom-software-development'],
  ecommerce: ['shopify', 'digital-marketing', 'amazon-fba-fbm'],
  'online-business-setup': ['ecommerce', 'erp-pos-systems', 'digital-marketing'],
  'digital-marketing': ['ecommerce', 'amazon-fba-fbm', 'tiktok-shop'],
  'mobile-app-development': ['custom-software-development', 'design', 'website-development'],
  'custom-software-development': ['mobile-app-development', 'erp-pos-systems', 'website-development'],
  'tiktok-shop': ['digital-marketing', 'ecommerce', 'amazon-fba-fbm'],
  'amazon-fba-fbm': ['ecommerce', 'digital-marketing', 'merchandising'],
}

export function getRelatedServices(slug: string): ServiceLinkInfo[] {
  const slugs = relatedServiceSlugs[slug] ?? []
  return slugs
    .map((s) => allServices.find((svc) => svc.slug === s))
    .filter((svc): svc is ServiceLinkInfo => Boolean(svc))
}
