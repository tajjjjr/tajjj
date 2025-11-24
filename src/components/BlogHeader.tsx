
import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BlogHeaderProps {
  title: string;
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-[#C7F246] transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </button>

        <h1 className="text-lg font-medium hidden md:block">{title}</h1>

        <div className="flex items-center gap-4">
           <div className="relative hidden md:block">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="bg-[#111] border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[#C7F246]/50 transition-colors w-64"
              />
           </div>
        </div>
      </div>
    </header>
  );
};
