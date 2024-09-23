import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffectApi = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsser = async () => {
    try {
      const response = await axios.get("https://api.github.com/users");
      setLoading(false); // hide the loading spinner after data fetch
      console.log("response", response);
      const data = response.data;
      setUser(data);
      console.log("data", data);
    } catch (error) {
      console.log(error, "error");
      setLoading(false);
    }
  };

  // if we want to show data after the reload the get data pass in the useeffect
  // if we want to show data when click btn then data show get data function applied on the btn onclick

  useEffect(() => {
    getUsser();
  }, []);

  if (loading) {
    return (
      <h1 className="bg-blue-400 flex justify-center items-center min-h-screen text-white text-xl">
        Loading...
      </h1>
    ); // show loading spinner while data is fetching
    // this will be shown until the data is fetched and loaded
    // it will not show while the component is rendering
    // we can add a loading spinner component in the return statement
    // or any other loading component as per our requirements
    // this is a good practice to show loading spinner while data is being fetched
    // and hide it once the data is loaded or an error occurred
    // otherwise it will be confusing for the user to see the loading spinner and then the data
    // and error will be displayed at the same time
    // it is a good practice to show loading spinner while data is being fetched
    // and hide it once the data is loaded or an error occurred
    // otherwise it will be confusing for the user to see the loading spinner and then the data
    // and error will be displayed at the same time
    // it is a good practice to show loading spinner while data is
  }

  return (
    <>
      <div className="bg-blue-400 justify-center items-center flex flex-col min-h-screen">
        <h1 className="text-white text-xl">
          {user.map((u) => {
            return (
              <div key={u.id}>
                <h1>Login: {u.login}</h1>
                {/* <p>Followers: {u.followers}</p> */}
                <p>Node Id: {u.node_id}</p>
              </div>
            );
          })}
        </h1>
        <button
          // onClick={getUsser}
          className="border border-1 border-l-amber-600 p-2"
        >
          Fetch Data
        </button>
      </div>
    </>
  );
};

export default UseEffectApi;
