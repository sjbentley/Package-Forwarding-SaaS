import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from '@/hooks/useTranslation';
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
import { Switch } from "@/components/ui/switch";

const CTASection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [isPrivacyPolicyAccepted, setIsPrivacyPolicyAccepted] = useState(false);

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
    setIsPrivacyPolicyAccepted(false);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deutscher-purple-dark/50 to-deutscher-purple-darker/50 animate-gradient-shift bg-[length:400%_400%]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            {t('ctaHeadline')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {t('ctaSubline')}
          </p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto">
                {t('startNow')}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#161A1F] text-white border-white/10 overflow-y-auto max-h-[90vh]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gradient">{t('createAccount')}</DialogTitle>
                <DialogDescription className="text-gray-300">
                  {t('secureAddress')}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">{t('firstName')}</Label>
                    <Input 
                      id="firstName" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="bg-black/20 border-white/20 text-white" 
                      placeholder={t('firstName')} 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">{t('lastName')}</Label>
                    <Input 
                      id="lastName" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="bg-black/20 border-white/20 text-white" 
                      placeholder={t('lastName')} 
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-white">{t('country')}</Label>
                  <Select value={country} onValueChange={setCountry} required>
                    <SelectTrigger id="country" className="bg-black/20 border-white/20 text-white">
                      <SelectValue placeholder={t('selectCountry')} />
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
                  <Label htmlFor="email" className="text-white">{t('email')}</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-black/20 border-white/20 text-white" 
                    placeholder={t('email')} 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">{t('phone')}</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-black/20 border-white/20 text-white" 
                    placeholder={t('phone')} 
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
                      {t('acceptPrivacy')} <a href="/privacy-policy" className="text-deutscher-purple underline">{t('privacyPolicy')}</a>.
                    </Label>
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-deutscher-purple hover:bg-deutscher-purple-light text-white mt-4"
                >
                  {t('submit')} 
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

export default CTASection;
