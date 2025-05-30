
import React from 'react';
import { Menu, Search } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import LanguageSelector from './LanguageSelector';
import { Button } from '@/components/ui/button';
import DateTimeDisplay from './DateTimeDisplay';
import { useTranslation } from '@/hooks/useTranslation';

interface DashboardHeaderProps {
  toggleMobileMenu?: () => void;
  isMobileMenuOpen?: boolean;
}

const DashboardHeader = ({ toggleMobileMenu, isMobileMenuOpen }: DashboardHeaderProps) => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
  return (
    <header className="border-b border-white/10 bg-[#0D0F12] py-4 px-6 w-full">
      <div className="flex items-center justify-between w-full">
        {/* Mobile Menu Button - Always visible on mobile */}
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon"
            className="h-8 w-8 flex-shrink-0"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Navigation Menu</span>
          </Button>
        )}
        
        {/* Search Bar - Always centered on mobile, left-aligned on desktop */}
        <div className={`relative flex-grow ${isMobile ? 'max-w-[200px]' : 'max-w-md'}`}>
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder={t('search')}
            className="h-10 w-full rounded-md border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-deutscher-purple transition-colors"
          />
        </div>

        {/* Date Time Display and Language Selector container */}
        <div className="flex items-center space-x-2">
          <DateTimeDisplay />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;