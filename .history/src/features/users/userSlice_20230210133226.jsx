import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        editUser: (state, action) => {
            
    
    }
})

export default userSlice.reducer;