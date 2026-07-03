export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  live?: string;
  category: 'Mobile UX' | 'Web Systems' | 'Design Systems';
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

export const BIOGRAPHY = {
  name: 'Nagesh Methre',
  title: 'Lead UI/UX Designer & Product Strategist',
  bio: 'Specializing in crafting human-centered digital experiences. I design interactive wireframes, custom design systems, and responsive layouts that bridge user needs with business goals.',
  socials: {
    github: 'https://github.com/nageshmethre',
    linkedin: 'https://linkedin.com/in/nageshmethre',
    email: 'mailto:nageshmethre@example.com',
  }
};

export const SKILLS: SkillCategory[] = [
  {
    category: 'UX Research & Design',
    skills: [
      { name: 'Figma / Prototyping', level: 98 },
      { name: 'Wireframing & Flowcharts', level: 95 },
      { name: 'User Research & Persona Mapping', level: 90 },
      { name: 'Information Architecture', level: 92 }
    ]
  },
  {
    category: 'UI & Interaction Development',
    skills: [
      { name: 'HTML5 Canvas Animations', level: 88 },
      { name: 'Tailwind CSS / Glassmorphism', level: 94 },
      { name: 'Next.js / React Layouts', level: 90 },
      { name: 'Component-Driven Development', level: 92 }
    ]
  },
  {
    category: 'Product & Tools',
    skills: [
      { name: 'Design Systems (Tokens & Assets)', level: 96 },
      { name: 'Adobe Creative Suite', level: 85 },
      { name: 'Git & Version Control', level: 88 },
      { name: 'Vercel / Production Deployments', level: 90 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'StreaminAi Video Design System',
    description: 'A complete custom design system and layout system for an AI-powered YouTube clone, featuring dark mode glassmorphism interfaces.',
    longDescription: 'Developed atomic components, grid tokens, and interactive canvas components for real-time video streaming panels. Included responsive grids and micro-interactions optimized for video players.',
    tags: ['Figma UI', 'Design Tokens', 'Tailwind CSS', 'Atomic Components'],
    github: 'https://github.com/nageshmethre/StreaminAi',
    live: 'https://nagesh-portfolio-lime.vercel.app',
    category: 'Design Systems'
  },
  {
    title: 'FinTech Banking Wallet App',
    description: 'High-fidelity wireframes and mobile UI layouts for a premium digital currency wallet, with custom chart dashboard assets.',
    longDescription: 'Conducted user interviews, designed user journeys, mapped dashboard navigation structures, and built interactive mobile prototypes focusing on transaction transparency.',
    tags: ['Mobile UX', 'User Research', 'Figma Prototyping', 'Usability Testing'],
    github: 'https://github.com/nageshmethre/nageshshivajimethre.github.io',
    category: 'Mobile UX'
  },
  {
    title: 'Aura Smart Home Console',
    description: 'A responsive smart-console tablet controller layout for smart-home security systems and home automation hubs.',
    longDescription: 'Created customizable grid dashboards, mapped interactive security status nodes, and built animated device controllers using clean vector icons and smooth transition styles.',
    tags: ['Web Systems', 'Tablet UI', 'Interactive Icons', 'Responsive Layout'],
    github: 'https://github.com/nageshmethre/nageshshivajimethre.github.io',
    category: 'Web Systems'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2024 - Present',
    role: 'Lead UI/UX Designer',
    company: 'Innovate Tech Studios',
    description: 'Spearheading product design guidelines, building unified client design tokens, and collaborating with developers to deploy Next.js static applications.'
  },
  {
    year: '2022 - 2024',
    role: 'UI Designer & Web Developer',
    company: 'PixelPerfect Agency',
    description: 'Designed interactive web layouts, created animation mockups, and converted static wireframes into responsive Tailwind CSS code structures.'
  },
  {
    year: '2018 - 2022',
    role: 'Bachelor of Design (B.Des) - Interaction Design',
    company: 'Karnataka State University Quota',
    description: 'Studied design methodologies, color theories, typography scales, accessibility guidelines, and interactive human-computer interfaces.'
  }
];
