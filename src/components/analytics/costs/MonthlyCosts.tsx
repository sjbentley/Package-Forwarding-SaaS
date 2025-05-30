
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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { costChartConfig } from '@/config/chartConfig';
import { monthlyData } from '@/data/analyticsData';
import { useTranslation } from '@/hooks/useTranslation';

const MonthlyCosts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card className="bg-[#0D0F12] border-white/10 text-white h-full">
      <CardHeader className="space-y-1 sm:space-y-2">
        <CardTitle className="text-center text-sm sm:text-base">Monthly Shipping Costs</CardTitle>
        <CardDescription className="text-gray-400 text-center text-xs sm:text-sm">Expenses over time (in €)</CardDescription>
      </CardHeader>
      <CardContent className="h-[250px] sm:h-[300px] md:h-[350px] p-1 sm:p-6 pr-2 sm:pr-4">
        <ChartContainer config={costChartConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={monthlyData}
              margin={{ top: 10, right: 20, left: -20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
              <XAxis 
                dataKey="name" 
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
                cursor={{fill: 'rgba(155, 135, 245, 0.1)'}}
              />
              <Bar 
                dataKey="costs" 
                fill="#9b87f5"
                radius={[4, 4, 0, 0]} 
                barSize={25}
                activeBar={{ fill: "#9b87f5", opacity: 0.9 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <div 
              className="h-3 w-3 rounded-[2px]" 
              style={{ backgroundColor: "#9b87f5" }}
            />
            <span className="text-xs text-white/80">{t('costs')} (€)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyCosts;