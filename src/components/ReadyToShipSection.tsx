import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, PackageCheck, Package2, Check, ArrowRight, ArrowLeft, X, Bitcoin, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslation } from '@/hooks/useTranslation';

type ShippingStep = {
  id: number;
  title: string;
  completed?: boolean;
  active?: boolean;
};

type ShippingOption = 'single' | 'multiple' | 'consolidation';

interface PackageItem {
  id: string;
  name: string;
  source: string;
  date: string;
  description: string;
  weight: string;
  dimensions: string;
}

const samplePackages: PackageItem[] = [
  {
    id: "PKG-1234",
    name: "Amazon Electronics",
    source: "Amazon",
    date: "2025-04-12",
    description: "Wireless headphones and smart watch",
    weight: "1.2 kg",
    dimensions: "30 × 20 × 15 cm"
  },
  {
    id: "PKG-5678",
    name: "Clothing Bundle",
    source: "Gap",
    date: "2025-04-10",
    description: "T-shirts and jeans",
    weight: "0.8 kg",
    dimensions: "25 × 20 × 10 cm"
  },
  {
    id: "PKG-9012",
    name: "Kitchen Accessories",
    source: "Williams Sonoma",
    date: "2025-04-08",
    description: "Cooking utensils and spice rack",
    weight: "2.1 kg",
    dimensions: "40 × 25 × 20 cm"
  }
];

const ReadyToShipSection = () => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState<ShippingOption>('single');
  
  const [singleCurrentStep, setSingleCurrentStep] = useState(1);
  const [multipleCurrentStep, setMultipleCurrentStep] = useState(1);
  const [consolidationCurrentStep, setConsolidationCurrentStep] = useState(1);
  
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [multipleSelectedPackages, setMultipleSelectedPackages] = useState<string[]>([]);
  const [consolidationSelectedPackages, setConsolidationSelectedPackages] = useState<string[]>([]);
  
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit');
  const [multipleSelectedPaymentMethod, setMultipleSelectedPaymentMethod] = useState('credit');
  const [consolidationSelectedPaymentMethod, setConsolidationSelectedPaymentMethod] = useState('credit');
  
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [multipleSelectedServices, setMultipleSelectedServices] = useState<string[]>([]);
  const [consolidationSelectedServices, setConsolidationSelectedServices] = useState<string[]>([]);
  
  // Address state for each flow, initialized with empty values
  const [singleAddress, setSingleAddress] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: ''
  });
  const [multipleAddress, setMultipleAddress] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: ''
  });
  const [consolidationAddress, setConsolidationAddress] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: ''
  });
  
  const singlePackageSteps: ShippingStep[] = [
    { id: 1, title: t('selectPackages'), active: singleCurrentStep === 1, completed: singleCurrentStep > 1 },
    { id: 2, title: t('shippingAddress'), active: singleCurrentStep === 2, completed: singleCurrentStep > 2 },
    { id: 3, title: t('shippingMethodAndInsurance'), active: singleCurrentStep === 3, completed: singleCurrentStep > 3 },
    { id: 4, title: t('additionalServices'), active: singleCurrentStep === 4, completed: singleCurrentStep > 4 },
    { id: 5, title: t('paymentMethod'), active: singleCurrentStep === 5, completed: singleCurrentStep > 5 },
    { id: 6, title: t('summary'), active: singleCurrentStep === 6, completed: singleCurrentStep === 6 },
  ];

  const multiplePackageSteps: ShippingStep[] = [
    { id: 1, title: t('selectPackages'), active: multipleCurrentStep === 1, completed: multipleCurrentStep > 1 },
    { id: 2, title: t('shippingAddress'), active: multipleCurrentStep === 2, completed: multipleCurrentStep > 2 },
    { id: 3, title: t('shippingMethodAndInsurance'), active: multipleCurrentStep === 3, completed: multipleCurrentStep > 3 },
    { id: 4, title: t('additionalServices'), active: multipleCurrentStep === 4, completed: multipleCurrentStep > 4 },
    { id: 5, title: t('paymentMethod'), active: multipleCurrentStep === 5, completed: multipleCurrentStep > 5 },
    { id: 6, title: t('summary'), active: multipleCurrentStep === 6, completed: multipleCurrentStep === 6 },
  ];

  const consolidationSteps: ShippingStep[] = [
    { id: 1, title: t('shippingAddress'), active: consolidationCurrentStep === 1, completed: consolidationCurrentStep > 1 },
    { id: 2, title: t('selectPackages'), active: consolidationCurrentStep === 2, completed: consolidationCurrentStep > 2 },
    { id: 3, title: t('shippingMethodAndInsurance'), active: consolidationCurrentStep === 3, completed: consolidationCurrentStep > 3 },
    { id: 4, title: t('additionalServices'), active: consolidationCurrentStep === 4, completed: consolidationCurrentStep > 4 },
    { id: 5, title: t('paymentMethod'), active: consolidationCurrentStep === 5, completed: consolidationCurrentStep > 5 },
    { id: 6, title: t('summary'), active: consolidationCurrentStep === 6, completed: consolidationCurrentStep === 6 },
  ];

  // Add the handleSingleAddressChange function here
const handleSingleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { id, value } = e.target;
  setSingleAddress((prev) => ({ ...prev, [id]: value }));
};

  // ========== Handlers for Multiple/Consolidation Flows ==========
  const handleMultiplePackageSelect = (packageId: string) => {
    setMultipleSelectedPackages(prevSelected => {
      if (prevSelected.includes(packageId)) {
        return prevSelected.filter(id => id !== packageId);
      } else {
        return [...prevSelected, packageId];
      }
    });
  };
  
  const handleConsolidationPackageSelect = (packageId: string) => {
    setConsolidationSelectedPackages(prevSelected => {
      if (prevSelected.includes(packageId)) {
        return prevSelected.filter(id => id !== packageId);
      } else {
        return [...prevSelected, packageId];
      }
    });
  };

  const handleMultipleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setMultipleAddress(prev => ({ ...prev, [id]: value }));
  };
  
  const handleConsolidationAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setConsolidationAddress(prev => ({ ...prev, [id]: value }));
  };

  const handleMultipleServiceSelect = (serviceId: string) => {
    setMultipleSelectedServices(prevSelected => {
      if (prevSelected.includes(serviceId)) {
        return prevSelected.filter(id => id !== serviceId);
      } else {
        return [...prevSelected, serviceId];
      }
    });
  };
  
  const handleConsolidationServiceSelect = (serviceId: string) => {
    setConsolidationSelectedServices(prevSelected => {
      if (prevSelected.includes(serviceId)) {
        return prevSelected.filter(id => id !== serviceId);
      } else {
        return [...prevSelected, serviceId];
      }
    });
  };

  const getSteps = () => {
    switch(selectedOption) {
      case 'single':
        return singlePackageSteps;
      case 'multiple':
        return multiplePackageSteps;
      case 'consolidation':
        return consolidationSteps;
      default:
        return singlePackageSteps;
    }
  };
  
  const getCurrentStep = () => {
    switch(selectedOption) {
      case 'single':
        return singleCurrentStep;
      case 'multiple':
        return multipleCurrentStep;
      case 'consolidation':
        return consolidationCurrentStep;
      default:
        return singleCurrentStep;
    }
  };
  
  const goToNextStep = () => {
    switch(selectedOption) {
      case 'single':
        if (singleCurrentStep < 6) setSingleCurrentStep(singleCurrentStep + 1);
        break;
      case 'multiple':
        if (multipleCurrentStep < 6) setMultipleCurrentStep(multipleCurrentStep + 1);
        break;
      case 'consolidation':
        if (consolidationCurrentStep < 6) setConsolidationCurrentStep(consolidationCurrentStep + 1);
        break;
    }
  };
  
  const goToPreviousStep = () => {
    switch(selectedOption) {
      case 'single':
        if (singleCurrentStep > 1) setSingleCurrentStep(singleCurrentStep - 1);
        break;
      case 'multiple':
        if (multipleCurrentStep > 1) setMultipleCurrentStep(multipleCurrentStep - 1);
        break;
      case 'consolidation':
        if (consolidationCurrentStep > 1) setConsolidationCurrentStep(consolidationCurrentStep - 1);
        break;
    }
  };
  
  const getProgressPercentage = () => {
    const currentStep = getCurrentStep();
    return Math.min(((currentStep - 1) / 5) * 100, 100);
  };
  
  const handlePackageSelect = (packageId: string) => {
    setSelectedPackages(prevSelected => {
      if (selectedOption === 'single') {
        return [packageId];
      }
      
      if (prevSelected.includes(packageId)) {
        return prevSelected.filter(id => id !== packageId);
      } else {
        return [...prevSelected, packageId];
      }
    });
  };

  const handleCompleteOrder = () => {
    setOrderCompleted(true);
    setOrderSummaryOpen(true);
  };
  
  const handleServiceSelect = (serviceId: string) => {
    setSelectedServices(prevSelected => {
      if (prevSelected.includes(serviceId)) {
        return prevSelected.filter(id => id !== serviceId);
      } else {
        return [...prevSelected, serviceId];
      }
    });
  };

  const renderOrderSummary = () => {
    return (
      <div 
        className="mt-4 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto pr-2"
        style={{ scrollbarGutter: 'stable' }}
        >
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-full bg-green-500 border border-green-500 flex items-center justify-center text-white">
            <Check className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold">{t('orderSummary')}</h3>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="p-4 border border-white/10 rounded-md">
            <h4 className="font-medium mb-2">{t('packageDetails')}</h4>
            {selectedPackages.length > 0 ? (
              samplePackages
                .filter(pkg => selectedPackages.includes(pkg.id))
                .map(pkg => (
                  <div key={pkg.id} className="mb-2 last:mb-0">
                    <p className="text-sm font-medium">{pkg.name}</p>
                    <p className="text-xs text-gray-400">{pkg.description}</p>
                    <div className="text-xs text-gray-400 mt-1">
                      <span className="inline-block mr-3">{t('id')}: {pkg.id}</span>
                      <span className="inline-block mr-3">{t('weight')}: {pkg.weight}</span>
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-sm text-gray-400">{t('noPackageSelected')}</p>
            )}
          </div>
          
          <div className="p-4 border border-white/10 rounded-md">
            <h4 className="font-medium mb-2">{t('shippingAddress')}</h4>
            <p className="text-sm">{singleAddress.name}</p>
            <p className="text-sm">{singleAddress.address}</p>
            <p className="text-sm">{singleAddress.city}, {singleAddress.state} {singleAddress.zip}</p>
            <p className="text-sm">{singleAddress.country}</p>
            <p className="text-sm">{singleAddress.phone}</p>
          </div>
          
          <div className="p-4 border border-white/10 rounded-md">
            <h4 className="font-medium mb-2">{t('shippingMethod')}</h4>
            <div className="flex justify-between text-sm">
              <p className="text-sm">{t('standard')} {t('businessDays7')}</p>
              <p className="text-sm font-medium mt-1">{t('priceStandard')}</p>
            </div>
          </div>
          
          <div className="p-4 border border-white/10 rounded-md">
            <h4 className="font-medium mb-2">{t('additionalServices')}</h4>
            <div className="flex justify-between text-sm">
              <span>{t('basicProtection')}</span>
              <span>{t('priceBasicProtection')}</span>
            </div>
          </div>
          
          <div className="p-4 border border-white/10 rounded-md">
            <h4 className="font-medium mb-2">{t('paymentMethod')}</h4>
            <p className="text-sm">{t('creditCardEndingIn')}</p>
          </div>

          <div className="p-4 border border-white/10 rounded-md">
            <h4 className="font-medium mb-2">{t('totalCost')}</h4>
            <div className="flex justify-between font-medium">
              <span>{t('total')}</span>
              <span>{t('totalPrice')}</span>
            </div>
          </div>

        </div>
      </div>
    );
  };

  const renderTimeline = (steps: ShippingStep[]) => {
    const currentStep = getCurrentStep();
    
    return (
      <div className="relative mb-10 mt-6 px-1 overflow-x-auto">
        <div className="flex justify-between min-w-[600px] md:min-w-0 relative z-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center relative">
              <div 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2",
                  step.active 
                    ? step.id === 6 
                      ? "bg-green-500 border-green-500 text-white"
                      : "bg-deutscher-purple border-deutscher-purple text-white"
                    : step.completed || (step.id === 6 && currentStep === 6)
                      ? "bg-green-500 border-green-500 text-white"
                      : "bg-[#0D0F12] border-gray-600 text-gray-400"
                )}
              >
                {step.completed || (step.id === 6 && currentStep === 6) ? <Check className="h-5 w-5" /> : step.id}
              </div>
              <span className={cn(
                "text-xs mt-2 text-center max-w-[90px]",
                step.active 
                  ? step.id === 6 
                    ? "text-green-500 font-medium"
                    : "text-deutscher-purple font-medium" 
                  : step.completed || (step.id === 6 && currentStep === 6)
                    ? "text-green-500" 
                    : "text-gray-400"
              )}>{step.title}</span>
            </div>
          ))}
        </div>
        
        <div className="absolute top-5 left-0 right-0 -translate-y-1/2 z-0">
          <Progress 
            value={getProgressPercentage()} 
            className="h-1 bg-gray-700" 
            indicatorClassName="bg-green-500"
          />
        </div>
      </div>
    );
  };

  const renderSinglePackageContent = () => {
    if (orderCompleted && getCurrentStep() === 6) {
      return renderOrderSummary();
    }
    
    switch(singleCurrentStep) {
      case 1:
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white">1</div>
              <h3 className="text-lg font-semibold">{t('selectPackages')}</h3>
            </div>
            
            <p className="text-gray-300 mb-6">{t('selectPackagesToShip')}</p>
            
            <div className="space-y-4 mb-6">
              {samplePackages.length > 0 ? (
                samplePackages.map(pkg => (
                  <div 
                    key={pkg.id}
                    className={cn(
                      "p-4 border rounded-md transition-all duration-200",
                      selectedPackages.includes(pkg.id)
                        ? "border-deutscher-purple bg-deutscher-purple/10"
                        : "border-white/10 hover:border-white/30"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <Checkbox 
                        id={`pkg-${pkg.id}`} 
                        checked={selectedPackages.includes(pkg.id)}
                        onCheckedChange={() => handlePackageSelect(pkg.id)}
                        className={cn(
                          "mt-1",
                          selectedPackages.includes(pkg.id) && "bg-deutscher-purple border-deutscher-purple"
                        )}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <Label 
                            htmlFor={`pkg-${pkg.id}`} 
                            className="font-medium text-white cursor-pointer"
                          >
                            {pkg.name}
                          </Label>
                          <span className="text-xs text-gray-400">{pkg.date}</span>
                        </div>
                        <p className="text-sm text-gray-300 mb-2">{pkg.description}</p>
                        <div className="flex flex-wrap text-xs text-gray-400 gap-2 md:gap-4">
                          <div>{t('id')}: <span className="font-mono">{pkg.id}</span></div>
                          <div>{t('source')}: {pkg.source}</div>
                          <div>{t('weight')}: {pkg.weight}</div>
                          <div>{t('dimensions')}: {pkg.dimensions}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 border border-white/10 rounded-md">
                  <p className="font-medium">No packages available</p>
                  <p className="text-sm text-gray-400 mt-2">You don't have any packages ready to ship at this time.</p>
                </div>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white">2</div>
              <h3 className="text-lg font-semibold">{t('shippingAddress')}</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('fullName')}</Label>
                  <Input 
                    id="name" 
                    placeholder={t('fullName')} 
                    value={singleAddress.name} 
                    onChange={handleSingleAddressChange}
                    className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('email')}</Label>
                  <Input 
                    id="email"
                    placeholder={t('email')} 
                    value={singleAddress.email} 
                    onChange={handleSingleAddressChange}
                    className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">{t('address')}</Label>
                  <Input 
                    id="address" 
                    placeholder={t('address')}
                    value={singleAddress.address}
                    onChange={handleSingleAddressChange} 
                    className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">{t('city')}</Label>
                  <Input 
                    id="city" 
                    placeholder={t('city')}
                    value={singleAddress.city}
                    onChange={handleSingleAddressChange} 
                    className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">{t('state')}</Label>
                  <Input 
                    id="state" 
                    placeholder={t('state')}
                    value={singleAddress.state}
                    onChange={handleSingleAddressChange} 
                    className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">{t('zipCode')}</Label>
                  <Input 
                    id="zip" 
                    placeholder={t('zipCode')}
                    value={singleAddress.zip}
                    onChange={handleSingleAddressChange} 
                    className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">{t('country')}</Label>
                  <Select
                    onValueChange={(value) =>
                      setSingleAddress((prev) => ({
                        ...prev,
                        country: {
                          us: t('unitedstates'),
                          ca: t('canada'),
                          uk: t('unitedkingdom'),
                          au: t('australia'),
                          de: t('germany'),
                        }[value] || value,
                      }))
                    }
                  >
                    <SelectTrigger className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple">
                      <SelectValue placeholder={t('selectCountry')} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0D0F12] border-deutscher-purple/20">
                      <SelectItem value="us">{t('unitedstates')}</SelectItem>
                      <SelectItem value="ca">{t('canada')}</SelectItem>
                      <SelectItem value="uk">{t('unitedkingdom')}</SelectItem>
                      <SelectItem value="au">{t('australia')}</SelectItem>
                      <SelectItem value="de">{t('germany')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('phone')}</Label>
                  <Input 
                    id="phone" 
                    placeholder={t('phone')}
                    value={singleAddress.phone}
                    onChange={handleSingleAddressChange} 
                    className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white">3</div>
              <h3 className="text-lg font-semibold">{t('shippingMethodAndInsurance')}</h3>
            </div>
            
            <div className="space-y-6 mb-6">
              <div>
                <h4 className="font-medium mb-3">{t('shippingMethod')}</h4>
                <RadioGroup defaultValue="standard" className="space-y-3">
                  {[
                    { value: "express", label: t('express'), description: t('businessDays3'), price: t('priceExpress') },
                    { value: "standard", label: t('standard'), description: t('businessDays7'), price: t('priceStandard') },
                    { value: "economy", label: t('economy'), description: t('businessDays14'), price: t('priceEconomy') }

                  ].map(method => (
                    <div 
                      key={method.value}
                      className={cn(
                        "p-4 border rounded-md transition-all duration-200 group",
                        "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#7E69AB] data-[state=checked]:to-[#6E59A5] data-[state=checked]:text-white",
                        "border-white/10 hover:border-white/30"
                      )}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={method.value} 
                          id={method.value} 
                          className="text-white data-[state=checked]:border-deutscher-purple data-[state=checked]:bg-deutscher-purple" 
                        />
                        <Label htmlFor={method.value} className="flex-1">
                          <div className="font-medium">{method.label}</div>
                          <div className="text-sm text-gray-400">{method.description}</div>
                        </Label>
                        <div className="font-medium">{method.price}</div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-3">{t('insurance')}</h4>
                <RadioGroup defaultValue="basic" className="space-y-3">
                  {[
                    { value: "basic", label: t('basicProtection'), description: t('coverageUpTo100'), price: t('priceBasicProtection') },
                    { value: "premium", label: t('premiumProtection'), description: t('coverageUpTo500'), price: t('pricePremiumProtection') }
                  ].map(insurance => (
                    <div 
                      key={insurance.value}
                      className={cn(
                        "p-4 border rounded-md transition-all duration-200 group",
                        "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#7E69AB] data-[state=checked]:to-[#6E59A5] data-[state=checked]:text-white",
                        "border-white/10 hover:border-white/30"
                      )}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={insurance.value} 
                          id={insurance.value} 
                          className="text-white data-[state=checked]:border-deutscher-purple data-[state=checked]:bg-deutscher-purple" 
                        />
                        <Label htmlFor={insurance.value} className="flex-1">
                          <div className="font-medium">{insurance.label}</div>
                          <div className="text-sm text-gray-400">{insurance.description}</div>
                        </Label>
                        <div className="font-medium">{insurance.price}</div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white">4</div>
              <h3 className="text-lg font-semibold">{t('additionalServices')}</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className={cn(
                "flex items-center justify-between p-3 border rounded-md transition-all duration-200",
                selectedServices.includes('photos') 
                  ? "border-deutscher-purple bg-deutscher-purple/10" 
                  : "border-white/10 hover:border-deutscher-purple/60"
              )}>
                <div>
                  <h4 className="font-medium">{t('packagePhotos')}</h4>
                  <p className="text-sm text-gray-400">{t('getPhotosBeforeShipping')}</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 font-medium">{t('packagePhotosPrice')}</div>
                  <Checkbox 
                    id="service-photos"
                    className="h-5 w-5 border-white/20 text-deutscher-purple data-[state=checked]:bg-deutscher-purple data-[state=checked]:border-deutscher-purple" 
                    checked={selectedServices.includes('photos')}
                    onCheckedChange={() => handleServiceSelect('photos')}
                  />
                </div>
              </div>
              
              <div className={cn(
                "flex items-center justify-between p-3 border rounded-md transition-all duration-200",
                selectedServices.includes('padding') 
                  ? "border-deutscher-purple bg-deutscher-purple/10" 
                  : "border-white/10 hover:border-deutscher-purple/60"
              )}>
                <div>
                  <h4 className="font-medium">{t('extraPadding')}</h4>
                  <p className="text-sm text-gray-400">{t('additionalProtectionForFragileItems')}</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 font-medium">{t('extraPaddingPrice')}</div>
                  <Checkbox 
                    id="service-padding"
                    className="h-5 w-5 border-white/20 text-deutscher-purple data-[state=checked]:bg-deutscher-purple data-[state=checked]:border-deutscher-purple" 
                    checked={selectedServices.includes('padding')}
                    onCheckedChange={() => handleServiceSelect('padding')}
                  />
                </div>
              </div>
              
              <div className={cn(
                "flex items-center justify-between p-3 border rounded-md transition-all duration-200",
                selectedServices.includes('signature') 
                  ? "border-deutscher-purple bg-deutscher-purple/10" 
                  : "border-white/10 hover:border-deutscher-purple/60"
              )}>
                <div>
                  <h4 className="font-medium">{t('signatureRequired')}</h4>
                  <p className="text-sm text-gray-400">{t('recipientSignatureRequiredForDelivery')}</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 font-medium">{t('signatureRequiredPrice')}</div>
                  <Checkbox 
                    id="service-signature"
                    className="h-5 w-5 border-white/20 text-deutscher-purple data-[state=checked]:bg-deutscher-purple data-[state=checked]:border-deutscher-purple" 
                    checked={selectedServices.includes('signature')}
                    onCheckedChange={() => handleServiceSelect('signature')}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white">5</div>
              <h3 className="text-lg font-semibold">{t('paymentMethod')}</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-medium mb-3">{t('paymentMethod')}</h4>
                <RadioGroup 
                  value={selectedPaymentMethod} 
                  onValueChange={setSelectedPaymentMethod} 
                  className="space-y-3"
                >
                  <div className={cn(
                    "flex items-center space-x-2 p-3 border rounded-md transition-all duration-200",
                    selectedPaymentMethod === 'credit'
                      ? "border-deutscher-purple bg-deutscher-purple/10"
                      : "border-white/10 hover:border-deutscher-purple/60"
                  )}>
                    <RadioGroupItem value="credit" id="credit" className="text-white data-[state=checked]:bg-white" />
                    <Label htmlFor="credit" className="flex-1">
                      <div className="font-medium flex items-center">
                        <CreditCard className="h-4 w-4 mr-2" />
                        {t('creditCard')}
                      </div>
                    </Label>
                  </div>
                  <div className={cn(
                    "flex items-center space-x-2 p-3 border rounded-md transition-all duration-200",
                    selectedPaymentMethod === 'paypal'
                      ? "border-deutscher-purple bg-deutscher-purple/10"
                      : "border-white/10 hover:border-deutscher-purple/60"
                  )}>
                    <RadioGroupItem value="paypal" id="paypal" className="text-white data-[state=checked]:bg-white" />
                    <Label htmlFor="paypal" className="flex-1">
                      <div className="font-medium">{t('paypal')}</div>
                    </Label>
                  </div>
                  <div className={cn(
                    "flex items-center space-x-2 p-3 border rounded-md transition-all duration-200",
                    selectedPaymentMethod === 'bank'
                      ? "border-deutscher-purple bg-deutscher-purple/10"
                      : "border-white/10 hover:border-deutscher-purple/60"
                  )}>
                    <RadioGroupItem value="bank" id="bank" className="text-white data-[state=checked]:bg-white" />
                    <Label htmlFor="bank" className="flex-1">
                      <div className="font-medium">{t('bankTransfer')}</div>
                    </Label>
                  </div>
                  <div className={cn(
                    "flex items-center space-x-2 p-3 border rounded-md transition-all duration-200",
                    selectedPaymentMethod === 'bitcoin'
                      ? "border-deutscher-purple bg-deutscher-purple/10"
                      : "border-white/10 hover:border-deutscher-purple/60"
                  )}>
                    <RadioGroupItem value="bitcoin" id="bitcoin" className="text-white data-[state=checked]:bg-white" />
                    <Label htmlFor="bitcoin" className="flex-1 flex items-center">
                      <div className="font-medium flex items-center">
                        <Bitcoin className="h-4 w-4 mr-2" />
                        {t('bitcoin')}
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              {selectedPaymentMethod === 'credit' && (
                <div className="p-4 border border-deutscher-purple/20 rounded-md bg-deutscher-purple/5">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cc-name">{t('nameOnCard')}</Label>
                      <Input 
                        id="cc-name" 
                        placeholder={t('nameOnCard')} 
                        className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cc-number">{t('cardNumber')}</Label>
                      <Input 
                        id="cc-number" 
                        placeholder={t('cardNumber')} 
                        className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cc-expiry">{t('expiryDate')}</Label>
                        <Input 
                          id="cc-expiry" 
                          placeholder={t('expiryDate')} 
                          className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cc-cvc">{t('cvc')}</Label>
                        <Input 
                          id="cc-cvc" 
                          placeholder={t('cvc')}
                          className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedPaymentMethod === 'paypal' && (
                <div className="p-4 border border-deutscher-purple/20 rounded-md bg-deutscher-purple/5">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="paypal-email">{t('paypalEmail')}</Label>
                      <Input 
                        id="paypal-email" 
                        type="email"
                        placeholder={t('paypalEmail')} 
                        className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                      />
                    </div>
                    <p className="text-sm text-gray-400">{t('paypalRedirectNotice')}</p>
                  </div>
                </div>
              )}

              {selectedPaymentMethod === 'bank' && (
                <div className="p-4 border border-deutscher-purple/20 rounded-md bg-deutscher-purple/5">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="bank-name">{t('bankName')}</Label>
                      <Input 
                        id="bank-name" 
                        placeholder={t('bankName')} 
                        className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="account-name">{t('accountHolderName')}</Label>
                      <Input 
                        id="account-name" 
                        placeholder={t('accountHolderName')}
                        className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="account-number">{t('accountNumber')}</Label>
                      <Input 
                        id="account-number" 
                        placeholder={t('accountNumber')} 
                        className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="routing-number">{t('routingNumber')}</Label>
                      <Input 
                        id="routing-number" 
                        placeholder={t('routingNumber')} 
                        className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {selectedPaymentMethod === 'bitcoin' && (
                <div className="p-4 border border-deutscher-purple/20 rounded-md bg-deutscher-purple/5">
                  <div className="space-y-4">
                    <div className="text-center p-4 border border-white/10 rounded-md bg-[#0D0F12]">
                      <p className="text-sm mb-2">{t('sendPaymentToFollowingAddress')}:</p>
                      <p className="font-mono text-xs bg-black/30 p-2 rounded">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="btc-address">{t('bitcoinAddress')}</Label>
                      <Input 
                        id="btc-address" 
                        placeholder="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" 
                        className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="btc-email">{t('emailForPaymentConfirmation')}</Label>
                      <Input 
                        id="btc-email" 
                        type="email"
                        placeholder={t('email')} 
                        className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                      />
                    </div>
                    <p className="text-sm text-gray-400">{t('paymentConfirmationNotice')}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case 6:
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-green-500 border border-green-500 flex items-center justify-center text-white">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{t('orderSummary')}</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="p-4 border border-white/10 rounded-md">
                <h4 className="font-medium mb-2">{t('packageDetails')}</h4>
                {selectedPackages.length > 0 ? (
                  samplePackages
                    .filter(pkg => selectedPackages.includes(pkg.id))
                    .map(pkg => (
                      <div key={pkg.id} className="mb-2 last:mb-0">
                        <p className="text-sm font-medium">{pkg.name}</p>
                        <p className="text-xs text-gray-400">{pkg.description}</p>
                        <div className="text-xs text-gray-400 mt-1">
                          <span className="inline-block mr-3">{t('id')}: {pkg.id}</span>
                          <span className="inline-block mr-3">{t('weight')}: {pkg.weight}</span>
                        </div>
                      </div>
                    ))
                ) : (
                  <p className="text-sm text-gray-400">No package selected</p>
                )}
              </div>
              
              <div className="p-4 border border-white/10 rounded-md">
                <h4 className="font-medium mb-2">{t('shippingAddress')}</h4>
                <p className="text-sm">{singleAddress.name}</p>
                <p className="text-sm">{singleAddress.address}</p>
                <p className="text-sm">{singleAddress.city}, {singleAddress.state} {singleAddress.zip}</p>
                <p className="text-sm">{singleAddress.country}</p>
              </div>
              
              <div className="p-4 border border-white/10 rounded-md">
                <h4 className="font-medium mb-2">{t('shippingMethod')}</h4>
                <div className="flex justify-between text-sm">
                  <p className="text-sm">{t('standard')} {t('businessDays7')}</p>
                  <p className="text-sm font-medium mt-1">{t('priceStandard')}</p>
                </div>
              </div>
              
              <div className="p-4 border border-white/10 rounded-md">
                <h4 className="font-medium mb-2">{t('additionalServices')}</h4>
                {selectedServices.length > 0 ? (
                  <div className="space-y-1">
                    {selectedServices.includes('photos') && (
                      <div className="flex justify-between text-sm">
                        <span>{t('packagePhotos')}</span>
                        <span>{t('packagePhotosPrice')}</span>
                      </div>
                    )}
                    {selectedServices.includes('padding') && (
                      <div className="flex justify-between text-sm">
                        <span>{t('extraPadding')}</span>
                        <span>{t('extraPaddingPrice')}</span>
                      </div>
                    )}
                    {selectedServices.includes('signature') && (
                      <div className="flex justify-between text-sm">
                        <span>{t('signatureRequired')}</span>
                        <span>{t('signatureRequiredPrice')}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-gray-400">No additional services selected</p>
                )}
              </div>
              
              <div className="p-4 border border-white/10 rounded-md">
                <h4 className="font-medium mb-2">{t('paymentMethod')}</h4>
                <p className="text-sm">
                  {selectedPaymentMethod === 'credit' && 'Credit Card ending in ****'}
                  {selectedPaymentMethod === 'paypal' && 'PayPal'}
                  {selectedPaymentMethod === 'bank' && 'Bank Transfer'}
                  {selectedPaymentMethod === 'bitcoin' && 'Bitcoin'}
                </p>
              </div>
              
              <div className="p-4 border border-white/10 rounded-md">
                <h4 className="font-medium mb-2">{t('totalCost')}</h4>
                <div className="flex justify-between font-medium">
                  <span>{t('total')}</span>
                  <span>{t('totalPrice')}</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // ----- New: Multiple Package Content ------
  const renderMultiplePackageContent = () => {
    if (orderCompleted && getCurrentStep() === 6 && selectedOption === "multiple") {
      // Copy the summary rendering as in single, using multiple* states
      return (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-full bg-green-500 border border-green-500 flex items-center justify-center text-white">
              <Check className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{t('orderSummary')}</h3>
          </div>
          <div className="space-y-4 mb-6">
            <div className="p-4 border border-white/10 rounded-md">
              <h4 className="font-medium mb-2">{t('packageDetails')}</h4>
              {multipleSelectedPackages.length > 0 ? (
                samplePackages
                  .filter(pkg => multipleSelectedPackages.includes(pkg.id))
                  .map(pkg => (
                    <div key={pkg.id} className="mb-2 last:mb-0">
                      <p className="text-sm font-medium">{pkg.name}</p>
                      <p className="text-xs text-gray-400">{pkg.description}</p>
                      <div className="text-xs text-gray-400 mt-1">
                        <span className="inline-block mr-3">{t('id')}: {pkg.id}</span>
                        <span className="inline-block mr-3">{t('weight')}: {pkg.weight}</span>
                      </div>
                    </div>
                  ))
              ) : (
                <p className="text-sm text-gray-400">{t('noPackageSelected')}</p>
              )}
            </div>
            <div className="p-4 border border-white/10 rounded-md">
              <h4 className="font-medium mb-2">{t('shippingAddress')}</h4>
              <p className="text-sm">{multipleAddress.name}</p>
              <p className="text-sm">{multipleAddress.address}</p>
              <p className="text-sm">{multipleAddress.city}, {multipleAddress.state} {multipleAddress.zip}</p>
              <p className="text-sm">{multipleAddress.country}</p>
            </div>
            <div className="p-4 border border-white/10 rounded-md">
              <h4 className="font-medium mb-2">{t('shippingMethod')}</h4>
              <div className="flex justify-between text-sm">
                <p className="text-sm">{t('standard')} {t('businessDays7')}</p>
                <p className="text-sm font-medium mt-1">{t('priceStandard')}</p>
              </div>

            </div>
            <div className="p-4 border border-white/10 rounded-md">
              <h4 className="font-medium mb-2">{t('additionalServices')}</h4>
              {multipleSelectedServices.length > 0 ? (
                <div className="space-y-1">
                  {multipleSelectedServices.includes('photos') && (
                    <div className="flex justify-between text-sm"><span>{t('packagePhotos')}</span><span>{t('packagePhotosPrice')}</span></div>
                  )}
                  {multipleSelectedServices.includes('padding') && (
                    <div className="flex justify-between text-sm"><span>{t('extraPadding')}</span><span>{t('extraPaddingPrice')}</span></div>
                  )}
                  {multipleSelectedServices.includes('signature') && (
                    <div className="flex justify-between text-sm"><span>{t('signatureRequired')}</span><span>{t('signatureRequiredPrice')}</span></div>
                  )}
                </div>
              ) : (<p className="text-sm text-gray-400">No additional services selected</p>)}
            </div>
            <div className="p-4 border border-white/10 rounded-md">
              <h4 className="font-medium mb-2">{t('paymentMethod')}</h4>
              <p className="text-sm">
                {multipleSelectedPaymentMethod === 'credit' && 'Credit Card ending in ****'}
                {multipleSelectedPaymentMethod === 'paypal' && 'PayPal'}
                {multipleSelectedPaymentMethod === 'bank' && 'Bank Transfer'}
                {multipleSelectedPaymentMethod === 'bitcoin' && 'Bitcoin'}
              </p>
            </div>
            <div className="p-4 border border-white/10 rounded-md">
              <h4 className="font-medium mb-2">{t('totalCost')}</h4>
              <div className="flex justify-between font-medium">
                <span>{t('total')}</span>
                <span>{t('totalPrice')}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    switch (multipleCurrentStep) {
      case 1:
        // Package selection (allow multiple)
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white">1</div>
              <h3 className="text-lg font-semibold">{t('selectPackages')}</h3>
            </div>
            <p className="text-gray-300 mb-6">{t('selectPackagesToShip')}</p>
            <div className="space-y-4 mb-6">
              {samplePackages.length > 0 ? (
                samplePackages.map(pkg => (
                  <div
                    key={pkg.id}
                    className={cn(
                      "p-4 border rounded-md transition-all duration-200",
                      multipleSelectedPackages.includes(pkg.id)
                        ? "border-deutscher-purple bg-deutscher-purple/10"
                        : "border-white/10 hover:border-white/30"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id={`multiple-pkg-${pkg.id}`}
                        checked={multipleSelectedPackages.includes(pkg.id)}
                        onCheckedChange={() => handleMultiplePackageSelect(pkg.id)}
                        className={cn(
                          "mt-1",
                          multipleSelectedPackages.includes(pkg.id) && "bg-deutscher-purple border-deutscher-purple"
                        )}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <Label
                            htmlFor={`multiple-pkg-${pkg.id}`}
                            className="font-medium text-white cursor-pointer"
                          >
                            {pkg.name}
                          </Label>
                          <span className="text-xs text-gray-400">{pkg.date}</span>
                        </div>
                        <p className="text-sm text-gray-300 mb-2">{pkg.description}</p>
                        <div className="flex flex-wrap text-xs text-gray-400 gap-2 md:gap-4">
                          <div>{t('id')}: <span className="font-mono">{pkg.id}</span></div>
                          <div>{t('source')}: {pkg.source}</div>
                          <div>{t('weight')}: {pkg.weight}</div>
                          <div>{t('dimensions')}: {pkg.dimensions}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 border border-white/10 rounded-md">
                  <p className="font-medium">No packages available</p>
                  <p className="text-sm text-gray-400 mt-2">You don't have any packages ready to ship at this time.</p>
                </div>
              )}
            </div>
          </div>
        );
      case 2:
        // Shipping address (multiple)
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white">2</div>
              <h3 className="text-lg font-semibold">{t('shippingAddress')}</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('fullName')}</Label>
                  <Input id="name" placeholder={t('fullName')} value={multipleAddress.name} className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" onChange={handleMultipleAddressChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('email')}</Label>
                  <Input id="email" placeholder={t('email')} type="email" value={multipleAddress.email} className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" onChange={handleMultipleAddressChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">{t('address')}</Label>
                  <Input id="address" placeholder={t('address')} value={multipleAddress.address} className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" onChange={handleMultipleAddressChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">{t('city')}</Label>
                  <Input id="city" placeholder={t('city')} value={multipleAddress.city} className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" onChange={handleMultipleAddressChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">{t('state')}</Label>
                  <Input id="state" placeholder={t('state')} value={multipleAddress.state} className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" onChange={handleMultipleAddressChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">{t('zipCode')}</Label>
                  <Input id="zip" placeholder={t('zipCode')} value={multipleAddress.zip} className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" onChange={handleMultipleAddressChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">{t('country')}</Label>
                  <Select onValueChange={val => setMultipleAddress(addr => ({ ...addr, country: { us: "United States", ca: "Canada", uk: "United Kingdom", au: "Australia", de: "Germany" }[val] || val }))}>
                    <SelectTrigger className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple">
                      <SelectValue placeholder={t('selectCountry')} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0D0F12] border-deutscher-purple/20">
                      <SelectItem value="us">{t('unitedstates')}</SelectItem>
                      <SelectItem value="ca">{t('canada')}</SelectItem>
                      <SelectItem value="uk">{t('unitedkingdom')}</SelectItem>
                      <SelectItem value="au">{t('australia')}</SelectItem>
                      <SelectItem value="de">{t('germany')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('phone')}</Label>
                  <Input id="phone" placeholder={t('phone')} value={multipleAddress.phone} className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" onChange={handleMultipleAddressChange} />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        // Shipping method & insurance
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white">3</div>
              <h3 className="text-lg font-semibold">{t('shippingMethodAndInsurance')}</h3>
            </div>
            
            <div className="space-y-6 mb-6">
              <div>
                <h4 className="font-medium mb-3">{t('shippingMethod')}</h4>
                <RadioGroup defaultValue="standard" className="space-y-3">
                  {[
                    { value: "express", label: t('express'), description: t('businessDays3'), price: t('priceExpress') },
                    { value: "standard", label: t('standard'), description: t('businessDays7'), price: t('priceStandard') },
                    { value: "economy", label: t('economy'), description: t('businessDays14'), price: t('priceEconomy') }
                  ].map(method => (
                    <div 
                      key={method.value}
                      className={cn(
                        "p-4 border rounded-md transition-all duration-200 group",
                        "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#7E69AB] data-[state=checked]:to-[#6E59A5] data-[state=checked]:text-white",
                        "border-white/10 hover:border-white/30"
                      )}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={method.value} 
                          id={method.value} 
                          className="text-white data-[state=checked]:border-deutscher-purple data-[state=checked]:bg-deutscher-purple" 
                        />
                        <Label htmlFor={method.value} className="flex-1">
                          <div className="font-medium">{method.label}</div>
                          <div className="text-sm text-gray-400">{method.description}</div>
                        </Label>
                        <div className="font-medium">{method.price}</div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-3">{t('insurance')}</h4>
                <RadioGroup defaultValue="basic" className="space-y-3">
                  {[
                    { value: "basic", label: t('basicProtection'), description: t('coverageUpTo100'), price: t('priceBasicProtection') },
                    { value: "premium", label: t('premiumProtection'), description: t('coverageUpTo500'), price: t('pricePremiumProtection') }
                  ].map(insurance => (
                    <div 
                      key={insurance.value}
                      className={cn(
                        "p-4 border rounded-md transition-all duration-200 group",
                        "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#7E69AB] data-[state=checked]:to-[#6E59A5] data-[state=checked]:text-white",
                        "border-white/10 hover:border-white/30"
                      )}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={insurance.value} 
                          id={insurance.value} 
                          className="text-white data-[state=checked]:border-deutscher-purple data-[state=checked]:bg-deutscher-purple" 
                        />
                        <Label htmlFor={insurance.value} className="flex-1">
                          <div className="font-medium">{insurance.label}</div>
                          <div className="text-sm text-gray-400">{insurance.description}</div>
                        </Label>
                        <div className="font-medium">{insurance.price}</div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
        );
      case 4:
        // Additional Services (multiple)
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white">4</div>
              <h3 className="text-lg font-semibold">{t('additionalServices')}</h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className={cn("flex items-center justify-between p-3 border rounded-md transition-all duration-200", multipleSelectedServices.includes('photos') ? "border-deutscher-purple bg-deutscher-purple/10" : "border-white/10 hover:border-deutscher-purple/60")}>
                <div>
                  <h4 className="font-medium">{t('packagePhotos')}</h4>
                  <p className="text-sm text-gray-400">{t('getPhotosBeforeShipping')}</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 font-medium">{t('packagePhotosPrice')}</div>
                  <Checkbox id="multiple-service-photos" className="h-5 w-5 border-white/20 text-deutscher-purple data-[state=checked]:bg-deutscher-purple data-[state=checked]:border-deutscher-purple" checked={multipleSelectedServices.includes('photos')} onCheckedChange={() => handleMultipleServiceSelect('photos')} />
                </div>
              </div>
              <div className={cn("flex items-center justify-between p-3 border rounded-md transition-all duration-200", multipleSelectedServices.includes('padding') ? "border-deutscher-purple bg-deutscher-purple/10" : "border-white/10 hover:border-deutscher-purple/60")}>
                <div>
                  <h4 className="font-medium">{t('extraPadding')}</h4>
                  <p className="text-sm text-gray-400">{t('additionalProtectionForFragileItems')}</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 font-medium">{t('extraPaddingPrice')}</div>
                  <Checkbox id="multiple-service-padding" className="h-5 w-5 border-white/20 text-deutscher-purple data-[state=checked]:bg-deutscher-purple data-[state=checked]:border-deutscher-purple" checked={multipleSelectedServices.includes('padding')} onCheckedChange={() => handleMultipleServiceSelect('padding')} />
                </div>
              </div>
              <div className={cn("flex items-center justify-between p-3 border rounded-md transition-all duration-200", multipleSelectedServices.includes('signature') ? "border-deutscher-purple bg-deutscher-purple/10" : "border-white/10 hover:border-deutscher-purple/60")}>
                <div>
                  <h4 className="font-medium">{t('signatureRequired')}</h4>
                  <p className="text-sm text-gray-400">{t('recipientSignatureRequiredForDelivery')}</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 font-medium">{t('signatureRequiredPrice')}</div>
                  <Checkbox id="multiple-service-signature" className="h-5 w-5 border-white/20 text-deutscher-purple data-[state=checked]:bg-deutscher-purple data-[state=checked]:border-deutscher-purple" checked={multipleSelectedServices.includes('signature')} onCheckedChange={() => handleMultipleServiceSelect('signature')} />
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        // Payment
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white">5</div>
              <h3 className="text-lg font-semibold">{t('paymentMethod')}</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-medium mb-3">{t('paymentMethod')}</h4>
                <RadioGroup 
                  value={multipleSelectedPaymentMethod} 
                  onValueChange={setMultipleSelectedPaymentMethod} 
                  className="space-y-3"
                >
                  <div className={cn(
                    "flex items-center space-x-2 p-3 border rounded-md transition-all duration-200",
                    multipleSelectedPaymentMethod === 'credit'
                      ? "border-deutscher-purple bg-deutscher-purple/10"
                      : "border-white/10 hover:border-deutscher-purple/60"
                  )}>
                    <RadioGroupItem value="credit" id="multiple-credit" className="text-white data-[state=checked]:bg-white" />
                    <Label htmlFor="multiple-credit" className="flex-1">
                      <div className="font-medium flex items-center">
                        <CreditCard className="h-4 w-4 mr-2" />
                        {t('creditCard')}
                      </div>
                    </Label>
                  </div>
                  <div className={cn(
                    "flex items-center space-x-2 p-3 border rounded-md transition-all duration-200",
                    multipleSelectedPaymentMethod === 'paypal'
                      ? "border-deutscher-purple bg-deutscher-purple/10"
                      : "border-white/10 hover:border-deutscher-purple/60"
                  )}>
                    <RadioGroupItem value="paypal" id="multiple-paypal" className="text-white data-[state=checked]:bg-white" />
                    <Label htmlFor="multiple-paypal" className="flex-1">
                      <div className="font-medium">{t('paypal')}</div>
                    </Label>
                  </div>
                  <div className={cn(
                    "flex items-center space-x-2 p-3 border rounded-md transition-all duration-200",
                    multipleSelectedPaymentMethod === 'bank'
                      ? "border-deutscher-purple bg-deutscher-purple/10"
                      : "border-white/10 hover:border-deutscher-purple/60"
                  )}>
                    <RadioGroupItem value="bank" id="multiple-bank" className="text-white data-[state=checked]:bg-white" />
                    <Label htmlFor="multiple-bank" className="flex-1">
                      <div className="font-medium">{t('bankTransfer')}</div>
                    </Label>
                  </div>
                  <div className={cn(
                    "flex items-center space-x-2 p-3 border rounded-md transition-all duration-200",
                    multipleSelectedPaymentMethod === 'bitcoin'
                      ? "border-deutscher-purple bg-deutscher-purple/10"
                      : "border-white/10 hover:border-deutscher-purple/60"
                  )}>
                    <RadioGroupItem value="bitcoin" id="multiple-bitcoin" className="text-white data-[state=checked]:bg-white" />
                    <Label htmlFor="multiple-bitcoin" className="flex-1 flex items-center">
                      <div className="font-medium flex items-center">
                        <Bitcoin className="h-4 w-4 mr-2" />
                        {t('bitcoin')}
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              {multipleSelectedPaymentMethod === 'credit' && (
                <div className="p-4 border border-deutscher-purple/20 rounded-md bg-deutscher-purple/5">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="multiple-cc-name">{t('nameOnCard')}</Label>
                      <Input 
                        id="multiple-cc-name" 
                        placeholder={t('nameOnCard')} 
                        className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="multiple-cc-number">{t('cardNumber')}</Label>
                      <Input 
                        id="multiple-cc-number" 
                        placeholder={t('cardNumber')} 
                        className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="multiple-cc-expiry">{t('expiryDate')}</Label>
                        <Input 
                          id="multiple-cc-expiry" 
                          placeholder={t('expiryDate')} 
                          className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="multiple-cc-cvc">{t('cvc')}</Label>
                        <Input 
                          id="multiple-cc-cvc" 
                          placeholder={t('cvc')}
                          className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case 6:
        // Already handled by summary above
        return null;
      default:
        return null;
    }
  };

  // ----- New: Consolidation Package Content -----
  const renderConsolidationPackageContent = () => {
    if (orderCompleted && getCurrentStep() === 6 && selectedOption === "consolidation") {
      // Copy the summary rendering, but for consolidation
      return (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-full bg-green-500 border border-green-500 flex items-center justify-center text-white">
              <Check className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{t('orderSummary')}</h3>
          </div>
          <div className="space-y-4 mb-6">
            <div className="p-4 border border-white/10 rounded-md">
              <h4 className="font-medium mb-2">{t('packageDetails')}</h4>
              {consolidationSelectedPackages.length > 0 ? (
                samplePackages
                  .filter(pkg => consolidationSelectedPackages.includes(pkg.id))
                  .map(pkg => (
                    <div key={pkg.id} className="mb-2 last:mb-0">
                      <p className="text-sm font-medium">{pkg.name}</p>
                      <p className="text-xs text-gray-400">{pkg.description}</p>
                      <div className="text-xs text-gray-400 mt-1">
                        <span className="inline-block mr-3">{t('id')}: {pkg.id}</span>
                        <span className="inline-block mr-3">{t('weight')}: {pkg.weight}</span>
                      </div>
                    </div>
                  ))
              ) : (
                <p className="text-sm text-gray-400">{t('noPackageSelected')}</p>
              )}
            </div>
            <div className="p-4 border border-white/10 rounded-md">
              <h4 className="font-medium mb-2">{t('shippingAddress')}</h4>
              <p className="text-sm">{consolidationAddress.name}</p>
              <p className="text-sm">{consolidationAddress.address}</p>
              <p className="text-sm">{consolidationAddress.city}, {consolidationAddress.state} {consolidationAddress.zip}</p>
              <p className="text-sm">{consolidationAddress.country}</p>
            </div>
            <div className="p-4 border border-white/10 rounded-md">
              <h4 className="font-medium mb-2">{t('shippingMethod')}</h4>
              <div className="flex justify-between text-sm">
                <p className="text-sm">{t('standard')} {t('businessDays7')}</p>
                <p className="text-sm font-medium mt-1">{t('priceStandard')}</p>
              </div>
            </div>
            <div className="p-4 border border-white/10 rounded-md">
              <h4 className="font-medium mb-2">{t('additionalServices')}</h4>
              {consolidationSelectedServices.length > 0 ? (
                <div className="space-y-1">
                  {consolidationSelectedServices.includes('photos') && (
                    <div className="flex justify-between text-sm"><span>{t('packagePhotos')}</span><span>{t('packagePhotosPrice')}</span></div>
                  )}
                  {consolidationSelectedServices.includes('padding') && (
                    <div className="flex justify-between text-sm"><span>{t('extraPadding')}</span><span>{t('extraPaddingPrice')}</span></div>
                  )}
                  {consolidationSelectedServices.includes('signature') && (
                    <div className="flex justify-between text-sm"><span>{t('signatureRequired')}</span><span>{t('signatureRequiredPrice')}</span></div>
                  )}
                </div>
              ) : (<p className="text-sm text-gray-400">{t('noAdditionalServicesSelected')}</p>)}
            </div>
            <div className="p-4 border border-white/10 rounded-md">
              <h4 className="font-medium mb-2">{t('paymentMethod')}</h4>
              <p className="text-sm">
                {consolidationSelectedPaymentMethod === 'credit' && 'Credit Card ending in ****'}
                {consolidationSelectedPaymentMethod === 'paypal' && 'PayPal'}
                {consolidationSelectedPaymentMethod === 'bank' && 'Bank Transfer'}
                {consolidationSelectedPaymentMethod === 'bitcoin' && 'Bitcoin'}
              </p>
            </div>
            <div className="p-4 border border-white/10 rounded-md">
              <h4 className="font-medium mb-2">{t('totalCost')}</h4>
              <div className="flex justify-between font-medium">
                <span>{t('total')}</span>
                <span>{t('totalPrice')}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    switch (consolidationCurrentStep) {
      case 1:
        // Select address first
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white">1</div>
              <h3 className="text-lg font-semibold">{t('shippingAddress')}</h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('fullName')}</Label>
                  <Input id="name" placeholder={t('fullName')} value={consolidationAddress.name} className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" onChange={handleConsolidationAddressChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('email')}</Label>
                  <Input id="email" placeholder={t('email')} type="email" value={consolidationAddress.email} className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" onChange={handleConsolidationAddressChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">{t('address')}</Label>
                  <Input id="address" placeholder={t('address')} value={consolidationAddress.address} className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" onChange={handleConsolidationAddressChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">{t('city')}</Label>
                  <Input id="city" placeholder={t('city')} value={consolidationAddress.city} className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" onChange={handleConsolidationAddressChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">{t('state')}</Label>
                  <Input id="state" placeholder={t('state')} value={consolidationAddress.state} className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" onChange={handleConsolidationAddressChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">{t('zipCode')}</Label>
                  <Input id="zip" placeholder={t('zipCode')} value={consolidationAddress.zip} className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" onChange={handleConsolidationAddressChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">{t('country')}</Label>
                  <Select onValueChange={val => setConsolidationAddress(addr => ({ ...addr, country: { us: "United States", ca: "Canada", uk: "United Kingdom", au: "Australia", de: "Germany" }[val] || val }))}>
                    <SelectTrigger className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple">
                      <SelectValue placeholder={t('selectCountry')} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0D0F12] border-deutscher-purple/20">
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('phone')}</Label>
                  <Input id="phone" placeholder="Phone" value={consolidationAddress.phone} className="bg-[#0D0F12] border-white/10 focus:border-deutscher-purple focus:ring-deutscher-purple" onChange={handleConsolidationAddressChange} />
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        // Package selection (consolidation)
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white">2</div>
              <h3 className="text-lg font-semibold">{t('selectPackages')}</h3>
            </div>
            <p className="text-gray-300 mb-6">{t('selectPackagesToShip')}</p>
            <div className="space-y-4 mb-6">
              {samplePackages.length > 0 ? (
                samplePackages.map(pkg => (
                  <div
                    key={pkg.id}
                    className={cn(
                      "p-4 border rounded-md transition-all duration-200",
                      consolidationSelectedPackages.includes(pkg.id)
                        ? "border-deutscher-purple bg-deutscher-purple/10"
                        : "border-white/10 hover:border-white/30"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id={`consolidation-pkg-${pkg.id}`}
                        checked={consolidationSelectedPackages.includes(pkg.id)}
                        onCheckedChange={() => handleConsolidationPackageSelect(pkg.id)}
                        className={cn(
                          "mt-1",
                          consolidationSelectedPackages.includes(pkg.id) && "bg-deutscher-purple border-deutscher-purple"
                        )}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <Label
                            htmlFor={`consolidation-pkg-${pkg.id}`}
                            className="font-medium text-white cursor-pointer"
                          >
                            {pkg.name}
                          </Label>
                          <span className="text-xs text-gray-400">{pkg.date}</span>
                        </div>
                        <p className="text-sm text-gray-300 mb-2">{pkg.description}</p>
                        <div className="flex flex-wrap text-xs text-gray-400 gap-2 md:gap-4">
                          <div>{t('id')}: <span className="font-mono">{pkg.id}</span></div>
                          <div>{t('source')}: {pkg.source}</div>
                          <div>{t('weight')}: {pkg.weight}</div>
                          <div>{t('dimensions')}: {pkg.dimensions}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 border border-white/10 rounded-md">
                  <p className="font-medium">No packages available</p>
                  <p className="text-sm text-gray-400 mt-2">You don't have any packages ready to ship at this time.</p>
                </div>
              )}
            </div>
          </div>
        );
      case 3:
        // Shipping method & insurance
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white">3</div>
              <h3 className="text-lg font-semibold">{t('shippingMethodAndInsurance')}</h3>
            </div>
            
            <div className="space-y-6 mb-6">
              <div>
                <h4 className="font-medium mb-3">{t('shippingMethod')}</h4>
                <RadioGroup defaultValue="standard" className="space-y-3">
                  {[
                    { value: "economy", label: "Economy", description: "7-14 business days", price: "$15.00" },
                    { value: "standard", label: "Standard", description: "4-7 business days", price: "$25.00" },
                    { value: "express", label: "Express", description: "2-3 business days", price: "$45.00" }
                  ].map(method => (
                    <div 
                      key={method.value}
                      className={cn(
                        "p-4 border rounded-md transition-all duration-200 group",
                        "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#7E69AB] data-[state=checked]:to-[#6E59A5] data-[state=checked]:text-white",
                        "border-white/10 hover:border-white/30"
                      )}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={method.value} 
                          id={`consolidation-${method.value}`} 
                          className="text-white data-[state=checked]:border-deutscher-purple data-[state=checked]:bg-deutscher-purple" 
                        />
                        <Label htmlFor={`consolidation-${method.value}`} className="flex-1">
                          <div className="font-medium">{method.label}</div>
                          <div className="text-sm text-gray-400">{method.description}</div>
                        </Label>
                        <div className="font-medium">{method.price}</div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-3">{t('insurance')}</h4>
                <RadioGroup defaultValue="basic" className="space-y-3">
                  {[
                    { value: "basic", label: "Basic Protection", description: "Coverage up to $100", price: "$5.00" },
                    { value: "premium", label: "Premium Protection", description: "Coverage up to $500", price: "$15.00" }
                  ].map(insurance => (
                    <div 
                      key={insurance.value}
                      className={cn(
                        "p-4 border rounded-md transition-all duration-200 group",
                        "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#7E69AB] data-[state=checked]:to-[#6E59A5] data-[state=checked]:text-white",
                        "border-white/10 hover:border-white/30"
                      )}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={insurance.value} 
                          id={`consolidation-${insurance.value}`} 
                          className="text-white data-[state=checked]:border-deutscher-purple data-[state=checked]:bg-deutscher-purple" 
                        />
                        <Label htmlFor={`consolidation-${insurance.value}`} className="flex-1">
                          <div className="font-medium">{insurance.label}</div>
                          <div className="text-sm text-gray-400">{insurance.description}</div>
                        </Label>
                        <div className="font-medium">{insurance.price}</div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
        );
      case 4:
        // Additional Services (consolidation)
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white">4</div>
              <h3 className="text-lg font-semibold">{t('additionalServices')}</h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className={cn("flex items-center justify-between p-3 border rounded-md transition-all duration-200", consolidationSelectedServices.includes('photos') ? "border-deutscher-purple bg-deutscher-purple/10" : "border-white/10 hover:border-deutscher-purple/60")}>
                <div>
                  <h4 className="font-medium">{t('packagePhotos')}</h4>
                  <p className="text-sm text-gray-400">{t('getPhotosBeforeShipping')}</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 font-medium">$5.00</div>
                  <Checkbox id="consolidation-service-photos" className="h-5 w-5 border-white/20 text-deutscher-purple data-[state=checked]:bg-deutscher-purple data-[state=checked]:border-deutscher-purple" checked={consolidationSelectedServices.includes('photos')} onCheckedChange={() => handleConsolidationServiceSelect('photos')} />
                </div>
              </div>
              <div className={cn("flex items-center justify-between p-3 border rounded-md transition-all duration-200", consolidationSelectedServices.includes('padding') ? "border-deutscher-purple bg-deutscher-purple/10" : "border-white/10 hover:border-deutscher-purple/60")}>
                <div>
                  <h4 className="font-medium">{t('extraPadding')}</h4>
                  <p className="text-sm text-gray-400">{t('additionalProtectionForFragileItems')}</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 font-medium">$3.50</div>
                  <Checkbox id="consolidation-service-padding" className="h-5 w-5 border-white/20 text-deutscher-purple data-[state=checked]:bg-deutscher-purple data-[state=checked]:border-deutscher-purple" checked={consolidationSelectedServices.includes('padding')} onCheckedChange={() => handleConsolidationServiceSelect('padding')} />
                </div>
              </div>
              <div className={cn("flex items-center justify-between p-3 border rounded-md transition-all duration-200", consolidationSelectedServices.includes('signature') ? "border-deutscher-purple bg-deutscher-purple/10" : "border-white/10 hover:border-deutscher-purple/60")}>
                <div>
                  <h4 className="font-medium">{t('signatureRequired')}</h4>
                  <p className="text-sm text-gray-400">{t('recipientSignatureRequiredForDelivery')}</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 font-medium">$2.00</div>
                  <Checkbox id="consolidation-service-signature" className="h-5 w-5 border-white/20 text-deutscher-purple data-[state=checked]:bg-deutscher-purple data-[state=checked]:border-deutscher-purple" checked={consolidationSelectedServices.includes('signature')} onCheckedChange={() => handleConsolidationServiceSelect('signature')} />
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        // Payment
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white">5</div>
              <h3 className="text-lg font-semibold">{t('paymentMethod')}</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-medium mb-3">{t('paymentMethod')}</h4>
                <RadioGroup 
                  value={consolidationSelectedPaymentMethod} 
                  onValueChange={setConsolidationSelectedPaymentMethod} 
                  className="space-y-3"
                >
                  <div className={cn(
                    "flex items-center space-x-2 p-3 border rounded-md transition-all duration-200",
                    consolidationSelectedPaymentMethod === 'credit'
                      ? "border-deutscher-purple bg-deutscher-purple/10"
                      : "border-white/10 hover:border-deutscher-purple/60"
                  )}>
                    <RadioGroupItem value="credit" id="consolidation-credit" className="text-white data-[state=checked]:bg-white" />
                    <Label htmlFor="consolidation-credit" className="flex-1">
                      <div className="font-medium flex items-center">
                        <CreditCard className="h-4 w-4 mr-2" />
                        {t('creditCard')}
                      </div>
                    </Label>
                  </div>
                  <div className={cn(
                    "flex items-center space-x-2 p-3 border rounded-md transition-all duration-200",
                    consolidationSelectedPaymentMethod === 'paypal'
                      ? "border-deutscher-purple bg-deutscher-purple/10"
                      : "border-white/10 hover:border-deutscher-purple/60"
                  )}>
                    <RadioGroupItem value="paypal" id="consolidation-paypal" className="text-white data-[state=checked]:bg-white" />
                    <Label htmlFor="consolidation-paypal" className="flex-1">
                      <div className="font-medium">{t('paypal')}</div>
                    </Label>
                  </div>
                  <div className={cn(
                    "flex items-center space-x-2 p-3 border rounded-md transition-all duration-200",
                    consolidationSelectedPaymentMethod === 'bank'
                      ? "border-deutscher-purple bg-deutscher-purple/10"
                      : "border-white/10 hover:border-deutscher-purple/60"
                  )}>
                    <RadioGroupItem value="bank" id="consolidation-bank" className="text-white data-[state=checked]:bg-white" />
                    <Label htmlFor="consolidation-bank" className="flex-1">
                      <div className="font-medium">{t('bankTransfer')}</div>
                    </Label>
                  </div>
                  <div className={cn(
                    "flex items-center space-x-2 p-3 border rounded-md transition-all duration-200",
                    consolidationSelectedPaymentMethod === 'bitcoin'
                      ? "border-deutscher-purple bg-deutscher-purple/10"
                      : "border-white/10 hover:border-deutscher-purple/60"
                  )}>
                    <RadioGroupItem value="bitcoin" id="consolidation-bitcoin" className="text-white data-[state=checked]:bg-white" />
                    <Label htmlFor="consolidation-bitcoin" className="flex-1 flex items-center">
                      <div className="font-medium flex items-center">
                        <Bitcoin className="h-4 w-4 mr-2" />
                        {t('bitcoin')}
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              {consolidationSelectedPaymentMethod === 'credit' && (
                <div className="p-4 border border-deutscher-purple/20 rounded-md bg-deutscher-purple/5">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="consolidation-cc-name">{t('nameOnCard')}</Label>
                      <Input 
                        id="consolidation-cc-name" 
                        placeholder={t('nameOnCard')} 
                        className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="consolidation-cc-number">{t('cardNumber')}</Label>
                      <Input 
                        id="consolidation-cc-number" 
                        placeholder={t('cardNumber')} 
                        className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="consolidation-cc-expiry">{t('expiryDate')}</Label>
                        <Input 
                          id="consolidation-cc-expiry" 
                          placeholder={t('expiryDate')} 
                          className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="consolidation-cc-cvc">{t('cvc')}</Label>
                        <Input 
                          id="consolidation-cc-cvc" 
                          placeholder={t('cvc')}
                          className="bg-[#0D0F12] border-deutscher-purple/30 focus:border-deutscher-purple focus:ring-deutscher-purple" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case 6:
        // Already handled by summary above
        return null;
      default:
        return null;
    }
  };

  return (
    <Card className="bg-[#0D0F12] border-none">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">{t('shipYourPackages')}</CardTitle>
        <CardDescription>{t('configureShipping')}</CardDescription>
        
        <Tabs value={selectedOption} onValueChange={(value) => setSelectedOption(value as ShippingOption)} className="mt-4">
          <TabsList className="bg-[#191C20] grid w-full grid-cols-3 h-12 p-0 gap-1">
            <TabsTrigger 
              value="single" 
              className="h-full data-[state=active]:bg-deutscher-purple data-[state=active]:text-white flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Package2 className="h-4 w-4 hidden sm:inline" />
              {t('single')}
            </TabsTrigger>
            <TabsTrigger 
              value="multiple" 
              className="h-full data-[state=active]:bg-deutscher-purple data-[state=active]:text-white flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Package className="h-4 w-4 hidden sm:inline" />
              {t('multiple')}
            </TabsTrigger>
            <TabsTrigger 
              value="consolidation" 
              className="h-full data-[state=active]:bg-deutscher-purple data-[state=active]:text-white flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <PackageCheck className="h-4 w-4 hidden sm:inline" />
              {t('consol')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="single" className="space-y-4 mt-6">
            {renderTimeline(singlePackageSteps)}
            {renderSinglePackageContent()}
            
            <div className="flex justify-between pt-4 mt-6 border-t border-white/10">
              <Button 
                variant="outline" 
                onClick={goToPreviousStep}
                disabled={singleCurrentStep === 1}
                className={cn(
                  "border-white/10 bg-[#191C20] hover:bg-[#191C20]/70",
                  singleCurrentStep === 1 && "opacity-50 cursor-not-allowed"
                )}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('previous')}
              </Button>
              
              <Button 
                onClick={singleCurrentStep === 6 ? handleCompleteOrder : goToNextStep}
                className="bg-deutscher-purple hover:bg-deutscher-purple/90"
              >
                {singleCurrentStep === 6 ? 'Complete Order' : t('next')}
                {singleCurrentStep !== 6 && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="multiple" className="space-y-4 mt-6">
            {renderTimeline(multiplePackageSteps)}
            {renderMultiplePackageContent()}
            <div className="flex justify-between pt-4 mt-6 border-t border-white/10">
              <Button variant="outline" onClick={goToPreviousStep} disabled={multipleCurrentStep === 1} className={cn("border-white/10 bg-[#191C20] hover:bg-[#191C20]/70", multipleCurrentStep === 1 && "opacity-50 cursor-not-allowed")}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('previous')}
              </Button>
              <Button onClick={multipleCurrentStep === 6 ? handleCompleteOrder : goToNextStep} className="bg-deutscher-purple hover:bg-deutscher-purple/90">
                {multipleCurrentStep === 6 ? 'Complete Order' : t('next')}
                {multipleCurrentStep !== 6 && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="consolidation" className="space-y-4 mt-6">
            {renderTimeline(consolidationSteps)}
            {renderConsolidationPackageContent()}
            <div className="flex justify-between pt-4 mt-6 border-t border-white/10">
              <Button variant="outline" onClick={goToPreviousStep} disabled={consolidationCurrentStep === 1} className={cn("border-white/10 bg-[#191C20] hover:bg-[#191C20]/70", consolidationCurrentStep === 1 && "opacity-50 cursor-not-allowed")}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('previous')}
              </Button>
              <Button onClick={consolidationCurrentStep === 6 ? handleCompleteOrder : goToNextStep} className="bg-deutscher-purple hover:bg-deutscher-purple/90">
                {consolidationCurrentStep === 6 ? 'Complete Order' : t('next')}
                {consolidationCurrentStep !== 6 && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardHeader>
      
      <Dialog open={orderSummaryOpen} onOpenChange={setOrderSummaryOpen}>
        <DialogContent className="w-[90vw] max-w-[600px] p-4 sm:p-6 bg-[#0D0F12] border border-white/10">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-green-500 border border-green-500 flex items-center justify-center text-white">
                <Check className="h-5 w-5" />
              </div>
              {t('orderSubmittedSuccessfully')}
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              {t('orderSubmittedMessage')}
            </DialogDescription>
          </DialogHeader>
          
          {(selectedOption === "single" && renderOrderSummary()) ||
            (selectedOption === "multiple" && renderMultiplePackageContent()) ||
            (selectedOption === "consolidation" && renderConsolidationPackageContent())}
          
          <div className="flex gap-3 justify-end mt-4">
            <DialogClose asChild>
              <Button variant="outline" className="border-white/10 bg-[#191C20] hover:bg-[#191C20]/70">
                {t('close')}
              </Button>
            </DialogClose>
            <Button className="bg-deutscher-purple hover:bg-deutscher-purple/90">
              {t('trackShipment')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ReadyToShipSection;