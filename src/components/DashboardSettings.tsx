
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import AvatarChangeModal from './AvatarChangeModal';
import { useTranslation } from '@/hooks/useTranslation';

const DashboardSettings = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [avatarSrc, setAvatarSrc] = useState("https://github.com/shadcn.png");
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  
  const handleChangePlan = () => {
    // Navigate to the homepage pricing section
    navigate('/#pricing-section');
  };
  
  const handleAvatarChange = (newAvatarUrl: string) => {
    setAvatarSrc(newAvatarUrl);
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-white">{t('accountSettings')}</h1>
      <p className="text-gray-300">{t('manageAccountPreferences')}</p>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-4 mb-6 bg-white/5">
          <TabsTrigger value="profile">{t('profile')}</TabsTrigger>
          <TabsTrigger value="notifications">{t('notifications')}</TabsTrigger>
          <TabsTrigger value="shipping">{t('shipping')}</TabsTrigger>
          <TabsTrigger value="billing">{t('billing')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6">
          <Card className="bg-[#0D0F12] border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('personalInformation')}</CardTitle>
              <CardDescription className="text-gray-400">{t('updatePersonalDetails')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={avatarSrc} alt="User" />
                  <AvatarFallback className="bg-deutscher-purple text-white text-lg">JB</AvatarFallback>
                </Avatar>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    variant="outline" 
                    className="border-white/10 text-white hover:bg-white/5"
                    onClick={() => setIsAvatarModalOpen(true)}
                  >
                    {t('changeAvatar')}
                  </Button>
                  <Button variant="outline" className="border-white/10 text-red-400 hover:bg-white/5 hover:text-red-500">
                    {t('remove')}
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">{t('firstName')}</Label>
                  <Input 
                    id="firstName" 
                    defaultValue="Jahi" 
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-deutscher-purple"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">{t('lastName')}</Label>
                  <Input 
                    id="lastName" 
                    defaultValue="Bentley" 
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-deutscher-purple"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">{t('emailAddress')}</Label>
                  <Input 
                    id="email" 
                    type="email"
                    defaultValue="sirjahibentley@gmail.com" 
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-deutscher-purple"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">{t('phoneNumber')}</Label>
                  <Input 
                    id="phone"
                    defaultValue="+49 160 927 90887" 
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-deutscher-purple"
                  />
                </div>
              </div>
              
              <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white">
                {t('saveChanges')}
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('password')}</CardTitle>
              <CardDescription className="text-gray-400">{t('updatePassword')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="currentPassword" className="text-white">{t('currentPassword')}</Label>
                <Input 
                  id="currentPassword" 
                  type="password"
                  className="bg-white/5 border-white/10 text-white focus-visible:ring-deutscher-purple"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-white">{t('newPassword')}</Label>
                  <Input 
                    id="newPassword" 
                    type="password"
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-deutscher-purple"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white">{t('confirmNewPassword')}</Label>
                  <Input 
                    id="confirmPassword"
                    type="password"
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-deutscher-purple"
                  />
                </div>
              </div>
              
              <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white">
                {t('updatePassword')}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <Card className="bg-[#0D0F12] border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('notificationPreferences')}</CardTitle>
              <CardDescription className="text-gray-400">{t('manageNotifications')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <Label className="text-white">{t('packageArrivals')}</Label>
                    <p className="text-sm text-gray-400">{t('packageArrivalsDesc')}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Switch id="packageEmail" defaultChecked />
                      <Label htmlFor="packageEmail" className="text-gray-300">{t('email')}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="packageSMS" />
                      <Label htmlFor="packageSMS" className="text-gray-300">{t('sms')}</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <Label className="text-white">{t('shippingUpdates')}</Label>
                    <p className="text-sm text-gray-400">{t('shippingUpdatesDesc')}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Switch id="shippingEmail" defaultChecked />
                      <Label htmlFor="shippingEmail" className="text-gray-300">{t('email')}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="shippingSMS" defaultChecked />
                      <Label htmlFor="shippingSMS" className="text-gray-300">{t('sms')}</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <Label className="text-white">{t('deliveryConfirmation')}</Label>
                    <p className="text-sm text-gray-400">{t('deliveryConfirmationDesc')}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Switch id="deliveryEmail" defaultChecked />
                      <Label htmlFor="deliveryEmail" className="text-gray-300">{t('email')}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="deliverySMS" defaultChecked />
                      <Label htmlFor="deliverySMS" className="text-gray-300">{t('sms')}</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <Label className="text-white">{t('billingReceipts')}</Label>
                    <p className="text-sm text-gray-400">{t('billingReceiptsDesc')}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Switch id="billingEmail" defaultChecked />
                      <Label htmlFor="billingEmail" className="text-gray-300">{t('email')}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="billingSMS" />
                      <Label htmlFor="billingSMS" className="text-gray-300">{t('sms')}</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <Label className="text-white">{t('marketingPromotions')}</Label>
                    <p className="text-sm text-gray-400">{t('marketingPromotionsDesc')}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Switch id="marketingEmail" />
                      <Label htmlFor="marketingEmail" className="text-gray-300">{t('email')}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="marketingSMS" />
                      <Label htmlFor="marketingSMS" className="text-gray-300">{t('sms')}</Label>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white">
                {t('savePreferences')}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="shipping" className="space-y-6">
          <Card className="bg-[#0D0F12] border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('defaultShippingAddress')}</CardTitle>
              <CardDescription className="text-gray-400">{t('manageShippingAddress')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="streetAddress" className="text-white">{t('streetAddress')}</Label>
                  <Input 
                    id="streetAddress" 
                    defaultValue="Berliner Straße 42" 
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-deutscher-purple"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aptUnit" className="text-white">{t('apartmentUnit')}</Label>
                  <Input 
                    id="aptUnit" 
                    defaultValue="3B" 
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-deutscher-purple"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-white">{t('city')}</Label>
                  <Input 
                    id="city" 
                    defaultValue="Berlin" 
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-deutscher-purple"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postalCode" className="text-white">{t('postalCode')}</Label>
                  <Input 
                    id="postalCode" 
                    defaultValue="10115" 
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-deutscher-purple"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-white">{t('country')}</Label>
                  <Input 
                    id="country" 
                    defaultValue="Germany" 
                    disabled
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-deutscher-purple"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="specialInstructions" className="text-white">{t('deliveryInstructions')}</Label>
                <Input 
                  id="specialInstructions" 
                  defaultValue="Leave with the doorman if no answer"
                  className="bg-white/5 border-white/10 text-white focus-visible:ring-deutscher-purple"
                />
              </div>
              
              <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white">
                {t('updateAddress')}
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('shippingPreferences')}</CardTitle>
              <CardDescription className="text-gray-400">{t('customizeShippingOptions')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">{t('automaticPackageConsolidation')}</Label>
                    <p className="text-sm text-gray-400">{t('automaticPackageConsolidationDesc')}</p>
                  </div>
                  <Switch id="consolidation" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">{t('aiShippingOptimization')}</Label>
                    <p className="text-sm text-gray-400">{t('aiShippingOptimizationDesc')}</p>
                  </div>
                  <Switch id="aiOptimization" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">{t('packageInsurance')}</Label>
                    <p className="text-sm text-gray-400">{t('packageInsuranceDesc')}</p>
                  </div>
                  <Switch id="insurance" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">{t('signatureRequired')}</Label>
                    <p className="text-sm text-gray-400">{t('signatureRequiredDesc')}</p>
                  </div>
                  <Switch id="signature" defaultChecked />
                </div>
              </div>
              
              <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white">
                {t('savePreferences')}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing" className="space-y-6">
          <Card className="bg-[#0D0F12] border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('currentPlan')}</CardTitle>
              <CardDescription className="text-gray-400">{t('yourSubscriptionDetails')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-lg bg-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="font-medium text-white">{t('premiumPlan')}</h3>
                  <p className="text-sm text-gray-400">€19.99/month • Renews on May 15, 2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    className="border-white/10 text-white hover:bg-white/5"
                    onClick={handleChangePlan}
                  >
                    {t('changePlan')}
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-white/5">
                  <h3 className="text-lg font-medium text-white mb-2">{t('planFeatures')}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-deutscher-purple-light" />
                      {t('virtualUSAddress')}
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-deutscher-purple-light" />
                      {t('storage60Days')}
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-deutscher-purple-light" />
                      {t('advancedConsolidation')}
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-deutscher-purple-light" />
                      {t('aiPackageOptimization')}
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-white/5">
                  <h3 className="text-lg font-medium text-white mb-2">{t('usageThisMonth')}</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{t('packagesProcessed')}</span>
                        <span className="text-white">12 / Unlimited</span>
                      </div>
                      <Progress value={60} className="h-2 bg-white/10" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{t('storageUsed')}</span>
                        <span className="text-white">32 / 60 days</span>
                      </div>
                      <Progress value={53} className="h-2 bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('paymentMethod')}</CardTitle>
              <CardDescription className="text-gray-400">{t('managePaymentDetails')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-lg bg-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded">
                    <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="20" rx="2" fill="white"/>
                      <path d="M19.6 12.8H22.4V7.2H19.6V12.8Z" fill="#FF5F00"/>
                      <path d="M19.84 10C19.8399 9.4747 19.9547 8.95548 20.1766 8.47573C20.3984 7.99598 20.7219 7.56827 21.1245 7.22432C21.527 6.88037 22.0981 6.63264 22.6235 6.49901C23.1489 6.36538 23.7073 6.35171 24.2387 6.46L24.8 6.56V13.44L24.2387 13.54C23.7073 13.6483 23.1489 13.6346 22.6235 13.501C22.0981 13.3674 21.527 13.1196 21.1245 12.7757C20.7219 12.4317 20.3984 12.004 20.1766 11.5243C19.9547 11.0445 19.8399 10.5253 19.84 10Z" fill="#FF5F00"/>
                      <path d="M20 10C20 8.4 21.12 7.04 22.64 6.56C22.0438 6.19159 21.3663 5.9854 20.6678 5.96217C19.9692 5.93895 19.2789 6.09961 18.66 6.42913C18.0412 6.75866 17.5179 7.2434 17.1466 7.8342C16.7752 8.425 16.5709 9.10476 16.5588 9.80335C16.5466 10.5019 16.727 11.1885 17.0775 11.7923C17.4281 12.3961 17.933 12.9001 18.5388 13.2531C19.1446 13.6061 19.8281 13.7931 20.5267 13.7972C21.2253 13.8012 21.9113 13.622 22.5213 13.276C22.0066 13.0223 21.5727 12.633 21.2659 12.1521C20.9591 11.6713 20.7905 11.1162 20.78 10.548L20 10Z" fill="#EB001B"/>
                      <path d="M29.22 10C29.2201 10.7018 29.0413 11.3906 28.7012 12.0005C28.3611 12.6104 27.8719 13.1194 27.281 13.4762C26.6901 13.8329 26.0195 14.0249 25.3359 14.0325C24.6523 14.0402 23.9777 13.863 23.3787 13.5195C23.8934 13.2658 24.3272 12.8766 24.6341 12.3957C24.9409 11.9149 25.1095 11.3597 25.12 10.7915C25.1095 10.2233 24.9409 9.66808 24.6341 9.18726C24.3272 8.70645 23.8934 8.31721 23.3787 8.0635C23.9777 7.71996 24.6523 7.54281 25.3359 7.55047C26.0195 7.55813 26.6901 7.75013 27.281 8.10685C27.8719 8.46357 28.3611 8.97258 28.7012 9.58249C29.0413 10.1924 29.2201 10.8812 29.22 11.583V10Z" fill="#F79E1B"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Mastercard ending in 4578</h3>
                    <p className="text-xs text-gray-400">Expires 09/2028</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                    {t('edit')}
                  </Button>
                  <Button variant="outline" className="border-white/10 text-red-400 hover:bg-white/5 hover:text-red-500">
                    {t('remove')}
                  </Button>
                </div>
              </div>
              
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                + {t('addNewPaymentMethod')}
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0D0F12] border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('billingHistory')}</CardTitle>
              <CardDescription className="text-gray-400">{t('yourRecentTransactions')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-lg transition-colors">
                  <div>
                    <p className="font-medium text-white">{t('premiumPlan')} - Monthly</p>
                    <p className="text-sm text-gray-400">Apr 15, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white">€19.99</p>
                    <p className="text-xs text-green-400">{t('paid')}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-lg transition-colors">
                  <div>
                    <p className="font-medium text-white">{t('premiumPlan')} - Monthly</p>
                    <p className="text-sm text-gray-400">Mar 15, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white">€19.99</p>
                    <p className="text-xs text-green-400">{t('paid')}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-lg transition-colors">
                  <div>
                    <p className="font-medium text-white">{t('premiumPlan')} - Monthly</p>
                    <p className="text-sm text-gray-400">Feb 15, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white">€19.99</p>
                    <p className="text-xs text-green-400">{t('paid')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <AvatarChangeModal 
        isOpen={isAvatarModalOpen}
        onClose={() => setIsAvatarModalOpen(false)}
        currentAvatar={avatarSrc}
        onAvatarChange={handleAvatarChange}
      />
    </div>
  );
};

export default DashboardSettings;
