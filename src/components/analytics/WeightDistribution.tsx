
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts";
import { boxPlotData } from '@/data/analyticsData';

const weightLegendPayload = [
  { value: "Weight Range", color: "#9b87f5", payload: { fill: "#9b87f5", strokeDasharray: "none" } },
  { value: "Median", color: "#ffffff", payload: { fill: "#ffffff", strokeDasharray: "none" } },
];

const WeightDistribution: React.FC = () => {
  return (
    <Card className="bg-[#0D0F12] border-white/10 text-white h-full">
      <CardHeader className="space-y-1 sm:space-y-2">
        <CardTitle className="text-center text-sm sm:text-base">Package Weight Distribution</CardTitle>
        <CardDescription className="text-gray-400 text-center text-xs sm:text-sm">Statistical distribution of package weights</CardDescription>
      </CardHeader>
      <CardContent className="h-[250px] sm:h-[300px] md:h-[350px] p-1 sm:p-6 pr-2 sm:pr-4">
        <ChartContainer 
          config={{
            boxplot: {
              label: "Weight",
              theme: {
                light: "#9b87f5",
                dark: "#9b87f5",
              },
            },
            median: {
              label: "Median",
              theme: {
                light: "#ffffff",
                dark: "#ffffff",
              }
            }
          }} 
          className="h-full w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={boxPlotData}
              margin={{ 
                top: 20, 
                right: 20, 
                left: -20, 
                bottom: 20,
              }}
              barCategoryGap="20%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
              <XAxis 
                dataKey="category" 
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
                domain={[0, 'dataMax + 2']}
                fontSize={10}
                tick={{ fontSize: 10 }}
              />
              <ChartTooltip 
                content={({ active, payload }) => {
                  if (!active || !payload || !payload.length) return null;
                  const data = payload[0].payload;
                  return (
                    <div className="bg-[#0D0F12] border border-white/10 p-2 rounded shadow-lg">
                      <p className="text-white font-medium">{data.category}</p>
                      <p className="text-gray-300">Min: {data.min} kg</p>
                      <p className="text-gray-300">Q1: {data.q1} kg</p>
                      <p className="text-white font-medium">Median: {data.median} kg</p>
                      <p className="text-gray-300">Q3: {data.q3} kg</p>
                      <p className="text-gray-300">Max: {data.max} kg</p>
                      <p className="text-white mt-1">Count: {data.count} packages</p>
                    </div>
                  );
                }}
              />
              
              {boxPlotData.map((entry, index) => (
                <React.Fragment key={`boxplot-${entry.category}`}>
                  <Bar 
                    dataKey="q3" 
                    fill="#9b87f5"
                    radius={[4, 4, 0, 0]} 
                    name="Q3"
                    stackId={`stack-${index}`}
                    barSize={60}
                  >
                    <Cell fill="#9b87f5" />
                  </Bar>
                  <Bar 
                    dataKey={(data) => data.median - data.q1} 
                    fill="#7E69AB"
                    radius={[0, 0, 0, 0]}
                    stackId={`stack-${index}`}
                    name="Median to Q1"
                    barSize={60}
                  >
                    <Cell fill="#7E69AB" />
                  </Bar>
                  
                  <Line
                    dataKey="median"
                    stroke="#ffffff"
                    strokeWidth={2}
                    dot={false}
                    activeDot={false}
                    label={(props) => {
                      const { x, y, value } = props;
                      return (
                        <text 
                          x={x} 
                          y={y - 10} 
                          fill="#ffffff" 
                          fontSize={10} 
                          textAnchor="middle"
                        >
                          {value}kg
                        </text>
                      );
                    }}
                  />
                  
                  <Line
                    data={[
                      { category: entry.category, value: entry.min },
                      { category: entry.category, value: entry.max }
                    ]}
                    dataKey="value"
                    stroke="#D6BCFA"
                    strokeWidth={1}
                    dot={{ fill: "#D6BCFA", r: 3 }}
                  />
                </React.Fragment>
              ))}
              
              <ChartLegend
                verticalAlign="bottom"
                content={({ payload }) => {
                  if (payload && payload.length) {
                    return (
                      <ChartLegendContent 
                        payload={weightLegendPayload}
                        className="flex justify-center flex-wrap gap-2 mt-2 text-xs sm:text-sm" 
                      />
                    );
                  }
                  return null;
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default WeightDistribution;
