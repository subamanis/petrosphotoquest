import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface CaptchaProps {
  onVerify: (token: string | null) => void;
  showError: boolean;
}

const Captcha: React.FC<CaptchaProps> = ({ onVerify, showError }) => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    onVerify(token);
  };

  return (
    <div className={showError ? 'invalid' : ''}>
      <ReCAPTCHA
        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        onChange={handleCaptchaChange}
      />
    </div>
  );
};

export default Captcha;
