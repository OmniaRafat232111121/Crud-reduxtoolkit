import React, { Children } from 'react'

const Button = ({onClick}) => {
  return (
      <button className='bg-indigo-700 text-white py-2 px-6  my-10 rounded hover:bg-indigo-600' onClick={onClick}>
          {Children}
      </button>
  )
}

export default Button
