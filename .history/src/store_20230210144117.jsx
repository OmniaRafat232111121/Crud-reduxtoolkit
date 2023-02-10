import { configureStore } from "@reduxjs/toolkit";
import us
export const store = configureStore({
    reducer: {
        users:usersReducer
    }
})