
import React from 'react';
import { Package, PackageCheck, Truck, Globe, Activity } from 'lucide-react';

const PackageVisualization = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deutscher-purple-darker via-[#1A1F2C] to-black opacity-70"></div>

      {/* Animated packages */}
      <div className="absolute top-1/4 left-1/4 animate-float neo-card p-4 w-16 h-16 flex items-center justify-center">
        <Package className="text-deutscher-purple-light h-8 w-8" />
      </div>
      
      <div className="absolute top-1/3 right-1/3 animate-float delay-75 neo-card p-4 w-16 h-16 flex items-center justify-center">
        <PackageCheck className="text-deutscher-purple-light h-8 w-8" />
      </div>
      
      <div className="absolute bottom-1/3 left-1/3 animate-float delay-150 neo-card p-4 w-16 h-16 flex items-center justify-center">
        <Truck className="text-deutscher-purple-light h-8 w-8" />
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 animate-float delay-300 neo-card p-4 w-16 h-16 flex items-center justify-center">
        <Globe className="text-deutscher-purple-light h-8 w-8" />
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <line x1="25%" y1="25%" x2="33%" y2="33%" stroke="#9b87f5" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="33%" y1="33%" x2="66%" y2="33%" stroke="#9b87f5" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="66%" y1="33%" x2="75%" y2="25%" stroke="#9b87f5" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="75%" y1="25%" x2="75%" y2="75%" stroke="#9b87f5" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="75%" y1="75%" x2="66%" y2="66%" stroke="#9b87f5" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="66%" y1="66%" x2="33%" y2="66%" stroke="#9b87f5" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="33%" y1="66%" x2="25%" y2="75%" stroke="#9b87f5" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="25%" y1="75%" x2="25%" y2="25%" stroke="#9b87f5" strokeWidth="1" strokeDasharray="5,5" />
      </svg>

      {/* Central node */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow">
        <div className="neo-card p-6 w-24 h-24 rounded-full flex items-center justify-center">
          <Activity className="text-deutscher-purple-light h-12 w-12" />
        </div>
      </div>
    </div>
  );
};

export default PackageVisualization;
