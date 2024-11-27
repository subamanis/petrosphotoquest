import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Monitor } from 'lucide-react';
import { RelatedProduct } from '../../../../shared/types';
import { useTranslation } from '../../hooks/useTranslation';

interface RelatedProductsProps {
  products: RelatedProduct[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  const { t } = useTranslation();

  if (!products?.length) return null;

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-medium mb-4">{t('projects.related.title')}</h3>
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
                {product.type === 'zine' ? t('projects.related.zine') : t('projects.related.wallpaper')}
              </p>
              <p className="text-sm text-gray-600">
              {product.type === 'zine'
                  ? t('projects.related.zineDescription')
                  : t('projects.related.wallpaperDescription')}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;