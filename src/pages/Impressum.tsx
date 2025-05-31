import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Impressum: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 px-4 md:px-8 lg:px-16 pb-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <Link to="/" className="flex items-center text-deutscher-purple-light hover:text-deutscher-purple-light/80 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('impressumBackToHome')}
          </Link>
          
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-white">{t('impressumHeadline')}</h2>
            <p className="text-gray-400">{t('impressumLastUpdated')}</p>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('impressumCompanyInfoTitle')}</CardTitle>
              <CardDescription className="text-gray-400">{t('impressumCompanyInfoDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium text-deutscher-purple-light">{t('impressumCompanyName')}</h3>
                <p className="text-gray-300">{t('impressumCommercialRegister')}</p>
                <p className="text-gray-300">{t('impressumVatId')}</p>
              </div>
              
              <div className="space-y-2 pt-2">
                <h3 className="font-medium text-deutscher-purple-light">{t('impressumOfficeAddressTitle')}</h3>
                <p className="text-gray-300">{t('impressumOfficeStreet')}</p>
                <p className="text-gray-300">{t('impressumOfficeZip')}</p>
                <p className="text-gray-300">{t('impressumOfficeCountry')}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('impressumAuthorizedRepsTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">{t('impressumManagingDirectors')}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>{t('impressumDirector1')}</li>
                <li>{t('impressumDirector2')}</li>
              </ul>
              
              <p className="pt-2 text-gray-300">
                {t('impressumResponsibleContent')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('impressumContactTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-medium text-deutscher-purple-light">{t('impressumEmail')}</h3>
                  <p className="text-gray-300">{t('impressumEmail1')}</p>
                  <p className="text-gray-300">{t('impressumEmail2')}</p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium text-deutscher-purple-light">{t('impressumPhone')}</h3>
                  <p className="text-gray-300">{t('impressumPhoneNumber')}</p>
                  <p className="text-gray-300">{t('impressumOfficeHours')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('impressumDisputeTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                {t('impressumDisputeText1')}{' '}
                <a href="https://ec.europa.eu/consumers/odr" className="text-deutscher-purple-light hover:text-white ml-1" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr
                </a>.
              </p>
              <p className="text-gray-300">
                {t('impressumDisputeText2')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('impressumLiabilityContentTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                {t('impressumLiabilityContentP1')}
              </p>
              <p className="text-gray-300">
                {t('impressumLiabilityContentP2')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('impressumLiabilityLinksTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                {t('impressumLiabilityLinksP1')}
              </p>
              <p className="text-gray-300">
                {t('impressumLiabilityLinksP2')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('impressumCopyrightTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                {t('impressumCopyrightP1')}
              </p>
              <p className="text-gray-300">
                {t('impressumCopyrightP2')}
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <StoreFooter />
    </div>
  );
};

export default Impressum;