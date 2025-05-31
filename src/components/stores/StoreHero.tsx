import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const StoreHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-28 pb-16 px-4 relative overflow-visible">
      <div className="container mx-auto max-w-4xl relative text-center z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
          {t('storeHeroHeadline')}
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          {t('storeHeroSubline')}
        </p>
      </div>
      
      {/* Subtle background elements that won't block content */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute -left-10 top-20 w-40 h-40 rounded-full bg-gradient-to-r from-deutscher-purple to-deutscher-purple-light blur-3xl"></div>
        <div className="absolute right-10 bottom-10 w-60 h-60 rounded-full bg-gradient-to-l from-deutscher-purple to-deutscher-purple-light blur-3xl"></div>
      </div>
    </section>
  );
};

export default StoreHero;
