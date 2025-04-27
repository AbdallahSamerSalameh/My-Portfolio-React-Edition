import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 transition-transform hover:scale-105">
      <div className="p-4">
        <h5 className="text-lg md:text-xl font-medium mb-2">{title}</h5>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
      </div>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      </a>
    </div>
  );
};

export default ProjectCard;