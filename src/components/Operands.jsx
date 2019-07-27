import React from "react";

const Operands = props => {
  const operands = {
    plus: "+",
    minus: "-",
    multiply: "*",
    divide: "/"
  };

  return Object.keys(operands).map(operand => {
    return (
      <button
        key={operand}
        className={operand}
        onClick={() => {
          props.inputOperand(operands[operand]);
        }}
      >
        {operands[operand]}
      </button>
    );
  });
};

export default Operands;
