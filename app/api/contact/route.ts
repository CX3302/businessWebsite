import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, phone, message } = body;

    // For now, let's just log the submission and return success
    // In production, you would want to set up proper email sending
    console.log('Form submission received:', {
      name,
      email,
      company,
      phone,
      message
    });

    // TODO: Implement your preferred email service or database storage
    
    return NextResponse.json(
      { message: 'Form submission received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
} 