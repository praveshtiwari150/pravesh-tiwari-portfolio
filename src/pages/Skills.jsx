import React from 'react'
import { languages, frontend, backend, databases, tools } from '../utils/info'
import CardContainer from '../components/skillls/CardContainer'

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col justify-center items-center gap-6 md:gap-12  h-auto w-full py-8'>
      <div className='text-3xl font-bold text-highlight'>Skills</div>
      <CardContainer
        arrayObj={languages}
        cardTitle={'Languages'}
      />
      <CardContainer
        arrayObj={frontend}
        cardTitle={'Frontend'}
      />
      <CardContainer
        arrayObj={backend}
        cardTitle={'Backend'}
      />
      <CardContainer
        arrayObj={databases}
        cardTitle={'Database'}
      />
      <CardContainer
        arrayObj={tools}
        cardTitle={'Tools'}
      />
    </div>
  )
}

export default Skills;
