
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import GettingStartedGuide from './docs/GettingStartedGuide';
import ShippingProcess from './docs/ShippingProcess';
import CustomsRegulations from './docs/CustomsRegulations';
import AccountManagement from './docs/AccountManagement';
import { useTranslation } from '@/hooks/useTranslation';

type DocType = 'gettingStarted' | 'shippingProcess' | 'customs' | 'accountManagement' | null;

const DashboardHelp = () => {
  const [activeDoc, setActiveDoc] = useState<DocType>(null);
  const { t } = useTranslation();
  
  const handleBackClick = () => {
    setActiveDoc(null);
  };
  
  // Render the selected documentation component
  if (activeDoc === 'gettingStarted') {
    return <GettingStartedGuide onBack={handleBackClick} />;
  }
  
  if (activeDoc === 'shippingProcess') {
    return <ShippingProcess onBack={handleBackClick} />;
  }
  
  if (activeDoc === 'customs') {
    return <CustomsRegulations onBack={handleBackClick} />;
  }
  
  if (activeDoc === 'accountManagement') {
    return <AccountManagement onBack={handleBackClick} />;
  }
  
  // Default Help & Support view
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-2xl font-bold text-white">{t('helpAndSupport')}</h2>
        <Button variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10 flex gap-2">
          <Mail className="h-4 w-4" />
          <span>{t('contact')}</span>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-[#0D0F12] border border-white/10 text-white">
          <CardHeader>
            <CardTitle>{t('frequentlyAskedQuestions')}</CardTitle>
            <CardDescription className="text-gray-400">{t('findAnswers')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="text-white">
              <AccordionItem value="item-1" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-deutscher-purple-light">
                  {t('howToCreateShipment')}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {t('createShipmentAnswer')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-deutscher-purple-light">
                  {t('howToTrackPackage')}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {t('trackPackageAnswer')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-deutscher-purple-light">
                  {t('whatAreShippingRates')}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {t('shippingRatesAnswer')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-deutscher-purple-light">
                  {t('howLongShippingTakes')}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {t('shippingTimeAnswer')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        <Card className="bg-[#0D0F12] border border-white/10 text-white">
          <CardHeader>
            <CardTitle>{t('documentation')}</CardTitle>
            <CardDescription className="text-gray-400">{t('exploreGuides')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div 
              className="p-4 border border-white/10 rounded-md hover:bg-white/5 cursor-pointer transition-colors"
              onClick={() => setActiveDoc('gettingStarted')}
            >
              <h3 className="font-medium text-deutscher-purple-light">{t('gettingStartedGuide')}</h3>
              <p className="text-sm text-gray-400 mt-1">{t('gettingStartedDesc')}</p>
            </div>
            <div 
              className="p-4 border border-white/10 rounded-md hover:bg-white/5 cursor-pointer transition-colors"
              onClick={() => setActiveDoc('shippingProcess')}
            >
              <h3 className="font-medium text-deutscher-purple-light">{t('shippingProcess')}</h3>
              <p className="text-sm text-gray-400 mt-1">{t('shippingProcessDesc')}</p>
            </div>
            <div 
              className="p-4 border border-white/10 rounded-md hover:bg-white/5 cursor-pointer transition-colors"
              onClick={() => setActiveDoc('customs')}
            >
              <h3 className="font-medium text-deutscher-purple-light">{t('customsRegulations')}</h3>
              <p className="text-sm text-gray-400 mt-1">{t('customsRegulationsDesc')}</p>
            </div>
            <div 
              className="p-4 border border-white/10 rounded-md hover:bg-white/5 cursor-pointer transition-colors"
              onClick={() => setActiveDoc('accountManagement')}
            >
              <h3 className="font-medium text-deutscher-purple-light">{t('accountManagement')}</h3>
              <p className="text-sm text-gray-400 mt-1">{t('accountManagementDesc')}</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-[#0D0F12] border border-white/10 text-white w-full">
        <CardHeader>
          <CardTitle>{t('contactInformation')}</CardTitle>
          <CardDescription className="text-gray-400">{t('getSupportTeam')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-white/10 rounded-md">
              <h3 className="font-medium text-deutscher-purple-light">{t('emailSupport')}</h3>
              <p className="text-sm text-gray-400 mt-1">support@deutschership.com</p>
              <p className="text-sm text-gray-400">{t('responseTime')}</p>
            </div>
            <div className="p-4 border border-white/10 rounded-md">
              <h3 className="font-medium text-deutscher-purple-light">{t('phoneSupport')}</h3>
              <p className="text-sm text-gray-400 mt-1">+49 30 1234 5678</p>
              <p className="text-sm text-gray-400">{t('supportHours')}</p>
            </div>
            <div className="p-4 border border-white/10 rounded-md">
              <h3 className="font-medium text-deutscher-purple-light">{t('officeHours')}</h3>
              <p className="text-sm text-gray-400 mt-1">{t('mondayToFriday')}</p>
              <p className="text-sm text-gray-400">{t('businessHours')}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHelp;
