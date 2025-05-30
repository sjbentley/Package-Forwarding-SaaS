
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PromoSection: React.FC = () => {
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
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="neo-card p-8 text-center glass-morphism bg-gradient-to-br from-deutscher-purple/20 to-deutscher-purple-light/20">
          <h2 className="text-2xl font-bold mb-4">
            🎉 First-Time Shoppers: Get €5 Off Your First Shipment! 🎉
          </h2>
          <p className="text-xl mb-6">
            Join PakSend® today and start shopping your dream items! 🚀
          </p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white px-8 py-6 text-lg">
                Sign Up and Save €5
                <ArrowRight className="ml-2" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#161A1F] text-white border-white/10">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gradient">Create Your PakSend® Account</DialogTitle>
                <DialogDescription className="text-gray-300">
                  Sign up now to get your exclusive US shipping address and €5 off your first shipment.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <Input 
                      id="firstName" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="bg-black/20 border-white/20 text-white" 
                      placeholder="Enter your first name" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <Input 
                      id="lastName" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="bg-black/20 border-white/20 text-white" 
                      placeholder="Enter your last name" 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-white">Country</Label>
                  <Select value={country} onValueChange={setCountry} required>
                    <SelectTrigger id="country" className="bg-black/20 border-white/20 text-white">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#161A1F] text-white border-white/10">
                      <SelectItem value="germany">Germany</SelectItem>
                      <SelectItem value="austria">Austria</SelectItem>
                      <SelectItem value="switzerland">Switzerland</SelectItem>
                      <SelectItem value="france">France</SelectItem>
                      <SelectItem value="netherlands">Netherlands</SelectItem>
                      <SelectItem value="belgium">Belgium</SelectItem>
                      <SelectItem value="luxembourg">Luxembourg</SelectItem>
                      <SelectItem value="other">Other EU Country</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-black/20 border-white/20 text-white" 
                    placeholder="Enter your email address" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-black/20 border-white/20 text-white" 
                    placeholder="Enter your phone number" 
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-deutscher-purple hover:bg-deutscher-purple-light text-white mt-4"
                >
                  Create Account & Get €5 Off
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
