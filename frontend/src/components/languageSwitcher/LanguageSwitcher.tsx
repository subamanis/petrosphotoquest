import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`w-8 h-6 rounded overflow-hidden transition-opacity ${
          language === 'en' ? 'opacity-100' : 'opacity-35 hover:opacity-75'
        }`}
        title="English"
      >
        <img
          src="/icons/flags/gb.svg"
          alt="English"
          className="w-full h-full object-cover"
        />
      </button>
      <button
        onClick={() => setLanguage('el')}
        className={`w-8 h-6 rounded overflow-hidden transition-opacity ${
          language === 'el' ? 'opacity-100' : 'opacity-35 hover:opacity-75'
        }`}
        title="Ελληνικά"
      >
        <img
          src="/icons/flags/gr.svg"
          alt="Ελληνικά"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
}

export default LanguageSwitcher;