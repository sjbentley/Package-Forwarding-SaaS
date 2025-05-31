
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'de' | 'tr' | 'uk' | 'ru';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  languageName: string;
};

const languageNames: Record<Language, string> = {
  en: 'English',
  ar: 'العربية',
  de: 'Deutsch',
  tr: 'Türkçe',
  uk: 'Українська',
  ru: 'Русский',
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('de');

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        languageName: languageNames[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
