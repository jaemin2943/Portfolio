import React from 'react';
import Button from '../components/Button';

const Resume: React.FC = () => {
  return (
    <div className="py-12 animate-fadeIn max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-white">Resume</h2>
      
      <div className="bg-surface p-12 rounded-xl border border-border text-center">
        <p className="text-text-secondary mb-8 text-lg">
            Download my full resume to see my employment history and education details.
        </p>
        <Button>Download PDF Resume</Button>
        
        <div className="mt-12 w-full h-[600px] bg-[#2a2e38] border border-border rounded-lg flex items-center justify-center text-text-secondary font-mono">
            [ PDF Viewer Placeholder ]
        </div>
      </div>
    </div>
  );
};

export default Resume;