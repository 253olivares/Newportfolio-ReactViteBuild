import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type initialStateType = {
    scrollState: string,
    currentSection: string,
    windowWidth:number
}


const initialState:initialStateType = {
    scrollState: "Home",
    currentSection: "Home",
    windowWidth:window.innerWidth,
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
        },
        setWindowWidth(state){
            state.windowWidth = window.innerWidth;
        }
    }
})

export const getScrollState = (state:RootState) => state.sidebar.scrollState;
export const getCurrentSection = (state:RootState) => state.sidebar.currentSection;
export const getWindowWidth = (state:RootState) => state.sidebar.windowWidth;

export const {setScrollState,setCurrentSelection,setWindowWidth} = sidebarSlice.actions;

export default sidebarSlice.reducer;