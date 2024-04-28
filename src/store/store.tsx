import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from './skillsSlice';
import projectReducer from './projectSlice';
import sidebarReducer from './sidebarSlice';

export const store = configureStore({
    reducer:{
        skills:skillsReducer,
        project:projectReducer,
        sidebar: sidebarReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;