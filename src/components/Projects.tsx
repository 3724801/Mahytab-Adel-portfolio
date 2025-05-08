import React from 'react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { CategoryFilter } from './CategoryFilter';
import type { CategoryId } from '../data/categories';

export default function Projects() {
  const [activeCategory, setActiveCategory] = React.useState<CategoryId>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Featured Projects</h2>
        <CategoryFilter 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}