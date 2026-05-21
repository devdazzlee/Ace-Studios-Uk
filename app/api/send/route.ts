import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = process.env.CONTACT_RECIPIENT || 'radiantcortex@gmail.com'
const FROM = 'Ace Studios <noreply@acestudiosus.com>'

function esc(v: unknown) {
  return String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function row(label: string, value: unknown) {
  return `<tr><td style="padding:8px 12px;font-weight:600;color:#0f1419;width:140px;vertical-align:top;">${esc(label)}</td><td style="padding:8px 12px;color:#333;">${esc(value) || '<em style="color:#999">—</em>'}</td></tr>`
}

function wrap(title: string, inner: string) {
  return `<!doctype html><html><body style="margin:0;padding:24px;background:#f5f3f0;font-family:-apple-system,Segoe UI,Roboto,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e8e5e1;">
      <div style="background:#0a0c10;color:#fff;padding:20px 24px;">
        <h1 style="margin:0;font-size:18px;">${esc(title)}</h1>
        <p style="margin:4px 0 0;font-size:12px;color:#aaa;">From acestudiosus.com</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${inner}</table>
    </div>
  </body></html>`
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const type = String(body.type || '')

    let subject = ''
    let html = ''
    let replyTo: string | undefined

    if (type === 'contact') {
      const { name, email, phone, company, service, message } = body
      if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
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
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
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
        return NextResponse.json({ error: 'Missing email' }, { status: 400 })
      }
      subject = `New newsletter subscriber, ${email}`
      replyTo = email
      html = wrap(
        'New newsletter signup',
        row('Email', email) + row('Source', source || 'unknown')
      )
    } else {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      subject,
      html,
      replyTo,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
