import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Package,
  Send,
  Truck,
  MessageSquare,
  Bot,
  User
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";
import PackageDetailsModal from './PackageDetailsModal';
import CustomsDeclarationForm from './CustomsDeclarationForm';
import AdditionalServicesModal from './AdditionalServicesModal';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};


const MessagesSection = () => {
  const { t } = useTranslation(); 
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const tabParam = searchParams.get('tab');

  // Sample package details
const samplePackageDetails = {
  id: "PKG-A7X924",
  dateReceived: t('receivedDate'),
  from: t('senderA'),
  weight: "1.2 kg",
  dimensions: "30 × 25 × 15 cm",
  location: t('warehouseLocation'),
  trackingNumber: "AMZN-9876543210",
  storageLeft: t('daysOfStorageLeft'),
  dateArrived: t('receivedDate'),
  images: [
    "/placeholder.svg",
    "/placeholder.svg",
  ]
};

// Sample delivery details
const sampleDeliveryDetails = {
  id: "PKG-B2X735",
  dateReceived: t('receivedDate'),
  from: t('senderB'),
  weight: "3.5 kg",
  dimensions: "45 × 35 × 20 cm",
  location: t('deliveryLocationMessage'),
  trackingNumber: "DHL72619283",
  storageLeft: t('notApplicable'),
  dateArrived: t('receivedDate'),
  images: [
    "/placeholder.svg",
  ]
};

// Sample shipment in transit details
const sampleShipmentDetails = {
  id: "PKG-C3X846",
  name: t('consolidatedPackage'),
  source: t('multipleRetailers'),
  status: t('inTransitStatus'),
  date: t('shipmentDate'),
  tracking: "DHL83712937"
};
  
  // Set default tab based on URL parameter
  const [activeTab, setActiveTab] = useState<string>(tabParam === 'livechat' ? 'livechat' : 'inbox');
  
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      id: '1',
      content: t('aiGreeting'), 
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // State for modals
  const [isPackageDetailsOpen, setIsPackageDetailsOpen] = useState(false);
  const [isCustomsFormOpen, setIsCustomsFormOpen] = useState(false);
  const [isAdditionalServicesOpen, setIsAdditionalServicesOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState("");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);
  
  // Handle tab change and update URL
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const newParams = new URLSearchParams(location.search);
    newParams.set('tab', value);
    newParams.set('view', 'messages');
    navigate(`/dashboard?${newParams.toString()}`, { replace: true });
  };

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      // Add user message
      const userMsg: Message = {
        id: Date.now().toString(),
        content: userMessage,
        sender: 'user',
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, userMsg]);
      setUserMessage('');
      
      // Simulate AI typing
      setIsAiTyping(true);
      
      // Simulate AI response after a delay
      setTimeout(() => {
        const aiResponses = [
          "I can help you with tracking your package. Could you provide your tracking number?",
          "Your package should arrive within 3-5 business days from Germany.",
          "Yes, we do handle customs clearance for all international shipments.",
          "Our consolidation service allows you to combine multiple packages into one shipment to save on shipping costs.",
          "If you have any issues with your delivery, please let me know and I'll help resolve them immediately."
        ];
        
        const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
        
        const aiMsg: Message = {
          id: (Date.now() + 1).toString(),
          content: randomResponse,
          sender: 'ai',
          timestamp: new Date()
        };
        
        setChatMessages(prev => [...prev, aiMsg]);
        setIsAiTyping(false);
      }, 1000);
    } else {
      toast({
        title: "Empty Message",
        description: "Please enter a message before sending.",
        variant: "destructive",
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleViewPackageDetails = (packageId: string) => {
    setSelectedPackageId(packageId);
    setIsPackageDetailsOpen(true);
  };

  const handleOpenCustomsForm = () => {
    setIsPackageDetailsOpen(false);
    setIsCustomsFormOpen(true);
  };

  const handleOpenAdditionalServices = () => {
    setIsPackageDetailsOpen(false);
    setIsAdditionalServicesOpen(true);
  };

  const handleTrackPackage = () => {
    window.open(`https://www.dhl.com/en/express/tracking.html?AWB=DHL83712937`, '_blank');
  };

  const handleViewShipmentDetails = (packageId: string) => {
    setSelectedPackageId(packageId);
    setIsPackageDetailsOpen(true);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">{t('messages')}</h1>
      
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="mb-4 bg-white/5 text-white">
          <TabsTrigger value="inbox" className="data-[state=active]:bg-deutscher-purple data-[state=active]:text-white">
            {t('inbox')}
          </TabsTrigger>
          <TabsTrigger value="livechat" className="data-[state=active]:bg-deutscher-purple data-[state=active]:text-white">
            {t('liveChat')}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="inbox" className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="flex gap-3">
              <div className="mt-1">
                <Package className="h-5 w-5 text-deutscher-purple-light" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white">{t('packageArrivedWarehouse')}</h3>
                <p className="text-sm text-gray-400">{t('packageArrived')}</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs text-gray-500 flex-1">{t('time')}</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-xs border-white/10 hover:bg-deutscher-purple/20 hover:text-deutscher-purple-light"
                    onClick={() => handleViewPackageDetails("PKG-A7X924")}
                  >
                    {t('viewDetails')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="flex gap-3">
              <div className="mt-1">
                <Truck className="h-5 w-5 text-deutscher-purple-light" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white">{t('shipmentInTransit')}</h3>
                <p className="text-sm text-gray-400">{t('consolidatedPackageShipped')}</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs text-gray-500 flex-1">{t('time')}</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-xs border-white/10 hover:bg-deutscher-purple/20 hover:text-deutscher-purple-light"
                    onClick={handleTrackPackage}
                  >
                    {t('trackPackage')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="flex gap-3">
              <div className="mt-1">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white">{t('deliveryCompleted')}</h3>
                <p className="text-sm text-gray-400">{t('packageDelivered')}</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs text-gray-500 flex-1">{t('when')}</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-xs border-white/10 hover:bg-deutscher-purple/20 hover:text-deutscher-purple-light"
                    onClick={() => handleViewShipmentDetails("PKG-B2X735")}
                  >
                    {t('viewDetails')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="livechat">
          <Card className="bg-white/5 border border-white/10">
            <CardContent className="p-6">
              <div className="mb-4 flex items-start gap-3">
                <Bot className="h-5 w-5 text-deutscher-purple-light mt-1" />
                <div>
                  <h3 className="font-medium text-white mb-1">{t('aiShippingAssistant')}</h3>
                  <p className="text-sm text-gray-400">
                    {t('aiAssistantQuestions')}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="max-h-[350px] overflow-y-auto pr-2 space-y-4 mb-4">
                  {chatMessages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`flex gap-2 max-w-[80%] rounded-lg p-3
                        ${msg.sender === 'user' 
                          ? 'bg-deutscher-purple text-white' 
                          : 'bg-white/10 text-white'}`}
                      >
                        {msg.sender === 'ai' && <Bot className="h-5 w-5 text-deutscher-purple-light mt-1" />}
                        <div>
                          <p className="text-sm">{msg.content}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                        {msg.sender === 'user' && <User className="h-5 w-5 text-white mt-1" />}
                      </div>
                    </div>
                  ))}
                  {isAiTyping && (
                    <div className="flex gap-3 justify-start">
                      <div className="flex gap-2 bg-white/10 text-white rounded-lg p-3">
                        <Bot className="h-5 w-5 text-deutscher-purple-light mt-1" />
                        <p className="text-sm">{t('typing')}<span className="animate-pulse">...</span></p>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                
                <div className="flex gap-2">
                  <Textarea
                    placeholder={t('typeYourMessage')}
                    className="bg-white/5 border-white/10 resize-none text-white placeholder:text-gray-400"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  
                  <Button 
                    onClick={handleSendMessage} 
                    className="bg-deutscher-purple hover:bg-deutscher-purple/90 text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Package Details Modal */}
      <PackageDetailsModal 
        isOpen={isPackageDetailsOpen} 
        onClose={() => setIsPackageDetailsOpen(false)}
        packageDetails={selectedPackageId === "PKG-A7X924" ? samplePackageDetails : sampleDeliveryDetails}
        onOpenCustomsForm={handleOpenCustomsForm}
        onRequestAdditionalServices={handleOpenAdditionalServices}
      />

      {/* Customs Declaration Form */}
      <CustomsDeclarationForm 
        isOpen={isCustomsFormOpen} 
        onClose={() => setIsCustomsFormOpen(false)}
        packageId={selectedPackageId}
      />

      {/* Additional Services Modal */}
      <AdditionalServicesModal 
        isOpen={isAdditionalServicesOpen} 
        onClose={() => setIsAdditionalServicesOpen(false)}
        packageId={selectedPackageId}
      />
    </div>
  );
};

export default MessagesSection;
