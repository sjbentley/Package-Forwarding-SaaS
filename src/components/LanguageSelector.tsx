
import React from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const languages: { value: Language; label: string; native: string }[] = [
  { value: 'en', label: 'English', native: 'English' },
  { value: 'ar', label: 'Arabic', native: 'العربية' },
  { value: 'de', label: 'German', native: 'Deutsch' },
  { value: 'tr', label: 'Turkish', native: 'Türkçe' },
  { value: 'uk', label: 'Ukrainian', native: 'Українська' },
  { value: 'ru', label: 'Russian', native: 'Русский' },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center gap-2">
      <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
        <SelectTrigger className={`bg-[#0D0F12] border-white/10 text-white ${isMobile ? 'w-auto px-1.5' : 'w-[130px]'}`}>
          {isMobile ? (
            <Globe className="h-4 w-4 text-gray-400" />
          ) : (
            <>
              <Globe className="h-4 w-4 text-gray-400 mr-2" />
              <SelectValue placeholder="Language" />
            </>
          )}
        </SelectTrigger>
        <SelectContent className="bg-[#0D0F12] border-white/10 text-white">
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.value} className="text-white hover:text-white hover:bg-white/10">
              <span className="flex items-center gap-2">
                <span className="font-medium">{lang.native}</span>
                {!isMobile && <span className="text-xs text-gray-400">({lang.label})</span>}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
