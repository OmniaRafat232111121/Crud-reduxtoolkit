import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {id:'2',name:'omnia rafat',email:'omnia2321@gmail.com'}
];
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        }
            
    
    }
})

export default userSlice.reducer;