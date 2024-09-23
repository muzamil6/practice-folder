import React from "react";
import { useContext } from "react";
import { Biodata } from "./ComA";
function ComC() {
  const contextApiConcept = useContext(Biodata);
  return (
    <>
      <div>ComC {contextApiConcept}</div>
    </>
  );
}

export default ComC;
