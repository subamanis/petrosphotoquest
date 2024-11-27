import { useState } from 'react';
import { Instagram, Mail, Phone, Send } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', topic: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex md:flex-row gap-8">
          {/* Contact Information */}
          <div className="flex-[1.4]">
            <div className="mb-12">
              <h1 className="text-4xl font-light mb-6">{t('contact.title')}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('contact.description')}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-light">{t('contact.connect.title')}</h2>
              <div className="space-y-4">
                <a
                  href="tel:+306975676677"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  +30 6975676677
                </a>
                <a
                  href="mailto:contact@petros.photography"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  petrosphotoquest@gmail.com
                </a>
                <a
                  href="https://instagram.com/petrosphotoquest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Instagram className="w-5 h-5 mr-3" />
                  @petrosphotoquest
                </a>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-light">{t('contact.response.title')}</h2>
              <p className="text-gray-600">
                {t('contact.response.text')}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-light mb-6">{t('contact.form.title')}</h2>
            {submitted ? (
              <div className="text-center py-8">
                <div className="mb-4">
                  <Send className="w-12 h-12 text-green-500 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('contact.success.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('contact.success.text')}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {t('contact.success.another')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.topic')}
                  </label>
                  <input
                    type="text"
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    placeholder={t('contact.form.topic.placeholder')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full h-56 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400"
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;