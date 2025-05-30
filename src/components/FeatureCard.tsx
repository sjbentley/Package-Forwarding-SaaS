
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradientClass?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  gradientClass = "from-[#7E69AB]/20 to-[#9b87f5]/20"
}) => {
  return (
    <div className="neo-card p-6 hover:scale-[1.02] transition-all duration-300">
      <div className={`rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-br ${gradientClass} mb-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
