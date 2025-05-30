
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

const FAQ = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white">
      <Navbar />
      
      <div className="container mx-auto pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="flex items-center text-deutscher-purple-light hover:text-deutscher-purple-light/80 transition-colors">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gradient">Frequently Asked Questions</h1>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 rounded-lg">
              <AccordionTrigger className="px-4 py-3 text-xl hover:no-underline">
                How does PakSend® work?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2 text-gray-400">
                PakSend® provides you with a U.S. shipping address. You use this address when shopping at U.S. online stores. 
                When your packages arrive at our U.S. warehouse, we prepare them for international shipping and deliver them 
                directly to your door in Germany.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-white/10 rounded-lg">
              <AccordionTrigger className="px-4 py-3 text-xl hover:no-underline">
                How much does shipping cost?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2 text-gray-400">
                Shipping costs depend on the weight, dimensions, and shipping method you choose. We offer various shipping 
                options to fit your budget and timeline needs. You can use our Shipping Calculator to estimate costs 
                before ordering. We also offer package consolidation to help you save up to 80% on shipping.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-white/10 rounded-lg">
              <AccordionTrigger className="px-4 py-3 text-xl hover:no-underline">
                How long does shipping take?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2 text-gray-400">
                Shipping times vary depending on the service level you choose. Express shipping typically takes 2-4 business days, 
                while standard shipping takes 5-10 business days. Processing at our warehouse usually takes 24-48 hours 
                after your package arrives.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-white/10 rounded-lg">
              <AccordionTrigger className="px-4 py-3 text-xl hover:no-underline">
                What about customs and import taxes?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2 text-gray-400">
                We handle all customs documentation for you. Import duties and taxes are calculated based on the declared value 
                of your items and are typically collected at delivery or paid in advance through our platform. We provide 
                transparent information about potential customs fees during the shipping process.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-white/10 rounded-lg">
              <AccordionTrigger className="px-4 py-3 text-xl hover:no-underline">
                Are there any items I cannot ship?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2 text-gray-400">
                Yes, certain items are prohibited from international shipping due to customs regulations or carrier restrictions. 
                These include perishable goods, aerosols, flammable items, alcohol, tobacco products, and certain electronics 
                with lithium batteries. For a complete list, please refer to our Prohibited Items section.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border border-white/10 rounded-lg">
              <AccordionTrigger className="px-4 py-3 text-xl hover:no-underline">
                Can I track my package?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2 text-gray-400">
                Yes, full tracking is provided for all shipments. Once your package is processed at our warehouse, you'll 
                receive tracking information via email and can also track your package through your PakSend® dashboard.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
        </div>
      </div>
      <StoreFooter />
    </div>
  );
};

export default FAQ;