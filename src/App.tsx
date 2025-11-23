import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import { ChevronDown } from 'lucide-react';
import { BlogSection } from './components/BlogSection';
import { Hero } from "./components/Hero";
import { ProjectsSection } from './components/ProjectsSection';

export default function App() {
  const SCROLL_THRESHOLD = 75;
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const isPastThreshold = window.scrollY > SCROLL_THRESHOLD;
    if (isPastThreshold !== isScrolled) {
      setIsScrolled(isPastThreshold);
    }
  }, [isScrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-black font-sans">
      <Navbar scrolled={isScrolled} />
      <Hero />
      <ProjectsSection />
      <BlogSection />

      <style>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
