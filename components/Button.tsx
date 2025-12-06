import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
  href?: string;
  download?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  href,
  download,
  ...props 
}) => {
  const baseStyles = "inline-block px-6 py-3 rounded-md font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-main text-center cursor-pointer";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20 border border-transparent",
    outline: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white"
  };

  const classes = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  // If href is provided, render an anchor tag
  if (href) {
    return (
      <a 
        href={href} 
        className={classes} 
        download={download}
        // If it's not a download link and starts with http/https, open in new tab
        target={!download && href.startsWith('http') ? "_blank" : undefined}
        rel={!download && href.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  // Otherwise render a standard button
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;