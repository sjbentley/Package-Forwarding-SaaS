import React from 'react';
import StoreCard from './StoreCard';
import target from '@/assets/logos/target.svg';
import nike from '@/assets/logos/nike.svg';
import bestBuy from '@/assets/logos/best-buy.svg';
import nordstrom from '@/assets/logos/nordstrom.svg';
import bathBodyWorks from '@/assets/logos/bath-body-works.svg';
import macys from '@/assets/logos/macys.svg';
import costco from '@/assets/logos/costco.svg';
import bananaRepublic from '@/assets/logos/banana-republic.svg';
import walmart from '@/assets/logos/walmart.svg';
import urbanOutfitters from '@/assets/logos/urban-outfitters-1.svg';
import ross from '@/assets/logos/ross.svg';
import ulta from '@/assets/logos/ulta-beauty.svg';
import { useTranslation } from '@/hooks/useTranslation';

const StoreGrid: React.FC = () => {
  const { t } = useTranslation();

  const stores = [
    {
      logoSrc: target,
      name: t('storeTarget'),
      description: t('storeTargetDesc')
    },
    {
      logoSrc: nike,
      name: t('storeNike'),
      description: t('storeNikeDesc')
    },
    {
      logoSrc: bestBuy,
      name: t('storeBestBuy'),
      description: t('storeBestBuyDesc')
    },
    {
      logoSrc: nordstrom,
      name: t('storeNordstrom'),
      description: t('storeNordstromDesc')
    },
    {
      logoSrc: bathBodyWorks,
      name: t('storeBathBodyWorks'),
      description: t('storeBathBodyWorksDesc')
    },
    {
      logoSrc: macys,
      name: t('storeMacys'),
      description: t('storeMacysDesc')
    },
    {
      logoSrc: costco,
      name: t('storeCostco'),
      description: t('storeCostcoDesc')
    },
    {
      logoSrc: bananaRepublic,
      name: t('storeBananaRepublic'),
      description: t('storeBananaRepublicDesc')
    },
    {
      logoSrc: walmart,
      name: t('storeWalmart'),
      description: t('storeWalmartDesc')
    },
    {
      logoSrc: urbanOutfitters,
      name: t('storeUrbanOutfitters'),
      description: t('storeUrbanOutfittersDesc')
    },
    {
      logoSrc: ross,
      name: t('storeRoss'),
      description: t('storeRossDesc')
    },
    {
      logoSrc: ulta,
      name: t('storeUltaBeauty'),
      description: t('storeUltaBeautyDesc')
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center text-gradient">
          {t('storeGridHeadline')}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {stores.map((store, index) => (
            <StoreCard key={index} {...store} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreGrid;
