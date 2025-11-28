import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { projects as baseProjects, Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const AllProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Intersection Observer Ref
  const observerTarget = useRef<HTMLDivElement>(null);

  const loadMoreProjects = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const limit = 9;
    const start = (page - 1) * limit;

    // For infinite scroll with limited mock data, cycle through projects
    const newProjects = Array.from({ length: limit }, (_, i) => {
      const projectIndex = (start + i) % baseProjects.length;
      return baseProjects[projectIndex];
    });

    setProjects(prev => {
      const updatedProjects = [...prev, ...newProjects];
      if (updatedProjects.length >= 60) {
        setHasMore(false);
      }
      return updatedProjects;
    });
    setPage(prev => prev + 1);

    setLoading(false);
  }, [page, loading, hasMore]);

  // Initial Load
  useEffect(() => {
    loadMoreProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Observer Effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreProjects();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [loadMoreProjects, hasMore]);

  return (
    <div className="min-h-screen bg-[#050505] text-white animate-in fade-in duration-500 mt-30">
      {/* Sticky Header */}
      {/* <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-[#C7F246] transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>

          <h1 className="text-lg font-medium hidden md:block">All Projects</h1>

          <div className="flex items-center gap-4">
             <div className="relative hidden md:block">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search projects..." 
                  className="bg-[#111] border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[#C7F246]/50 transition-colors w-64"
                />
             </div>
          </div>
        </div>
      </header> */}

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-[#C7F246] mb-4">Our Work</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A curated collection of our technical achievements in building the financial infrastructure of tomorrow.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={`${project.id}-${crypto.randomUUID()}`}
              {...project}
              className="hover:-translate-y-1"
            />
          ))}
        </div>

        {/* Loading / End State */}
        <div ref={observerTarget} className="h-32 flex flex-col items-center justify-center mt-12 gap-4">
          {loading && (
            <div className="flex items-center gap-2 text-[#C7F246]">
              <div className="w-2 h-2 rounded-full bg-[#C7F246] animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 rounded-full bg-[#C7F246] animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 rounded-full bg-[#C7F246] animate-bounce"></div>
            </div>
          )}
          {!hasMore && !loading && (
            <p className="text-gray-600 text-sm font-mono uppercase tracking-widest">End of content</p>
          )}
        </div>
      </main>
    </div>
  );
};
