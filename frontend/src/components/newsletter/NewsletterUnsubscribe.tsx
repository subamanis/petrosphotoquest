import { useState } from 'react';
import { Camera, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsletterUnsubscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-12">
        <div className="max-w-xl mx-auto px-4 text-center">
          <Camera className="w-12 h-12 mx-auto mb-4 text-gray-900" />
          <h3 className="text-2xl font-light mb-2">You've been unsubscribed</h3>
          <p className="text-gray-600">
            We're sorry to see you go. You can always{' '}
            <Link to="/newsletter?mode=subscribe" className="text-gray-900 hover:underline">
              subscribe
            </Link>{' '}
            again if you change your mind.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Camera className="w-12 h-12 mx-auto mb-6 text-gray-900" />
          <h1 className="text-4xl font-light mb-6">Unsubscribe from Newsletter</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're sorry to see you go. By unsubscribing, you'll no longer receive:
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <div className="mb-8">
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                Early access to new collections and products
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

          <form onSubmit={handleUnsubscribe} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm your email address to unsubscribe
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400"
            >
              {status === 'submitting' ? 'Processing...' : 'Unsubscribe'}
            </button>
          </form>

          {status === 'error' && (
            <div className="mt-4 flex items-center text-red-500 text-sm">
              <AlertCircle className="w-4 h-4 mr-2" />
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterUnsubscribe;