import React from 'react';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'YouTube like Interface',
      description: 'This is not an official project, it was a task to mimic Youtube interface, when I make better projects I will replace them.',
      imageUrl: '/api/placeholder/400/300',
      projectUrl: 'https://abdallahsamersalameh.github.io/YOUTUBE/'
    },
    {
      id: 2,
      title: 'Cake Website',
      description: 'This is not an official project, it was a task to make a simple CakeWebsite interface, when I make better projects I will replace them.',
      imageUrl: '/api/placeholder/400/300',
      projectUrl: 'https://abdallahsamersalameh.github.io/CAKE/'
    },
    {
      id: 3,
      title: 'Twitter post',
      description: 'This is not an official project, it was a task to mimic a Twitter post, when I make better projects I will replace them.',
      imageUrl: '/api/placeholder/400/300',
      projectUrl: 'https://abdallahsamersalameh.github.io/POST/'
    }
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="mb-4">
            Here is some of the projects I made, feel free to browse:
          </p>
          <a 
            href="https://www.figma.com/design/0evAmfPaugSLeh7cYfPxl8/%F0%9F%8E%A8-Personal-Portfolio-Template-(Community)?t=XVgtHcKVHKe8QSIh-0" 
            className="text-white hover:text-green-400 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click to see the Portfolio's Figma Template
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;