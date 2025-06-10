import Navigation from '../components/Navigation';
import ProductOverview from '../components/ProductOverview';
import PainPointsSolutions from '../components/PainPointsSolutions';
import HowItWorks from '../components/HowItWorks';
import FeatureGrid from '../components/FeatureGrid';
import CaseStudy from '../components/CaseStudy';

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