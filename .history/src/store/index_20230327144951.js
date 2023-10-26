import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react"; import { usersReducer } from "./slices/userSlice";
;

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
});

export * from './thunks/fetchUsers'
export * from './thunks/addUser'
