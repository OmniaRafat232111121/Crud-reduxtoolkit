import { configureStore } from "@reduxjs/toolkit";
import userReducer
export const store = configureStore({
    reducer: {
        users:usersReducer
    }
})