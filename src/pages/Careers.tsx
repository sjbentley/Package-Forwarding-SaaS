
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Briefcase, Users, Award } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const jobOpenings = [
  {
    id: 1,
    title: "Logistics Operations Manager",
    location: "Berlin, Germany",
    department: "Operations",
    type: "Full-time",
    description: "Lead our warehouse operations team in Berlin, overseeing package processing, inventory management, and logistics coordination."
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Remote (Europe)",
    department: "Engineering",
    type: "Full-time",
    description: "Create responsive, user-friendly interfaces for our customer portal and internal tools using React, TypeScript, and modern web technologies."
  },
  {
    id: 3,
    title: "Customer Success Specialist",
    location: "Berlin, Germany",
    department: "Customer Support",
    type: "Full-time",
    description: "Provide exceptional support to our customers, helping them navigate our platform and resolve shipping-related issues."
  },
  {
    id: 4,
    title: "Warehouse Associate",
    location: "Portland, OR, USA",
    department: "Operations",
    type: "Full-time",
    description: "Process incoming and outgoing packages at our U.S. warehouse, ensuring accurate scanning, sorting, and preparation for international shipping."
  },
  {
    id: 5,
    title: "Digital Marketing Specialist",
    location: "Berlin, Germany",
    department: "Marketing",
    type: "Full-time",
    description: "Drive our digital marketing efforts, including social media management, email campaigns, and content creation to reach German shoppers."
  }
];

const Careers: React.FC = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20 sm:pt-24 px-4 md:px-8 lg:px-16 pb-12 max-w-5xl mx-auto w-full">
        <div className="space-y-6">
          <Link to="/" className="flex items-center text-deutscher-purple-light hover:text-deutscher-purple-light/80 transition-colors">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Careers at PakSend®</h2>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Join Our Team</CardTitle>
              <CardDescription className="text-gray-400">Help us reshape cross-border e-commerce</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm sm:text-base">
                At PakSend®, we're building the future of international shopping. Our mission is to make 
                cross-border e-commerce as seamless as local shopping, and we need passionate people to 
                help us get there. We offer a collaborative, innovative work environment where your ideas 
                matter and your growth is a priority.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 border border-white/10 rounded-md">
                  <div className="flex gap-3 items-start">
                    <Users className="h-5 w-5 text-deutscher-purple-light flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-deutscher-purple-light">Diverse & Inclusive</h3>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1">
                        We celebrate differences and create an environment where everyone belongs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-white/10 rounded-md">
                  <div className="flex gap-3 items-start">
                    <Award className="h-5 w-5 text-deutscher-purple-light flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-deutscher-purple-light">Growth Focused</h3>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1">
                        We invest in your professional development with learning opportunities.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-white/10 rounded-md">
                  <div className="flex gap-3 items-start">
                    <Briefcase className="h-5 w-5 text-deutscher-purple-light flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-deutscher-purple-light">Work-Life Balance</h3>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1">
                        We offer flexible schedules and remote work options when possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Open Positions</CardTitle>
              <CardDescription className="text-gray-400">Find your next career opportunity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button className="px-2 sm:px-3 py-1.5 bg-deutscher-purple text-white rounded-md text-xs sm:text-sm">
                  All Departments
                </button>
                <button className="px-2 sm:px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-md text-xs sm:text-sm transition-colors">
                  Engineering
                </button>
                <button className="px-2 sm:px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-md text-xs sm:text-sm transition-colors">
                  Operations
                </button>
                <button className="px-2 sm:px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-md text-xs sm:text-sm transition-colors">
                  Marketing
                </button>
                <button className="px-2 sm:px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-md text-xs sm:text-sm transition-colors">
                  Support
                </button>
              </div>
              
              <div className="space-y-4">
                {jobOpenings.map((job) => (
                  <Card key={job.id} className="bg-[#181B20] border border-white/5">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                        <div>
                          <CardTitle className="text-base sm:text-lg">{job.title}</CardTitle>
                          <div className="flex flex-wrap items-center gap-2 text-gray-400 mt-1 text-xs sm:text-sm">
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {job.location}
                            </span>
                            <span className="hidden xs:inline">•</span>
                            <span>{job.department}</span>
                            <span className="hidden xs:inline">•</span>
                            <span>{job.type}</span>
                          </div>
                        </div>
                        <Link 
                          to={`/careers/${job.id}`}
                          className="bg-deutscher-purple hover:bg-deutscher-purple-light px-3 sm:px-4 py-2 rounded-md text-white text-xs sm:text-sm transition-colors w-full sm:w-auto text-center"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-300 text-xs sm:text-sm">
                        {job.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300 text-xs sm:text-sm">
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>Competitive salary and equity options</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>Comprehensive health, dental, and vision insurance</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>Generous paid time off and flexible working hours</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>Remote work options and modern office spaces</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>Professional development budget</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="inline-block w-2 h-2 bg-deutscher-purple-light rounded-full"></span>
                    <span>Employee shipping discount program</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>Our Hiring Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-deutscher-purple flex items-center justify-center text-white text-xs sm:text-sm">1</div>
                    <div>
                      <h3 className="font-medium text-white text-sm sm:text-base">Application Review</h3>
                      <p className="text-xs sm:text-sm text-gray-300">We review your resume and cover letter</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-deutscher-purple flex items-center justify-center text-white text-xs sm:text-sm">2</div>
                    <div>
                      <h3 className="font-medium text-white text-sm sm:text-base">Initial Interview</h3>
                      <p className="text-xs sm:text-sm text-gray-300">Video call with the hiring manager</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-deutscher-purple flex items-center justify-center text-white text-xs sm:text-sm">3</div>
                    <div>
                      <h3 className="font-medium text-white text-sm sm:text-base">Skills Assessment</h3>
                      <p className="text-xs sm:text-sm text-gray-300">Role-specific task or technical interview</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-deutscher-purple flex items-center justify-center text-white text-xs sm:text-sm">4</div>
                    <div>
                      <h3 className="font-medium text-white text-sm sm:text-base">Team Interview</h3>
                      <p className="text-xs sm:text-sm text-gray-300">Meet your potential colleagues</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-deutscher-purple flex items-center justify-center text-white text-xs sm:text-sm">5</div>
                    <div>
                      <h3 className="font-medium text-white text-sm sm:text-base">Offer & Onboarding</h3>
                      <p className="text-xs sm:text-sm text-gray-300">Welcome to the team!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Can't Find the Right Role?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-xs sm:text-sm">
                We're always on the lookout for talented individuals who are passionate about our mission. 
                If you don't see a role that fits your skills but think you'd be a great addition to our team, 
                send us your resume and tell us why you want to join PakSend®.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a 
                  href="mailto:careers@paksend.com" 
                  className="inline-block px-4 sm:px-6 py-2 bg-deutscher-purple hover:bg-deutscher-purple-light transition-colors rounded-md text-white text-center text-sm"
                >
                  Contact Our Recruiting Team
                </a>
                <Link 
                  to="/about" 
                  className="inline-block px-4 sm:px-6 py-2 bg-white/5 hover:bg-white/10 transition-colors rounded-md text-white text-center text-sm"
                >
                  Learn More About Us
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <StoreFooter />
    </div>
  );
};

export default Careers;