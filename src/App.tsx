import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { BlogSection } from "./components/BlogSection";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { Footer } from "./components/Footer";
import OurStory from "./pages/OurStory";

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
    <div className="min-h-screen w-full bg-[#050505] text-white overflow-x-hidden selection:bg-[#C7F246] selection:text-black">
      <Navbar scrolled={isScrolled} />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProjectsSection />
              <BlogSection />
              <ContactSection />
            </>
          }
        />

        {/* Our Story Page */}
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
      <Footer />
    </div>
  );
}
