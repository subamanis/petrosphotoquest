import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingNewsletterButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to="/newsletter?mode=subscribe"
      className="fixed bottom-8 right-8 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Tooltip */}
        <div
          className={`
            absolute bottom-full right-0 mb-2 whitespace-nowrap
            bg-white px-4 py-2 rounded-lg shadow-lg
            transform transition-all duration-200 origin-bottom-right
            ${isHovered ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
          `}
        >
          <p className="text-sm font-medium text-gray-900">Subscribe to my newsletter</p>
          <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
        </div>

        {/* Button */}
        <button
          className="
            bg-gray-900 text-white p-4 rounded-full shadow-lg
            hover:bg-gray-800 transition-colors duration-200
            flex items-center justify-center
          "
        >
          <Mail className="w-6 h-6" />
        </button>
      </div>
    </Link>
  );
};

export default FloatingNewsletterButton;