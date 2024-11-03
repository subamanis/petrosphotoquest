import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProject } from '../../types/types';

interface ProjectPreviewSimpleProps {
  project: PhotoProject;
  textColor?: string;
}

const ProjectPreviewSimple: React.FC<ProjectPreviewSimpleProps> = ({
                                                                     project,
                                                                     textColor = 'white'
                                                                   }) => {
  return (
    <Link to={`/projects/${project.id}`} className="block">
      <div className="relative group overflow-hidden rounded-lg">
        {/* Image */}
        <div className="aspect-[4/3] relative">
          <img
            src={project.featuredImages[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        </div>

        {/* Title */}
        <div
          className="absolute top-0 left-0 right-0 p-6"
          style={{ color: textColor }}
        >
          <h3 className="text-2xl font-light">{project.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectPreviewSimple;