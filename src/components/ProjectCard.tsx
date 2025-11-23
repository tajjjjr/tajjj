import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  gradient?: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  icon,
  gradientFrom,
  gradientTo,
  gradient,
  className = ''
}) => {
  // Determine the gradient style
  const gradientStyle = gradient 
    ? {} 
    : {
        background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`
      };

  const gradientClass = gradient ? `bg-gradient-to-br ${gradient}` : '';

  return (
    <div 
      className={`group relative bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col ${className}`}
    >
      {/* Abstract Visual Header */}
      <div
        className={`h-48 w-full p-6 relative overflow-hidden ${gradientClass}`}
        style={gradient ? {} : gradientStyle}
      >
        {/* Decorative Pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/20 blur-3xl rounded-full"></div>

        {/* Icon Badge */}
        <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono text-[#C7F246] uppercase tracking-wider border border-[#C7F246]/20 px-2 py-1 rounded bg-[#C7F246]/5">
            {category}
          </span>
        </div>

        <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-[#C7F246] transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
          {description}
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
  );
};

