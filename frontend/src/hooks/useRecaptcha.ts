import { useEffect, useCallback } from 'react';

declare global {
  interface Window {
    recaptcha: any;
    onRecaptchaLoad?: () => void;
  }
}

const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // Replace with your site key
const IS_RECAPTCHA_ACTIVE = false; // Toggle this to enable/disable reCAPTCHA

export const useRecaptcha = () => {
  useEffect(() => {
    if (!IS_RECAPTCHA_ACTIVE) return;

    // Load reCAPTCHA script if not already loaded
    if (!document.querySelector('#recaptcha-script')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-script';
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const executeRecaptcha = useCallback(async (action: string) => {
    if (!IS_RECAPTCHA_ACTIVE) {
      return 'mock-token-recaptcha-disabled';
    }

    try {
      const token = await window.recaptcha.execute(RECAPTCHA_SITE_KEY, { action });
      return token;
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      return null;
    }
  }, []);

  return { executeRecaptcha, isActive: IS_RECAPTCHA_ACTIVE };
};