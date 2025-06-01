import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const TermsOfService: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Helper for array translations
  const getArray = (key: Parameters<typeof t>[0]) => {
    const arr = t(key);
    return Array.isArray(arr) ? arr : [];
  };

  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 px-4 md:px-8 lg:px-16 pb-12 max-w-5xl mx-auto">
        <div className="space-y-6">

          <Link to="/" className="flex items-center text-deutscher-purple-light hover:text-deutscher-purple-light/80 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('tosBackToHome')}
          </Link>

          <div className="flex justify-between items-center flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-white">{t('tosTitle')}</h2>
            <p className="text-gray-400">{t('tosLastUpdated')}</p>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('tosIntroduction')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('tosIntroductionP1')}</p>
              <p>{t('tosIntroductionP2')}</p>
              <p>{t('tosIntroductionP3')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('tosAccounts')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('tosAccountsP1')}</p>
              <p>{t('tosAccountsP2')}</p>
              <p>{t('tosAccountsP3')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('tosServiceDescription')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('tosServiceDescriptionP1')}</p>
              <p>{t('tosServiceDescriptionP2')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('tosProhibitedItems')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('tosProhibitedItemsP1')}</p>
              <p>{t('tosProhibitedItemsP2')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('tosCustoms')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('tosCustomsP1')}</p>
              <p>{t('tosCustomsP2')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('tosShipping')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('tosShippingP1')}</p>
              <p>{t('tosShippingP2')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('tosFees')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('tosFeesP1')}</p>
              <p>{t('tosFeesP2')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('tosLiability')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('tosLiabilityP1')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {getArray('tosLiabilityList').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('tosTermination')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('tosTerminationP1')}</p>
              <p>{t('tosTerminationP2')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('tosLaw')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('tosLawP1')}</p>
              <p>{t('tosLawP2')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('tosChanges')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('tosChangesP1')}</p>
              <p>{t('tosChangesP2')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('tosContact')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('tosContactP1')}</p>
              <p>{t('tosContactEmail')}</p>
              <p>{t('tosContactAddress')}</p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <StoreFooter />
    </div>
  );
};

export default TermsOfService;