import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

interface ProjectsProps {
  onViewDetails: (id: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewDetails }) => {
  return (
    <div className="py-12 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-8 text-white">All Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onViewDetails={onViewDetails} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;