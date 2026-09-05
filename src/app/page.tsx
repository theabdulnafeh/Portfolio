import About from '@/components/About';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import SmoothScrollCanvas from '@/components/SmoothScrollCanvas';
import TechTicker from '@/components/TechTicker';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechTicker />
      <About />
      <Projects />
      <SmoothScrollCanvas />
    </main>
  );
}
