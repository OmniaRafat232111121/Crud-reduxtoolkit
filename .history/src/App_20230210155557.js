import React from 'react'
import UserList from './features/users/UserList'
import { Routes ,Route } from 'react-router-dom'
import AddUser from './features/users/AddUser'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className='container mx-auto px-2 pt-10 md:pt-32 '>
    <h1 className='text-center font-bold text-2xl text-gray-800'>CRUD With REDUX TOOLKIT</h1>
          <Routes>
              <Route path="/" element={<UserList />} />
              <Route path="/add" element={<AddUser />} />
            <Route path="/edit-user/:id" element={<Ed />} />

          </Routes>
          <ToastContainer />
    </div>
  )
}

export default App
