import { useState } from 'react';
import { Calendar, MapPin, User, Mail, Phone, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BookingDetailsProps {
  onSubmit: (details: BookingFormData) => void;
  isSubmitting?: boolean;
  serviceId: string;
}

export interface BookingFormData {
  date: string;
  location?: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

const getServiceConfig = (serviceId: string) => {
  if (serviceId.includes('wedding')) {
    return {
      requiresLocation: true,
      dateLabel: 'Wedding Date',
      locationLabel: 'Wedding Venue',
      infoLabel: 'Event Information'
    };
  }
  if (serviceId.includes('portrait')) {
    return {
      requiresLocation: false,
      dateLabel: 'Session Date',
      infoLabel: 'Session Information',
      locationLabel: null,
    };
  }
  return {
    requiresLocation: true,
    dateLabel: 'Event Date',
    locationLabel: 'Event Location',
    infoLabel: 'Event Information'
  };
};

const RequiredIndicator = () => (
  <span className="text-red-500 ml-1" aria-label="Required field">*</span>
);

const BookingDetails: React.FC<BookingDetailsProps> = ({ onSubmit, isSubmitting = false, serviceId }) => {
  const serviceConfig = getServiceConfig(serviceId);

  const [formData, setFormData] = useState<BookingFormData>({
    date: '',
    ...(serviceConfig.requiresLocation && { location: '' }),
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [phoneError, setPhoneError] = useState('');

  const validatePhone = (phone: string) => {
    const phoneRegex = /^(\+\d{1,3})?[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const sanitizedValue = value.replace(/[^\d\s+]/g, '');
      if (sanitizedValue !== value) return;

      setPhoneError(validatePhone(sanitizedValue) ? '' : 'Please enter a valid phone number (10 digits with optional country code)');
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      setPhoneError('Please enter a valid phone number (10 digits with optional country code)');
      return;
    }

    onSubmit(formData);
  };

  // Calculate minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-medium mb-6">Booking Details</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Event/Session Details Section */}
          <div className="space-y-6">
            <h4 className="font-medium text-gray-700">{serviceConfig.infoLabel}</h4>

            <div className="space-y-2">
              <label className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                {serviceConfig.dateLabel}
                <RequiredIndicator />
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={minDate}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            {serviceConfig.requiresLocation && (
              <div className="space-y-2">
                <label className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {serviceConfig.locationLabel}
                  <RequiredIndicator />
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder={`Enter ${serviceConfig.locationLabel!.toLowerCase()}`}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
            )}
          </div>

          {/* Contact Details Section */}
          <div className="space-y-6">
            <h4 className="font-medium text-gray-700">Contact Information</h4>

            <div className="space-y-2">
              <label className="flex items-center text-sm text-gray-600">
                <User className="w-4 h-4 mr-2" />
                Full Name
                <RequiredIndicator />
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                Email Address
                <RequiredIndicator />
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                Phone Number
                <RequiredIndicator />
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number (e.g., +301234567890)"
                required
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
                  phoneError ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="space-y-2">
          <label className="block text-sm text-gray-600">
            Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any special requests or additional information..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        {/* Important Notice */}
        <div className="flex items-start p-4 bg-gray-50 rounded-md text-sm">
          <AlertCircle className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
          <div className="text-gray-600">
            <p className="mb-2">
              Please ensure all details are accurate. After submission, our team will review your booking
              and contact you within 24-48 hours to confirm availability and discuss any specific requirements.
              You will receive a confirmation email with the services you have requested.
            </p>
            <p>
              Alternatively, you can{' '}
              <Link to="/contact" className="text-gray-900 hover:underline">
                contact me
              </Link>{' '}
              for any questions or details.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !!phoneError}
          className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400"
        >
          {isSubmitting ? 'Processing...' : 'Submit Booking Request'}
        </button>
      </form>
    </div>
  );
};

export default BookingDetails;