import React, { useState, useEffect } from 'react';
import { Package, AlertCircle } from 'lucide-react';
import { Service, DiscountTier, OptionQuantity } from '../../types/types.ts';
import OptionGroup from './option/OptionGroup';
import DiscountRibbon from './DiscountRibbon';

interface PackageBuilderProps {
  service: Service;
  onPackageSelect: (packageName: string | null) => void;
}

const DISCOUNT_TIERS: DiscountTier[] = [
  { minOptions: 5, percentage: 5, color: 'blue' },
  { minOptions: 7, percentage: 8, color: 'green' },
  { minOptions: 9, percentage: 12, color: 'magenta' },
];

const colorMap = {
  blue: 'rgb(59, 130, 246)',
  green: 'rgb(34, 197, 94)',
  magenta: 'rgb(231,84,214)'
};

const PackageBuilder: React.FC<PackageBuilderProps> = ({ service, onPackageSelect }) => {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
  const [quantities, setQuantities] = useState<OptionQuantity>({});
  const [total, setTotal] = useState(service.basePrice);
  const [nextDiscount, setNextDiscount] = useState<DiscountTier | null>(null);
  const [activePackage, setActivePackage] = useState<string | null>(null);

  const calculateTotal = (options: Set<string>, optionQuantities: OptionQuantity) => {
    let subtotal = service.basePrice;

    service.options.forEach(group => {
      group.options.forEach(option => {
        if (options.has(option.id)) {
          const quantity = option.allowQuantity ? (optionQuantities[option.id] || 1) : 1;
          subtotal += option.price * quantity;
        }
      });
    });

    const discount = getDiscount(options.size);
    if (discount > 0) {
      subtotal = subtotal * (1 - discount / 100);
    }

    return Math.round(subtotal);
  };

  const getDiscount = (optionCount: number): number => {
    for (let i=DISCOUNT_TIERS.length-1; i>=0; i--) {
      if (optionCount >= DISCOUNT_TIERS[i].minOptions) {
        return DISCOUNT_TIERS[i].percentage;
      }
    }
    return 0;
  };

  const getDiscountColor = (optionCount: number): 'blue' | 'green' | 'magenta' | '' => {
    for (let i=DISCOUNT_TIERS.length-1; i>=0; i--) {
      if (optionCount >= DISCOUNT_TIERS[i].minOptions) {
        return DISCOUNT_TIERS[i].color as 'blue' | 'green' | 'magenta';
      }
    }
    return '';
  };

  const updateNextDiscount = (currentOptionsCount: number) => {
    for (const tier of DISCOUNT_TIERS) {
      if (currentOptionsCount < tier.minOptions) {
        setNextDiscount(tier);
        return;
      }
    }
    setNextDiscount(null);
  };

  const handleOptionChange = (groupId: string, optionId: string, type: 'single' | 'multiple') => {
    const newSelected = new Set(selectedOptions);

    if (type === 'single') {
      service.options
        .find(g => g.id === groupId)
        ?.options.forEach(opt => {
        newSelected.delete(opt.id);
      });
    }

    if (newSelected.has(optionId)) {
      newSelected.delete(optionId);
      const newQuantities = { ...quantities };
      delete newQuantities[optionId];
      setQuantities(newQuantities);
    } else {
      newSelected.add(optionId);
      if (service.options
        .find(g => g.id === groupId)
        ?.options.find(o => o.id === optionId)
        ?.allowQuantity) {
        setQuantities(prev => ({ ...prev, [optionId]: 1 }));
      }
    }

    let matchingPackage = null;
    for (const pkg of service.packages) {
      if (pkg.preselectedOptions &&
        pkg.preselectedOptions.length === newSelected.size &&
        pkg.preselectedOptions.every(opt => newSelected.has(opt))) {
        matchingPackage = pkg.name;
        break;
      }
    }

    setActivePackage(matchingPackage);
    onPackageSelect(matchingPackage);
    setSelectedOptions(newSelected);
    setTotal(calculateTotal(newSelected, quantities));
    updateNextDiscount(newSelected.size);
  };

  const handleQuantityChange = (optionId: string, delta: number) => {
    const option = service.options
      .flatMap(group => group.options)
      .find(opt => opt.id === optionId);

    if (!option) return;

    const currentQuantity = quantities[optionId] || 1;
    const newQuantity = Math.max(1, Math.min(currentQuantity + delta, option.maxQuantity || 99));

    setQuantities(prev => ({ ...prev, [optionId]: newQuantity }));
    setTotal(calculateTotal(selectedOptions, { ...quantities, [optionId]: newQuantity }));
  };

  const handlePackageSelect = (packageName: string) => {
    const pkg = service.packages.find(p => p.name === packageName);
    if (pkg?.preselectedOptions) {
      const newSelected = new Set(pkg.preselectedOptions);
      const newQuantities: OptionQuantity = {};
      pkg.preselectedOptions.forEach(optionId => {
        const option = service.options
          .flatMap(group => group.options)
          .find(opt => opt.id === optionId);
        if (option?.allowQuantity) {
          newQuantities[optionId] = 1;
        }
      });

      setSelectedOptions(newSelected);
      setQuantities(newQuantities);
      setTotal(calculateTotal(newSelected, newQuantities));
      updateNextDiscount(newSelected.size);
      setActivePackage(packageName);
      onPackageSelect(packageName);
    }
  };

  useEffect(() => {
    updateNextDiscount(selectedOptions.size);
  }, []);

  const currentDiscount = getDiscount(selectedOptions.size);
  const discountColor = getDiscountColor(selectedOptions.size);

  return (
    <div className="space-y-8">
      {/* Package Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Quick Package Selection</h3>
        <div className="flex flex-wrap gap-4">
          {service.packages.map((pkg, index) => {
            const discountPercentage = index === 1 ? 5 : index === 2 ? 10 : 0;
            const ribbonColor = index === 1 ? 'blue' : index === 2 ? 'green' : 'magenta';

            return (
              <div key={pkg.name} className="relative">
                {discountPercentage > 0 && (
                  <DiscountRibbon percentage={discountPercentage} color={ribbonColor} />
                )}
                <button
                  onClick={() => handlePackageSelect(pkg.name)}
                  className={`px-4 py-2 border-2 rounded-md transition-colors ${
                    activePackage === pkg.name
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-900 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  {pkg.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg flex items-center text-sm">
        <Package className="w-5 h-5 mr-2 text-gray-600" />
        <span>
          {activePackage
            ? <span>Selected Package: <strong>{activePackage}</strong></span>
            : selectedOptions.size > 0
              ? <span className="text-gray-600">Custom Configuration</span>
              : <span className="text-gray-600">Select options or choose a package above</span>
          }
        </span>
      </div>

      <div className="space-y-8">
        {service.options.map((group) => (
          <OptionGroup
            key={group.id}
            group={group}
            selectedOptions={selectedOptions}
            quantities={quantities}
            onOptionChange={handleOptionChange}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>

      {/* Price Summary */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="space-y-4">
          {nextDiscount && (
            <div
              className="flex items-center text-sm p-3 rounded-md"

            >
              <AlertCircle className="w-5 h-5 mr-2" />
              <span> Add {nextDiscount.minOptions - selectedOptions.size} more options to unlock a </span>
              <span style={{
                color: colorMap[nextDiscount.color],
                marginLeft: '3px'
              }}
              > {nextDiscount.percentage} % discount!</span>
            </div>
          )}

          <div className="flex justify-between items-center">
            <span className="text-lg">Total Price:</span>
            <div className="text-right">
              {currentDiscount > 0 && discountColor && (
                <span
                  className="block text-sm mb-1"
                  style={{ color: colorMap[discountColor] }}
                >
                  {currentDiscount}% discount applied
                </span>
              )}
              <span className="text-2xl font-semibold">${total}</span>
            </div>
          </div>

          <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageBuilder;