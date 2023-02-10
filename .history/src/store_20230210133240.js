import { configureStore } from "@reduxjs/toolkit";
import {use}
export const store = configureStore({
    reducer: {
        users:usersReducer
    }
})