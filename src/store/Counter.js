
import {createSlice} from "@reduxjs/toolkit"

const counterSlice=createSlice({
    name: 'counter',
    initialState : {counterVal : 0},
    reducers:{
        increment:(state)=>{
            //console.log(state);
            state.counterVal++;
            
        },
        decrement:(state)=>{
            //console.log(state);
            state.counterVal--;
        },
        add:(state,action)=>{
           // console.log(state,action);
            state.counterVal+=Number(action.payload)
        },
        subtract:(state,action)=>{
           // console.log(state,action);
            state.counterVal-=Number(action.payload)
        },
    }
})





export const counterActions = counterSlice.actions;
export default counterSlice;
