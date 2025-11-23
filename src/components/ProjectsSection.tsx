import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Layers, Box, Activity, Zap, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Global Liquidity Engine',
    category: 'High-Frequency Trading',
    description: 'A low-latency execution venue designed for institutional-grade throughput, processing over 1M orders per second with microsecond precision.',
    icon: <Activity size={32} className="text-black" />,
    gradientFrom: '#C7F246',
    gradientTo: '#A3D921'
  },
  {
    id: 2,
    title: 'Nexus Custody Vault',
    category: 'Security & Compliance',
    description: 'Multi-signature cold storage solution integrated with real-time on-chain monitoring and automated compliance reporting tools.',
    icon: <Box size={32} className="text-white" />,
    gradientFrom: '#2563eb',
    gradientTo: '#4338ca'
  },
  {
    id: 3,
    title: 'DeFi Bridge Protocol',
    category: 'Interoperability',
    description: 'Trustless cross-chain messaging protocol enabling seamless asset transfers between EVM and non-EVM chains without centralized intermediaries.',
    icon: <Layers size={32} className="text-white" />,
    gradientFrom: '#C7F246',
    gradientTo: '#A3D921'
  },
  {
    id: 4,
    title: 'Algorithmic Risk Monitor',
    category: 'Analytics',
    description: 'Real-time risk management dashboard providing consolidated views of exposure across spot, derivatives, and lending markets.',
    icon: <Zap size={32} className="text-black" />,
    gradientFrom: '#2563eb',
    gradientTo: '#4338ca'
  },
  {
    id: 5,
    title: 'Tokenized Real Assets',
    category: 'RWA Infrastructure',
    description: 'End-to-end platform for tokenizing real estate and commodities, featuring automated dividend distribution and secondary market trading.',
    icon: <Globe size={32} className="text-white" />,
    gradientFrom: '#C7F246',
    gradientTo: '#A3D921'
  }
];

interface ProjectsSectionProps {
  onViewAll?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onViewAll }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="snap-start min-w-[320px] md:min-w-[400px] lg:min-w-[450px] group relative bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col"
          >
             {/* Abstract Visual Header */}
             <div
               className="h-48 w-full p-6 relative overflow-hidden"
               style={{
                 background: `linear-gradient(to bottom right, ${project.gradientFrom}, ${project.gradientTo})`
               }}
             >
                {/* Decorative Pattern overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/20 blur-3xl rounded-full"></div>

                {/* Icon Badge */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                   {project.icon}
                </div>
             </div>

             {/* Content */}
             <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#C7F246] uppercase tracking-wider border border-[#C7F246]/20 px-2 py-1 rounded bg-[#C7F246]/5">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-[#C7F246] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                   <span className="text-sm font-medium text-white group-hover:text-[#C7F246] transition-colors">
                     View Case Study
                   </span>
                   <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#C7F246] group-hover:text-black transition-all duration-300">
                      <ArrowUpRight size={14} />
                   </div>
                </div>
             </div>
          </div>
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
