import React from 'react'
import Card from './Card';

const CardContainer = ({arrayObj, cardTitle}) => {
  return (
    <div className='w-full px-4'>
        <div className='text-xl font-semibold text-tertiary mb-4'>{cardTitle}</div>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center'>
        {
          arrayObj.map((item, index) => (
            <Card
              key={index}
              title={item.name}
              path={item.path}
            />
          )) 
        }
        </div>
      </div>
  )
}

export default CardContainer
