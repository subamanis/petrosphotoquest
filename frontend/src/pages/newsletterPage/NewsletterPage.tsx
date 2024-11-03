import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Camera, Star, AlertCircle } from 'lucide-react';
import NewsletterSubscribe from '../../components/newsletter/NewsletterSubscribe';
import NewsletterUnsubscribe from "../../components/newsletter/NewsletterUnsubscribe";


const NewsletterPage = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');

  if (mode === 'unsubscribe') {
    return <NewsletterUnsubscribe />;
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Camera className="w-12 h-12 mx-auto mb-6 text-gray-900" />
          <h1 className="text-4xl font-light mb-6">Photography Newsletter</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our community of photography enthusiasts and get exclusive benefits available only to subscribers.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <div>
              <h2 className="text-2xl font-light mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Subscriber Benefits
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Early access to new products and collections
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Exclusive subscriber-only discounts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Priority booking for events and workshops
                </li>
              </ul>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d"
                alt="Photography Newsletter"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <NewsletterSubscribe />

          <p className="text-center text-sm text-gray-500 mt-8">
            By subscribing, you agree to receive email communications.
            You can unsubscribe at any time. Your information will never be shared.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;