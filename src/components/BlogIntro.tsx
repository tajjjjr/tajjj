
import React from 'react';

interface BlogIntroProps {
  title: string;
  subtitle: string;
}

export const BlogIntro: React.FC<BlogIntroProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-medium text-[#C7F246] mb-4">{title}</h2>
      <p className="text-gray-400 max-w-2xl text-lg">{subtitle}</p>
    </div>
  );
};
