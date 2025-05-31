import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import StoreFooter from '@/components/stores/StoreFooter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from '@/components/Navbar';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const FAQ = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-12 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto w-full">
        <Link to="/" className="flex items-center text-deutscher-purple-light hover:text-deutscher-purple-light/80 transition-colors mb-6">
          <ArrowLeft size={16} />
          <span>{t('faqBackToHome')}</span>
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gradient">{t('faqHeadline')}</h1>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-white/10 rounded-lg">
            <AccordionTrigger className="px-4 py-3 text-xl hover:no-underline">
              {t('faqQ1')}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-2 text-gray-400">
              {t('faqA1')}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border border-white/10 rounded-lg">
            <AccordionTrigger className="px-4 py-3 text-xl hover:no-underline">
              {t('faqQ2')}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-2 text-gray-400">
              {t('faqA2')}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border border-white/10 rounded-lg">
            <AccordionTrigger className="px-4 py-3 text-xl hover:no-underline">
              {t('faqQ3')}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-2 text-gray-400">
              {t('faqA3')}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border border-white/10 rounded-lg">
            <AccordionTrigger className="px-4 py-3 text-xl hover:no-underline">
              {t('faqQ4')}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-2 text-gray-400">
              {t('faqA4')}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border border-white/10 rounded-lg">
            <AccordionTrigger className="px-4 py-3 text-xl hover:no-underline">
              {t('faqQ5')}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-2 text-gray-400">
              {t('faqA5')}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="border border-white/10 rounded-lg">
            <AccordionTrigger className="px-4 py-3 text-xl hover:no-underline">
              {t('faqQ6')}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-2 text-gray-400">
              {t('faqA6')}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
      <StoreFooter />
    </div>
  );
};

export default FAQ;