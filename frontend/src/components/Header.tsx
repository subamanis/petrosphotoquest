import React from 'react';
import { Instagram } from 'lucide-react';
import "./Header.scss"
import {useLocation} from "./useLocation.ts";

const Header = () => {
  const currentPath = useLocation();

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <header className="bg-[#2e2e2e] text-white py-5">
      <div className="flex w-[92%] mr-auto ml-auto justify-between items-center">
        {/* Logo/Name Section */}
        <div className="flex flex-col justify-start cursor-pointer">
          <span className="text-2xl tracking-wider">Petros Papatheodorou</span>
          <span className="mr-auto ml-auto text-sm tracking-[0.3em] mt-1 text-gray-300">PHOTOGRAPHY</span>
        </div>

        {/* Navigation Section */}
        <div className="flex justify-end items-center space-x-10">
          <nav className="flex space-x-10 items-center">
            <a href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</a>
            <a href="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>Services</a>
            <a href="/personal" className={`nav-link ${isActive('/personal') ? 'active' : ''}`}>Personal</a>
            <a href="/shop" className={`nav-link ${isActive('/shop') ? 'active' : ''}`}>Shop</a>
            <a href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</a>
          </nav>
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
    </header>
  );
};

export default Header;