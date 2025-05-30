
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  step: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  icon, 
  title, 
  description, 
  isActive, 
  onClick, 
  step 
}) => (
  <div 
    className={`relative z-10 transform origin-left ${isActive ? 'scale-105' : 'opacity-80'} transition-all duration-300`}
    onClick={onClick}
  >
    <div className="flex flex-col md:flex-row items-start md:items-center cursor-pointer">
      <div className="flex items-center mb-4 md:mb-0">
        <div className={`${isActive ? 'bg-deutscher-purple' : 'bg-deutscher-purple-dark'} text-white rounded-full p-3 w-12 h-12 flex items-center justify-center transition-colors`}>
          {icon}
        </div>
      </div>
      
      <div className="md:ml-6 md:w-[calc(100%-60px)]">
        <h3 className={`text-xl font-semibold mb-2 ${isActive ? 'text-white' : 'text-gray-300'} transition-colors`}>
          <span className="mr-2">{step}.</span>{title}
        </h3>
        <div className={`${isActive ? 'bg-[#161A1F] border-white/10' : 'bg-[#11141A] border-white/5'} border rounded-lg p-4 transition-all`}>
          <p className="text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ProcessStep;
