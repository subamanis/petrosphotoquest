import React from 'react';

const ServiceCard = ({ title, description, image }: { title: string; description: string; image: string }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
    <div className="aspect-video overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      title: "Wedding Photography",
      description: "Capturing your special day with a perfect blend of candid moments and artistic portraits.",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80"
    },
    {
      title: "Portrait Sessions",
      description: "Professional portraits that capture your personality and tell your unique story.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      title: "Commercial Photography",
      description: "High-quality commercial photography for your business needs and brand identity.",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80"
    },
    {
      title: "Event Coverage",
      description: "Comprehensive event coverage ensuring no meaningful moment goes uncaptured.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-12">
      {/* Services Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-light mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Professional photography services tailored to your needs. Each service is customizable
          to ensure we capture your vision perfectly.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Booking Section */}
      <div className="mt-20 bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Ready to Book?</h2>
          <p className="text-gray-600 mb-8">
            Let's discuss your photography needs and create a custom package that's perfect for you.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;