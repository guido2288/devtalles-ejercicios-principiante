import { useState } from "react";
import { CustomJumbotron } from "./CustomJumbotron";

// Un tipo para definir los posibles resultados.
type ResultType = "par" | "inpar" | "invalido" | null;

export const EvenOrOddChecker = () => {

  const [inputValue, setInputValue] = useState('');
  const [resultType, setResultType] = useState<ResultType>(null);

  const checkNumber = () => {

    if (inputValue === "" || isNaN(Number(inputValue))) {
      setResultType("invalido");
      return;
    }


    const value = parseInt(inputValue);

    if (value % 2 == 0) {
      setResultType("par")
    } else {
      setResultType("inpar")
    }

  };

  // TODO: Implementa la lógica de `getResult`.
  const getResult = () => {

    switch (resultType) {
      case "par":
        return <p className="result even">Es Par</p>

      case "inpar":
        return <p className="result odd">Es Impar</p>

      default:
        return <p className="result">Esperando un número...</p>;

    }

  };

  return (
    <div className="main-container">
      <CustomJumbotron title="Verificador Par o Impar" />
      <div className="container">
        <div className="controls">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ingresa un número"
            className="input"
          />
          <button onClick={() => checkNumber()} className="button">
            Verificar
          </button>
        </div>
        <div className="result-container">{getResult()}</div>
      </div>
    </div>
  );
};