import type { LucideIcon } from 'lucide-react'
import {
  PackageIcon,
  ShoppingCartIcon,
  MegaphoneIcon,
  PaletteIcon,
  GaugeIcon,
  TrendingUpIcon,
} from 'lucide-react'

export interface BlogSection {
  heading: string
  body: string
  bullets?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  authorRole: string
  date: string
  readTime: string
  heroImage: string
  gradient: string
  icon: LucideIcon
  tags: string[]
  tldr: string[]
  intro: string
  sections: BlogSection[]
  conclusion: string
  related: string[] // slugs
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'amazon-fba-strategies',
    title: '10 Essential Strategies for Amazon FBA Success in 2025',
    excerpt:
      'Learn the proven strategies successful sellers use to scale their Amazon business from £10k to £100k+ in annual revenue.',
    category: 'E-Commerce',
    author: 'John Smith',
    authorRole: 'Head of Amazon Strategy',
    date: 'May 15, 2025',
    readTime: '8 min read',
    heroImage: '/amazon-fba-service.jpg',
    gradient: 'from-orange-400 via-amber-500 to-yellow-500',
    icon: PackageIcon,
    tags: ['Amazon FBA', 'PPC', 'Listings', 'Scale'],
    tldr: [
      'Listing optimization compounds, every percentage point of CTR doubles your funnel.',
      'PPC is no longer optional. It is the rails on which organic ranking rides.',
      'A+ Content, Vine, and Brand Story are no-brainers, most sellers skip them.',
      'Inventory health drives the Buy Box, the algorithm, and your sleep.',
    ],
    intro:
      "Amazon in 2025 looks nothing like Amazon in 2018. PPC costs are up, organic visibility is harder to win, and the bar for great listings has risen across every category. The sellers winning today are the ones treating Amazon less like a marketplace and more like a full retail channel, owning every touchpoint, every keyword, every photo, every shipment. Here are the ten strategies our team uses to scale brands from £10k/month to £1M+/month on Amazon.",
    sections: [
      {
        heading: '1. Lead with listing optimization, not ads',
        body: "Every pound of ad spend is wasted if your listing converts at 4% instead of 14%. Start with a brutal audit of your title, bullets, A+ Content, and image stack. Test new hero images. Rewrite your bullets in benefits-first language. Add a comparison chart in A+ Content. Most brands leave 2–3x conversion lift on the table here before they even open ads.",
      },
      {
        heading: '2. Treat keywords like an inventory of demand',
        body: 'Run a quarterly keyword refresh. Pull search-frequency rank data from Brand Analytics, identify new climbing terms in your category, and re-architect your backend search terms and copy. Then update your PPC campaigns to bid on those new terms while CPCs are still low.',
      },
      {
        heading: '3. Master the four-tier PPC structure',
        body: 'Run four campaign types in parallel: exact-match search, broad-match research, ASIN-targeting, and Sponsored Brands. Each has a job. Exact-match defends share. Broad-match discovers terms. ASIN-targeting steals competitor traffic. Sponsored Brands wins page-one real estate.',
      },
      {
        heading: '4. Enroll in Vine on day one',
        body: 'The Amazon Vine program is the single highest-leverage move for new listings. 30 honest reviews from verified reviewers cost a few units and a small fee, and they compound social proof, conversion, and search ranking for years.',
      },
      {
        heading: '5. Photography is the new copywriting',
        body: 'Shoppers no longer read bullets, they scroll images. Invest in 7–9 image slots: hero, infographic, lifestyle, comparison, in-use, before/after, scale shot, and packaging. Add a 30-second video. The brands winning in 2025 all over-invest in PDP photography.',
      },
      {
        heading: '6. Use Brand Story and Brand Store as funnels',
        body: 'Brand Story (the carousel above A+ Content) is wasted real estate for 80% of sellers. Use it to cross-sell your line, send shoppers to your Brand Store, or highlight your hero product. Brand Stores get their own URL, use them in PPC and external ads.',
      },
      {
        heading: '7. Defend the Buy Box with inventory discipline',
        body: 'Out-of-stock kills ranking faster than anything else on Amazon. Build a forecasting model that accounts for lead time, seasonality, and PPC spend velocity. We aim for 30 days of safety stock minimum, 60 days for hero SKUs.',
      },
      {
        heading: '8. Run a quarterly counterfeit sweep',
        body: 'Brand Registry alone is not enough. Run test buys, file IP complaints, and use the Transparency program for high-value items. Every counterfeit listing you remove is margin recovered and Buy Box defended.',
      },
      {
        heading: '9. Expand to Walmart and Target+ early',
        body: 'Sellers waiting until they hit £5M to expand multi-channel are leaving money on the table. Walmart Marketplace and Target+ have lower CPC, less competition, and identical fulfillment logistics. Launch with your top 5 SKUs.',
      },
      {
        heading: '10. Build a Day-30 review and Day-60 retention flow',
        body: "Use Amazon's Request a Review automation on day 6 (post-delivery), and Manage Your Customer Engagement (MYCE) on day 30 to email past buyers with new products. Day-60 retention is the cheapest revenue you will ever earn.",
      },
    ],
    conclusion:
      'Amazon rewards operational excellence. The brands compounding fastest in 2025 are not the ones with the best products, they are the ones with the best systems for listings, ads, inventory, and reviews. Pick three of these ten strategies you are weakest on, ship them in the next 60 days, and watch the flywheel start spinning.',
    related: ['shopify-store-guide', 'digital-marketing-trends-2025', 'tiktok-shop-future'],
  },
  {
    slug: 'shopify-store-guide',
    title: 'Building Your First Shopify Store: The Complete 2025 Guide',
    excerpt:
      'A step-by-step playbook to launching your first Shopify store, from product selection to first sale, in under 21 days.',
    category: 'Shopify',
    author: 'Sarah Johnson',
    authorRole: 'Shopify Lead Designer',
    date: 'May 12, 2025',
    readTime: '12 min read',
    heroImage: '/ecommerce-service.jpg',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    icon: ShoppingCartIcon,
    tags: ['Shopify', 'E-commerce', 'Launch', 'Beginners'],
    tldr: [
      'Pick a niche before you pick a product. Niche solves marketing, marketing solves sales.',
      'Spend on photography, not on theme. A custom-shot £0 free theme outperforms a £400 theme with stock photos.',
      'Klaviyo from day one. Email is 30%+ of mature store revenue, start the flywheel early.',
      'Launch in 21 days. Done > perfect. Iterate post-launch with real data.',
    ],
    intro:
      'Most first-time Shopify founders take 6 months to launch, spend £5,000 on apps and themes they never use, and stall before their first sale. It does not have to be that way. After helping launch 400+ Shopify stores, we built a 21-day playbook that gets you to live, taking real orders, with the right foundation under you for scale.',
    sections: [
      {
        heading: 'Days 1–3: Pick a niche, not a product',
        body: 'The mistake most founders make is starting with a product they love. Start instead with a niche audience you understand, pottery enthusiasts, ultra-runners, vegan parents. Products are interchangeable. Audience is not. Once you have a niche, your marketing, copy, and design write themselves.',
      },
      {
        heading: 'Days 4–7: Source product and shoot photography',
        body: 'Use Alibaba, Faire, or Tundra to source. Order samples before committing. Then, and this is the part everyone skips, shoot real photography. iPhone in a window. Lifestyle on a real person. Stock photos make your brand feel like every other brand. Real shots are your unfair advantage.',
        bullets: [
          'Hero shot on white background (PDP photo 1)',
          'Lifestyle shot in context of use',
          '3 detail shots, texture, scale, packaging',
          'One 15-second product video',
        ],
      },
      {
        heading: 'Days 8–10: Set up Shopify and pick a theme',
        body: 'Use Dawn (free) or Impulse (paid). Both are fast, accessible, and conversion-tested. Avoid theme marketplaces, most paid themes are slow and bloated. The biggest theme upgrade you can make is custom photography, not a new template.',
      },
      {
        heading: 'Days 11–13: Write copy that sounds human',
        body: 'Every product page needs: a benefit-first headline, a story of who this is for, 3 differentiators, a guarantee, and reviews social proof. Write like you are texting a friend, not writing a press release.',
      },
      {
        heading: 'Days 14–15: Set up Klaviyo flows',
        body: 'Even with zero customers, set up these flows: Welcome Series (5 emails), Abandoned Cart (3 emails), Browse Abandoned (2 emails), Post-Purchase (3 emails). Klaviyo will collect emails from day one and start nurturing as soon as anyone signs up.',
      },
      {
        heading: 'Days 16–18: Configure shipping, taxes, and payments',
        body: 'Set up Shopify Payments, Shop Pay, PayPal, and Apple Pay. Use Shopify Shipping for label discounts. Set up tax automation through Shopify Tax (US) or Avalara (international). Test a real checkout end to end before launch.',
      },
      {
        heading: 'Days 19–20: Stress-test on mobile',
        body: 'Open your store on three different phones. Test cart, checkout, image loading, and tap targets. Mobile is 70%+ of e-commerce traffic. If it does not feel great on mobile, it does not exist.',
      },
      {
        heading: 'Day 21: Launch (yes, today)',
        body: "Done is better than perfect. Launch with 5–10 products, three solid product photos each, and a working Klaviyo welcome flow. Post on Instagram, TikTok, and your personal Facebook. Ship the first order yourself, every detail teaches you something the spreadsheet won't.",
      },
    ],
    conclusion:
      'Your first Shopify store is not your final Shopify store. It is the version you learn from. Most successful Shopify brands look completely different two years after launch, refined audience, sharper product line, better photography, more sophisticated marketing. The only way to get there is to ship version one and start learning.',
    related: ['amazon-fba-strategies', 'brand-identity-checklist', 'website-speed-matters'],
  },
  {
    slug: 'tiktok-shop-future',
    title: 'TikTok Shop: The Future of Social Commerce',
    excerpt:
      'Why TikTok Shop is the fastest-growing platform for selling products to Gen Z, and how to capitalize before it gets saturated.',
    category: 'TikTok Shop',
    author: 'Mike Chen',
    authorRole: 'TikTok Shop Partner Lead',
    date: 'May 10, 2025',
    readTime: '6 min read',
    heroImage: '/marketing-service.jpg',
    gradient: 'from-pink-500 to-fuchsia-600',
    icon: MegaphoneIcon,
    tags: ['TikTok Shop', 'Social Commerce', 'Creators', 'Live Selling'],
    tldr: [
      'TikTok Shop GMV doubled year over year. The window before saturation is closing fast.',
      'Creators do the selling. Your job is to recruit, equip, and pay them well.',
      'Live shopping is the killer format. One good live can do six figures.',
      'Spark Ads + creators compound. The math gets crazy at scale.',
    ],
    intro:
      'TikTok Shop quietly became the fastest-growing commerce channel on Earth in 2024. UK GMV crossed £20B. Brands that were nobodies on Shopify are doing six-figure days on TikTok Shop alone. The opportunity is not subtle, and the window before it saturates is closing. Here is what every founder needs to understand about TikTok Shop right now.',
    sections: [
      {
        heading: 'Why TikTok Shop is different',
        body: 'Other social platforms direct traffic off-platform. TikTok keeps the transaction inside the app. A user discovers a product in a video, taps the cart icon, checks out, all within TikTok. The friction collapse is unprecedented. Conversion rates from video-to-checkout are 3–5x higher than equivalent ad-to-Shopify flows.',
      },
      {
        heading: 'The creator economy IS the channel',
        body: 'TikTok Shop is a creator-led channel. Your brand will not win by posting from your brand account. You win by getting 100, then 500, then 2,000 creators talking about your product on commission. Recruit aggressively, ship product fast, pay commissions reliably, and the flywheel starts spinning.',
      },
      {
        heading: 'Live shopping is the killer format',
        body: 'A great live shopping stream is part QVC, part Twitch, part talk show. Hosts demo product, answer comments, drop limited-time codes, and create urgency. The best operators on TikTok Shop run 12+ lives per week. Brands doing £1M/month routinely have studios with 24/7 production.',
      },
      {
        heading: 'Spark Ads turn creator content into a flywheel',
        body: "When a creator posts about your product and it pops, you can boost it as a Spark Ad, using their handle, their voice, their authenticity, but your budget. The combo of organic creator content + Spark Ads + lives compounds in a way few brands have figured out yet. ROAS of 5–8x is normal.",
      },
      {
        heading: 'Operational discipline is the moat',
        body: "TikTok enforces shipping speed strictly. Late shipments tank your shop's score and trigger penalties. Build your fulfillment infrastructure before you scale. If you cannot ship same-day or next-day, hold off on volume until you can.",
      },
    ],
    conclusion:
      "TikTok Shop is where Amazon was in 2012 and Shopify was in 2018, a goldmine for the operators who move fast and a graveyard for the ones who wait. If your product is visually compelling, under £100, and resonates with under-35 audiences, you should be testing TikTok Shop this quarter. The window is real, and shorter than you think.",
    related: ['amazon-fba-strategies', 'digital-marketing-trends-2025', 'shopify-store-guide'],
  },
  {
    slug: 'brand-identity-checklist',
    title: 'The Complete Brand Identity Checklist',
    excerpt:
      'Everything you need to include in your brand identity to make a lasting impression and stand out, from logo to tone of voice.',
    category: 'Brand Design',
    author: 'Emma Williams',
    authorRole: 'Creative Director',
    date: 'May 8, 2025',
    readTime: '10 min read',
    heroImage: '/design-service.jpg',
    gradient: 'from-pink-400 via-rose-500 to-fuchsia-600',
    icon: PaletteIcon,
    tags: ['Brand', 'Identity', 'Design', 'Guidelines'],
    tldr: [
      'A brand is not a logo, it is a system of decisions communicated visually.',
      'Most "brand books" miss the point: they document, they do not direct.',
      'Voice is harder than visuals. Most brands fail at it.',
      'A great identity is consistent enough to be recognized and flexible enough to scale.',
    ],
    intro:
      'Founders constantly ask us, "What goes into a great brand identity?" The honest answer: more than you think, and less than agencies sell you. After designing identities for 200+ brands, here is the master checklist we use internally, every box must be ticked before a brand is shippable.',
    sections: [
      {
        heading: 'Strategy first, design second',
        body: 'Before you draw a single shape, define: who you serve, what you stand for, who your enemy is in the market, and what tone you speak in. Brand strategy is the bones, everything visual hangs on it.',
        bullets: [
          'Audience persona',
          'Brand promise (one sentence)',
          'Brand archetype (Hero, Sage, Outlaw, etc.)',
          'Three brand pillars',
          'A "we are not" list (positioning by contrast)',
        ],
      },
      {
        heading: 'Logo system, not a logo',
        body: 'A single logo is fragile. A logo system is durable. You need: a primary wordmark, a secondary monogram or icon, a favicon variant, and reversed-color versions. Every logo needs to work at 16px and at 16 feet.',
      },
      {
        heading: 'A color palette that solves problems',
        body: 'Most brands pick colors they like. Better brands pick colors that solve problems, distinguishing them from competitors, communicating their archetype, working in accessibility-compliant contrasts. Anchor on a primary, a secondary, a single bold accent, and a neutral set.',
      },
      {
        heading: 'Typography hierarchy',
        body: 'Pick a display face for headers (something with character), a body face for paragraphs (something invisible), and a third for accents (small caps, captions, callouts). Define sizes in a scale (12, 14, 16, 20, 24, 32, 48, 72). Use it religiously.',
      },
      {
        heading: 'Photography and illustration style',
        body: 'Most brand failures are photo failures. Define: lighting (natural vs studio), composition (centered vs rule-of-thirds), subject treatment (real customers vs models), and post-processing. Brands that nail photography style look 10x more premium than brands that nail logos.',
      },
      {
        heading: 'Voice and tone',
        body: "Document how the brand sounds: vocabulary it uses, vocabulary it avoids, sentence rhythm, sense of humor. Provide 5 real-world before/afters: 'never write X, write Y.' Without this, every team member writes in their own voice and the brand fractures.",
      },
      {
        heading: 'Templates and reusable assets',
        body: 'Email signatures, social templates, presentation decks, business cards, packaging stickers. The boring stuff. This is where most brand books fail, they prescribe rules without giving teams the assets to follow them.',
      },
      {
        heading: 'A living brand guide, not a PDF',
        body: 'Ship your brand guide as a website, Notion, Webflow, or a dedicated tool like Frontify. PDFs die in folders. Websites get updated, shared, and actually used.',
      },
    ],
    conclusion:
      'Your brand is the sum of every decision your company makes, visual, written, operational. A great identity makes those decisions easier and more consistent. A bad one makes every meeting longer. Check every box above before you launch, and revisit them annually as your brand grows.',
    related: ['shopify-store-guide', 'website-speed-matters', 'digital-marketing-trends-2025'],
  },
  {
    slug: 'website-speed-matters',
    title: 'Website Performance: Why Every Second Costs You Sales',
    excerpt:
      'How website speed impacts user experience and conversions, plus the technical optimizations that move the biggest needles.',
    category: 'Web Development',
    author: 'Alex Rodriguez',
    authorRole: 'Lead Engineer',
    date: 'May 5, 2025',
    readTime: '9 min read',
    heroImage: '/development-service.jpg',
    gradient: 'from-blue-400 via-indigo-500 to-purple-600',
    icon: GaugeIcon,
    tags: ['Performance', 'Core Web Vitals', 'CRO', 'Engineering'],
    tldr: [
      'Every 100ms of load time costs about 1% in conversion. The math compounds fast.',
      'Google ranks fast sites higher. SEO and CRO converge.',
      "Most slowness is not framework choice, it is image weight and third-party scripts.",
      'Lighthouse 95+ is reachable for any site, with the right discipline.',
    ],
    intro:
      'Amazon famously calculated that every 100ms of latency cost them 1% in sales. Walmart found similar numbers. Yet most sites in 2025 still load in 6–8 seconds on mobile. Web performance is the silent killer, it does not show up in any single analytics view, but it sits behind every metric you care about. Here is what actually moves the needle.',
    sections: [
      {
        heading: 'Start by measuring honestly',
        body: 'Run your site through PageSpeed Insights on mobile (not desktop). Mobile is the only number that matters. Look at LCP (largest contentful paint), CLS (cumulative layout shift), and INP (interaction to next paint). These three numbers are the Core Web Vitals. Hit good on all three or fix what is yellow first.',
      },
      {
        heading: 'Images are usually 60% of your weight',
        body: 'Most sites ship 3MB of images on every page load. Compress them aggressively. Use WebP or AVIF (not JPEG). Use modern image components (Next.js Image, Cloudinary, Imgix) that serve responsive sizes automatically. Lazy-load anything below the fold.',
      },
      {
        heading: 'Third-party scripts are the second killer',
        body: 'Every tag in your tag manager is a tax. Audit them quarterly. Most sites are running 8–12 scripts they no longer need, old A/B tools, abandoned analytics, dead chat widgets. Remove what is not earning its keep.',
      },
      {
        heading: 'Serve from the edge',
        body: "Static rendering + edge caching is the modern web's superpower. Vercel, Cloudflare, and Netlify all make this trivial. A static page served from the edge will outperform any dynamic page on any framework, by orders of magnitude.",
      },
      {
        heading: 'Fonts: subset and preload',
        body: 'Custom fonts are great branding and terrible performance. Subset to the characters you actually use. Preload the two faces you need above the fold. Use font-display: swap so text never blocks render.',
      },
      {
        heading: 'JavaScript: ship less of it',
        body: "Every kilobyte of JS is parsed and executed on the user's phone. Use server components, islands architecture, or static rendering wherever possible. A landing page should not need 500KB of React to display a marketing message.",
      },
      {
        heading: 'Layout shift kills trust',
        body: 'A page that visibly reflows as it loads feels broken even if it loads fast. Reserve space for images with explicit width/height. Reserve space for ads and embeds. Watch your CLS score religiously.',
      },
    ],
    conclusion:
      "Performance is not a one-time project, it is a permanent discipline. Set a Lighthouse score budget (95+) and refuse to ship features that drop you below it. Monitor real-user metrics with tools like Vercel Speed Insights or Cloudflare RUM. Every percentage point you claw back compounds, in conversion, in SEO, in customer trust.",
    related: ['shopify-store-guide', 'brand-identity-checklist', 'digital-marketing-trends-2025'],
  },
  {
    slug: 'digital-marketing-trends-2025',
    title: 'Digital Marketing in 2025: Trends and Tactics That Will Actually Work',
    excerpt:
      'Stay ahead with the latest digital marketing trends, from AI personalization to emerging social commerce. The signal vs the noise.',
    category: 'Digital Marketing',
    author: 'Lisa Park',
    authorRole: 'Director of Growth',
    date: 'May 1, 2025',
    readTime: '11 min read',
    heroImage: '/marketing-service.jpg',
    gradient: 'from-yellow-400 via-orange-500 to-red-500',
    icon: TrendingUpIcon,
    tags: ['Marketing', 'AI', 'Trends', 'Growth'],
    tldr: [
      'AI is no longer a tactic, it is the layer underneath everything.',
      'Short-form video is the dominant top-of-funnel. Long-form is the dominant trust-builder.',
      'First-party data wins as third-party cookies finally die.',
      'Brand still beats performance, in the long run. Always has, always will.',
    ],
    intro:
      "Every January, marketing publications run the same 'trends to watch' lists. Most of them are noise. Here are the trends that will actually shape 2025, based on £50M of ad spend we manage and what is actually working for the brands we partner with.",
    sections: [
      {
        heading: 'AI as infrastructure, not a feature',
        body: "Stop thinking about 'AI tools.' Think about AI as the layer underneath every workflow: drafting ad copy, generating variants, summarizing customer reviews, personalizing email subject lines. The brands winning in 2025 are not 'using AI', they are quietly rebuilding every internal process around it.",
      },
      {
        heading: 'Short-form video has won top-of-funnel',
        body: 'TikTok, Reels, Shorts. Three platforms, one format. If you are not producing 20+ short-form videos per week, you are not seriously in market. The good news: production has gotten so cheap (iPhone + good lighting + a script template) that any brand can compete.',
      },
      {
        heading: 'Long-form video for trust and depth',
        body: 'Counter-intuitively, long-form (YouTube, podcasts, founder videos) is the trust layer. Short-form gets discovery; long-form gets the sale. Brands without both are leaving 30%+ of LTV on the table.',
      },
      {
        heading: 'First-party data is the new oil',
        body: 'Third-party cookies are finally, mostly dead. Apple, Safari, Firefox, and increasingly Chrome have erased the old retargeting playbook. Brands that thrive in 2025 are obsessed with email/SMS lists, CRM data, and zero-party signals (quizzes, polls, preferences).',
      },
      {
        heading: 'Attribution is broken, accept it',
        body: 'Last-click attribution has been a lie for years. MMM (media mix modeling) and incrementality testing are how serious brands measure now. If your CMO still believes the GA4 dashboard, you are making bad decisions.',
      },
      {
        heading: 'Email and SMS compound',
        body: "Owned channels are the most under-invested asset in most marketing stacks. Email at 30%+ of revenue is normal for mature brands. SMS opens 95%+. Klaviyo + Postscript is still the gold standard, set them up, design 12+ flows, and let them compound.",
      },
      {
        heading: 'Influencer = creator = affiliate',
        body: 'The taxonomy collapsed. There is just one category now: people with audiences. Pay them on performance. Recruit aggressively. Equip them with content briefs. The "200 micro-creators on 10% commission" model beats the "one mega-influencer for £50k" model nine times out of ten.',
      },
      {
        heading: 'Brand still wins long-term',
        body: 'Performance marketing buys you customers. Brand marketing buys you margin, repeat purchase, and pricing power. Every successful brand we have helped scale past £20M has invested heavily in brand, not despite of performance, but in addition to it.',
      },
    ],
    conclusion:
      "The 2025 marketing playbook is a stack, not a tactic: AI infrastructure underneath, short-form video at the top, long-form for trust, first-party data in the middle, owned channels for compounding, and brand for everything long-term. Skip one layer and you are leaving money on the table. Build the whole stack and the math gets beautiful.",
    related: ['amazon-fba-strategies', 'tiktok-shop-future', 'shopify-store-guide'],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return slugs.map((s) => getPostBySlug(s)).filter((p): p is BlogPost => Boolean(p))
}
