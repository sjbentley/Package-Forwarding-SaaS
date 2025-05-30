
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
import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Calendar, Package, Ruler, Scale, MapPin, Truck, Clock, FileText, Box } from 'lucide-react';
import { useTranslation } from "@/hooks/useTranslation";

export interface PackageDetails {
  id: string;
  dateReceived: string;
  from: string;
  weight: string;
  dimensions: string;
  location: string;
  trackingNumber: string;
  storageLeft: string;
  dateArrived: string;
  images: string[];
}

interface PackageDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageDetails: PackageDetails;
  onOpenCustomsForm: () => void;
  onRequestAdditionalServices: () => void;
}

const PackageDetailsModal = ({
  isOpen,
  onClose,
  packageDetails,
  onOpenCustomsForm,
  onRequestAdditionalServices
}: PackageDetailsModalProps) => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  const content = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Images Carousel */}
        <div className="bg-white/5 rounded-lg overflow-hidden">
          <div className="aspect-video bg-black/20 flex items-center justify-center">
            {packageDetails.images.length > 0 ? (
              <img 
                src={packageDetails.images[0]} 
                alt={t('packagePhotos')} 
                className="object-contain w-full h-full"
              />
            ) : (
              <Box className="h-12 w-12 text-gray-500" />
            )}
          </div>
          {packageDetails.images.length > 1 && (
            <div className="flex gap-2 p-2 overflow-x-auto">
              {packageDetails.images.map((image, index) => (
                <div 
                  key={index} 
                  className="w-16 h-16 flex-shrink-0 rounded overflow-hidden border border-white/10"
                >
                  <img 
                    src={image} 
                    alt={`${t('packagePhotos')} ${index + 1}`}  
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Package Details Table */}
        <div>
          <Table>
            <TableBody className="text-white">
              <TableRow className="border-white/10">
                <TableCell className="py-2 flex items-center gap-2">
                  <Package className="h-4 w-4 text-deutscher-purple-light" />
                  <span className="text-gray-400">{t('packageIdentifier')}</span>
                </TableCell>
                <TableCell className="py-2 font-medium">{packageDetails.id}</TableCell>
              </TableRow>
              <TableRow className="border-white/10">
                <TableCell className="py-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-deutscher-purple-light" />
                  <span className="text-gray-400">{t('dateReceived')}</span>
                </TableCell>
                <TableCell className="py-2">{packageDetails.dateReceived}</TableCell>
              </TableRow>
              <TableRow className="border-white/10">
                <TableCell className="py-2 flex items-center gap-2">
                  <Truck className="h-4 w-4 text-deutscher-purple-light" />
                  <span className="text-gray-400">{t('from')}</span>
                </TableCell>
                <TableCell className="py-2">{packageDetails.from}</TableCell>
              </TableRow>
              <TableRow className="border-white/10">
                <TableCell className="py-2 flex items-center gap-2">
                  <Scale className="h-4 w-4 text-deutscher-purple-light" />
                  <span className="text-gray-400">{t('weight')}</span>
                </TableCell>
                <TableCell className="py-2">{packageDetails.weight}</TableCell>
              </TableRow>
              <TableRow className="border-white/10">
                <TableCell className="py-2 flex items-center gap-2">
                  <Ruler className="h-4 w-4 text-deutscher-purple-light" />
                  <span className="text-gray-400">{t('dimensions')}</span>
                </TableCell>
                <TableCell className="py-2">{packageDetails.dimensions}</TableCell>
              </TableRow>
              <TableRow className="border-white/10">
                <TableCell className="py-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-deutscher-purple-light" />
                  <span className="text-gray-400">{t('location')}</span>
                </TableCell>
                <TableCell className="py-2">{packageDetails.location}</TableCell>
              </TableRow>
              <TableRow className="border-white/10">
                <TableCell className="py-2 flex items-center gap-2">
                  <Truck className="h-4 w-4 text-deutscher-purple-light" />
                  <span className="text-gray-400">{t('trackingNumber')}</span>
                </TableCell>
                <TableCell className="py-2 break-all">{packageDetails.trackingNumber}</TableCell>
              </TableRow>
              <TableRow className="border-white/10">
                <TableCell className="py-2 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-deutscher-purple-light" />
                  <span className="text-gray-400">{t('storageLeft')}</span>
                </TableCell>
                <TableCell className="py-2">{packageDetails.storageLeft}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-end">
        <Button
          variant="outline"
          onClick={onRequestAdditionalServices}
          className="border-white/10 hover:bg-deutscher-purple/20 hover:text-deutscher-purple-light"
        >
          {t('additionalServices')}
        </Button>
        <Button
          onClick={onOpenCustomsForm}
          className="bg-deutscher-purple hover:bg-deutscher-purple/90 text-white"
        >
          <FileText className="mr-1 h-4 w-4" />
          {t('customsDeclaration')}
        </Button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={isOpen} onClose={onClose}>
        <DrawerContent className="bg-[#0D0F12] border-white/10 text-white max-h-[90vh]">
          <DrawerHeader>
            <DrawerTitle>{t('packageDetails')}</DrawerTitle>
            <DrawerDescription className="text-gray-400">
              {t('packageInformation')} {packageDetails.from}
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
      <DialogContent className="bg-[#0D0F12] border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t('packageDetails')}</DialogTitle>
          <DialogDescription className="text-gray-400">
            {t('packageInformation')} {packageDetails.from}
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

export default PackageDetailsModal;
