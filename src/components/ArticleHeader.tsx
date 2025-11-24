
import React from 'react';
import { Clock, Tag } from 'lucide-react';

interface ArticleHeaderProps {
  category: string;
  readTime: string;
  title: string;
  author: string;
  role: string;
  date: string;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({ category, readTime, title, author, role, date }) => {
  return (
    <>
      <div className="mb-8 flex flex-wrap gap-4 items-center justify-between">
         <span className="flex items-center gap-2 text-[#C7F246] font-mono text-sm border border-[#C7F246]/20 bg-[#C7F246]/5 px-2 py-1 rounded">
            <Tag size={12} />
            {category}
         </span>
         <span className="flex items-center gap-2 text-gray-500 font-mono text-sm uppercase">
            <Clock size={12} />
            {readTime}
         </span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8">
        {title}
      </h1>

      <div className="flex items-center gap-4 mb-12 pb-12 border-b border-white/10">
         <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10"></div>
         <div>
           <div className="font-medium text-white">{author}</div>
           <div className="text-sm text-gray-500">{role} • {date}</div>
         </div>
      </div>
    </>
  );
};
