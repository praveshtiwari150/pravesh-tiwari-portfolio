import React from 'react';
import { projects } from '../../utils/info';
import { useSelector } from 'react-redux';
const ProjectsCard = () => {
    const { mode} = useSelector(state => state.theme);
    const temp = projects[1];
  return (
    <div className={`flex flex-col gap-4 justify-start items-center p-4 rounded-sm ${mode === 'dark' ? 'bg-iridium' : 'bg-black/10' } backdrop-blur-sm shadow-sm hover:shadow-xl w-full transition-colors duration-500`}>
      <img 
      src={temp.image}
      className='w-lg h-auto'
      />
      <div href={temp.link} className='text-xl text-tertiary font-semibold text-start hover:cursor-pointer hover:text-green'>{temp.name}</div>
      <div>{temp.details}</div>
      <div>
        {
            temp.technologies.map((tech, index) => <span key={index}>{tech}</span>)
        }
      </div>
      <a href={temp.link}>Website</a>
      <a href={temp.link}>Github</a>
    </div>
  )
}

export default ProjectsCard
