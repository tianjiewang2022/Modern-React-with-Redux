import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        builder.addCase();
        builder.addCase();
        builder.addCase();

    }
    // reducers: {},
});

export const usersReducer = userSlice.reducer;