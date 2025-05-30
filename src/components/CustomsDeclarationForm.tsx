
import React, { useState } from 'react';
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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { useIsMobile } from '@/hooks/use-mobile';
import { FileCheck } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface CustomsDeclarationFormProps {
  isOpen: boolean;
  onClose: () => void;
  packageId: string;
}

const CustomsDeclarationForm = ({ isOpen, onClose, packageId }: CustomsDeclarationFormProps) => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [formValues, setFormValues] = useState({
    packageId,
    itemDescription: '',
    itemValue: '',
    currency: 'EUR',
    countryOfOrigin: '',
    contentType: 'merchandise',
    weight: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Customs declaration submitted:', formValues);
    toast({
      title: "Customs Declaration Submitted",
      description: `Your declaration for package ${packageId} has been submitted.`,
    });
    onClose();
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="packageId" className="text-sm font-medium text-white block mb-1">
            Package ID
          </label>
          <Input
            id="packageId"
            name="packageId"
            value={formValues.packageId}
            disabled
            className="bg-white/5 border-white/10 text-white"
          />
        </div>

        <div>
          <label htmlFor="itemDescription" className="text-sm font-medium text-white block mb-1">
            Item Description
          </label>
          <Textarea
            id="itemDescription"
            name="itemDescription"
            placeholder="Detailed description of contents"
            value={formValues.itemDescription}
            onChange={handleChange}
            required
            className="bg-white/5 border-white/10 text-white resize-none min-h-[100px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="itemValue" className="text-sm font-medium text-white block mb-1">
              Item Value
            </label>
            <Input
              id="itemValue"
              name="itemValue"
              type="number"
              placeholder="0.00"
              value={formValues.itemValue}
              onChange={handleChange}
              required
              className="bg-white/5 border-white/10 text-white"
            />
          </div>

          <div>
            <label htmlFor="currency" className="text-sm font-medium text-white block mb-1">
              Currency
            </label>
            <Select 
              value={formValues.currency} 
              onValueChange={(value) => handleSelectChange('currency', value)}
            >
              <SelectTrigger id="currency" className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Select Currency" />
              </SelectTrigger>
              <SelectContent className="bg-[#0D0F12] border-white/10 text-white">
                <SelectItem value="EUR">Euro (EUR)</SelectItem>
                <SelectItem value="USD">US Dollar (USD)</SelectItem>
                <SelectItem value="GBP">British Pound (GBP)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="countryOfOrigin" className="text-sm font-medium text-white block mb-1">
              Country of Origin
            </label>
            <Input
              id="countryOfOrigin"
              name="countryOfOrigin"
              placeholder="Country where the item was made"
              value={formValues.countryOfOrigin}
              onChange={handleChange}
              required
              className="bg-white/5 border-white/10 text-white"
            />
          </div>

          <div>
            <label htmlFor="contentType" className="text-sm font-medium text-white block mb-1">
              Content Type
            </label>
            <Select 
              value={formValues.contentType} 
              onValueChange={(value) => handleSelectChange('contentType', value)}
            >
              <SelectTrigger id="contentType" className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Select Content Type" />
              </SelectTrigger>
              <SelectContent className="bg-[#0D0F12] border-white/10 text-white">
                <SelectItem value="merchandise">Merchandise</SelectItem>
                <SelectItem value="gift">Gift</SelectItem>
                <SelectItem value="documents">Documents</SelectItem>
                <SelectItem value="sample">Sample</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label htmlFor="weight" className="text-sm font-medium text-white block mb-1">
            Weight (kg)
          </label>
          <Input
            id="weight"
            name="weight"
            type="number"
            placeholder="0.00"
            value={formValues.weight}
            onChange={handleChange}
            required
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="border-white/10 hover:bg-white/5"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-deutscher-purple hover:bg-deutscher-purple/90 text-white"
        >
          <FileCheck className="mr-1 h-4 w-4" />
          Submit Declaration
        </Button>
      </div>
    </form>
  );

  if (isMobile) {
    return (
      <Drawer open={isOpen} onClose={onClose}>
        <DrawerContent className="bg-[#0D0F12] border-white/10 text-white max-h-[90vh]">
          <DrawerHeader>
            <DrawerTitle>Customs Declaration</DrawerTitle>
            <DrawerDescription className="text-gray-400">
              Fill out the required information for customs clearance
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 overflow-y-auto">
            {formContent}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#0D0F12] border-white/10 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Customs Declaration</DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill out the required information for customs clearance
          </DialogDescription>
        </DialogHeader>
        {formContent}
      </DialogContent>
    </Dialog>
  );
};

export default CustomsDeclarationForm;
