import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import SmoothScrollCanvas from '@/components/SmoothScrollCanvas';
import TechTicker from '@/components/TechTicker';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black w-full">
      <Navbar />
      <Hero />
      <About />
      <TechTicker />
      <Projects />
      <Contact />
      <Footer />
      <SmoothScrollCanvas />
    </main>
  );
}
