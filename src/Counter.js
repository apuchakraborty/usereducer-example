import React, { useState, useReducer } from "react";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      };
    case "initCount":
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0
};

function Counter() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div className="App">
      <h1>Reducer Example</h1>

      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
}

export default Counter;
