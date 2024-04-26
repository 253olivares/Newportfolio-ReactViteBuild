import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from './skillsSlice';
import projectReducer from './projectSlice';

export const store = configureStore({
    reducer:{
        skills:skillsReducer,
        project:projectReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;