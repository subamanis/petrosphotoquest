import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useRecaptcha } from '../../hooks/useRecaptcha';

interface SubscriptionPreferences {
  newCollections: boolean;
  discounts: boolean;
  events: boolean;
}

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState<SubscriptionPreferences>({
    newCollections: true,
    discounts: true,
    events: true
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { executeRecaptcha, isActive } = useRecaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const token = await executeRecaptcha('newsletter_subscribe');
      if (!token) {
        throw new Error('reCAPTCHA verification failed');
      }

      // Simulate API call with reCAPTCHA token
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const handlePreferenceChange = (key: keyof SubscriptionPreferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (status === 'success') {
    return (
      <section className="py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <Send className="w-12 h-12 mx-auto mb-4 text-gray-900" />
          <h3 className="text-2xl font-light mb-2">Thank you for subscribing!</h3>
          <p className="text-gray-600">
            You'll receive updates about your selected preferences. As a subscriber, you now have access to exclusive discounts and early access to new content.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-light mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to receive updates and get access to exclusive subscriber discounts and early access to new content.
        </p>

        <form onSubmit={handleSubmit} className="space-y-14">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>

          <div className="space-y-3 text-left">
            <p className="text-sm text-gray-600 mb-2">I would like to receive emails about:</p>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={preferences.newCollections}
                onChange={() => handlePreferenceChange('newCollections')}
                className="rounded border-gray-300 text-gray-900 focus:ring-gray-900"
              />
              <span>First look at new photo collections</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={preferences.discounts}
                onChange={() => handlePreferenceChange('discounts')}
                className="rounded border-gray-300 text-gray-900 focus:ring-gray-900"
              />
              <span>Discounts on products or services</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={preferences.events}
                onChange={() => handlePreferenceChange('events')}
                className="rounded border-gray-300 text-gray-900 focus:ring-gray-900"
              />
              <span>Event invitations and updates</span>
            </label>
          </div>

          {isActive && (
            <p className="text-xs text-gray-500 text-center">
              This site is protected by reCAPTCHA and the Google{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
                Terms of Service
              </a>{' '}
              apply.
            </p>
          )}
        </form>

        {status === 'error' && (
          <p className="mt-4 text-red-500 text-sm">{errorMessage}</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSubscribe;