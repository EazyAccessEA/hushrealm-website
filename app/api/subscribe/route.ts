import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { addToMailingList } from '@/lib/brevo'
import { ProtocolEmail } from '@/components/emails/ProtocolEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { email } = await request.json()

  try {
    // 1. Save to Brevo newsletter
    await addToMailingList(email)

    // 2. Send protocol email
    const { data, error } = await resend.emails.send({
      from: 'HushRealm <protocol@hushrealm.com>',
      to: email,
      subject: 'Your 15-Minute Circulation Protocol',
      react: ProtocolEmail({ email }),
    })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    )
  }
}
