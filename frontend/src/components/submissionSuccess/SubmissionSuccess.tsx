import React from 'react';
import { CheckCircle, Mail } from 'lucide-react';

const SubmissionSuccess = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-6">
      <div className="flex justify-center">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-medium">Thank You for Your Interest!</h3>

        <div className="space-y-2 text-gray-600">
          <p>
            Your booking request has been successfully submitted. I appreciate your interest
            in my photography services.
          </p>

          <div className="flex items-center justify-center text-sm mt-4">
            <Mail className="w-4 h-4 mr-2" />
            <p>Check your email for a confirmation of your request details.</p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-600 mt-6">
          <p>
            I will personally review your request and get in touch with you within 24-48 hours
            to discuss the details and confirm the booking. If you have any immediate questions,
            feel free to reach out through the contact page, or email me directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmissionSuccess;