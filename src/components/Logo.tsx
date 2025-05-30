
import React from 'react';
import { cn } from '@/lib/utils';

const Logo: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <div 
      className={cn("flex items-center justify-center", className)} 
      {...props}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className="fill-current text-deutscher-purple"
      >
        <path 
          d="M50 10 L90 50 L50 90 L10 50 Z" 
          className="stroke-current text-deutscher-purple-light stroke-2"
        />
        <circle 
          cx="50" 
          cy="50" 
          r="20" 
          className="fill-current text-deutscher-purple-light"
        />
      </svg>
    </div>
  );
};

export default Logo;

