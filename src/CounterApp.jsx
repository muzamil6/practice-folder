import React, { useState } from "react";
import PropsParents from "./PropsParents";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  //   const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  const counterHandler = () => {
    setCount(count + 5);
  };
  return (
    // <div>
    //   <p>You clicked {count} times</p>
    //   <button onClick={() => setCount(count + 1)}>Click me</button>

    //   <p>Your age is {age}</p>
    //   <button onClick={() => setAge(age + 1)}>Age Up</button>

    //   <p>Your favorite fruit is {fruit}</p>
    //   <button onClick={() => setFruit(fruit + 1)}>Change Fruit</button>
    //   {/* <p>Your favTodo is {todos}</p>
    //         <button onClick = {() => setTodos("new to")}>
    //             Change Todo
    //         </button> */}

    //   <p>You clicked this see the magic{count}</p>
    //   <button
    //     className="py-2 px-3 rounded-lg bg-blue-700 text-white"
    //     onClick={counterHandler}
    //   >
    //     count Increasment
    //   </button>
    // </div>
    <>
      <PropsParents />
    </>
  );
}

export default Example;
