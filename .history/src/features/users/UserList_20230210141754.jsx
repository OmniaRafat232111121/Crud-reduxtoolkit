import React from 'react'

const UserList = () => {
    const users = [
        { id: '2', name: 'omnia', email: 'omniarafat2321@gmail.com' },
        { id: '1', name: 'omnia', email: 'omniarafat2321@gmail.com' },
        
    ];
    const renderUser = () => users.map(user => {
        <div className='flex items-center justify-between bg-gray-800'>
            
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
