import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from '@/hooks/useTranslation';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      toast({
        title: t('ctaToastTitle'),
        description: t('ctaToastDesc'),
        duration: 5000,
      });
    }, 1000);
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
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder={t('ctaEmailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 rounded-md bg-black/20 border border-white/20 text-white focus:outline-none focus:border-deutscher-purple-light flex-1"
            />
            <Button 
              type="submit"
              className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white px-8 py-6 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('ctaButtonLoading') : t('ctaButton')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
