import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from  '../../src/exampleSlice';

export const store = configureStore({
    reducer: {
        example: exampleReducer
    }
})