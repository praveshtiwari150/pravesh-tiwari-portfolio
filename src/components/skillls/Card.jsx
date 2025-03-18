import React from 'react'
import { useSelector } from 'react-redux'

const Card = ({path, title}) => {

    const {mode} = useSelector(state => state.theme);

  return (
    <div className={`flex flex-col gap-4 justify-start items-center p-4 rounded-sm ${mode === 'dark' ? 'bg-white/5' : 'bg-black/10' } backdrop-blur-sm shadow-sm hover:shadow-xl w-full transition-colors duration-500`}>
      <img src={path}/>
      <span className='text-secondary font-semibold text-lg'>{title}</span>
    </div>
  )
}

export default Card
