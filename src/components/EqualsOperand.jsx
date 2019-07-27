import React from "react";

const Equals = props => {
  return (
    <button
      key="equals"
      className="equals"
      onClick={() => {
        props.returnTotal();
      }}
    >
      =
    </button>
  );
};

export default Equals;
