import React from "react";
import { useLocation } from "react-router-dom";

const Contacts = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="flex justify-center items-center ">
        <p>Welcome to my {location.pathname.replace("/", "")} page.</p>
      </div>
    </>
  );
};

export default Contacts;
