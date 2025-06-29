// pages/api/send-brevo-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface EmailRequest {
  email: string;
  name?: string;
  // Honeypot field
  website?: string; // Spam bots often fill hidden fields
}

interface BrevoResponse {
  success: boolean;
  messageId?: string;
  contactId?: number;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BrevoResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  try {
    // Validate request body
    const { email, name, website }: EmailRequest = req.body;
    
    // Honeypot spam prevention
    if (website && website.trim() !== '') {
      console.log('Potential spam detected - honeypot field filled');
      return res.status(200).json({ success: true }); // Fake success for bots
    }

    if (!email) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email is required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid email format' 
      });
    }

    // Get environment variables
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'no-reply@yourdomain.com';
    const SENDER_NAME = process.env.BREVO_SENDER_NAME || 'Your Brand Name';
    const PDF_URL = process.env.NEXT_PUBLIC_PDF_URL || 'https://yourdomain.com/public/circulation-protocol.pdf';
    const REDTRACK_CLICK_ID = process.env.REDTRACK_CLICK_ID || 'default_click_id';
    const BREVO_LIST_ID = process.env.BREVO_LIST_ID ? parseInt(process.env.BREVO_LIST_ID) : 0;

    if (!BREVO_API_KEY) {
      console.error('Brevo API key is not configured');
      return res.status(500).json({ 
        success: false, 
        error: 'Server configuration error' 
      });
    }

    // Create RedTrack tracking URL
    const trackedPdfUrl = `https://redtrack.io/base?offer_id=${REDTRACK_CLICK_ID}&email=${encodeURIComponent(email)}&url=${encodeURIComponent(PDF_URL)}`;

    // Construct the email HTML content with tracking
    const emailHtml = `<!DOCTYPE html>
      <html>
      <head><title>Your Free Circulation Protocol</title></head>
      <body>
        <h1>Thank you for downloading!</h1>
        <p>Here's your free circulation protocol: <a href="${trackedPdfUrl}">Download Now</a></p>
        ${name ? `<p>Enjoy, ${name}!</p>` : ''}
        <p style="color:#f8f8f8;font-size:1px">${Date.now()}</p> <!-- Hidden tracking pixel -->
      </body>
      </html>`;

    // 1. First add contact to Brevo list
    let contactId: number | null = null;
    try {
      const createContactResponse = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          attributes: {
            FIRSTNAME: name || '',
            LASTNAME: '',
          },
          listIds: [BREVO_LIST_ID],
          updateEnabled: true
        })
      });

      const contactData = await createContactResponse.json();
      
      if (!createContactResponse.ok) {
        console.error('Brevo contact creation error:', contactData);
        // Continue with email send even if contact creation fails
      } else {
        contactId = contactData.id;
      }
    } catch (contactError) {
      console.error('Contact creation failed:', contactError);
      // Continue with email send
    }

    // 2. Send email via Brevo
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          name: SENDER_NAME,
          email: SENDER_EMAIL
        },
        to: [{ email, name: name || '' }],
        subject: 'Your Free Circulation Protocol PDF',
        htmlContent: emailHtml,
        tags: ['circulation-protocol'],
        headers: {
          'X-RedTrack-ID': REDTRACK_CLICK_ID
        }
      })
    });

    const responseData = await brevoResponse.json();

    if (!brevoResponse.ok) {
      console.error('Brevo API error:', responseData);
      return res.status(500).json({ 
        success: false, 
        error: responseData.message || 'Failed to send email' 
      });
    }

    return res.status(200).json({ 
      success: true,
      messageId: responseData.messageId,
      contactId: contactId || undefined
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
}