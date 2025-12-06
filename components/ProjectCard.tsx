import React from 'react';
import { Project } from '../types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <article className="bg-surface border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10 flex flex-col h-full group">
      <div className="h-48 bg-[#2a2e38] flex items-center justify-center text-text-secondary overflow-hidden relative">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            <span className="text-lg font-mono relative z-10">[{project.thumbnailPlaceholder}]</span>
          </>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
          {project.role}
        </span>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed">
          {project.summary}
        </p>
        <Button 
          variant="outline" 
          fullWidth 
          onClick={() => onViewDetails(project.id)}
          className="mt-auto"
        >
          View Project
        </Button>
      </div>
    </article>
  );
};

export default ProjectCard;