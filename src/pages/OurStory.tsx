import React from 'react';
import StoryIntro from './StoryIntro';
import RoadmapItem from './RoadmapItem';
import TeamCarousel from './TeamCarousel';
import { STORY_STAGES } from '../../constants';

const OurStory: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-black overflow-x-hidden">
      <main className="pt-20">
        <StoryIntro />

        {/* Roadmap Story Section */}
        <section className="relative py-20 md:py-32">
            {/* Ambient background glow for middle section */}
            <div className="absolute left-0 top-1/4 w-[300px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="flex flex-col space-y-0">
                {STORY_STAGES.map((stage, index) => (
                    <RoadmapItem 
                        key={stage.id} 
                        stage={stage} 
                        index={index} 
                        total={STORY_STAGES.length}
                    />
                ))}
            </div>
        </section>

        {/* Team Section */}
        <section className="relative z-10">
            <TeamCarousel />
        </section>
        
      </main>
    </div>
  );
};

export default OurStory;
