import {redux, reduxLogger as jslog} from '../../bundles';

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

    history(){
        jslog.log("accessing history")
        return ActionChain._actionHistory;
    }

    action(type, payload){

        let obj = {type, payload};
        //add to global history
        ActionChain._actionHistory.push(obj);
        this.results = this.results.concat([obj]);
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.dispatch();
        },50)
        return this;
    }


    dispatch(){
        clearTimeout(this.timer);
        jslog.log("actionChain dispatching actions:",this.results)
        this.results.forEach(res=>{
            redux.store.dispatch(res);
        })
        return this;
    }
}

ActionChain._actionHistory = [];

function action(...args){
    if(args.length > 0){
        return new ActionChain().action(...args);
    }else{
        return new ActionChain();
    }

}

export {action, ActionChain};
