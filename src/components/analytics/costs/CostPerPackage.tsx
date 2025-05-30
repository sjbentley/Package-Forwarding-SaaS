
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';

const CostPerPackage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card className="bg-[#0D0F12] border-white/10 text-white h-full">
      <CardHeader className="space-y-1 sm:space-y-2">
        <CardTitle className="text-center text-sm sm:text-base">{t('costPerPackage')}</CardTitle>
        <CardDescription className="text-gray-400 text-center text-xs sm:text-sm">{t('averageCostTrends')}</CardDescription>
      </CardHeader>
      <CardContent className="h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-deutscher-purple-light">€7.40</div>
          <p className="text-sm sm:text-base text-gray-400 mt-2">{t('averageCostPerPackage')}</p>
          <p className="text-xs sm:text-sm text-green-400 mt-1">{t('lowerThanMarketAverage')}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CostPerPackage;