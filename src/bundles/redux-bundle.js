// import * as redux from 'redux';

import store from "../redux/store";
import {action, ActionChain} from '../redux/actions';

// window.store = store;
// window.addNote = actions.add.note;

// let unsub = store.subscribe((...args)=>{
//     console.log("store state:",store.getState());
// })

// store.dispatch(actions.add.note("kissa"));
//
// store.dispatch(actions.add.string({start:"some point", end:"other point"}))



const redux = {store, action, ActionChain};
// console.log(redux)

export default redux;
