import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../projects.ts';
import { ArrowLeft } from 'lucide-react';

const ProjectPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find(c => c.id === projectId);

  if (!project) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/projects')}
            className="text-gray-600 hover:text-gray-900"
          >
            Return to projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </button>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-light mb-4">{project.title}</h1>
          <div className="text-gray-600 space-y-4">
            <div className="space-y-1">
              <p>{project.location}</p>
              <p>{project.date}</p>
            </div>
            <p className="text-lg">{project.description}</p>
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.allImages.map((image, index) => (
            <div key={index} className="group relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src={image.url}
                  alt={image.caption || `${project.title} image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {image.caption && (
                <p className="mt-2 text-sm text-gray-600">{image.caption}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;