
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface StoreCardProps {
  logoSrc: string;
  name: string;
  description: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ logoSrc, name, description }) => (
  <Card className="hover:shadow-md transition-shadow bg-[#161A1F] border-white/10 text-white">
    <CardHeader className="flex items-center justify-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white overflow-hidden p-2">
        <img 
          src={logoSrc} 
          alt={name} 
          className="h-10 w-10 object-contain"
        />
      </div>
    </CardHeader>
    <CardContent className="text-center">
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </CardContent>
  </Card>
);

export default StoreCard;
