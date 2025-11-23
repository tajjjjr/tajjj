import React from 'react';
import { StoryStage } from '../../types';

interface RoadmapItemProps {
  stage: StoryStage;
  index: number;
  total: number;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ stage, index, total }) => {
  const isEven = index % 2 === 0;
  const isLast = index === total - 1;

  return (
    <div className="relative w-full flex justify-center items-stretch min-h-[500px] mb-12 md:mb-0">
      {/* Central Connector Line (Desktop) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -ml-px bg-neutral-800 z-0">
        {!isLast && (
           <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-neutral-800 via-accent/30 to-neutral-800 opacity-50"></div>
        )}
      </div>

      {/* Content Container */}
      <div className={`flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center ${isEven ? '' : 'md:flex-row-reverse'} relative z-10 gap-8 md:gap-24 px-4`}>
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="relative group w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-card shadow-2xl">
              <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500 z-10"></div>
              <img 
                src={stage.imageUrl} 
                alt={stage.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-accent/70 rounded-tr-xl z-20"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-xl z-20"></div>
            </div>
        </div>

        {/* Central Node Marker (Desktop) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
          <div className="w-4 h-4 bg-black border-2 border-accent rounded-full shadow-[0_0_15px_rgba(207,255,36,0.6)] z-20"></div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 text-left md:px-6">
          <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'} space-y-4`}>
             <div className="flex items-center space-x-3 mb-2">
                <span className="text-accent text-sm font-mono tracking-widest uppercase">0{index + 1}/03</span>
                <div className="h-px w-12 bg-white/20"></div>
             </div>
             
             <h2 className={`text-4xl md:text-5xl font-bold text-white leading-tight ${isEven ? 'md:text-left' : 'md:text-right'}`}>
               {stage.title}
             </h2>
             
             <h3 className={`text-xl text-neutral-400 font-medium ${isEven ? 'md:text-left' : 'md:text-right'}`}>
               {stage.subtitle}
             </h3>

             <p className={`text-neutral-400 leading-relaxed max-w-lg ${isEven ? 'md:text-left' : 'md:text-right'}`}>
               {stage.description}
             </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RoadmapItem;
