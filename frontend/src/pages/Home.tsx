import React from 'react';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
          alt="Hero photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-light mb-4">Capturing Moments</h1>
            <p className="text-xl tracking-wide">Through the lens of artistic expression</p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-light mb-8 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            'https://images.unsplash.com/photo-1496843916299-590492c751f4?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1469825790477-07f35dfb5246?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1486916856992-e4db22c8df33?auto=format&fit=crop&q=80'
          ].map((image, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden">
              <img
                src={image}
                alt={`Featured work ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg">View Gallery</span>
              </div>
            </div>
          ))}
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
              <button className="border border-gray-900 px-6 py-2 hover:bg-gray-900 hover:text-white transition-colors">
                Learn More
              </button>
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

export default Home;