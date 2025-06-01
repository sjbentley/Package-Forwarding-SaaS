import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const CookiePolicy: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Helper to safely get array translations
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
            {t('backToHome')}
          </Link>

          <div className="flex justify-between items-center flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-white">{t('cookiePolicy')}</h2>
            <p className="text-gray-400">{t('cookieLastUpdated')}</p>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('introduction')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {t('introductionText')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('whatAreCookies')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {t('whatAreCookiesText1')}
              </p>
              <p>
                {t('whatAreCookiesText2')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('typesOfCookies')}</CardTitle>
              <CardDescription className="text-gray-400">{t('typesOfCookiesDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-medium text-deutscher-purple-light">{t('essentialCookies')}</h3>
                <p>
                  {t('essentialCookiesText')}
                </p>
                
                <h3 className="font-medium text-deutscher-purple-light">{t('performanceCookies')}</h3>
                <p>
                  {t('performanceCookiesText')}
                </p>
                
                <h3 className="font-medium text-deutscher-purple-light">{t('functionalCookies')}</h3>
                <p>
                  {t('functionalCookiesText')}
                </p>
                
                <h3 className="font-medium text-deutscher-purple-light">{t('targetingCookies')}</h3>
                <p>
                  {t('targetingCookiesText')}
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('howWeUseCookies')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {t('howWeUseCookiesText')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {getArray('howWeUseCookiesList').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('thirdPartyCookies')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {t('thirdPartyCookiesText1')}
              </p>
              <p>
                {t('thirdPartyCookiesText2')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {getArray('thirdPartyCookiesList').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('yourChoices')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {t('yourChoicesText1')}
              </p>
              <p>
                {t('yourChoicesText2')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('howToControlCookies')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {t('howToControlCookiesText1')} <a href="https://www.aboutcookies.org" target="_blank" rel="noopener" className="text-deutscher-purple-light hover:underline">www.aboutcookies.org</a>.
              </p>
              <p>
                {t('howToControlCookiesText2')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {getArray('browserList').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('changesToPolicy')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {t('changesToPolicyText1')}
              </p>
              <p>
                {t('changesToPolicyText2')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('contactUs')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {t('contactUsText')}
              </p>
              <p>{t('cookieContactEmail')}</p>
              <p>{t('contactAddress')}</p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <StoreFooter />
    </div>
  );
};

export default CookiePolicy;