import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type initialStateType ={
    email:string,
    message:string,
    formError: formErrors
}

type formErrors = 'none'| 'email' | 'message';

const initialState:initialStateType = {
    email:'',
    message: '',
    formError:'none'
}

const contactSlice = createSlice({
    name:'contact',
    initialState,
    reducers: {
        setEmail (state, action:PayloadAction<string>){
            // set email to state
            state.email = action.payload;
        },
        setMessage(state, action:PayloadAction<string>) {
            // set message to state
            state.message = action.payload;
        },
        setFormError(state, action:PayloadAction<string>){
            state.formError = action.payload as formErrors;
        }
    }
})

export const getEmailState = (state:RootState) => state.contact.email;
export const getMessageState = (state:RootState) => state.contact.message;
export const getFormErrorState = (state:RootState) => state.contact.formError;

export const {setEmail,setMessage, setFormError} = contactSlice.actions;

export default contactSlice.reducer;