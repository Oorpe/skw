import {combineReducers} from 'redux';
import {CONSTANTS as C} from "../constants";

import stringReducer from './string';


/**
    action log reducer
*/
function actionLog(state = [], action){
    // console.log("action:",action)
    return state.concat([action]);
}

const initialAppState = {
    zoom: 1
}

function appStateReducer(state = initialAppState, action){
    switch(action.type){
        case C.APP.ZOOM:{
            return {...state, zoom: action.payload}
        }
    }

    return state;
}

const notesReducer = (state = [], action) => {
    switch(action.type){
        case C.ADD.NOTE:{
            return state.concat([action.payload])
        }
        case C.ADD.NOTES:{
            return state.concat(action.payload)
        }
        case C.UPDATE.NOTE:{
            let i = state.findIndex(x=>{return x.id == action.payload.id})
            let res = state.slice(0)
            res[i] = action.payload;
            return res;
        }
    }
    //always return state
    return state;
}

export default combineReducers({
    notes:notesReducer
    ,string:stringReducer
    ,actions:actionLog
    ,app:appStateReducer
})
