import React from 'react';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-12 animate-fadeIn max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
      
      <div className="mb-16">
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
  );
};

export default About;