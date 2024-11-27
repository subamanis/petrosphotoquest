import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Monitor } from 'lucide-react';
import { RelatedProduct } from '../../../../shared/types';

interface RelatedProductsProps {
  products: RelatedProduct[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  if (!products?.length) return null;

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-medium mb-4">Related Products</h3>
      <div className="space-y-4">
        {products.map((product, index) => (
          <Link
            key={index}
            to={`/shop/${product.productId}`}
            className="flex items-start p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            {product.type === 'zine' ? (
              <Book className="w-5 h-5 text-gray-600 mt-0.5" />
            ) : (
              <Monitor className="w-5 h-5 text-gray-600 mt-0.5" />
            )}
            <div className="ml-3">
              <p className="font-medium">
                {product.type === 'zine' ? 'Related Zine available' : 'Related Digital Wallpaper Collection available'}
              </p>
              <p className="text-sm text-gray-600">
                {product.type === 'zine'
                  ? 'A physical photo zine that contains images from this collection is available. Check it out now!'
                  : 'A digital wallpaper collection that contains images from this collection is available. Check it out now!'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;