
import {CONSTANTS as C} from '../constants';

export default function stringReducer(state = [], action){
    switch(action.type){
        case C.ADD.STRING:{
            return state.concat([action.payload])
        }
        case C.ADD.STRINGS:{
            return state.concat(action.payload)
        }
    }

    return state;
}
