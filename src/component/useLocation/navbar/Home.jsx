import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  console.log(location);

  //useHistory it replace with the navigate()

  const navigation = useNavigate();
  console.log(navigation);
  const handleClick = () => {
    navigation(-1);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col ">
        <p>
          Welcome to my{" "}
          {location.pathname === "/"
            ? "home"
            : location.pathname.replace("/", "")}{" "}
          page.
        </p>
        <button
          className="bg-blue-500 p-2 rounded-xl text-white mt-3"
          onClick={handleClick}
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default Home;
