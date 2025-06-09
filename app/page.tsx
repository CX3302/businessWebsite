import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Impact from './components/Impact';
import Products from './components/Products';
import Process from './components/Process';
import Teams from './components/Teams';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Mission />
      <Impact />
      <Products />
      <Process />
      <Teams />
    </main>
  );
}
