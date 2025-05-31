
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from '@/hooks/useTranslation';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactPage: React.FC = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  const { toast } = useToast();
  const { t } = useTranslation();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', data);
    toast({
      title: t('contactFormSuccessTitle'),
      description: t('contactFormSuccessDesc'),
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 px-4 md:px-8 lg:px-16 pb-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <Link to="/" className="flex items-center text-deutscher-purple-light hover:text-deutscher-purple-light/80 transition-colors">
            <ArrowLeft size={16} />
            <span>{t('contactBackToHome')}</span>
          </Link>
          
          <h2 className="text-2xl font-bold text-white">{t('contactHeadline')}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-[#0D0F12] border border-white/10 text-white lg:col-span-2">
              <CardHeader>
                <CardTitle>{t('contactSendUsMessage')}</CardTitle>
                <CardDescription className="text-gray-400">{t('contactSendUsMessageDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">{t('contactName')}</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={t('contactNamePlaceholder')}  
                                className="bg-white/5 border-white/10 focus-visible:ring-deutscher-purple-light text-white" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">{t('contactEmail')}</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={t('contactEmailPlaceholder')} 
                                className="bg-white/5 border-white/10 focus-visible:ring-deutscher-purple-light text-white" 
                                type="email"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{t('contactSubject')}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('contactSubjectPlaceholder')} 
                              className="bg-white/5 border-white/10 focus-visible:ring-deutscher-purple-light text-white" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{t('contactMessage')}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={t('contactMessagePlaceholder')} 
                              className="bg-white/5 border-white/10 focus-visible:ring-deutscher-purple-light text-white min-h-[150px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white w-full md:w-auto"
                    >
                      {t('contactSendMessage')}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="bg-[#0D0F12] border border-white/10 text-white">
                <CardHeader>
                  <CardTitle>{t('contactInfoTitle')}</CardTitle>
                  <CardDescription className="text-gray-400">{t('contactInfoDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-deutscher-purple-light mt-0.5" />
                    <div>
                      <h3 className="font-medium">{t('contactEmailLabel')}</h3>
                      <a href="mailto:info@paksend.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                        paksend.de@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-deutscher-purple-light mt-0.5" />
                    <div>
                      <h3 className="font-medium">{t('contactPhoneLabel')}</h3>
                      <a href="tel:+4930123456789" className="text-sm text-gray-400 hover:text-white transition-colors">
                        {t('contactPhoneNumber')}
                      </a>
                      <p className="text-xs text-gray-500">{t('contactPhoneHours')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-deutscher-purple-light mt-0.5" />
                    <div>
                      <h3 className="font-medium">{t('contactLiveChatLabel')}</h3>
                      <p className="text-sm text-gray-400">{t('contactLiveChatDesc')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#0D0F12] border border-white/10 text-white">
                <CardHeader>
                  <CardTitle>{t('contactOfficeAddressTitle')}</CardTitle>
                  <CardDescription className="text-gray-400">{t('contactOfficeAddressDesc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <address className="not-italic text-gray-300">
                    {t('contactOfficeAddress')}
                  </address>
                  
                  <div className="mt-3">
                    <h3 className="font-medium">{t('contactBusinessHoursTitle')}</h3>
                    <p className="text-sm text-gray-400">{t('contactBusinessHoursWeek')}</p>
                    <p className="text-sm text-gray-400">{t('contactBusinessHoursWeekend')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>{t('contactFaqTitle')}</CardTitle>
              <CardDescription className="text-gray-400">{t('contactFaqDesc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-deutscher-purple-light mb-2">{t('contactFaqShippingTitle')}</h3>
                  <p className="text-sm text-gray-400">
                    {t('contactFaqShippingAnswer')}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-deutscher-purple-light mb-2">{t('contactFaqTrackingTitle')}</h3>
                  <p className="text-sm text-gray-400">
                    {t('contactFaqTrackingAnswer')}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-deutscher-purple-light mb-2">{t('contactFaqPaymentTitle')}</h3>
                  <p className="text-sm text-gray-400">
                    {t('contactFaqPaymentAnswer')}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-deutscher-purple-light mb-2">{t('contactFaqProhibitedTitle')}</h3>
                  <p className="text-sm text-gray-400">
                    {t('contactFaqProhibitedAnswer')}{' '} <Link to="/documentation" className="text-deutscher-purple hover:text-deutscher-purple-light transition-colors"></Link> 
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-400 mb-3">{t('contactFaqStillHaveQuestions')}</p>
                <Button asChild variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white">
                  <Link to="/faq">{t('contactFaqViewAll')}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <StoreFooter />
    </div>
  );
};

export default ContactPage;