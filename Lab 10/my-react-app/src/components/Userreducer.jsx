import { useReducer, useState } from "react";
import React from 'react'
function reducer(state,action){
    switch(action.type){
        case 'increment': return{count:state.count+1,operation:"increment"};
        case 'decrement': return{count:state.count-1,operation:"decrement"};
        default:throw state();
    }
}

const Userreducer = () => {
    const[state,dispatch] = useReducer(reducer, {count: 0, operation: "initial"});

  return (
    <>
    {state.count} {state.operation}
    <button onClick={() => dispatch({ type: "increment"})}>+</button>
    <button onClick={() => dispatch({ type: "decrement"})}>-</button>
    </>
  )
}

export default Userreducer