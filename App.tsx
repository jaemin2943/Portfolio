import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import ProjectDetail from './views/ProjectDetail';
import { ViewState } from './types';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Helper to handle view switching and scrolling
  const handleNavigate = (view: ViewState, payload?: string) => {
    if (view === 'project-detail' && payload) {
      setSelectedProjectId(payload);
      setCurrentView('project-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'home') {
      setCurrentView('home');
      // If payload is provided, it's a section ID to scroll to
      if (payload) {
        // Use timeout to ensure DOM is rendered if switching from detail view
        setTimeout(() => {
          const element = document.getElementById(payload);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'project-detail':
        const project = PROJECTS.find(p => p.id === selectedProjectId);
        if (!project) return <Home onNavigate={handleNavigate} />;
        return <ProjectDetail project={project} onBack={() => handleNavigate('home', 'projects')} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-main text-white font-sans selection:bg-accent selection:text-white">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow pt-20 px-5 w-full max-w-[1100px] mx-auto">
        {renderView()}
      </main>

      <Footer />
    </div>
  );
};

export default App;