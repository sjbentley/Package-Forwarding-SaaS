
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CookiePolicy: React.FC = () => {
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
            <h2 className="text-2xl font-bold text-white">Cookie Policy</h2>
            <p className="text-gray-400">Last updated: May 12, 2025</p>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                This Cookie Policy explains how PakSend GmbH ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>1. What are Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p>
                Cookies set by the website owner (in this case, PakSend®) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>2. Types of Cookies We Use</CardTitle>
              <CardDescription className="text-gray-400">Different categories of cookies on our website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-medium text-deutscher-purple-light">2.1 Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not work.
                </p>
                
                <h3 className="font-medium text-deutscher-purple-light">2.2 Performance and Analytics Cookies</h3>
                <p>
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and anonymous.
                </p>
                
                <h3 className="font-medium text-deutscher-purple-light">2.3 Functional Cookies</h3>
                <p>
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies, then some or all of these services may not function properly.
                </p>
                
                <h3 className="font-medium text-deutscher-purple-light">2.4 Targeting Cookies</h3>
                <p>
                  These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. They do not directly store personal information but are based on uniquely identifying your browser and internet device.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>3. How We Use Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To authenticate users and prevent fraudulent use of user accounts</li>
                <li>To remember information about your preferences and personalize your experience</li>
                <li>To provide you with content relevant to your interests</li>
                <li>To analyze how our website is used so that we can improve it</li>
                <li>To help us advertise our services to you</li>
                <li>To measure the effectiveness of our marketing campaigns</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>4. Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service and deliver advertisements on and through the Service.
              </p>
              <p>
                These may include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Analytics</li>
                <li>Facebook Pixel</li>
                <li>Google AdSense</li>
                <li>HubSpot</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>5. Your Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner.
              </p>
              <p>
                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>6. How to Control Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener" className="text-deutscher-purple-light hover:underline">www.aboutcookies.org</a>.
              </p>
              <p>
                Find out how to manage cookies on popular browsers:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" className="text-deutscher-purple-light hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener" className="text-deutscher-purple-light hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/" target="_blank" rel="noopener" className="text-deutscher-purple-light hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/help/4027947/microsoft-edge-delete-cookies" target="_blank" rel="noopener" className="text-deutscher-purple-light hover:underline">Microsoft Edge</a></li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>7. Changes to This Cookie Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p>
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>8. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

export default CookiePolicy;