import React from "react";
import "./Calculator.css";
import NumberButtons from "./NumberButtons";
import Operands from "./Operands";

const CalculatorGrid = props => {
  const { sum } = props;
  return (
    <div className="calculatorGrid">
      <div className="display">{sum}</div>
      <NumberButtons />
      <Operands />
    </div>
  );
};

export default CalculatorGrid;
