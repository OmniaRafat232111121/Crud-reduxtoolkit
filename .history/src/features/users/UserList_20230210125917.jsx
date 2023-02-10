import React from 'react'

const UserList = () => {
    const users = [
        { id: '2', name: 'omnia', email: 'omniarafat2321@gmail.com' },
          { id: '1', name: 'ali', email: 'omniarafat2321@gmail.com' },
        
    ];
    const renderUser = () => {
        <div>
            <h1>Users Here</h1>
        </div>
    }
  return (
      <div className='grid gap-5 md:grid-col-2'>
          {users.length ? renderUser() :
              <p className='text-center col-span-4  text-gray-800 font-semibold'>
                  No User
                  
              </p>
          }
      
    </div>
  )
}

export default UserList
