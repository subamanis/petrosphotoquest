import React from 'react';
import { PhotoProject } from '../../types/types';

interface VerticalScrollProps {
  project: PhotoProject;
}

const VerticalScroll: React.FC<VerticalScrollProps> = ({ project }) => {
  return (
    <div className="space-y-8">
      {project.allImages.map((image, index) => (
        <div key={index} className="group">
          <div className="overflow-hidden rounded-lg">
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

export default VerticalScroll;