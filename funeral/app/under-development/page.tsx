'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Navigation from '../components/shared/Navigation';
import UpcomingProduct from '../components/unused/UpcomingProduct';

const UnderDevelopmentContent = () => {
  const searchParams = useSearchParams();
  const product = searchParams.get('product');

  const productInfo = {
    analytics: {
      name: "Advanced Analytics Dashboard",
      description: "Deep insights into scheduling patterns, resource utilization, and business metrics for data-driven funeral home management",
      features: ["Real-time performance metrics", "Predictive analytics", "Custom reporting dashboards", "Data visualization tools", "Capacity utilization analysis", "Revenue tracking"],
      eta: "Q2 2024"
    },
    mobile: {
      name: "Mobile App for Staff",
      description: "Native iOS and Android apps for real-time schedule access and updates, keeping your team connected anywhere",
      features: ["Real-time notifications", "Offline access capability", "Touch-friendly interface", "Push updates", "Staff coordination tools", "Emergency contact system"],
      eta: "Q3 2024"
    },
    vendors: {
      name: "Vendor Network Integration",
      description: "Direct booking and coordination with florists, musicians, and other service providers for seamless funeral planning",
      features: ["Direct vendor booking", "Automated coordination", "Payment integration", "Quality ratings system", "Preferred vendor networks", "Real-time availability"],
      eta: "Q4 2024"
    },
    crm: {
      name: "Automated CRM Follow-up",
      description: "AI-powered aftercare and revenue optimization system that nurtures relationships and increases memorial sales",
      features: ["Automated follow-up sequences", "Personalized communication", "Memorial sales integration", "Revenue analytics", "Anniversary reminders", "Referral tracking"],
      eta: "Q3 2024"
    }
  };

  const currentProduct = productInfo[product as keyof typeof productInfo] || productInfo.vendors;

  return (
    <>
      <Navigation />
      <UpcomingProduct productInfo={currentProduct} />
    </>
  );
};

export default function UnderDevelopment() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-funeral-black text-2xl">Loading...</div>
      </div>
    }>
      <UnderDevelopmentContent />
    </Suspense>
  );
} 