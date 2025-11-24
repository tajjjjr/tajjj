
import React from 'react';
import { Linkedin, Twitter, Link as LinkIcon } from 'lucide-react';

export const ShareButtons: React.FC = () => {
  return (
    <div className="mt-16 pt-12 border-t border-white/10">
      <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Share this article</p>
      <div className="flex gap-4">
         <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300 text-gray-400">
           <Linkedin size={20} />
         </button>
         <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-black hover:border-white hover:text-white transition-all duration-300 text-gray-400">
           <Twitter size={20} />
         </button>
         <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#C7F246] hover:border-[#C7F246] hover:text-black transition-all duration-300 text-gray-400">
           <LinkIcon size={20} />
         </button>
      </div>
    </div>
  );
};
