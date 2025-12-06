import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-8 text-center text-text-secondary text-sm mt-auto bg-main">
      <div className="container mx-auto px-5">
        <p>&copy; {new Date().getFullYear()} Name Surname. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;