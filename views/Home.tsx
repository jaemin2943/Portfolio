import React from 'react';
import { PROJECTS, SKILLS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { ViewState } from '../types';

interface HomeProps {
  onNavigate: (view: ViewState, payload?: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section id="home" className="text-center py-24 flex flex-col items-center min-h-[60vh] justify-center">
        
        {/* Profile Pic Circle Frame */}
        <div className="w-40 h-40 rounded-full border-4 border-accent overflow-hidden mb-8 shadow-2xl shadow-accent/20 bg-surface">
             {/* Using absolute path /assets/profile.jpg to ensure it resolves from root */}
             <img src="/assets/profile.jpg" alt="Profile" className="w-full h-full object-cover" onError={(e) => {
                 // Fallback if image not found
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                 e.currentTarget.parentElement!.innerHTML = '<span class="text-4xl">👾</span>';
             }} />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-text-secondary">
          Jae Min Hyun
        </h1>
        <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
          Creating immersive systems, tight mechanics, and player-focused experiences using Unity and Unreal.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" onClick={() => scrollToSection('projects')}>
            View My Projects
          </Button>
          <Button variant="outline" href="/resume.pdf" download>
            Download Resume
          </Button>
          <Button variant="outline" onClick={() => scrollToSection('contact')}>
            Contact Info
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-border/50">
        <h2 className="text-3xl font-bold mb-12 text-white text-center">Projects</h2>
        
        {/* Adjusted Grid for 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PROJECTS.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onViewDetails={(id) => onNavigate('project-detail', id)} 
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">About Me</h2>
          
          <div className="mb-16 text-center md:text-left">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I am a Gameplay Programmer and Designer based in [Location]. With a background in Computer Science and a lifelong love for games, I bridge the gap between technical constraints and creative vision.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
               I thrive in collaborative environments where I can build tools that empower artists and designers. My goal is always to create "sticky" interactions that feel good to play from the very first frame.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            <div>
                <h4 className="text-accent font-bold mb-4 border-b border-border pb-2">Game Design</h4>
                <ul className="space-y-2">
                    {SKILLS.design.map(skill => <li key={skill} className="text-text-secondary">{skill}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="text-accent font-bold mb-4 border-b border-border pb-2">Technical Skills</h4>
                <ul className="space-y-2">
                    {SKILLS.technical.map(skill => <li key={skill} className="text-text-secondary">{skill}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="text-accent font-bold mb-4 border-b border-border pb-2">Tools & Software</h4>
                <ul className="space-y-2">
                    {SKILLS.tools.map(skill => <li key={skill} className="text-text-secondary">{skill}</li>)}
                </ul>
            </div>
          </div>

          <div className="bg-surface p-8 rounded-xl border border-border">
              <h4 className="text-xl font-bold text-white mb-4">Personal Interests</h4>
              <p className="text-text-secondary">
                When I'm not coding, I'm usually analyzing the mechanics of <em>Hollow Knight</em>, playing TTRPGs like Dungeons & Dragons, or hiking.
              </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-border/50">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold mb-8 text-white text-center">Get In Touch</h2>
           <p className="text-text-secondary mb-12 text-lg text-center">
              I am currently open to work opportunities. Feel free to reach out via email or connect on social media.
           </p>
           
           <ul className="space-y-6">
              <li>
                  <a href="mailto:your.email@example.com" className="flex items-center gap-4 text-xl text-text-secondary hover:text-accent transition-colors group p-4 bg-surface rounded-lg border border-transparent hover:border-accent">
                      <span className="text-2xl group-hover:scale-110 transition-transform">✉️</span> 
                      hyun.ja@northeastern.edu
                  </a>
              </li>
              <li>
                  <a href="#" className="flex items-center gap-4 text-xl text-text-secondary hover:text-accent transition-colors group p-4 bg-surface rounded-lg border border-transparent hover:border-accent">
                      <span className="text-2xl group-hover:scale-110 transition-transform">🔗</span> 
                      LinkedIn Profile: http://linkedin.com/in/jae-min-hyun/
                  </a>
              </li>
              <li>
                  <a href="#" className="flex items-center gap-4 text-xl text-text-secondary hover:text-accent transition-colors group p-4 bg-surface rounded-lg border border-transparent hover:border-accent">
                      <span className="text-2xl group-hover:scale-110 transition-transform">🎮</span> 
                      Discord: jaemin2943
                  </a>
              </li>
           </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;