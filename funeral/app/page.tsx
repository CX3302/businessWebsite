import Navigation from './components/shared/Navigation';
import Hero from './components/home/Hero';
import PainPointsPreview from './components/home/PainPointsPreview';
import About from './components/home/About';
import CTAFooter from './components/shared/CTAFooter';

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <PainPointsPreview />
      <About />
      <CTAFooter />
    </main>
  );
} 