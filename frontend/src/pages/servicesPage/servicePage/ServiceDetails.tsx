import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ChevronDown } from 'lucide-react';
import { services } from '../servicesData.ts';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">Service not found</h2>
          <button
            onClick={() => navigate('/services')}
            className="text-gray-600 hover:text-gray-900"
          >
            Return to services
          </button>
        </div>
      </div>
    );
  }

  const allImages = showMore
    ? [...service.gallery, ...service.extraGallery]
    : service.gallery;

  return (
    <div className="py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <button
          onClick={() => navigate('/services')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </button>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-light mb-6">{service.title}</h1>
          <p className="text-lg text-gray-600 whitespace-pre-line">
            {service.longDescription}
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="text-2xl font-light mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allImages.map((image, index) => (
            <div key={index} className="group relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src={image.url}
                  alt={image.caption || `${service.title} image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {image.caption && (
                <p className="mt-2 text-sm text-gray-600">{image.caption}</p>
              )}
            </div>
          ))}
        </div>
        {!showMore && service.extraGallery.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowMore(true)}
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              Load More
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        )}
      </div>

      {/* Highlights */}
      <div className="bg-gray-50 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-light mb-8 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {service.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <Check className="w-5 h-5 text-gray-900 mr-2 flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-light mb-8 text-center">Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 ${
                pkg.isPopular ? 'border-2 border-gray-900' : ''
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gray-900 text-white text-sm px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <p className="text-3xl font-light mb-6">{pkg.price}</p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-gray-900 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50 mt-6">
                <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;