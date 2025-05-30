
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { COLORS, RETAILER_COLORS } from '@/config/chartConfig';
import { radarData, retailerData } from '@/data/analyticsData';
import { useTranslation } from '@/hooks/useTranslation';

// Import our new components
import PackageTypeAnalysis from './analytics/PackageTypeAnalysis';
import RetailerDistribution from './analytics/RetailerDistribution';
import ShippingTrends from './analytics/ShippingTrends';
import WeightDistribution from './analytics/WeightDistribution';
import MonthlyCosts from './analytics/costs/MonthlyCosts';
import CostPerPackage from './analytics/costs/CostPerPackage';
import CostBreakdown from './analytics/costs/CostBreakdown';
import ConsolidationSavings from './analytics/savings/ConsolidationSavings';
import TotalSavings from './analytics/savings/TotalSavings';

const DashboardAnalytics = () => {
  const [selectedRetailer, setSelectedRetailer] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleRetailerClick = (retailer: string) => {
    setSelectedRetailer(prevRetailer => prevRetailer === retailer ? null : retailer);
  };

  const filteredRadarData = selectedRetailer 
    ? radarData.map(item => ({
        ...item,
        value: item.value * (Math.random() * 0.5 + 0.5) // Simulate filtered data
      }))
    : radarData;

  interface DataItem {
    name: string;
    value: number;
  }

  const createCustomPayload = (data: DataItem[], colorPalette: string[]) => {
    return data.map((item, index) => ({
      value: item.name,
      color: colorPalette[index % colorPalette.length],
      id: item.name,
      payload: {
        fill: colorPalette[index % colorPalette.length],
        value: item.value,
        strokeDasharray: "none"
      }
    }));
  };

  const radarPayload = createCustomPayload(filteredRadarData, COLORS);
  const retailerPayload = createCustomPayload(retailerData, RETAILER_COLORS);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{t('dashboardTitle')}</h1>
        <p className="text-sm sm:text-base text-gray-300">{t('dashboardDescription')}</p>
      </div>
      
      <Tabs defaultValue="shipping" className="w-full">
        <TabsList className="grid w-full max-w-[280px] sm:max-w-md grid-cols-3 mb-4 bg-white/5 mx-auto">
          <TabsTrigger className="text-xs sm:text-sm" value="shipping">{t('shippingTab')}</TabsTrigger>
          <TabsTrigger className="text-xs sm:text-sm" value="costs">{t('costsTab')}</TabsTrigger>
          <TabsTrigger className="text-xs sm:text-sm" value="savings">{t('savingsTab')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="shipping" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PackageTypeAnalysis
              filteredData={filteredRadarData}
              radarPayload={radarPayload}
            />
            <RetailerDistribution
              selectedRetailer={selectedRetailer}
              onRetailerClick={handleRetailerClick}
              retailerPayload={retailerPayload}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ShippingTrends />
            <WeightDistribution />
          </div>
        </TabsContent>
        
        <TabsContent value="costs" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MonthlyCosts />
            <CostPerPackage />
          </div>
          <CostBreakdown />
        </TabsContent>
        
        <TabsContent value="savings" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ConsolidationSavings />
            <TotalSavings />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardAnalytics;