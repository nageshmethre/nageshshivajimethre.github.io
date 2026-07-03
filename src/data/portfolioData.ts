export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  live?: string;
  category: 'Fullstack' | 'Security & AI' | 'Certifications';
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
  title: 'Python Full-Stack Developer | Django Developer | MCA Student at REVA University',
  bio: 'MCA student and Python-focused Full-Stack Developer with hands-on experience in Django, MySQL, HTML, CSS, JavaScript, and AI-assisted workflows. Passionate about backend development, security audits, and building scalable systems.',
  socials: {
    github: 'https://github.com/nageshmethre',
    linkedin: 'https://www.linkedin.com/in/nageshmethre',
    email: 'mailto:nageshmethre287@gmail.com',
  }
};

export const SKILLS: SkillCategory[] = [
  {
    category: 'Core Programming & Backend',
    skills: [
      { name: 'Python / Django', level: 95 },
      { name: 'C++', level: 85 },
      { name: 'MySQL / DBMS', level: 90 },
      { name: 'REST APIs & CRUD', level: 92 }
    ]
  },
  {
    category: 'Frontend & Networks',
    skills: [
      { name: 'JavaScript', level: 88 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'Tailwind CSS / UI Layouts', level: 92 },
      { name: 'Computer Networking', level: 85 }
    ]
  },
  {
    category: 'Security & AI Tools',
    skills: [
      { name: 'Penetration Testing / VAPT', level: 80 },
      { name: 'Cyber Forensics & Sec', level: 78 },
      { name: 'AI Workflows (ChatGPT, Claude)', level: 90 },
      { name: 'Git & GitHub Versioning', level: 87 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'NageshMethre CTF -v1',
    description: 'Capture The Flag platform and security testing suite built under the guidance of Mohammed Tousif (CEO, Cynux Era). Click to read the report.',
    longDescription: 'Completed in fulfillment of MCA SDP requirements. Focuses on penetration testing, vulnerability assessment, cyber forensics, and system network audits.',
    tags: ['Cybersecurity', 'VAPT', 'Project Report (PDF)', 'Network Security'],
    github: '/nagesh_ctf_report.pdf',
    category: 'Security & AI'
  },
  {
    title: 'StreaminAi Django Engine',
    description: 'Python & Django based media sharing API gateway mapping mock Stripe payments, HLS video streams, and JWT authentication.',
    longDescription: 'Features automated transcoders transcoding files, user channel controllers, comments, real-time message relays, and subscriber systems.',
    tags: ['Python', 'Django', 'MySQL', 'JWT Auth'],
    github: 'https://github.com/nageshmethre/StreaminAi',
    live: 'https://nagesh-portfolio-lime.vercel.app',
    category: 'Fullstack'
  },
  {
    title: 'Professional Credentials Portfolio',
    description: 'Interactive dashboard highlighting credentials including Gemini Certified Educator, Deloitte Data Analyst, and Tata Cybersecurity.',
    longDescription: 'Organized portfolio sections displaying certifications badges, timelines, course achievements, and secure feedback forms.',
    tags: ['Next.js', 'Tailwind CSS', 'Glassmorphism', 'Responsive Design'],
    github: 'https://github.com/nageshmethre/nageshshivajimethre.github.io',
    category: 'Certifications'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2025 - 2027',
    role: 'Master of Computer Applications (MCA)',
    company: 'REVA University (School of Computer Science Application)',
    description: 'Focusing on advanced computer programming, database management, network security, AI workflows, and software development projects.'
  },
  {
    year: '2022 - 2025',
    role: 'Bachelor of Science (B.Sc) - Computer Science',
    company: 'Gulbarga University, Kalaburgi',
    description: 'Studied core computer science concepts, object-oriented programming (C++), algorithms, and databases.'
  },
  {
    year: 'May 2019 - July 2021',
    role: 'Pre University 12th (PCMB)',
    company: 'Diamond PU Science College',
    description: 'Completed foundational pre-university education in Physics, Chemistry, Mathematics, and Biology.'
  },
  {
    year: 'June 2009 - April 2019',
    role: 'Secondary School Leaving Certificate (SSLC)',
    company: 'Seventh Day Adventist Higher Secondary School',
    description: 'Completed primary and secondary school education.'
  }
];
