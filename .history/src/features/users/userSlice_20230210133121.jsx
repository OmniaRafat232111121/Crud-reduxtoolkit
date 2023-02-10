import { createSlice } from "@reduxjs/toolkit";
const initialState=[]
const userSlice = createSlice({
    name: 'users',
    initialState,
})

export default userSlice.reducer;