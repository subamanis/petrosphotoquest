import { useLanguage } from '../contexts/LanguageContext';
import { createApiRequest } from '../utils/api';

export const useApi = (prefix: string) => {
  const { language } = useLanguage();

  const fetchWithLanguage = (endpoint: string, options: RequestInit = {}) => {
    return createApiRequest(prefix+endpoint, {
      ...options,
      language
    });
  };

  return { fetch: fetchWithLanguage };
};