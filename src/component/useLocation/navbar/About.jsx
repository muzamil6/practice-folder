import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const location = useLocation();
  console.log(location);
  const navigation = useNavigate();
  const handleLogout = () => {
    navigation("/");
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col ">
        <p>Welcome to my {location.pathname.replace("/", "")} page.</p>
        {location.pathname === "/about/thapa" ? (
          <p>Hii, Muzamil good See You Again</p>
        ) : (
          <p>Login to See Your Files</p>
        )}
        <button
          className="bg-blue-500 p-2 rounded-xl text-white mt-3"
          onClick={handleLogout}
        >
          Go to Home
        </button>
      </div>
    </>
  );
};

export default About;
