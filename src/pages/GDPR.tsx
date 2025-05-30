
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const GDPR: React.FC = () => {
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
            <h2 className="text-2xl font-bold text-white">GDPR Compliance</h2>
            <p className="text-gray-400">Last updated: May 12, 2025</p>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                At PakSend®, we are committed to protecting the privacy and rights of our users. This page outlines our compliance with the General Data Protection Regulation (GDPR), which enhances the protection of personal data for all EU citizens.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>1. Data Controller</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                PakSend GmbH acts as the data controller for personal information collected through our website and services. We determine the purposes and means of processing your personal data.
              </p>
              <p>
                Contact details:
              </p>
              <p>PakSend GmbH</p>
              <p>Musterstraße 123</p>
              <p>10115 Berlin, Germany</p>
              <p>Email: dpo@paksend.com</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>2. Data Protection Officer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We have appointed a Data Protection Officer (DPO) who is responsible for overseeing our data protection strategy and ensuring compliance with GDPR requirements. You can contact our DPO directly at dpo@paksend.com.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>3. Your Rights Under GDPR</CardTitle>
              <CardDescription className="text-gray-400">Understanding your data rights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Under the GDPR, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-medium text-deutscher-purple-light">Right to Access</span>: You can request a copy of your personal data that we hold.</li>
                <li><span className="font-medium text-deutscher-purple-light">Right to Rectification</span>: You can ask us to correct any inaccurate personal data.</li>
                <li><span className="font-medium text-deutscher-purple-light">Right to Erasure (Right to be Forgotten)</span>: You can request that we delete your personal data.</li>
                <li><span className="font-medium text-deutscher-purple-light">Right to Restriction of Processing</span>: You can request that we restrict the processing of your personal data.</li>
                <li><span className="font-medium text-deutscher-purple-light">Right to Data Portability</span>: You can request a copy of your personal data in a structured, commonly used, machine-readable format.</li>
                <li><span className="font-medium text-deutscher-purple-light">Right to Object</span>: You can object to our processing of your personal data.</li>
                <li><span className="font-medium text-deutscher-purple-light">Rights Related to Automated Decision Making</span>: You have rights related to automated decision making and profiling.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at dpo@paksend.com. We will respond to your request within one month.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>4. Legal Basis for Processing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We process your personal data on the following legal bases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-medium text-deutscher-purple-light">Consent</span>: Where you have explicitly given consent for us to process your data for specific purposes.</li>
                <li><span className="font-medium text-deutscher-purple-light">Contract</span>: Where processing is necessary for the performance of a contract with you.</li>
                <li><span className="font-medium text-deutscher-purple-light">Legal Obligation</span>: Where processing is necessary for compliance with our legal obligations.</li>
                <li><span className="font-medium text-deutscher-purple-light">Legitimate Interests</span>: Where processing is necessary for our legitimate interests or those of a third party, except where such interests are overridden by your interests or fundamental rights.</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>5. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
              <p>
                Different types of personal data have different retention periods:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information: As long as your account is active plus 2 years</li>
                <li>Transaction data: 7 years for tax purposes</li>
                <li>Shipping information: 2 years after shipment completion</li>
                <li>Marketing preferences: Until you opt-out or request deletion</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>6. International Transfers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                When transferring personal data outside the European Economic Area (EEA), we ensure that adequate protection is in place through one or more of the following safeguards:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Transfers to countries with an adequacy decision from the European Commission</li>
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Binding Corporate Rules (BCRs) for transfers within our corporate group</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>7. Data Breach Notification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                In case of a personal data breach, we will notify the relevant supervisory authority within 72 hours of becoming aware of the breach, where feasible, unless the breach is unlikely to result in a risk to the rights and freedoms of individuals.
              </p>
              <p>
                If the breach is likely to result in a high risk to your rights and freedoms, we will also notify you without undue delay.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>8. Data Protection Impact Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We conduct Data Protection Impact Assessments (DPIAs) where processing operations are likely to result in high risks to the rights and freedoms of individuals, particularly when using new technologies.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>9. Complaints</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                If you believe that our processing of your personal data infringes data protection laws, you have the right to lodge a complaint with a supervisory authority responsible for data protection. You may do so in the EU member state of your habitual residence, your place of work, or the place of the alleged infringement.
              </p>
              <p>
                You can also contact us directly at dpo@paksend.com before lodging a complaint with the supervisory authority, and we will do our best to resolve your concern.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>10. Changes to Our GDPR Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We may update our GDPR policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
              <p>
                We encourage you to review this policy periodically for any changes.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <StoreFooter />
    </div>
  );
};

export default GDPR;