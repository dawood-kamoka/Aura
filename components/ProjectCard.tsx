
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-xl transition-all duration-500 hover:-translate-y-2">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
        <span className="text-accent-light text-xs font-bold uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          {project.category}
        </span>
        <h3 className="text-2xl font-display font-semibold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
          {project.title}
        </h3>
        <p className="text-slate-300 text-sm mb-4 line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
          {project.description}
        </p>
        <button className="w-fit px-4 py-2 border border-white/30 rounded-lg text-xs font-semibold hover:bg-white hover:text-slate-900 transition-all translate-y-4 group-hover:translate-y-0 duration-500 delay-400">
          Explore Case Study
        </button>
      </div>

      {/* Static Info for Mobile/Accessibility */}
      <div className="p-6 md:hidden">
        <span className="text-accent-dark text-xs font-bold uppercase tracking-widest">{project.category}</span>
        <h3 className="text-xl font-display font-semibold mt-1">{project.title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
