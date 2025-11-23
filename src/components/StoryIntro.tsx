import React from "react";
import { Button } from "./Button";

const StoryIntro: React.FC = () => {
  return (
    <div className="relative w-full py-24 md:py-32 px-6 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              All It Takes Is <br />
              <span className="text-[#CFFF24] bg-clip-text bg-gradient-to-r from-white to-neutral-500">
                One Weekend
              </span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
              What started as six developers challenging themselves to build more became a story of turning free time into breakthroughs—and ideas into working products.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a href="/#contact" className="inline-block">
            <Button variant="primary" label="Start a Conversation" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryIntro;
