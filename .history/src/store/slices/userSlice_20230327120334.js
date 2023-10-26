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
        builder.addCase(fetchUsers.pending, () => {

        });
        builder.addCase(fetchUsers.fulfilled, () => {

        });
        builder.addCase(fetchUsers.rejected, () => {

        });
    }
    // reducers: {},
});

export const usersReducer = userSlice.reducer;