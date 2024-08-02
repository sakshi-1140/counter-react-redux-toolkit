import {createStore} from "redux";

const INITIAL_VALUE ={
    counter:0,
    privacy:false,
}
const counterReducer=(state=INITIAL_VALUE,action)=>{
   // console.log("Action recieved", action)
    switch(action.type){
        case "INCREMENT": return {...state, counter:state.counter+1};
        case "DECREMENT": return {...state,counter:state.counter-1};
        case "ADDITION": return {...state,counter:state.counter+Number(action.payload.num)};
        case "SUBTRACT": return {...state,counter:state.counter-Number(action.payload.num)};
        case "PRIVACY_TOGGLE": return {...state,privacy: !state.privacy};// changes here.
        default : return state;
    }
 
}

const counterStore= createStore(counterReducer)

export default counterStore;