export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  live?: string;
  category: 'Fullstack' | 'AI & DevOps' | 'APIs';
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
  title: 'Senior Full-Stack Engineer & AI Architect',
  bio: 'Passionate software engineer specializing in building highly scalable web systems, containerized CI/CD pipelines, and deep generative AI integrations. Expert in Next.js, Node.js, and multi-platform native wraps.',
  socials: {
    github: 'https://github.com/nageshmethre',
    linkedin: 'https://linkedin.com/in/nageshmethre',
    email: 'mailto:nageshmethre@example.com',
  }
};

export const SKILLS: SkillCategory[] = [
  {
    category: 'Frontend & Platforms',
    skills: [
      { name: 'Next.js / React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Electron (Desktop)', level: 85 },
      { name: 'Capacitor (Android)', level: 80 }
    ]
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js / Express', level: 95 },
      { name: 'PostgreSQL / Prisma', level: 90 },
      { name: 'Redis Caching', level: 85 },
      { name: 'Socket.io (WebSockets)', level: 90 },
      { name: 'REST & GraphQL APIs', level: 92 }
    ]
  },
  {
    category: 'AI & DevOps',
    skills: [
      { name: 'OpenAI GPT & Whisper', level: 88 },
      { name: 'Docker / Docker Compose', level: 90 },
      { name: 'Nginx Load Balancer', level: 85 },
      { name: 'GitHub Actions CI/CD', level: 87 },
      { name: 'Vercel / AWS Deployments', level: 90 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'StreaminAi Media Engine',
    description: 'A complete AI-powered YouTube clone featuring custom HLS player, Whisper transcription, and real-time Socket.io chats.',
    longDescription: 'A production-ready media sharing site compiled into native desktop (Electron) and mobile (Capacitor) apps. Includes recursive comments validation, AI smart tag recommendations, and Stripe payment triggers.',
    tags: ['Next.js', 'Express', 'Prisma', 'Socket.io', 'OpenAI'],
    github: 'https://github.com/nageshmethre/StreaminAi',
    live: 'https://frontend-steel-phi-91.vercel.app',
    category: 'Fullstack'
  },
  {
    title: 'Automated PR Review Assistant',
    description: 'An AI-Powered DevOps agent reviewing git push requests, auditing security flaws, and outputting line-level suggestions.',
    longDescription: 'Monitors commits to scan for CVEs and hardcoded secrets. Outputs refactoring blocks containing markdown code comparisons directly to team developer dashboards.',
    tags: ['Node.js', 'Git Hooks', 'paramiko', 'OpenAI API', 'Elasticsearch'],
    github: 'https://github.com/nageshmethre/StreaminAi',
    category: 'AI & DevOps'
  },
  {
    title: 'Dynamic Web Scraping CLI',
    description: 'High-concurrency scraping CLI crawling site architectures and generating searchable JSON datasets.',
    longDescription: 'Bypasses standard client protections and handles cookies sessions routing. Stores scraped results dynamically into PostgreSQL indexing databases.',
    tags: ['Node.js', 'Cheerio', 'PostgreSQL', 'Commander.js'],
    github: 'https://github.com/nageshmethre/StreaminAi',
    category: 'APIs'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2025 - Present',
    role: 'Senior Software Architect',
    company: 'DevOps & AI Systems Corp',
    description: 'Designed scalable server architectures, optimized PostgreSQL queries, and set up Dockerized pipelines.'
  },
  {
    year: '2023 - 2025',
    role: 'Full-Stack Developer',
    company: 'Cloud Scale Web Solutions',
    description: 'Developed Next.js customer panels, integrated Stripe checkout portals, and synced WebSockets messaging gateways.'
  },
  {
    year: '2021 - 2023',
    role: 'Backend Associate',
    company: 'Tech Solutions Ltd',
    description: 'Maintained legacy RESTful APIs, converted services to TypeScript, and set up daily audit logs backups.'
  }
];
