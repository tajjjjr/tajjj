
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BlogHeader } from './BlogHeader';
import { PostCard } from './PostCard';
import { BlogIntro } from './BlogIntro';
import { InfiniteScrollLoader } from './InfiniteScrollLoader';
import { useNavigate } from 'react-router-dom';

// --- Mock Data Generator ---
const CATEGORIES = ['Market Structure', 'DeFi', 'Engineering', 'Compliance', 'Macro', 'Product'];
const GRADIENTS = [
  'from-[#C7F246]/20 via-[#050505] to-[#050505]',
  'from-blue-900/20 via-[#050505] to-[#050505]',
  'from-purple-900/20 via-[#050505] to-[#050505]',
  'from-orange-900/20 via-[#050505] to-[#050505]',
  'from-emerald-900/20 via-[#050505] to-[#050505]',
  'from-pink-900/20 via-[#050505] to-[#050505]',
];

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  gradient: string;
}

const generatePosts = (page: number, limit: number): Post[] => {
  const start = (page - 1) * limit;
  return Array.from({ length: limit }).map((_, i) => {
    const id = start + i + 1;
    return {
      id,
      title: `The Future of Institutional Trading: Vol ${id}`,
      excerpt: `An in-depth analysis of how post-trade infrastructure is evolving to meet the demands of high-frequency algo traders in a fragmented liquidity landscape (Part ${id}).`,
      category: CATEGORIES[id % CATEGORIES.length],
      readTime: `${3 + (id % 7)} min read`,
      date: new Date(Date.now() - id * 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      gradient: GRADIENTS[id % GRADIENTS.length],
    };
  });
};

export const AllPostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  // Intersection Observer Ref
  const observerTarget = useRef<HTMLDivElement>(null);

  const loadMorePosts = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newPosts = generatePosts(page, 9);
    
    if (page > 5) { // Cap at ~45 posts for demo
      setHasMore(false);
    } else {
      setPosts(prev => [...prev, ...newPosts]);
      setPage(prev => prev + 1);
    }
    
    setLoading(false);
  }, [page, loading, hasMore]);

  // Initial Load
  useEffect(() => {
    loadMorePosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Observer Effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore) {
          loadMorePosts();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [loadMorePosts, hasMore]);

  return (
    <div className="min-h-screen bg-[#050505] text-white animate-in fade-in duration-500">
      {/* <BlogHeader title="All Insights" /> */}

      <main className="max-w-7xl mx-auto px-6 py-12 mt-30">
        <BlogIntro 
          title="Knowledge Base"
          subtitle="Browse our complete library of thoughts on market structure, quantitative finance, and decentralized protocols."
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <InfiniteScrollLoader
          loaderRef={observerTarget}
          loading={loading}
          hasMore={hasMore}
        />
      </main>
    </div>
  );
};
