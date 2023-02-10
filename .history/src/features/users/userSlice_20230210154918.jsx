import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: '1', name: 'omnia rafat', email: 'omnia2321@gmail.com' },
    {id:'2',name:'ali rafat',email:'ali2321@gmail.com'},

];
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
      state.push(action.payload);
            
        },
        editUser: (state, action) => {
            const {id}
        }
            
    
    }
})
export const { addUser } = userSlice.actions;
export default userSlice.reducer;