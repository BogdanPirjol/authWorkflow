import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from '../features/users/Users';

const store = configureStore({
    reducer: {
        user: userSliceReducer
    }
});

export default store;