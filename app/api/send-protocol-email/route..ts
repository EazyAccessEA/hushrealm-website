// app/api/send-protocol-email/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import React from 'react';
import CirculationPDFEmail from '@/components/email/CirculationPDFEmail'; // adjust path if needed
import { renderToStaticMarkup } from 'react-dom/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const html = renderToStaticMarkup(<CirculationPDFEmail />);

    const data = await resend.emails.send({
      from: 'HushRealm <hello@hushrealm.com>',
      to: email,
      subject: 'Your Free Circulation Optimization Guide',
      html,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
