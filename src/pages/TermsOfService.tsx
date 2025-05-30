
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
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
            <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
            <p className="text-gray-400">Last updated: May 12, 2025</p>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the PakSend® website and services operated by PakSend GmbH ("us", "we", or "our").
              </p>
              <p>
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>1. Accounts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
              </p>
              <p>
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>2. Service Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                PakSend® provides package forwarding services from the United States to various international destinations. We provide you with a U.S. shipping address and forward packages received at that address to your international destination address.
              </p>
              <p>
                We are not responsible for the content, quality, safety, legality, or any other aspect of the items you choose to have shipped through our service.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>3. Prohibited Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                You may not ship items that are prohibited by law, including but not limited to illegal drugs, weapons, hazardous materials, and counterfeit goods. We reserve the right to inspect any package and refuse service for any reason.
              </p>
              <p>
                By using our service, you confirm that the items you ship comply with all applicable laws and regulations in the origin and destination countries.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>4. Customs and Duties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                You are responsible for all customs duties, taxes, and fees imposed by the destination country. We may collect estimated customs charges in advance, but the actual amount determined by customs authorities may differ.
              </p>
              <p>
                You are responsible for providing accurate customs declarations for all shipments. False declarations may result in delays, penalties, or seizure of your items.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>5. Shipping and Delivery</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Delivery times are estimates and not guarantees. Many factors outside of our control may affect delivery times, including weather, customs processing, and local delivery conditions.
              </p>
              <p>
                We are not responsible for delays, damage, or loss caused by third-party carriers or customs authorities.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>6. Fees and Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                You agree to pay all fees associated with our services as outlined on our website. Fees may include shipping costs, handling fees, storage fees, consolidation fees, and insurance.
              </p>
              <p>
                We reserve the right to change our fees at any time. Changes will be effective immediately upon posting to our website.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>7. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                In no event shall PakSend®, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your access to or use of or inability to access or use the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any content obtained from the Service</li>
                <li>Unauthorized access, use or alteration of your transmissions or content</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>8. Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>9. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                These Terms shall be governed and construed in accordance with the laws of Germany, without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>10. Changes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. Changes will be effective immediately upon posting to our website.
              </p>
              <p>
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>11. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <p>Email: legal@paksend.com</p>
              <p>Postal Address: PakSend GmbH, Musterstraße 123, 10115 Berlin, Germany</p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <StoreFooter />
    </div>
  );
};

export default TermsOfService;