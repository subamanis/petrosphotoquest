import React, { useState, useEffect, useCallback } from 'react';
import {Link} from "react-router-dom";
import ProjectPreviewSimple from "../../components/projectViewSimple/ProjectViewSimple.tsx";
import {projects} from "../projectsPage/projects.ts";

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    '/images/hero-1.jpg',
    '/images/hero-2.jpg',
    '/images/hero-3.jpg'
  ];

  const startSlideTimer = useCallback(() => {
    if (heroImages.length <= 1) return;

    return setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  }, []);

  useEffect(() => {
    const timer = startSlideTimer();
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [startSlideTimer]);

  // TODO: fix bug with carousel not resting interval
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    // Clear existing interval and start a new one
    const timer = startSlideTimer();
    return () => {
      if (timer) clearInterval(timer);
    };
  };

  // Get first three projects for featured work
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={heroImages[currentImageIndex]}
          alt={`Hero photography ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-700"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80';
          }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-light mb-4">Capturing Moments</h1>
            <p className="text-xl tracking-wide">Through the lens of artistic expression</p>
          </div>
        </div>
        {/* Image Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-light mb-8 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectPreviewSimple
              key={project.id}
              project={project}
              textColor="#ffffff"
            />
          ))}
        </div>
      </section>

      {/* Services Promotion */}
      <section className="bg-[#2e2e2e] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?auto=format&fit=crop&q=80"
                alt="Professional photography services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light">Professional Services</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                From intimate weddings to large corporate events, I offer a range of professional
                photography services tailored to your specific needs. Let's create something
                extraordinary together.
              </p>
              <div className="space-y-4 flex flex-col">
                <div className="text-gray-300">
                  <span className="block mb-2">Available for:</span>
                  <ul className="grid grid-cols-2 gap-2">
                    <li>• Weddings / Christenings</li>
                    <li>• Portraits</li>
                    <li>• Corporate Events</li>
                    <li>• Product photography</li>
                  </ul>
                </div>
                <span className="text-gray-300">and more...</span>
                <Link
                  to="/services"
                  className="inline-block border border-white px-8 py-3 mt-12 hover:bg-white hover:text-[#2e2e2e] transition-colors w-fit"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light">About Me</h2>
              <p className="text-gray-600 leading-relaxed">
                With over a decade of experience in professional photography, I specialize in capturing
                the essence of moments that tell your unique story. My approach combines technical
                expertise with artistic vision to create compelling visual narratives.
              </p>
            </div>
            <div className="aspect-square">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80"
                alt="About section"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;