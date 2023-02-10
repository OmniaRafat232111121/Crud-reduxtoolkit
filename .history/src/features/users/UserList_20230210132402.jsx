import React from 'react'

const UserList = () => {
   
    const renderUser = () => users.map(user => {
        <div className='flex items-center justify-between bg-gray-500'>
            <div>
                <h3>{user.name}</h3>
                <span>{ user.email}</span>
            </div>

            <div>
                
            </div>
        </div>
   })
  return (
      <div className='grid gap-5 md:grid-col-2'>
          {users.length !==null  ? renderUser() :
              <p className='text-center col-span-4  text-gray-800 font-semibold'>
                  No User
                  
              </p>
          }
      
    </div>
  )
}

export default UserList
