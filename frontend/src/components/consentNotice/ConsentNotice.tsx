import React from 'react';
import { Info } from 'lucide-react';

const ConsentNotice = () => {
  return (
    <div className="bg-gray-50 border-l-2 border-gray-900 p-3 text-xs text-gray-500">
      <div className="flex">
        <div className="flex-shrink-0">
          <Info className="h-5 w-5 text-gray-900" />
        </div>
        <div className="ml-3">
          <p>
            Please note that I maintain the right to showcase photographs from our sessions on my website
            and social media platforms. If you wish to keep specific photos private, please inform me
            during our session or when reviewing the final images.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsentNotice;