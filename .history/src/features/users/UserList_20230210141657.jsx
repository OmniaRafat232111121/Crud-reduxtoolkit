import React from 'react'

const UserList = () => {
    const users = [];
    const renderUser = () => users.map(user => {
        <div className='flex items-center justify-between bg-gray-80'>
            
        </div>
    })
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
