import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import "./Header.scss";
import "../../styles/global.scss"

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-[#2e2e2e] text-white py-5">
      <div className="flex w-[92%] mr-auto ml-auto justify-between items-center">
        {/* Logo/Name Section */}
        <Link to="/" className="flex flex-col justify-start">
          <span className="text-2xl tracking-wider">Petros Papatheodorou</span>
          <span className="mr-auto ml-auto text-sm tracking-[0.3em] mt-1 text-gray-300">PHOTOGRAPHY</span>
        </Link>

        {/* Navigation and Language Section */}
        <div className="flex justify-end items-center space-x-10">
          <nav className="flex space-x-10 items-center">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              {t('nav.home')}
            </Link>
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
              {t('nav.services')}
            </Link>
            <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>
              {t('nav.projects')}
            </Link>
            <Link to="/shop" className={`nav-link ${isActive('/shop') ? 'active' : ''}`}>
              {t('nav.shop')}
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
              {t('nav.contact')}
            </Link>
          </nav>

          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;