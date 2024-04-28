import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type initialStateType = {
    scrollState: string,
    currentSection: string
}


const initialState:initialStateType = {
    scrollState: "Home",
    currentSection: "Home"
}

const sidebarSlice = createSlice({
    name:'sidebar',
    initialState,
    reducers: {
        setScrollState(state,action: PayloadAction<string>) {
            state.scrollState = action.payload;
        },
        setCurrentSelection(state,action:PayloadAction<string>){
            state.currentSection = action.payload; 
        }   
    }
})

export const getScrollState = (state:RootState) => state.sidebar.scrollState;
export const getCurrentSection = (state:RootState) => state.sidebar.currentSection;

export const {setScrollState,setCurrentSelection } = sidebarSlice.actions;

export default sidebarSlice.reducer;