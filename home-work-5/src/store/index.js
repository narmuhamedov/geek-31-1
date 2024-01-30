import { configureStore } from "@reduxjs/toolkit";
import titleReducer from './titleSlice'
import usersReducer from './usersSlice'

export const store = configureStore({
    reducer: {
        titleReducer,
        usersReducer
    }
})