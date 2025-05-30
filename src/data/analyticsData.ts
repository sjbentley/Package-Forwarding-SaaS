
export const monthlyData = [
  { name: 'Jan', packages: 12, boxes: 8, envelopes: 4, costs: 89, forecast: null, forecastLower: null, forecastUpper: null },
  { name: 'Feb', packages: 19, boxes: 12, envelopes: 7, costs: 142, forecast: null, forecastLower: null, forecastUpper: null },
  { name: 'Mar', packages: 15, boxes: 9, envelopes: 6, costs: 112, forecast: null, forecastLower: null, forecastUpper: null },
  { name: 'Apr', packages: 27, boxes: 16, envelopes: 11, costs: 197, forecast: null, forecastLower: null, forecastUpper: null },
  { name: 'May', packages: 29, boxes: 18, envelopes: 11, costs: 212, forecast: 29, forecastLower: null, forecastUpper: null },
  { name: 'Jun', packages: 35, boxes: 22, envelopes: 13, costs: 254, forecast: 35, forecastLower: null, forecastUpper: null },
  { name: 'Jul', packages: null, boxes: null, envelopes: null, costs: null, forecast: 38, forecastLower: null, forecastUpper: null },
  { name: 'Aug', packages: null, boxes: null, envelopes: null, costs: null, forecast: 42, forecastLower: null, forecastUpper: null },
  { name: 'Sep', packages: null, boxes: null, envelopes: null, costs: null, forecast: 45, forecastLower: null, forecastUpper: null },
];

export const retailerData = [
  { name: 'Amazon', value: 45 },
  { name: 'Walmart', value: 20 },
  { name: 'Best Buy', value: 15 },
  { name: 'Target', value: 10 },
  { name: 'Others', value: 10 },
];

export const radarData = [
  { name: 'Electronics', value: 35, fullMark: 50 },
  { name: 'Clothing', value: 25, fullMark: 50 },
  { name: 'Home Goods', value: 15, fullMark: 50 },
  { name: 'Books & Media', value: 15, fullMark: 50 },
  { name: 'Health & Beauty', value: 10, fullMark: 50 },
];

export const savingsData = [
  { month: 'Jan', savings: 32 },
  { month: 'Feb', savings: 48 },
  { month: 'Mar', savings: 40 },
  { month: 'Apr', savings: 67 },
  { month: 'May', savings: 74 },
  { month: 'Jun', savings: 91 },
];

export const boxPlotData = [
  { category: '0-1kg', min: 0.2, q1: 0.4, median: 0.6, q3: 0.8, max: 1.0, count: 35 },
  { category: '1-2kg', min: 1.1, q1: 1.3, median: 1.5, q3: 1.7, max: 2.0, count: 25 },
  { category: '2-5kg', min: 2.2, q1: 2.8, median: 3.5, q3: 4.2, max: 5.0, count: 18 },
  { category: '5-10kg', min: 5.5, q1: 6.2, median: 7.5, q3: 8.8, max: 10.0, count: 12 },
  { category: '10kg+', min: 10.5, q1: 11.3, median: 12.5, q3: 14.8, max: 18.2, count: 10 },
];
