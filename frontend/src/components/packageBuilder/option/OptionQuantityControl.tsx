import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface OptionQuantityControlProps {
  quantity: number;
  onQuantityChange: (delta: number) => void;
}

const OptionQuantityControl: React.FC<OptionQuantityControlProps> = ({
                                                                       quantity,
                                                                       onQuantityChange,
                                                                     }) => {
  return (
    <div className="flex items-center space-x-2 ml-4">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onQuantityChange(-1);
        }}
        className="p-1 text-gray-500 hover:text-gray-700"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="w-8 text-center">{quantity}</span>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onQuantityChange(1);
        }}
        className="p-1 text-gray-500 hover:text-gray-700"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default OptionQuantityControl;