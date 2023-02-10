import React from 'react'
import UserList from './features/users/UserList'

const App = () => {
  return (
    <div className='container mx-auto px-2 pt-10 md:pt-32 md:pb-23'>
    <h1 className='text-center font-bold text-2xl text-gray-800'>CRUD With REDUX TOOLKIT</h1>
          <UserList />
    </div>
  )
}

export default App