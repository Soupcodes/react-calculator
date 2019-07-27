import React from "react";

const NumberButtons = props => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => {
    return (
      <button key={number} className={`button${number}`}>
        {number}
      </button>
    );
  });
};

export default NumberButtons;
