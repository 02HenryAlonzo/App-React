import React from "react";
import { useState } from "react"
import './InputAmount.css'

export const Input = () => {
  const [monto, setMonto] = useState("");
  const [descripcion, setDescription] = useState("");

  const handleMontoChange = (e) => {
    setMonto(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="ContainIput">
      <div className="container">
        <h2 className="title">Entrada</h2>

        <div className="inputContainer">
          <label className="label">Monto</label>
          <input
            type="text"
            placeholder="$500"
            value={monto}
            onChange={handleMontoChange}
            className="input"
          />
        </div>

        <div className="inputContainer">
          <label className="label">Descripción</label>
          <textarea
            value={descripcion}
            onChange={handleDescripcionChange}
            className="textarea"
          />
        </div>
      </div>
    </div>
  );
};