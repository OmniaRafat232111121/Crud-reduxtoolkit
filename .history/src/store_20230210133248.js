import { configureStore } from "@reduxjs/toolkit";
import {usersRedu}
export const store = configureStore({
    reducer: {
        users:usersReducer
    }
})