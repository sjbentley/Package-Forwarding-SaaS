
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
      title: "Message sent",
      description: "We've received your message and will be in touch soon.",
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
            <span>Back to Home</span>
          </Link>
          
          <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-[#0D0F12] border border-white/10 text-white lg:col-span-2">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription className="text-gray-400">We'll get back to you as soon as possible.</CardDescription>
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
                            <FormLabel className="text-white">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
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
                            <FormLabel className="text-white">Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your email address" 
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
                          <FormLabel className="text-white">Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="What is this regarding?" 
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
                          <FormLabel className="text-white">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
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
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="bg-[#0D0F12] border border-white/10 text-white">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription className="text-gray-400">Ways to reach us directly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-deutscher-purple-light mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:info@paksend.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                        info@paksend.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-deutscher-purple-light mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a href="tel:+4930123456789" className="text-sm text-gray-400 hover:text-white transition-colors">
                        +49 30 1234 5678
                      </a>
                      <p className="text-xs text-gray-500">Mon-Fri, 9AM-6PM CET</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-deutscher-purple-light mt-0.5" />
                    <div>
                      <h3 className="font-medium">Live Chat</h3>
                      <p className="text-sm text-gray-400">Available on our website during business hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#0D0F12] border border-white/10 text-white">
                <CardHeader>
                  <CardTitle>Office Address</CardTitle>
                  <CardDescription className="text-gray-400">Our headquarters</CardDescription>
                </CardHeader>
                <CardContent>
                  <address className="not-italic text-gray-300">
                    PakSend GmbH<br />
                    Friedrichstraße 123<br />
                    10117 Berlin<br />
                    Germany
                  </address>
                  
                  <div className="mt-3">
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-sm text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM CET</p>
                    <p className="text-sm text-gray-400">Saturday - Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription className="text-gray-400">Quick answers to common inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-deutscher-purple-light mb-2">How long does shipping take?</h3>
                  <p className="text-sm text-gray-400">
                    Standard shipping to Germany typically takes 7-10 business days, while express shipping can take 3-5 business days.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-deutscher-purple-light mb-2">How do I track my package?</h3>
                  <p className="text-sm text-gray-400">
                    You can track your package by logging into your dashboard and navigating to the "Shipments" section, or by using the tracking number provided in your confirmation email.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-deutscher-purple-light mb-2">What payment methods do you accept?</h3>
                  <p className="text-sm text-gray-400">
                    We accept all major credit cards, PayPal, and bank transfers for European customers.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-deutscher-purple-light mb-2">Are there any prohibited items?</h3>
                  <p className="text-sm text-gray-400">
                    Yes, certain items are prohibited or restricted for international shipping. Please check our <Link to="/documentation" className="text-deutscher-purple hover:text-deutscher-purple-light transition-colors">documentation</Link> for a complete list.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-400 mb-3">Still have questions?</p>
                <Button asChild variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white">
                  <Link to="/faq">View All FAQs</Link>
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