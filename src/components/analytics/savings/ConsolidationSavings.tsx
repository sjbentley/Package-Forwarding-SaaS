
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { savingsChartConfig } from '@/config/chartConfig';
import { savingsData } from '@/data/analyticsData';
import { useTranslation } from '@/hooks/useTranslation';

const ConsolidationSavings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card className="bg-[#0D0F12] border-white/10 text-white h-full">
      <CardHeader className="space-y-1 sm:space-y-2">
        <CardTitle className="text-center text-sm sm:text-base">{t('consolidationSavings')}</CardTitle>
        <CardDescription className="text-gray-400 text-center text-xs sm:text-sm">{t('consolidationDescription')}</CardDescription>
      </CardHeader>
      <CardContent className="h-[250px] sm:h-[300px] md:h-[350px] p-1 sm:p-6 pr-2 sm:pr-4">
        <ChartContainer config={savingsChartConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={savingsData}
              margin={{ top: 10, right: 20, left: -20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
              <XAxis 
                dataKey="month" 
                stroke="#ffffff40" 
                tickLine={false}
                axisLine={false}
                fontSize={10}
                tick={{ fontSize: 10 }}
              />
              <YAxis 
                stroke="#ffffff40" 
                tickLine={false}
                axisLine={false}
                domain={[0, 'auto']}
                fontSize={10}
                tick={{ fontSize: 10 }}
              />
              <ChartTooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return <ChartTooltipContent active={active} payload={payload} label={label} />;
                  }
                  return null;
                }}
              />
              <Line 
                type="monotone" 
                dataKey="savings" 
                stroke="#9b87f5" 
                strokeWidth={3}
                dot={{ 
                  r: 4,
                  fill: "#9b87f5",
                  stroke: "#9b87f5",
                  strokeWidth: 2,
                }} 
                activeDot={{ 
                  r: 6,
                  fill: "#9b87f5", 
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <div 
              className="h-3 w-3 rounded-[2px]" 
              style={{ backgroundColor: "#9b87f5" }}
            />
            <span className="text-xs text-white/80">{t('savings')} (€)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConsolidationSavings;
