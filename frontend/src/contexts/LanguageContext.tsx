import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'el';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check URL params first
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang') as Language;
    if (langParam && ['en', 'el'].includes(langParam)) {
      return langParam;
    }

    // Then check browser language
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'el' ? 'el' : 'en';
  });

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = language;

    // Update title based on language
    const titleElement = document.querySelector('title');
    if (titleElement) {
      const newTitle = titleElement.getAttribute(`data-title-${language}`);
      if (newTitle) {
        titleElement.textContent = newTitle;
      }
    }

    // Update URL without page reload
    const url = new URL(window.location.href);
    if (language === 'en') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', language);
    }
    window.history.replaceState({}, '', url);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
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