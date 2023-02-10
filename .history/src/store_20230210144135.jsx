import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './features/'
export const store = configureStore({
    reducer: {
        users:usersReducer
    }
})