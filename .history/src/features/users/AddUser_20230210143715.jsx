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
    const handleAddUser = () => {
        setValues
    }
    
  return (
      <div className='mt-10 max-w mx-auto'>
          <TextField
              label="name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
          />
          <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'jhondoe@mail.com' }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser
