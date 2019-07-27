import React from "react";
import "./App.css";
import CalculatorGrid from "./components/Calculator";

class App extends React.Component {
  state = {
    sum: 0
  };

  render() {
    const { sum } = this.state;
    return (
      <div className="App">
        <h1>Soup's Calculator</h1>
        <CalculatorGrid sum={sum} />
      </div>
    );
  }
}

export default App;
