
import React from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from '../hooks/usePost';
import { ArticleHeader } from './ArticleHeader';
import { ArticleBody } from './ArticleBody';
import { PostNavigation } from './PostNavigation';
import { ShareButtons } from './ShareButtons';
import { NextArticle } from './NextArticle';

export const SinglePostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { post, scrollProgress } = usePost(Number(postId));

  if (!post) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-[#C7F246]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-[#C7F246] z-[60]" style={{ width: `${scrollProgress * 100}%` }} />

      <PostNavigation />

      <article className="max-w-4xl mx-auto px-6 py-12">
        
        <ArticleHeader
          category={post.category}
          readTime={post.readTime}
          title={post.title}
          author={post.author}
          role={post.role}
          date={post.date}
        />

        {/* Hero Image (Abstract) */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 bg-[#111] border border-white/10">
           <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-80`} />
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
        </div>

        <ArticleBody content={post.content} />

        <ShareButtons />

        <NextArticle />

      </article>
    </div>
  );
};
