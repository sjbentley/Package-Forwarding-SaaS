import React, { useState } from 'react';
import { ArrowLeft, ShoppingBag, Package, Truck, FileText, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ShippingMethodsModal from '../ShippingMethodsModal';
import { useTranslation } from '@/hooks/useTranslation';

interface ShippingProcessProps {
  onBack: () => void;
}

const ShippingProcess = ({ onBack }: ShippingProcessProps) => {
  const { t } = useTranslation();
  const [isShippingMethodsOpen, setIsShippingMethodsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" className="h-8 w-8" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold text-white">{t('shippingProcessTitle')}</h2>
      </div>
      
      <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-6 text-white">
        <p className="text-gray-400 mb-8">
          {t('shippingProcessIntro')}
        </p>
        
        {/* Process Infographic */}
        <div className="relative mt-10 mb-16">
          {/* Timeline track */}
          <div className="absolute top-10 left-4 md:left-1/2 w-0.5 h-[calc(100%-40px)] bg-deutscher-purple-light/30 transform -translate-x-1/2 z-0"></div>
          
          {/* Step 1 */}
          <div className="relative z-10 mb-16">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-deutscher-purple text-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5" />
                </div>
              </div>
              
              <div className="md:ml-6 md:w-[calc(100%-60px)]">
                <h3 className="text-xl font-semibold text-white mb-2">{t('shippingProcessStep1Title')}</h3>
                <div className="bg-[#161A1F] border border-white/10 rounded-lg p-4">
                  <p className="text-gray-400">
                    {t('shippingProcessStep1Description')}
                  </p>
                  
                  <div className="mt-4 flex flex-col sm:flex-row gap-4">
                    <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-3 sm:w-1/2">
                      <h4 className="font-medium text-deutscher-purple-light mb-1">{t('shippingProcessStep1SupportedRetailers')}</h4>
                      <p className="text-sm text-gray-400">{t('shippingProcessStep1SupportedRetailersList')}</p>
                    </div>
                    <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-3 sm:w-1/2">
                      <h4 className="font-medium text-deutscher-purple-light mb-1">{t('shippingProcessStep1Timeframe')}</h4>
                      <p className="text-sm text-gray-400">{t('shippingProcessStep1TimeframeDescription')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative z-10 mb-16">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-deutscher-purple text-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
                  <Package className="h-5 w-5" />
                </div>
              </div>
              
              <div className="md:ml-6 md:w-[calc(100%-60px)]">
                <h3 className="text-xl font-semibold text-white mb-2">{t('shippingProcessStep2Title')}</h3>
                <div className="bg-[#161A1F] border border-white/10 rounded-lg p-4">
                  <p className="text-gray-400">
                    {t('shippingProcessStep2Description')}
                  </p>
                  
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-3">
                      <h4 className="font-medium text-deutscher-purple-light mb-1">{t('shippingProcessStep2ProcessingTime')}</h4>
                      <p className="text-sm text-gray-400">{t('shippingProcessStep2ProcessingTimeDescription')}</p>
                    </div>
                    <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-3">
                      <h4 className="font-medium text-deutscher-purple-light mb-1">{t('shippingProcessStep2FreeStorage')}</h4>
                      <p className="text-sm text-gray-400">{t('shippingProcessStep2FreeStorageDescription')}</p>
                    </div>
                    <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-3">
                      <h4 className="font-medium text-deutscher-purple-light mb-1">{t('shippingProcessStep2AdditionalServices')}</h4>
                      <p className="text-sm text-gray-400">{t('shippingProcessStep2AdditionalServicesList')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative z-10 mb-16">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-deutscher-purple text-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
                  <Truck className="h-5 w-5" />
                </div>
              </div>
              
              <div className="md:ml-6 md:w-[calc(100%-60px)]">
                <h3 className="text-xl font-semibold text-white mb-2">{t('shippingProcessStep3Title')}</h3>
                <div className="bg-[#161A1F] border border-white/10 rounded-lg p-4">
                  <p className="text-gray-400">
                    {t('shippingProcessStep3Description')}
                  </p>
                  
                  <div className="mt-4 space-y-3">
                    <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-3">
                      <h4 className="font-medium text-deutscher-purple-light mb-1">{t('shippingProcessStep3Economy')}</h4>
                      <p className="text-sm text-gray-400">{t('shippingProcessStep3EconomyDescription')}</p>
                    </div>
                    <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-3">
                      <h4 className="font-medium text-deutscher-purple-light mb-1">{t('shippingProcessStep3Standard')}</h4>
                      <p className="text-sm text-gray-400">{t('shippingProcessStep3StandardDescription')}</p>
                    </div>
                    <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-3">
                      <h4 className="font-medium text-deutscher-purple-light mb-1">{t('shippingProcessStep3Express')}</h4>
                      <p className="text-sm text-gray-400">{t('shippingProcessStep3ExpressDescription')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="relative z-10 mb-16">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-deutscher-purple text-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
                  <FileText className="h-5 w-5" />
                </div>
              </div>
              
              <div className="md:ml-6 md:w-[calc(100%-60px)]">
                <h3 className="text-xl font-semibold text-white mb-2">{t('shippingProcessStep4Title')}</h3>
                <div className="bg-[#161A1F] border border-white/10 rounded-lg p-4">
                  <p className="text-gray-400">
                    {t('shippingProcessStep4Description')}
                  </p>
                  
                  <div className="mt-4 flex flex-col sm:flex-row gap-4">
                    <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-3 sm:w-1/2">
                      <h4 className="font-medium text-deutscher-purple-light mb-1">{t('shippingProcessStep4DocumentsHandled')}</h4>
                      <p className="text-sm text-gray-400">{t('shippingProcessStep4DocumentsHandledList')}</p>
                    </div>
                    <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-3 sm:w-1/2">
                      <h4 className="font-medium text-deutscher-purple-light mb-1">{t('shippingProcessStep4DutiesTaxes')}</h4>
                      <p className="text-sm text-gray-400">{t('shippingProcessStep4DutiesTaxesDescription')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 5 */}
          <div className="relative z-10 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-deutscher-purple text-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
                  <Home className="h-5 w-5" />
                </div>
              </div>
              
              <div className="md:ml-6 md:w-[calc(100%-60px)]">
                <h3 className="text-xl font-semibold text-white mb-2">{t('shippingProcessStep5Title')}</h3>
                <div className="bg-[#161A1F] border border-white/10 rounded-lg p-4">
                  <p className="text-gray-400">
                    {t('shippingProcessStep5Description')}
                  </p>
                  
                  <div className="mt-4 flex flex-col sm:flex-row gap-4">
                    <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-3 flex-1">
                      <h4 className="font-medium text-deutscher-purple-light mb-1">{t('shippingProcessStep5DeliveryPartners')}</h4>
                      <p className="text-sm text-gray-400">{t('shippingProcessStep5DeliveryPartnersList')}</p>
                    </div>
                    <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-3 flex-1">
                      <h4 className="font-medium text-deutscher-purple-light mb-1">{t('shippingProcessStep5DeliveryOptions')}</h4>
                      <p className="text-sm text-gray-400">{t('shippingProcessStep5DeliveryOptionsList')}</p>
                    </div>
                    <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-3 flex-1">
                      <h4 className="font-medium text-deutscher-purple-light mb-1">{t('shippingProcessStep5Tracking')}</h4>
                      <p className="text-sm text-gray-400">{t('shippingProcessStep5TrackingDescription')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Statistics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#161A1F] border border-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-deutscher-purple-light mb-1">{t('shippingProcessStatsOnTimeValue')}</div>
            <p className="text-sm text-gray-400">{t('shippingProcessStatsOnTime')}</p>
          </div>
          <div className="bg-[#161A1F] border border-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-deutscher-purple-light mb-1">{t('shippingProcessStatsMonthlyShippedValue')}</div>
            <p className="text-sm text-gray-400">{t('shippingProcessStatsMonthlyShipped')}</p>
          </div>
          <div className="bg-[#161A1F] border border-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-deutscher-purple-light mb-1">{t('shippingProcessStatsSafetyValue')}</div>
            <p className="text-sm text-gray-400">{t('shippingProcessStatsSafety')}</p>
          </div>
          <div className="bg-[#161A1F] border border-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-deutscher-purple-light mb-1">{t('shippingProcessStatsSupportValue')}</div>
            <p className="text-sm text-gray-400">{t('shippingProcessStatsSupport')}</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6">
          <h3 className="text-lg font-semibold text-white mb-3">{t('shippingProcessReadyToShip')}</h3>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white">
              {t('shippingProcessStartShipping')}
            </Button>
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
              {t('shippingProcessCalculateCost')}
            </Button>
            <Button 
              variant="outline" 
              className="border-white/10 text-white hover:bg-white/10"
              onClick={() => setIsShippingMethodsOpen(true)}
            >
              {t('shippingProcessShippingMethods')}
            </Button>
          </div>
        </div>
      </div>

      <ShippingMethodsModal 
        isOpen={isShippingMethodsOpen}
        onClose={() => setIsShippingMethodsOpen(false)}
      />
    </div>
  );
};

export default ShippingProcess;
