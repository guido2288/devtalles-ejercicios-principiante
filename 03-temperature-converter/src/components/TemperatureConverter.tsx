import { useState } from "react";
import { CustomJumbotron } from "./CustomJumbotron";

export const TemperatureConverter = () => {

  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value;

    setCelsius(value);

    if (value === "") {
      setFahrenheit("");
      return
    }

    const numberValue = +value;
    const result = (numberValue * 9 / 5) + 32;

    setFahrenheit(result.toFixed(2));
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFahrenheit(value);

    if (value === "") {
      setCelsius("");
      return
    }

    const numberValue = +value;
    const result = (numberValue - 32) * 5 / 9;

    setCelsius(result.toFixed(2));

  };

  return (
    <div className="main-container">
      <CustomJumbotron title="Convertidor de Temperatura" />
      <div className="container">
        <div className="input-group">
          <label htmlFor="celsius">Celsius (°C)</label>
          <input
            id="celsius"
            type="number"
            value={celsius}
            onChange={(e) => handleCelsiusChange(e)}
            className="input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="fahrenheit">Fahrenheit (°F)</label>
          <input
            id="fahrenheit"
            type="number"
            value={fahrenheit}
            onChange={(e) => handleFahrenheitChange(e)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};