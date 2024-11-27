import { Language } from '../types/types';

export const detectUserCountry = async (): Promise<string> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_code;
  } catch (error) {
    console.error('Error detecting country:', error);
    return 'US'; // Default fallback
  }
};

export const getInitialLanguage = async (): Promise<Language> => {
  // 1. Check URL params first
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang') as Language;
  if (langParam && ['en', 'el'].includes(langParam)) {
    return langParam;
  }

  // 2. Check stored preference
  const storedLang = localStorage.getItem('preferred-language') as Language;
  if (storedLang && ['en', 'el'].includes(storedLang)) {
    return storedLang;
  }

  // 3. Check country based on IP
  const country = await detectUserCountry();
  if (country === 'GR') {
    return 'el';
  }

  // 4. Fallback to browser language
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'el' ? 'el' : 'en';
};