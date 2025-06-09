import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, phone, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vincent.zhou026@gmail.com',
        pass: process.env.EMAIL_PASSWORD // You'll need to set this in your environment variables
      }
    });

    const mailOptions = {
      from: 'vincent.zhou026@gmail.com',
      to: 'vincent.zhou026@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${company || 'Not provided'}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 