import { useState } from "react";
import { CustomJumbotron } from "./CustomJumbotron";

export const WordReverser = () => {

  const [text, setText] = useState('');

  let reversedText = text.split("").reverse().join("");

  return (
    <div className="main-container">
      <CustomJumbotron title="Word Reverser" />
      <div className="container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe algo aquí..."
          className="input"
        />
        <p className="result-label">Texto invertido:</p>
        <p className="result-text">{reversedText}</p>
      </div>
    </div>
  );
};