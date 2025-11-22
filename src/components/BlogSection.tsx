import React from 'react';
import { ArrowRight, ArrowUpRight, Clock, Tag } from 'lucide-react';

const posts = [
  {
    id: 1,
    category: 'Backend Engineering',
    date: 'Oct 24, 2023',
    readTime: '5 min read',
    title: 'Designing Resilient Distributed Systems',
    excerpt: 'A practical breakdown of patterns like circuit breaking, bulkheads, and backpressure—and how they keep modern microservices reliable under load.',
    gradient: 'from-[#C7F246]/20 via-[#050505] to-[#050505]' 
  },
  {
    id: 2,
    category: 'System Architecture',
    date: 'Nov 02, 2023',
    readTime: '3 min read',
    title: 'Event-Driven Architectures at Scale',
    excerpt: 'How to structure message flows, guarantee idempotency, and avoid the most common pitfalls of high-throughput event pipelines.',
    gradient: 'from-blue-900/20 via-[#050505] to-[#050505]'
  },
  {
    id: 3,
    category: 'DevOps & Tooling',
    date: 'Nov 15, 2023',
    readTime: '7 min read',
    title: 'Modern CI/CD Strategies for 2024',
    excerpt: 'A deep dive into pipeline automation, environment isolation, and security hardening techniques for cloud-native delivery teams.',
    gradient: 'from-purple-900/20 via-[#050505] to-[#050505]'
  }
];

export const BlogSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-t border-white/10 pt-16">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-[#C7F246] mb-6">
            Recent Insights
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Expert perspectives on market structure, trading technology, and the future of finance.
          </p>
        </div>
        
        <div className="mb-2">
          <button className="group flex items-center gap-3 bg-[#C7F246] text-black px-6 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 whitespace-nowrap">
            View all articles
            <span className="bg-white/50 p-1 rounded-full group-hover:rotate-45 transition-transform duration-300">
               <ArrowUpRight size={16} className="text-black" />
            </span>
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-pointer flex flex-col h-full">
            
            {/* Thumbnail / Visual */}
            <div className="relative w-full aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 mb-6 bg-[#111]">
              {/* Abstract Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Inner Shadow/Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Icon/Tag on Image */}
              <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                 <span className="text-xs font-mono text-gray-300 flex items-center gap-2">
                    <Tag size={12} className="text-[#C7F246]" />
                    {post.category}
                 </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-3 text-xs font-mono text-gray-500 mb-3 uppercase tracking-wide">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-medium leading-tight mb-3 text-gray-100 group-hover:text-[#C7F246] transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-[#C7F246] transition-colors mt-auto">
                Read Article
                <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};