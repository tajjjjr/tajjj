import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import { BlogSection } from "./components/BlogSection";
import { Hero } from "./components/Hero";

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
      <BlogSection />

      <style>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
