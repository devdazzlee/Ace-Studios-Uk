export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001'

export const API = {
  send: `${BACKEND_URL}/api/send`,
} as const
