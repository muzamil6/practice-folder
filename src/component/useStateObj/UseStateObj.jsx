import React, { useState } from "react";

const UseStateObj = () => {
  const [data, setData] = useState({
    name: "Muzamil",
    age: "23",
    degree: "BsSE",
  });
  const updateData = () => {
    setData({ ...data, name: "Muzamil Khan", degree: "BSCS" });
  };
  return (
    <div className="bg-blue-400 min-h-screen justify-center flex items-center flex-col">
      <h1 className="text-white ">
        name: {data.name}, age: {data.age} , degree: {data.degree}
      </h1>
      <button
        onClick={updateData}
        className="bg-orange-500 mt-6 text-white rounded-lg p-2 border-none"
      >
        Update
      </button>
    </div>
  );
};

export default UseStateObj;
