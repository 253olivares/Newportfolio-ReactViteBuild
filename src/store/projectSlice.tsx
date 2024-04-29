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
        selectedFilter:string[]
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
        selectedFilter:[]
    },
    openFilter:false
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
        openFilter(state){
            state.openFilter = true;
        },
        closeFilter(state){
            state.openFilter = false;
        },
        resetFilter(state){
            state.filters = {
                searchTerm:'',
                tabSelect:"Programming",
                liveDemos:false,
                selectedFilter:[]
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

// selector function    s
export const getProjectState = (state:RootState) => state;
export const getProjectStatus = (state:RootState) => state.project.status;
export const getProjectError = (state:RootState) => state.project.error;
export const getSearchTerm = (state:RootState) => state.project.filters.searchTerm;
export const getTabSelect = (state:RootState) => state.project.filters.tabSelect;
export const getLiveDemo = (state:RootState) => state.project.filters.liveDemos;
export const getSelectFiler = (state:RootState) => state.project.filters.selectedFilter;
export const getFilters = (state:RootState) => state.project.filters;
export const getOpenFilter= (state:RootState) => state.project.openFilter;

// here we will get our custom selectors that take in our filters and searches.
export const filterProjects = createSelector(
    [selectAll , getFilters],
    (projects,params)=>{
        const {searchTerm,tabSelect,liveDemos,selectedFilter} = params;
        let filteredArray
        let query = searchTerm.trim().toLowerCase();
        
        let filterThrowAway:projectStateType[] = []
        // first we filter based on search term and tags
        filteredArray = projects.filter((item)=> {
            if (searchTerm === ''){
                return true;
            }
            let projectName = item.projectName.trim().toLowerCase();
            if(projectName.includes(query)){
              return  true
            } else {
                filterThrowAway.push(item);
                return false
            };
        });

        let filterThrowAway2:projectStateType[] = []
        for (let i = 0; i < filterThrowAway.length; i++){
            let searchDiameter = filterThrowAway[i].tags
            for (let x = 0; x < searchDiameter.length; x++){
                if (searchDiameter[x].trim().toLowerCase().includes(query)){
                    filteredArray.push(filterThrowAway[i]);
                    break; 
                } else {
                    filterThrowAway2.push(filterThrowAway[i])
                }
            }
        }
        // filter based on date
        for(let i =0; i<filterThrowAway2.length; i++) {
            let searchDiameter = filterThrowAway2[i].date;
            if(searchDiameter.trim().toLowerCase().includes(query)){
                filteredArray.push(filterThrowAway2[i]);
            }
        }

        filteredArray = filteredArray.filter((item)=> item.section === tabSelect);

        if(liveDemos === true){
            filteredArray = filteredArray.filter((item)=> item.live===true);
        }

        let finalFilter = [];
        if (selectedFilter.length >= 1 && tabSelect === 'Programming') {
            console.log("running code for tag filter");
            for(let i =0; i< filteredArray.length; i++){
                for(let x=0; x<filteredArray[i].tags.length; x++){
                    let match = false;
                    for(let y=0; y< selectedFilter.length; y++) {
                        if(filteredArray[i].tags[x]=== selectedFilter[y]){
                            match = true;
                            finalFilter.push(filteredArray[i]);
                            break;
                        }
                    }
                    if(match){
                        break;
                    }
                }
            }
        } else {
            finalFilter = filteredArray;
        }

        // last min sort to make sure our projects are sorted by ids
        finalFilter = finalFilter.sort((a,b)=> b.id - a.id);

        return finalFilter;
    }
)

export const {setSearchTerm, 
            setTabSelect, 
            changeLiveDemo, 
            removeFromFilter, 
            addToFilter, 
            openFilter,
            closeFilter,
            resetFilter} = projectSlice.actions;

export default projectSlice.reducer;