
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const NextArticle: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-24 bg-[#111] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden group cursor-pointer" onClick={() => navigate(-1)}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7F246]/5 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="relative z-10">
           <div className="text-sm text-[#C7F246] font-mono mb-4">Up Next</div>
           <h3 className="text-3xl font-medium text-white mb-4 group-hover:underline decoration-[#C7F246] underline-offset-4 decoration-2">
             Modern CI/CD Strategies for 2024
           </h3>
           <p className="text-gray-400 max-w-xl mb-8">
             A deep dive into pipeline automation, environment isolation, and security hardening techniques.
           </p>
           <div className="flex items-center gap-2 font-medium text-white group-hover:text-[#C7F246] transition-colors">
             Read Article <ArrowUpRight size={16} />
           </div>
        </div>
    </div>
  );
};
