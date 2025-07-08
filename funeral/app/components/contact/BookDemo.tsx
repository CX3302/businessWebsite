'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

// Form validation schema
const formSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  company: z.string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be less than 100 characters'),
  phone: z.string()
    .optional()
    .refine((val) => !val || /^[\+]?[\d\s\-\(\)]+$/.test(val), {
      message: 'Please enter a valid phone number',
    }),
  message: z.string()
    .max(500, 'Message must be less than 500 characters')
    .optional(),
});

type FormData = z.infer<typeof formSchema>;

const BookDemo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success toast
      toast({
        title: "Demo Scheduled!",
        description: "Thank you for your interest in Prelude. We'll contact you within 24 hours to schedule your personalized demo.",
        duration: 6000,
      });
      
      // Reset form
      reset();
      
    } catch (error) {
      // Show error toast
      toast({
        title: "Error",
        description: "There was an issue submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-manrope"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Book a Demo
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            See how Prelude can eliminate double-bookings and transform your business operations
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Demo Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg border-gray-100">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900 font-manrope">
                  Schedule Your Demo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        {...register('name')}
                        className={`mt-1 ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <span id="name-error" role="alert" className="text-red-500 text-sm mt-1 block">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        {...register('email')}
                        className={`mt-1 ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <span id="email-error" role="alert" className="text-red-500 text-sm mt-1 block">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                        Company Name *
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your Company Name"
                        {...register('company')}
                        className={`mt-1 ${errors.company ? 'border-red-500 focus:ring-red-500' : ''}`}
                        aria-invalid={!!errors.company}
                        aria-describedby={errors.company ? 'company-error' : undefined}
                      />
                      {errors.company && (
                        <span id="company-error" role="alert" className="text-red-500 text-sm mt-1 block">
                          {errors.company.message}
                        </span>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (416) 805 3318"
                        {...register('phone')}
                        className={`mt-1 ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <span id="phone-error" role="alert" className="text-red-500 text-sm mt-1 block">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Tell us about your current scheduling challenges
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your current pain points with scheduling..."
                      rows={4}
                      {...register('message')}
                      className={`mt-1 ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <span id="message-error" role="alert" className="text-red-500 text-sm mt-1 block">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className="w-full bg-gradient-to-r from-gray-900 to-blue-900 hover:from-blue-900 hover:to-gray-900 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Book My Demo'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Calendly Placeholder */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Calendar Widget Placeholder */}
            <Card className="bg-gradient-to-br from-gray-900 to-blue-900 text-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white font-manrope">
                  Schedule Instantly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white/10 rounded-lg p-6 text-center backdrop-blur-sm">
                  <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 mb-4 font-inter">
                    Calendly booking widget would be embedded here
                  </p>
                  <div className="text-sm text-gray-400 font-inter">
                    Pick a time that works for you from our available slots
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Contact Methods */}
            <Card className="shadow-lg border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 font-manrope">
                  Other Ways to Connect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-manrope">Call Us</h4>
                      <p className="text-gray-600 font-inter">+1 (416) 805 3318</p>
                      <p className="text-sm text-gray-500 font-inter">Mon-Fri, 9 AM - 6 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-manrope">Email Us</h4>
                      <p className="text-gray-600 font-inter">info@preludeos.com</p>
                      <p className="text-sm text-gray-500 font-inter">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-manrope">Connect</h4>
                      <p className="text-gray-600 font-inter">/company/prelude-ai</p>
                      <p className="text-sm text-gray-500 font-inter">Connect with our team</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo; 