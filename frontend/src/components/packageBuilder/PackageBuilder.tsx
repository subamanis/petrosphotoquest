import React, { useState, useEffect } from 'react';
import {Check, AlertCircle, Package} from 'lucide-react';
import { Service, ServiceOptionGroup } from '../../types/types.ts';

interface PackageBuilderProps {
  service: Service;
  onPackageSelect: (packageName: string) => void;
}

interface DiscountTier {
  minOptions: number;
  percentage: number;
}

const DISCOUNT_TIERS: DiscountTier[] = [
  { minOptions: 8, percentage: 15 },
  { minOptions: 5, percentage: 10 },
  { minOptions: 3, percentage: 5 },
];

const PackageBuilder: React.FC<PackageBuilderProps> = ({ service, onPackageSelect }) => {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
  const [total, setTotal] = useState(service.basePrice);
  const [nextDiscount, setNextDiscount] = useState<DiscountTier | null>(null);
  const [activePackage, setActivePackage] = useState<string | null>(null);

  const calculateTotal = (options: Set<string>) => {
    let subtotal = service.basePrice;

    service.options.forEach(group => {
      group.options.forEach(option => {
        if (options.has(option.id)) {
          subtotal += option.price;
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
    for (const tier of DISCOUNT_TIERS) {
      if (optionCount >= tier.minOptions) {
        return tier.percentage;
      }
    }
    return 0;
  };

  const updateNextDiscount = (currentOptionsCount: number) => {
    for (const tier of DISCOUNT_TIERS) {
      if (currentOptionsCount < tier.minOptions) {
        setNextDiscount({
          minOptions: tier.minOptions,
          percentage: tier.percentage
        });
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
    } else {
      newSelected.add(optionId);
    }

    // Check if the new selection matches any package
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
    setTotal(calculateTotal(newSelected));
    updateNextDiscount(newSelected.size);
  };

  const handlePackageSelect = (packageName: string) => {
    const pkg = service.packages.find(p => p.name === packageName);
    if (pkg?.preselectedOptions) {
      const newSelected = new Set(pkg.preselectedOptions);
      setSelectedOptions(newSelected);
      setTotal(calculateTotal(newSelected));
      updateNextDiscount(newSelected.size);
      setActivePackage(packageName);
      onPackageSelect(packageName);
    }
  };

  useEffect(() => {
    updateNextDiscount(selectedOptions.size);
  }, []);

  const currentDiscount = getDiscount(selectedOptions.size);

  return (
    <div className="space-y-8">
      {/* Package Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Quick Package Selection</h3>
        <div className="flex flex-wrap gap-4">
          {service.packages.map((pkg) => (
            <button
              key={pkg.name}
              onClick={() => handlePackageSelect(pkg.name)}
              className={`px-4 py-2 border-2 rounded-md transition-colors ${
                activePackage === pkg.name
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-900 hover:bg-gray-900 hover:text-white'
              }`}
            >
              {pkg.name}
            </button>
          ))}
        </div>
      </div>

      {/* Current Selection Status */}
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

      {/* Options Groups */}
      <div className="space-y-8">
        {service.options.map((group) => (
          <div key={group.id} className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">{group.name}</h3>
              {group.description && (
                <p className="text-sm text-gray-600 mt-1">{group.description}</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.options.map((option) => (
                <label
                  key={option.id}
                  className="relative flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <div className="flex items-center h-5">
                    <input
                      type={group.type === 'single' ? 'radio' : 'checkbox'}
                      name={group.id}
                      checked={selectedOptions.has(option.id)}
                      onChange={() => handleOptionChange(group.id, option.id, group.type)}
                      className="h-4 w-4 border-gray-300 text-gray-900 focus:ring-gray-900"
                    />
                  </div>
                  <div className="ml-3">
                    <span className="block font-medium text-gray-900">
                      {option.label}
                    </span>
                    <span className="block text-sm text-gray-500">
                      +${option.price}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Price Summary */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="space-y-4">
          {nextDiscount && (
            <div className="flex items-center text-sm text-gray-600 bg-blue-50 p-3 rounded-md">
              <AlertCircle className="w-5 h-5 mr-2 text-blue-500" />
              Add {nextDiscount.minOptions - selectedOptions.size} more options to unlock a {nextDiscount.percentage}% discount!
            </div>
          )}

          <div className="flex justify-between items-center">
            <span className="text-lg">Total Price:</span>
            <div className="text-right">
              {currentDiscount > 0 && (
                <span className="block text-sm text-green-600 mb-1">
                  {currentDiscount}% discount applied
                </span>
              )}
              <span className="text-2xl font-semibold">${total}</span>
            </div>
          </div>

          <button
            className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageBuilder;