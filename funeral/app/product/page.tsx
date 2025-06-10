import Navigation from '../components/shared/Navigation';
import ProductOverview from '../components/product/ProductOverview';
import PainPointsSolutions from '../components/product/PainPointsSolutions';
import HowItWorks from '../components/product/HowItWorks';
import FeatureGrid from '../components/product/FeatureGrid';
import CaseStudy from '../components/product/CaseStudy';

export default function Product() {
  return (
    <main className="bg-white">
      <Navigation />
      <ProductOverview />
      <PainPointsSolutions />
      <HowItWorks />
      <FeatureGrid />
      <CaseStudy />
    </main>
  );
} 