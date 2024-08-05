import { createSlice } from "@reduxjs/toolkit";

const privacySlice=createSlice({
    name:"privacy",
    initialState:false,
    reducers:{
        toggle:(state)=>{ 
            console.log("previous state",state)
            return state=!state;},
    }
})

export const privacyActions = privacySlice.actions;

export default privacySlice;