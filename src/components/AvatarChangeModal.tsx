
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Upload, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type AvatarChangeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  currentAvatar?: string;
  onAvatarChange: (avatarUrl: string) => void;
};

const AvatarChangeModal = ({ isOpen, onClose, currentAvatar, onAvatarChange }: AvatarChangeModalProps) => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  
  // Sample avatar options - in a real app, these would come from an API or be user-uploaded
  const avatarOptions = [
    'https://github.com/shadcn.png',
    'https://avatars.githubusercontent.com/u/124599',
    'https://api.dicebear.com/7.x/bottts/svg?seed=Felix',
    'https://api.dicebear.com/7.x/bottts/svg?seed=Milo',
    'https://api.dicebear.com/7.x/bottts/svg?seed=Luna',
    'https://api.dicebear.com/7.x/bottts/svg?seed=Lucy'
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, this would upload to a server/storage
      // For demo purposes, we're just creating a local URL
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleAvatarSelect = (avatarUrl: string) => {
    setSelectedImage(avatarUrl);
  };

  const handleSaveAvatar = () => {
    setUploading(true);
    
    // Simulate a network request
    setTimeout(() => {
      if (selectedImage) {
        onAvatarChange(selectedImage);
        toast({
          title: "Avatar updated",
          description: "Your profile picture has been updated successfully.",
        });
      }
      setUploading(false);
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#0D0F12] border-white/10 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Change Avatar</DialogTitle>
          <DialogDescription className="text-gray-400">
            Select a new profile picture
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Preview of currently selected or current avatar */}
          <div className="flex justify-center">
            <Avatar className="h-24 w-24 border-2 border-deutscher-purple-light">
              <AvatarImage src={selectedImage || currentAvatar} alt="Preview" />
              <AvatarFallback className="bg-deutscher-purple text-white text-lg">
                <Camera className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
          </div>
          
          {/* Upload option */}
          <div>
            <label 
              htmlFor="avatar-upload" 
              className="flex items-center justify-center gap-2 p-2 border border-dashed border-white/20 rounded-lg cursor-pointer hover:bg-white/5 transition-colors"
            >
              <Upload className="h-4 w-4" />
              <span>Upload new image</span>
              <input 
                id="avatar-upload" 
                type="file" 
                accept="image/*"
                className="hidden" 
                onChange={handleFileChange}
              />
            </label>
          </div>
          
          {/* Preset options */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-2">Or choose from options</h3>
            <div className="grid grid-cols-4 gap-3">
              {avatarOptions.map((avatar, index) => (
                <div 
                  key={index}
                  className={`relative cursor-pointer ${selectedImage === avatar ? 'ring-2 ring-deutscher-purple-light rounded-full' : ''}`}
                  onClick={() => handleAvatarSelect(avatar)}
                >
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={avatar} alt={`Avatar option ${index + 1}`} />
                    <AvatarFallback className="bg-deutscher-purple text-white text-sm">
                      {index + 1}
                    </AvatarFallback>
                  </Avatar>
                  {selectedImage === avatar && (
                    <div className="absolute -top-1 -right-1 bg-deutscher-purple-light rounded-full p-0.5">
                      <X className="h-3 w-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex gap-2">
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/10" onClick={onClose}>
            Cancel
          </Button>
          <Button
            disabled={!selectedImage || uploading}
            className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white"
            onClick={handleSaveAvatar}
          >
            {uploading ? "Saving..." : "Save Avatar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AvatarChangeModal;
