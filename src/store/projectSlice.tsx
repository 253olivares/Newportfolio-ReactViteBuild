import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import axios, { CancelTokenSource } from "axios";
import { RootState } from "./store";

export type projectStateType = {
    id:number,
    projectName: string,
    projectURL: string,
    section:string,
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
    name:'project',
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
    selectAll
} = projectsAdapater.getSelectors((state: {
    project:initialStateType
})=>state.project)

// selector function    s
export const getProjectState = (state:RootState) => state;
export const getProjectStatus = (state:RootState) => state.project.status;
export const getProjectError = (state:RootState) => state.project.error;
 
// here we will get our custom selectors that take in our filters and searches.

export const filterProjects = createSelector(
    [selectAll  ,(_,searchTerm,tabSelect,liveDemos,selectFilter)=>{
        return {
            'query':searchTerm,
            'tab':tabSelect,
            'live':liveDemos,
            'filterList':selectFilter
        }
    }],
    (projects,filters)=>{
        const {query,tab,live,filterList} = filters;

        return <>{"Query:"+query+" Tab:"+tab+" live:"+live+" FilterList:"+filterList}</>
    }
)

export default projectSlice.reducer;