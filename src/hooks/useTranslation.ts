
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, TranslationKey } from '@/translations';

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (key: TranslationKey) => {
    return translations[language]?.[key] || translations.en[key];
  };

  return { t };
}