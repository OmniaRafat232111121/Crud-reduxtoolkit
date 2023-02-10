import { configureStore } from "@reduxjs/toolkit";
import userRed
export const store = configureStore({
    reducer: {
        users:usersReducer
    }
})