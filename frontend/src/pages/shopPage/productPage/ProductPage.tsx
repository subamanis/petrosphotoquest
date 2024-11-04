import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Info } from 'lucide-react';
import { products } from '../shopData';
import { PrintSize } from '../../../types/types.ts';
import ProductInquiryForm from '../../../components/productInquiryForm/ProductInquiryForm.tsx';

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<PrintSize | null>(null);
  const [isFramed, setIsFramed] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="text-gray-600 hover:text-gray-900"
          >
            Return to shop
          </button>
        </div>
      </div>
    );
  }

  const getPrice = () => {
    if (product.price) return product.price;
    if (selectedSize) {
      return isFramed ? selectedSize.framedPrice : selectedSize.basePrice;
    }
    return product.sizes?.[0]?.basePrice || 0;
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate('/shop')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Shop
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.images[currentImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square overflow-hidden rounded-lg ${
                      index === currentImageIndex ? 'ring-2 ring-gray-900' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-light mb-2">{product.title}</h1>
              <p className="text-2xl">€{getPrice()}</p>
            </div>

            <p className="text-gray-600">{product.description}</p>

            {/* Size Selection and Framing Options for Prints */}
            {product.type === 'print' && product.sizes && (
              <div className="space-y-6">
                {/* Size Selection */}
                <div className="space-y-4">
                  <h3 className="font-medium">Select Size</h3>
                  <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md flex items-start">
                    <Info className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <p>
                      Sizes shown include a 2-5cm white margin around the photo.
                      Margin width can be adjusted upon request.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size.name}
                        onClick={() => setSelectedSize(size)}
                        className={`flex justify-between items-center p-3 border rounded-lg hover:border-gray-900 transition-colors ${
                          selectedSize?.name === size.name ? 'border-gray-900' : 'border-gray-200'
                        }`}
                      >
                        <div>
                          <span className="font-medium">{size.name}</span>
                          <span className="text-gray-600 ml-2">({size.dimensions})</span>
                        </div>
                        <span>€{isFramed ? size.framedPrice : size.basePrice}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Framing Option */}
                {product.frameDetails && (
                  <div className="space-y-4">
                    <h3 className="font-medium">Framing Options</h3>
                    <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md flex items-start">
                      <Info className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <p>
                        Frame dimensions are additional to the print size.
                        Frame is {product.frameDetails.color.toLowerCase()} with a thickness of {product.frameDetails.width} per side.
                        You can inquire about custom framing options.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setIsFramed(false)}
                        className={`p-3 border rounded-lg hover:border-gray-900 transition-colors ${
                          !isFramed ? 'border-gray-900' : 'border-gray-200'
                        }`}
                      >
                        Print Only
                      </button>
                      <button
                        onClick={() => setIsFramed(true)}
                        className={`p-3 border rounded-lg hover:border-gray-900 transition-colors ${
                          isFramed ? 'border-gray-900' : 'border-gray-200'
                        }`}
                      >
                        Framed with Glass
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Product Details List */}
            <div className="space-y-4">
              <h3 className="font-medium">Details</h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Inquiry Button */}
            <button
              onClick={() => setShowInquiryForm(true)}
              disabled={product.type === 'print' && !selectedSize}
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Request
            </button>

            {/* Stock Status */}
            {!product.inStock && (
              <p className="text-red-600 text-center">Currently Out of Stock</p>
            )}
          </div>
        </div>
      </div>

      {/* Inquiry Form Modal */}
      {showInquiryForm && (
        <ProductInquiryForm
          product={product}
          selectedSize={selectedSize || undefined}
          isFramed={isFramed}
          onClose={() => setShowInquiryForm(false)}
        />
      )}
    </div>
  );
};

export default ProductPage;