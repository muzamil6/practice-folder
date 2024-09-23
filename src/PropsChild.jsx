import React from "react";

const PropsChild = (props) => {
  return (
    <div>
      <h1> this props comes from the child{props.title} </h1>

      <p>This component is receiving props from its parent component.</p>
    </div>
  );
};

export default PropsChild;
