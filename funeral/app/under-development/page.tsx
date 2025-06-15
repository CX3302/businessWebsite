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
      description: "Enhanced predictive insights and advanced business intelligence with custom reporting and comprehensive data visualization for strategic decision-making",
      features: ["Real-time performance metrics", "Predictive analytics", "Custom reporting dashboards", "Advanced data visualization", "Business intelligence", "Strategic forecasting"],
      eta: "Q4 2025"
    },
    integrations: {
      name: "Multi-Channel Integration",
      description: "Connect all your business tools and platforms seamlessly for unified workflow automation and comprehensive business management",
      features: ["Cross-platform connectivity", "Unified workflow automation", "API integrations", "Data synchronization", "Third-party tool support", "Seamless data flow"],
      eta: "Q1 2026"
    }
  };

  const currentProduct = productInfo[product as keyof typeof productInfo] || productInfo.analytics;

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