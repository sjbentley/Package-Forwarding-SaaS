
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Impressum: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 px-4 md:px-8 lg:px-16 pb-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <Link to="/" className="flex items-center text-deutscher-purple-light hover:text-deutscher-purple-light/80 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-white">Impressum</h2>
            <p className="text-gray-400">Last updated: May 12, 2025</p>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription className="text-gray-400">Legal details about our company</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium text-deutscher-purple-light">PakSend GmbH</h3>
                <p className="text-gray-300">Commercial Register: HRB 123456</p>
                <p className="text-gray-300">VAT ID: DE123456789</p>
              </div>
              
              <div className="space-y-2 pt-2">
                <h3 className="font-medium text-deutscher-purple-light">Office Address</h3>
                <p className="text-gray-300">Musterstraße 123</p>
                <p className="text-gray-300">10115 Berlin</p>
                <p className="text-gray-300">Germany</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Authorized Representatives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">Managing Directors:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Max Mustermann</li>
                <li>Erika Musterfrau</li>
              </ul>
              
              <p className="pt-2 text-gray-300">
                Responsible for content according to § 55 Abs. 2 RStV: 
                Max Mustermann, Musterstraße 123, 10115 Berlin
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-medium text-deutscher-purple-light">Email</h3>
                  <p className="text-gray-300">info@paksend.com</p>
                  <p className="text-gray-300">support@paksend.com</p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium text-deutscher-purple-light">Phone</h3>
                  <p className="text-gray-300">+49 30 1234 5678</p>
                  <p className="text-gray-300">Office hours: Mon-Fri, 9:00-18:00 CET</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                The European Commission provides a platform for online dispute resolution (ODR) which can be accessed at 
                <a href="https://ec.europa.eu/consumers/odr" className="text-deutscher-purple-light hover:text-white ml-1" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr
                </a>.
              </p>
              <p className="text-gray-300">
                We are not obliged and not willing to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Liability for Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                As a service provider, we are responsible for our own content on these pages according to 
                general laws. However, we are not obliged to monitor transmitted or stored third-party 
                information or to investigate circumstances that indicate illegal activity.
              </p>
              <p className="text-gray-300">
                Obligations to remove or block the use of information according to general laws remain 
                unaffected. However, liability in this regard is only possible from the time of knowledge 
                of a specific legal violation. Upon becoming aware of corresponding legal violations, we 
                will remove this content immediately.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Liability for Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Our offer contains links to external third-party websites, the content of which we have 
                no influence over. Therefore, we cannot assume any liability for this external content. 
                The respective provider or operator of the pages is always responsible for the content 
                of the linked pages. The linked pages were checked for possible legal violations at the 
                time of linking. Illegal content was not recognizable at the time of linking.
              </p>
              <p className="text-gray-300">
                However, permanent monitoring of the content of the linked pages is not reasonable 
                without concrete indications of a legal violation. Upon becoming aware of legal 
                violations, we will remove such links immediately.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Copyright</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                The content and works created by the site operators on these pages are subject to 
                German copyright law. Duplication, processing, distribution, and any kind of 
                exploitation outside the limits of copyright law require the written consent of 
                the respective author or creator. Downloads and copies of this site are only 
                permitted for private, non-commercial use.
              </p>
              <p className="text-gray-300">
                Insofar as the content on this site was not created by the operator, the copyrights 
                of third parties are respected. In particular, third-party content is marked as such. 
                Should you nevertheless become aware of a copyright infringement, please inform us 
                accordingly. Upon becoming aware of legal violations, we will remove such content immediately.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <StoreFooter />
    </div>
  );
};

export default Impressum;