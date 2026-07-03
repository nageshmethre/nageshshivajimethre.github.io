'use client';

import React, { useState } from 'react';
import { 
  Mail, ExternalLink, Code, Layers, Server, 
  Send, CheckCircle, Award, Terminal, Calendar, ChevronRight, User 
} from 'lucide-react';
import { BIOGRAPHY, SKILLS, PROJECTS, TIMELINE, Project } from '../data/portfolioData';
import InteractiveCanvas from '../components/InteractiveCanvas';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  
  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMsg) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactName('');
      setContactEmail('');
      setContactMsg('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-[#f3f4f6] flex flex-col justify-between selection:bg-purple-500/30 selection:text-purple-300 relative z-10">
      
      {/* 3D Orbiting Constellation Canvas */}
      <InteractiveCanvas />
      
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl -z-20 animate-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl -z-20 animate-glow" style={{ animationDelay: '3s' }}></div>

      {/* Header / Nav Bar */}
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-gradient-to-tr from-purple-500 to-cyan-400 shadow-md">
            <Terminal className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Nagesh<span className="text-gradient-purple font-black">.dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <a 
          href="#contact" 
          className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-xs font-bold uppercase tracking-wider rounded-full transition-all"
        >
          Hire Me
        </a>
      </header>

      {/* Hero Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2 space-y-6">
          <span className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider rounded-full">
            Available for freelance & fulltime roles
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white">
            Hi, I'm <span className="text-gradient-purple">{BIOGRAPHY.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-300 leading-snug">{BIOGRAPHY.title}</h2>
          <p className="text-base text-gray-400 leading-relaxed max-w-xl">{BIOGRAPHY.bio}</p>

          {/* Social Links & Action */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg glow-btn"
            >
              View Work
            </a>
            <div className="flex items-center gap-2">
              <a 
                href={BIOGRAPHY.socials.github} 
                target="_blank" 
                className="p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a 
                href={BIOGRAPHY.socials.linkedin} 
                target="_blank" 
                className="p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a 
                href={BIOGRAPHY.socials.email} 
                className="p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* 3D-like avatar mockup */}
        <div className="flex justify-center">
          <div className="relative p-1 bg-gradient-to-tr from-purple-500 to-cyan-400 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-[#0b0e14] p-6 rounded-[22px] flex flex-col items-center text-center space-y-4 w-72">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-500/30">
                <img src="/profile.png?v=5" className="w-full h-full object-cover" alt="Nagesh Methre Profile" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">{BIOGRAPHY.name}</h4>
                <p className="text-xs text-gray-500">Based in India</p>
              </div>
              <div className="w-full space-y-2 border-t border-white/5 pt-4">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Languages:</span>
                  <span className="text-white font-semibold">TS, JS, Python</span>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Platforms:</span>
                  <span className="text-white font-semibold">Web, Desktop, Mobile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-[#070b16]/60 border-y border-white/5 py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-black uppercase tracking-wider text-white">Skills Matrix</h2>
            <p className="text-sm text-gray-400 mt-2">Specializations across coding platforms and database architectures</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILLS.map((cat, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/5 space-y-6">
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  {cat.category}
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-wider text-white">Featured Work</h2>
            <p className="text-sm text-gray-400 mt-2">Inspect deploy-ready web architectures built recently</p>
          </div>

          {/* Categories select tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['All', 'Fullstack', 'Security & AI', 'Certifications'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors border ${
                  selectedCategory === cat
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'bg-[#0d111e]/60 border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card border border-white/5 rounded-2xl p-6 flex flex-col justify-between cursor-pointer group hover:border-purple-500/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded border border-purple-500/15">
                    {project.category}
                  </span>
                  <Code className="h-4 w-4 text-cyan-400" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{project.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] font-semibold bg-white/5 text-gray-400 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-bold text-purple-400 flex items-center gap-1 group-hover:text-purple-300">
                  Open Project <ExternalLink className="h-3 w-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="bg-[#070b16]/60 border-y border-white/5 py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-black uppercase tracking-wider text-white">Experience Timeline</h2>
            <p className="text-sm text-gray-400 mt-2">Professional software development roles and milestone logs</p>
          </div>

          <div className="relative border-l border-white/5 ml-4 md:ml-32 space-y-8">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative pl-6 md:pl-8">
                {/* Timeline dot */}
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-purple-500 rounded-full border border-slate-950 shadow-md animate-pulse"></div>
                
                {/* Year tag left-aligned on desktop */}
                <span className="md:absolute md:-left-32 md:top-1 font-bold text-xs text-purple-400 block mb-2 md:mb-0 w-24 md:text-right">
                  {item.year}
                </span>

                <div className="p-5 rounded-2xl glass-panel border border-white/5 space-y-2">
                  <h3 className="text-sm font-bold text-white">{item.role}</h3>
                  <span className="text-xs font-semibold text-cyan-400">{item.company}</span>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="max-w-xl mx-auto px-6 py-20 space-y-8 w-full">
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase tracking-wider text-white">Get In Touch</h2>
          <p className="text-sm text-gray-400 mt-2">Send an inquiry and let's build something together</p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl glass-panel border border-green-500/20 bg-green-500/5 text-center space-y-3">
            <CheckCircle className="h-10 w-10 text-green-400 mx-auto" />
            <h4 className="font-bold text-white">Message Sent Successfully</h4>
            <p className="text-xs text-gray-400">Thank you! I will reply to your email shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-4 p-6 rounded-2xl glass-panel border border-white/5">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Name</label>
              <input 
                type="text" 
                required
                value={contactName}
                onChange={e => setContactName(e.target.value)}
                placeholder="John Doe" 
                className="w-full px-4 py-2.5 bg-slate-950 border border-white/5 rounded-xl text-xs focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Email</label>
              <input 
                type="email" 
                required
                value={contactEmail}
                onChange={e => setContactEmail(e.target.value)}
                placeholder="john@example.com" 
                className="w-full px-4 py-2.5 bg-slate-950 border border-white/5 rounded-xl text-xs focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Message</label>
              <textarea 
                rows={4}
                required
                value={contactMsg}
                onChange={e => setContactMsg(e.target.value)}
                placeholder="What project are we collaborating on?" 
                className="w-full px-4 py-2.5 bg-slate-950 border border-white/5 rounded-xl text-xs focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold uppercase tracking-wider text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md glow-btn"
            >
              <Send className="h-3.5 w-3.5" />
              Send Message
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-gray-500 px-6">
        <p>© {new Date().getFullYear()} Nagesh Methre. All rights reserved.</p>
        <p className="mt-1">Built with Next.js & Tailwind CSS. Hosted on Vercel.</p>
      </footer>


    </div>
  );
}
