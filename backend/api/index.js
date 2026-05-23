require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { Resend } = require('resend')

const app = express()
const resend = new Resend(process.env.RESEND_API_KEY)
const TO = process.env.CONTACT_RECIPIENT || 'radiantcortex@gmail.com'
const FROM = process.env.MAIL_FROM || 'Ace Studios <noreply@acestudiosuk.com>'

const ALLOWED_ORIGINS = [
  'https://acestudiosuk.com',
  'https://www.acestudiosuk.com',
  'http://localhost:3000',
]

app.use(
  cors({
    origin: (origin, callback) => {
      // allow non-browser tools (curl, server-to-server) with no Origin header
      if (!origin) return callback(null, true)
      if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true)
      return callback(new Error(`Origin ${origin} not allowed by CORS`))
    },
    credentials: false,
  })
)
app.use(express.json({ limit: '256kb' }))

function esc(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function row(label, value) {
  return `<tr><td style="padding:8px 12px;font-weight:600;color:#0f1419;width:140px;vertical-align:top;">${esc(label)}</td><td style="padding:8px 12px;color:#333;">${esc(value) || '<em style="color:#999">—</em>'}</td></tr>`
}

function wrap(title, inner) {
  return `<!doctype html><html><body style="margin:0;padding:24px;background:#f5f3f0;font-family:-apple-system,Segoe UI,Roboto,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e8e5e1;">
      <div style="background:#0a0c10;color:#fff;padding:20px 24px;">
        <h1 style="margin:0;font-size:18px;">${esc(title)}</h1>
        <p style="margin:4px 0 0;font-size:12px;color:#aaa;">From acestudiosuk.com</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${inner}</table>
    </div>
  </body></html>`
}

app.get('/', (_req, res) => {
  res.json({ ok: true, service: 'ace-studios-backend' })
})

app.post('/api/send', async (req, res) => {
  try {
    const body = req.body || {}
    const type = String(body.type || '')

    let subject = ''
    let html = ''
    let replyTo

    if (type === 'contact') {
      const { name, email, phone, company, service, message } = body
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' })
      }
      subject = `New contact form submission, ${name}`
      replyTo = email
      html = wrap(
        'New contact request',
        row('Name', name) +
          row('Email', email) +
          row('Phone', phone) +
          row('Company', company) +
          row('Service', service) +
          row('Message', String(message).replace(/\n/g, '<br>'))
      )
    } else if (type === 'question') {
      const { name, email, question } = body
      if (!name || !email || !question) {
        return res.status(400).json({ error: 'Missing required fields' })
      }
      subject = `New FAQ question, ${name}`
      replyTo = email
      html = wrap(
        'New question from FAQ page',
        row('Name', name) + row('Email', email) + row('Question', String(question).replace(/\n/g, '<br>'))
      )
    } else if (type === 'subscribe') {
      const { email, source } = body
      if (!email) {
        return res.status(400).json({ error: 'Missing email' })
      }
      subject = `New newsletter subscriber, ${email}`
      replyTo = email
      html = wrap(
        'New newsletter signup',
        row('Email', email) + row('Source', source || 'unknown')
      )
    } else {
      return res.status(400).json({ error: 'Invalid form type' })
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      subject,
      html,
      replyTo,
    })

    if (error) {
      return res.status(500).json({ error: error.message })
    }
    return res.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return res.status(500).json({ error: message })
  }
})

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => console.log(`Backend listening on http://localhost:${port}`))
}

module.exports = app
