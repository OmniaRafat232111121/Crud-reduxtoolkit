import React from 'react'

const UserList = () => {
    const users = [
        {id:'2',name:'omnia',email'}
    ];
    const renderUser = () => {
        <div>
            <h1>Users Here</h1>
        </div>
    }
  return (
      <div className='grid gap-5 md:grid-col-2'>
          {users.length > 1 ? renderUser() :
              <p className='text-center text-gray-800 font-semibold'>
                  No User
                  
              </p>
          }
      
    </div>
  )
}

export default UserList
