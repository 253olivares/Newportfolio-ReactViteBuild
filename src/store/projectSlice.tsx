import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios, { CancelTokenSource } from "axios";
import { RootState } from "./store";

export type projectStateType = {
    id:number,
    projectName: string,
    projectURL: string,
    tags: string[],
    live: boolean,
    link:string
}

type initialStateType = {
    ids:number[],
    entities:Record<number, projectStateType>,
    status: 'idle'|'loading'|'succeeded'|'failed',
    error: null|string
}

const projectsAdapater = createEntityAdapter({
    selectId: (project:projectStateType) => project.id,
    sortComparer:(a,b) => a.id - b.id 
})

const initialState:initialStateType = projectsAdapater.getInitialState({
    status: 'idle',
    error: null
})


export const fetchProjects = createAsyncThunk('portfolio/fetchProjects',async(_,{rejectWithValue, signal})=> {
    try{
        const source:CancelTokenSource = axios.CancelToken.source();

        signal.addEventListener('abort',()=> {
            source.cancel();
        })

        const response = await axios.get('http://localhost:5173/Newportfolio-ReactViteBuild/data/projectsList.json', {cancelToken:source.token})
        .catch(()=> {
            throw new Error("Api had issues");
        })

        return response.data.Projects;

    }catch( error:unknown){
        console.log(`fetchSkills:${error}`);
        return rejectWithValue(error);
    }
})


const projectSlice = createSlice({
    name:'projects',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(fetchProjects.pending,(state)=> {
                state.status = "loading";
            })
            .addCase(fetchProjects.fulfilled, (state,action:{payload:projectStateType[]})=> {
                state.status = 'succeeded';
                // add our array of projects to the adapter and create key value object array with them
                // assigning id to our entities.
                projectsAdapater.upsertMany(state,action.payload);
            })
            .addCase(fetchProjects.rejected,(state,action) => {
                state.status = 'failed';
                console.log(action);
                if(action.error.message){
                    state.error = action.error.message;
                }
            })
    }
})

export const {
    selectAll,
    selectById,
    selectIds,
    selectEntities
} = projectsAdapater.getSelectors((state:{projects:initialStateType})=> state.projects);

// selector functions
export const getProjectState = (state:RootState) => state;
export const getProjectStatus = (state:RootState) => state.project.status;
export const getProjectError = (state:RootState) => state.project.error;
 
// here we will get our custom selectors that take in our filters and searches.

export default projectSlice.reducer;