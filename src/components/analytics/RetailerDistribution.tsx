import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { RETAILER_COLORS } from '@/config/chartConfig';
import { retailerChartConfig } from '@/config/chartConfig';
import { retailerData } from '@/data/analyticsData';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from '@/hooks/useTranslation';

interface RetailerDistributionProps {
  selectedRetailer: string | null;
  onRetailerClick: (name: string) => void;
  retailerPayload: Array<{
    value: string;
    color: string;
    id: string;
    payload: {
      fill: string;
      value: number;
      strokeDasharray: string;
    };
  }>;
}

const RetailerDistribution: React.FC<RetailerDistributionProps> = ({
  selectedRetailer,
  onRetailerClick,
  retailerPayload
}) => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <Card className="bg-[#0D0F12] border-white/10 text-white flex flex-col h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-center text-sm sm:text-base md:text-lg">{t('retailerDistribution')}</CardTitle>
        <CardDescription className="text-gray-400 text-center text-xs sm:text-sm">{t('packageSourcesByRetailer')}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col items-center justify-center p-0 sm:p-2">
        <div className="w-full h-[220px] sm:h-[250px] md:h-[300px] flex items-center justify-center">
          <ChartContainer config={retailerChartConfig} className="h-full w-full max-w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <ChartTooltip content={({ active, payload }) => {
                  if (active && payload && payload.length > 0) {
                    return <ChartTooltipContent active={active} payload={payload} />;
                  }
                  return null;
                }} />
                <Pie
                  data={retailerData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={isMobile ? 65 : 80}
                  innerRadius={isMobile ? 30 : 40}
                  fill="#8884d8"
                  dataKey="value"
                  strokeWidth={2}
                  stroke="#0D0F12"
                  paddingAngle={4}
                  onClick={(data) => onRetailerClick(data.name)}
                >
                  {retailerData.map((entry, index) => (
                    <Cell 
                      key={`cell-outer-${index}`} 
                      fill={RETAILER_COLORS[index % RETAILER_COLORS.length]}
                      opacity={selectedRetailer && selectedRetailer !== entry.name ? 0.3 : 1}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
        <div className="px-2 w-full mt-4 pb-4">
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {retailerData.map((entry, index) => (
              <div 
                key={`legend-${index}`} 
                className="flex items-center gap-1.5 cursor-pointer"
                onClick={() => onRetailerClick(entry.name)}
              >
                <div 
                  className="h-2.5 w-2.5 rounded-[2px]" 
                  style={{ 
                    backgroundColor: RETAILER_COLORS[index % RETAILER_COLORS.length],
                    opacity: selectedRetailer && selectedRetailer !== entry.name ? 0.3 : 1
                  }}
                />
                <span className="text-white/80">{entry.name} ({entry.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RetailerDistribution;
