import {redux} from '../../bundles';

import {CONSTANTS as C} from '../constants';

/**
    chainable redux actions

    wrapped in name function, allows chaining actions and then dispatching them all sequentially
*/
class ActionChain{

    constructor(){
        this.results = [];
        return this;
    }

    action(type, payload){
        let obj = {type, payload};
        // console.log(this, obj

        this.results = this.results.concat([obj]);
        return this;
    }


    dispatch(){
        // console.log(this)
        // console.log("chain res:",this.results)
        this.results.forEach(res=>{
            redux.store.dispatch(res);
        })
        return this;
    }
}

export function action(...args){
    return new ActionChain().action(...args);
}
