import { createStore } from "redux";
import reducer from "../reducers/index";

// function all(state, action){
//     if(action.type == C.FULLSTATE){
//         return payload;
//     }
//     return state;
// }
let prev = localStorage.getItem("skw");
prev = JSON.parse(prev) || {}

const store = createStore(reducer, prev);
export default store;
