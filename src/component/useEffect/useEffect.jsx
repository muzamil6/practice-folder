import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // simple used
    // document.title = `chats(${count})`;

    // continalliy used

    if (count >= 1) {
      document.title = `chats(${count})`;
    } else {
      document.title = `chats`;
    }
    console.log("UseEffect called first");
  }, [count]);

  //   using the depanednecy

  useEffect(() => {
    console.log("UseEffect called second");
  }, []);

  // with out dependency

  useEffect(() => {
    console.log("third useEffect Out dependency");
  });
  //   outside

  console.log("outSide of useEffect");

  return (
    <>
      <div className="bg-blue-400 flex justify-center items-center min-h-screen flex-col">
        <h1 className="text-white text-lg">{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
    </>
  );
}

export default UseEffect;
