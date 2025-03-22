import React from 'react';
import { projects } from '../../utils/info';
import { useSelector } from 'react-redux';

const ProjectsCard = ({ project }) => {
  const { mode } = useSelector(state => state.theme);

  return (
    <div className={`flex flex-col gap-4 justify-center items-center rounded-lg overflow-hidden ${mode === 'dark' ? 'bg-iridium' : 'bg-black/10'} backdrop-blur-sm shadow-sm hover:shadow-xl w-full transition-all duration-500 ease-in-out`}>
      {/* Immersive Image */}
      <img
        src={project.image}
        alt={project.name}
        className='w-full h-48 object-cover' // Fixed height for consistency
      />

      {/* Project Name */}
      <a href={project.link} target='_blank' rel="noopener noreferrer" className='text-xl text-tertiary font-semibold text-center hover:cursor-pointer hover:underline px-4'>
        {project.name}
      </a>

      {/* Project Details */}
      <div className='w-full text-justify text-sm md:text-base px-4'>
        {project.details}
      </div>

      {/* Tech Stack */}
      <div className='w-full px-4'>
        <span className='text-tertiary font-semibold text-lg'>Tech Stack:</span>
        <div className='flex flex-wrap gap-2 mt-2'>
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className='text-highlight font-semibold bg-black/20 px-3 py-1 rounded-full text-sm'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Github Button */}
      <a
        href={project.link}
        target='_blank'
        rel="noopener noreferrer"
        className='bg-tertiary w-full max-w-md p-3 rounded-lg text-center text-white font-semibold hover:bg-tertiary/90 transition-colors duration-300 mt-4 mx-12 mb-4 hover:outline-1'
      >
        View on Github
      </a>
    </div>
  );
};

export default ProjectsCard;