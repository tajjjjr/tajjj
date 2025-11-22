import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import { ChevronDown } from 'lucide-react';
import { BlogSection } from './components/BlogSection';

export default function App() {
  const SCROLL_THRESHOLD = 300;
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const isPastThreshold = window.scrollY > SCROLL_THRESHOLD;
    if (isPastThreshold !== isScrolled) {
      setIsScrolled(isPastThreshold);
    }
  }, [isScrolled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-black font-sans">
      <Navbar scrolled={isScrolled} />

      <section
        id="hero"
        className="relative h-screen min-h-[700px] bg-gray-900 overflow-hidden shadow-2xl flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-95"></div>

        <div className="relative text-center p-8 z-10">
          <h1 className="text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Building the Future of <span className="text-indigo-400">TAJJJR</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A digital canvas for your visionary projects, blending sleek design with functional excellence.
          </p>
          <ChevronDown className="w-12 h-12 mx-auto mt-20 animate-bounce text-indigo-400" />
        </div>
      </section>
      <BlogSection />

      <style>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
