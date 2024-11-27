import React from 'react';
import { ServiceOptionGroup } from '../../../../../shared/types.ts';
import OptionItem from './OptionItem';

interface OptionGroupProps {
  group: ServiceOptionGroup;
  selectedOptions: Set<string>;
  quantities: { [key: string]: number };
  onOptionChange: (groupId: string, optionId: string, type: 'single' | 'multiple') => void;
  onQuantityChange: (optionId: string, delta: number) => void;
}

const OptionGroup: React.FC<OptionGroupProps> = ({
                                                   group,
                                                   selectedOptions,
                                                   quantities,
                                                   onOptionChange,
                                                   onQuantityChange,
                                                 }) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">{group.name}</h3>
        {group.description && (
          <p className="text-sm text-gray-600 mt-1">{group.description}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {group.options.map((option) => (
          <OptionItem
            key={option.id}
            option={option}
            groupId={group.id}
            groupType={group.type}
            isSelected={selectedOptions.has(option.id)}
            quantity={quantities[option.id] || 1}
            onOptionChange={onOptionChange}
            onQuantityChange={onQuantityChange}
          />
        ))}
      </div>
    </div>
  );
};

export default OptionGroup;