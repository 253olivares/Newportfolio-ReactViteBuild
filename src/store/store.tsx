import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from './skillsSlice';
import projectReducer from './projectSlice';
import sidebarReducer from './sidebarSlice';
import contactReducer from './contactSlice';

export const store = configureStore({
    reducer:{
        sidebar: sidebarReducer,
        skills: skillsReducer,
        project: projectReducer,
        contact: contactReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;