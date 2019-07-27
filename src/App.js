import React from "react";
import "./App.css";
import CalculatorGrid from "./components/CalculatorGrid";

class App extends React.Component {
  state = {
    sum: 0
  };

  render() {
    const { sum } = this.state;
    const { clickNumber } = this;
    return (
      <div className="App">
        <h1>Soup's Calculator</h1>
        <CalculatorGrid sum={sum} clickNumber={clickNumber} />
      </div>
    );
  }

  clickNumber = number => {
    this.setState({ sum: number });
  };
}

export default App;
