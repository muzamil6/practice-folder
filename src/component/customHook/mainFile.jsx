import React, { useEffect, useState } from "react";
import CustomHook from "./useCustomHook";
function MainFile() {
  const [count, setCount] = useState(0);

  CustomHook(count);

  return (
    <>
      <div className="bg-blue-400 flex justify-center items-center min-h-screen flex-col">
        <h1 className="text-white text-lg">{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
    </>
  );
}

export default MainFile;
