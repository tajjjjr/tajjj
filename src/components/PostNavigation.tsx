
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';

export const PostNavigation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-[#C7F246] transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">Back</span>
        </button>
        
        <div className="hidden md:flex items-center gap-4">
           <button className="p-2 text-gray-400 hover:text-white transition-colors"><Share2 size={18} /></button>
           <button className="bg-white/10 hover:bg-[#C7F246] hover:text-black text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
              Subscribe
           </button>
        </div>
      </div>
    </nav>
  );
};
