import { useState } from "react";
import { CustomJumbotron } from "./CustomJumbotron";

export const InputSumator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const sum =  Number(num1) + Number(num2);

  return (
    <div className="main-container">
      <CustomJumbotron title="Sumador de Inputs"/>
      <div className="container">
        <div className="input-group">
          <input
            type="number"
            value={num1}
            onChange={(e) => {setNum1(e.target.value)}}
            className="input"
            aria-label="Primer número"
          />
          <span className="operator">+</span>
          <input
            type="number"
            value={num2}
            onChange={(e) => {setNum2(e.target.value)}}
            className="input"
            aria-label="Segundo número"
          />
        </div>
        <div className="result">
          <span className="input">=</span>
          <p className="sum">{sum}</p>
        </div>
      </div>
    </div>
  );
};