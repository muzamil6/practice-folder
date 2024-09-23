// import React, { useState, useEffect } from "react";

// const Theme = [
//   {
//     name: "Light",
//     primary: "#FFFFFF",
//     background: "#821131",
//     accent: "#FF4E88",
//   },
//   { name: "Dark", primary: "#000000", background: "#00712D", accent: "00712D" },
//   {
//     name: "Blue",
//     primary: "#0000FF",
//     background: "#F9DBBA",
//     accent: "#A02334",
//   },
//   { name: "Red", primary: "#FF0000", background: "#2E073F", accent: "#2E073F" },
// ];

// const Practice = () => {
//   //   const [name, setName] = useState("");
//   const [currentTheme, setCurrentTheme] = useState("");
//   useEffect(() => {}, []);
//   return (
//     <>
//       <div>
//         <h1>
//           {name} <br />
//           <button className="" onClick={() => setName("John")}>
//             Click
//           </button>
//         </h1>
//       </div>
//     </>
//   );
// };

// export default Practice;

// import React, { useEffect, useState } from "react";
// function Conditional() {
//   const [isMounted, setIsMount] = useState(false);
//   //   console.log(isMounted, " ismount");
//   //   console.log(setIsMount, " setIsMount");

//   useEffect(() => {
//     if (isMounted) {
//       console.log("Componets Mount");
//     }
//   }, [isMounted]);
//   return (
//     <>
//       <div>
//         <button onClick={() => setIsMount(!isMounted)}>
//           {isMounted ? "Unmounted" : "Mount"}
//         </button>
//       </div>
//     </>
//   );
// }

// export default Conditional;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

function Fetchdata() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts or updates

    // Cleanup function (optional) to handle unsubscriptions or resource cleanup
    return () => {
      // Cleanup logic here, if needed
    };
  }, []); // Empty dependency array means the effect runs only once after the initial render

  return (
    <div>
      {/* {data && (
        <ul>
          {data.map((item) => (
            <>
              <li key={item.id}>{item.title}</li>
              <Button variant="contained">Button </Button>
            </>
          ))}
        </ul>
      )} */}

      <Button variant="contained">Button </Button>
    </div>
  );
}

//   useEffect(() => {
//     const fetData = async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const dataJson = await response.json();
//         setData(dataJson);
//       } catch (error) {
//         console.log("data cont get");
//       }
//     };
//     fetData;
//     return () => {
//       console.log("cleanup");
//     };
//   }, []);
//   return (
//     <>
//       <div>
//         {data && (
//           <ul>
//             {data.map((item) => (
//               <li key={item.id}>{item.title}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </>
//   );
// }
export default Fetchdata;
