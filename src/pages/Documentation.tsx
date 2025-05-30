
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, FileText, Code } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Documentation: React.FC = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 px-4 md:px-8 lg:px-16 pb-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <Link to="/" className="flex items-center text-deutscher-purple-light hover:text-deutscher-purple-light/80 transition-colors">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-white">Documentation</h2>
            <p className="text-gray-400">Last updated: May 12, 2025</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>Getting Started Guide</CardTitle>
                <CardDescription className="text-gray-400">Learn the basics of using PakSend®</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4 items-start">
                  <BookOpen className="h-6 w-6 text-deutscher-purple-light flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-deutscher-purple-light">First Steps with PakSend®</h3>
                    <p className="text-gray-300 mt-2">Learn how to create your account, set up your U.S. shipping address, and prepare for your first purchase.</p>
                    <Link to="/documentation/getting-started" className="mt-3 inline-block text-deutscher-purple hover:text-deutscher-purple-light transition-colors">
                      Read guide →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>Shipping Process</CardTitle>
                <CardDescription className="text-gray-400">Step-by-step shipping guide</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4 items-start">
                  <FileText className="h-6 w-6 text-deutscher-purple-light flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-deutscher-purple-light">Complete Shipping Guide</h3>
                    <p className="text-gray-300 mt-2">Understand the entire shipping process, from ordering from U.S. stores to receiving your package in Germany.</p>
                    <Link to="/documentation/shipping-process" className="mt-3 inline-block text-deutscher-purple hover:text-deutscher-purple-light transition-colors">
                      View guide →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription className="text-gray-400">Find answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="text-white">
                <AccordionItem value="item-1" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-deutscher-purple-light">
                    How long does shipping from the US to Germany take?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Shipping times vary depending on the service level you choose. Express shipping typically takes 2-4 business days, 
                    while standard shipping takes 5-10 business days. Processing at our warehouse usually takes 24-48 hours 
                    after your package arrives.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-deutscher-purple-light">
                    How do I track my package?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Full tracking is provided for all shipments. Once your package is processed at our warehouse, you'll 
                    receive tracking information via email and can also track your package through your PakSend® dashboard.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-deutscher-purple-light">
                    Are there any items I cannot ship?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Yes, certain items are prohibited from international shipping due to customs regulations or carrier restrictions. 
                    These include perishable goods, aerosols, flammable items, alcohol, tobacco products, and certain electronics 
                    with lithium batteries. See our Prohibited Items section for a complete list.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>Customs Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4 items-start">
                  <FileText className="h-6 w-6 text-deutscher-purple-light flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-deutscher-purple-light">Customs & Regulations</h3>
                    <p className="text-gray-300 mt-2">Learn about customs duties, taxes, and import regulations for shipping to Germany.</p>
                    <Link to="/documentation/customs" className="mt-3 inline-block text-deutscher-purple hover:text-deutscher-purple-light transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>Package Consolidation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4 items-start">
                  <FileText className="h-6 w-6 text-deutscher-purple-light flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-deutscher-purple-light">Save on Shipping</h3>
                    <p className="text-gray-300 mt-2">How package consolidation works and how it can save you up to 80% on shipping costs.</p>
                    <Link to="/documentation/consolidation" className="mt-3 inline-block text-deutscher-purple hover:text-deutscher-purple-light transition-colors">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>API Documentation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Code className="h-6 w-6 text-deutscher-purple-light flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-deutscher-purple-light">Developer Resources</h3>
                    <p className="text-gray-300 mt-2">Technical documentation for integrating with the PakSend® API.</p>
                    <Link to="/api" className="mt-3 inline-block text-deutscher-purple hover:text-deutscher-purple-light transition-colors">
                      View API docs →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <StoreFooter />
    </div>
  );
};

export default Documentation;