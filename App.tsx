
import React, { useState, useEffect } from 'react';
import { Theme } from './types';
import Hero from './components/Hero';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import ChatBot from './components/ChatBot';
import { PROJECTS, SKILLS, EXPERIENCES } from './constants';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === Theme.DARK) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  };

  return (
    <div className="min-h-screen">
      {/* Floating Header */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 backdrop-blur-sm bg-white/5 border-b border-white/10">
        <div className="font-display font-bold text-2xl tracking-tighter">AURA</div>
        <div className="hidden md:flex gap-10 items-center text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <a href="#home" className="hover:text-accent-dark transition-colors">Home</a>
          <a href="#about" className="hover:text-accent-dark transition-colors">About</a>
          <a href="#projects" className="hover:text-accent-dark transition-colors">Work</a>
          <a href="#experience" className="hover:text-accent-dark transition-colors">Exp</a>
          <a href="#contact" className="hover:text-accent-dark transition-colors">Contact</a>
        </div>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-slate-200 dark:bg-zinc-800 hover:scale-110 transition-transform"
        >
          {theme === Theme.DARK ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9H3m3.343-5.657l-.707.707m12.728 12.728l-.707.707M6.343 17.657l-.707.707M17.657 6.343l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </nav>

      <Hero />

      {/* About Section */}
      <Section id="about" title="Crafting Digital Artistry" subtitle="Driven by a passion for clean code and impeccable design, I bridge the gap between creative vision and technical execution.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent-dark/20 rounded-2xl blur-2xl group-hover:bg-accent-dark/30 transition-all duration-500"></div>
            <img 
              src="https://picsum.photos/seed/portrait/600/800" 
              alt="Portrait" 
              className="relative rounded-2xl w-full h-[500px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-medium">Hello, I'm Aura.</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                With over 6 years of experience in the digital space, I specialize in building high-end interfaces that prioritize user experience without sacrificing aesthetic brilliance.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                My workflow integrates the latest in AI-assisted development and advanced animation techniques to create web applications that feel truly alive.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {SKILLS.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium uppercase tracking-tighter">
                    <span>{skill.name}</span>
                    <span className="text-accent-dark">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-slate-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent-dark transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Work" subtitle="A selection of my most challenging and rewarding creative pursuits across design and development.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="The Journey" subtitle="Mapping out the professional milestones and evolution of my creative career.">
        <div className="relative space-y-12 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200 dark:before:bg-zinc-800">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-12">
              <div className="absolute left-0 top-2 w-9 h-9 bg-white dark:bg-zinc-900 border-2 border-accent-dark rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-accent-dark rounded-full"></div>
              </div>
              <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 dark:border-zinc-800">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-2">
                  <div>
                    <h3 className="text-xl font-bold font-display">{exp.role}</h3>
                    <p className="text-accent-dark font-medium">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1.5 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-full uppercase tracking-widest w-fit">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-600 dark:text-slate-400 font-light flex gap-3 text-sm leading-relaxed">
                      <span className="text-accent-dark mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Let's Build Something" subtitle="Open for collaborations, interesting projects, or just a coffee chat about the future of design.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-display font-light">Get in touch directly or use the AI assistant.</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-accent-dark/10 text-accent-dark rounded-2xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-lg">hello@aura.studio</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-accent-dark/10 text-accent-dark rounded-2xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-lg">Remote, Worldwide</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'GitHub', 'Dribbble'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-accent-dark hover:text-white transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-zinc-800">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-dark" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                  <input type="email" className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-dark" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                <textarea className="w-full bg-slate-50 dark:bg-zinc-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-dark h-32" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full bg-accent-dark text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-slate-200 dark:border-zinc-800 px-6 text-center">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} AURA STUDIO. All Rights Reserved.</p>
        <p className="text-slate-500 text-[10px] mt-2 uppercase tracking-[0.3em]">Crafted with Precision & AI</p>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;
