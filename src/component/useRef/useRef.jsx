import { useRef, useState } from "react";
import React from "react";
import { HiFingerPrint } from "react-icons/hi";
const UseRef = () => {
  const [show, setShow] = useState(false);

  const name = useRef(null);
  const formSubmit = (e) => {
    e.preventDefault(false);
    let nameData = name.current.value;
    nameData === "" ? alert("please fill the data") : setShow(true);
    console.log(name.current.value);
  };
  return (
    <>
      <div className="bg-blue-400 justify-center items-center flex min-h-screen flex-col">
        <form action="" onSubmit={formSubmit} className="flex-col flex">
          <label htmlFor=""> Enter Your Name</label>
          <input type="text" name="" id="name" ref={name} />
          <button className="bg-green-500 text-white rounded-xl p-3 text-sm mt-5">
            Submit
            {/* using icons exmple */}
            {/* <HiFingerPrint /> */}
          </button>
        </form>
        <p>{show ? `your name ${name.current.value}` : ""}</p>
      </div>
    </>
  );
};

export default UseRef;

// we used this useRef when we used the uncontrolled form in the react like
// used form in the html
// but when used this useref its tacle in formed means its make we used wo promaced the function
// and we used the form in the react like the controlled form
// here we used the ref to get the value of the input field which we can use in our form submit function.
// and we used the formSubmit function to handle the form submission.

// when we used this useRef in controlled form, it is more efficient and less buggy.
// but when we used this useRef in uncontrolled form, it is more difficult to handle the form submission and bugs can occur.
// so it is better to use controlled form in react.
