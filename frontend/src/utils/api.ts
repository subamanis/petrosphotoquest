import { useLanguage } from '../contexts/LanguageContext';

interface RequestOptions extends RequestInit {
  language?: string;
}

export const createApiRequest = (endpoint: string, options: RequestOptions = {}) => {
  const headers = new Headers(options.headers);
  
  // Add Content-Language header if language is provided
  if (options.language) {
    headers.set('Content-Language', options.language);
  }

  return fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
    ...options,
    headers
  });
};