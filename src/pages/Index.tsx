import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import AiVisualization from '@/components/AiVisualization';
import PackageVisualization from '@/components/PackageVisualization';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import PricingSection from '@/components/PricingSection';
import ShippingCalculator from '@/components/ShippingCalculator';
import { Button } from '@/components/ui/button';
import dashboardOverview from "@/assets/dashboard-overview1.png";
import { Switch } from "@/components/ui/switch";

import { 
  Package2, 
  Globe, 
  CreditCard, 
  BarChart2, 
  ArrowRight,
  Plane, 
  PackageCheck, 
  LayoutGrid, 
  PieChart, 
  MessageSquareText, 
  PackagePlus
} from 'lucide-react';

import { useToast } from "@/hooks/use-toast";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '@/components/ui/dialog';
  import { Input } from '@/components/ui/input';
  import { Label } from '@/components/ui/label';
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

// Removed from the top level and moved inside the Index component

const Index: React.FC = () => {
  const [isPrivacyPolicyAccepted, setIsPrivacyPolicyAccepted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!isPrivacyPolicyAccepted) {
    toast({
      title: "Error",
      description: "Bitte akzeptieren Sie die Datenschutzrichtlinie, um fortzufahren.",
      duration: 5000,
    });
    return;
  }

  // Handle form submission here
  toast({
    title: "Erfolgreich!",
    description: "Ihr Konto wurde erstellt. Willkommen bei PakSend®!",
    duration: 5000,
  });

  setIsOpen(false);
  setFirstName('');
  setLastName('');
  setEmail('');
  setPhone('');
  setCountry('');
  setIsPrivacyPolicyAccepted(false);
};

  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 md:pt-48 pb-16 md:pb-20 min-h-screen relative overflow-hidden" id="home">
        {/* Neural network background */}
        <AiVisualization />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-gradient">
            Du Kaufst. Wir Senden.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Mit deiner virtuellen U.S. Adresse zapfst du das volle sortiment amerikanischer stores an wir liefern bis vor deine Haustür.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto">
                    Jetzt Starten
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-[#161A1F] text-white border-white/10 overflow-y-auto max-h-[90vh]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gradient">Erstelle dein PakSend® Konto</DialogTitle>
                    <DialogDescription className="text-gray-300">
                      Jetzt virtuelle Adresse sichern.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white">Vorname</Label>
                        <Input 
                          id="firstName" 
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="bg-black/20 border-white/20 text-white" 
                          placeholder="Ihren Vornamen" 
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white">Nachname</Label>
                        <Input 
                          id="lastName" 
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="bg-black/20 border-white/20 text-white" 
                          placeholder="Ihren Nachnamen" 
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-white">Land</Label>
                      <Select value={country} onValueChange={setCountry} required>
                        <SelectTrigger id="country" className="bg-black/20 border-white/20 text-white">
                          <SelectValue placeholder="Wählen Sie Ihr Land aus" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#161A1F] text-white border-white/10">
                          <SelectItem value="germany">Deutschland</SelectItem>
                          <SelectItem value="austria">Österreich</SelectItem>
                          <SelectItem value="belgium">Belgien</SelectItem>
                          <SelectItem value="bulgaria">Bulgarien</SelectItem>
                          <SelectItem value="croatia">Kroatien</SelectItem>
                          <SelectItem value="cyprus">Zypern</SelectItem>
                          <SelectItem value="czechia">Tschechien</SelectItem>
                          <SelectItem value="denmark">Dänemark</SelectItem>
                          <SelectItem value="estonia">Estland</SelectItem>
                          <SelectItem value="finland">Finnland</SelectItem>
                          <SelectItem value="france">Frankreich</SelectItem>
                          <SelectItem value="greece">Griechenland</SelectItem>
                          <SelectItem value="hungary">Ungarn</SelectItem>
                          <SelectItem value="ireland">Irland</SelectItem>
                          <SelectItem value="italy">Italien</SelectItem>
                          <SelectItem value="latvia">Lettland</SelectItem>
                          <SelectItem value="lithuania">Litauen</SelectItem>
                          <SelectItem value="luxembourg">Luxemburg</SelectItem>
                          <SelectItem value="malta">Malta</SelectItem>
                          <SelectItem value="netherlands">Niederlande</SelectItem>
                          <SelectItem value="poland">Polen</SelectItem>
                          <SelectItem value="portugal">Portugal</SelectItem>
                          <SelectItem value="romania">Rumänien</SelectItem>
                          <SelectItem value="slovakia">Slowakei</SelectItem>
                          <SelectItem value="slovenia">Slowenien</SelectItem>
                          <SelectItem value="spain">Spanien</SelectItem>
                          <SelectItem value="sweden">Schweden</SelectItem>
                          <SelectItem value="switzerland">Schweiz</SelectItem>
                          <SelectItem value="other">Anderes EU-Land</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">E-Mail</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-black/20 border-white/20 text-white" 
                        placeholder="Ihre E-Mail Adresse" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Telefonnummer</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-black/20 border-white/20 text-white" 
                        placeholder="Ihre Telefonnummer" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Switch 
                          id="privacyPolicy" 
                          checked={isPrivacyPolicyAccepted} 
                          onCheckedChange={setIsPrivacyPolicyAccepted} 
                          className="bg-black/20 border-white/20 text-deutscher-purple"
                        />
                        <Label htmlFor="privacyPolicy" className="text-white">
                          Ich akzeptiere die <a href="/privacy-policy" className="text-deutscher-purple underline">Datenschutzrichtlinie</a>.
                        </Label>
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-deutscher-purple hover:bg-deutscher-purple-light text-white mt-4"
                    >
                      Konto erstellen 
                    </Button>
                    <div className="border-t border-gray-800 mt-10 md:mt-12 pt-6 md:pt-8 text-center text-gray-400">
            <p className="text-sm md:text-base">© {new Date().getFullYear()} PakSend. All rights reserved.</p>
          </div>
                  </form>
                </DialogContent>
              </Dialog>
              <Link to="/us-stores">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto">
                  Mehr Erfahren
                </Button>
              </Link>
            </div>

            {/* Floating Badges */}
            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              <div className="glass-morphism p-3 md:p-4 rounded-xl animate-float">
                <div className="flex items-center justify-center gap-2 md:gap-3">
                  <Package2 className="h-5 w-5 md:h-6 md:w-6 text-deutscher-purple-light" />
                  <p className="font-medium text-sm md:text-base">Virtuelle US Adresse</p>
                </div>
              </div>
              
              <div className="glass-morphism p-3 md:p-4 rounded-xl animate-float delay-150">
                <div className="flex items-center justify-center gap-2 md:gap-3">
                  <CreditCard className="h-5 w-5 md:h-6 md:w-6 text-deutscher-purple-light" />
                  <p className="font-medium text-sm md:text-base">Transparente Preise</p>
                </div>
              </div>
              
              <div className="glass-morphism p-3 md:p-4 rounded-xl animate-float delay-300 sm:col-span-2 md:col-span-1">
                <div className="flex items-center justify-center gap-2 md:gap-3">
                  <BarChart2 className="h-5 w-5 md:h-6 md:w-6 text-deutscher-purple-light" />
                  <p className="font-medium text-sm md:text-base">KI Gestützte Einblicke</p>
                </div>
              </div>

              {/* Browser Mockup Image */}
              <div className="sm:col-span-2 md:col-span-3 mt-2">
                <img
                  src={dashboardOverview}
                  alt="Browser Mockup"

                />
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-[#0D0F12]" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gradient">Kernfunktionen</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            PakSend vereint starke Logistik mit modernster KI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard 
              icon={Globe} 
              title="Virtuelle US Adresse" 
              description="Nutzen Sie eine eigene US Adresse, um bequem in den USA einzukaufen und Versandkosten zu sparen."
            />
            
            <FeatureCard 
              icon={CreditCard} 
              title="Transparente Preise" 
              description="Erhalten Sie klare Versandkosten ohne versteckte Gebühren, damit Sie immer genau wissen, was der Versand kostet."
              gradientClass="from-[#F97316]/20 to-[#FEC6A1]/20"
            />
            
            <FeatureCard 
              icon={PackageCheck} 
              title="Paketverwaltung" 
              description="Verfolgen Sie Ihre Sendungen in Echtzeit und verwalten Sie Ihre Pakete mühelos über unser benutzerfreundliches System."
              gradientClass="from-[#0EA5E9]/20 to-[#D3E4FD]/20"
            />
            
            <FeatureCard 
              icon={LayoutGrid} 
              title="Paketkonsolidierung" 
              description="Kombinieren Sie mehrere Pakete zu einer einzigen Lieferung, um Versandkosten zu reduzieren und den Versandprozess zu optimieren."
            />
            
            <FeatureCard 
              icon={PieChart} 
              title="Analyse Dashboard" 
              description="Profitieren Sie von Live-Daten und KI-gestützten Versandanalysen, die Ihnen helfen, Lieferungen effizienter zu steuern und zu optimieren."
              gradientClass="from-[#F97316]/20 to-[#FEC6A1]/20"
            />
            
            <FeatureCard 
              icon={MessageSquareText} 
              title="KI Kundensupport" 
              description="Nutzen Sie sofortige Unterstützung durch einen intelligenten Chatbot, der Ihnen bei Fragen zu Versand, Rechnungen und mehr hilft."
              gradientClass="from-[#0EA5E9]/20 to-[#D3E4FD]/20"
            />
          </div>
        </div>
      </section>

      {/* AI Enhancements Section */}
      <section className="py-16 md:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gradient">
                Intelligente Versandlösungen
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
                Mit KI optimieren wir Ihr Einkaufserlebnis – schnell, einfach und grenzenlos.
              </p>

              <div className="space-y-5 md:space-y-6">
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-lg bg-gradient-to-br from-deutscher-purple/20 to-deutscher-purple-light/20 flex items-center justify-center">
                    <PackagePlus className="h-5 w-5 md:h-6 md:w-6 text-deutscher-purple-light" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Intelligente Paketbündelung</h3>
                    <p className="text-sm md:text-base text-gray-300">
                      Unsere ML Algorithmen analysieren Paketankunftsmuster und schlagen optimale Bündelungsstrategien vor – so senken Sie Ihre Versandkosten.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-lg bg-gradient-to-br from-deutscher-purple/20 to-deutscher-purple-light/20 flex items-center justify-center">
                    <PieChart className="h-5 w-5 md:h-6 md:w-6 text-deutscher-purple-light" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Prognosebasierte Analysen</h3>
                    <p className="text-sm md:text-base text-gray-300">
                      Erhalten Sie Echtzeit Einblicke in Versandtrends, voraussichtliche Lieferzeiten und Verhaltensmuster – für eine proaktive Logistikplanung.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-lg bg-gradient-to-br from-deutscher-purple/20 to-deutscher-purple-light/20 flex items-center justify-center">
                    <MessageSquareText className="h-5 w-5 md:h-6 md:w-6 text-deutscher-purple-light" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">NLP Gestützter Support</h3>
                    <p className="text-sm md:text-base text-gray-300">
                      Unsere KI gestützte Konversationshilfe unterstützt Sie beim Tracking, bei Abrechnungsfragen und der Problembehebung – für ein nahtloses Kundenerlebnis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-0">
              <PackageVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 relative" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gradient">
              Das Sagen Unsere Nutzer
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Schließen Sie sich der wachsenden Zahl zufriedener PakSend - Nutzer an.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <TestimonialCard 
              content="PakSend revolutionierte mein Einkaufserlebnis und sparte mir im ersten Monat über 200€ dank KI gesteuerter Paketzusammenführung."
              author="Markus Schmidt"
              role="Tech Enthusiast"
              rating={5}
            />
            
            <TestimonialCard 
              content="Als Kleinunternehmer bin ich auf US Lieferanten angewiesen. Die prädiktive Analyse hilft mir, den Lagerbestand viel effizienter zu planen als zuvor."
              author="Lisa Muller"
              role="Business Owner"
              rating={5}
            />
            
            <TestimonialCard 
              content="Faire Preise und herausragender KI Support, ganz ohne versteckte Kosten oder undurchsichtige Versandoptionen."
              author="Thomas Weber"
              role="Online Shopper"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Shipping Calculator */}
      <ShippingCalculator />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="bg-[#0D0F12] py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Plane className="h-8 w-8 text-deutscher-purple-light" />
                <span className="font-medium">PakSend</span>
              </div>
              <p className="text-sm md:text-base text-gray-400">
              Logistik für internationale Einkäufe.
              </p>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-white">Produkt</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Funktionen</a></li>
                <li><a href="#pricing-section" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Preise</a></li>
                <li><Link to="/documentation" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Dokumentation</Link></li>
                <li><Link to="/api" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-white">Unternehmen</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Über uns</Link></li>
                <li><Link to="/careers" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Karriere</Link></li>
                <li><Link to="/contact" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Kontakt</Link></li>
                <li><Link to="/faq" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-white">Rechtliches</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Datenschutzrichtlinie</Link></li>
                <li><Link to="/terms-of-service" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Nutzungsbedingungen</Link></li>
                <li><Link to="/cookie-policy" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Cookie Richtlinie</Link></li>
                <li><Link to="/impressum" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Impressum</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 md:mt-12 pt-6 md:pt-8 text-center text-gray-400">
            <p className="text-sm md:text-base">© {new Date().getFullYear()} PakSend. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
