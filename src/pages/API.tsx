
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, FileCode, Code2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from '@/hooks/use-mobile';

const APIPage: React.FC = () => {
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
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">API Documentation</h2>
            <p className="text-sm sm:text-base text-gray-400">Version 2.1.0 | Last updated: May 12, 2025</p>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Getting Started with the PakSend® API</CardTitle>
              <CardDescription className="text-gray-400 text-sm sm:text-base">Everything you need to start integrating with our services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm sm:text-base">
                The PakSend® API allows you to programmatically access our shipping services, track packages, 
                manage addresses, and more. This documentation will guide you through the process of 
                integrating with our platform.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4 mt-4">
                <Link to="/api/authentication" className="px-3 sm:px-4 py-2 bg-white/5 hover:bg-white/10 rounded-md transition-colors text-xs sm:text-sm flex items-center gap-2">
                  <Code2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  Authentication
                </Link>
                <Link to="/api/rate-limits" className="px-3 sm:px-4 py-2 bg-white/5 hover:bg-white/10 rounded-md transition-colors text-xs sm:text-sm flex items-center gap-2">
                  <FileCode className="h-3 w-3 sm:h-4 sm:w-4" />
                  Rate Limits
                </Link>
                <Link to="/api/sdks" className="px-3 sm:px-4 py-2 bg-white/5 hover:bg-white/10 rounded-md transition-colors text-xs sm:text-sm flex items-center gap-2">
                  <Code className="h-3 w-3 sm:h-4 sm:w-4" />
                  SDKs & Libraries
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="rest" className="w-full">
            <TabsList className="bg-[#0D0F12] border border-white/10 w-full overflow-x-auto flex-wrap">
              <TabsTrigger value="rest" className="data-[state=active]:bg-deutscher-purple-light/20 text-white flex-1">
                REST API
              </TabsTrigger>
              <TabsTrigger value="graphql" className="data-[state=active]:bg-deutscher-purple-light/20 text-white flex-1">
                GraphQL API
              </TabsTrigger>
              <TabsTrigger value="webhooks" className="data-[state=active]:bg-deutscher-purple-light/20 text-white flex-1">
                Webhooks
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="rest">
              <Card className="bg-[#0D0F12] border border-white/10 text-white">
                <CardHeader>
                  <CardTitle>REST API Reference</CardTitle>
                  <CardDescription className="text-gray-400">Full documentation for our RESTful API endpoints</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 border border-white/10 rounded-md">
                      <h3 className="font-medium text-deutscher-purple-light">Shipments</h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">Create, retrieve, update, and manage shipment information</p>
                      <Link to="/api/rest/shipments" className="mt-3 inline-block text-deutscher-purple hover:text-deutscher-purple-light transition-colors text-xs sm:text-sm">
                        View endpoints →
                      </Link>
                    </div>
                    
                    <div className="p-4 border border-white/10 rounded-md">
                      <h3 className="font-medium text-deutscher-purple-light">Tracking</h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">Track packages and retrieve status updates</p>
                      <Link to="/api/rest/tracking" className="mt-3 inline-block text-deutscher-purple hover:text-deutscher-purple-light transition-colors text-xs sm:text-sm">
                        View endpoints →
                      </Link>
                    </div>
                    
                    <div className="p-4 border border-white/10 rounded-md">
                      <h3 className="font-medium text-deutscher-purple-light">Addresses</h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">Manage shipping addresses and virtual address information</p>
                      <Link to="/api/rest/addresses" className="mt-3 inline-block text-deutscher-purple hover:text-deutscher-purple-light transition-colors text-xs sm:text-sm">
                        View endpoints →
                      </Link>
                    </div>
                    
                    <div className="p-4 border border-white/10 rounded-md">
                      <h3 className="font-medium text-deutscher-purple-light">Rates & Quotes</h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">Calculate shipping rates and get quotes</p>
                      <Link to="/api/rest/rates" className="mt-3 inline-block text-deutscher-purple hover:text-deutscher-purple-light transition-colors text-xs sm:text-sm">
                        View endpoints →
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 p-2 sm:p-4 rounded-md font-mono text-xs sm:text-sm overflow-x-auto">
                    <pre className="text-green-400 overflow-x-auto whitespace-pre-wrap sm:whitespace-pre">
                      # Example: Get shipment information<br />
                      <span className="text-gray-400">GET /api/v2/shipments/:id</span><br /><br />
                      <span className="text-gray-400">Response:</span><br />
                      <span>{`{
  "id": "shp_12345678",
  "status": "in_transit",
  "tracking_number": "TRK123456789DE",
  "created_at": "2023-05-10T14:30:00Z",
  "updated_at": "2023-05-12T09:15:00Z",
  "estimated_delivery": "2023-05-15T00:00:00Z",
  "from_address": {
    "id": "adr_12345",
    "name": "US Warehouse",
    "street": "123 Shipping Ln",
    "city": "Portland",
    "state": "OR",
    "zip": "97202",
    "country": "US"
  },
  "to_address": {
    "id": "adr_67890",
    "name": "Max Mustermann",
    "street": "Musterstraße 123",
    "city": "Berlin",
    "zip": "10115",
    "country": "DE"
  },
  "packages": [
    {
      "weight": 1.5,
      "weight_unit": "kg",
      "dimensions": {
        "length": 30,
        "width": 20,
        "height": 15,
        "unit": "cm"
      }
    }
  ]
}`}</span>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="graphql">
              <Card className="bg-[#0D0F12] border border-white/10 text-white">
                <CardHeader>
                  <CardTitle>GraphQL API Reference</CardTitle>
                  <CardDescription className="text-gray-400">Documentation for our GraphQL API</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 text-sm sm:text-base">
                    Our GraphQL API provides a flexible way to request exactly the data you need in a single request. 
                    Below are some examples of common queries and mutations.
                  </p>
                  
                  <div className="bg-black/30 p-2 sm:p-4 rounded-md font-mono text-xs sm:text-sm overflow-x-auto">
                    <pre className="text-blue-400 overflow-x-auto whitespace-pre-wrap sm:whitespace-pre">
                      # Query shipments with specific fields<br />
                      <span>{`query GetShipments {
  shipments(limit: 5, status: "in_transit") {
    id
    tracking_number
    status
    estimated_delivery
    to_address {
      name
      city
      country
    }
    packages {
      weight
      weight_unit
      dimensions {
        length
        width
        height
        unit
      }
    }
  }
}`}</span>
                    </pre>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 border border-white/10 rounded-md">
                      <h3 className="font-medium text-deutscher-purple-light">Schema Reference</h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">Explore our GraphQL schema types and fields</p>
                      <Link to="/api/graphql/schema" className="mt-3 inline-block text-deutscher-purple hover:text-deutscher-purple-light transition-colors text-xs sm:text-sm">
                        View schema →
                      </Link>
                    </div>
                    
                    <div className="p-4 border border-white/10 rounded-md">
                      <h3 className="font-medium text-deutscher-purple-light">Mutations</h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">Create and modify data with GraphQL mutations</p>
                      <Link to="/api/graphql/mutations" className="mt-3 inline-block text-deutscher-purple hover:text-deutscher-purple-light transition-colors text-xs sm:text-sm">
                        View mutations →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="webhooks">
              <Card className="bg-[#0D0F12] border border-white/10 text-white">
                <CardHeader>
                  <CardTitle>Webhooks</CardTitle>
                  <CardDescription className="text-gray-400">Real-time event notifications for your application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 text-sm sm:text-base">
                    PakSend® webhooks allow your application to receive real-time notifications when events occur in our system.
                    Set up webhooks to get notified about shipment status changes, tracking updates, and more.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="p-4 border border-white/10 rounded-md">
                      <h3 className="font-medium text-deutscher-purple-light">Available Events</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-3">
                        <div className="bg-white/5 p-2 rounded text-xs sm:text-sm">shipment.created</div>
                        <div className="bg-white/5 p-2 rounded text-xs sm:text-sm">shipment.updated</div>
                        <div className="bg-white/5 p-2 rounded text-xs sm:text-sm">shipment.delivered</div>
                        <div className="bg-white/5 p-2 rounded text-xs sm:text-sm">package.received</div>
                        <div className="bg-white/5 p-2 rounded text-xs sm:text-sm">tracking.updated</div>
                        <div className="bg-white/5 p-2 rounded text-xs sm:text-sm">customs.cleared</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 p-2 sm:p-4 rounded-md font-mono text-xs sm:text-sm overflow-x-auto mt-4">
                    <pre className="text-purple-400 overflow-x-auto whitespace-pre-wrap sm:whitespace-pre">
                      <span className="text-gray-400"># Example webhook payload for shipment.updated event</span><br />
                      <span>{`{
  "event": "shipment.updated",
  "created_at": "2023-05-12T09:15:00Z",
  "data": {
    "shipment_id": "shp_12345678",
    "tracking_number": "TRK123456789DE",
    "previous_status": "processing",
    "current_status": "in_transit",
    "location": {
      "city": "Frankfurt",
      "country": "DE",
      "facility": "International Sort Center"
    },
    "timestamp": "2023-05-12T09:10:00Z",
    "estimated_delivery": "2023-05-15T00:00:00Z"
  }
}`}</span>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>API Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 border border-white/10 rounded-md">
                  <h3 className="font-medium text-deutscher-purple-light">Developer Forum</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Join our community of developers</p>
                  <a href="https://developers.paksend.com/forum" className="mt-3 inline-block text-deutscher-purple hover:text-deutscher-purple-light transition-colors text-xs sm:text-sm">
                    Visit forum →
                  </a>
                </div>
                
                <div className="p-4 border border-white/10 rounded-md">
                  <h3 className="font-medium text-deutscher-purple-light">API Status</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Check our API service status</p>
                  <a href="https://status.paksend.com" className="mt-3 inline-block text-deutscher-purple hover:text-deutscher-purple-light transition-colors text-xs sm:text-sm">
                    View status →
                  </a>
                </div>
                
                <div className="p-4 border border-white/10 rounded-md">
                  <h3 className="font-medium text-deutscher-purple-light">API Support</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Get help with API integration</p>
                  <a href="mailto:api@paksend.com" className="mt-3 inline-block text-deutscher-purple hover:text-deutscher-purple-light transition-colors text-xs sm:text-sm">
                    api@paksend.com
                  </a>
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

export default APIPage;