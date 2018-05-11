import {CONSTANTS as C} from '../constants';
import {reduxLogger as jslog} from '../../bundles';

export default function notesReducer(state = [], action){
    switch(action.type){
        case C.ADD.NOTE:{
            jslog.log("notesReducer adding new note:",action)
            return state.concat([action.payload])
        }
    }
    return state;
}
