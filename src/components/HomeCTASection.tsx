
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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

const HomeCTASection: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Success!",
      description: "Your account has been created. Welcome to PakSend®!",
      duration: 5000,
    });
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
          Entdecken Sie eine smarte Art, über Grenzen hinweg einzukaufen!
          </h2>
          <p className="text-lg text-gray-300 mb-8">
          Treten Sie noch heute PakSend® bei und erhalten Sie Ihre virtuelle Adresse.
          </p>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white px-8 py-6 text-lg">
              Anmelden
                <ArrowRight className="ml-2" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#161A1F] text-white border-white/10">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gradient">Erstelle dein PakSend® Konto</DialogTitle>
                <DialogDescription className="text-gray-300">
                Jetzt registrieren und deine Virtuelle Adresse sichern.
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
                
                <Button 
                  type="submit" 
                  className="w-full bg-deutscher-purple hover:bg-deutscher-purple-light text-white mt-4"
                >
                  Konto erstellen 
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default HomeCTASection;