
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from './components/ScrollToTop';
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import UsStores from "./pages/UsStores";
import API from "./pages/API";
import Documentation from "./pages/Documentation";
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import About from './pages/About';
import Contact from './pages/Contact';
import CookiePolicy from './pages/CookiePolicy';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Impressum from './pages/Impressum';
import GDPR from './pages/GDPR';
import FAQ from "./pages/FAQ";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <Helmet>
        <title>PakSend | Direkt nach Deutschland</title>
        <meta name="description" content="PakSend® connects German shoppers with U.S. retailers by providing a smart virtual address and seamless package forwarding — powered by AI for speed and reliability." />
        <meta name="keywords" content="PakSend, shipping, e-commerce, cross-border, German shoppers, US retailers, package forwarding, virtual US address, international delivery" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Helmet>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Signup />} />
            <Route path="/us-stores" element={<UsStores />} />
            <Route path="/api" element={<API />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/gdpr" element={<GDPR />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;