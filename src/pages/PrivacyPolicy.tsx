
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
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
            <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
            <p className="text-gray-400">Last updated: May 12, 2025</p>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>1. Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                PakSend® ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
              <p>
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>2. Information We Collect</CardTitle>
              <CardDescription className="text-gray-400">Personal and automatically collected data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-medium text-deutscher-purple-light">2.1 Personal Information</h3>
                <p>
                  We may collect personal information that you provide directly to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create an account</li>
                  <li>Update your profile</li>
                  <li>Use our shipping services</li>
                  <li>Contact our customer support</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Complete surveys or provide feedback</li>
                </ul>
                <p>
                  This information may include your name, email address, phone number, shipping/billing address, payment information, and any other information you choose to provide.
                </p>
                
                <h3 className="font-medium text-deutscher-purple-light">2.2 Automatically Collected Information</h3>
                <p>
                  When you use our website or services, we may automatically collect certain information about your device and usage, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address</li>
                  <li>Device type and operating system</li>
                  <li>Browser type and version</li>
                  <li>Pages you visit and features you use</li>
                  <li>Time and date of your visits</li>
                  <li>Referring/exit pages</li>
                  <li>Clickstream data</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>3. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send transactional messages, service updates, and promotional content</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and unauthorized access</li>
                <li>Personalize and improve your experience</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>4. Sharing of Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We may share your personal information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who perform services on our behalf</li>
                <li>Shipping and logistics partners necessary to fulfill your orders</li>
                <li>Legal authorities when required by law or to protect our rights</li>
                <li>Business partners with your consent</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>5. Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                You may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accessing your personal information</li>
                <li>Correcting inaccurate information</li>
                <li>Deleting your information</li>
                <li>Restricting or objecting to processing</li>
                <li>Data portability</li>
                <li>Withdrawing consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us at privacy@paksend.com.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>6. Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission or storage system is guaranteed to be 100% secure.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>7. International Transfers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Your information may be transferred to, and processed in, countries other than the one in which you reside. These countries may have different data protection laws than your country of residence.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>8. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>9. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>Email: privacy@paksend.com</p>
              <p>Postal Address: PakSend GmbH, Musterstraße 123, 10115 Berlin, Germany</p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <StoreFooter />
    </div>
  );
};

export default PrivacyPolicy;