import React from 'react';
import { TEAM_MEMBERS } from '../data/constants';
import { TeamMember } from '../../types';

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="flex flex-col items-center justify-center mx-8 w-[280px] group cursor-pointer">
    <div className="relative w-32 h-32 mb-6">
       <div className="absolute inset-0 rounded-full border-2 border-accent/20 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(207,255,36,0.3)] transition-all duration-300"></div>
       <div className="absolute inset-1 rounded-full overflow-hidden bg-neutral-900">
         <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
       </div>
    </div>
    <div className="text-center space-y-1">
      <h3 className="text-white text-lg font-semibold group-hover:text-accent transition-colors">{member.name}</h3>
      <p className="text-sm text-neutral-400 font-medium">{member.title}</p>
      <p className="text-xs text-neutral-500 uppercase tracking-wider">{member.role}</p>
    </div>
  </div>
);

const TeamCarousel: React.FC = () => {
  // Triple the list to ensure smooth seamless looping
  const duplicatedMembers = [...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS];

  return (
    <div className="w-full py-20 overflow-hidden relative border-t border-white/5 bg-black/50 backdrop-blur-sm">
        {/* Header */}
        <div className="container mx-auto px-6 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Visionaries</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Carousel Track */}
        <div className="relative w-full">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

            <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                {duplicatedMembers.map((member, index) => (
                    <TeamCard key={`${member.id}-${index}`} member={member} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default TeamCarousel;
