import React from 'react';
import { PhotoProject } from '../../../../shared/types';

interface HorizontalScrollPairsProps {
  project: PhotoProject;
}

const HorizontalScrollPairs: React.FC<HorizontalScrollPairsProps> = ({ project }) => {
  const pairs = project.allImages.reduce((acc: any[], curr, i) => {
    if (i % 2 === 0) {
      acc.push([curr]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, []);

  return (
    <div className="overflow-x-auto pb-6">
      <div className="flex gap-24">
        {pairs.map((pair, pairIndex) => (
          <div key={pairIndex} className="flex-none flex gap-4 first:pl-4 last:pr-4">
            {pair.map((image, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={`${project.title} image ${pairIndex * 2 + index + 1}`}
                    className="max-h-[80vh] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollPairs;