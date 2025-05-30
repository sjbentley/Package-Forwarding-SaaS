
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from 'lucide-react';
import { Button } from './ui/button';

const tiers = [
  {
    name: "Basis",
    price: "€9.99",
    description: "Für gelegentliche Auslandskäufe",
    features: [
      "Virtuelle US Adresse",
      "7 Tage Lagerung",
      "Einfache Zusammenführung",
      "E-Mail Support",
      "Standard Versandoptionen",
    ],
    notIncluded: [
      "KI Paketoptimierung",
      "Premium Versandoptionen",
      "0% Umsatzsteuer",
    ],
    isPopular: false,
    ctaText: "Loslegen",
  },
  {
    name: "Premium",
    price: "€19.99",
    description: "Für regelmäßige Vielbesteller",
    features: [
      "Virtual US address",
      "30 Tage Lagerung",
      "Erweiterte Zusammenführung",
      "KI Paketoptimierung",
      "Premium Versandoptionen",
      "Priorisierter E-Mail Support",
      
    ],
    notIncluded: [
      "Persönlicher Einkaufsservice", 
      "0% Umsatzsteuer",
    ],
    isPopular: true,
    ctaText: "Premium versuchen",
  },
  {
    name: "Enterprise",
    price: "€29.99",
    description: "Für Profis und Unternehmen",
    features: [
      "Virtual US address",
      "90 Tage Lagerung",
      "Experten Zusammenführung",
      "KI Paketoptimierung",
      "Alle Versandoptionen",
      "Priorisierte Support Hotline",
      "Persönlicher Einkaufsservice",
      "0% Umsatzsteuer",
    ],
    notIncluded: [],
    isPopular: false,
    ctaText: "Vertrieb kontaktieren",
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 relative" id="pricing-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Transparente Preise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Wählen Sie den Plan, der zu Ihren Versandbedürfnissen passt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <Card key={index} className={`neo-card relative overflow-hidden ${tier.isPopular ? 'border-deutscher-purple ring-2 ring-deutscher-purple-light' : 'border-white/10'}`}>
              {tier.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-deutscher-purple text-white text-xs font-bold px-7 py-1 transform rotate-45 translate-x-7 translate-y-3">
                  BELIEBT
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">{tier.name}</CardTitle>
                <div className="flex items-baseline mt-2">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="ml-1 text-sm text-gray-300">/monat</span>
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
