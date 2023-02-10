import React from 'react'

const UserList = () => {
    const users=[]
  return (
      <div className='grid gap-5 md:grid-col-2'>
          {users.length > 1 ? renderUser() :
              <p className='text-center text-gray-800'>
                  
              </p>
          }
      
    </div>
  )
}

export default UserList
