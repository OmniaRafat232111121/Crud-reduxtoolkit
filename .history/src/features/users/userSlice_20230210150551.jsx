import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: '2', name: 'omnia rafat', email: 'omnia2321@gmail.com' },
        {id:'4',name:'ali rafat',email:'ali2321@gmail.com'},

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
export const {add}
export default userSlice.reducer;