import React from 'react'

const TextField = ({label,onChange,value}) => {
  return (
      <div className='flex flex-col'>
          <label className='mb-2 text-gray-800'>{ label}</label>
          
          <input
              onChange={onChange}
              value={value}
              className="bg-gray-200 py-2 px-3 border-2 outline-none"
              {...inputProps}
          />
    </div>
  )
}

export default TextField
