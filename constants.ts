import { StoryStage, TeamMember } from './types';

export const STORY_STAGES: StoryStage[] = [
  {
    id: 'start',
    title: 'How It All Started',
    subtitle: 'The Inception',
    description: 'Born from a shared frustration with opaque financial systems, our journey began in a small garage in 2018. We saw an opportunity to leverage blockchain transparency to rebuild trust in capital markets. What started as a simple algorithm for liquidity provision quickly evolved into a comprehensive vision for the future of finance.',
    imageUrl: 'https://picsum.photos/seed/finance1/800/600',
  },
  {
    id: 'present',
    title: 'Where We Are',
    subtitle: 'Scaling Trust',
    description: 'Today, we manage over $2B in assets and serve institutional clients across 30 countries. Our platform combines high-frequency trading infrastructure with rigorous compliance standards. We have successfully bridged the gap between traditional finance and decentralized assets, offering seamless support and on-time execution that our partners rely on daily.',
    imageUrl: 'https://picsum.photos/seed/tech2/800/600',
  },
  {
    id: 'future',
    title: 'Where We Are Going',
    subtitle: 'The Horizon',
    description: 'The future is autonomous. We are building the next generation of AI-driven hedging solutions and cross-chain settlement layers. Our roadmap includes expanding into emerging markets and democratizing access to institutional-grade tools. We aren\'t just participating in the market; we are engineering its evolution.',
    imageUrl: 'https://picsum.photos/seed/future3/800/600',
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'David Odhiambo',
    title: 'Founder & Director',
    role: 'AI Engineer',
    imageUrl: 'https://picsum.photos/seed/david/200/200',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    title: 'Co-Founder',
    role: 'Chief Technology Officer',
    imageUrl: 'https://picsum.photos/seed/sarah/200/200',
  },
  {
    id: '3',
    name: 'Marcus Thorne',
    title: 'Managing Partner',
    role: 'Head of Capital Mkts',
    imageUrl: 'https://picsum.photos/seed/marcus/200/200',
  },
  {
    id: '4',
    name: 'Elena Rodriguez',
    title: 'VP of Engineering',
    role: 'Blockchain Architect',
    imageUrl: 'https://picsum.photos/seed/elena/200/200',
  },
  {
    id: '5',
    name: 'James Foster',
    title: 'Director',
    role: 'Head of Product',
    imageUrl: 'https://picsum.photos/seed/james/200/200',
  },
  {
    id: '6',
    name: 'Aisha Patel',
    title: 'Lead Researcher',
    role: 'Quant Analyst',
    imageUrl: 'https://picsum.photos/seed/aisha/200/200',
  }
];
