
import React, { useState, useEffect } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardOverview from '@/components/DashboardOverview';
import DashboardAnalytics from '@/components/DashboardAnalytics';
import DashboardSettings from '@/components/DashboardSettings';
import ReadyToShipSection from '@/components/ReadyToShipSection';
import DashboardHelp from '@/components/DashboardHelp';
import DashboardShipments from '@/components/DashboardShipments';
import MessagesSection from '@/components/MessagesSection';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';


type ActiveView = 'overview' | 'analytics' | 'shipments' | 'tracking' | 'settings' | 'help' | 'messages';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { language } = useLanguage(); // Add language context to trigger re-renders
  
  // Initialize activeView from URL parameters or default to 'overview'
  const [activeView, setActiveView] = useState<ActiveView>(() => {
    const viewParam = searchParams.get('view') as ActiveView | null;
    return viewParam && ['overview', 'analytics', 'shipments', 'tracking', 'settings', 'help', 'messages'].includes(viewParam) 
      ? viewParam 
      : 'overview';
  });
  
  // Check for a tab parameter that might be used within specific views
  const tabParam = searchParams.get('tab');
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsMounted(true);
    
    // Handle deep linking to specific tabs within views
    if (activeView === 'messages' && tabParam === 'livechat') {
      // We'll let the MessagesSection handle the tab selection
      // The component will check for this URL parameter
      console.log('Opening Messages with Live Chat tab');
    }
  }, [activeView, tabParam]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const handleViewChange = (view: ActiveView) => {
    // Update the URL with the new view
    const newParams = new URLSearchParams(location.search);
    newParams.set('view', view);
    navigate(`/dashboard?${newParams.toString()}`, { replace: true });
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        setActiveView(view);
      }, 300);
    } else {
      setActiveView(view);
    }
  };

  const renderActiveView = () => {
    switch (activeView) {
      case 'overview':
        return <DashboardOverview />;
      case 'shipments':
        return <ReadyToShipSection />;
      case 'analytics':
        return <DashboardAnalytics />;
      case 'settings':
        return <DashboardSettings />;
      case 'help':
        return <DashboardHelp />;
      case 'tracking':
        return <DashboardShipments />;
      case 'messages':
        return <MessagesSection />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#0B0D0F] dashboard-contain">
        {/* Desktop Sidebar - hidden on mobile */}
        <div className="hidden md:block w-64">
          <DashboardSidebar activeView={activeView} setActiveView={handleViewChange} />
        </div>
        
        {/* Mobile Sidebar Sheet - visible only on mobile */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent 
            side="left" 
            className="w-64 md:hidden p-0 bg-[#0D0F12] border-r border-white/10"
            onEscapeKeyDown={() => setIsMobileMenuOpen(false)}
            onInteractOutside={() => setIsMobileMenuOpen(false)}
          >
            <DashboardSidebar 
              activeView={activeView} 
              setActiveView={handleViewChange} 
              isMobileSidebar={true}
            />
          </SheetContent>
        </Sheet>
        
        <div className="flex-1 flex flex-col w-full">
          <DashboardHeader 
            toggleMobileMenu={toggleMobileMenu} 
            isMobileMenuOpen={isMobileMenuOpen} 
          />
          <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
            {isMounted && renderActiveView()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
