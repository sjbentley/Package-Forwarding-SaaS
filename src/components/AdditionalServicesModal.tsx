
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { 
  Drawer, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerDescription,
  DrawerFooter
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from "@/hooks/use-toast";
import { 
  ShieldCheck, 
  PackageCheck, 
  Image as ImageIcon, 
  ArrowDownToLine, 
  Lock,
  Warehouse
} from 'lucide-react';
import { useTranslation } from "@/hooks/useTranslation";

interface AdditionalServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageId: string;
}

const AdditionalServicesModal = ({ isOpen, onClose, packageId }: AdditionalServicesModalProps) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const handleRequestService = (serviceName: string) => {
    toast({
      title: t('serviceRequested'),
      description: t(`serviceRequestedDescription`).replace('{serviceName}', serviceName).replace('{packageId}', packageId),
    });
    onClose();
  };

  const services = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-deutscher-purple-light" />,
      name: t('packageInsurance'),
      description: t('packageInsuranceDescription'),
      price: t('packageInsurancePrice')
    },
    {
      icon: <PackageCheck className="h-5 w-5 text-deutscher-purple-light" />,
      name: t('contentCheck'),
      description: t('contentCheckDescription'),
      price: t('contentCheckPrice')
    },
    {
      icon: <ImageIcon className="h-5 w-5 text-deutscher-purple-light" />,
      name: t('additionalPhotos'),
      description: t('additionalPhotosDescription'),
      price: t('additionalPhotosPrice')
    },
    {
      icon: <ArrowDownToLine className="h-5 w-5 text-deutscher-purple-light" />,
      name: t('repackaging'),
      description: t('repackagingDescription'),
      price: t('repackagingPrice')
    },
    {
      icon: <Lock className="h-5 w-5 text-deutscher-purple-light" />,
      name: t('secureHandling'),
      description: t('secureHandlingDescription'),
      price: t('secureHandlingPrice')
    },
    {
      icon: <Warehouse className="h-5 w-5 text-deutscher-purple-light" />,
      name: t('extendedStorage'),
      description: t('extendedStorageDescription'),
      price: t('extendedStoragePrice')
    }
  ];

  const content = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="border border-white/10 rounded-lg p-4 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">
                {service.icon}
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-white">{service.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm font-medium text-deutscher-purple-light">{service.price}</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-white/10 hover:bg-deutscher-purple/20 hover:text-deutscher-purple-light"
                    onClick={() => handleRequestService(service.name)}
                  >
                    {t('request')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={isOpen} onClose={onClose}>
        <DrawerContent className="bg-[#0D0F12] border-white/10 text-white max-h-[90vh]">
          <DrawerHeader>
            <DrawerTitle>{t('additionalServices')}</DrawerTitle>
            <DrawerDescription className="text-gray-400">
              {t('optionalServicesDescription').replace('{packageId}', packageId)}
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 overflow-y-auto">
            {content}
          </div>
          <DrawerFooter className="border-t border-white/10 mt-4">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="border-white/10 hover:bg-white/5"
            >
              {t('close')}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#0D0F12] border-white/10 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t('additionalServices')}</DialogTitle>
          <DialogDescription className="text-gray-400">
            {t('optionalServicesDescription').replace('{packageId}', packageId)}
          </DialogDescription>
        </DialogHeader>
        {content}
        <DialogFooter className="border-t border-white/10 mt-4 pt-4">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="border-white/10 hover:bg-white/5"
          >
            {t('close')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdditionalServicesModal;
