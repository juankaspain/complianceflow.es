import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { logger } from '@/lib/logger';
import { sanitizeHtml } from '@/lib/sanitize';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

/**
 * Contact form submission endpoint
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.error.errors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validation.data;

    // Sanitize input
    const sanitizedData = {
      name: sanitizeHtml(name),
      email: sanitizeHtml(email),
      subject: sanitizeHtml(subject),
      message: sanitizeHtml(message),
    };

    logger.info('Contact form submission', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      subject: sanitizedData.subject,
    });

    // TODO: Send email
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   from: sanitizedData.email,
    //   subject: `Contact Form: ${sanitizedData.subject}`,
    //   text: sanitizedData.message,
    // });

    // TODO: Save to database
    // await db.contactSubmissions.create(sanitizedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will respond shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    logger.error('Contact form error', error as Error);

    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';