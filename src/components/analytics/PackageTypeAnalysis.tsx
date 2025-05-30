
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { COLORS } from '@/config/chartConfig';
import { packageTypeConfig } from '@/config/chartConfig';
import { radarData } from '@/data/analyticsData';
import { useIsMobile } from '@/hooks/use-mobile';

interface PackageTypeAnalysisProps {
  filteredData: typeof radarData;
  radarPayload: Array<{
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

const PackageTypeAnalysis: React.FC<PackageTypeAnalysisProps> = ({ filteredData, radarPayload }) => {
  const isMobile = useIsMobile();
  
  return (
    <Card className="bg-[#0D0F12] border-white/10 text-white flex flex-col h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-center text-sm sm:text-base md:text-lg">Package Type Analysis</CardTitle>
        <CardDescription className="text-gray-400 text-center text-xs sm:text-sm">Distribution by category</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col items-center justify-center p-0 sm:p-2">
        <div className="w-full h-[220px] sm:h-[250px] md:h-[300px] flex items-center justify-center">
          <ChartContainer config={packageTypeConfig} className="h-full w-full max-w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart 
                cx="50%" 
                cy="50%" 
                outerRadius={isMobile ? "65%" : "70%"}
                data={filteredData}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
              >
                <PolarGrid stroke="#ffffff20" />
                <PolarAngleAxis 
                  dataKey="name" 
                  stroke="#ffffff60" 
                  fontSize={isMobile ? 8 : 10} 
                  tickLine={false}
                />
                <PolarRadiusAxis 
                  stroke="#ffffff40" 
                  fontSize={8} 
                  tickCount={4} 
                  axisLine={false} 
                  tick={!isMobile}
                />
                <ChartTooltip content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return <ChartTooltipContent active={active} payload={payload} label={label} />;
                  }
                  return null;
                }} />
                <Radar 
                  name="Package Types" 
                  dataKey="value" 
                  stroke="#9b87f5" 
                  fill="#9b87f5" 
                  fillOpacity={0.6} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
        <div className="px-2 w-full mt-4 pb-4">
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {filteredData.map((entry, index) => (
              <div key={`legend-${index}`} className="flex items-center gap-1.5">
                <div 
                  className="h-2.5 w-2.5 rounded-[2px]" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
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

export default PackageTypeAnalysis;
