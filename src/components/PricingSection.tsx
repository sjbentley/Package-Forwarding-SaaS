import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from '@/hooks/useTranslation';

const PricingSection = () => {
  const { t } = useTranslation();

  const tiers = [
    {
      name: t('planBasic'),
      price: t('price9_99'),
      description: t('planBasicDesc'),
      features: [
        t('featureVirtuelleUSAdresse'),
        t('feature7DaysStorage'),
        t('featureSimpleConsolidation'),
        t('featureEmailSupport'),
        t('featureStandardShipping'),
      ],
      notIncluded: [
        t('featureAIPackageOptimization'),
        t('featurePremiumShipping'),
        t('featureNoVAT'),
      ],
      isPopular: false,
      ctaText: t('ctaStart'),
    },
    {
      name: t('planPremium'),
      price: t('price19_99'),
      description: t('planPremiumDesc'),
      features: [
        t('featureVirtualUSAddress'),
        t('feature30DaysStorage'),
        t('featureAdvancedConsolidation'),
        t('featureAIPackageOptimization'),
        t('featurePremiumShipping'),
        t('featurePriorityEmailSupport'),
      ],
      notIncluded: [
        t('featurePersonalShopper'),
        t('featureNoVAT'),
      ],
      isPopular: true,
      ctaText: t('ctaTryPremium'),
    },
    {
      name: t('planEnterprise'),
      price: t('price29_99'),
      description: t('planEnterpriseDesc'),
      features: [
        t('featureVirtualUSAddress'),
        t('feature90DaysStorage'),
        t('featureExpertConsolidation'),
        t('featureAIPackageOptimization'),
        t('featureAllShipping'),
        t('featurePriorityHotline'),
        t('featurePersonalShopper'),
        t('featureNoVAT'),
      ],
      notIncluded: [],
      isPopular: false,
      ctaText: t('ctaContactSales'),
    }
  ];

  return (
    <section className="py-20 relative" id="pricing-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            {t('pricingHeadline')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('pricingSubline')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <Card key={index} className={`neo-card relative overflow-hidden ${tier.isPopular ? 'border-deutscher-purple ring-2 ring-deutscher-purple-light' : 'border-white/10'}`}>
              {tier.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-deutscher-purple text-white text-xs font-bold px-7 py-1 transform rotate-45 translate-x-7 translate-y-3">
                    {t('labelPopular')}
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">{tier.name}</CardTitle>
                <div className="flex items-baseline mt-2">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="ml-1 text-sm text-gray-300">{t('perMonth')}</span>
                </div>
                <CardDescription className="text-gray-300 mt-2">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-deutscher-purple-light shrink-0 mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                  {tier.notIncluded.map((feature, idx) => (
                    <li key={idx} className="flex items-start opacity-50">
                      <X className="h-5 w-5 text-gray-400 shrink-0 mr-2" />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full py-6 ${tier.isPopular ? 'bg-deutscher-purple hover:bg-deutscher-purple-light' : 'bg-gray-800 hover:bg-gray-700'}`}>
                  {tier.ctaText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
