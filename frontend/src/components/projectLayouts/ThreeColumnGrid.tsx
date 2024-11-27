import React from 'react';
import { PhotoProject } from '../../../../shared/types';

interface ThreeColumnGridProps {
  project: PhotoProject;
}

const ThreeColumnGrid: React.FC<ThreeColumnGridProps> = ({ project }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {project.allImages.map((image, index) => (
        <div key={index} className="group flex items-center">
          <div className="overflow-hidden rounded-lg w-full">
            <img
              src={image.url}
              alt={`${project.title} image ${index + 1}`}
              className="w-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeColumnGrid;