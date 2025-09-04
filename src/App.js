import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [result, setResult] = useState("");

  const findGreatest = () => {
    if (num1 === "" || num2 === "" || num3 === "") {
      setResult("⚠️ Please enter all three numbers");
      return;
    }

    const a = parseFloat(num1);
    const b = parseFloat(num2);
    const c = parseFloat(num3);

    let greatest = a;

    if (b > greatest) greatest = b;
    if (c > greatest) greatest = c;

    setResult(`The greatest number is ${greatest}`);
  };

  return (
    <div className="container">
      <h1>🔢 Greatest of 3 Numbers</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Enter third number"
        value={num3}
        onChange={(e) => setNum3(e.target.value)}
      />
      <br />

      <button onClick={findGreatest}>Find Greatest</button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;
