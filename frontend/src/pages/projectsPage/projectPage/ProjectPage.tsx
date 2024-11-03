import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../projects.ts';
import { ArrowLeft } from 'lucide-react';
import ThreeColumnGrid from '../../../components/projectLayouts/ThreeColumnGrid';
import TwoColumnGrid from '../../../components/projectLayouts/TwoColumnGrid';
import VerticalScroll from '../../../components/projectLayouts/VerticalScroll';
import HorizontalScrollSingle from '../../../components/projectLayouts/HorizontalScrollSingle';
import HorizontalScrollPairs from '../../../components/projectLayouts/HorizontalScrollPairs';

const layoutMap: { [key: string]: React.ComponentType<{ project: any }> } = {
  'urban-nights': ThreeColumnGrid,
  'mountain-solitude': TwoColumnGrid,
  'mountain-solitude2': VerticalScroll,
  'mountain-solitude3': VerticalScroll,
  'mountain-solitude4': HorizontalScrollSingle,
  'mountain-solitude5': HorizontalScrollPairs,
};

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

  const LayoutComponent = layoutMap[project.id] || ThreeColumnGrid;

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

      {/* Photo Grid with Dynamic Layout */}
      <div className="max-w-7xl mx-auto px-4">
        <LayoutComponent project={project} />
      </div>
    </div>
  );
};

export default ProjectPage;