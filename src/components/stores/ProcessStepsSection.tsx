import React, { useState } from 'react';
import { Search, ShoppingBag, Package, Plane, Home } from 'lucide-react';
import ProcessStep from './ProcessStep';
import { useTranslation } from '@/hooks/useTranslation';

const ProcessStepsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation();

  const processSteps = [
    {
      icon: <Search className="h-5 w-5" />,
      title: t('processStepDiscoverTitle'),
      description: t('processStepDiscoverDesc')
    },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
      title: t('processStepShopTitle'),
      description: t('processStepShopDesc')
    },
    {
      icon: <Package className="h-5 w-5" />,
      title: t('processStepReceiveTitle'),
      description: t('processStepReceiveDesc')
    },
    {
      icon: <Plane className="h-5 w-5" />,
      title: t('processStepShipTitle'),
      description: t('processStepShipDesc')
    },
    {
      icon: <Home className="h-5 w-5" />,
      title: t('processStepDeliverTitle'),
      description: t('processStepDeliverDesc')
    }
  ];

  return (
    <section className="mt-[-95px] py-0 px-4 bg-[#0D0F12]">
      <div className="container mx-auto max-w-5xl">
        {/* Process Steps Timeline - Improved vertical alignment */}
        <div className="relative mt-6 mb-16 space-y-12">
          {/* Vertical timeline connector */}
          <div className="absolute left-6 top-10 h-[calc(100%-75px)] w-0.5 bg-deutscher-purple-light/30 z-0"></div>
          
          {/* Process Steps with correct alignment */}
          {processSteps.map((step, index) => (
            <ProcessStep 
              key={index}
              step={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isActive={activeStep === index}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          <div className="glass-morphism p-6 rounded-xl text-center">
            <div className="mx-auto bg-deutscher-purple/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
              <div className="h-6 w-6 text-deutscher-purple-light">✓</div>
            </div>
            <h3 className="font-bold text-lg mb-2">{t('processCardFastProcessingTitle')}</h3>
            <p className="text-gray-300 text-sm">{t('processCardFastProcessingDesc')}</p>
          </div>
          
          <div className="glass-morphism p-6 rounded-xl text-center">
            <div className="mx-auto bg-deutscher-purple/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
              <div className="h-6 w-6 text-deutscher-purple-light">✓</div>
            </div>
            <h3 className="font-bold text-lg mb-2">{t('processCard1000StoresTitle')}</h3>
            <p className="text-gray-300 text-sm">{t('processCard1000StoresDesc')}</p>
          </div>
          
          <div className="glass-morphism p-6 rounded-xl text-center">
            <div className="mx-auto bg-deutscher-purple/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
              <div className="h-6 w-6 text-deutscher-purple-light">✓</div>
            </div>
            <h3 className="font-bold text-lg mb-2">{t('processCardSaveUpTo80Title')}</h3>
            <p className="text-gray-300 text-sm">{t('processCardSaveUpTo80Desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessStepsSection;
