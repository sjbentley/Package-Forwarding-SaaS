import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Truck, Package, Clock, CheckCircle, ExternalLink } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

type ShipmentDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  shipment: {
    id: string;
    name: string;
    source: string;
    status: string;
    date: string;
    tracking: string;
  } | null;
};

const ShipmentDetailsModal = ({ isOpen, onClose, shipment }: ShipmentDetailsModalProps) => {
  const { t } = useTranslation();
  if (!shipment) return null;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case t('delivered'):
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      case t('inTransitStatus'):
        return <Truck className="h-5 w-5 text-orange-400" />;
      case t('atWarehouse'):
        return <Clock className="h-5 w-5 text-blue-400" />;
      case t('processing'):
        return <Package className="h-5 w-5 text-purple-400" />;
      default:
        return null;
    }
  };

  const getTrackingUrl = (tracking: string, source: string) => {
    if (tracking === 'N/A') return '#';
    
    switch (true) {
      case tracking.startsWith('USPS'):
        return `https://tools.usps.com/go/TrackConfirmAction?tLabels=${tracking}`;
      case tracking.startsWith('UPS'):
        return `https://www.ups.com/track?tracknum=${tracking}`;
      case tracking.startsWith('FDX'):
        return `https://www.fedex.com/fedextrack/?trknbr=${tracking}`;
      case tracking.startsWith('DHL'):
        return `https://www.dhl.com/en/express/tracking.html?AWB=${tracking}`;
      default:
        return '#';
    }
  };

  const trackingUrl = getTrackingUrl(shipment.tracking, shipment.source);
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#0D0F12] border-white/10 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">{t('shipmentDetails')}</DialogTitle>
          <DialogDescription className="text-gray-400">
            {`${t('trackingInformationFor')} ${shipment.id}`}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-3">
          <div className="bg-white/5 p-3 rounded-lg">
            <h3 className="text-sm font-medium text-gray-300">{t('shipment')}</h3>
            <p className="text-lg font-medium">{shipment.name}</p>
            <p className="text-sm text-gray-400">{t('from')}: {shipment.source}</p>
          </div>
          
          <div className="bg-white/5 p-3 rounded-lg">
            <h3 className="text-sm font-medium text-gray-300">{t('status')}</h3>
            <div className="flex items-center gap-2 mt-1">
              {getStatusIcon(shipment.status)}
              <p className="font-medium">{shipment.status}</p>
            </div>
            <p className="text-sm text-gray-400 mt-1">{t('lastUpdated')} {shipment.date}</p>
          </div>
          
          {shipment.tracking !== 'N/A' ? (
            <div className="bg-white/5 p-3 rounded-lg">
              <h3 className="text-sm font-medium text-gray-300">{t('trackingNumber')}</h3>
              <p className="font-mono text-sm mt-1">{shipment.tracking}</p>
              <Button 
                variant="link" 
                className="text-deutscher-purple-light p-0 h-auto mt-2 flex items-center"
                asChild
              >
                <a href={trackingUrl} target="_blank" rel="noopener noreferrer">
                  {t('trackPackage')} <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </Button>
            </div>
          ) : (
            <div className="bg-white/5 p-3 rounded-lg">
              <h3 className="text-sm font-medium text-gray-300">{t('tracking')}</h3>
              <p className="text-sm text-gray-400 mt-1">{t('trackingNotAvailable')}</p>
            </div>
          )}
        </div>
        
        <DialogFooter>
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/10" onClick={onClose}>
            {t('close')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShipmentDetailsModal;
