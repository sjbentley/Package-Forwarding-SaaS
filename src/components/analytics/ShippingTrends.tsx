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
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { packageChartConfig } from '@/config/chartConfig';
import { monthlyData } from '@/data/analyticsData';
import { useTranslation } from '@/hooks/useTranslation';

const ShippingTrends: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card className="bg-[#0D0F12] border-white/10 text-white h-full">
      <CardHeader className="space-y-1 sm:space-y-2">
        <CardTitle className="text-center text-sm sm:text-base">{t('shippingVolumeTrends')}</CardTitle>
        <CardDescription className="text-gray-400 text-center text-xs sm:text-sm">{t('historicalDataWithForecast')}</CardDescription>
      </CardHeader>
      <CardContent className="h-[250px] sm:h-[300px] md:h-[350px] p-1 sm:p-6 pr-2 sm:pr-4">
        <ChartContainer config={packageChartConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={monthlyData}
              margin={{
                top: 10,
                right: 20,
                left: -20,
                bottom: 20,
              }}
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
              <Area 
                type="monotone" 
                dataKey="packages" 
                stroke="#9b87f5" 
                strokeWidth={2}
                fill="#9b87f5" 
                fillOpacity={0.3} 
              />
              <Line
                type="monotone"
                dataKey="forecast"
                stroke="#6E59A5"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "#6E59A5", stroke: "#6E59A5", r: 4 }}
              />
              
              <ChartLegend
                verticalAlign="bottom"
                content={({ payload }) => {
                  if (payload && payload.length) {
                    return (
                      <ChartLegendContent 
                        payload={[
                          { value: t('historicalData'), color: "#9b87f5", dataKey: "packages" },
                          { value: t('forecast'), color: "#6E59A5", dataKey: "forecast" }
                        ]}
                        className="flex items-center justify-center mt-2 gap-4 text-xs sm:text-sm" 
                        layout="horizontal"
                      />
                    );
                  }
                  return null;
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ShippingTrends;
