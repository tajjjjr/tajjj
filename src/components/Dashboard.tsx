import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { apiRequest } from '../utils/api';

interface Post {
  _id: string;
  title: string;
  excerpt: string;
  status: string;
  createdAt: string;
  author: { name: string };
}

interface DashboardProps {
  token: string;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ token, onLogout }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await apiRequest('/blog/posts?page=1', {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        const data = await response.json();
        if (!response.ok) throw new Error("Failed to fetch posts")
        setPosts(data.data?.posts || []);
      } catch (err) {
        console.error('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [token]);

  return (
    <div className="min-h-screen bg-black">
      <header className="bg-gray-900/90 backdrop-blur-md border-b border-gray-700 px-6 py-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-extrabold text-white tracking-wider cursor-pointer" onClick={() => window.location.reload()}>TAJJJR</h1>
          <Button label="Logout" variant="secondary" icon={false} onClick={onLogout} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Dashboard</h2>
          <p className="text-gray-400">Manage your blog posts</p>
        </div>

        {loading ? (
          <div className="text-center text-gray-400 py-12">Loading posts...</div>
        ) : (
          <div className="grid gap-6">
            {posts.length === 0 ? (
              <div className="text-center text-gray-400 py-12">No posts found</div>
            ) : (
              posts.map((post) => (
                <div key={post._id} className="bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.status === 'published' 
                        ? 'bg-[#CFFF24]/20 text-[#CFFF24]' 
                        : 'bg-gray-600/20 text-gray-400'
                    }`}>
                      {post.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>By {post.author?.name || 'Unknown'}</span>
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
};