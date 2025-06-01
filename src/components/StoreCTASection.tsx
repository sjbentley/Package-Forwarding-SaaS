import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
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
import { useTranslation } from '@/hooks/useTranslation';

const StoreCTASection: React.FC = () => {
  const [isPrivacyPolicyAccepted, setIsPrivacyPolicyAccepted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('storeCtaToastTitle'),
      description: t('storeCtaToastDesc'),
      duration: 5000,
    });

      toast({
      title: "Erfolgreich!",
      description: "Ihr Konto wurde erstellt. Willkommen bei PakSend®!",
      duration: 5000,
    });

    const subject = encodeURIComponent("Anfrage zur virtuellen Adresse");
    const body = encodeURIComponent(
    `Hallo PakSend-Team,

    ich möchte mich für eine virtuelle Adresse registrieren und bitte um weitere Informationen zur Nutzung Ihres Services.

    Hier sind meine Daten:

    Vorname: ${firstName}
    Nachname: ${lastName}
    E-Mail: ${email}
    Telefon: ${phone}
    Land: ${country}

    Ich freue mich auf Ihre Rückmeldung.

    Viele Grüße,
    ${firstName} ${lastName}`
    );

    window.location.href = `mailto:paksend.de@gmail.com?subject=${subject}&body=${body}`;
    
    setIsOpen(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setCountry('');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deutscher-purple-dark/50 to-deutscher-purple-darker/50 animate-gradient-shift bg-[length:400%_400%]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            {t('storeCtaHeadline')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {t('storeCtaSubline')}
          </p>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto">
                {t('storeCtaButton')}
                <ArrowRight className="ml-2" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#161A1F] text-white border-white/10 overflow-y-auto max-h-[90vh]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gradient">{t('storeCtaDialogTitle')}</DialogTitle>
                <DialogDescription className="text-gray-300">
                  {t('storeCtaDialogDesc')}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">{t('storeCtaFirstName')}</Label>
                    <Input 
                      id="firstName" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="bg-black/20 border-white/20 text-white" 
                      placeholder={t('storeCtaFirstNamePlaceholder')} 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">{t('storeCtaLastName')}</Label>
                    <Input 
                      id="lastName" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="bg-black/20 border-white/20 text-white" 
                      placeholder={t('storeCtaLastNamePlaceholder')} 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-white">{t('storeCtaCountry')}</Label>
                  <Select value={country} onValueChange={setCountry} required>
                    <SelectTrigger id="country" className="bg-black/20 border-white/20 text-white">
                      <SelectValue placeholder={t('storeCtaCountryPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#161A1F] text-white border-white/10">
                      <SelectItem value="germany">{t('navbarGermany')}</SelectItem>
                      <SelectItem value="austria">{t('navbarAustria')}</SelectItem>
                      <SelectItem value="belgium">{t('navbarBelgium')}</SelectItem>
                      <SelectItem value="bulgaria">{t('navbarBulgaria') || "Bulgaria"}</SelectItem>
                      <SelectItem value="croatia">{t('navbarCroatia') || "Croatia"}</SelectItem>
                      <SelectItem value="cyprus">{t('navbarCyprus') || "Cyprus"}</SelectItem>
                      <SelectItem value="czechia">{t('navbarCzechia') || "Czechia"}</SelectItem>
                      <SelectItem value="denmark">{t('navbarDenmark') || "Denmark"}</SelectItem>
                      <SelectItem value="estonia">{t('navbarEstonia') || "Estonia"}</SelectItem>
                      <SelectItem value="finland">{t('navbarFinland') || "Finland"}</SelectItem>
                      <SelectItem value="france">{t('navbarFrance') || "France"}</SelectItem>
                      <SelectItem value="greece">{t('navbarGreece') || "Greece"}</SelectItem>
                      <SelectItem value="hungary">{t('navbarHungary') || "Hungary"}</SelectItem>
                      <SelectItem value="ireland">{t('navbarIreland') || "Ireland"}</SelectItem>
                      <SelectItem value="italy">{t('navbarItaly') || "Italy"}</SelectItem>
                      <SelectItem value="latvia">{t('navbarLatvia') || "Latvia"}</SelectItem>
                      <SelectItem value="lithuania">{t('navbarLithuania') || "Lithuania"}</SelectItem>
                      <SelectItem value="luxembourg">{t('navbarLuxembourg') || "Luxembourg"}</SelectItem>
                      <SelectItem value="malta">{t('navbarMalta') || "Malta"}</SelectItem>
                      <SelectItem value="netherlands">{t('navbarNetherlands') || "Netherlands"}</SelectItem>
                      <SelectItem value="poland">{t('navbarPoland') || "Poland"}</SelectItem>
                      <SelectItem value="portugal">{t('navbarPortugal') || "Portugal"}</SelectItem>
                      <SelectItem value="romania">{t('navbarRomania') || "Romania"}</SelectItem>
                      <SelectItem value="slovakia">{t('navbarSlovakia') || "Slovakia"}</SelectItem>
                      <SelectItem value="slovenia">{t('navbarSlovenia') || "Slovenia"}</SelectItem>
                      <SelectItem value="spain">{t('navbarSpain') || "Spain"}</SelectItem>
                      <SelectItem value="sweden">{t('navbarSweden') || "Sweden"}</SelectItem>
                      <SelectItem value="switzerland">{t('navbarSwitzerland') || "Switzerland"}</SelectItem>
                      <SelectItem value="other">{t('navbarOtherEuCountry') || "Other EU Country"}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">{t('storeCtaEmail')}</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-black/20 border-white/20 text-white" 
                    placeholder={t('storeCtaEmailPlaceholder')} 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">{t('storeCtaPhone')}</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-black/20 border-white/20 text-white" 
                    placeholder={t('storeCtaPhonePlaceholder')} 
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
                      {t('storeCtaAcceptPrivacy')}
                      <a href="/privacy-policy" className="text-deutscher-purple underline">{t('storeCtaPrivacyPolicy')}</a>.
                    </Label>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-deutscher-purple hover:bg-deutscher-purple-light text-white mt-4"
                >
                  {t('storeCtaCreateAccountButton')}
                </Button>
                <div className="border-t border-gray-800 mt-10 md:mt-12 pt-6 md:pt-8 text-center text-gray-400">
                  <p className="text-sm md:text-base">{t('copyright').replace('{year}', new Date().getFullYear().toString())}</p>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default StoreCTASection;
