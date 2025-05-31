import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from './ui/button';
import { Package2, BarChart2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslation } from '@/hooks/useTranslation';

const ShippingCalculator = () => {
  const { t } = useTranslation();
  const [weight, setWeight] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [destination, setDestination] = useState('berlin');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [result, setResult] = useState<null | { price: string; time: string }>(null);

  const calculateShipping = () => {
    const w = parseFloat(weight) || 0;
    const l = parseFloat(length) || 0;
    const wd = parseFloat(width) || 0;
    const h = parseFloat(height) || 0;
    const volume = l * wd * h / 5000;
    const calculatedWeight = Math.max(w, volume);

    let baseRate = 0;
    switch (destination) {
      case 'berlin': baseRate = 15; break;
      case 'munich': baseRate = 15.5; break;
      case 'hamburg': baseRate = 16; break;
      case 'frankfurt': baseRate = 15.75; break;
      default: baseRate = 15;
    }

    let multiplier = 1;
    let days = '5-7';
    switch (shippingMethod) {
      case 'express': multiplier = 2; days = '2-3'; break;
      case 'priority': multiplier = 1.5; days = '3-5'; break;
      case 'economy': multiplier = 0.8; days = '7-10'; break;
      default: days = '5-7';
    }

    const price = (baseRate + (calculatedWeight * 2.5)) * multiplier;

    setResult({
      price: `€${price.toFixed(2)}`,
      time: `${days} ${t('shippingCalculatorEstimatedTime')}`
    });
  };

  return (
    <section className="py-20 relative bg-[#0D0F12]" id="calculator-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            {t('shippingCalculatorHeadline')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('shippingCalculatorSubline')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Card className="neo-card border-white/10">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#0EA5E9]/20 to-[#D3E4FD]/20">
                  <Package2 className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">{t('shippingCalculatorDetails')}</CardTitle>
              </div>
              <CardDescription className="text-gray-300">{t('shippingCalculatorDetailsDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-white">{t('shippingCalculatorWeight')}</Label>
                  <Input 
                    id="weight" 
                    type="number" 
                    placeholder={t('shippingCalculatorWeightPlaceholder')} 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="bg-[#1A1F2C] border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="length" className="text-white">{t('shippingCalculatorLength')}</Label>
                  <Input 
                    id="length" 
                    type="number" 
                    placeholder={t('shippingCalculatorLengthPlaceholder')} 
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="bg-[#1A1F2C] border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="width" className="text-white">{t('shippingCalculatorWidth')}</Label>
                  <Input 
                    id="width" 
                    type="number" 
                    placeholder={t('shippingCalculatorWidthPlaceholder')} 
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="bg-[#1A1F2C] border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height" className="text-white">{t('shippingCalculatorHeight')}</Label>
                  <Input 
                    id="height" 
                    type="number" 
                    placeholder={t('shippingCalculatorHeightPlaceholder')} 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="bg-[#1A1F2C] border-white/10 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination" className="text-white">{t('shippingCalculatorDestination')}</Label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="bg-[#1A1F2C] border-white/10 text-white">
                    <SelectValue placeholder={t('shippingCalculatorDestinationPlaceholder')} />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1F2C] border-white/10 text-white">
                    <SelectItem value="berlin">{t('shippingCalculatorCityBerlin')}</SelectItem>
                    <SelectItem value="munich">{t('shippingCalculatorCityMunich')}</SelectItem>
                    <SelectItem value="hamburg">{t('shippingCalculatorCityHamburg')}</SelectItem>
                    <SelectItem value="frankfurt">{t('shippingCalculatorCityFrankfurt')}</SelectItem>
                    <SelectItem value="dusseldorf">{t('shippingCalculatorCityDusseldorf')}</SelectItem>
                    <SelectItem value="stuttgart">{t('shippingCalculatorCityStuttgart')}</SelectItem>
                    <SelectItem value="cologne">{t('shippingCalculatorCityCologne')}</SelectItem>
                    <SelectItem value="leipzig">{t('shippingCalculatorCityLeipzig')}</SelectItem>
                    <SelectItem value="dortmund">{t('shippingCalculatorCityDortmund')}</SelectItem>
                    <SelectItem value="essen">{t('shippingCalculatorCityEssen')}</SelectItem>
                    <SelectItem value="bremen">{t('shippingCalculatorCityBremen')}</SelectItem>
                    <SelectItem value="hannover">{t('shippingCalculatorCityHannover')}</SelectItem>
                    <SelectItem value="dresden">{t('shippingCalculatorCityDresden')}</SelectItem>
                    <SelectItem value="duisburg">{t('shippingCalculatorCityDuisburg')}</SelectItem>
                    <SelectItem value="nuremberg">{t('shippingCalculatorCityNuremberg')}</SelectItem>
                    <SelectItem value="fuerth">{t('shippingCalculatorCityFuerth')}</SelectItem>
                    <SelectItem value="bochum">{t('shippingCalculatorCityBochum')}</SelectItem>
                    <SelectItem value="wuppertal">{t('shippingCalculatorCityWuppertal')}</SelectItem>
                    <SelectItem value="bielefeld">{t('shippingCalculatorCityBielefeld')}</SelectItem>
                    <SelectItem value="bonn">{t('shippingCalculatorCityBonn')}</SelectItem>
                    <SelectItem value="munster">{t('shippingCalculatorCityMunster')}</SelectItem>
                    <SelectItem value="karlsruhe">{t('shippingCalculatorCityKarlsruhe')}</SelectItem>
                    <SelectItem value="mannheim">{t('shippingCalculatorCityMannheim')}</SelectItem>
                    <SelectItem value="augsburg">{t('shippingCalculatorCityAugsburg')}</SelectItem>
                    <SelectItem value="wiesbaden">{t('shippingCalculatorCityWiesbaden')}</SelectItem>
                    <SelectItem value="gelsenkirchen">{t('shippingCalculatorCityGelsenkirchen')}</SelectItem>
                    <SelectItem value="moers">{t('shippingCalculatorCityMoers')}</SelectItem>
                    <SelectItem value="chemnitz">{t('shippingCalculatorCityChemnitz')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shipping-method" className="text-white">{t('shippingCalculatorMethod')}</Label>
                <Select value={shippingMethod} onValueChange={setShippingMethod}>
                  <SelectTrigger className="bg-[#1A1F2C] border-white/10 text-white">
                    <SelectValue placeholder={t('shippingCalculatorMethodPlaceholder')} />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1F2C] border-white/10 text-white">
                    <SelectItem value="standard">{t('shippingCalculatorStandard')}</SelectItem>
                    <SelectItem value="express">{t('shippingCalculatorExpress')}</SelectItem>
                    <SelectItem value="priority">{t('shippingCalculatorPriority')}</SelectItem>
                    <SelectItem value="economy">{t('shippingCalculatorEconomy')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-deutscher-purple hover:bg-deutscher-purple-light" onClick={calculateShipping}>
                {t('shippingCalculatorButton')}
              </Button>
            </CardFooter>
          </Card>

          <Card className={`neo-card border-white/10 ${!result ? 'hidden lg:flex' : 'flex'} flex-col`}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#F97316]/20 to-[#FEC6A1]/20">
                  <BarChart2 className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">{t('shippingCalculatorEstimate')}</CardTitle>
              </div>
              <CardDescription className="text-gray-300">{t('shippingCalculatorEstimateDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              {result ? (
                <div className="text-center space-y-6">
                  <div>
                    <div className="text-sm text-gray-400">{t('shippingCalculatorEstimatedCost')}</div>
                    <div className="text-4xl font-bold text-white mt-1">{result.price}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{t('shippingCalculatorEstimatedTime')}</div>
                    <div className="text-2xl font-semibold text-white mt-1">{result.time}</div>
                  </div>
                  <div className="pt-4 text-gray-300">
                    <p>{t('shippingCalculatorDisclaimer')}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-400">{t('shippingCalculatorPrompt')}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ShippingCalculator;
