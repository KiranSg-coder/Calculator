import React, { useState } from "react";
import "./Calculator.css";

function Xcalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClearButtonClick = () => {
    setInput("");
    setResult("");
  };

  const handleEqualButtonClick = () => {
    try {
      setResult(eval(input).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {[
          "7",
          "8",
          "9",
          "+",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "*",
          "C",
          "0",
          "=",
          "/",
        ].map((button) => (
          <button
            key={button}
            onClick={() => {
              if (button === "C") {
                handleClearButtonClick();
              } else if (button === "=") {
                handleEqualButtonClick();
              } else {
                handleButtonClick(button);
              }
            }}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Xcalculator;
