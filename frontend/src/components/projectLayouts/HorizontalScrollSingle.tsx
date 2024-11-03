import React from 'react';
import { PhotoProject } from '../../types/types';

interface HorizontalScrollSingleProps {
  project: PhotoProject;
}

const HorizontalScrollSingle: React.FC<HorizontalScrollSingleProps> = ({ project }) => {
  return (
    <div className="overflow-x-auto pb-6">
      <div className="flex gap-8">
        {project.allImages.map((image, index) => (
          <div key={index} className="group flex-none first:pl-4 last:pr-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={`${project.title} image ${index + 1}`}
                className="max-h-[80vh] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollSingle;