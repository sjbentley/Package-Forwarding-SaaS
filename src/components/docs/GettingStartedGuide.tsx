
import React from 'react';
import { ArrowLeft, Check, ChevronRight, User, Upload, Package, Truck, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

interface GettingStartedGuideProps {
  onBack: () => void;
}

const GettingStartedGuide = ({ onBack }: GettingStartedGuideProps) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" className="h-8 w-8" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold text-white">{t('title')}</h2>
      </div>
      
      <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-6 text-white space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-deutscher-purple-light mb-3">{t('welcomeTitle')}</h3>
          <p className="text-gray-400">
            {t('welcomeText')}
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-deutscher-purple/20 p-3 rounded-full">
              <User className="h-6 w-6 text-deutscher-purple-light" />
            </div>
            <div>
              <h4 className="font-medium text-white text-lg">{t('step1Title')}</h4>
              <p className="text-gray-400 mt-1">
                {t('step1Description')}
              </p>
              <div className="mt-3 flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">{t('step1Check1')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">{t('step1Check2')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">{t('step1Check3')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-deutscher-purple/20 p-3 rounded-full">
              <Upload className="h-6 w-6 text-deutscher-purple-light" />
            </div>
            <div>
              <h4 className="font-medium text-white text-lg">{t('step2Title')}</h4>
              <p className="text-gray-400 mt-1">
                {t('step2Description')}
              </p>
              <div className="mt-3 flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">{t('step2Check1')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">{t('step2Check2')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">{t('step2Check3')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-deutscher-purple/20 p-3 rounded-full">
              <Package className="h-6 w-6 text-deutscher-purple-light" />
            </div>
            <div>
              <h4 className="font-medium text-white text-lg">{t('step3Title')}</h4>
              <p className="text-gray-400 mt-1">
                {t('step3Description')}
              </p>
              <div className="mt-3 flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">{t('step3Check1')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">{t('step3Check2')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">{t('step3Check3')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-deutscher-purple/20 p-3 rounded-full">
              <Truck className="h-6 w-6 text-deutscher-purple-light" />
            </div>
            <div>
              <h4 className="font-medium text-white text-lg">{t('step4Title')}</h4>
              <p className="text-gray-400 mt-1">
                {t('step4Description')}
              </p>
              <div className="mt-3 flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">{t('step4Check1')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">{t('step4Check2')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">{t('step4Check3')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-deutscher-purple/20 p-3 rounded-full">
              <CreditCard className="h-6 w-6 text-deutscher-purple-light" />
            </div>
            <div>
              <h4 className="font-medium text-white text-lg">{t('step5Title')}</h4>
              <p className="text-gray-400 mt-1">
                {t('step5Description')}
              </p>
              <div className="mt-3 flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">{t('step5Check1')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">{t('step5Check2')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">{t('step5Check3')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 mt-8">
          <h3 className="text-lg font-semibold text-white mb-3">{t('needHelpTitle')}</h3>
          <p className="text-gray-400 mb-4">
            {t('needHelpDescription')}
          </p>
          <div className="flex space-x-3">
            <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white">
              {t('contactSupport')}
            </Button>
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
              {t('viewFaqs')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedGuide;
