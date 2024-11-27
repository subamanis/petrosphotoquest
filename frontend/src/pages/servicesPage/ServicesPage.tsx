import {services} from "./servicesData.ts";
import {Link} from "react-router-dom";
import ConsentNotice from "../../components/consentNotice/ConsentNotice";
import {useEffect, useState} from "react";
import {Service} from "../../../../shared/types.ts";
import { useServiceApi } from "../../services/service.service.ts";

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const serviceApi = useServiceApi();

  useEffect(() => {
    serviceApi.getAll().then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setServices(data);
        });
      } else {
        setError('Failed to load services');
      }
    }).finally(() => {
      setLoading(false);
    });
  }, []);


  return (
    <div className="py-12">
      {/* Services Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-light mb-4">Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Professional photography services tailored to your needs. Each service is customizable
          to ensure we capture your vision perfectly.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.coverImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <ConsentNotice />
      </div>

      {/* Booking Section */}
      <div className="mt-20 bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Custom Request?</h2>
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