import { createAsyncThunk,PayloadAction, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import axios, { CancelTokenSource } from "axios";
import { RootState } from "./store";

export type projectStateType = {
    id:number,
    projectName: string,
    projectURL: string,
    imgURL:string
    section:string,
    tags: string[],
    responsive:boolean,
    live: boolean,
    date:string
}

type initialStateType = {
    ids:number[],
    entities:Record<number, projectStateType>,
    status: 'idle'|'loading'|'succeeded'|'failed',
    error: null|string
    filters: {
        searchTerm: string,
        tabSelect: Tabs,
        liveDemos: boolean,
        selectedFilter:string[],
        responsive:boolean
    }
    openFilter:boolean
}

type Tabs = "Programming" | "Art" | "UI / UX"

const projectsAdapater = createEntityAdapter({
    selectId: (project:projectStateType) => project.id,
    sortComparer:(a,b) => a.id - b.id 
})

const initialState:initialStateType = projectsAdapater.getInitialState({
    status: 'idle',
    error: null,
    filters:{
        searchTerm:'',
        tabSelect:"Programming",
        liveDemos:false,
        selectedFilter:[],
        responsive:false
    },
    openFilter:false
})


export const fetchProjects = createAsyncThunk('portfolio/fetchProjects',async(_,{rejectWithValue, signal})=> {
    try{
        const source:CancelTokenSource = axios.CancelToken.source();

        signal.addEventListener('abort',()=> {
            source.cancel();
        })

        const response = await axios.get('https://253olivares.github.io/Newportfolio-ReactViteBuild/data/projectsList.json', {cancelToken:source.token})
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
    reducers:{
        setSearchTerm(state, action:PayloadAction<string>){
            state.filters.searchTerm = action.payload;
        },
        setTabSelect(state, action:PayloadAction<string>){
            state.filters.tabSelect = action.payload as Tabs;

        },
        changeLiveDemo(state){
            const previousDemo = state.filters.liveDemos;
            state.filters.liveDemos = !previousDemo;
        },
        removeFromFilter(state,action:PayloadAction<string>){
            const previousState = state.filters.selectedFilter
            state.filters.selectedFilter = previousState.filter(x=> x!== action.payload);
        },
        addToFilter(state, action:PayloadAction<string>){
            const previousState = state.filters.selectedFilter
            state.filters.selectedFilter = [...previousState,action.payload]
        },
        changeResponsive(state) {
            state.filters.responsive = !state.filters.responsive;
        },
        openFilter(state){
            state.openFilter = true;
        },
        closeFilter(state){
            state.openFilter = false;
        },
        resetFilter(state){
            state.filters = {
                searchTerm:'',
                tabSelect:state.filters.tabSelect,
                liveDemos:false,
                selectedFilter:[],
                responsive:false
            }
        }
    },
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

// selector functions
export const getProjectState = (state:RootState) => state;
export const getProjectStatus = (state:RootState) => state.project.status;
export const getProjectError = (state:RootState) => state.project.error;
export const getSearchTerm = (state:RootState) => state.project.filters.searchTerm;
export const getTabSelect = (state:RootState) => state.project.filters.tabSelect;
export const getLiveDemo = (state:RootState) => state.project.filters.liveDemos;
export const getSelectFiler = (state:RootState) => state.project.filters.selectedFilter;
export const getResponsive = (state:RootState) => state.project.filters.responsive;
export const getFilters = (state:RootState) => state.project.filters;
export const getOpenFilter= (state:RootState) => state.project.openFilter;

// (_,params)=> params
// here we will get our custom selectors that take in our filters and searches.
export const filterProjects = createSelector(
    [selectAll , getFilters],
    (projects,params)=>{
        
        const {searchTerm,tabSelect,liveDemos,selectedFilter, responsive} = params;
        let query = searchTerm.trim().toLowerCase();

        // filter by tab
        let filteredArray = projects.filter((item)=> item.section===tabSelect);

        console.log(tabSelect === "Programming");
        // if programming filter live demos and responsive if either is true 
        if(tabSelect === "Programming"){
            // filter by demo
            if(liveDemos ===true) filteredArray = filteredArray.filter((item)=>item.live===true);
            // filter by responsive
            if(responsive ===true) filteredArray = filteredArray.filter((item)=>item.responsive===true);
            // filterBy selected
            if(selectedFilter.length>=1) {
                filteredArray = filteredArray.filter((item)=> {
                    // filter through our tags
                    // if our selected filter array includes an item from our tags return true
                    if(item.tags.some(x=> { if(selectedFilter.includes(x)) return true})) return true;
                    // if nothing is found after filtering through our array return false
                    return false;
                })
            }
        }

        // our search filter
        filteredArray = filteredArray.filter((item)=> {
            // if blank stop
            // or if it is filled check if our project name fits the query
            // else take our tag loop through each tag and see if it matches our query
            // if not 
            //  take our date check if our query matches any of our date
            // if not just return false
            if(searchTerm === '' || item.projectName.trim().toLowerCase().includes(query)){
                return true;
            } else {

                // if anything in our array
                if(item.tags.some((x)=> x.trim().toLowerCase().includes(query))) return true;

                if(item.date.trim().toLowerCase().includes(query)) return true;
                // if not found in tags or date return false
                return false;
            }
        })

        filteredArray = filteredArray.sort((a,b)=> b.id - a.id);

        return filteredArray;
    }
);

export const {setSearchTerm, 
            setTabSelect, 
            changeLiveDemo, 
            removeFromFilter, 
            addToFilter, 
            openFilter,
            closeFilter,
            resetFilter, 
            changeResponsive} = projectSlice.actions;

export default projectSlice.reducer;