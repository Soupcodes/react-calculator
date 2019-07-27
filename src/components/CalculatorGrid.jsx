import React from "react";
import "./Calculator.css";
import NumberButtons from "./NumberButtons";
import Operands from "./Operands";
import Equals from "./EqualsOperand";

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
    const { clickNumber, inputOperand } = this;
    return (
      <div className="calculatorGrid">
        <div className="display">{total}</div>
        <NumberButtons clickNumber={clickNumber} />
        <Operands inputOperand={inputOperand} />
        <Equals returnTotal={this.returnTotal} />
      </div>
    );
  }

  clickNumber = numInput => {
    //WHY DOES DESTRUCTURING FROM CURRENTSTATE NOT ALLOW FOR CONCATANATING NUMBERS
    this.setState(currentState => {
      if (!currentState.operand.length) {
        currentState.inputA += numInput;
        console.log(currentState.inputA, "A");
        return { total: currentState.inputA };
      } else {
        currentState.inputB += numInput;
        console.log(currentState.inputB, "B");
        return { inputB: currentState.inputB };
      }
    });
  };

  inputOperand = operand => {
    this.setState({ operand }, () => console.log(this.state.operand));
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
}

export default CalculatorGrid;
