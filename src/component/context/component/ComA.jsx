import React from "react";
import ComB from "./ComB";
import { createContext } from "react";

const Biodata = createContext();
function ComA() {
  return (
    <Biodata.Provider value={"Context APi Kia Value mil rhi ha"}>
      <ComB />
    </Biodata.Provider>
  );
}

export default ComA;
export { Biodata };
