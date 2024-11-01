import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ChevronDown } from 'lucide-react';
import { services } from '../servicesData.ts';
import ConsentNotice from "../../../components/consentNotice/ConsentNotice.tsx";
import PackageBuilder from "../../../components/packageBuilder/PackageBuilder.tsx";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

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

      {/* Package Builder */}
      <div className="max-w-[62rem] mx-auto px-12 py-8 mb-12 border-gray-800 border-double border-4">
        <h2 className="text-2xl font-light mb-8 text-center">Build Your Package</h2>
        <PackageBuilder
          service={service}
          onPackageSelect={setSelectedPackage}
        />
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

      {/* Consent Notice */}
      <div className="max-w-3xl mx-auto px-4">
        <ConsentNotice />
      </div>
    </div>
  );
};

export default ServiceDetails;