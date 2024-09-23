import React, { act } from "react";
import { useReducer } from "react";

const UseReducer = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    console.log("stateReducerction", state, action);
    if (action.type === "increasement") {
      return state + 1;
    }
    if (action.type === "decreasement") {
      return state - 1;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("statehhh", state);
  console.log("statekkk", dispatch);
  return (
    <>
      <div className="bg-blue-400 justify-center  items-center flex flex-col min-h-screen">
        <p>{state}</p>
        <button onClick={() => dispatch({ type: "increasement" })}>Inc</button>
        <button onClick={() => dispatch({ type: "decreasement" })}>Dec</button>
      </div>
    </>
  );
};

export default UseReducer;
