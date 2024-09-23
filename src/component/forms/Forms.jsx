import { useState } from "react";
import React from "react";

const Forms = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [allArray, setAllArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = {
        id: new Date().getTime().toString(),
        email,
        password,
      };
      setAllArray([...allArray, newEntry]);
      console.log(newEntry);
      setEmail("");
      setPassword("");
    } else {
      alert("Please fill all requirements");
    }

    console.log("Email: ", email);
    console.log("Password: ", password);

    // const newEntry = {
    //   id: new Date().getTime().toString(),
    //   email,
    //   password,
    // };
    // setAllArray([...allArray, newEntry]);
    // console.log(newEntry);
    // setEmail("");
    // setPassword("");
  };

  const remove = (id) => {
    const updatedArray = allArray.filter((item) => item.id != id);
    setAllArray(updatedArray);
    console.log(updatedArray);
  };

  return (
    <>
      <div className="bg-blue-400 justify-center flex items-center min-h-screen">
        <div className=" rounded-lg p-2 ">
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="border-1"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="mt-9">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
            </div>
            <button type="submit" className="bg-orange-600 p-2 rounded-lg mt-9">
              Login
            </button>
          </form>

          <div>
            {allArray.map((user) => {
              const { email, password, id } = user;
              return (
                <>
                  <div
                    // key={user.id}
                    // key={id}
                    key={id}
                    className="bg-gray-200 p-2 rounded-lg mt-9"
                  >
                    <p>
                      {/* Email: {user.email}, Password: {user.password} */}
                      Email: {email}, Password: {password}
                    </p>
                  </div>
                  {/* <button
                    className="bg-red-600 text-white p-2 rounded text-sm"
                    onClick={remove}
                  >
                    remove
                  </button> */}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;
