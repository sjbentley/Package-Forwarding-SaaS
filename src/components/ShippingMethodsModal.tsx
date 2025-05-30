
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ShippingMethodsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const shippingMethods = [
  {
    name: "DHL Express",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/DHL_Express_logo.svg/2560px-DHL_Express_logo.svg.png",
    description: "Fast & Reliable, purchasing damage/loss insurance recommended",
    maxSize: "Parcel 48 × 32 × 32 inches (120 × 80 × 80 cm)",
    tracking: "Yes",
    maxWeight: "155 lbs (70 kg)",
    dangerousGoodsFee: "$50 plus processing and shipping fees"
  },
  {
    name: "UPS Ground Residential",
    logo: "https://www.ups.com/assets/resources/webcontent/images/ups-logo.svg",
    description: "One of the most trusted and economical shipping methods in the USA.",
    maxSize: "Length + girth ≤ 130″ (or 165″ for large packages)",
    tracking: "Yes, UPS Quantum View Notify",
    maxWeight: "150 lbs (68 kg)",
    dangerousGoodsFee: "$37 plus processing and shipping fees",
    additionalFees: [
      "Packages > 96″ length: $100 DIM fee",
      "Packages > 50 lbs: $24 oversize fee"
    ]
  },
  {
    name: "UPS 2nd Day Air",
    logo: "https://www.ups.com/assets/resources/webcontent/images/ups-logo.svg",
    description: "Fast, reliable, and trackable. UPS 2nd Day Air delivers to every address in all 50 states and Puerto Rico.",
    maxSize: "Length + girth ≤ 130″ (or 165″ for large packages)",
    tracking: "Yes, UPS Quantum View Notify",
    maxWeight: "150 lbs (68 kg)",
    deliveryTime: "2 days"
  },
  {
    name: "UPS Worldwide Saver",
    logo: "https://www.ups.com/assets/resources/webcontent/images/ups-logo.svg",
    description: "Fast and Reliable. Get peace of mind with in-house customs clearance.",
    maxSize: "Length + girth ≤ 130″ (330 cm)",
    tracking: "Yes, UPS Quantum View Notify",
    maxWeight: "150 lbs (68 kg)",
    customsClearance: "Included"
  },
  {
    name: "UPS Next Day Air",
    logo: "https://www.ups.com/assets/resources/webcontent/images/ups-logo.svg",
    description: "Guaranteed delivery by 12:00 noon or 1:30 p.m. to most U.S. addresses.",
    maxSize: "Length + girth ≤ 130″ (330 cm)",
    tracking: "Yes, UPS Quantum View Notify",
    maxWeight: "150 lbs (68 kg)",
    deliveryTime: "Next business day"
  },
  {
    name: "UPS Next Day Air Saver",
    logo: "https://www.ups.com/assets/resources/webcontent/images/ups-logo.svg",
    description: "Guaranteed delivery by 3:00 or 4:30 p.m. to most U.S. addresses.",
    maxSize: "Length + girth ≤ 130″ (330 cm)",
    tracking: "Yes, UPS Quantum View Notify",
    maxWeight: "150 lbs (68 kg)",
    deliveryTime: "Next business day by end of day"
  },
  {
    name: "USPS Priority Mail",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/USPS_logo.svg/1200px-USPS_logo.svg.png",
    description: "Affordable and reliable shipping with delivery in 1-3 business days.",
    maxSize: "Combined length and girth ≤ 108 inches",
    tracking: "Yes",
    maxWeight: "70 lbs",
    deliveryTime: "1-3 business days"
  },
  {
    name: "USPS Priority Mail Express",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/USPS_logo.svg/1200px-USPS_logo.svg.png",
    description: "Fastest USPS shipping option with overnight delivery to most U.S. addresses.",
    maxSize: "Combined length and girth ≤ 108 inches",
    tracking: "Yes",
    maxWeight: "70 lbs",
    deliveryTime: "Overnight to 2-day delivery"
  },
  {
    name: "FedEx Ground",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/FedEx_ground_logo.svg/1200px-FedEx_ground_logo.svg.png",
    description: "Cost-effective delivery for packages up to 150 lbs.",
    maxSize: "Length + 2x width + 2x height ≤ 165 inches",
    tracking: "Yes",
    maxWeight: "150 lbs (68 kg)",
    deliveryTime: "1-5 business days within the continental U.S."
  },
  {
    name: "FedEx Express Saver",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/FedEx_ground_logo.svg/1200px-FedEx_ground_logo.svg.png",
    description: "Delivery in 3 business days by 4:30 p.m. to most U.S. addresses.",
    maxSize: "Length + 2x width + 2x height ≤ 165 inches",
    tracking: "Yes",
    maxWeight: "150 lbs (68 kg)",
    deliveryTime: "3 business days"
  },
  {
    name: "FedEx 2Day",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/FedEx_ground_logo.svg/1200px-FedEx_ground_logo.svg.png",
    description: "Delivery in 2 business days by 4:30 p.m. to most U.S. addresses.",
    maxSize: "Length + 2x width + 2x height ≤ 165 inches",
    tracking: "Yes",
    maxWeight: "150 lbs (68 kg)",
    deliveryTime: "2 business days"
  },
  {
    name: "FedEx Standard Overnight",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/FedEx_ground_logo.svg/1200px-FedEx_ground_logo.svg.png",
    description: "Next-business-day delivery by 3 p.m. to most U.S. addresses.",
    maxSize: "Length + 2x width + 2x height ≤ 165 inches",
    tracking: "Yes",
    maxWeight: "150 lbs (68 kg)",
    deliveryTime: "Next business day"
  },
  // New shipping methods from the image
  {
    name: "Airmail Economy",
    logo: "/lovable-uploads/09873cbb-b375-46af-9d1f-06fe69a2058c.png",
    description: "Affordable international air shipping option for small packages.",
    maxSize: "Combined length, width, and height ≤ 90 cm",
    tracking: "Limited",
    maxWeight: "4.4 lbs (2 kg)",
    deliveryTime: "10-15 business days"
  },
  {
    name: "Boxberry",
    logo: "/lovable-uploads/09873cbb-b375-46af-9d1f-06fe69a2058c.png",
    description: "Express delivery service with pickup points throughout Eastern Europe.",
    maxSize: "Combined length, width, and height ≤ 120 cm",
    tracking: "Yes",
    maxWeight: "33 lbs (15 kg)",
    deliveryTime: "7-14 business days"
  },
  {
    name: "Pony Express",
    logo: "/lovable-uploads/09873cbb-b375-46af-9d1f-06fe69a2058c.png",
    description: "Fast courier service for time-sensitive documents and parcels.",
    maxSize: "Combined length, width, and height ≤ 100 cm",
    tracking: "Yes, real-time updates",
    maxWeight: "22 lbs (10 kg)",
    deliveryTime: "3-5 business days"
  },
  {
    name: "Australia Post",
    logo: "/lovable-uploads/09873cbb-b375-46af-9d1f-06fe69a2058c.png",
    description: "Reliable delivery service to and from Australia and surrounding regions.",
    maxSize: "Length + girth ≤ 140 cm",
    tracking: "Yes",
    maxWeight: "44 lbs (20 kg)",
    deliveryTime: "7-12 business days"
  },
  {
    name: "Aramex",
    logo: "/lovable-uploads/09873cbb-b375-46af-9d1f-06fe69a2058c.png",
    description: "Global delivery service specializing in Middle East and North Africa regions.",
    maxSize: "Length + 2x width + 2x height ≤ 150 inches",
    tracking: "Yes, door-to-door tracking",
    maxWeight: "66 lbs (30 kg)",
    deliveryTime: "4-7 business days"
  },
  {
    name: "Sagawa",
    logo: "/lovable-uploads/09873cbb-b375-46af-9d1f-06fe69a2058c.png",
    description: "Premium Japanese courier service with excellent time-definite delivery.",
    maxSize: "Sum of length, width, and height ≤ 160 cm",
    tracking: "Yes",
    maxWeight: "55 lbs (25 kg)",
    deliveryTime: "3-7 business days"
  },
  {
    name: "Shipito Asia Direct",
    logo: "/lovable-uploads/09873cbb-b375-46af-9d1f-06fe69a2058c.png",
    description: "Specialized shipping service for packages from US to Asian countries.",
    maxSize: "Length + girth ≤ 130 inches",
    tracking: "Yes, detailed tracking information",
    maxWeight: "44 lbs (20 kg)",
    deliveryTime: "5-9 business days"
  }
];

const ShippingMethodsModal: React.FC<ShippingMethodsModalProps> = ({
  isOpen,
  onClose
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-[#0D0F12] border-white/10 text-white">
        <DialogHeader>
          <DialogTitle>Shipping Methods</DialogTitle>
          <DialogDescription className="text-gray-400">
            Select from our available shipping options.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-4">
            {shippingMethods.map((method, index) => {
              // Extract logo type from URL to display correctly
              const isLocalImage = method.logo.startsWith('/lovable-uploads');
              const logoKey = isLocalImage 
                ? method.name.toLowerCase().replace(/\s+/g, '-') 
                : method.name.toLowerCase().split(' ')[0];
              
              return (
                <Card key={index} className="bg-[#161A1F] border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-8 w-32 relative bg-white rounded-sm flex items-center justify-center p-1">
                        {isLocalImage ? (
                          // For local images from the uploaded file, display the specific logo section
                          <img 
                            src={method.logo} 
                            alt={`${method.name} logo`}
                            className="max-h-6 max-w-full object-contain"
                            loading="lazy"
                            style={{ 
                              clipPath: getClipPathForLogo(logoKey) 
                            }}
                            onError={(e) => {
                              const imgElement = e.target as HTMLImageElement;
                              const parentDiv = imgElement.parentElement;
                              if (parentDiv) {
                                imgElement.style.display = 'none';
                                const textNode = document.createElement('span');
                                textNode.textContent = method.name;
                                textNode.className = 'text-xs font-bold text-black';
                                parentDiv.appendChild(textNode);
                              }
                            }}
                          />
                        ) : (
                          // For external logos
                          <img 
                            src={method.logo} 
                            alt={`${method.name} logo`}
                            className="max-h-6 max-w-full object-contain"
                            loading="lazy"
                            onError={(e) => {
                              const imgElement = e.target as HTMLImageElement;
                              const parentDiv = imgElement.parentElement;
                              if (parentDiv) {
                                imgElement.style.display = 'none';
                                const textNode = document.createElement('span');
                                textNode.textContent = method.name;
                                textNode.className = 'text-xs font-bold text-black';
                                parentDiv.appendChild(textNode);
                              }
                            }}
                          />
                        )}
                      </div>
                      <span>{method.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-gray-400">{method.description}</div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="text-deutscher-purple-light">Max Size:</span>
                          <br />
                          {method.maxSize}
                        </div>
                        <div className="text-sm">
                          <span className="text-deutscher-purple-light">Tracking:</span>
                          <br />
                          {method.tracking}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="text-deutscher-purple-light">Max Weight:</span>
                          <br />
                          {method.maxWeight}
                        </div>
                        {method.deliveryTime && (
                          <div className="text-sm">
                            <span className="text-deutscher-purple-light">Delivery Time:</span>
                            <br />
                            {method.deliveryTime}
                          </div>
                        )}
                        {method.customsClearance && (
                          <div className="text-sm">
                            <span className="text-deutscher-purple-light">Customs Clearance:</span>
                            <br />
                            {method.customsClearance}
                          </div>
                        )}
                      </div>
                    </div>

                    {(method.dangerousGoodsFee || (method.additionalFees && method.additionalFees.length > 0)) && (
                      <div className="border-t border-white/10 pt-4 mt-4">
                        <div className="text-sm">
                          {method.dangerousGoodsFee && (
                            <div className="mb-2">
                              <span className="text-deutscher-purple-light">Dangerous Goods Fee:</span>
                              <br />
                              {method.dangerousGoodsFee}
                            </div>
                          )}
                          {method.additionalFees && method.additionalFees.length > 0 && (
                            <div>
                              <span className="text-deutscher-purple-light">Additional Fees:</span>
                              <ul className="list-disc list-inside mt-1">
                                {method.additionalFees.map((fee, idx) => (
                                  <li key={idx} className="text-gray-400">{fee}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

// Helper function to get the appropriate clip path for different logos
function getClipPathForLogo(logoKey: string): string {
  // Calculate percentages based on the image you uploaded
  // The image has 8 logos in 2 columns, so each logo takes about 12.5% vertically
  const clipPaths: Record<string, string> = {
    'airmail': 'inset(0% 50% 87.5% 0%)',
    'boxberry': 'inset(12.5% 50% 75% 0%)',
    'pony': 'inset(25% 50% 62.5% 0%)',
    'australia': 'inset(37.5% 50% 50% 0%)',
    'aramex': 'inset(50% 50% 37.5% 0%)',
    'sagawa': 'inset(62.5% 50% 25% 0%)',
    'shipito': 'inset(75% 50% 12.5% 0%)'
  };
  
  // Return the appropriate clip path or null if not found
  return clipPaths[logoKey] || '';
}

export default ShippingMethodsModal;
