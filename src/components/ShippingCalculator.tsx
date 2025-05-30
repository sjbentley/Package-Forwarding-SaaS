
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from './ui/button';
import { Package2, BarChart2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ShippingCalculator = () => {
  const [weight, setWeight] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [destination, setDestination] = useState('berlin');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [result, setResult] = useState<null | { price: string; time: string }>(null);

  const calculateShipping = () => {
    // Simple calculation logic - in a real app this would be more sophisticated
    const w = parseFloat(weight) || 0;
    const l = parseFloat(length) || 0;
    const wd = parseFloat(width) || 0;
    const h = parseFloat(height) || 0;
    
    const volume = l * wd * h / 5000; // Dimensional weight
    const calculatedWeight = Math.max(w, volume);
    
    let baseRate = 0;
    // Base rate by destination
    switch (destination) {
      case 'berlin':
        baseRate = 15;
        break;
      case 'munich':
        baseRate = 15.5;
        break;
      case 'hamburg':
        baseRate = 16;
        break;
      case 'frankfurt':
        baseRate = 15.75;
        break;
      default:
        baseRate = 15;
    }
    
    // Multiplier by shipping method
    let multiplier = 1;
    let days = '5-7';
    
    switch (shippingMethod) {
      case 'express':
        multiplier = 2;
        days = '2-3';
        break;
      case 'priority':
        multiplier = 1.5;
        days = '3-5';
        break;
      case 'economy':
        multiplier = 0.8;
        days = '7-10';
        break;
      default:
        days = '5-7';
    }
    
    const price = (baseRate + (calculatedWeight * 2.5)) * multiplier;
    
    setResult({
      price: `€${price.toFixed(2)}`,
      time: `${days} days`
    });
  };
  
  return (
    <section className="py-20 relative bg-[#0D0F12]" id="calculator-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Versandkostenrechner
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Schätzen Sie Ihre Versandkosten von den USA nach Deutschland.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Card className="neo-card border-white/10">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#0EA5E9]/20 to-[#D3E4FD]/20">
                  <Package2 className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">Paketdetails</CardTitle>
              </div>
              <CardDescription className="text-gray-300">Geben Sie die Paketmaße und Versandoptionen ein</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-white">Gewicht (kg)</Label>
                  <Input 
                    id="weight" 
                    type="number" 
                    placeholder="e.g. 2.5" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="bg-[#1A1F2C] border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dimensions" className="text-white">Länge (cm)</Label>
                  <Input 
                    id="length" 
                    type="number" 
                    placeholder="e.g. 30" 
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="bg-[#1A1F2C] border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="width" className="text-white">Breite (cm)</Label>
                  <Input 
                    id="width" 
                    type="number" 
                    placeholder="e.g. 20" 
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="bg-[#1A1F2C] border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height" className="text-white">Höhe (cm)</Label>
                  <Input 
                    id="height" 
                    type="number" 
                    placeholder="e.g. 15" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="bg-[#1A1F2C] border-white/10 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination" className="text-white">Zielstadt</Label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="bg-[#1A1F2C] border-white/10 text-white">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1F2C] border-white/10 text-white">
                    <SelectItem value="berlin">Berlin</SelectItem>
                    <SelectItem value="munich">München</SelectItem>
                    <SelectItem value="hamburg">Hamburg</SelectItem>
                    <SelectItem value="frankfurt">Frankfurt</SelectItem>
                    <SelectItem value="dusseldorf">Düsseldorf</SelectItem>
                    <SelectItem value="stuttgart">Stuttgart</SelectItem>
                    <SelectItem value="cologne">Köln</SelectItem>
                    <SelectItem value="leipzig">Leipzig</SelectItem>
                    <SelectItem value="dortmund">Dortmund</SelectItem>
                    <SelectItem value="essen">Essen</SelectItem>
                    <SelectItem value="bremen">Bremen</SelectItem>
                    <SelectItem value="hannover">Hannover</SelectItem>
                    <SelectItem value="dresden">Dresden</SelectItem>
                    <SelectItem value="duisburg">Duisburg</SelectItem>
                    <SelectItem value="nuremberg">Nürnberg</SelectItem>
                    <SelectItem value="fuerth">Fürth</SelectItem>
                    <SelectItem value="bochum">Bochum</SelectItem>
                    <SelectItem value="wuppertal">Wuppertal</SelectItem>
                    <SelectItem value="bielefeld">Bielefeld</SelectItem>
                    <SelectItem value="bonn">Bonn</SelectItem>
                    <SelectItem value="munster">Münster</SelectItem>
                    <SelectItem value="karlsruhe">Karlsruhe</SelectItem>
                    <SelectItem value="mannheim">Mannheim</SelectItem>
                    <SelectItem value="augsburg">Augsburg</SelectItem>
                    <SelectItem value="wiesbaden">Wiesbaden</SelectItem>
                    <SelectItem value="gelsenkirchen">Gelsenkirchen</SelectItem>
                    <SelectItem value="moers">Mönchengladbach</SelectItem>
                    <SelectItem value="chemnitz">Chemnitz</SelectItem>

                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shipping-method" className="text-white">Versandmethode</Label>
                <Select value={shippingMethod} onValueChange={setShippingMethod}>
                  <SelectTrigger className="bg-[#1A1F2C] border-white/10 text-white">
                    <SelectValue placeholder="Versandmethode wählen" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1F2C] border-white/10 text-white">
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="express">Express</SelectItem>
                    <SelectItem value="priority">Priority</SelectItem>
                    <SelectItem value="economy">Economy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-deutscher-purple hover:bg-deutscher-purple-light" onClick={calculateShipping}>
                Versand berechnen
              </Button>
            </CardFooter>
          </Card>

          <Card className={`neo-card border-white/10 ${!result ? 'hidden lg:flex' : 'flex'} flex-col`}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#F97316]/20 to-[#FEC6A1]/20">
                  <BarChart2 className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">Versand Schätzung</CardTitle>
              </div>
              <CardDescription className="text-gray-300">Geschätzte Versandkosten und Lieferzeit</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              {result ? (
                <div className="text-center space-y-6">
                  <div>
                    <div className="text-sm text-gray-400">Geschätzte Kosten</div>
                    <div className="text-4xl font-bold text-white mt-1">{result.price}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Geschätzte Lieferzeit</div>
                    <div className="text-2xl font-semibold text-white mt-1">{result.time}</div>
                  </div>
                  <div className="pt-4 text-gray-300">
                    <p>Schätzung. Kosten können variieren.</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-400">Paketdetails eingeben und "Versand berechnen" klicken.</p>
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
