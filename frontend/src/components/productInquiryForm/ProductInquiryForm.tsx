import { useState } from 'react';
import { X } from 'lucide-react';
import { Product, PrintSize } from '../../types/types.ts';

interface ProductInquiryFormProps {
  product: Product;
  selectedSize?: PrintSize;
  isFramed?: boolean;
  onClose: () => void;
}

interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ProductInquiryForm: React.FC<ProductInquiryFormProps> = ({
                                                                 product,
                                                                 selectedSize,
                                                                 isFramed,
                                                                 onClose
                                                               }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getProductDetails = () => {
    if (product.type === 'print' && selectedSize) {
      return `${product.title} - ${selectedSize.name} (${selectedSize.dimensions})${isFramed ? ' with frame' : ''}`;
    }
    return product.title;
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center">
            <h3 className="text-2xl font-light mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              I've received your inquiry and will get back to you within 24-48 hours to discuss
              availability, shipping options, and payment details.
            </p>
            <button
              onClick={onClose}
              className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <h3 className="text-2xl font-light mb-2">Product Inquiry</h3>
          <p className="text-gray-600">
            {getProductDetails()}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone (optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="Any specific questions or requirements?"
            />
          </div>

          <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
            After submitting this form, I'll contact you within 24-48 hours to discuss:
            <ul className="list-disc ml-5 mt-2">
              <li>Product availability</li>
              <li>Shipping options and costs</li>
              <li>Payment methods</li>
              {product.type === 'print' && <li>Custom margin adjustments if needed</li>}
            </ul>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400"
          >
            {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductInquiryForm;