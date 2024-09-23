import React, { useCallback, useState } from "react";

const UseStateLearn = () => {
  var inialName = "Muzamil";
  var [name, setName] = useState(inialName);
  var [isInialname, setIsInialname] = useState(true);
  const changeName = () => {
    // setName("Muzamil Khan");
    // setName(inialName);
    // if (isInialname) {
    //   setName("Muzamil Khan");
    // } else {
    //   setName(inialName);
    // }
    // setIsInialname(!isInialname);

    // let val = name;
    // if (val === "Muzamil") {
    //   setName("Muzamil Khan");
    // } else {
    //   setName("Muzamil");
    // }

    // third method

    let val = name;
    val === "Muzamil" ? setName("Muzamil Khan") : setName("Muzamil");
  };

  return (
    <div className="min-h-screen justify-center text-center flex  items-center flex-col">
      <h1>{name}</h1>

      <button
        className="border border-1 border-l-amber-600 p-2 "
        onClick={changeName}
      >
        change Name
      </button>
    </div>
  );
};

export default UseStateLearn;
