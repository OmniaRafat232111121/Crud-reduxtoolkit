import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { addUser} from './userSlice'
const AddUser = () => {
    const dispatch = useDispatch();
    
  return (
      <div className='mt-10 max-w mx-auto'>
          <TextField
          />
      
    </div>
  )
}

export default AddUser
