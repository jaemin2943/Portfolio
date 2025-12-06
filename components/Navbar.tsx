import React from 'react';
import { NavProps, ViewState } from '../types';

const Navbar: React.FC<NavProps> = ({ currentView, onNavigate }) => {
  
  const handleNavClick = (sectionId: string) => {
    onNavigate('home', sectionId);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-main/95 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-[1100px] mx-auto px-5 py-4 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigate('home'); }} 
          className="font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity"
        >
          DEV<span className="text-accent">PORTFOLIO</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          <li>
            <button 
              onClick={() => onNavigate('home')}
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors duration-300"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('projects')}
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors duration-300"
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors duration-300"
            >
              About
            </button>
          </li>
          <li>
             <button 
              onClick={() => handleNavClick('contact')}
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors duration-300"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Icon (Placeholder) */}
        <button className="md:hidden text-white" onClick={() => onNavigate('home')}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;