import React from 'react';
import ProjectPreviewDetailed from '../../components/projectPreviewDetailed/ProjectPreviewDetailed.tsx';
import { projects } from './projects.ts';
import { useTranslation } from '../../hooks/useTranslation.ts';

const ProjectsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-light mb-4">{t('projects.title')}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t('projects.description')}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-[100em] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {projects.map((project) => (
            <ProjectPreviewDetailed key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;