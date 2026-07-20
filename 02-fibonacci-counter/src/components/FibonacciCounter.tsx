import { useState } from "react";
import { CustomJumbotron } from "./CustomJumbotron";


const getFibonacci = (n: number): number => {

  if(n == 0 || n == 1){
    return n
  }

  let a = 0;
  let b = 1;
  

  for (let i = 2; i <= n + 1; i++) {
    const next = a + b;
    a = b
    b = next
  }

  return b; 
};


export const FibonacciCounter = () => {
  const [index, setIndex] = useState(0);
  
  const handlePrev = () => {
    index > 0 ? setIndex(index - 1) : ""
  };

  const handleNext = () => {
    setIndex(index + 1)
  };

  const fibonacciNumber = getFibonacci(index);

  return (
    <div className="main-container">
      <CustomJumbotron title="Contador de Serie Fibonacci"/>
      <div className="container">
        <h2 className="title">Contador Fibonacci</h2>
        <p className="number-display">{fibonacciNumber}</p>
        <div className="button-group">
          <button
            onClick={handlePrev}
            disabled={ index == 0 ? true : false }
            className="button"
          >
            Anterior
          </button>
          <button onClick={handleNext} className="button">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};