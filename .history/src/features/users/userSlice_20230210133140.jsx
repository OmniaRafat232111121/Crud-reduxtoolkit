import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser:(state,action)
    }
})

export default userSlice.reducer;