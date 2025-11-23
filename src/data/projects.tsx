import { Activity, Box, Layers, Zap, Globe } from 'lucide-react';
import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Global Liquidity Engine',
    category: 'High-Frequency Trading',
    description: 'A low-latency execution venue designed for institutional-grade throughput, processing over 1M orders per second with microsecond precision.',
    icon: <Activity size={32} className="text-black" />,
    gradientFrom: '#C7F246',
    gradientTo: '#A3D921'
  },
  {
    id: 2,
    title: 'Nexus Custody Vault',
    category: 'Security & Compliance',
    description: 'Multi-signature cold storage solution integrated with real-time on-chain monitoring and automated compliance reporting tools.',
    icon: <Box size={32} className="text-white" />,
    gradientFrom: '#2563eb',
    gradientTo: '#4338ca'
  },
  {
    id: 3,
    title: 'DeFi Bridge Protocol',
    category: 'Interoperability',
    description: 'Trustless cross-chain messaging protocol enabling seamless asset transfers between EVM and non-EVM chains without centralized intermediaries.',
    icon: <Layers size={32} className="text-white" />,
    gradientFrom: '#C7F246',
    gradientTo: '#A3D921'
  },
  {
    id: 4,
    title: 'Algorithmic Risk Monitor',
    category: 'Analytics',
    description: 'Real-time risk management dashboard providing consolidated views of exposure across spot, derivatives, and lending markets.',
    icon: <Zap size={32} className="text-black" />,
    gradientFrom: '#2563eb',
    gradientTo: '#4338ca'
  },
  {
    id: 5,
    title: 'Tokenized Real Assets',
    category: 'RWA Infrastructure',
    description: 'End-to-end platform for tokenizing real estate and commodities, featuring automated dividend distribution and secondary market trading.',
    icon: <Globe size={32} className="text-white" />,
    gradientFrom: '#C7F246',
    gradientTo: '#A3D921'
  },
    {
    id: 6,
    title: 'Global Liquidity Engine',
    category: 'High-Frequency Trading',
    description: 'A low-latency execution venue designed for institutional-grade throughput, processing over 1M orders per second with microsecond precision.',
    icon: <Activity size={32} className="text-black" />,
    gradientFrom: '#C7F246',
    gradientTo: '#A3D921'
  },
  {
    id: 7,
    title: 'Nexus Custody Vault',
    category: 'Security & Compliance',
    description: 'Multi-signature cold storage solution integrated with real-time on-chain monitoring and automated compliance reporting tools.',
    icon: <Box size={32} className="text-white" />,
    gradientFrom: '#2563eb',
    gradientTo: '#4338ca'
  },
  {
    id: 8,
    title: 'DeFi Bridge Protocol',
    category: 'Interoperability',
    description: 'Trustless cross-chain messaging protocol enabling seamless asset transfers between EVM and non-EVM chains without centralized intermediaries.',
    icon: <Layers size={32} className="text-white" />,
    gradientFrom: '#C7F246',
    gradientTo: '#A3D921'
  },
  {
    id: 9,
    title: 'Algorithmic Risk Monitor',
    category: 'Analytics',
    description: 'Real-time risk management dashboard providing consolidated views of exposure across spot, derivatives, and lending markets.',
    icon: <Zap size={32} className="text-black" />,
    gradientFrom: '#2563eb',
    gradientTo: '#4338ca'
  },
  {
    id: 10,
    title: 'Tokenized Real Assets',
    category: 'RWA Infrastructure',
    description: 'End-to-end platform for tokenizing real estate and commodities, featuring automated dividend distribution and secondary market trading.',
    icon: <Globe size={32} className="text-white" />,
    gradientFrom: '#C7F246',
    gradientTo: '#A3D921'
  },
    {
    id: 11,
    title: 'Global Liquidity Engine',
    category: 'High-Frequency Trading',
    description: 'A low-latency execution venue designed for institutional-grade throughput, processing over 1M orders per second with microsecond precision.',
    icon: <Activity size={32} className="text-black" />,
    gradientFrom: '#C7F246',
    gradientTo: '#A3D921'
  },
  {
    id: 12,
    title: 'Nexus Custody Vault',
    category: 'Security & Compliance',
    description: 'Multi-signature cold storage solution integrated with real-time on-chain monitoring and automated compliance reporting tools.',
    icon: <Box size={32} className="text-white" />,
    gradientFrom: '#2563eb',
    gradientTo: '#4338ca'
  },
  {
    id: 13,
    title: 'DeFi Bridge Protocol',
    category: 'Interoperability',
    description: 'Trustless cross-chain messaging protocol enabling seamless asset transfers between EVM and non-EVM chains without centralized intermediaries.',
    icon: <Layers size={32} className="text-white" />,
    gradientFrom: '#C7F246',
    gradientTo: '#A3D921'
  },
  {
    id: 14,
    title: 'Algorithmic Risk Monitor',
    category: 'Analytics',
    description: 'Real-time risk management dashboard providing consolidated views of exposure across spot, derivatives, and lending markets.',
    icon: <Zap size={32} className="text-black" />,
    gradientFrom: '#2563eb',
    gradientTo: '#4338ca'
  },
  {
    id: 15,
    title: 'Tokenized Real Assets',
    category: 'RWA Infrastructure',
    description: 'End-to-end platform for tokenizing real estate and commodities, featuring automated dividend distribution and secondary market trading.',
    icon: <Globe size={32} className="text-white" />,
    gradientFrom: '#C7F246',
    gradientTo: '#A3D921'
  }
];

