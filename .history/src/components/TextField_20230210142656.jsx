import React from 'react'

const TextField = ({label,onChange,value}) => {
  return (
      <div className='flex flex-col'>
          <label className='mb-2 text-gray-800'>{ label}</label>
          
          <input
              onChange={onChange}
          />
    </div>
  )
}

export default TextField
