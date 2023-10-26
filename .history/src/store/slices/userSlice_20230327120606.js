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
        builder.addCase(fetchUsers.pending, (state, action) => {
            // update our state object however appropriate to show the user what we are loading data
            state.isLoading = true;


        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {

        });
        builder.addCase(fetchUsers.rejected, (state, action) => {

        });
    }
    // reducers: {},
});

export const usersReducer = userSlice.reducer;