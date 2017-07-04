import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component {
  render(){

    //Step2: Reducer: state and action
    //USUALLY GOES INTO DIFFERENT FILE
    const reducer= function(state, action){
      if(action.type === "ATTACK"){
        return action.payload;
      }
      if(action.type === "GREENATTACK"){
        return action.payload
      }
      return state;
    }

    //Step 1: Create store: reducer and state
    const store = createStore(reducer, "Peace");

    //Step3: Subscribe
    store.subscribe( () => {
      console.log("store is now", store.getState());
    })

    //Step 4: Dispatch action
    //USUALLY GOES INTO A DIFFERENT FILE
    store.dispatch({type: "ATTACK", payload: "Iron Man"})
    store.dispatch({type: "GREENATTACK", payload: "HULK"})

    return(
      <div>
        connected
      </div>
    );
  }
}

export default ReduxDemo;
