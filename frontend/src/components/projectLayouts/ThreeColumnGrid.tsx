import React from 'react';
import { PhotoProject } from '../../../../shared/types';
import ProjectImage from '../projectImage/ProjectImage';

interface ThreeColumnGridProps {
  project: PhotoProject;
}

const ThreeColumnGrid: React.FC<ThreeColumnGridProps> = ({ project }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {project.allImages.map((image, index) => (
        <ProjectImage
          key={index}
          image={image}
          projectTitle={project.title}
          index={index}
        />
      ))}
    </div>
  );
};

export default ThreeColumnGrid;