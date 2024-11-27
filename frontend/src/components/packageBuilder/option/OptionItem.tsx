import React from 'react';
import { ServiceOption } from '../../../../../shared/types.ts';
import OptionQuantityControl from './OptionQuantityControl';

interface OptionItemProps {
  option: ServiceOption;
  groupId: string;
  groupType: 'single' | 'multiple';
  isSelected: boolean;
  quantity: number;
  onOptionChange: (groupId: string, optionId: string, type: 'single' | 'multiple') => void;
  onQuantityChange: (optionId: string, delta: number) => void;
}

const OptionItem: React.FC<OptionItemProps> = ({
                                                 option,
                                                 groupId,
                                                 groupType,
                                                 isSelected,
                                                 quantity,
                                                 onOptionChange,
                                                 onQuantityChange,
                                               }) => {
  return (
    <label className="relative flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
      <div className="flex items-center h-5">
        <input
          type={groupType === 'single' ? 'radio' : 'checkbox'}
          name={groupId}
          checked={isSelected}
          onChange={() => onOptionChange(groupId, option.id, groupType)}
          className="h-4 w-4 border-gray-300 text-gray-900 focus:ring-gray-900"
        />
      </div>
      <div className="flex-1 ml-3">
        <div className="flex justify-between items-start">
          <span className="block font-medium text-gray-900">
            {option.label}
          </span>
          {option.allowQuantity && isSelected && (
            <OptionQuantityControl
              quantity={quantity}
              onQuantityChange={(delta) => onQuantityChange(option.id, delta)}
            />
          )}
        </div>
        <span className="block text-sm text-gray-500">
          {option.allowQuantity && isSelected ? (
            <>
              ${option.price} × {quantity} = ${option.price * quantity}
            </>
          ) : (
            `+$${option.price}`
          )}
        </span>
      </div>
    </label>
  );
};

export default OptionItem;