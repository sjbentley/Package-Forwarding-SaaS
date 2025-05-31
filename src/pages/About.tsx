import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, MapPin, Globe, Award } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const About: React.FC = () => {
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
            <ArrowLeft size={16} />
            <span>{t('aboutBackToHome')}</span>
          </Link>
          
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-white">{t('aboutHeadline')}</h2>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('aboutOurStoryTitle')}</CardTitle>
              <CardDescription className="text-gray-400">{t('aboutOurStoryDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                {t('aboutOurStoryP1')}
              </p>
              <p className="text-gray-300">
                {t('aboutOurStoryP2')}
              </p>
              <p className="text-gray-300">
                {t('aboutOurStoryP3')}
              </p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>{t('aboutMissionTitle')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Globe className="h-6 w-6 text-deutscher-purple-light flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-deutscher-purple-light">{t('aboutMissionHeadline')}</h3>
                    <p className="text-gray-300 mt-2">
                      {t('aboutMissionDesc')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>{t('aboutVisionTitle')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Award className="h-6 w-6 text-deutscher-purple-light flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-deutscher-purple-light">{t('aboutVisionHeadline')}</h3>
                    <p className="text-gray-300 mt-2">
                      {t('aboutVisionDesc')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>{t('aboutLocationsTitle')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <MapPin className="h-6 w-6 text-deutscher-purple-light flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-deutscher-purple-light">{t('aboutGermanHQ')}</h3>
                      <p className="text-gray-300 mt-1" style={{ whiteSpace: 'pre-line' }}>
                        {t('aboutGermanHQAddress')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <MapPin className="h-6 w-6 text-deutscher-purple-light flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-deutscher-purple-light">{t('aboutUSWarehouse')}</h3>
                      <p className="text-gray-300 mt-1" style={{ whiteSpace: 'pre-line' }}>
                        {t('aboutUSWarehouseAddress')}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>{t('aboutFactsTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>{t('aboutFactFounded')}</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>{t('aboutFactEmployees')}</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>{t('aboutFactCustomers')}</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>{t('aboutFactPackages')}</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>{t('aboutFactStores')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('aboutJoinTeamTitle')}</CardTitle>
              <CardDescription className="text-gray-400">{t('aboutJoinTeamDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 items-start">
                <Users className="h-6 w-6 text-deutscher-purple-light flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">
                    {t('aboutJoinTeamP')}
                  </p>
                  <Link to="/careers" className="mt-4 inline-block px-6 py-2 bg-deutscher-purple hover:bg-deutscher-purple-light transition-colors rounded-md text-white">
                    {t('aboutJoinTeamButton')}
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <StoreFooter />
    </div>
  );
};

export default About;