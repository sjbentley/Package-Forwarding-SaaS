
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, MapPin, Globe, Award } from 'lucide-react';

const About: React.FC = () => {
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
            <h2 className="text-2xl font-bold text-white">About PakSend®</h2>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
              <CardDescription className="text-gray-400">Connecting German shoppers with the world of U.S. retail</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Founded in 2018, PakSend® was born from a simple observation: German consumers 
                were increasingly interested in U.S. products but faced significant barriers when 
                trying to purchase from American retailers. High international shipping costs, 
                complicated customs processes, and limited delivery options created frustration 
                for shoppers.
              </p>
              <p className="text-gray-300">
                Our founder, Max Mustermann, experienced these challenges firsthand when attempting 
                to purchase limited-edition sneakers from a U.S. retailer. After a complicated and 
                expensive shipping process, he knew there had to be a better way. PakSend® was 
                created to bridge this gap, offering German consumers a seamless, affordable way 
                to shop from thousands of U.S. retailers.
              </p>
              <p className="text-gray-300">
                Today, PakSend® has grown into a leading cross-border shipping solution, serving 
                tens of thousands of customers throughout Germany and facilitating millions of 
                euros in transatlantic commerce annually.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Globe className="h-6 w-6 text-deutscher-purple-light flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-deutscher-purple-light">Breaking Down Borders</h3>
                    <p className="text-gray-300 mt-2">
                      Our mission is to eliminate the barriers that separate consumers from the products they want, 
                      regardless of where those products are sold. We believe in a world where geography should 
                      never limit your shopping options.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Award className="h-6 w-6 text-deutscher-purple-light flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-deutscher-purple-light">A Seamless Global Marketplace</h3>
                    <p className="text-gray-300 mt-2">
                      We envision a future where shopping internationally is as simple as shopping locally. 
                      Through innovation and technology, we're working to create a truly global marketplace where 
                      customs, shipping, and logistics are handled invisibly in the background.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Leadership Team</CardTitle>
              <CardDescription className="text-gray-400">Meet the people behind PakSend®</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-deutscher-purple to-deutscher-purple-light mb-4"></div>
                  <h3 className="font-medium text-deutscher-purple-light">Max Mustermann</h3>
                  <p className="text-sm text-gray-400">Founder & CEO</p>
                  <p className="text-sm text-gray-300 mt-2">
                    Former logistics executive with 15+ years in international shipping.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-deutscher-purple to-deutscher-purple-light mb-4"></div>
                  <h3 className="font-medium text-deutscher-purple-light">Erika Musterfrau</h3>
                  <p className="text-sm text-gray-400">COO</p>
                  <p className="text-sm text-gray-300 mt-2">
                    Expert in supply chain optimization and warehouse management.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-deutscher-purple to-deutscher-purple-light mb-4"></div>
                  <h3 className="font-medium text-deutscher-purple-light">Klaus Schmidt</h3>
                  <p className="text-sm text-gray-400">CTO</p>
                  <p className="text-sm text-gray-300 mt-2">
                    Tech visionary specializing in logistics software and AI integration.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>Our Locations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <MapPin className="h-6 w-6 text-deutscher-purple-light flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-deutscher-purple-light">German Headquarters</h3>
                      <p className="text-gray-300 mt-1">
                        Musterstraße 123<br />
                        10115 Berlin<br />
                        Germany
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <MapPin className="h-6 w-6 text-deutscher-purple-light flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-deutscher-purple-light">U.S. Warehouse</h3>
                      <p className="text-gray-300 mt-1">
                        123 Shipping Lane<br />
                        Portland, OR 97202<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>Company Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>Founded in 2018</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>50+ employees across Germany and the U.S.</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>20,000+ active customers</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>500,000+ packages shipped annually</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>Access to 50,000+ U.S. online stores</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Join Our Team</CardTitle>
              <CardDescription className="text-gray-400">We're growing and looking for talented people</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 items-start">
                <Users className="h-6 w-6 text-deutscher-purple-light flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">
                    At PakSend®, we're always looking for passionate individuals who share our vision of breaking down global commerce barriers. 
                    We offer a dynamic, international work environment with opportunities for professional growth and development.
                  </p>
                  <Link to="/careers" className="mt-4 inline-block px-6 py-2 bg-deutscher-purple hover:bg-deutscher-purple-light transition-colors rounded-md text-white">
                    View Open Positions
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <StoreFooter />
    </div>
  );
};

export default About;