import React, { useState } from "react";
import "./Calculator.css"; 


const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (e) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <div className="top-row">
          <button onClick={() => handleClick("C")} className="clear">
            AC
          </button>
          <button onClick={() => handleClick("DEL")} className="del">
            DEL
          </button>
          <button onClick={() => handleClick("/")} className="operator">
            /
          </button>
        </div>
        <div className="grid">
          {["7", "8", "9", "*"].map((value) => (
            <button key={value} onClick={() => handleClick(value)}>
              {value}
            </button>
          ))}
          {["4", "5", "6", "-"].map((value) => (
            <button key={value} onClick={() => handleClick(value)}>
              {value}
            </button>
          ))}
          {["1", "2", "3", "+"].map((value) => (
            <button key={value} onClick={() => handleClick(value)}>
              {value}
            </button>
          ))}
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("=")} className="equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
