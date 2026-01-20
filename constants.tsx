
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ethereal Interiors',
    category: 'UI/UX Design',
    description: 'A minimalist approach to architectural visualizations and interior design portfolios.',
    imageUrl: 'https://picsum.photos/seed/ethereal/800/600',
  },
  {
    id: '2',
    title: 'Nexus Platform',
    category: 'Full-stack Dev',
    description: 'A high-performance dashboard for managing decentralized infrastructure at scale.',
    imageUrl: 'https://picsum.photos/seed/nexus/800/600',
  },
  {
    id: '3',
    title: 'Lumina Brand',
    category: 'Branding',
    description: 'Crafting a cinematic identity for a modern sustainable lighting manufacturer.',
    imageUrl: 'https://picsum.photos/seed/lumina/800/600',
  },
  {
    id: '4',
    title: 'Aura Analytics',
    category: 'Product Design',
    description: 'Data-driven insights visualized through elegant and intuitive interface patterns.',
    imageUrl: 'https://picsum.photos/seed/aura/800/600',
  }
];

export const SKILLS: Skill[] = [
  { name: 'React & TypeScript', level: 95 },
  { name: 'UI/UX Design', level: 90 },
  { name: 'Node.js & GraphQL', level: 85 },
  { name: 'Tailwind CSS', level: 98 },
  { name: 'AI Integration', level: 80 },
  { name: 'Motion Graphics', level: 75 }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Senior Creative Developer',
    company: 'Starlight Agency',
    period: '2022 - Present',
    description: [
      'Leading the frontend architectural strategy for high-traffic client websites.',
      'Implementing complex motion designs and interactive 3D elements using Three.js and Framer Motion.',
      'Mentoring junior developers and establishing design system standards.'
    ]
  },
  {
    id: 'exp2',
    role: 'Frontend Engineer',
    company: 'Digital Horizon',
    period: '2020 - 2022',
    description: [
      'Developed responsive SPAs using React and Next.js.',
      'Optimized performance resulting in a 40% improvement in Core Web Vitals.',
      'Collaborated closely with designers to ensure pixel-perfect implementation.'
    ]
  },
  {
    id: 'exp3',
    role: 'Junior UI Designer',
    company: 'Pixel Perfect',
    period: '2018 - 2020',
    description: [
      'Assisted in creating high-fidelity prototypes and design systems.',
      'Conducted user research and translated findings into actionable design iterations.',
      'Worked with HTML/CSS to build basic marketing landing pages.'
    ]
  }
];
