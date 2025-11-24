
import React from 'react';

interface ContentBlock {
  type: 'h3' | 'quote' | 'p';
  text: string;
}

interface ArticleBodyProps {
  content: ContentBlock[];
}

export const ArticleBody: React.FC<ArticleBodyProps> = ({ content }) => {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
       {content.map((block, idx) => {
         if (block.type === 'h3') {
           return <h3 key={idx} className="text-2xl font-medium text-white mt-12 mb-6">{block.text}</h3>;
         }
         if (block.type === 'quote') {
           return (
             <blockquote key={idx} className="border-l-2 border-[#C7F246] pl-6 italic text-xl text-gray-300 my-12 bg-white/5 p-6 rounded-r-lg">
               "{block.text}"
             </blockquote>
           );
         }
         return <p key={idx} className="text-gray-300 leading-relaxed mb-6 text-lg">{block.text}</p>;
       })}
    </div>
  );
};
