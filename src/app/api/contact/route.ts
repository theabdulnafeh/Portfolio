import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, projectType, budget, timeline, projectBrief } = body;

    // Server-side validation
    if (!fullName || !email || !projectBrief) {
      return NextResponse.json(
        { error: 'Missing required fields (Full Name, Email, and Project Brief are required)' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_your_api_key_here') {
      return NextResponse.json(
        { error: 'RESEND_API_KEY is not configured in .env.local' },
        { status: 500 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Inquiry <onboarding@resend.dev>',
      to: ['pureplusher@gmail.com'],
      replyTo: email,
      subject: `🚀 New Project Inquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #111; border: 1px solid #eee; rounded: 12px;">
          <h2 style="color: #d97706; margin-bottom: 20px;">New Portfolio Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px;">Client Name:</td>
              <td style="padding: 8px 0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Client Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Project Type:</td>
              <td style="padding: 8px 0;">${projectType || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Budget Range:</td>
              <td style="padding: 8px 0;">${budget || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Timeline:</td>
              <td style="padding: 8px 0;">${timeline || 'Not specified'}</td>
            </tr>
          </table>

          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #d97706;">
            <h4 style="margin-top: 0; color: #374151;">Project Brief:</h4>
            <p style="white-space: pre-wrap; margin-bottom: 0; color: #4b5563;">${projectBrief}</p>
          </div>

          <hr style="margin-top: 24px; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #9ca3af; text-align: center;">Sent automatically from your portfolio website</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend email error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error('API /api/contact exception:', err);
    return NextResponse.json(
      { error: err?.message || 'An unexpected server error occurred' },
      { status: 500 }
    );
  }
}
