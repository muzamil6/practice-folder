import React, { useState, useEffect } from "react";

const UseEffectOne = () => {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  const actualWidth = () => {
    console.log("innerWidth", window.innerWidth);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("add");
    window.addEventListener("resize", actualWidth);
    return () => {
      console.log("remove");
      window.removeEventListener("resize", actualWidth);
    };
  });

  return (
    <>
      <div className="bg-blue-400 justify-center items-center flex flex-col min-h-screen">
        <p className="text-white">the actual size of window:</p>
        <h1>{windowWidth}</h1>
      </div>
    </>
  );
};

export default UseEffectOne;
