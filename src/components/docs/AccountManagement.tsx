import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface AccountManagementProps {
  onBack: () => void;
}

const AccountManagement = ({ onBack }: AccountManagementProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Button 
          variant="outline" 
          size="sm" 
          className="border-white/10 bg-white/5 text-white hover:bg-white/10"
          onClick={onBack}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          {t('accountManagementBack')}
        </Button>
        <h2 className="text-xl md:text-2xl font-bold text-white">{t('accountManagementTitle')}</h2>
      </div>
      
      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <h3 className="text-lg md:text-xl font-medium text-white mb-3">{t('accountOverviewTitle')}</h3>
          <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-4 md:p-6 mb-6">
            <p className="text-gray-300 mb-4">
              {t('accountOverviewDesc1')}
            </p>
            <p className="text-gray-300">
              {t('accountOverviewDesc2')}
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h3 className="text-lg md:text-xl font-medium text-white mb-3">{t('profileManagementTitle')}</h3>
          <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-4 md:p-6">
            <h4 className="font-medium text-deutscher-purple-light mb-2">{t('profilePersonalInfo')}</h4>
            <p className="text-gray-300 mb-4">
              {t('profilePersonalInfoDesc')}
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4 pl-1">
              <li>{t('profilePersonalInfoStep1')}</li>
              <li>{t('profilePersonalInfoStep2')}</li>
              <li>{t('profilePersonalInfoStep3')}</li>
              <li>{t('profilePersonalInfoStep4')}</li>
            </ol>
            
            <h4 className="font-medium text-deutscher-purple-light mb-2 mt-6">{t('profileSecuritySettings')}</h4>
            <p className="text-gray-300 mb-4">
              {t('profileSecuritySettingsDesc')}
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4 pl-1">
              <li>{t('profileSecurityStep1')}</li>
              <li>{t('profileSecurityStep2')}</li>
              <li>{t('profileSecurityStep3')}</li>
              <li>{t('profileSecurityStep4')}</li>
              <li>{t('profileSecurityStep5')}</li>
              <li>{t('profileSecurityStep6')}</li>
            </ol>
            
            <div className="bg-white/5 border-l-4 border-deutscher-purple p-4 rounded-r-md mt-4">
              <p className="text-sm text-gray-300">
                <strong className="font-medium text-white">{t('profileSecurityTip')}</strong> {t('profileSecurityTipDesc')}
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h3 className="text-lg md:text-xl font-medium text-white mb-3">{t('notificationPreferencesTitle')}</h3>
          <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-4 md:p-6">
            <p className="text-gray-300 mb-4">
              {t('notificationPreferencesDesc')}
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4 pl-1">
              <li>{t('notificationPreferencesStep1')}</li>
              <li>{t('notificationPreferencesStep2')}</li>
              <li>{t('notificationPreferencesStep3')}</li>
              <li>{t('notificationPreferencesStep4')}</li>
            </ol>
            
            <h4 className="font-medium text-deutscher-purple-light mb-2 mt-4">{t('notificationTypesAvailable')}</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-1">
              <li>{t('notificationTypePackageArrivals')}</li>
              <li>{t('notificationTypeShippingUpdates')}</li>
              <li>{t('notificationTypeDeliveryConfirmations')}</li>
              <li>{t('notificationTypeBillingReceipts')}</li>
              <li>{t('notificationTypeMarketingPromotions')}</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h3 className="text-lg md:text-xl font-medium text-white mb-3">{t('shippingPreferencesTitle')}</h3>
          <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-4 md:p-6">
            <p className="text-gray-300 mb-4">
              {t('shippingPreferencesDesc')}
            </p>
            
            <h4 className="font-medium text-deutscher-purple-light mb-2">{t('shippingDefaultAddress')}</h4>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6 pl-1">
              <li>{t('shippingDefaultAddressStep1')}</li>
              <li>{t('shippingDefaultAddressStep2')}</li>
              <li>{t('shippingDefaultAddressStep3')}</li>
              <li>{t('shippingDefaultAddressStep4')}</li>
            </ol>
            
            <h4 className="font-medium text-deutscher-purple-light mb-2">{t('shippingOptions')}</h4>
            <p className="text-gray-300 mb-4">
              {t('shippingOptionsDesc')}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-1">
              <li>{t('shippingOptionConsolidation')}</li>
              <li>{t('shippingOptionAIOptimization')}</li>
              <li>{t('shippingOptionInsurance')}</li>
              <li>{t('shippingOptionSignature')}</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h3 className="text-lg md:text-xl font-medium text-white mb-3">{t('billingManagementTitle')}</h3>
          <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-4 md:p-6">
            <h4 className="font-medium text-deutscher-purple-light mb-2">{t('billingCurrentPlan')}</h4>
            <p className="text-gray-300 mb-4">
              {t('billingCurrentPlanDesc')}
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4 pl-1">
              <li>{t('billingCurrentPlanStep1')}</li>
              <li>{t('billingCurrentPlanStep2')}</li>
              <li>{t('billingCurrentPlanStep3')}</li>
            </ol>
            
            <h4 className="font-medium text-deutscher-purple-light mb-2 mt-6">{t('billingChangePlan')}</h4>
            <p className="text-gray-300 mb-4">
              {t('billingChangePlanDesc')}
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4 pl-1">
              <li>{t('billingChangePlanStep1')}</li>
              <li>{t('billingChangePlanStep2')}</li>
              <li>{t('billingChangePlanStep3')}</li>
              <li>{t('billingChangePlanStep4')}</li>
            </ol>
            
            <h4 className="font-medium text-deutscher-purple-light mb-2 mt-6">{t('billingPaymentMethods')}</h4>
            <p className="text-gray-300 mb-4">
              {t('billingPaymentMethodsDesc')}
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4 pl-1">
              <li>{t('billingPaymentMethodsStep1')}</li>
              <li>{t('billingPaymentMethodsStep2')}</li>
              <li>{t('billingPaymentMethodsStep3')}</li>
              <li>{t('billingPaymentMethodsStep4')}</li>
            </ol>
            
            <div className="bg-white/5 border-l-4 border-deutscher-purple p-4 rounded-r-md mt-4">
              <p className="text-sm text-gray-300">
                <strong className="font-medium text-white">{t('billingNote')}</strong> {t('billingNoteDesc')}
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h3 className="text-lg md:text-xl font-medium text-white mb-3">{t('accountDeactivationTitle')}</h3>
          <div className="bg-[#0D0F12] border border-white/10 rounded-lg p-4 md:p-6">
            <p className="text-gray-300 mb-4">
              {t('accountDeactivationDesc')}
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4 pl-1">
              <li>{t('accountDeactivationStep1')}</li>
              <li>{t('accountDeactivationStep2')}</li>
              <li>{t('accountDeactivationStep3')}</li>
              <li>{t('accountDeactivationStep4')}</li>
            </ol>
            
            <div className="bg-white/5 border-l-4 border-red-500 p-4 rounded-r-md mt-4">
              <p className="text-sm text-gray-300">
                <strong className="font-medium text-white">{t('accountDeactivationImportant')}</strong> {t('accountDeactivationImportantDesc')}
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <div className="flex justify-center pt-4">
        <Button 
          variant="outline" 
          className="border-white/10 bg-white/5 text-white hover:bg-white/10"
          onClick={onBack}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          {t('accountManagementBackToHelp')}
        </Button>
      </div>
    </div>
  );
};

export default AccountManagement;
