import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter } from 'lucide-react';
import { products } from './shopData';
import { Product, ProductType, PRODUCT_TYPE_LABELS } from '../../types/types.ts';
import ProductCard from '../../components/productCard/ProductCard';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedTypes, setSelectedTypes] = useState<Set<ProductType>>(new Set());

  // Initialize filters from URL
  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      const types = typeParam.split(',') as ProductType[];
      setSelectedTypes(new Set(types));
    } else {
      setSelectedTypes(new Set());
    }
  }, [searchParams]);

  // Update filtered products when filters change
  useEffect(() => {
    let filtered = products;
    if (selectedTypes.size > 0) {
      filtered = filtered.filter(product => selectedTypes.has(product.type));
    }
    setFilteredProducts(filtered);
  }, [selectedTypes]);

  const toggleType = (type: ProductType) => {
    const newTypes = new Set(selectedTypes);
    if (newTypes.has(type)) {
      newTypes.delete(type);
    } else {
      newTypes.add(type);
    }
    setSelectedTypes(newTypes);

    // Update URL
    if (newTypes.size > 0) {
      setSearchParams({ type: Array.from(newTypes).join(',') });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">Shop</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my collection of photography zines, fine art prints, and digital wallpapers.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center text-gray-600">
              <Filter className="w-5 h-5 mr-2" />
              <span>Filter by:</span>
            </div>
            {Object.entries(PRODUCT_TYPE_LABELS).map(([type, label]) => (
              <button
                key={type}
                onClick={() => toggleType(type as ProductType)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  selectedTypes.has(type as ProductType)
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'border-gray-300 hover:border-gray-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found with the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;