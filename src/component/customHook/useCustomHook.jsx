import React, { useEffect } from "react";

const CustomHook = (count) => {
  useEffect(() => {
    if (count >= 1) {
      document.title = `chats(${count})`;
    } else {
      document.title = `chats`;
    }
    console.log("UseEffect called first");
  }, [count]);
};

export default CustomHook;
