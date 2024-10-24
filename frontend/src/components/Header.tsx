import React from 'react';
import { Instagram } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#2e2e2e] text-white py-6 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Name Section */}
        <div className="flex flex-col">
          <span className="text-2xl font-light tracking-wider">Petros Papatheodorou</span>
          <span className="mr-auto ml-auto text-sm tracking-[0.3em] mt-1 text-gray-300">PHOTOGRAPHY</span>
        </div>

        {/* Navigation Section */}
        <div className="flex items-center space-x-8">
          <nav className="flex space-x-6 items-center">
            <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="/professional" className="hover:text-gray-300 transition-colors">Professional</a>
            <a href="/personal" className="hover:text-gray-300 transition-colors">Personal</a>
            <a href="/buy" className="hover:text-gray-300 transition-colors">Buy</a>
            <a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a>
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