import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { ProjectImage as ProjectImageType } from '../../../../shared/types';

interface ProjectImageProps {
  image: ProjectImageType;
  projectTitle: string;
  index: number;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ image, projectTitle, index }) => {
  return (
    <div className="group relative">
      <div className="aspect-square overflow-hidden rounded-lg">
        <img
          src={image.url}
          alt={image.caption || `${projectTitle} image ${index + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {image.availableAsPrint && (
        <Link
          to={`/shop/${image.printProductId}`}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          title="Available as print"
        >
          <ShoppingBag className="w-5 h-5 text-gray-900" />
        </Link>
      )}
      
      {image.caption && (
        <p className="mt-2 text-sm text-gray-600">{image.caption}</p>
      )}
    </div>
  );
}

export default ProjectImage;