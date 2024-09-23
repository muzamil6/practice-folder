import React from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-center items-center p-4 gap-6">
        <h1>React Router</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </>
  );
};

export default Nav;
