import React, { useState } from "react";

const MapLearn = () => {
  const bioData = [
    { id: 1, name: "muzamil", age: 23 },
    { id: 2, name: "Muhammad", age: 24 },
    { id: 3, name: "Mudasir", age: 26 },
    { id: 4, name: "Safdar", age: 25 },
  ];

  const [array, setArray] = useState(bioData);

  const clearData = () => {
    setArray([]);
  };
  const removeId = (id) => {
    // alert(id);
    console.log(removeId);
    const updateArray = array.filter((curElm) => {
      return curElm.id != id;
    });
    setArray(updateArray);
  };

  return (
    <>
      <div className="min-h-screen bg-blue-400 flex justify-center items-center  flex-col">
        {array.map((arry) => {
          return (
            <h1 className=" text-white rounded-lg p-4 " key={array.id}>
              name: {arry.name} age: {arry.age}
              <button
                className="ml-3 bg-red-400 text-sm p-2 rounded-lg"
                onClick={() => removeId(arry.id)}
              >
                remove
              </button>
            </h1>
          );
        })}
        <button
          onClick={clearData}
          className="bg-red-400 mt-4 text-white border-none p-2 rounded"
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default MapLearn;
