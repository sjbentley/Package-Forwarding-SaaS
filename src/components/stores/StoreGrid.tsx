
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

const StoreGrid: React.FC = () => {
  const stores = [
    {
      logoSrc: target,
      name: 'Target',
      description: 'Home goods, apparel, electronics and more'
    },
    {
      logoSrc: nike,
      name: 'Nike',
      description: 'Athletic footwear and sportswear'
    },
    {
      logoSrc: bestBuy,
      name: 'Best Buy',
      description: 'Consumer electronics and appliances'
    },
    {
      logoSrc: nordstrom,
      name: 'Nordstrom',
      description: 'Luxury department store'
    },
    {
      logoSrc: bathBodyWorks,
      name: 'Bath & Body Works',
      description: 'Personal care and fragrances'
    },
    {
      logoSrc: macys,
      name: 'Macy\'s',
      description: 'Department store with clothing and home goods'
    },
    {
      logoSrc: costco,
      name: 'Costco',
      description: 'Wholesale warehouse club'
    },
    {
      logoSrc: bananaRepublic,
      name: 'Banana Republic',
      description: 'Upscale clothing and accessories'
    },
    {
      logoSrc: walmart,
      name: 'Walmart',
      description: 'Everyday low prices on a wide range of products'
    },
    {
      logoSrc: urbanOutfitters,
      name: 'Urban Outfitters',
      description: 'Trendy clothing and lifestyle products'
    },
    {
      logoSrc: ross,
      name: 'Ross',
      description: 'Discount department store with brand names'
    },
    {
      logoSrc: ulta,
      name: 'Ulta Beauty',
      description: 'Beauty products and salon services'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center text-gradient">
          Popular U.S. Stores
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
