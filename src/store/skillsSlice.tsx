import { PayloadAction,createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import { RootState } from './store';
import axios, { CancelTokenSource} from 'axios';

// create type for our json document data
export type skillsStateType = {
    id:number,
    title:string,
    imgSRC:string,
    skillLevel:string,
    desc:string,
    years:string
}

// create initial state for our entity state
type initialStateType = {
    ids:string[],
    entities:Record<string, skillsStateType>,
    status: 'idle'|'loading'|'succeeded'|'failed',
    error: null|string,
    selectSkill: string
}


// create our entity state
const skillsAdapter = createEntityAdapter({
    // our ids that we are using to track our skills is our title
    selectId: (skill:skillsStateType) => skill.title,
    sortComparer: (a,b) => a.id - b.id,
})

// create our state tue it into our adapter
const initialState:initialStateType = skillsAdapter.getInitialState({
    status: 'idle',
    error:null,
    selectSkill: 'HTML'
})

// asyncthunk function that fetches from our data store
// in this case a json document
// for ease of use we are using axios to transfer our data from json
export const fetchSkills = createAsyncThunk('skills/fetchSkills',async(_,{rejectWithValue, signal}) => {
    try{
        // create a tocken
        const source:CancelTokenSource = axios.CancelToken.source();

        // cancel our call for whatever reason when we call abort
        signal.addEventListener('abort', ()=> {
            source.cancel();
        })
        // make a fetch request using axios
        // thanks to axios will just return our raw data instead of having to extract it
        const response = await axios.get('http://localhost:5173/Newportfolio-ReactViteBuild/data/technicalSkill.json',{cancelToken:source.token})
        // catch any errors
        .catch(()=> {
            throw new Error("Api had issues");
        })
        // log our return
        // console.log(`Axios Return:${response}`)
        // console.log(`Axios Data:${response.data}`)
        // return our data
        return response.data.Skills;
    }catch(error:unknown){
        console.log(`fetchSkills:${error}`);
        return rejectWithValue(error);
    }
})

// add our data to our slice
const skillSlice = createSlice({
    name:'skills',
    initialState,
    reducers: {
        changeSkill(state, action:PayloadAction<string>) {
            state.selectSkill = action.payload;
        }
    },
    extraReducers(builder){
        // listeners for our async thunk functions
        builder
            .addCase(fetchSkills.pending,(state)=> {
                // when loading change our status to loading
                state.status = "loading";
                // console.log(state)
            })
            .addCase(fetchSkills.fulfilled, (state,action:{payload:Record<string,skillsStateType>})=> {
                // take in our data change our status
                state.status = "succeeded"
                // console.log("action",action);
                // mold our data by taking our payload and pushing our value data into our data array
                const dataArray:skillsStateType[] = [];
                Object.entries(action.payload).map(([_,v]:[unknown,skillsStateType])=> {
                    dataArray.push(v);
                })
                // console.log("dataArray:",dataArray)
                // using upsery many add our array into our our state in entity format
                skillsAdapter.upsertMany(state,dataArray);
            })
            // in instance of rejected change our stat to fail and send a message to error
            .addCase(fetchSkills.rejected, (state,action)=> {
                state.status = 'failed';
                if(action.error.message) {
                    state.error = action.error.message;
                }
            })
    }
})

// extract our selectors
export const {
    selectAll,
    selectById,
    selectIds,
    selectEntities
} = skillsAdapter.getSelectors((state:{skills:initialStateType})=> state.skills)

// create additional selectors
export const getSkillsState = (state:RootState) => state;
export const getSkillsStatus = (state:RootState) => state.skills.status;
export const getSkillsError = (state:RootState) => state.skills.error;
export const getSelectSkill = (state:RootState) => state.skills.selectSkill;

export const {changeSkill} = skillSlice.actions;

// export our reducer
export default skillSlice.reducer;