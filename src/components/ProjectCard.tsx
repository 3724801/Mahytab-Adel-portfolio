import React from 'react';
import { Github } from 'lucide-react';
import { ProjectType } from '../types';
import { ProjectIcon } from './ProjectIcon';

interface ProjectCardProps {
  project: ProjectType;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <ProjectIcon name={project.icon} className={`w-5 h-5 ${project.iconColor}`} />
          <h3 className="text-xl font-semibold">{project.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-sm rounded-full"
              style={{ 
                backgroundColor: `${tag.color}20`, 
                color: tag.color 
              }}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={project.githubLink} className="flex items-center gap-1 text-gray-600 hover:text-black">
            <Github size={18} />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}