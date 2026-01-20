
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="https://picsum.photos/seed/hero/1920/1080"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-curves-of-light-25000-large.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-slate-900/40 dark:bg-[#0a0a0a]/60 transition-colors duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-[#0a0a0a]"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-6 animate-slide-up">
          <span className="text-accent-light dark:text-accent-dark uppercase tracking-[0.3em] text-sm font-semibold">
            Creative Developer & UI Designer
          </span>
          <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-none">
            DAWOOD <span className="text-transparent stroke-text">KAMOKA</span>
          </h1>
          <p className="text-slate-200 dark:text-slate-300 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed">
           Full-stack web developer skilled in MongoDB, Express, React, and Node.js. Passionate about building modern, scalable web applications.
          </p>
          <div className="pt-8 flex gap-6 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-all hover:scale-105 active:scale-95"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-white/30 text-white backdrop-blur-sm rounded-full font-medium hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.8);
        }
      `}} />
    </div>
  );
};

export default Hero;
