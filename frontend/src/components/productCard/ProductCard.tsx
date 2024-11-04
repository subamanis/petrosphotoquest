import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/types.ts';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getPriceDisplay = (product: Product) => {
    if (product.price) {
      return `$${product.price}`;
    }
    if (product.sizes) {
      const minPrice = Math.min(...product.sizes.map(s => s.price));
      const maxPrice = Math.max(...product.sizes.map(s => s.price));
      return `$${minPrice} - $${maxPrice}`;
    }
    return '';
  };

  return (
    <Link to={`/shop/${product.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow group-hover:shadow-xl">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-medium">{product.title}</h3>
            <span className="text-lg">{getPriceDisplay(product)}</span>
          </div>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>

          {/* Status Badge */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500 capitalize">{product.type}</span>
            {product.type === 'print' && (
              <span className="text-sm text-gray-500">
                {product.sizes?.length} sizes available
              </span>
            )}
            {!product.inStock && (
              <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">
                Out of Stock
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;