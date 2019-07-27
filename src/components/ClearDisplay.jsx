import React from "react";

const ClearDisplay = props => {
  return (
    <button
      key="C"
      className="clear"
      onClick={() => {
        props.clearDisplay();
      }}
    >
      C
    </button>
  );
};

export default ClearDisplay;
