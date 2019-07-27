import React from "react";
import "./App.css";
import CalculatorGrid from "./components/CalculatorGrid";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Soup's Calculator</h1>
        <CalculatorGrid />
      </div>
    );
  }
}

export default App;
