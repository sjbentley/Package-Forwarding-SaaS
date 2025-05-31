import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Plane, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [isPrivacyPolicyAccepted, setIsPrivacyPolicyAccepted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isPrivacyPolicyAccepted) {
      alert(t('navbarPrivacyAlert'));
      return;
    }

    // Handle form submission logic here
    console.log({ firstName, lastName, email, phone, country });
    setIsOpen(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setCountry('');
    setIsPrivacyPolicyAccepted(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'neo-blur py-2' : 'py-4'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Plane className="h-8 w-8 text-deutscher-purple-light" />
          <span className="font-bold text-xl text-white">PakSend</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#features" 
            className="text-gray-300 hover:text-white transition-colors"
            onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
          >
            {t('navbarFeatures')}
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-300 hover:text-white transition-colors"
            onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
          >
            {t('navbarTestimonials')}
          </a>
          <a 
            href="#pricing-section" 
            className="text-gray-300 hover:text-white transition-colors"
            onClick={(e) => { e.preventDefault(); scrollToSection('pricing-section'); }}
          >
            {t('navbarPricing')}
          </a>
          <a 
            href="#calculator-section" 
            className="text-gray-300 hover:text-white transition-colors"
            onClick={(e) => { e.preventDefault(); scrollToSection('calculator-section'); }}
          >
            {t('navbarCalculator')}
          </a>
          <LanguageSelector />
        </div>

        {/* Login and Demo Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/dashboard">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              {t('navbarDemo')}
            </Button>
          </Link>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white">
                {t('navbarLogin')}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#161A1F] text-white border-white/10 overflow-y-auto max-h-[90vh]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gradient">{t('navbarCreateAccountTitle')}</DialogTitle>
                <DialogDescription className="text-gray-300">
                  {t('navbarCreateAccountDesc')}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">{t('navbarFirstName')}</Label>
                    <Input 
                      id="firstName" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="bg-black/20 border-white/20 text-white" 
                      placeholder={t('navbarFirstNamePlaceholder')} 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">{t('navbarLastName')}</Label>
                    <Input 
                      id="lastName" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="bg-black/20 border-white/20 text-white" 
                      placeholder={t('navbarLastNamePlaceholder')} 
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-white">{t('navbarCountry')}</Label>
                  <Select value={country} onValueChange={setCountry} required>
                    <SelectTrigger id="country" className="bg-black/20 border-white/20 text-white">
                      <SelectValue placeholder={t('navbarCountryPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#161A1F] text-white border-white/10">
                      <SelectItem value="germany">{t('navbarGermany')}</SelectItem>
                      <SelectItem value="austria">{t('navbarAustria')}</SelectItem>
                      <SelectItem value="belgium">{t('navbarBelgium')}</SelectItem>
                      {/* Add other countries */}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">{t('navbarEmail')}</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-black/20 border-white/20 text-white" 
                    placeholder={t('navbarEmailPlaceholder')} 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">{t('navbarPhone')}</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-black/20 border-white/20 text-white" 
                    placeholder={t('navbarPhonePlaceholder')} 
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
                      {t('navbarAcceptPrivacy')}
                      <a href="/privacy-policy" className="text-deutscher-purple underline">{t('navbarPrivacyPolicy')}</a>.
                    </Label>
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-deutscher-purple hover:bg-deutscher-purple-light text-white mt-4"
                >
                  {t('navbarCreateAccountButton')}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden neo-blur mt-2 py-4 px-4">
          <div className="flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
            >
              {t('navbarFeatures')}
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
            >
              {t('navbarTestimonials')}
            </a>
            <a 
              href="#pricing-section" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('pricing-section'); }}
            >
              {t('navbarPricing')}
            </a>
            <a 
              href="#calculator-section" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('calculator-section'); }}
            >
              {t('navbarCalculator')}
            </a>
            <LanguageSelector />
            <Link to="/dashboard" className="w-full">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full">
                {t('navbarDemo')}
              </Button>
            </Link>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white w-full">
                  {t('navbarLogin')}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-[#161A1F] text-white border-white/10 overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gradient">{t('navbarCreateAccountTitle')}</DialogTitle>
                  <DialogDescription className="text-gray-300">
                    {t('navbarCreateAccountDesc')}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">{t('navbarFirstName')}</Label>
                      <Input 
                        id="firstName" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="bg-black/20 border-white/20 text-white" 
                        placeholder={t('navbarFirstNamePlaceholder')} 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">{t('navbarLastName')}</Label>
                      <Input 
                        id="lastName" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="bg-black/20 border-white/20 text-white" 
                        placeholder={t('navbarLastNamePlaceholder')} 
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-white">{t('navbarCountry')}</Label>
                    <Select value={country} onValueChange={setCountry} required>
                      <SelectTrigger id="country" className="bg-black/20 border-white/20 text-white">
                        <SelectValue placeholder={t('navbarCountryPlaceholder')} />
                      </SelectTrigger>
                      <SelectContent className="bg-[#161A1F] text-white border-white/10">
                        <SelectItem value="germany">{t('navbarGermany')}</SelectItem>
                        <SelectItem value="austria">{t('navbarAustria')}</SelectItem>
                        <SelectItem value="belgium">{t('navbarBelgium')}</SelectItem>
                        {/* Add other countries */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">{t('navbarEmail')}</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-black/20 border-white/20 text-white" 
                      placeholder={t('navbarEmailPlaceholder')} 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">{t('navbarPhone')}</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-black/20 border-white/20 text-white" 
                      placeholder={t('navbarPhonePlaceholder')} 
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
                        {t('navbarAcceptPrivacy')}
                        <a href="/privacy-policy" className="text-deutscher-purple underline">{t('navbarPrivacyPolicy')}</a>.
                      </Label>
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-deutscher-purple hover:bg-deutscher-purple-light text-white mt-4"
                  >
                    {t('navbarCreateAccountButton')}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
