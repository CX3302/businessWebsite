import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Research from './components/Research';
import Projects from './components/Projects';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <WhatWeDo />
      <Research />
      <Projects />
      <Team />
      <Pricing />
      <Contact />
    </main>
  );
}
