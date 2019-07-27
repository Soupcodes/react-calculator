import React from "react";
import "./Calculator.css";
import NumberButtons from "./NumberButtons";
import Operands from "./Operands";
import Equals from "./EqualsOperand";
import ClearDisplay from "./ClearDisplay";

class CalculatorGrid extends React.Component {
  state = {
    inputA: "",
    operand: "",
    inputB: "",
    total: 0,
    runOperand: {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b
    }
  };

  render() {
    const { total } = this.state;
    const { clickNumber, inputOperand, clearDisplay } = this;
    return (
      <div className="calculatorGrid">
        <div className="display">{total}</div>
        <NumberButtons clickNumber={clickNumber} />
        <Operands inputOperand={inputOperand} />
        <Equals returnTotal={this.returnTotal} />
        <ClearDisplay clearDisplay={clearDisplay} />
      </div>
    );
  }

  clickNumber = numInput => {
    //WHY DOES DESTRUCTURING FROM CURRENTSTATE NOT ALLOW FOR CONCATANATING NUMBERS
    this.setState(currentState => {
      if (!currentState.operand.length) {
        currentState.inputA += numInput;
        return { total: currentState.inputA };
      } else {
        currentState.inputB += numInput;
        return { total: currentState.inputB };
      }
    });
  };

  inputOperand = operand => {
    this.setState(currentState => {
      return { inputA: +currentState.total, operand };
    });
  };

  returnTotal = () => {
    this.setState(currentState => {
      const updateDisplay = currentState.runOperand[currentState.operand];
      return {
        total: updateDisplay(+currentState.inputA, +currentState.inputB),
        inputB: ""
      };
    });
  };

  clearDisplay = () => {
    this.setState({ total: 0, inputA: "", inputB: "", operand: "" });
  };
}

export default CalculatorGrid;
