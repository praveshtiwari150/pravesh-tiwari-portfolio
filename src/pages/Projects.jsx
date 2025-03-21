import React from 'react'
import ProjectsCard from '../components/projects/ProjectsCard'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col justify-center items-center gap-6 md:gap-12  h-auto w-full py-8 '>
      <div className='text-3xl font-bold text-highlight'>Projects</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center'>
        <ProjectsCard/>
        <ProjectsCard/>
        <ProjectsCard/>
      </div>
      
    </div>
  )
}

export default Projects
