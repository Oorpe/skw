import {redux} from '../../bundles';

import {CONSTANTS as C} from '../constants';

/**
    chainable redux actions

    wrapped in name function, allows chaining actions and then dispatching them all sequentially
*/
export class ActionChain{

    constructor(){
        this.results = [];
        this.timer = {};
        return this;
    }

    action(type, payload){
        let obj = {type, payload};
        // console.log(this, obj

        this.results = this.results.concat([obj]);
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.dispatch();
        },50)
        return this;
    }


    dispatch(){
        clearTimeout(this.timer);
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
