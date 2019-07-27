import React from "react";
import "./Calculator.css";
import NumberButtons from "./NumberButtons";
import Operands from "./Operands";

class CalculatorGrid extends React.Component {
  state = {
    numInput: 0,
    operandInput: 0
  };

  render() {
    const { sum, clickNumber } = this.props;
    return (
      <div className="calculatorGrid">
        <div className="display">{sum}</div>
        <NumberButtons clickNumber={clickNumber} />
        <Operands />
      </div>
    );
  }

  // addToSum = event => {
  //   this.setState(currState => {

  //   })
  // };
}

export default CalculatorGrid;
