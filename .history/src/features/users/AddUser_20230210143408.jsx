import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { addUser} from './userSlice'
const AddUser = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        name: '',
        email:''
    })
    
  return (
      <div className='mt-10 max-w mx-auto'>
          <TextField
              label="name"
              value={values.name}
              onChange={(e)=>setValues({...values})}
          />
      
    </div>
  )
}

export default AddUser
