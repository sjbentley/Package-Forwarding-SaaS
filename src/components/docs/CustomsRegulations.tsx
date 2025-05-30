
import React, { useState } from 'react';
import { ArrowLeft, Shield, AlertTriangle, FileCheck, Landmark, FileText, Ban, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from '@/hooks/useTranslation';

type ItemStatus = 'prohibited' | 'limited' | 'allowed';

interface ProhibitedItem {
  id: string;
  name: string;
  status: ItemStatus;
  description: string;
  icon: string;
}

interface CountryRestrictions {
  countryCode: string;
  countryName: string;
  flag: string;
  items: ProhibitedItem[];
}

interface CustomsRegulationsProps {
  onBack: () => void;
}

const COUNTRY_RESTRICTIONS: CountryRestrictions[] = [
  {
    countryCode: 'DE',
    countryName: 'Germany',
    flag: '🇩🇪',
    items: [
      { id: 'aerosols', name: 'Aerosols', status: 'limited', description: 'Limited quantities with proper packaging.', icon: '🧴' },
      { id: 'agriculture', name: 'Agriculture', status: 'prohibited', description: 'Seeds, plants, and soil are prohibited.', icon: '🌱' },
      { id: 'alcohol', name: 'Alcohol', status: 'limited', description: 'Limited quantities with proper documentation.', icon: '🍷' },
      { id: 'animals', name: 'Animals', status: 'prohibited', description: 'Live or preserved animals are prohibited.', icon: '🐄' },
      { id: 'art', name: 'Art and Antiquities', status: 'limited', description: 'Requires documentation and may be subject to duties.', icon: '🖼️' },
      { id: 'batteries', name: 'Batteries', status: 'limited', description: 'Lithium and lead-acid batteries have special restrictions.', icon: '🔋' },
      { id: 'biohazards', name: 'Biohazards', status: 'prohibited', description: 'Biological materials are strictly prohibited.', icon: '☣️' },
      { id: 'cbd', name: 'CBD Products', status: 'prohibited', description: 'CBD products are prohibited.', icon: '🌿' },
      { id: 'cellphone', name: 'Cell Phones', status: 'limited', description: 'Must comply with telecommunications regulations.', icon: '📱' },
      { id: 'chemicals', name: 'Chemicals', status: 'prohibited', description: 'Hazardous chemicals are not allowed.', icon: '🧪' },
      { id: 'corrosive', name: 'Corrosive Materials', status: 'prohibited', description: 'Corrosive substances that can damage other items are prohibited.', icon: '⚗️' },
      { id: 'counterfeit', name: 'Counterfeit Goods', status: 'prohibited', description: 'Fake or replicated brand items are illegal.', icon: '🚫' },
      { id: 'antiquities', name: 'Antiquities', status: 'prohibited', description: 'Historical artifacts without proper documentation are prohibited.', icon: '🏺' },
      { id: 'currency', name: 'Currency Over €10,000', status: 'prohibited', description: 'Large amounts of cash must be declared and may be restricted.', icon: '💶' },
      { id: 'drones', name: 'Drones', status: 'limited', description: 'Subject to aviation regulations and restrictions.', icon: '🚁' },
      { id: 'endangered', name: 'Endangered Species Products', status: 'prohibited', description: 'Items made from protected species are illegal to import.', icon: '🐆' },
      { id: 'forgedDocuments', name: 'Forged Documents', status: 'prohibited', description: 'Fake IDs, passports, or other official documents are illegal.', icon: '📄' },
      { id: 'furs', name: 'Furs', status: 'prohibited', description: 'Many fur products are banned or heavily restricted.', icon: '🧥' },
      { id: 'hacking', name: 'Hacking Devices', status: 'prohibited', description: 'Devices designed for unauthorized system access.', icon: '🔓' },
      { id: 'mercury', name: 'Mercury Products', status: 'prohibited', description: 'Products containing mercury are banned.', icon: '🧪' },
      { id: 'satelliteEquipment', name: 'Satellite Equipment', status: 'prohibited', description: 'Communication equipment may require special licensing.', icon: '📡' },
      { id: 'surveillanceEquipment', name: 'Surveillance Equipment', status: 'prohibited', description: 'Specialized equipment may be restricted by law.', icon: '👁️' }
    ]
  },
  {
    countryCode: 'US',
    countryName: 'United States',
    flag: '🇺🇸',
    items: [
      { id: 'aerosols', name: 'Aerosols', status: 'limited', description: 'Limited quantities allowed with proper packaging.', icon: '🧴' },
      { id: 'agriculture', name: 'Agriculture', status: 'prohibited', description: 'Seeds, plants, and soil require permits.', icon: '🌱' },
      { id: 'alcohol', name: 'Alcohol', status: 'limited', description: 'Limited quantities with proper documentation.', icon: '🍷' },
      { id: 'animals', name: 'Animals', status: 'prohibited', description: 'Live animals require permits and health certificates.', icon: '🐄' },
      { id: 'kava', name: 'Kava', status: 'prohibited', description: 'Banned in many states and subject to FDA restrictions.', icon: '🌿' },
      { id: 'kratom', name: 'Kratom', status: 'prohibited', description: 'Illegal in some states and under DEA review.', icon: '🍃' },
      { id: 'lacquerware', name: 'Lacquerware', status: 'limited', description: 'May be subject to finish/coating restrictions.', icon: '🏺' },
      { id: 'meatProducts', name: 'Meat Products', status: 'prohibited', description: 'Subject to strict USDA regulations and often prohibited.', icon: '🥩' },
      { id: 'pesticides', name: 'Pesticides', status: 'prohibited', description: 'Regulated by EPA and often prohibited for import.', icon: '🐛' },
      { id: 'seeds', name: 'Seeds', status: 'prohibited', description: 'Most seeds require USDA permits and phytosanitary certificates.', icon: '🌾' },
      { id: 'taxidermy', name: 'Taxidermy', status: 'prohibited', description: 'Preserved animals may contain protected species.', icon: '🦌' },
      { id: 'tradingCards', name: 'Trading Cards (High Value)', status: 'limited', description: 'Collectibles over certain values require insurance.', icon: '🃏' },
      { id: 'unregisteredFoodSupplements', name: 'Unregistered Food Supplements', status: 'prohibited', description: 'Supplements not approved by FDA.', icon: '💊' },
      { id: 'wildlifeProducts', name: 'Wildlife Products', status: 'prohibited', description: 'Products from protected species are prohibited.', icon: '🦅' }
    ]
  },
  {
    countryCode: 'FR',
    countryName: 'France',
    flag: '🇫🇷',
    items: [
      { id: 'aerosols', name: 'Aerosols', status: 'limited', description: 'Limited quantities with proper packaging.', icon: '🧴' },
      { id: 'alcohol', name: 'Alcohol', status: 'limited', description: 'Limited quantities with proper documentation.', icon: '🍷' },
      { id: 'animals', name: 'Animals', status: 'prohibited', description: 'Live or preserved animals are prohibited.', icon: '🐄' },
      { id: 'art', name: 'Art and Antiquities', status: 'limited', description: 'Requires documentation and may be subject to duties.', icon: '🖼️' },
      { id: 'batteries', name: 'Batteries', status: 'limited', description: 'Lithium batteries have special restrictions.', icon: '🔋' },
      { id: 'counterfeit', name: 'Counterfeit Goods', status: 'prohibited', description: 'Fake luxury items are strictly prohibited.', icon: '🚫' },
      { id: 'drugs', name: 'Drugs', status: 'prohibited', description: 'Illegal and prescription drugs are prohibited.', icon: '💊' },
      { id: 'electronics', name: 'Electronics', status: 'limited', description: 'Must comply with EU regulations.', icon: '💻' },
      { id: 'firearms', name: 'Firearms', status: 'prohibited', description: 'All firearms are prohibited without permits.', icon: '🔫' },
      { id: 'foieGras', name: 'Non-French Foie Gras', status: 'prohibited', description: 'Protected designation of origin applies.', icon: '🍽️' },
      { id: 'ivoryProducts', name: 'Ivory Products', status: 'prohibited', description: 'Banned under conservation laws.', icon: '🐘' },
      { id: 'knives', name: 'Combat Knives', status: 'prohibited', description: 'Weapons are strictly controlled.', icon: '🔪' },
      { id: 'perfume', name: 'Perfume', status: 'limited', description: 'Limited quantities due to alcohol content.', icon: '🧴' },
      { id: 'tobacco', name: 'Tobacco', status: 'limited', description: 'Limited quantities subject to taxation.', icon: '🚬' },
      { id: 'wine', name: 'Wine', status: 'limited', description: 'Limited quantities with proper documentation.', icon: '🍷' }
    ]
  },
  {
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    items: [
      { id: 'agriculture', name: 'Agricultural Products', status: 'prohibited', description: 'Seeds, plants, and soil are prohibited.', icon: '🌱' },
      { id: 'alcohol', name: 'Alcohol', status: 'limited', description: 'Limited quantities subject to duty.', icon: '🍷' },
      { id: 'batteries', name: 'Lithium Batteries', status: 'limited', description: 'Special packaging requirements.', icon: '🔋' },
      { id: 'cheese', name: 'Dairy Products', status: 'prohibited', description: 'Most dairy products prohibited post-Brexit.', icon: '🧀' },
      { id: 'currency', name: 'Currency Over £10,000', status: 'prohibited', description: 'Must be declared.', icon: '💷' },
      { id: 'meat', name: 'Meat Products', status: 'prohibited', description: 'All meat products prohibited post-Brexit.', icon: '🥩' },
      { id: 'medicines', name: 'Medicines', status: 'limited', description: 'Personal use only with prescription.', icon: '💊' },
      { id: 'plants', name: 'Plants', status: 'prohibited', description: 'Live plants and seeds require permits.', icon: '🌱' },
      { id: 'tobacco', name: 'Tobacco', status: 'limited', description: 'Limited quantities subject to duty.', icon: '🚬' },
      { id: 'weapons', name: 'Weapons', status: 'prohibited', description: 'All weapons are prohibited.', icon: '⚔️' }
    ]
  }
];

const CustomsRegulations = ({ onBack }: CustomsRegulationsProps) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'import-duties' | 'prohibited-items' | 'documentation' | 'regulations'>('import-duties');
  const [selectedCountry, setSelectedCountry] = useState('DE');
  const [prohibitedFilterTab, setProhibitedFilterTab] = useState<'all' | 'prohibited' | 'limited'>('all');
  
  const countryData = COUNTRY_RESTRICTIONS.find(country => country.countryCode === selectedCountry) || COUNTRY_RESTRICTIONS[0];
  
  const filteredItems = prohibitedFilterTab === 'all'
    ? countryData.items
    : countryData.items.filter(item => item.status === prohibitedFilterTab);

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" className="h-8 w-8" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-xl md:text-2xl font-bold text-white">{t('customsRegulationsTitle')}</h2>
      </div>
      
      <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-4 md:p-6 text-white">
        <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
          {t('customsRegulationsIntro')}
        </p>
        
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'import-duties' | 'prohibited-items' | 'documentation' | 'regulations')} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-[#161A1F] mb-4 md:mb-6 h-auto">
            <TabsTrigger 
              value="import-duties" 
              className="text-xs md:text-sm py-2 text-white data-[state=active]:bg-deutscher-purple data-[state=active]:text-white"
            >
              {t('customsTabImportDuties')}
            </TabsTrigger>
            <TabsTrigger 
              value="prohibited-items" 
              className="text-xs md:text-sm py-2 text-white data-[state=active]:bg-deutscher-purple data-[state=active]:text-white"
            >
              {t('customsTabProhibitedItems')}
            </TabsTrigger>
            <TabsTrigger 
              value="documentation" 
              className="text-xs md:text-sm py-2 text-white data-[state=active]:bg-deutscher-purple data-[state=active]:text-white"
            >
              {t('customsTabDocumentation')}
            </TabsTrigger>
            <TabsTrigger 
              value="regulations" 
              className="text-xs md:text-sm py-2 text-white data-[state=active]:bg-deutscher-purple data-[state=active]:text-white"
            >
              {t('customsTabRegulations')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="import-duties" className="mt-0">
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
                <div className="bg-deutscher-purple/20 p-3 rounded-full mb-3 md:mb-0 md:mt-1 mx-auto md:mx-0">
                  <Shield className="h-6 w-6 text-deutscher-purple-light" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 text-center md:text-left">{t('customsImportDutiesTitle')}</h3>
                  <p className="text-sm md:text-base text-gray-400 mb-4">
                    {t('customsImportDutiesDesc')}
                  </p>
                  
                  <div className="bg-[#161A1F] border border-white/10 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
                    <h4 className="font-medium text-deutscher-purple-light mb-2">{t('customsImportDutiesVAT')}</h4>
                    <ul className="list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base text-gray-400">
                      <li>{t('customsImportDutiesVATList1')}</li>
                      <li>{t('customsImportDutiesVATList2')}</li>
                      <li>{t('customsImportDutiesVATList3')}</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#161A1F] border border-white/10 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
                    <h4 className="font-medium text-deutscher-purple-light mb-2">{t('customsImportDutiesCustoms')}</h4>
                    <ul className="list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base text-gray-400">
                      <li>{t('customsImportDutiesCustomsList1')}</li>
                      <li>{t('customsImportDutiesCustomsList2')}</li>
                      <li>{t('customsImportDutiesCustomsList3')}</li>
                    </ul>
                    
                    <div className="mt-3 md:mt-4">
                      <p className="text-xs md:text-sm text-gray-400 italic">
                        {t('customsImportDutiesCustomsNote')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-[#161A1F] border border-white/10 rounded-lg p-3 md:p-4">
                    <h4 className="font-medium text-deutscher-purple-light mb-2">{t('customsImportDutiesHowWeHandle')}</h4>
                    <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                      {t('customsImportDutiesHowWeHandleDesc')}
                    </p>
                    <ul className="list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base text-gray-400">
                      <li>{t('customsImportDutiesHowWeHandleList1')}</li>
                      <li>{t('customsImportDutiesHowWeHandleList2')}</li>
                      <li>{t('customsImportDutiesHowWeHandleList3')}</li>
                      <li>{t('customsImportDutiesHowWeHandleList4')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="prohibited-items" className="mt-0">
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
                <div className="bg-deutscher-purple/20 p-3 rounded-full mb-3 md:mb-0 md:mt-1 mx-auto md:mx-0">
                  <AlertTriangle className="h-6 w-6 text-deutscher-purple-light" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 text-center md:text-left">{t('customsProhibitedTitle')}</h3>
                  <p className="text-sm md:text-base text-gray-400 mb-4">
                    {t('customsProhibitedDesc')}
                  </p>
                  
                  <Card className="bg-[#161A1F] border-white/10 text-white mb-4 md:mb-6">
                    <CardHeader className="px-3 md:px-6 py-3 md:py-4">
                      <CardTitle className="text-base md:text-lg">{t('customsProhibitedSelectCountry')}</CardTitle>
                      <CardDescription className="text-xs md:text-sm text-gray-400">
                        {t('customsProhibitedSelectCountryDesc')}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-3 md:px-6 py-3 md:py-4">
                      <Select
                        value={selectedCountry}
                        onValueChange={setSelectedCountry}
                      >
                        <SelectTrigger className="w-full md:w-80 bg-white/5 border-white/10 text-white">
                          <SelectValue>
                            <div className="flex items-center gap-2">
                              <span>{COUNTRY_RESTRICTIONS.find(c => c.countryCode === selectedCountry)?.flag}</span>
                              <span>{COUNTRY_RESTRICTIONS.find(c => c.countryCode === selectedCountry)?.countryName}</span>
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-[#0D0F12] border-white/10 text-white">
                          {COUNTRY_RESTRICTIONS.map((country) => (
                            <SelectItem key={country.countryCode} value={country.countryCode} className="focus:bg-white/10 focus:text-white">
                              <div className="flex items-center gap-2">
                                <span>{country.flag}</span>
                                <span>{country.countryName}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </CardContent>
                  </Card>
                  
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <Tabs value={prohibitedFilterTab} onValueChange={(value) => setProhibitedFilterTab(value as 'all' | 'prohibited' | 'limited')} className="w-full max-w-md">
                      <TabsList className="grid w-full grid-cols-3 bg-white/5 h-auto">
                        <TabsTrigger value="all" className="text-xs md:text-sm py-1.5">{t('customsProhibitedTabsAll')}</TabsTrigger>
                        <TabsTrigger value="prohibited" className="text-xs md:text-sm py-1.5">{t('customsProhibitedTabsProhibited')}</TabsTrigger>
                        <TabsTrigger value="limited" className="text-xs md:text-sm py-1.5">{t('customsProhibitedTabsLimited')}</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  
                  <div className="mt-4 md:mt-6">
                    <p className="text-gray-300 text-xs md:text-sm mb-4 md:mb-6">
                      {t('customsProhibitedLawsVary')}
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                      {filteredItems.map((item) => (
                        <Card key={item.id} className="bg-[#0D0F12] border-white/10 text-white overflow-hidden">
                          <div className="p-2 md:p-4 flex flex-col items-center text-center">
                            <div className={`flex items-center justify-center w-12 md:w-16 h-12 md:h-16 rounded-full mb-2 md:mb-3 relative ${
                              item.status === 'prohibited' ? 'bg-red-500/10' : 'bg-yellow-500/10'
                            }`}>
                              <span className="text-2xl md:text-3xl">{item.icon}</span>
                              {item.status === 'prohibited' && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-12 md:w-16 h-12 md:h-16 rounded-full border-2 border-red-500 relative">
                                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500 -rotate-45 transform origin-center"></div>
                                  </div>
                                </div>
                              )}
                            </div>
                            <h3 className="font-medium text-white text-xs md:text-sm">{item.name}</h3>
                            <span className={`text-xs px-2 py-0.5 rounded-full mt-1 ${
                              item.status === 'prohibited' 
                                ? 'bg-red-500/20 text-red-400' 
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {item.status === 'prohibited' ? 'Prohibited' : 'Limited'}
                            </span>
                          </div>
                          <Separator className="bg-white/5" />
                          <div className="p-2 md:p-3">
                            <p className="text-xs text-gray-400">{item.description}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                    
                    <Card className="bg-[#161A1F] border-white/10 text-white mt-4 md:mt-6">
                      <CardHeader className="flex flex-row items-center gap-2 px-3 md:px-6 py-3 md:py-4">
                        <Info className="h-4 md:h-5 w-4 md:w-5 text-blue-400" />
                        <CardTitle className="text-sm md:text-lg">{t('customsProhibitedImportantInfo')}</CardTitle>
                      </CardHeader>
                      <CardContent className="px-3 md:px-6 py-3 md:py-4">
                        <p className="text-xs md:text-sm text-gray-300">
                          {t('customsProhibitedContactSupport')}
                        </p>
                        <div className="flex items-center gap-2 mt-3 md:mt-4">
                          <Ban className="h-4 md:h-5 w-4 md:w-5 text-red-400" />
                          <span className="text-xs md:text-sm font-medium text-white">{t('customsProhibitedCannotShip')}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <AlertTriangle className="h-4 md:h-5 w-4 md:w-5 text-yellow-400" />
                          <span className="text-xs md:text-sm font-medium text-white">{t('customsProhibitedLimitedShip')}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="bg-[#161A1F] border border-white/10 rounded-lg p-3 md:p-4 mb-4 md:mb-6 mt-4 md:mt-6">
                    <h4 className="font-medium text-deutscher-purple-light mb-2">{t('customsProhibitedWhatHappens')}</h4>
                    <ul className="list-disc list-inside space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
                      <li>{t('customsProhibitedWhatHappensList1')}</li>
                      <li>{t('customsProhibitedWhatHappensList2')}</li>
                      <li>{t('customsProhibitedWhatHappensList3')}</li>
                      <li>{t('customsProhibitedWhatHappensList4')}</li>
                    </ul>
                    
                    <div className="mt-3 md:mt-4 p-2 md:p-3 bg-red-500/10 border border-red-500/30 rounded-md">
                      <p className="text-xs md:text-sm text-red-300">
                        <strong>{t('customsProhibitedImportant')}</strong> {t('customsProhibitedImportantDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="documentation" className="mt-0">
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
                <div className="bg-deutscher-purple/20 p-3 rounded-full mb-3 md:mb-0 md:mt-1 mx-auto md:mx-0">
                  <FileCheck className="h-6 w-6 text-deutscher-purple-light" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 text-center md:text-left">{t('customsDocumentationTitle')}</h3>
                  <p className="text-sm md:text-base text-gray-400 mb-4">
                    {t('customsDocumentationDesc')}
                  </p>
                  
                  <div className="bg-[#161A1F] border border-white/10 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
                    <h4 className="font-medium text-deutscher-purple-light mb-2">{t('customsDocumentationStandard')}</h4>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-start space-x-3">
                        <FileText className="h-4 md:h-5 w-4 md:w-5 text-gray-400 mt-1" />
                        <div>
                          <p className="text-white font-medium text-sm md:text-base">{t('customsDocumentationCommercialInvoice')}</p>
                          <p className="text-xs md:text-sm text-gray-400">{t('customsDocumentationCommercialInvoiceDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="h-4 md:h-5 w-4 md:w-5 text-gray-400 mt-1" />
                        <div>
                          <p className="text-white font-medium text-sm md:text-base">{t('customsDocumentationPackingList')}</p>
                          <p className="text-xs md:text-sm text-gray-400">{t('customsDocumentationPackingListDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="h-4 md:h-5 w-4 md:w-5 text-gray-400 mt-1" />
                        <div>
                          <p className="text-white font-medium text-sm md:text-base">{t('customsDocumentationCustomsDeclaration')}</p>
                          <p className="text-xs md:text-sm text-gray-400">{t('customsDocumentationCustomsDeclarationDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="h-4 md:h-5 w-4 md:w-5 text-gray-400 mt-1" />
                        <div>
                          <p className="text-white font-medium text-sm md:text-base">{t('customsDocumentationProofOfPurchase')}</p>
                          <p className="text-xs md:text-sm text-gray-400">{t('customsDocumentationProofOfPurchaseDesc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#161A1F] border border-white/10 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
                    <h4 className="font-medium text-deutscher-purple-light mb-2">{t('customsDocumentationSpecial')}</h4>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-start space-x-3">
                        <FileText className="h-4 md:h-5 w-4 md:w-5 text-gray-400 mt-1" />
                        <div>
                          <p className="text-white font-medium text-sm md:text-base">{t('customsDocumentationCertificateOfOrigin')}</p>
                          <p className="text-xs md:text-sm text-gray-400">{t('customsDocumentationCertificateOfOriginDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="h-4 md:h-5 w-4 md:w-5 text-gray-400 mt-1" />
                        <div>
                          <p className="text-white font-medium text-sm md:text-base">{t('customsDocumentationImportPermits')}</p>
                          <p className="text-xs md:text-sm text-gray-400">{t('customsDocumentationImportPermitsDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="h-4 md:h-5 w-4 md:w-5 text-gray-400 mt-1" />
                        <div>
                          <p className="text-white font-medium text-sm md:text-base">{t('customsDocumentationSafetyCertificates')}</p>
                          <p className="text-xs md:text-sm text-gray-400">{t('customsDocumentationSafetyCertificatesDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="h-4 md:h-5 w-4 md:w-5 text-gray-400 mt-1" />
                        <div>
                          <p className="text-white font-medium text-sm md:text-base">{t('customsDocumentationPhytosanitary')}</p>
                          <p className="text-xs md:text-sm text-gray-400">{t('customsDocumentationPhytosanitaryDesc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#161A1F] border border-white/10 rounded-lg p-3 md:p-4">
                    <h4 className="font-medium text-deutscher-purple-light mb-2">{t('customsDocumentationHowWeHandle')}</h4>
                    <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
                      {t('customsDocumentationHowWeHandleDesc')}
                    </p>
                    <ul className="list-disc list-inside space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
                      <li>{t('customsDocumentationHowWeHandleList1')}</li>
                      <li>{t('customsDocumentationHowWeHandleList2')}</li>
                      <li>{t('customsDocumentationHowWeHandleList3')}</li>
                      <li>{t('customsDocumentationHowWeHandleList4')}</li>
                      <li>{t('customsDocumentationHowWeHandleList5')}</li>
                    </ul>
                    <div className="mt-3 md:mt-4 p-2 md:p-3 bg-[#0D0F12] border border-white/10 rounded-md">
                      <p className="text-xs md:text-sm text-gray-400">
                        <strong className="text-white">{t('customsDocumentationProTip')}</strong> {t('customsDocumentationProTipDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="regulations" className="mt-0">
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
                <div className="bg-deutscher-purple/20 p-3 rounded-full mb-3 md:mb-0 md:mt-1 mx-auto md:mx-0">
                  <Landmark className="h-6 w-6 text-deutscher-purple-light" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 text-center md:text-left">{t('customsRegulationsEUTitle')}</h3>
                  <p className="text-sm md:text-base text-gray-400 mb-4">
                    {t('customsRegulationsEUDesc')}
                  </p>
                  
                  <div className="bg-[#161A1F] border border-white/10 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
                    <h4 className="font-medium text-deutscher-purple-light mb-2">{t('customsRegulationsProductSafety')}</h4>
                    <div className="space-y-3 md:space-y-4">
                      <div className="bg-[#0D0F12] border border-white/10 rounded-md p-2 md:p-3">
                        <p className="text-white font-medium text-sm md:text-base">{t('customsRegulationsCEMarking')}</p>
                        <p className="text-xs md:text-sm text-gray-400">
                          {t('customsRegulationsCEMarkingDesc')}
                        </p>
                        <div className="mt-2 grid grid-cols-2 gap-1 md:gap-2">
                          <div className="text-xs md:text-sm text-gray-400">• {t('customsRegulationsCEMarkingList1')}</div>
                          <div className="text-xs md:text-sm text-gray-400">• {t('customsRegulationsCEMarkingList2')}</div>
                          <div className="text-xs md:text-sm text-gray-400">• {t('customsRegulationsCEMarkingList3')}</div>
                          <div className="text-xs md:text-sm text-gray-400">• {t('customsRegulationsCEMarkingList4')}</div>
                        </div>
                      </div>
                      
                      <div className="bg-[#0D0F12] border border-white/10 rounded-md p-2 md:p-3">
                        <p className="text-white font-medium text-sm md:text-base">{t('customsRegulationsREACH')}</p>
                        <p className="text-xs md:text-sm text-gray-400">
                          {t('customsRegulationsREACHDesc')}
                        </p>
                      </div>
                      
                      <div className="bg-[#0D0F12] border border-white/10 rounded-md p-2 md:p-3">
                        <p className="text-white font-medium text-sm md:text-base">{t('customsRegulationsRoHS')}</p>
                        <p className="text-xs md:text-sm text-gray-400">
                          {t('customsRegulationsRoHSDesc')}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#161A1F] border border-white/10 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
                    <h4 className="font-medium text-deutscher-purple-light mb-2">{t('customsRegulationsIndustry')}</h4>
                    <div className="space-y-2 md:space-y-3">
                      <div className="bg-[#0D0F12] border border-white/10 rounded-md p-2 md:p-3">
                        <p className="text-white font-medium text-sm md:text-base">{t('customsRegulationsTextiles')}</p>
                        <p className="text-xs md:text-sm text-gray-400">{t('customsRegulationsTextilesDesc')}</p>
                      </div>
                      <div className="bg-[#0D0F12] border border-white/10 rounded-md p-2 md:p-3">
                        <p className="text-white font-medium text-sm md:text-base">{t('customsRegulationsCosmetics')}</p>
                        <p className="text-xs md:text-sm text-gray-400">{t('customsRegulationsCosmeticsDesc')}</p>
                      </div>
                      <div className="bg-[#0D0F12] border border-white/10 rounded-md p-2 md:p-3">
                        <p className="text-white font-medium text-sm md:text-base">{t('customsRegulationsFood')}</p>
                        <p className="text-xs md:text-sm text-gray-400">{t('customsRegulationsFoodDesc')}</p>
                      </div>
                      <div className="bg-[#0D0F12] border border-white/10 rounded-md p-2 md:p-3">
                        <p className="text-white font-medium text-sm md:text-base">{t('customsRegulationsElectronics')}</p>
                        <p className="text-xs md:text-sm text-gray-400">{t('customsRegulationsElectronicsDesc')}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#161A1F] border border-white/10 rounded-lg p-3 md:p-4">
                    <h4 className="font-medium text-deutscher-purple-light mb-2">{t('customsRegulationsComplianceIssues')}</h4>
                    <p className="text-xs md:text-sm text-gray-400 mb-3">
                      {t('customsRegulationsComplianceIssuesDesc')}
                    </p>
                    <ul className="list-disc list-inside space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
                      <li>{t('customsRegulationsComplianceIssuesList1')}</li>
                      <li>{t('customsRegulationsComplianceIssuesList2')}</li>
                      <li>{t('customsRegulationsComplianceIssuesList3')}</li>
                      <li>{t('customsRegulationsComplianceIssuesList4')}</li>
                      <li>{t('customsRegulationsComplianceIssuesList5')}</li>
                    </ul>
                    
                    <div className="mt-3 md:mt-4 p-2 md:p-3 bg-[#0D0F12] border border-white/10 rounded-md">
                      <p className="text-xs md:text-sm text-gray-400">
                        <strong className="text-white">{t('customsRegulationsHowWeHelp')}</strong> {t('customsRegulationsHowWeHelpDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="border-t border-white/10 pt-4 md:pt-6 mt-6 md:mt-8">
          <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">{t('customsQuestionsTitle')}</h3>
          <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
            {t('customsQuestionsDesc')}
          </p>
          <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0 xs:space-x-3">
            <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white text-xs md:text-sm py-1.5 md:py-2">
              {t('customsQuestionsContact')}
            </Button>
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 text-xs md:text-sm py-1.5 md:py-2">
              {t('customsQuestionsDownload')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomsRegulations;
