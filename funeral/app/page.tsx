import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PainPointsPreview from './components/PainPointsPreview';
import About from './components/About';
import CTAFooter from './components/CTAFooter';

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