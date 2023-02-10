import React from 'react'
import UserList from './features/users/UserList'

const App = () => {
  return (
    <div className='container mx-auto'>
    <h1 className='text-center font'>CRUD With REDUX TOOLKIT</h1>
          <UserList />
    </div>
  )
}

export default App
