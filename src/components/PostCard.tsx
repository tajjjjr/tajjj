
import React from 'react';
import { ArrowUpRight, Clock, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  gradient: string;
}

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <article 
      onClick={() => navigate(`/blog/${post.id}`)}
      className="group cursor-pointer flex flex-col h-full bg-[#0A0A0A] border border-white/5 rounded-2xl p-4 hover:border-white/10 transition-all hover:-translate-y-1 duration-300"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/5 mb-6 bg-[#111]">
        <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-60 group-hover:opacity-90 transition-opacity duration-500`} />
        <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full">
           <span className="text-[10px] font-mono text-gray-300 flex items-center gap-1.5 uppercase tracking-wider">
              <Tag size={10} className="text-[#C7F246]" />
              {post.category}
           </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-2 pb-2">
        <div className="flex items-center gap-3 text-xs font-mono text-gray-500 mb-3 uppercase tracking-wide">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-xl font-medium leading-tight mb-3 text-gray-100 group-hover:text-[#C7F246] transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <span className="text-sm font-medium text-white group-hover:text-[#C7F246] transition-colors">Read Article</span>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#C7F246] group-hover:text-black transition-all">
              <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </article>
  );
};
