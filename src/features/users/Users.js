import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



const options = {
    name: 'users',
    initialState: {},
    reducers: {
        fetchUsers: (state, action) => {
            return null;
        }
    }
}

const slice = createSlice(options);

export default slice.reducer;
export const { fetchUsers } = slice.actions;
