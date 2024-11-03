import React, { useState } from 'react';
import { Send } from 'lucide-react';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <section className="py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <Send className="w-12 h-12 mx-auto mb-4 text-gray-900" />
          <h3 className="text-2xl font-light mb-2">Thank you for subscribing!</h3>
          <p className="text-gray-600">
            You'll receive updates about new projects, photography tips, and exclusive content.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-light mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to receive updates about new projects, photography tips, and exclusive content.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
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
        </form>

        {status === 'error' && (
          <p className="mt-4 text-red-500 text-sm">{errorMessage}</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSubscribe;