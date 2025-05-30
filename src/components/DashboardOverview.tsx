import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, ShoppingCart, TruckIcon, BarChart2 } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
} from "recharts";

const chartData = [
  { name: 'Jan', value: 12 },
  { name: 'Feb', value: 19 },
  { name: 'Mar', value: 15 },
  { name: 'Apr', value: 27 },
  { name: 'May', value: 29 },
  { name: 'Jun', value: 35 },
  { name: 'Jul', value: 40 },
  { name: 'Aug', value: 32 },
  { name: 'Sep', value: 45 },
  { name: 'Oct', value: 28 },
  { name: 'Nov', value: 36 },
  { name: 'Dec', value: 42 },
];

const costChartData = chartData.map(item => ({ 
  name: item.name, 
  value: item.value * 7.5 
}));

const recentShipments = [
  { id: 'SHP-1234', name: 'Amazon Package', status: 'At Warehouse', date: '2025-04-14' },
  { id: 'SHP-1235', name: 'Consolidated Electronics', status: 'In Transit', date: '2025-04-10' },
  { id: 'SHP-1236', name: 'Best Buy Order', status: 'Delivered', date: '2025-04-05' },
];

const chartConfig = {
  packages: {
    label: "Packages",
    theme: {
      light: "#9b87f5",
      dark: "#9b87f5",
    },
  },
  costs: {
    label: "Costs",
    theme: {
      light: "#F97316",
      dark: "#F97316",
    },
  },
};

const DashboardOverview = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-white">{t('dashboardOverviewTitle')}</h1>
      <p className="text-gray-300">{t('dashboardOverviewDescription')}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#0D0F12] border-white/10 text-white h-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">{t('totalPackages')}</CardTitle>
            <Package className="h-4 w-4 text-deutscher-purple-light" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-green-400 mt-1">{t('fromLastMonth')}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#0D0F12] border-white/10 text-white h-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">{t('savedOnShipping')}</CardTitle>
            <ShoppingCart className="h-4 w-4 text-deutscher-purple-light" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€342.50</div>
            <p className="text-xs text-green-400 mt-1">{t('costOptimization')}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#0D0F12] border-white/10 text-white h-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">{t('inTransit')}</CardTitle>
            <TruckIcon className="h-4 w-4 text-deutscher-purple-light" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-orange-400 mt-1">{t('estimatedArrival')}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#0D0F12] border-white/10 text-white h-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">{t('consolidationRate')}</CardTitle>
            <BarChart2 className="h-4 w-4 text-deutscher-purple-light" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-green-400 mt-1">{t('aiOptimizedPackaging')}</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2 bg-[#0D0F12] border-white/10 text-white h-full">
          <CardHeader>
            <CardTitle>{t('shippingActivity')}</CardTitle>
            <CardDescription className="text-gray-400">{t('monthlyActivity')}</CardDescription>
          </CardHeader>
          <CardContent className="p-1 sm:p-6 pr-4 sm:pr-6">
            <Tabs defaultValue="packages" className="w-full">
              <TabsList className="grid w-full max-w-xs grid-cols-2 bg-white/5 mx-auto mb-6">
                <TabsTrigger value="packages">{t('packages')}</TabsTrigger>
                <TabsTrigger value="costs">{t('costsTab')}</TabsTrigger>
              </TabsList>
              <TabsContent value="packages" className="h-[300px] sm:h-[350px] mt-4 pr-2 sm:pr-4">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      margin={{ top: 10, right: 20, left: -20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                      <XAxis
                        dataKey="name"
                        stroke="#ffffff40"
                        tickLine={false}
                        axisLine={false}
                        fontSize={12}
                        tick={{ fontSize: 10 }}
                      />
                      <YAxis 
                        stroke="#ffffff40" 
                        tickLine={false} 
                        axisLine={false}
                        domain={[0, 'auto']}
                        fontSize={12}
                        tick={{ fontSize: 10 }}
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent />}
                        cursor={{ fill: 'rgba(155, 135, 245, 0.1)' }}
                      />
                      <Bar
                        type="monotone"
                        dataKey="value"
                        name="Packages"
                        stroke="var(--color-packages)"
                        fill="var(--color-packages)"
                        barSize={30}
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </TabsContent>
              <TabsContent value="costs" className="h-[300px] sm:h-[350px] mt-4 pr-2 sm:pr-4">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={costChartData}
                      margin={{ top: 10, right: 20, left: -20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                      <XAxis
                        dataKey="name"
                        stroke="#ffffff40"
                        tickLine={false}
                        axisLine={false}
                        fontSize={12}
                        tick={{ fontSize: 10 }}
                      />
                      <YAxis 
                        stroke="#ffffff40" 
                        tickLine={false} 
                        axisLine={false}
                        domain={[0, 'auto']}
                        fontSize={12}
                        tick={{ fontSize: 10 }}
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent labelKey="costs" />}
                        cursor={false}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="var(--color-costs)"
                        fill="url(#costs-gradient)"
                        fillOpacity={0.2}
                        strokeWidth={2}
                        activeDot={{
                          r: 6,
                          style: { fill: "#F97316", opacity: 0.8 },
                        }}
                      />
                      <defs>
                        <linearGradient id="costs-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F97316" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card className="bg-[#0D0F12] border-white/10 text-white h-full">
          <CardHeader>
            <CardTitle>{t('recentShipments')}</CardTitle>
            <CardDescription className="text-gray-400">{t('latestActivity')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentShipments.map((shipment) => (
                <div key={shipment.id} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                  <div>
                    <p className="font-medium text-white">{shipment.name}</p>
                    <p className="text-xs text-gray-400">{shipment.id} • {shipment.date}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    shipment.status === 'Delivered' 
                      ? 'bg-green-500/20 text-green-400' 
                      : shipment.status === 'In Transit' 
                        ? 'bg-orange-500/20 text-orange-400'
                        : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {shipment.status}
                  </div>
                </div>
              ))}
              <button className="text-sm text-deutscher-purple-light hover:text-deutscher-purple transition-colors w-full text-center mt-2">
                {t('viewAllShipments')}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-[#0D0F12] border-white/10 text-white">
        <CardHeader>
          <CardTitle>{t('optimizationSuggestions')}</CardTitle>
          <CardDescription className="text-gray-400">{t('aiPoweredRecommendations')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-medium">{t('consolidationOpportunity')}</h4>
                <span className="text-sm text-green-400">{t('saveAmount')}</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">{t('consolidationExplanation')}</p>
              <Progress value={92} className="h-2 bg-white/10" indicatorClassName="bg-deutscher-purple" />
              <p className="text-xs text-gray-500 mt-1">{t('optimalPackaging')}</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-medium">{t('warehouseAlert')}</h4>
                <span className="text-sm text-orange-400">{t('actSoon')}</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">{t('storageExplanation')}</p>
              <Progress value={65} className="h-2 bg-white/10" indicatorClassName="bg-orange-400" />
              <p className="text-xs text-gray-500 mt-1">{t('daysRemaining')}</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-medium">{t('premiumOpportunity')}</h4>
                <span className="text-sm text-blue-400">{t('timeSensitive')}</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">{t('upgradeExplanation')}</p>
              <Progress value={40} className="h-2 bg-white/10" indicatorClassName="bg-blue-500" />
              <p className="text-xs text-gray-500 mt-1">{t('recommendedItems')}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
