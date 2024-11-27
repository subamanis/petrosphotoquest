import { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types/types';
import { getInitialLanguage } from '../utils/languageDetection';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en'); // Default fallback
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initLanguage = async () => {
      const initialLang = await getInitialLanguage();
      setLanguage(initialLang);
      setIsLoading(false);
    };

    initLanguage();
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    console.log('setting lang');
    
    localStorage.setItem('preferred-language', lang);
    console.log('getting attr: ',localStorage.getItem('preferred-language'));

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update title based on language
    const titleElement = document.querySelector('title');
    if (titleElement) {
      const newTitle = titleElement.getAttribute(`data-title-${lang}`);
      if (newTitle) {
        titleElement.textContent = newTitle;
      }
    }

    // Update URL without page reload
    const url = new URL(window.location.href);
    if (lang === 'en') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    window.history.replaceState({}, '', url);
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
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