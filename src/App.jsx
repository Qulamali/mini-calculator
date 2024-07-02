import React, { useState } from "react";
import "./index.scss";
function Calculator() {
  const [First, getFirst] = useState();
  const [Second, getSecond] = useState();
  const [result, setResult] = useState("");

  const handleFunction = (operation) => {
    const num1 = parseFloat(First);
    const num2 = parseFloat(Second);


    if (isNaN(num1) || isNaN(num2)) {
      setResult("There is no number")
    }

    else {
      switch (operation) {
        case "add":
          setResult(num1 + num2)
          getFirst("")
          getSecond("")
          break;
        case "substract":
          setResult(num1 - num2)
          getFirst("")
          getSecond("")
          break;
        case "divide":
          if (num2 === 0) {
            setResult("⚠️Cannot be divided by 0!")
          }
          else {
            setResult(num1 / num2)
            getFirst("")
            getSecond("")
          }
          break;
        case "multiply":
          setResult(num1 * num2)
          getFirst("")
          getSecond("")
          break;
        default:
          break;
      }
    }
  }

  return (
    <div className="calculator">
      <div className="inputs">
        <input type="text" value={First} placeholder="Enter number" onChange={(e) => getFirst(e.target.value)} />
        <input type="text" value={Second} placeholder="Enter number" onChange={(e) => getSecond(e.target.value)} />
      </div>
      <div className="buttons">
        <button onClick={() => handleFunction("add")}>+</button>
        <button onClick={() => handleFunction("substract")}>-</button>
        <button onClick={() => handleFunction("divide")}>/</button>
        <button onClick={() => handleFunction("multiply")}>*</button>
      </div>
      <h2 className="result">{result}</h2>
    </div>
  );
}

export default Calculator;
