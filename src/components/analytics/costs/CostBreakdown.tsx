
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';

const CostBreakdown: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card className="bg-[#0D0F12] border-white/10 text-white">
      <CardHeader className="space-y-1 sm:space-y-2">
        <CardTitle className="text-sm sm:text-base">{t('costBreakdown')}</CardTitle>
        <CardDescription className="text-xs sm:text-sm text-gray-400">{t('costBreakdownDescription')}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 text-center">
          <div className="p-2 sm:p-3 md:p-4 rounded-lg bg-white/5">
            <p className="text-xs sm:text-sm text-gray-400 mb-1">{t('baseShipping')}</p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold">65%</p>
          </div>
          <div className="p-2 sm:p-3 md:p-4 rounded-lg bg-white/5">
            <p className="text-xs sm:text-sm text-gray-400 mb-1">{t('customsDuties')}</p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold">15%</p>
          </div>
          <div className="p-2 sm:p-3 md:p-4 rounded-lg bg-white/5">
            <p className="text-xs sm:text-sm text-gray-400 mb-1">{t('handlingFees')}</p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold">12%</p>
          </div>
          <div className="p-2 sm:p-3 md:p-4 rounded-lg bg-white/5">
            <p className="text-xs sm:text-sm text-gray-400 mb-1">{t('insurance')}</p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold">8%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CostBreakdown;