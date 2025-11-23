import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectsSectionProps {
  onViewAll?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onViewAll }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const fiveProjects = projects.slice(0, 5);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8; // Scroll 80% of view width
      
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24 border-t border-white/10">
      
      {/* Header with Navigation */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6">
            <span className="text-[#C7F246]">Recent</span> <span className="text-white">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
             We build the infrastructure that powers the next generation of financial markets.
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#C7F246] hover:text-black transition-all duration-300 group"
            aria-label="Previous project"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#C7F246] hover:text-black transition-all duration-300 group"
            aria-label="Next project"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {fiveProjects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            className="snap-start min-w-[320px] md:min-w-[400px] lg:min-w-[450px]"
          />
        ))}

        {/* View All Card at the end */}
        <div className="snap-start min-w-[320px] md:min-w-[400px] lg:min-w-[450px] flex items-center justify-center bg-[#111] border border-white/5 rounded-3xl border-dashed hover:border-[#C7F246]/30 transition-colors duration-300">
          <button 
            onClick={onViewAll}
            className="group flex items-center gap-3 bg-[#C7F246] text-black px-6 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            View all projects
            <span className="bg-white/50 p-1 rounded-full group-hover:rotate-45 transition-transform duration-300">
               <ArrowUpRight size={16} className="text-black" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
