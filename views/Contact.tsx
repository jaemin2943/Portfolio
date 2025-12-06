import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-12 animate-fadeIn max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
      <p className="text-text-secondary mb-12 text-lg">
        I am currently open to work opportunities. Feel free to reach out via email or connect on social media.
      </p>
      
      <ul className="space-y-6">
        <li>
            <a href="mailto:your.email@example.com" className="flex items-center gap-4 text-xl text-text-secondary hover:text-accent transition-colors group p-4 bg-surface rounded-lg border border-transparent hover:border-accent">
                <span className="text-2xl group-hover:scale-110 transition-transform">✉️</span> 
                your.email@example.com
            </a>
        </li>
        <li>
            <a href="#" className="flex items-center gap-4 text-xl text-text-secondary hover:text-accent transition-colors group p-4 bg-surface rounded-lg border border-transparent hover:border-accent">
                <span className="text-2xl group-hover:scale-110 transition-transform">🔗</span> 
                LinkedIn Profile
            </a>
        </li>
        <li>
            <a href="#" className="flex items-center gap-4 text-xl text-text-secondary hover:text-accent transition-colors group p-4 bg-surface rounded-lg border border-transparent hover:border-accent">
                <span className="text-2xl group-hover:scale-110 transition-transform">💻</span> 
                GitHub Profile
            </a>
        </li>
        <li>
            <a href="#" className="flex items-center gap-4 text-xl text-text-secondary hover:text-accent transition-colors group p-4 bg-surface rounded-lg border border-transparent hover:border-accent">
                <span className="text-2xl group-hover:scale-110 transition-transform">🎮</span> 
                Discord: yourhandle#0000
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;