export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'https://ace-studios-uk-two.vercel.app'

export const SITE_URL = 'https://acestudiosuk.com'

export const API = {
  send: `${BACKEND_URL}/api/send`,
} as const
