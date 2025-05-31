import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Briefcase, Users, Award } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from '@/hooks/useTranslation';

const jobOpenings = [
  {
    id: 1,
    title: "Logistics Operations Manager",
    location: "Berlin, Germany",
    department: "Operations",
    type: "Full-time",
    description: "Lead our warehouse operations team in Berlin, overseeing package processing, inventory management, and logistics coordination."
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Remote (Europe)",
    department: "Engineering",
    type: "Full-time",
    description: "Create responsive, user-friendly interfaces for our customer portal and internal tools using React, TypeScript, and modern web technologies."
  },
  {
    id: 3,
    title: "Customer Success Specialist",
    location: "Berlin, Germany",
    department: "Customer Support",
    type: "Full-time",
    description: "Provide exceptional support to our customers, helping them navigate our platform and resolve shipping-related issues."
  },
  {
    id: 4,
    title: "Warehouse Associate",
    location: "Portland, OR, USA",
    department: "Operations",
    type: "Full-time",
    description: "Process incoming and outgoing packages at our U.S. warehouse, ensuring accurate scanning, sorting, and preparation for international shipping."
  },
  {
    id: 5,
    title: "Digital Marketing Specialist",
    location: "Berlin, Germany",
    department: "Marketing",
    type: "Full-time",
    description: "Drive our digital marketing efforts, including social media management, email campaigns, and content creation to reach German shoppers."
  }
];

const Careers: React.FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20 sm:pt-24 px-4 md:px-8 lg:px-16 pb-12 max-w-5xl mx-auto w-full">
        <div className="space-y-6">
          <Link to="/" className="flex items-center text-deutscher-purple-light hover:text-deutscher-purple-light/80 transition-colors">
            <ArrowLeft size={16} />
            <span>{t('careersBackToHome')}</span>
          </Link>
          
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">{t('careersHeadline')}</h2>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('careersJoinTeamTitle')}</CardTitle>
              <CardDescription className="text-gray-400">{t('careersJoinTeamDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm sm:text-base">
                {t('careersJoinTeamP')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 border border-white/10 rounded-md">
                  <div className="flex gap-3 items-start">
                    <Users className="h-5 w-5 text-deutscher-purple-light flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-deutscher-purple-light">{t('careersDiversityTitle')}</h3>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1">
                        {t('careersDiversityDesc')}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-white/10 rounded-md">
                  <div className="flex gap-3 items-start">
                    <Award className="h-5 w-5 text-deutscher-purple-light flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-deutscher-purple-light">{t('careersGrowthTitle')}</h3>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1">
                        {t('careersGrowthDesc')}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-white/10 rounded-md">
                  <div className="flex gap-3 items-start">
                    <Briefcase className="h-5 w-5 text-deutscher-purple-light flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-deutscher-purple-light">{t('careersWorkLifeTitle')}</h3>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1">
                        {t('careersWorkLifeDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('careersOpenPositionsTitle')}</CardTitle>
              <CardDescription className="text-gray-400">{t('careersOpenPositionsDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button className="px-2 sm:px-3 py-1.5 bg-deutscher-purple text-white rounded-md text-xs sm:text-sm">
                  {t('careersAllDepartments')}
                </button>
                <button className="px-2 sm:px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-md text-xs sm:text-sm transition-colors">
                  {t('careersEngineering')}
                </button>
                <button className="px-2 sm:px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-md text-xs sm:text-sm transition-colors">
                  {t('careersOperations')}
                </button>
                <button className="px-2 sm:px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-md text-xs sm:text-sm transition-colors">
                  {t('careersMarketing')}
                </button>
                <button className="px-2 sm:px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-md text-xs sm:text-sm transition-colors">
                  {t('careersSupport')}
                </button>
              </div>
              
              <div className="space-y-4">
                {jobOpenings.map((job) => (
                  <Card key={job.id} className="bg-[#181B20] border border-white/5">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                        <div>
                          <CardTitle className="text-base sm:text-lg">{job.title}</CardTitle>
                          <div className="flex flex-wrap items-center gap-2 text-gray-400 mt-1 text-xs sm:text-sm">
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {job.location}
                            </span>
                            <span className="hidden xs:inline">•</span>
                            <span>{job.department}</span>
                            <span className="hidden xs:inline">•</span>
                            <span>{job.type}</span>
                          </div>
                        </div>
                        <Link 
                          to={`/careers/${job.id}`}
                          className="bg-deutscher-purple hover:bg-deutscher-purple-light px-3 sm:px-4 py-2 rounded-md text-white text-xs sm:text-sm transition-colors w-full sm:w-auto text-center"
                        >
                          {t('careersApplyNow')}
                        </Link>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-300 text-xs sm:text-sm">
                        {job.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>{t('careersBenefitsTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300 text-xs sm:text-sm">
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>{t('careersBenefitSalary')}</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>{t('careersBenefitInsurance')}</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>{t('careersBenefitPTO')}</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>{t('careersBenefitRemote')}</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>{t('careersBenefitDevelopment')}</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>{t('careersBenefitShipping')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>{t('careersHiringProcessTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-deutscher-purple flex items-center justify-center text-white text-xs sm:text-sm">1</div>
                    <div>
                      <h3 className="font-medium text-white text-sm sm:text-base">{t('careersHiringStep1Title')}</h3>
                      <p className="text-xs sm:text-sm text-gray-300">{t('careersHiringStep1Desc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-deutscher-purple flex items-center justify-center text-white text-xs sm:text-sm">2</div>
                    <div>
                      <h3 className="font-medium text-white text-sm sm:text-base">{t('careersHiringStep2Title')}</h3>
                      <p className="text-xs sm:text-sm text-gray-300">{t('careersHiringStep2Desc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-deutscher-purple flex items-center justify-center text-white text-xs sm:text-sm">3</div>
                    <div>
                      <h3 className="font-medium text-white text-sm sm:text-base">{t('careersHiringStep3Title')}</h3>
                      <p className="text-xs sm:text-sm text-gray-300">{t('careersHiringStep3Desc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-deutscher-purple flex items-center justify-center text-white text-xs sm:text-sm">4</div>
                    <div>
                      <h3 className="font-medium text-white text-sm sm:text-base">{t('careersHiringStep4Title')}</h3>
                      <p className="text-xs sm:text-sm text-gray-300">{t('careersHiringStep4Desc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-deutscher-purple flex items-center justify-center text-white text-xs sm:text-sm">5</div>
                    <div>
                      <h3 className="font-medium text-white text-sm sm:text-base">{t('careersHiringStep5Title')}</h3>
                      <p className="text-xs sm:text-sm text-gray-300">{t('careersHiringStep5Desc')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('careersNoRoleTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-xs sm:text-sm">
                {t('careersNoRoleDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a 
                  href="mailto:careers@paksend.com" 
                  className="inline-block px-4 sm:px-6 py-2 bg-deutscher-purple hover:bg-deutscher-purple-light transition-colors rounded-md text-white text-center text-sm"
                >
                  {t('careersContactRecruiting')}
                </a>
                <Link 
                  to="/about" 
                  className="inline-block px-4 sm:px-6 py-2 bg-white/5 hover:bg-white/10 transition-colors rounded-md text-white text-center text-sm"
                >
                  {t('careersLearnMore')}
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <StoreFooter />
    </div>
  );
};

export default Careers;