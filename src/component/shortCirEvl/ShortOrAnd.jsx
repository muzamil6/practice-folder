import React, { useState } from "react";

const ShortOrAnd = () => {
  const [demo, setDemo] = useState("");
  return (
    <>
      <div className="bg-blue-400 flex justify-center items-center flex-col min-h-screen">
        <h1 className="text-white text-lg">
          {demo || (
            <>
              <div>
                <h1>Hello world</h1>
              </div>
            </>
          )}
        </h1>
        <h1 className="bg-black  text-white">
          {demo && (
            <>
              <div>
                <h1 className="text-white">Hello world Using And</h1>
              </div>
            </>
          )}
        </h1>
      </div>
    </>
  );
};

export default ShortOrAnd;
