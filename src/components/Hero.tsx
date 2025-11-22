import React from "react";
import { BackgroundEffects } from "./BackgroundEffects";
import { Button } from "./Button";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <BackgroundEffects />

      <div className="relative z-20 flex flex-col items-center max-w-5xl mx-auto text-center mt-12 md:mt-0">
        {/* Top Badge */}
        <div className="mb-8 animate-float" style={{ animationDelay: "0.5s" }}>
          <div className="px-5 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-medium tracking-wide text-gray-300 shadow-lg shadow-accent/5">
            100% Grit
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.1] mb-8 drop-shadow-2xl">
          <span className="block">Your Vision.</span>
          <span className="block">Our Weekend.</span>
          <span className="block text-white/90">A Product That Delivers</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl text-base md:text-lg text-gray-400 mb-12 leading-relaxed font-light">
          Six builders. One mission: transform bold concepts into working
          products that move people, attract investment, and prove what’s
          possible when creativity meets relentless execution.
        </p>

        {/* Buttons & Lines Layout */}
        <div className="flex items-center gap-4 md:gap-8 w-full justify-center">
          {/* Left Line */}
          <div className="hidden md:flex items-center flex-1 justify-end max-w-[150px]">
            <div className="h-[1px] w-full bg-gradient-to-l from-gray-600 to-transparent opacity-50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600 ml-2"></div>
          </div>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="#contact" className="inline-block">
              <Button variant="primary" label="Get Started" />
            </a>
            <a href="#story" className="inline-block">
              <Button variant="secondary" label="Our Story" />
            </a>
          </div>

          {/* Right Line */}
          <div className="hidden md:flex items-center flex-1 justify-start max-w-[150px]">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-2"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-gray-600 to-transparent opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Overlay Vignette for bottom fading */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};
