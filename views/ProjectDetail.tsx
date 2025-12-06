import React from 'react';
import { Project } from '../types';
import Button from '../components/Button';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const details = project.details;

  // Fallback if details are missing
  if (!details) {
    return (
        <div className="py-12 text-center animate-fadeIn">
            <h2 className="text-2xl text-white mb-4">Details coming soon...</h2>
            <Button variant="outline" onClick={onBack}>← Back to Projects</Button>
        </div>
    )
  }

  return (
    <div className="py-8 animate-fadeIn max-w-4xl mx-auto">
      <button 
        onClick={onBack} 
        className="mb-8 px-4 py-2 border border-accent text-accent rounded hover:bg-accent hover:text-white transition-colors text-sm font-medium"
      >
        ← Back to Projects
      </button>

      {/* Header */}
      <div className="border-b border-border pb-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">{project.title}</h1>
        
        <div className="flex flex-wrap gap-8 md:gap-12">
          <div>
            <strong className="block text-white text-sm font-bold uppercase tracking-wide mb-1">Role</strong>
            <span className="text-text-secondary">{project.role}</span>
          </div>
          <div>
            <strong className="block text-white text-sm font-bold uppercase tracking-wide mb-1">Engine</strong>
            <span className="text-text-secondary">{details.engine}</span>
          </div>
          <div>
            <strong className="block text-white text-sm font-bold uppercase tracking-wide mb-1">Team Size</strong>
            <span className="text-text-secondary">{details.teamSize}</span>
          </div>
          <div>
            <strong className="block text-white text-sm font-bold uppercase tracking-wide mb-1">Duration</strong>
            <span className="text-text-secondary">{details.duration}</span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold text-white mb-4">Overview</h3>
        <p className="text-text-secondary leading-relaxed text-lg">{details.overview}</p>
      </section>

      {/* Contributions */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold text-white mb-6">My Contributions</h3>
        <div className="space-y-6">
          {details.contributions.map((group, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold text-white mb-3">{group.category}</h4>
              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <li key={i} className="text-text-secondary relative pl-6">
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Solving / Before After */}
      {details.problemSolving && (
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Problem Solving</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface p-6 rounded-lg border border-border">
              <h4 className="text-accent font-bold mb-3 uppercase text-sm tracking-wide">The Problem</h4>
              <p className="text-text-secondary">{details.problemSolving.problem}</p>
            </div>
            <div className="bg-surface p-6 rounded-lg border border-border">
              <h4 className="text-accent font-bold mb-3 uppercase text-sm tracking-wide">The Solution & Result</h4>
              <p className="text-text-secondary">{details.problemSolving.solution}</p>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold text-white mb-6">Media Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Render actual images if available, otherwise placeholders */}
          {details.galleryImages && details.galleryImages.length > 0 ? (
             details.galleryImages.map((imgSrc, i) => (
                <div key={i} className="h-48 rounded-lg overflow-hidden border border-border bg-[#2a2e38] shadow-lg">
                    <img src={imgSrc} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
             ))
          ) : (
             details.galleryPlaceholders.map((ph, i) => (
                <div key={i} className="h-48 bg-[#2a2e38] rounded-lg flex items-center justify-center text-text-secondary border border-border font-mono text-sm">
                  [{ph}]
                </div>
             ))
          )}
        </div>
      </section>

      {/* Takeaways */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-accent/10 to-accent-hover/10 border border-accent/30 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-6">Key Takeaways</h3>
          <ul className="space-y-3">
            {details.takeaways.map((item, i) => (
              <li key={i} className="text-text-secondary relative pl-6">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-accent rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;