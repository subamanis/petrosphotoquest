import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProject } from '../../types/photoProject';

interface ProjectPreviewDetailedProps {
  project: PhotoProject;
}

export const ProjectPreviewDetailed: React.FC<ProjectPreviewDetailedProps> = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <div className="grid grid-cols-2 gap-0.5 bg-gray-100">
          {project.featuredImages.map((image, index) => (
            <div
              key={index}
              className={`aspect-square overflow-hidden ${
                index === 2 || index === 3 ? 'opacity-90' : ''
              }`}
            >
              <img
                src={image}
                alt={`${project.title} preview ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-light mb-2">{project.title}</h3>
          <div className="text-gray-600 space-y-1">
            <p>{project.location}</p>
            <p>{project.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectPreviewDetailed;