
import React, { useState, useEffect } from 'react';
import { Globe, RotateCcw, ArrowLeft, ArrowRight, Search, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const DEFAULT_URL = 'https://www.google.com';

// Expanded list of U.S. shopping sites
const SHOPPING_SITES = [
  { name: 'Amazon', url: 'https://www.amazon.com' },
  { name: 'eBay', url: 'https://www.ebay.com' },
  { name: 'Walmart', url: 'https://www.walmart.com' },
  { name: 'Target', url: 'https://www.target.com' },
  { name: 'Best Buy', url: 'https://www.bestbuy.com' },
  { name: 'Etsy', url: 'https://www.etsy.com' },
  { name: 'Newegg', url: 'https://www.newegg.com' },
  { name: 'Costco', url: 'https://www.costco.com' },
  { name: 'Home Depot', url: 'https://www.homedepot.com' },
  { name: 'Apple Store', url: 'https://www.apple.com/store' },
  { name: 'Macy\'s', url: 'https://www.macys.com' },
  { name: 'Overstock', url: 'https://www.overstock.com' },
];

const DashboardBrowser = () => {
  const [url, setUrl] = useState<string>(DEFAULT_URL);
  const [currentUrl, setCurrentUrl] = useState<string>(DEFAULT_URL);
  const [history, setHistory] = useState<string[]>([DEFAULT_URL]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [showIframeMessage, setShowIframeMessage] = useState<boolean>(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  // Check if the iframe loaded correctly
  useEffect(() => {
    const timer = setTimeout(() => {
      // After a short timeout, we'll check if the iframe message should be shown
      // This is a heuristic approach since we can't directly detect X-Frame-Options
      setShowIframeMessage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentUrl]);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const navigateToUrl = (urlToNavigate: string) => {
    // Reset iframe message when navigating
    setShowIframeMessage(false);
    
    // Handle search queries
    let formattedUrl = urlToNavigate;
    
    if (!formattedUrl.includes(' ') && 
        !formattedUrl.startsWith('http://') && 
        !formattedUrl.startsWith('https://')) {
      // If it looks like a domain, add https
      formattedUrl = `https://${formattedUrl}`;
    } else if (formattedUrl.includes(' ') || !formattedUrl.includes('.')) {
      // If it has spaces or doesn't look like a URL, treat as search query
      formattedUrl = `https://www.google.com/search?q=${encodeURIComponent(formattedUrl)}`;
    }

    setUrl(formattedUrl);
    setCurrentUrl(formattedUrl);

    // Add to history if it's a new URL
    if (formattedUrl !== history[historyIndex]) {
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(formattedUrl);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    }
    
    toast({
      title: "Navigating",
      description: `Going to ${formattedUrl}`,
      duration: 2000,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateToUrl(url);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setUrl(history[historyIndex - 1]);
      setCurrentUrl(history[historyIndex - 1]);
    }
  };

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setUrl(history[historyIndex + 1]);
      setCurrentUrl(history[historyIndex + 1]);
    }
  };

  const refresh = () => {
    // Create a new iframe by forcing a re-render
    const tempUrl = currentUrl;
    setCurrentUrl('about:blank');
    setTimeout(() => {
      setCurrentUrl(tempUrl);
      toast({
        title: "Refreshed",
        description: "Page refreshed",
        duration: 2000,
      });
    }, 100);
  };

  const openInNewTab = () => {
    window.open(currentUrl, '_blank', 'noopener,noreferrer');
    toast({
      title: "Opened in new tab",
      description: "Website opened in a new browser tab",
      duration: 2000,
    });
  };

  return (
    <div className="flex flex-col h-full">
      <Card className="bg-[#0D0F12] border-white/10 mb-3 sm:mb-4">
        <CardContent className="pt-3 sm:pt-4 px-2 sm:px-4">
          <div className="mb-2 sm:mb-3">
            <NavigationMenu className="w-full max-w-full justify-start">
              <NavigationMenuList className="space-x-0">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-white text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-3 h-auto">
                    U.S. Shopping Sites
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-2 p-3 sm:w-[400px] sm:gap-3 sm:p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {SHOPPING_SITES.map((site) => (
                        <li key={site.name}>
                          <NavigationMenuLink asChild>
                            <Button
                              variant="ghost"
                              className="w-full justify-start text-left text-xs sm:text-sm py-1 h-auto"
                              onClick={() => navigateToUrl(site.url)}
                            >
                              {site.name}
                            </Button>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <form onSubmit={handleSubmit} className="flex items-center space-x-1 sm:space-x-2">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={goBack}
                disabled={historyIndex === 0}
                className="text-white/70 hover:text-white hover:bg-white/10 h-7 w-7 sm:h-8 sm:w-8"
              >
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={goForward}
                disabled={historyIndex >= history.length - 1}
                className="text-white/70 hover:text-white hover:bg-white/10 h-7 w-7 sm:h-8 sm:w-8"
              >
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={refresh}
                className="text-white/70 hover:text-white hover:bg-white/10 h-7 w-7 sm:h-8 sm:w-8"
              >
                <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={openInNewTab}
                className="text-white/70 hover:text-white hover:bg-white/10 h-7 w-7 sm:h-8 sm:w-8"
                title="Open in new tab"
              >
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
            <div className="flex-1 flex items-center bg-[#0B0D0F] rounded-md border border-white/10 px-2 sm:px-3">
              <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-white/50 mr-1 sm:mr-2" />
              <Input
                type="text"
                value={url}
                onChange={handleUrlChange}
                placeholder="Enter URL or search query"
                className="flex-1 border-0 bg-transparent text-white text-xs sm:text-sm focus-visible:ring-0 focus-visible:ring-offset-0 h-7 sm:h-8 py-1 px-1 sm:py-2"
              />
              <Button type="submit" variant="ghost" size="icon" className="text-white/70 h-6 w-6 sm:h-8 sm:w-8">
                <Search className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      <div className="flex-1 bg-white rounded-lg overflow-hidden">
        {showIframeMessage ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-white p-4 sm:p-8 text-center">
            <div className="max-w-md">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Some websites may not display correctly</h2>
              <p className="mb-4 sm:mb-6 text-gray-600 text-sm sm:text-base">
                Many websites prevent being displayed in embedded frames for security reasons. 
                We've added shortcuts to popular shopping sites above, and you can open any site in a new tab.
              </p>
              <Button 
                onClick={openInNewTab} 
                className="bg-deutscher-purple hover:bg-deutscher-purple/90 gap-1 sm:gap-2 text-xs sm:text-base px-3 py-1 sm:px-4 sm:py-2"
              >
                Open {new URL(currentUrl).hostname} in new tab
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <iframe
            src={currentUrl}
            title="Browser"
            className="w-full h-full border-0"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads allow-storage-access-by-user-activation"
            referrerPolicy="no-referrer"
            loading="eager"
            onError={() => setShowIframeMessage(true)}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardBrowser;
