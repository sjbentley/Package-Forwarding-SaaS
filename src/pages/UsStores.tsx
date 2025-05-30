
import React from 'react';
import Navbar from '@/components/Navbar';
import StoreHero from '@/components/stores/StoreHero';
import ProcessStepsSection from '@/components/stores/ProcessStepsSection';
import StoreGrid from '@/components/stores/StoreGrid';
import PromoSection from '@/components/stores/PromoSection';
import StoreCTASection from '@/components/StoreCTASection';
import StoreFooter from '@/components/stores/StoreFooter';

const UsStores: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white">
      <Navbar />
      <StoreHero />
      <ProcessStepsSection />
      <StoreGrid />
      <StoreCTASection />
      <StoreFooter />
    </div>
  );
};

export default UsStores;
