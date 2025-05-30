import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Plane, 
  LayoutDashboard, 
  BarChart2, 
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Copy,
  Truck,
  Package,
  HelpCircle,
  MessageSquare,
  X
} from 'lucide-react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import { DrawerClose } from '@/components/ui/drawer';
import { useTranslation } from '@/hooks/useTranslation';
import { TranslationKey } from '@/translations';

type DashboardSidebarProps = {
  activeView: string;
  setActiveView: (view: 'overview' | 'shipments' | 'analytics' | 'settings' | 'tracking' | 'help' | 'messages') => void;
  isMobileSidebar?: boolean;
};

const DashboardSidebar = ({ activeView, setActiveView, isMobileSidebar = false }: DashboardSidebarProps) => {
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const virtualAddress = {
    name: 'Jahi Bentley',
    addressLine1: '123 Main St',
    addressLine2: 'Suite #DS-4921',
    city: 'Torrance',
    state: 'CA',
    zipCode: '90503',
    country: 'United States'
  };
  
  const copyAddressToClipboard = () => {
    const formattedAddress = `${virtualAddress.name}\n${virtualAddress.addressLine1}\n${virtualAddress.addressLine2}\n${virtualAddress.city}, ${virtualAddress.state} ${virtualAddress.zipCode}\n${virtualAddress.country}`;
    navigator.clipboard.writeText(formattedAddress);
    toast({
      title: t('addressCopied'),
      description: t('addressCopiedDescription'),
      duration: 3000,
    });
  };

  type MenuItemType = {
    title: TranslationKey;
    value: 'overview' | 'analytics' | 'shipments' | 'tracking' | 'messages' | 'settings' | 'help';
    icon: React.ElementType;
    badge?: number;
  };

  const menuItems: MenuItemType[] = [
    {
      title: "overview",
      value: "overview",
      icon: LayoutDashboard,
    },
    {
      title: "analytics",
      value: "analytics",
      icon: BarChart2,
    },
    {
      title: "shipments",
      value: "shipments",
      icon: Package,
    },
    {
      title: "tracking",
      value: "tracking",
      icon: Truck,
    },
    {
      title: "messages",
      value: "messages",
      icon: MessageSquare,
      badge: 3
    },
    {
      title: "settings",
      value: "settings",
      icon: Settings,
    },
    {
      title: "help",
      value: "help",
      icon: HelpCircle,
    }
  ];

  // Use a plain div for mobile, Sidebar for desktop
  const Container = isMobileSidebar ? 'div' : Sidebar;
  const containerProps = isMobileSidebar
    ? { className: 'border-r border-white/10 w-64 h-full flex flex-col bg-[#0D0F12]' }
    : { className: 'border-r border-white/10 w-64 h-full' };

  return (
    <Container {...containerProps}>
      <SidebarHeader className="py-6 flex justify-center items-center relative">
        <div className="flex items-center gap-2 px-6">
          <Plane className="h-6 w-6 text-deutscher-purple-light" />
          <h1 className="text-xl font-bold text-white">PakSend</h1>
        </div>
        {isMobileSidebar && (
          <DrawerClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-0">
            <X className="h-5 w-5 text-gray-400" />
            <span className="sr-only">Close</span>
          </DrawerClose>
        )}
        {!isMobileSidebar && (
          <SidebarTrigger className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 absolute right-[-12px] top-[50%] transform -translate-y-1/2 bg-[#0D0F12] border border-white/10">
            <ChevronLeft className="h-4 w-4 sidebar-open:hidden" />
            <ChevronRight className="h-4 w-4 hidden sidebar-open:block" />
          </SidebarTrigger>
        )}
      </SidebarHeader>
      
      <SidebarContent className={isMobileSidebar ? 'flex-1 flex flex-col overflow-y-auto' : ''}>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.value}>
                  <SidebarMenuButton
                    onClick={() => setActiveView(item.value)}
                    className={`
                      ${activeView === item.value 
                        ? 'bg-deutscher-purple/20 text-deutscher-purple-light' 
                        : 'text-gray-300 hover:bg-deutscher-purple/10 hover:text-deutscher-purple-light'}
                      will-change-transform transition-colors duration-200 ease-in-out
                    `}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{t(item.title)}</span>
                    {item.badge && (
                      <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-md bg-deutscher-purple px-1 text-xs font-medium">{item.badge}</span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="space-y-4 py-4 px-6">
        <Card className="bg-[#0D0F12] border border-white/10 text-white mb-8">
          <CardContent className="p-3">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-deutscher-purple-light" />
                <h3 className="text-xs font-medium">{t('virtualAddress')}</h3>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-5 w-5 hover:bg-white/10 will-change-transform"
                onClick={copyAddressToClipboard}
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
            <div className="text-xs text-gray-400 space-y-1">
              <p className="truncate">{virtualAddress.addressLine1}</p>
              <p className="truncate text-deutscher-purple-light">{virtualAddress.addressLine2}</p>
              <p className="truncate">{virtualAddress.city}, {virtualAddress.state} {virtualAddress.zipCode}</p>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex flex-col items-center justify-center mb-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative flex flex-col items-center h-auto gap-1 font-normal hover:bg-white/5 px-2 py-3 w-full will-change-transform">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback className="bg-deutscher-purple text-white">JB</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center">
                  <span className="text-white text-sm font-medium">Jahi Bentley</span>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <span>sirjahi@example.com</span>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 bg-[#0D0F12] border border-white/10 text-white">
              <DropdownMenuLabel>{t('myAccount')}</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem className="cursor-pointer focus:bg-white/5">{t('profile')}</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer focus:bg-white/5">{t('billing')}</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer focus:bg-white/5">{t('settings')}</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem className="cursor-pointer focus:bg-white/5 text-red-400">{t('logOut')}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <Link to="/">
          <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/10 flex items-center gap-2 will-change-transform">
            <LogOut className="h-4 w-4" />
            <span>{t('backToSite')}</span>
          </Button>
        </Link>
      </SidebarFooter>
    </Container>
  );
};

export default DashboardSidebar;
