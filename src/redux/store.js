import { configureStore } from '@reduxjs/toolkit';
import { contactsHelpers } from '../redux/Helpers';

export const store = configureStore({
     reducer: {
        
        [contactsHelpers.reducerPath]: contactsHelpers.reducer,
    },
    middleware: getDefaultMiddleware =>
        [...getDefaultMiddleware(), contactsHelpers.middleware],
});