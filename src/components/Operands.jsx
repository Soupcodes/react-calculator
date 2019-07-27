import React from "react";

const Operands = () => {
  const operands = {
    decimal: ".",
    parentheses: "()",
    plus: "+",
    minus: "-",
    multiply: "x",
    divide: "/",
    equal: "="
  };

  return Object.keys(operands).map(operand => {
    return (
      <button key={operand} className={operand}>
        {operands[operand]}
      </button>
    );
  });
};

export default Operands;
