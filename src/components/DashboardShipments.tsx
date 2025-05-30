
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  Edit, 
  Trash, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Truck 
} from 'lucide-react';
import ShipmentDetailsModal from './ShipmentDetailsModal';
import { useTranslation } from '@/hooks/useTranslation';

const shipments = [
  { id: 'SHP-7891', name: 'Amazon Electronics', source: 'Amazon', status: 'At Warehouse', date: '2025-04-14', tracking: 'USPS39401839' },
  { id: 'SHP-6723', name: 'Clothing Bundle', source: 'Target', status: 'Processing', date: '2025-04-13', tracking: 'N/A' },
  { id: 'SHP-5427', name: 'Consolidated Tech', source: 'Best Buy', status: 'In Transit', date: '2025-04-10', tracking: 'DHL83712937' },
  { id: 'SHP-4291', name: 'Home Goods', source: 'Wayfair', status: 'In Transit', date: '2025-04-09', tracking: 'FDX72619283' },
  { id: 'SHP-3578', name: 'Kitchen Appliances', source: 'Amazon', status: 'Delivered', date: '2025-04-05', tracking: 'DHL71928374' },
  { id: 'SHP-2938', name: 'Books & Media', source: 'Barnes & Noble', status: 'Delivered', date: '2025-04-02', tracking: 'USPS82736412' },
  { id: 'SHP-1726', name: 'Office Supplies', source: 'Staples', status: 'Delivered', date: '2025-03-28', tracking: 'UPS91827463' },
];

const DashboardShipments = () => {
  const [selectedShipment, setSelectedShipment] = useState<(typeof shipments)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'In Transit':
        return <Truck className="h-4 w-4 text-orange-400" />;
      case 'At Warehouse':
        return <Clock className="h-4 w-4 text-blue-400" />;
      case 'Processing':
        return <AlertCircle className="h-4 w-4 text-purple-400" />;
      default:
        return null;
    }
  };

  const getTranslatedStatus = (status: string) => {
    switch (status) {
      case 'Delivered':
        return t('delivered');
      case 'In Transit':
        return t('inTransitStatus');
      case 'At Warehouse':
        return t('atWarehouse');
      case 'Processing':
        return t('processing');
      default:
        return status;
    }
  };
  
  const handleViewDetails = (shipment: typeof shipments[0]) => {
    setSelectedShipment(shipment);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">{t('trackShipments')}</h1>
          <p className="text-gray-300">{t('monitorPackages')}</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input 
            placeholder={t('searchShipments')}
            className="pl-10 bg-white/5 border-white/10 text-white focus-visible:ring-deutscher-purple"
          />
        </div>
        <Button variant="outline" className="w-full sm:w-auto border-white/10 text-white hover:bg-white/5 gap-2">
          <Filter className="h-4 w-4" />
          {t('filters')}
        </Button>
      </div>
      
      <div className="border rounded-lg border-white/10 overflow-hidden overflow-x-auto">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow className="hover:bg-transparent border-white/10">
              <TableHead className="text-white">{t('id')}</TableHead>
              <TableHead className="text-white">{t('source')}</TableHead>
              <TableHead className="text-white">{t('status')}</TableHead>
              <TableHead className="text-white hidden sm:table-cell">{t('date')}</TableHead>
              <TableHead className="text-white hidden md:table-cell">{t('trackingNumber')}</TableHead>
              <TableHead className="text-white text-right">{t('actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shipments.map((shipment) => (
              <TableRow key={shipment.id} className="hover:bg-white/5 border-white/10">
                <TableCell className="font-medium text-white">{shipment.id}</TableCell>
                <TableCell className="text-gray-300">{shipment.source}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(shipment.status)}
                    <span className="text-gray-300">{getTranslatedStatus(shipment.status)}</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-300 hidden sm:table-cell">{shipment.date}</TableCell>
                <TableCell className="font-mono text-xs text-gray-300 hidden md:table-cell">
                  {shipment.tracking !== 'N/A' ? (
                    <Button variant="link" className="p-0 h-auto text-deutscher-purple-light hover:text-deutscher-purple font-mono text-xs">
                      {shipment.tracking}
                    </Button>
                  ) : (
                    <span>-</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-300 hover:bg-white/5">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-[#0D0F12] border border-white/10 text-white">
                      <DropdownMenuItem 
                        className="flex items-center gap-2 cursor-pointer focus:bg-white/5"
                        onClick={() => handleViewDetails(shipment)}
                      >
                        <Eye className="h-4 w-4" />
                        <span>{t('viewDetails')}</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2 cursor-pointer focus:bg-white/5">
                        <Edit className="h-4 w-4" />
                        <span>{t('edit')}</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2 text-red-400 cursor-pointer focus:bg-white/5">
                        <Trash className="h-4 w-4" />
                        <span>{t('delete')}</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <ShipmentDetailsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        shipment={selectedShipment}
      />
    </div>
  );
};

export default DashboardShipments;
