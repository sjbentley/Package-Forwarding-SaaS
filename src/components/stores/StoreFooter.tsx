import React from 'react';
import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const StoreFooter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0D0F12] py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Plane className="h-5 w-5 md:h-6 md:w-6 text-deutscher-purple-light" />
              <span className="font-medium">PakSend</span>
            </div>
            <p className="text-sm md:text-base text-gray-400">
              {t('footerSlogan')}
            </p>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-white">{t('footerProduct')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#features"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  {t('footerFeatures')}
                </Link>
              </li>
              <li>
                <Link
                  to="/#pricing-section"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  {t('footerPricing')}
                </Link>
              </li>
              <li>
                <Link
                  to="/documentation"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  {t('footerDocumentation')}
                </Link>
              </li>
              <li>
                <Link
                  to="/api"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  {t('footerApi')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-white">{t('footerCompany')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  {t('footerAbout')}
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  {t('footerCareers')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  {t('footerContact')}
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  {t('footerFaq')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-white">{t('footerLegal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  {t('footerPrivacy')}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  {t('footerTerms')}
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  {t('footerCookies')}
                </Link>
              </li>
              <li>
                <Link
                  to="/impressum"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  {t('footerImprint')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 md:mt-12 pt-6 md:pt-8 text-center text-gray-400">
          <p className="text-sm md:text-base">
            {t('copyright').replace('{year}', new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default StoreFooter;
