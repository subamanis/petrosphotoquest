import React from 'react';

interface DiscountRibbonProps {
  percentage: number;
  color: 'blue' | 'green' | 'magenta';
}

const colorMap = {
  blue: 'rgb(59, 130, 246)',
  green: 'rgb(34, 197, 94)',
  magenta: 'rgb(236, 72, 153)'
};

const DiscountRibbon: React.FC<DiscountRibbonProps> = ({ percentage, color }) => {
  if (percentage === 0) return null;

  return (
    <div
      className="absolute -top-2 -right-2 px-1 py-0.5 text-[0.7rem] text-white rounded-md transform rotate-12 shadow-md"
      style={{ backgroundColor: colorMap[color] }}
    >
      {percentage}% Off
    </div>
  );
};

export default DiscountRibbon;