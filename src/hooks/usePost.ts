
import { useState, useEffect } from 'react';

// --- Mock Data Fetcher ---
// This simulates fetching full post details based on ID
const getPostDetails = (id: number) => {
  // Specific data for the first 3 posts to match Home page
  if (id === 1) {
    return {
      id,
      title: 'Designing Resilient Distributed Systems',
      category: 'Backend Engineering',
      date: 'Oct 24, 2023',
      readTime: '5 min read',
      author: 'Alex Chen',
      role: 'Principal Engineer',
      gradient: 'from-[#C7F246]/20 via-[#050505] to-[#050505]',
      content: [
        { type: 'p', text: "In the world of high-frequency trading and digital asset management, system downtime isn't just an inconvenience—it's a direct loss of revenue and trust. Building systems that can withstand partial failures while maintaining data consistency is paramount." },
        { type: 'h3', text: "The Fallacy of the Happy Path" },
        { type: 'p', text: "Too often, engineering teams design for the 'happy path'—the scenario where the network is reliable, the database is responsive, and third-party APIs return valid data instantly. However, in distributed systems, failure is not an anomaly; it is the norm. We must design with the assumption that components will fail." },
        { type: 'quote', text: "Resilience is not about preventing failure, but about recovering from it gracefully without human intervention." },
        { type: 'p', text: "We implement patterns like Circuit Breakers to prevent cascading failures. When a downstream service begins to timeout, the circuit opens, failing fast and allowing the system to recover. Bulkheads isolate critical components so that a failure in one module (e.g., notification delivery) doesn't starve resources for another (e.g., order execution)." },
        { type: 'h3', text: "Idempotency at Scale" },
        { type: 'p', text: "Ensuring that an operation produces the same result regardless of how many times it is executed is crucial when dealing with financial transactions. We utilize unique idempotency keys for every state-changing request, stored in a distributed key-value store with TTLs tailored to our reconciliation windows." },
        { type: 'p', text: "This approach allows us to safely retry operations during network partitions without the risk of double-spending or duplicate order placement." }
      ]
    };
  } 
  
  if (id === 2) {
    return {
      id,
      title: 'Event-Driven Architectures at Scale',
      category: 'System Architecture',
      date: 'Nov 02, 2023',
      readTime: '3 min read',
      author: 'Sarah Jenkins',
      role: 'System Architect',
      gradient: 'from-blue-900/20 via-[#050505] to-[#050505]',
      content: [
        { type: 'p', text: "Moving from a monolithic architecture to an event-driven microservices ecosystem unlocks massive scalability, but it introduces significant complexity in state management and observability." },
        { type: 'h3', text: "The Event Log as the Source of Truth" },
        { type: 'p', text: "We rely on persistent event logs to decouple producers from consumers. This allows our analytics services to process market data at their own pace without slowing down the matching engine." },
        { type: 'quote', text: "Decoupling is the key to velocity. It allows independent teams to deploy features without tight coordination." }
      ]
    };
  }

  // Generic content for infinite scroll posts
  return {
    id,
    title: `The Future of Institutional Trading: Vol ${id}`,
    category: id % 2 === 0 ? 'Market Structure' : 'DeFi Infrastructure',
    date: new Date(Date.now() - id * 86400000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    readTime: '6 min read',
    author: 'Capital Markets Research',
    role: 'Intelligence Team',
    gradient: 'from-[#C7F246]/20 via-[#050505] to-[#050505]',
    content: [
      { type: 'p', text: "As traditional finance and decentralized protocols continue to converge, the infrastructure supporting these markets is undergoing a radical transformation. This report explores the emerging patterns in liquidity provisioning and settlement optimization." },
      { type: 'h3', text: "Fragmented Liquidity" },
      { type: 'p', text: "Liquidity is no longer concentrated in a handful of central exchanges. It is fragmented across CEXs, DEXs, and OTC desks. Smart order routers (SORs) are evolving to become execution algorithms that split orders not just for price impact, but for gas efficiency and atomic settlement guarantees." },
      { type: 'quote', text: "The winner of the next decade will be the infrastructure that abstracts away the complexity of fragmentation." },
      { type: 'p', text: "We are observing a shift towards Intent-Based Architectures, where traders express what they want to achieve, and solvers compete to execute that intent at the best price." },
      { type: 'h3', text: "Regulatory Compliance" },
      { type: 'p', text: "With MiCA in Europe and evolving frameworks in Asia, institutional participants require automated compliance checks embedded directly into the trade lifecycle. Pre-trade risk checks must occur in sub-millisecond timeframes to keep up with algorithmic strategies." }
    ]
  };
};

export const usePost = (id: number) => {
  const [post, setPost] = useState<any>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const data = getPostDetails(id);
    setPost(data);
    
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  return { post, scrollProgress };
};
